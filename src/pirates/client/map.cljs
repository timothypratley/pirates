(ns pirates.client.map
  (:require
    [cljsjs.three]
    [pirates.client.keyboard :as keyboard]
    [pirates.client.scenery :as scenery]
    [pirates.client.towns :as towns]
    [pirates.client.world :as world]
    [pirates.client.text-sprite :as text-sprite]
    [reagent.core :as reagent]))

(defn create-renderer [element]
  (doto
    (js/THREE.WebGLRenderer. #js {:antialias true :canvas element})
    ;; TODO: make externs for advanced compilation
    (.setPixelRatio js/window.devicePixelRatio)))

(defn map-mouse [ship e]
  (let [rect (.getBoundingClientRect (.-target e))
        x (- (- (.-clientX e) (.-left rect)) (/ (.-width rect) 2))
        y (- (/ (.-height rect) 2) (- (.-clientY e) (.-top rect)))]
    (set! (.. ship -rotation -y)
          (js/Math.atan2 (- y) (- x)))))

(defn world-map [app-state]
  (let [raf (atom nil)
        camera (doto (js/THREE.PerspectiveCamera. 75 2 0.1 1000)
                 (-> (.-position) (.set 0 5 10))
                 (.lookAt (js/THREE.Vector3. 0 0 0)))
        ship (doto (js/THREE.Object3D.)
               (.add camera)
               (.add (text-sprite/make (:uid @app-state))))
        scene (doto (js/THREE.Scene.)
                (.add ship))
        keyboard (keyboard/create)
        mouse-down (atom false)
        resize (atom nil)]
    (scenery/load-model "pirate-ship-large.json" ship)
    (scenery/create-terrain scene)
    (towns/load-towns scene (:towns @app-state))
    (scenery/loadSkyBox scene)
    (reagent/create-class
      {:display-name "world-map"
       :reagent-render
       (fn world-map-render [app-state]
         #_(when-let [[x y z] (get-in @app-state [:camera :position])]
             (.set (.-position camera) x y z))
         [:canvas
          {:style {:cursor "pointer"
                   :width "100%"}
           :unselectable "on"
           :on-click
           (fn map-click [e]
             (map-mouse ship e))
           :on-wheel
           (fn [e]
             (keyboard/altitude camera (/ 500 (.-deltaY e))))
           :on-mouse-down
           (fn map-mouse-down [e]
             (when (zero? (.-button e))
               (reset! mouse-down true)))
           :on-mouse-up
           (fn map-mouse-up [e]
             (when (zero? (.-button e))
               (reset! mouse-down false)))
           :on-blur
           (fn map-blur [e]
             (reset! mouse-down false))
           :on-mouse-move
           (fn map-mouse-move [e]
             (when @mouse-down
               (map-mouse ship e)))}])
       :component-did-mount
       (fn world-map-did-mount [this]
         (let [element (.getDOMNode this)
               renderer (create-renderer element)
               resize-renderer (fn a-resize-renderer []
                                 (let [w (* 0.9 js/window.innerWidth)
                                       h (* 0.7 js/window.innerHeight)]
                                   (set! (.-aspect camera) (/ w h))
                                   (.updateProjectionMatrix camera)
                                   (.setSize renderer w h)))
               directional-light-position (js/THREE.Vector3. -600 300 600)
               water (scenery/create-water scene renderer camera directional-light-position)]
           (resize-renderer)
           (reset! resize resize-renderer)
           (js/window.addEventListener "resize" resize-renderer)
           (keyboard/listen keyboard)
           (doto (js/THREE.DirectionalLight. 0xffff88 1)
             (-> (.-position) (.copy directional-light-position))
             (->> (.add scene)))
           (.add scene (js/THREE.AmbientLight. 0x888888))
           ((fn world-map-three-render [t]
              ;; TODO: just set! on this?
              (reset! raf (js/window.requestAnimationFrame world-map-three-render))
              ;; other players
              (doseq [[player-id [x z heading]] (:players @app-state)
                      :when (not= player-id (:uid @app-state))
                      :let [player (or (.getObjectByName scene player-id)
                                       (let [o (js/THREE.Object3D.)]
                                         (set! (.-name o) player-id)
                                         (.add o (text-sprite/make player-id))
                                         (scenery/load-model "pirate-ship-large.json" o)
                                         (.add scene o)
                                         o))]]
                (.set (.-position player) x 0 z)
                (.set (.-rotation player) 0 heading 0))
              ;; wave rolling
              (when-let [model (aget (.-children ship) 1)]
                (set! (.. model -rotation -z) (/ (js/Math.sin (/ t 500)) 20))
                (set! (.. model -rotation -x) (/ (js/Math.sin (/ t 600)) 20)))
              (keyboard/handle-keyboard keyboard camera ship)
              ;; TODO: add an extern for advanced
              ;; TODO: put x/y in game instead of ship?
              (when (= (:status @app-state) :sailing)
                (.translateX ship -0.05)
                (swap! app-state assoc :user
                       [(.. ship -position -x)
                        (.. ship -position -z)
                        (.. ship -rotation -y)])
                (when-let [town (world/near-town? ship (:towns @app-state))]
                  (swap! app-state assoc
                         :status :in-port
                         :town town)))
              ;;              (set! (.. camera -position -x) (.. ship -position -x))
              ;;(set! (.. camera -position -z) (+ (.. ship -position -z) 10))
              ;;(.lookAt camera ship.position)
              ;; TODO: how to access in advanced compilation?
              (set! (.. water -material -uniforms -time -value)
                    (+ (.. water -material -uniforms -time -value) (/ 1 480)))
              (.render water)
              (.render renderer scene camera)))))
       :component-will-unmount
       (fn world-map-will-unmount [this]
         ;; TODO: less atomizing
         (js/window.removeEventListener "resize" @resize)
         (js/window.cancelAnimationFrame @raf)
         (keyboard/unlisten keyboard))})))

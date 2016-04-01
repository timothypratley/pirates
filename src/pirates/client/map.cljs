(ns pirates.client.map
  (:require
    [cljsjs.three]
    [pirates.client.keyboard :as keyboard]
    [pirates.client.scenery :as scenery]
    [pirates.client.towns :as towns]
    [pirates.client.scene :as scene]
    [reagent.core :as reagent]))

(defn create-renderer [element]
  (doto (js/THREE.WebGLRenderer. #js {:antialias true :canvas element})
    ;; TODO: make externs for advanced compilation
    (.setPixelRatio js/window.devicePixelRatio)))

(defn map-mouse [ship e]
  (let [rect (.getBoundingClientRect (.-target e))
        x (- (- (.-clientX e) (.-left rect)) (/ (.-width rect) 2))
        y (- (/ (.-height rect) 2) (- (.-clientY e) (.-top rect)))]
    (set! (.. ship -rotation -y) (js/Math.atan2 (- y) (- x)))))

(defn world-map [app-state]
  (let [raf (atom nil)
        camera (doto (js/THREE.PerspectiveCamera. 75 2 0.1 1000)
                 (-> (.-position) (.set 0 5 10))
                 (.lookAt (js/THREE.Vector3. 0 0 0)))
        directional-light-position (js/THREE.Vector3. -600 300 600)
        scene (scene/make-scene directional-light-position)
        ship (doto (scene/make-ship scene (:uid @app-state "Unknown"))
               (.add camera))
        keyboard (keyboard/create)
        mouse-down (atom false)
        resize (atom nil)]
    (scenery/create-terrain scene)
    (towns/load-towns scene (:towns @app-state))
    (scenery/loadSkyBox scene)
    (reagent/create-class
      {:display-name "world-map"
       :reagent-render
       (fn world-map-render [app-state]
         (when-let [[x y z] (get-in @app-state [:camera :position])]
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
               water (scenery/create-water scene renderer camera directional-light-position)
               resize-renderer (fn a-resize-renderer []
                                 (let [w (* 0.9 js/window.innerWidth)
                                       h (* 0.7 js/window.innerHeight)]
                                   (set! (.-aspect camera) (/ w h))
                                   (.updateProjectionMatrix camera)
                                   (.setSize renderer w h)))]
           (resize-renderer)
           (reset! resize resize-renderer)
           (js/window.addEventListener "resize" resize-renderer)
           (keyboard/listen keyboard)
           ((fn world-map-animate [t]
              ;; TODO: just set! on this?
              (reset! raf (js/window.requestAnimationFrame world-map-animate))
              (keyboard/handle-keyboard app-state keyboard camera ship)
              (scene/world-map-three-render t app-state renderer scene camera ship water))
             0)))
       :component-will-unmount
       (fn world-map-will-unmount [this]
         ;; TODO: less atomizing
         (js/window.removeEventListener "resize" @resize)
         (js/window.cancelAnimationFrame @raf)
         (keyboard/unlisten keyboard))})))

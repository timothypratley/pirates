(ns pirates.map
  (:require
    [pirates.keyboard :as kb]
    [goog.events.KeyCodes :as KeyCodes]
    [cljsjs.three]
    [cljsjs.three-water-material]
    [reagent.core :as reagent]))

(defn loadSkyBox [scene]
  (let [aCubeMap (js/THREE.ImageUtils.loadTextureCube
                   #js ["img/px.jpg"
                        "img/nx.jpg"
                        "img/py.jpg"
                        "img/ny.jpg"
                        "img/pz.jpg"
                        "img/nz.jpg"])]
    (set! (.-format aCubeMap) js/THREE.RGBFormat)
    (let [aShader (aget js/THREE.ShaderLib "cube")]
      (set! (.-value (aget (.-uniforms aShader) "tCube")) aCubeMap)
      (let [fs (.-fragmentShader aShader)
            vs (.-vertexShader aShader)
            us (.-uniforms aShader)
            aSkyBoxMaterial
            (js/THREE.ShaderMaterial.
              #js {:fragmentShader fs,
                   :vertexShader vs,
                   :uniforms us,
                   :depthWrite false,
                   :side js/THREE.BackSide})
            aSkybox (js/THREE.Mesh.
                      (js/THREE.BoxGeometry. 1000, 1000, 1000),
                      aSkyBoxMaterial)]
        (.add scene aSkybox)))))

(defn get-height-data [img]
  (let [canvas (js/document.createElement "canvas")
        w (.-width img)
        h (.-height img)]
    (set! (.-width canvas) w)
    (set! (.-height canvas) h)
    (let [context (.getContext canvas "2d")]
      (.drawImage context img 0 0)
      (for [[r g b a] (-> context
                          (.getImageData 0 0 w h)
                          (.-data)
                          (array-seq)
                          (->> (partition 4)))]
        (let [z (/ (+ r g b) 50)]
          (if (< z 2) -1 z))))))

(defn create-terrain [scene]
  (let [img (js/Image.)]
    (set! (.-onload img)
          (fn create-terrain-img-load []
            (let [w (.-width img)
                  h (.-height img)
                  geometry (js/THREE.PlaneGeometry. (* w 10) (* h 10) (dec w) (dec h))
                  ;;texture (js/THREE.ImageUtils.loadTexture "img/caribbean.png")
                  ;;material (js/THREE.MeshLambertMaterial. #js {"map" texture})
                  material (js/THREE.MeshBasicMaterial. #js {:color 0x004400 :side js/THREE.DoubleSide})
                  plane (js/THREE.Mesh. geometry material)
                  data (get-height-data img)]
              (set! (.. plane -rotation -x) (/ js/Math.PI -2))
              (dotimes [i (* w h)]
                (set! (-> plane .-geometry .-vertices (aget i) .-z) (nth data i)))
              (.add scene plane))))
    (set! (.-src img) "img/caribbean.png")))

(defn load-model [filename parent]
  (let [loader (js/THREE.ObjectLoader.)]
    (.load loader (str "models/" filename)
           (fn [obj]
             (set! (.-x obj.position) -0.5)
             (.add parent obj)))))

(defn create-renderer [element]
  (doto
    (js/THREE.WebGLRenderer. #js {:antialias true :canvas element})
    ;; TODO: make externs for advanced compilation
    (.setPixelRatio js/window.devicePixelRatio)))

(defn altitude [camera dy]
  (set! (.. camera -position -y)
        (min 500 (max 1 (+ (.. camera -position -y)
                           (/ (.. camera -position -y) dy))))))

(defn handle-keyboard [kb camera ship]
  (doseq [[k action]
          [[KeyCodes/LEFT
            (fn a-left-action []
              (set! (.. ship -rotation -y)
                    (+ (.. ship -rotation -y) 0.03))
              (when-let [model (aget (.-children ship) 0)]
                (set! (.. model -rotation -x) -0.2)))]
           [KeyCodes/RIGHT
            (fn a-right-action []
              (set! (.. ship -rotation -y)
                    (- (.. ship -rotation -y) 0.03))
              (when-let [model (aget (.-children ship) 0)]
                (set! (.. model -rotation -x) 0.2)))]
           [KeyCodes/UP
            (fn an-up-action []
              (altitude camera 10))]
           [KeyCodes/DOWN
            (fn a-down-action []
              (altitude camera -10))]]]
    (when (kb/pressed? kb k)
      (action))))

(def towns
  [[100 110]
   [-300 100]
   [-100 -100]
   [100 -150]])

(defn load-towns [scene]
  (doseq [[x z] towns]
    (let [town (js/THREE.Mesh.
                 (js/THREE.BoxGeometry. 10 10 10)
                 (js/THREE.MeshBasicMaterial. #js {:color "red"}))]
      (set! (.. town -position -x) x)
      (set! (.. town -position -z) z)
      (.add scene town))))

(defn create-water [scene renderer camera directionalLight]
  (let [normals (js/THREE.ImageUtils.loadTexture. "img/waternormals.jpg")]
    (set! (.-wrapS normals) js/THREE.RepeatWrapping)
    (set! (.-wrapT normals) js/THREE.RepeatWrapping)
    (let [water (js/THREE.Water.
                  renderer camera scene
                  #js {:textureWidth 512,
                       :textureHeight 512,
                       :waterNormals normals,
                       :alpha 0.8,
                       :sunDirection (-> (.-position directionalLight)
                                         (.clone)
                                         (.normalize))
                       :sunColor 0xffffff,
                       :waterColor 0x001e0f,
                       :distortionScale 35})
          mirror (js/THREE.Mesh.
                   (js/THREE.PlaneBufferGeometry. 1000, 1000),
                   (.-material water))]
      (set! (.. mirror -rotation -x) (/ js/Math.PI -2))
      (.add mirror water)
      (.add scene mirror)
      water)))

(def epsilon
  1)

(defn near? [x1 z1 x2 z2]
  (and (< (js/Math.abs (- x2 x1)) epsilon)
       (< (js/Math.abs (- z2 z1)) epsilon)))

(defn near-city? [ship]
  (some
    (fn [[townx townz]]
      (near? (.. ship -position -x) (.. ship -position -z)
             townx townz))
    towns))

(defn map-mouse [ship e]
  (let [rect (.getBoundingClientRect (.-target e))
        x (- (- (.-clientX e) (.-left rect)) (/ (.-width rect) 2))
        y (- (/ (.-height rect) 2) (- (.-clientY e) (.-top rect)))]
    (set! (.. ship -rotation -y)
          (js/Math.atan2 (- y) (- x)))))

(defn world-map [game]
  (let [camera (js/THREE.PerspectiveCamera. 75 2 0.1 1000)
        scene (js/THREE.Scene.)
        raf (atom nil)
        ship (js/THREE.Object3D.)
        kb (kb/create)
        mouse-down (atom false)
        resize (atom nil)]
    (set! (.. camera -position -y) 5)
    (load-model "pirate-ship-large.json" ship)
    (.add scene ship)
    (create-terrain scene)
    (load-towns scene)
    (.add scene (js/THREE.AmbientLight. 0x888888))
    (loadSkyBox scene)

    (reagent/create-class
      {:display-name "world-map"
       :reagent-render
       (fn world-map-render [game]
         [:canvas
          {:style {:cursor "pointer"
                   :width "100%"}
           :unselectable "on"
           :on-click
           (fn map-click [e]
             (map-mouse ship e))
           :on-wheel
           (fn [e]
             (altitude camera (/ 500 (.-deltaY e))))
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
               (map-mouse ship e)))
           :on-resize
           (fn map-resize [e]
             (prn "hi"))}])
       :component-did-mount
       (fn world-map-did-mount [this]
         (let [element (.getDOMNode this)
               renderer (create-renderer element)
               directionalLight (js/THREE.DirectionalLight. 0xffff88 1)
               on-resize (fn []
                           (let [w (* 0.9 js/window.innerWidth)
                                 h (* 0.7 js/window.innerHeight)]
                             (set! (.-aspect camera) (/ w h))
                             (.updateProjectionMatrix camera)
                             (.setSize renderer w h)))]
           (reset! resize on-resize)
           (on-resize)
           (js/window.addEventListener "resize" on-resize)
           (kb/listen kb)
           (.set (.-position directionalLight) -600 300 600)
           (.add scene directionalLight)
           (let [water (create-water scene renderer camera directionalLight)]
             ((fn world-map-three-render [t]
                ;; TODO: just set! on this?
                (reset! raf (js/window.requestAnimationFrame world-map-three-render))
                (handle-keyboard kb camera ship)
                ;; TODO: add an extern for advanced
                ;; TODO: put x/y in game instead of ship?
                (when (= (:status @game) :sailing)
                  (.translateX ship -0.05))
                (when (near-city? ship)
                  (swap! game assoc :status :in-port))
                (set! (.. camera -position -x) (.. ship -position -x))
                (set! (.. camera -position -z) (+ (.. ship -position -z) 10))
                (when-let [model (aget (.-children ship) 0)]
                  (set! (.. model -rotation -z) (/ (js/Math.sin (/ t 500)) 20)))
                (.lookAt camera ship.position)
                ;; TODO: how to access in advanced compilation?
                (set! (.. water -material -uniforms -time -value)
                      (+ (.. water -material -uniforms -time -value) (/ 1 480)))
                (.render water)
                (.render renderer scene camera))))))
       :component-will-unmount
       (fn world-map-will-unmount [this]
         ;; TODO: less atomizing
         (js/window.removeEventListener "resize" @resize)
         (js/window.cancelAnimationFrame @raf)
         (kb/unlisten kb))})))

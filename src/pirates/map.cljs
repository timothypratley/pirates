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
              (set! (.. plane -rotation -z) js/Math.PI)
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

(def width 800)
(def height 600)

(defn create-renderer [element]
  (doto
    (js/THREE.WebGLRenderer. #js {:antialias true :canvas element})
    ;; TODO: make externs for advanced compilation
    (.setPixelRatio js/window.devicePixelRatio)
    (.setSize width height)))

(def towns
  [[100 100]
   [-300 100]
   [-100 -100]
   [100 -100]])

(defn world-map [game]
  (let [camera (js/THREE.PerspectiveCamera. 75 (/ width height) 0.1 1000)
        scene (js/THREE.Scene.)
        raf (atom nil)
        ship (js/THREE.Object3D.)
        kb (kb/create)]
    (doseq [[x z] towns]
      (let [town (js/THREE.Mesh.
                   (js/THREE.BoxGeometry. 10 10 10)
                   (js/THREE.MeshBasicMaterial. #js {:color "red"}))]
        (set! (.. town -position -x) x)
        (set! (.. town -position -z) z)
        (.add scene town)))

    (load-model "pirate-ship-large.json" ship)

    (set! (.. camera -position -y) 5)
    (.add scene ship)
    (create-terrain scene)

    (let [al (js/THREE.AmbientLight. 0x888888)]
      (.add scene al))

    (loadSkyBox scene)

    (reagent/create-class
      {:display-name "world-map"
       :reagent-render
       (fn world-map-render [game]
         [:canvas
          #_[:img {:src "img/caribbean.png"}]])
       :component-did-mount
       (fn world-map-did-mount [this]
         (let [renderer (create-renderer (.getDOMNode this))
               directionalLight (js/THREE.DirectionalLight. 0xffff88 1)]
           (kb/listen kb)
           (.set (.-position directionalLight) -600 300 600)
           (.add scene directionalLight)
           (let [waterNormals (js/THREE.ImageUtils.loadTexture. "img/waternormals.jpg")]
             (set! (.-wrapS waterNormals) js/THREE.RepeatWrapping)
             (set! (.-wrapT waterNormals) js/THREE.RepeatWrapping)

             (let [d (.normalize (.clone (.-position directionalLight)))
                   water (js/THREE.Water.
                           renderer camera scene
                           #js {:textureWidth 512,
                                :textureHeight 512,
                                :waterNormals waterNormals,
                                :alpha 0.8,
                                :sunDirection d,
                                :sunColor 0xffffff,
                                :waterColor 0x001e0f,
                                :distortionScale 35})
                   aMeshMirror (js/THREE.Mesh.
                                 (js/THREE.PlaneBufferGeometry. 1000, 1000),
                                 (.-material water))]
               (set! (.. aMeshMirror -rotation -x) (* js/Math.PI -0.5))
               (.add aMeshMirror water)
               (.add scene aMeshMirror)
               ((fn world-map-three-render [t]
                  (reset! raf (js/window.requestAnimationFrame world-map-three-render))

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
                              (set! (.. camera -position -y)
                                    (min 500 (+ (.. camera -position -y)
                                                (/ (.. camera -position -y) 10)))))]
                           [KeyCodes/DOWN
                            (fn a-down-action []
                              (set! (.. camera -position -y)
                                    (max 1 (- (.. camera -position -y)
                                              (/ (.. camera -position -y) 10)))))]]]
                    (when (kb/pressed? kb k)
                      (action)))

                  ;; TODO: add an extern for advanced
                  (.translateX ship -0.05)
                  (set! (.. camera -position -x) (.. ship -position -x))
                  (set! (.. camera -position -z) (- (.. ship -position -z) 10))
                  (when-let [model (aget (.-children ship) 0)]
                    (set! (.. model -rotation -z) (/ (js/Math.sin (/ t 500)) 20)))
                  (.lookAt camera ship.position)
                  ;; TODO: how to access in advanced compilation?
                  (set! (.. water -material -uniforms -time -value)
                        (+ (.. water -material -uniforms -time -value) (/ 1 480)))
                  (.render water)
                  (.render renderer scene camera)))))))
       :component-will-unmount
       (fn world-map-will-unmount [this]
         (js/window.cancelAnimationFrame @raf)
         (kb/unlisten kb))})))

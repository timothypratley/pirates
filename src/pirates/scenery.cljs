(ns pirates.scenery
  (:require
    [cljsjs.three]
    [cljsjs.ocean]))

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
            aSkybox
            (js/THREE.Mesh.
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

(defn create-water [scene renderer camera directional-light-position]
  (let [normals (js/THREE.ImageUtils.loadTexture. "img/waternormals.jpg")]
    (set! (.-wrapS normals) js/THREE.RepeatWrapping)
    (set! (.-wrapT normals) js/THREE.RepeatWrapping)
    (let [water (js/THREE.Water.
                  renderer camera scene
                  #js {:textureWidth 512,
                       :textureHeight 512,
                       :waterNormals normals,
                       :alpha 0.8,
                       :sunDirection (-> directional-light-position
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

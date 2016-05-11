(ns pirates.client.scene
  (:require
    [pirates.client.world :as world]
    [pirates.client.interpolate :as interpolate]
    [pirates.client.scenery :as scenery]
    [pirates.client.text-sprite :as text-sprite]))

(defn make-scene [directional-light-position]
  (doto (js/THREE.Scene.)
    (.add (js/THREE.AmbientLight. 0x888888))
    (.add (doto (js/THREE.DirectionalLight. 0xffff88 1)
            (-> (.-position) (.copy directional-light-position))))))

(defn make-ship [scene id]
  (doto (js/THREE.Object3D.)
    (-> (.-name) (set! id))
    (.add (text-sprite/make id))
    (scenery/load-model "pirate-ship-large.json")
    (.add (doto (js/THREE.Object3D.)
            (-> (.-name) (set! "firing"))))
    (->> (.add scene))))

(defn make-projectile [scene id]
  (doto (js/THREE.Object3D.)
    (-> (.-name) (set! id))
    (-> (.. -position -y) (set! 1))
    (.add (js/THREE.Mesh.
            (js/THREE.SphereGeometry. 0.5)
            (js/THREE.MeshNormalMaterial.)))
    (->> (.add scene))))

(defn wave-roll [ship t steer]
  (when-let [model (.getObjectByName ship "model")]
    (set! (.. model -rotation -z) (/ (js/Math.sin (/ t 500)) 20))
    (if (zero? steer)
      (set! (.. model -rotation -x) (/ (js/Math.sin (/ t 600)) 20))
      (set! (.. model -rotation -x) (* steer 0.2)))))

(defn other-players [t app-state scene]
  (let [at (:at @app-state)]
    (doseq [[player-id {[x2 z2 heading2 steer] :status}] (:players @app-state)
            :when (not= player-id (:uid @app-state))
            :let [ship (or (.getObjectByName scene player-id)
                           (make-ship scene player-id))
                  heading1 (.. ship -rotation -y)
                  x1 (.. ship -position -x)
                  z1 (.. ship -position -z)
                  [x z heading] (interpolate/predict [x1 z1 heading1] [x2 z2 heading2] at)]]
      (.set (.-position ship) x 0 z)
      (set! (.. ship -rotation -y) heading)
      (wave-roll ship (+ t heading) steer))))

;; TODO: mix projectiles and players as entities?
(defn update-projectiles [t app-state scene]
  (let [{:keys [at projectiles]} @app-state]
    (doseq [[projectile-id {:keys [x z heading]}] projectiles
            :let [projectile (or (.getObjectByName scene projectile-id)
                                 (make-projectile scene projectile-id))]]
      (.set (.-position projectile) x 1 z)
      (set! (.. projectile -rotation -y) heading))))

(defn blast [fire]
  (let [g (doto (js/THREE.Geometry.)
            (-> (.-vertices) (.push (js/THREE.Vector3. 0 0.5 0)))
            (-> (.-vertices) (.push (js/THREE.Vector3. 2 0.5 30)))
            (-> (.-vertices) (.push (js/THREE.Vector3. -2 0.5 30)))
            (-> (.-faces) (.push (js/THREE.Face3. 0 2 1)))
            (.computeFaceNormals))
        m (js/THREE.Mesh. g (js/THREE.MeshNormalMaterial.))]
    (set! (.-name m) (name fire))
    (case fire
      :fire-left (set! (.. m -rotation -y) js/Math.PI)
      :fire-forward (set! (.. m -rotation -y) (/ js/Math.PI 2))
      :fire-backward (set! (.. m -rotation -y) (/ js/Math.PI -2))
      nil)
    m))

(defn firing-blasts [app-state ship]
  (let [fired (frequencies (map second (get-in @app-state [:client :gun-crew-used])))
        firing (.getObjectByName ship "firing")]
    (doseq [c (.-children firing)]
      (when-not (fired (.-name c))
        (.remove firing c)))
    (doseq [[fire c] fired]
      (when-not (.getObjectByName firing (name fire))
        (.add firing (blast fire))))))

(defn world-map-three-render [t app-state renderer scene camera ship water]
  (other-players t app-state scene)
  (update-projectiles t app-state scene)
  (wave-roll ship t (:steer @app-state))
  (firing-blasts app-state ship)
  (when (= (:status @app-state) :sailing)
    ;; Use a speed normalized to time
    ;; TODO: put x/y in game instead of ship?
    (.translateX ship 0.05)
    (swap! app-state assoc :user
      [(.. ship -position -x)
       (.. ship -position -z)
       (.. ship -rotation -y)
       (:steer @app-state)])
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
  (.render renderer scene camera))

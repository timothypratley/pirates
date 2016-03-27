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

(defn make-ship [scene name]
  (doto (js/THREE.Object3D.)
    (-> (.-name) (set! name))
    (.add (text-sprite/make name))
    (scenery/load-model "pirate-ship-large.json")
    (->> (.add scene))))

(defn wave-roll [ship t steer]
  (when-let [model (.getObjectByName ship "model")]
    (set! (.. model -rotation -z) (/ (js/Math.sin (/ t 500)) 20))
    (if (zero? steer)
      (set! (.. model -rotation -x) (/ (js/Math.sin (/ t 600)) 20))
      (set! (.. model -rotation -x) (* steer 0.2)))))

(defn other-players [t app-state scene]
  (let [at (:at @app-state)]
    (doseq [[player-id [x2 z2 heading2 steer]] (:players @app-state)
            :when (not= player-id (:uid @app-state))
            :let [previous (.getObjectByName scene player-id)
                  ship (or previous (make-ship scene player-id))
                  heading1 (.. ship -rotation -y)
                  x1 (.. ship -position -x)
                  z1 (.. ship -position -z)
                  [x z heading] (interpolate/predict [x1 z1 heading1] [x2 z2 heading2] at)]]
      (.set (.-position ship) x 0 z)
      (set! (.. ship -rotation -y) heading)
      (wave-roll ship (+ t heading) steer))))

(defn world-map-three-render [t app-state renderer scene camera ship water]
  (other-players t app-state scene)
  (wave-roll ship t (:steer @app-state))
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

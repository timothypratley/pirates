(ns pirates.server.ticker
  (:require
    [pirates.shared.constants :as constants]
    [pirates.server.mechanics :as mechanics]
    [pirates.server.world :as world]
    [com.stuartsierra.component :as component]
    [clojure.string :as string])
  (:import [java.util Date]))

(def running
  (atom true))

(defn check-all [world t k f]
  (reduce #(f t %1 %2)
          world
          (world k)))

(defn with-ability [t world player ability args]
  (println player "using" ability args)
  (let [targets (mechanics/find-targets world {:type (get-in constants/abilities [ability :targets])
                                               :player player})
        targets (mechanics/range-check world {:type (get-in constants/abilities [ability :range])
                                              :player player
                                              :targets targets})]
    (-> world
      (mechanics/apply-ability {:type ability
                                :args args
                                :player player
                                :targets targets
                                :t t})
      (update-in [:players player] dissoc :activating)
      (assoc-in [:players player :cooldowns ability] t)
      (doto (prn)))))

(defn check-warmup [^Date t world [player {[^Date started ability args :as activating] :activating}]]
  (if activating
    (let [warmup (get-in constants/abilities [ability :warmup] 0)]
      (if (>= (.getTime t) (+ (.getTime started) (* warmup 1000)))
        (with-ability t world player ability args)
        world))
    world))

(defn check-ability-cooldown [^Date t player world [ability ^Date started]]
  (let [cooldown (get-in constants/abilities [ability :cooldown] 10)]
    (if (>= (.getTime t) (+ (.getTime started) (* cooldown 1000)))
      (update-in world [:players player :cooldowns] dissoc ability)
      world)))

(defn check-cooldown [^Date t world [player {:keys [cooldowns]}]]
  (reduce #(check-ability-cooldown t player %1 %2)
          world
          cooldowns))

(defn check-next-ability [^Date t world [player {[started ability :as next-ability] :next-ability}]]
  (if (and next-ability
           (> (.getTime t) (+ (.getTime started) 1000)))
    (update-in world [:players player] dissoc :next-ability)
    (if (and next-ability
             (not (world/activating world player))
             (world/can-activate? world player ability))
      (-> world
        (assoc-in [:players player :activating] [t ability])
        (update-in [:players player] dissoc :next-ability))
      world)))

(defn check-hit? [x2 z2 [player {[x z] :status}]]
  (<= (+ (Math/abs ^double (- x x2))
         (Math/abs ^double (- z z2)))
      10))

;; TODO: bounding box of expected travel
(defn hit? [world x z player]
  (filter #(and (not= player (key %))
                (check-hit? x z %))
          (:players world)))

(defn damage [world [player {:keys [hull]}]]
  (update-in world [:players player :hull] - 25))

(defn check-projectile [^Date t world [id {:keys [x z heading speed range player]}]]
  ;; TODO: use t
  (let [dx (* (Math/cos heading) speed)
        dz (- (* (Math/sin heading) speed))
        x (+ x dx)
        z (+ z dz)
        range (- range speed)]
    (if-let [targets (seq (hit? world x z player))]
      (do
        (println player "hit" (string/join ", " targets))
        (-> (reduce damage world targets)
          (update :projectiles dissoc id)))
      (if (<= range 0)
        (do (println player "miss")
            (update world :projectiles dissoc id))
        (update-in world [:projectiles id] assoc
                   :x x
                   :z z
                   :range range)))))

(defn check-hull [^Date t world [player {:keys [hull]}]]
  world)

;; todo produce events!
(defn tick [world t]
  (-> world
    (check-all t :players check-warmup)
    (check-all t :players check-cooldown)
    (check-all t :players check-next-ability)
    (check-all t :projectiles check-projectile)
    (check-all t :players check-hull)))

(defn try-tick []
  (try
    (Thread/sleep 16)
    (dosync
      (alter world/the-world tick (Date.)))
    (catch Exception ex
      (println "Error during tick:" ex))))

(defn start-ticker [running]
  (.start
    (Thread.
      ^Runnable
      (fn ticker []
        (while @running
          (try-tick))))))

(defrecord Ticker []
  component/Lifecycle
  (start [component]
    (println "Starting ticker")
    (let [running (atom true)]
      (start-ticker running)
      (assoc component :running running)))
  (stop [component]
    (if-let [running (:running component)]
      (do
        (swap! running not)
        (dissoc component :running))
      component)))

(defn new-ticker []
  (map->Ticker {}))

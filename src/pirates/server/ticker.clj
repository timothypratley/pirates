(ns pirates.server.ticker
  (:require
    [pirates.shared.constants :as constants]
    [pirates.server.mechanics :as mechanics]
    [pirates.server.world :as world])
  (:import [java.util Date]))

(def running
  (atom true))

(defn with-ability [t world player ability]
  (let [targets (mechanics/find-targets world {:type (get-in constants/abilities [ability :targets])
                                               :player player})
        targets (mechanics/range-check world {:type (get-in constants/abilities [ability :range])
                                              :player player
                                              :targets targets})]
    (-> world
      (mechanics/apply-ability {:type ability
                                :player player
                                :targets targets
                                :t t})
      (update-in [:players player] dissoc :activating)
      (assoc-in [:players player :cooldowns ability] t))))

(defn check-warmup [^Date t world [player {[^Date started ability :as activating] :activating}]]
  (if activating
    (let [warmup (get-in constants/abilities [ability :warmup] 0)]
      (if (>= (.getTime t) (+ (.getTime started) (* warmup 1000)))
        (with-ability t world player ability)
        world))
    world))

(defn check-ability-cooldown [^Date t player world [ability ^Date started]]
  (let [cooldown (get-in constants/abilities [ability :cooldown] 10)]
    (if (>= (.getTime t) (+ (.getTime started) (* cooldown 1000)))
      (update-in world [:players player :cooldowns] dissoc ability)
      world)))

(defn check-cooldown [t world [player {:keys [cooldowns]}]]
  (reduce #(check-ability-cooldown t player %1 %2)
          world
          cooldowns))

(defn check-next-ability [t world [player {[started ability :as next-ability] :next-ability}]]
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

(defn check-players [world t f]
  (reduce #(f t %1 %2)
          world
          (:players world)))

;; todo produce events!
(defn tick [world t]
  (-> world
    (check-players t check-warmup)
    (check-players t check-cooldown)
    (check-players t check-next-ability)))

(defn ticker []
  (while @running
    (try
      (Thread/sleep 16)
      (dosync
        (alter world/the-world tick (Date.)))
      (catch Exception ex
        (println "Error during tick:" ex)))))

(defn start-ticker []
  (.start (Thread. ^Runnable ticker)))

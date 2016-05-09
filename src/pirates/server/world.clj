(ns pirates.server.world
  (:require [pirates.shared.constants :as constants]))

(def the-world
  (ref {:players {}}))

(defn on-cooldown [world player ability]
  (get-in world [:players player :cooldowns ability]))

(defn activating [world player]
  (get-in world [:players player :activating]))

(defn has-ability? [world player ability]
  (or
    (constants/base-abilities ability)
    (let [{:keys [captain]} (get-in world [:players player])]
      (get-in constants/captains [captain :abilities ability]))))

(defn can-activate? [world player ability]
  (and
    ability
    (has-ability? world player ability)
    (not (on-cooldown world player ability))))

(defn maybe-with-ability [world t player ability]
  (if (= ability :cancel)
    (update-in world [:players player] dissoc :activating :next-ability)
    (if (can-activate? world player ability)
      (if (activating world player)
        (assoc-in world [:players player :next-ability] [t ability])
        (assoc-in world [:players player :activating] [t ability]))
      world)))

(defn with-status [world t uid status ability]
  (-> world
    (maybe-with-ability t uid ability)
    (assoc-in [:players uid :status] status)))

(defn update-player [t uid [status ability]]
  (dosync
    (alter the-world with-status t uid status ability)))

(defn remove-player [uid]
  (dosync
    (alter the-world update :players dissoc uid)))

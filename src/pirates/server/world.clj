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
    (let [captain-class (get-in world [:players player :captain-class])]
      (get-in constants/captains [captain-class :abilities ability]))))

(defn can-activate? [world player ability]
  (and
    ability
    (has-ability? world player ability)
    (not (on-cooldown world player ability))))

(defn maybe-with-ability [world t player ability args]
  (if (= ability :cancel)
    (update-in world [:players player] dissoc :activating :next-ability)
    (if (can-activate? world player ability)
      (if (activating world player)
        (assoc-in world [:players player :next-ability] [t ability args])
        (assoc-in world [:players player :activating] [t ability args]))
      world)))

(defn maybe-entered [world player]
  (if (get-in world [:players player])
    world
    (assoc-in world [:players player :hull] 100)))

(defn with-status [world t player status [ability & args]]
  (-> world
    (maybe-entered player)
    (maybe-with-ability t player ability args)
    (assoc-in [:players player :status] status)))

(defn update-player [t uid [status ability-args]]
  (dosync
    (alter the-world with-status t uid status ability-args)))

(defn remove-player [uid]
  (dosync
    (alter the-world update :players dissoc uid)))

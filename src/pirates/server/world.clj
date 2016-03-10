(ns pirates.server.world)

(def world
  (ref {}))

(defn add-player [uid status]
  (dosync
   (alter world assoc-in [:players uid] status)))

(defn remove-player [uid]
  (dosync
   (alter world update :players dissoc uid)))

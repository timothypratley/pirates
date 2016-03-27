(ns pirates.server.world
  (:require [clojure.string :as string]))

(def world
  (ref {:players {}}))

(defn add-player [uid status]
  (dosync
    ;; TODO: don't conj date zomg
   (alter world assoc-in [:players uid] status)))

(defn remove-player [uid]
  (dosync
   (alter world update :players dissoc uid)))

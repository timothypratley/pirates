(ns pirates.client.model
  (:require
    [reagent.core :as reagent]
    [pirates.client.towns :as towns]))

(defonce app-state
  (reagent/atom
    {:status :in-port
     :towns towns/initial-towns
     :ship-type :sloop
     :captain-class :freebooter
     :client {:action-taken (js/Date.)}}))

(defn fire [s firing]
  (let [now (js/Date.)]
    (-> s
      (assoc-in [:client :action-taken] now)
      (update-in [:client :gun-crew-used] conj [now firing]))))

(defn sails [s]
  (update s :sails not))

(defn letter-of-marque [s]
  (update s :effects assoc :letter-of-marque (js/Date.)))

(defn salvo [s])

(defn highest-bidder [s])

(def abilities
  {:freebooter {:ultimate letter-of-marque
                :primary salvo
                :secondary highest-bidder}})

(defn activate-ability [s ability]
  (let [now (js/Date.)
        f (if (= :sails ability)
            sails
            (ability (abilities (:captain-class s))))]
    (-> s
      (f)
      (assoc-in [:client :action-taken] now)
      (assoc-in [:cooldown ability] now))))

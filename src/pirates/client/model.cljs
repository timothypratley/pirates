(ns pirates.client.model
  (:require
    [reagent.core :as reagent]
    [pirates.shared.constants :as constants]
    [pirates.client.towns :as towns]))

(defonce app-state
  (reagent/atom
    {:status :in-port
     :towns towns/initial-towns
     :ship-type :sloop
     :captain-class :freebooter
     :client {:action-taken (js/Date.)}}))

(defn gun-crew-available [app-state]
  (< (count (get-in @app-state [:client :gun-crew-used]))
     (:gun-crew-count (constants/ships (:ship-type @app-state)))))

(defn expired? [[d fire]]
  (let [ms-expired (- (.getTime (js/Date.)) (.getTime d))]
    (>= ms-expired 2000)))

(defn release-gun-crews [app-state]
  (swap! app-state update-in [:client :gun-crew-used] #(remove expired? %)))

(defn cooldown-expired? [ability d]
  (let [ms-expired (- (.getTime (js/Date.)) (.getTime d))]
    (>= ms-expired (:cooldown (constants/abilities ability)))))

(defn release-cooldowns [app-state]
  (doseq [[ability d] (:cooldowns @app-state)]
    (if (cooldown-expired? ability d)
      (swap! app-state update :cooldowns dissoc ability))))

(defn action-available? [app-state]
  (let [ms-expired (- (.getTime (js/Date.))
                      (.getTime (get-in @app-state [:client :action-taken])))]
    (>= ms-expired 500)))

(defn ability-available? [app-state ability]
  (not (get-in @app-state [:cooldown ability])))

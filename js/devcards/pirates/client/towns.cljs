(ns pirates.client.towns
  (:require
    [cljsjs.three]
    [devcards.core :refer-macros [defcard-rg]]
    [reagent.core :as reagent]))

(def faction-materials
  (zipmap
    ["English" "Dutch" "French" "Spanish"]
    (for [color ["red" "orange" "blue" "yellow"]]
      (js/THREE.MeshBasicMaterial. #js {:color color}))))

(defn create-town [town-name]
  (doto
    (js/THREE.Mesh.
      (js/THREE.BoxGeometry. 10 10 10))
    (-> (.-name) (set! town-name))))

(defn coords [lat lon]
  [(* 35 (- 75 lon)) (* 27 (- 15 lat))])

(defn load-town [parent [town-name
                         {[lat lon] :latlon
                          [rx ry rz] :rotation
                          faction :faction}]]
  (let [town (or (.getObjectByName parent town-name)
                 (doto (create-town town-name)
                   (->> (.add parent))))
        [x z] (coords lat lon)]
    (.set (.-position town) x 0 z)
    (.set (.-rotation town) rx ry rz)
    (set! (.. town -material)
          (faction-materials faction))))

(defn load-towns [scene towns]
  (prn "load-towns")
  (doseq [town towns]
    (load-town scene town)))

(def initial-towns
  {"St Kitts"
   {:type "town"
    :latlon [17.16 63.65]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "English"}
   "Antigua"
   {:type "town"
    :latlon [16.93 62.74]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "English"}
   "Montserrat"
   {:type "town"
    :latlon [16.42 63.17]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "English"}
   "Barbados"
   {:type "town"
    :latlon [11.84 60.70]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "English"}
   "Saint Lucia"
   {:type "town"
    :latlon [13.62 62.07]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "French"}
   "Trinidad"
   {:type "town"
    :latlon [8.22 62.37]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "Spanish"}
   "Margarita"
   {:type "town"
    :latlon [9.10 65.18]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "Dutch"}
   "Caracas"
   {:type "town"
    :latlon [8.59 67.58]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "Spanish"}
   "Curacao"
   {:type "town"
    :latlon [10.7 69.53]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "Dutch"}
   "Coro"
   {:type "town"
    :latlon [9.82 70.17]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "English"}
   "Puerto Cabello"
   {:type "town"
    :latlon [8.43 68.64]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "Spanish"}
   "Santa Marta"
   {:type "town"
    :latlon [6.67 71.85]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "Spanish"}
   "Cartagena"
   {:type "town"
    :latlon [8.22 75.72]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "Spanish"}
   "Nombre de Dias"
   {:type "town"
    :latlon [7.24 79.23]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "Spanish"}
   "Puerto Bello"
   {:type "town"
    :latlon [7.19 79.70]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "Spanish"}
   "Gran Granada"
   {:type "town"
    :latlon [10.27 85.68]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "Spanish"}
   "Campeche"
   {:type "town"
    :latlon [20.73 89.91]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "Spanish"}
   "Vera Cruz"
   {:type "town"
    :latlon [19.72 95.51]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "Spanish"}
   "Florida Keys"
   {:type "town"
    :latlon [26.36 81.52]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "Dutch"}
   "Havana"
   {:type "town"
    :latlon [24.74 82.15]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "Spanish"}
   "Grand Bahama"
   {:type "town"
    :latlon [29.02 78.41]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "Dutch"}
   "Nassau"
   {:type "town"
    :latlon [27.19 77.61]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "English"}
   "Eleuthera"
   {:type "town"
    :latlon [27.15 76.37]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "English"}
   "Santiago"
   {:type "town"
    :latlon [20.51 76.10]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "Spanish"}
   "Tortuga"
   {:type "town"
    :latlon [20.73 73.29]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "French"}
   "Petit-Goave"
   {:type "town"
    :latlon [18.76 73.18]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "French"}
   "Santo Domingo"
   {:type "town"
    :latlon [18.72 70.71]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "Spanish"}
   "San Juan"
   {:type "town"
    :latlon [18.59 66.76]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "Spanish"}
   "St Eustatius"
   {:type "town"
    :latlon [17.47 63.95]
    :rotation [0 0 0]
    :population 1000
    :wealth 1000
    :faction "Dutch"}})

(defn town-locations-card []
  (let [app-state (reagent/atom {:camera {:position [0 500 0]
                                          :look-at [0 0 0]}
                                 :towns initial-towns})]
    (fn a-town-locations-card []
      [pirates.client.map/world-map app-state])))

(defcard-rg town-locations
  [town-locations-card])

(ns ^:figwheel-always pirates.core
  (:require
    [pirates.init]
    [pirates.menus :as menus]
    [pirates.map :as map]
    [pirates.towns :as towns]
    [reagent.core :as reagent]))

(defonce app-state
  (reagent/atom {:status :in-port
                 :towns towns/initial-towns}))

(defn main-view []
  [:center
   [:h1 "Pirates!"]
   (when (not= (:status @app-state) :sailing)
     [menus/in-port app-state])
   [map/world-map app-state]])

(defn main []
  (when-let [app (.getElementById js/document "app")]
    (reagent/render-component [main-view] app)))

(main)

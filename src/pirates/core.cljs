(ns ^:figwheel-always pirates.core
  (:require
    [pirates.init]
    [pirates.map :as map]
    [reagent.core :as reagent]))

(defonce app-state
  (reagent/atom nil))

(defn main-view []
  [:center
   [:h1 "Pirates!"]
   [map/world-map app-state]])

(defn ^:export main []
  (when-let [app (.getElementById js/document "app")]
    (reagent/render-component [main-view] app)))

(main)

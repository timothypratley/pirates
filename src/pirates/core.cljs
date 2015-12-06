(ns ^:figwheel-always pirates.core
  (:require
    [pirates.init]
    [pirates.map :as map]
    [reagent.core :as reagent]))

(defonce app-state
  (reagent/atom {:status :in-port}))

(defn main-view []
  [:center
   [:h1 "Pirates!"]
   (when (= (:status @app-state) :in-port)
     [:div
      [:button
       {:on-click
        (fn set-sail [e]
          (swap! app-state assoc :status :sailing))}
       "Set sail!"]])
   [map/world-map app-state]])

(defn ^:export main []
  (when-let [app (.getElementById js/document "app")]
    (reagent/render-component [main-view] app)))

(main)

(ns ^:figwheel-always pirates.client.main
  (:require
    [goog.dom :as dom]
    [pirates.client.init]
    [pirates.client.menus :as menus]
    [pirates.client.map :as map]
    [pirates.client.model :as model]
    [pirates.client.communication :as communication]
    [reagent.core :as reagent]
    [clojure.string :as string]))

(defn toolbar [app-state]
  [:div
   [:span
    "Affected by"
    (string/join
      ", "
      (get-in @app-state [:players (:uid @app-state) :affected-by]))]])

(defn main-view []
  [:div
   {:height "100 dv"
    :border "1px solid #555"
    :display "flex"
    :flex-flow "row"}
   [:h1 "Pirates! " (:uid @model/app-state)]
   [map/world-map model/app-state]
   [toolbar model/app-state]
   (when (not= (:status @model/app-state) :sailing)
     [menus/in-port model/app-state])])

(defn main []
  (when-let [app (dom/getElement "app")]
    (reagent/render-component [main-view] app)
    (communication/start)))

(main)

(ns ^:figwheel-always pirates.core
  (:require
    [pirates.init]
    [pirates.map :as map]
    [reagent.core :as reagent]))

(defonce app-state
  (reagent/atom {:status :in-port}))

(defn menu []
  [:ul
   [:li
    [:button
     {:on-click
      (fn set-sail [e]
        (swap! app-state assoc :status :sailing))}
     "Set sail!"]]
   [:li
    [:button
     {:on-click
      (fn set-sail [e]
        (swap! app-state assoc :status :governor))}
     "Visit the governer"]]
   [:li
    [:button
     {:on-click
      (fn set-sail [e]
        (swap! app-state assoc :status :tavern))}
     "Visit the tavern"]]
   [:li
    [:button
     {:on-click
      (fn set-sail [e]
        (swap! app-state assoc :status :merchant))}
     "Visit the merchant"]]
   [:li
    [:button
     {:on-click
      (fn set-sail [e]
        (swap! app-state assoc :status :shipwright))}
     "Visit the shipwright"]]])

(defn governor []
  [:div "We are at war with the French!"])

(defn tavern []
  [:div
   [:button "Buy map"]
   [:button "Recruit"]
   [:button "Info"]])

(defn merchant []
  [:table
   [:tbody
    [:tr
     [:td "Food"]
     [:td [:button "buy"]]
     [:td [:button "sell"]]
     [:td "2g"]]
    [:tr
     [:td "Goods"]
     [:td [:button "buy"]]
     [:td [:button "sell"]]
     [:td "2g"]]
    [:tr
     [:td "Guns"]
     [:td [:button "buy"]]
     [:td [:button "sell"]]
     [:td "2g"]]]])

(defn shipwright []
  [:div
   [:button "Repair for 200g"]])

(defn welcome []
  [:div "Welcome to St Kitts"])

(defn main-view []
  [:center
   [:h1 "Pirates!"]
   (when (not= (:status @app-state) :sailing)
     [:div
      [menu]
      (case (:status @app-state)
        :governor [governor]
        :tavern [tavern]
        :merchant [merchant]
        :shipwright [shipwright]
        :in-port [welcome])])
   [map/world-map app-state]])

(defn ^:export main []
  (when-let [app (.getElementById js/document "app")]
    (reagent/render-component [main-view] app)))

(main)

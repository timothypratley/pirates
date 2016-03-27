(ns pirates.client.menus
  (:require
    [devcards.core :refer-macros [defcard-rg]]
    [reagent.core :as reagent]))

(defn menu [app-state]
  [:ul
   {:style {:list-style-type "none"}}
   [:li
    [:input {:type "text"
             :style {:width "100%"}}]
    ]
   [:li
    [:button
     {:style {:width "100%"}
      :on-click
      (fn set-sail [e]
        (swap! app-state assoc :status :sailing))}
     "Set sail!"]]
   [:li
    [:button
     {:style {:width "100%"}
      :on-click
      (fn set-sail [e]
        (swap! app-state assoc :status :governor))}
     "Visit the governer"]]
   [:li
    [:button
     {:style {:width "100%"}
      :on-click
      (fn set-sail [e]
        (swap! app-state assoc :status :tavern))}
     "Visit the tavern"]]
   [:li
    [:button
     {:style {:width "100%"}
      :on-click
      (fn set-sail [e]
        (swap! app-state assoc :status :merchant))}
     "Visit the merchant"]]
   [:li
    [:button
     {:style {:width "100%"}
      :on-click
      (fn set-sail [e]
        (swap! app-state assoc :status :shipwright))}
     "Visit the shipwright"]]])

(defn panel [background-iamge & body]
  (into
    [:div
     {:style
      {:background-image (str "url(\"img/" background-iamge ".jpg\")")
       :background-size "cover"}}]
    body))

(defn menu-example-component []
  (let [test-app-state (reagent/atom {})]
    (fn a-menu-example-component []
      [:div
       [:p (pr-str @test-app-state)]
       [menu test-app-state]])))

(defcard-rg menu-example
  [menu-example-component])

(defn governor [app-state]
  [panel "governor"
   [:p {:style {:background-color "white"
                :opacity 0.5
                :padding "20px"}}
    "We are at war with the French!"]])

(defcard-rg governor-example
  [governor])

(defn tavern [app-state]
  [panel "pirate-tavern"
   [:div
    [:button "Buy map"]
    [:button "Recruit"]
    [:button "Info"]]])

(defcard-rg tavern-example
  [tavern])

(defn merchant [app-state]
  [panel "merchant"
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
      [:td "2g"]]]]])

(defcard-rg merchant-example
  [merchant])

(defn shipwright [app-state]
  [panel "shipwright"
   [:div
    [:button "Repair for 200g"]]])

(defcard-rg shipwright-example
  [shipwright])

(defn welcome [app-state]
  (let [{[town-name {town-type :type}] :town} @app-state]
    [:div (str "Welcome to the " town-type " of " town-name)]))

#_(defcard-rg welcome-example
    [welcome])

(defn in-port [app-state]
  [:div
   [:div
    {:flex "1 6 40%"
     :order 1}
    [menu app-state]]
   [:div
    {:flex "3 1 60%"
     :order 2}
    (case (:status @app-state)
      :governor [governor app-state]
      :tavern [tavern app-state]
      :merchant [merchant app-state]
      :shipwright [shipwright app-state]
      :in-port [welcome app-state]
      [:div (str "Error, bad status " (:status @app-state))])]])

(defn in-port-example []
  (let [app-state (reagent/atom {})]
    (fn an-in-port-example []
      [in-port app-state])))

(defcard-rg in-port-example
  [in-port-example])
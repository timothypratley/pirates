(ns pirates.menus)

(defn menu [app-state]
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

(defn governor [app-state]
  [:div "We are at war with the French!"])

(defn tavern [app-state]
  [:div
   [:button "Buy map"]
   [:button "Recruit"]
   [:button "Info"]])

(defn merchant [app-state]
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

(defn shipwright [app-state]
  [:div
   [:button "Repair for 200g"]])

(defn welcome [app-state]
  (let [{[town-name {town-type :type}] :town} @app-state]
    [:div "Welcome to the " town-type " of " town-name]))

(defn in-port [app-state]
  [:div
   [menu app-state]
   (case (:status @app-state)
     :governor [governor app-state]
     :tavern [tavern app-state]
     :merchant [merchant app-state]
     :shipwright [shipwright app-state]
     :in-port [welcome app-state])])

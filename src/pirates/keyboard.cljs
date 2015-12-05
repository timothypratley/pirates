(ns pirates.keyboard
  (:require [goog.events :as ge]))

(defn create []
  (let [key-codes #js {}]
    {:codes key-codes
     :handler
     (fn on-key-change [e]
       (aset key-codes (.-keyCode e) (= (.-type e) "keydown")))}))

(defn listen
  ([o] (listen o js/document))
  ([{:keys [handler] :as o} dom-element]
   (set! (.-dom-element o) dom-element)
   (ge/listen dom-element "keydown" handler)
   (ge/listen dom-element "keyup" handler)))

(defn unlisten [{:keys [handler] :as o}]
  (let [dom-element (.-dom-element o)]
    (ge/unlisten dom-element "keydown" handler)
    (ge/unlisten dom-element "keyup" handler)))

(defn pressed? [{:keys [codes]} & key-codes]
  (every? (fn [k] (aget codes k)) key-codes))

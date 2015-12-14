(ns pirates.keyboard
  (:require
    [goog.events :as ge]
    [goog.events.KeyCodes :as KeyCodes]))

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

(defn altitude [camera dy]
  (set! (.. camera -position -y)
        (min 500 (max 1 (+ (.. camera -position -y)
                           (/ (.. camera -position -y) dy))))))

(defn handle-keyboard [kb camera ship]
  (doseq [[k action]
          [[KeyCodes/LEFT
            (fn a-left-action []
              (set! (.. ship -rotation -y)
                    (+ (.. ship -rotation -y) 0.03))
              (when-let [model (aget (.-children ship) 0)]
                (set! (.. model -rotation -x) -0.2)))]
           [KeyCodes/RIGHT
            (fn a-right-action []
              (set! (.. ship -rotation -y)
                    (- (.. ship -rotation -y) 0.03))
              (when-let [model (aget (.-children ship) 0)]
                (set! (.. model -rotation -x) 0.2)))]
           [KeyCodes/UP
            (fn an-up-action []
              (altitude camera 10))]
           [KeyCodes/DOWN
            (fn a-down-action []
              (altitude camera -10))]]]
    (when (pressed? kb k)
      (action))))

(ns pirates.client.keyboard
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

(defn pressed? [{:keys [codes]} key-codes]
  (every? (fn [k] (aget codes k)) key-codes))

(defn altitude [camera dy]
  (set! (.. camera -position -y)
        (min 500 (max 1 (+ (.. camera -position -y)
                           (/ (.. camera -position -y) dy)))))
  (.lookAt camera (js/THREE.Vector3. 0 (/ (.. camera -position -y) 1.5) 0)))

(defn pan [camera dr]
  (set! (.. camera -position)))

(defonce cooldowns (atom {}))

(defn normalize-angle [a]
  (cond
    (> a js/Math.PI) (recur (- a (* 2 js/Math.PI)))
    (< a (- js/Math.PI)) (recur (+ a (* 2 js/Math.PI)))
    :else a))

(defn blink [ship]
  (.translateX ship -50))

(defn bkb [model]
  (.set (.-scale model) 2 2 2))

(defn submerge [ship]
  (.translateY ship -5))


(def key-bindings
  {:left #{#{KeyCodes/LEFT}}
   :right #{#{KeyCodes/RIGHT}}
   :up #{#{KeyCodes/UP}}
   :down #{#{KeyCodes/DOWN}}
   :primary #{#{KeyCodes/ONE}}
   :secondary #{#{KeyCodes/TWO}}
   :ultimate #{#{KeyCodes/THREE}}})

(def steers
  {:left 1
   :right -1})

(def altitudes
  {:up 10
   :down -10})

(defn sum-keys [kb m]
  (reduce
    (fn sum-deltas [acc [dir delta]]
      (if (some #(pressed? kb %) (key-bindings dir))
        (+ acc delta)
        acc))
    0
    m))

(defn handle-keyboard [app-state kb camera ship]
  (let [steer (sum-keys kb steers)]
    ;; TODO: not here? normalize to time?
    (when-not (zero? steer)
      (set! (.. ship -rotation -y) (normalize-angle (+ (.. ship -rotation -y) (* steer 0.03)))))
    (swap! app-state assoc :steer steer))
  (let [dy (sum-keys kb altitudes)]
    (when-not (zero? dy)
      (altitude camera dy)))
  (doseq [[ks action]
          [[#{KeyCodes/Q}
            (fn a-ultimate []
              (when-not (:ultimate @cooldowns)

                (swap! cooldowns assoc :ultimate 60)))]
           [#{KeyCodes/W}
            (fn a-w []
              (when-not (:w @cooldowns)

                (swap! cooldowns assoc :w 60)))]
           [#{KeyCodes/E}
            (fn a-e []
              (when-not (:e @cooldowns)
                (when-let [model (aget (.-children ship) 1)]
                  (.set (.-scale model) 2 2 2)
                  (swap! cooldowns assoc :e 60))))]]]
    (when (pressed? kb ks)
      (action))))

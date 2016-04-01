(ns pirates.client.keyboard
  (:require
    [pirates.client.communication :as communication]
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
  {:left #{#{KeyCodes/LEFT} #{KeyCodes/A}}
   :right #{#{KeyCodes/RIGHT} #{KeyCodes/D}}
   :fire-left #{#{KeyCodes/Q}}
   :fire-right #{#{KeyCodes/E}}
   :fire-forward #{#{KeyCodes/W}}
   :fire-backward #{#{KeyCodes/X}}
   ;;:fire2-left #{#{KeyCodes/Z}}
   ;;:fire2-right #{#{KeyCodes/C}}
   :sails #{#{KeyCodes/S}}
   :up #{#{KeyCodes/UP}}
   :down #{#{KeyCodes/DOWN}}
   :primary #{#{KeyCodes/ONE}}
   :secondary #{#{KeyCodes/TWO}}
   :ultimate #{#{KeyCodes/THREE}}})

(def fire-bindings
  (select-keys key-bindings [:fire-left :fire-right :fire-forward :fire-backward]))

(def ability-precidence
  [:ultimate :primary :secondary :sails])

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

;; TODO: forward/aft placements
(def ships
  {:sloop {:gun-crew-count 2}
   :caravel {:gun-crew-count 2}
   :merchantman {:gun-crew-count 2}
   :escort {:gun-crew-count 4}
   :frigate {:gun-crew-count 8}
   :galleon {:gun-crew-count 16}})

(defn gun-crew-available [app-state]
  (< (count (get-in @app-state [:client :gun-crew-used]))
    (:gun-crew-count (ships (:ship-type @app-state)))))


(defn expired? [[d fire]]
  (let [ms-expired (- (.getTime (js/Date.)) (.getTime d))]
    (>= ms-expired 2000)))

(defn release-gun-crews [app-state]
  (swap! app-state update-in [:client :gun-crew-used] #(remove expired? %)))

;; move to model
(def cooldowns
  {:ultimate 60000
   :primary 10000
   :secondary 20000
   :sails 2000})

(defn cooldown-expired? [ability d]
  (let [ms-expired (- (.getTime (js/Date.)) (.getTime d))]
    (>= ms-expired (cooldowns ability))))

(defn release-cooldowns [app-state]
  (doseq [[ability d] (:cooldowns @app-state)]
    (if (cooldown-expired? ability d)
      (swap! app-state update :cooldowns dissoc ability))))

(defn action-available? [app-state]
  (let [ms-expired (- (.getTime (js/Date.)) (.getTime (get-in @app-state [:client :action-taken])))]
    (>= ms-expired 500)))

(defn ability-available? [app-state ability]
  (not (get-in @app-state [:cooldown ability])))

(defn activated? [app-state kb ability]
  (and
    (ability-available? app-state ability)
    (some #(pressed? kb %) (key-bindings ability))))

(defn activating [app-state kb]
  (->> ability-precidence
       (filter #(activated? app-state kb %))
       (first)))

(defn firing [app-state kb]
  (when (gun-crew-available app-state)
    (->> fire-bindings
         (filter (fn [[action bindings]]
                   (some #(pressed? kb %) bindings)))
         (map key)
         (shuffle)
         (first))))

(defn handle-keyboard [app-state kb camera ship]
  (let [steer (sum-keys kb steers)]
    ;; TODO: not here? normalize to time?
    (when-not (zero? steer)
      (set! (.. ship -rotation -y) (normalize-angle (+ (.. ship -rotation -y) (* steer 0.03)))))
    (swap! app-state assoc :steer steer))
  (let [dy (sum-keys kb altitudes)]
    (when-not (zero? dy)
      (altitude camera dy)))
  (release-gun-crews app-state)
  (release-cooldowns app-state)
  (when (action-available? app-state)
    (if-let [ability (activating app-state kb)]
      (communication/ability! ability)
      (when-let [fire (firing app-state kb)]
        (communication/fire! fire)))))

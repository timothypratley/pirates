(ns pirates.server.mechanics
  (:require [pirates.shared.constants :as constants])
  (:import [java.util Date]))

(defmulti apply-ability (fn [world {:keys [type]}] type))
(defmulti find-targets (fn [world {:keys [type]}] type))
(defmulti range-check (fn [world {:keys [type]}] type))

(defmethod find-targets :other [world {:keys [player]}]
  (get-in world [:players player :selected]))

(defmethod find-targets :self [world {:keys [player]}]
  [player])

(defmethod find-targets :any [world {:keys [player]}]
  (cons player (get-in world [:players player :selected])))

(defn distance [[x1 z1] [x2 z2]]
  (Math/sqrt (+ (* (- x2 x1) (- x2 x1))
                (* (- z2 z1) (- z2 z1)))))

(defn in-range? [world player r target]
  (let [ploc (get-in world [:players player :location])
        tloc (get-in world [:players target :location])]
    (and ploc tloc (<= (distance ploc tloc) r))))

(defn heal [m hp]
  (update m :hull + hp))

(defmethod range-check :cannon [world {:keys [player targets]}]
  (let [r (* (:cannon constants/ranges) (get-in world [:players player :modifiers :cannon-range] 1))]
    (filter #(in-range? world player r %) targets)))

(defmethod range-check :default [world {:keys [targets]}]
  targets)

(defn uuid [] (str (java.util.UUID/randomUUID)))

;; TODO: why have args? why not just spell it out?
(defmethod apply-ability :fire [world {:keys [player firing t args]}]
  world
  (let [[x z heading] (get-in world [:players player :status])
        heading (+ heading (* ({:fire-forward 0
                                :fire-left 1
                                :fire-backward 2
                                :fire-right 3}
                                (first args))
                              (/ Math/PI 2.0)))
        speed 0.2]
    (-> world
      (assoc-in [:projectiles (uuid)]
                {:player player
                 :type :cannon-ball
                 :x x
                 :z z
                 :heading heading
                 :speed speed
                 :range 100})
      (assoc-in [:players player :action-taken] t)
      (update-in [:players player :gun-crew-used] conj [t firing]))))

(defmethod apply-ability :sails [world {:keys [targets]}]
  (update world :sails not))

(defn apply-affect [world targets affect duration]
  (reduce
    (fn [acc target]
      (assoc-in acc [:players target :affected-by affect] [(Date.) duration]))
    world
    targets))

;; TODO: don't hardcode duration, do we even need a multi-method? dispatch on ability type?
(defmethod apply-ability :letter-of-marque [world {:keys [targets]}]
  (apply-affect world targets :letter-of-marque 15000))

(defmethod apply-ability :rousing-speech [world {:keys [targets]}]
  (apply-affect world targets :rousing-speech 60000))

(defmethod apply-ability :salvo [world {:keys [targets]}])

(defmethod apply-ability :highest-bidder [world {:keys [targets]}]
  (reduce
    (fn [acc target]
      (update-in acc [:players target] heal 100))
    world
    targets))

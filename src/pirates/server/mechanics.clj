(ns pirates.server.mechanics
  (:require [pirates.shared.constants :as constants])
  (:import [java.util Date]))

(defmulti apply-ability (fn [world {:keys [type]}] type))
(defmulti find-targets (fn [world {:keys [type]}] type))
(defmulti range-check (fn [world {:keys [type]}] type))

(defmethod find-targets :other [world {:keys [player]}]
  (get-in world [:players player :selected]))

(defmethod find-targets :self [world {:keys [player]}]
  (get-in world [:players player]))

(defn distance [[x1 z1] [x2 z2]]
  (Math/sqrt (+ (* (- x2 x1) (- x2 x1))
                (* (- z2 z1) (- z2 z1)))))

(defn in-range? [world player r target]
  (let [ploc (get-in world [:players player :location])
        tloc (get-in world [:players target :location])]
    (and ploc tloc (<= (distance ploc tloc) r))))

(defmethod range-check :cannon [world {:keys [player targets]}]
  (let [r (* (:cannon constants/ranges) (get-in world [:players player :modifiers :cannon-range] 1))]
    (filter #(in-range? world player r %) targets)))

(defmethod range-check :default [world {:keys [targets]}]
  targets)

(defmethod apply-ability :fire [world {:keys [player firing t]}]
  (-> world
    (assoc-in [:players player :action-taken] t)
    (update-in [:players player :gun-crew-used] conj [t firing])))

(defmethod apply-ability :sails [world {:keys [target]}]
  (update world :sails not))

(defmethod apply-ability :letter-of-marque [world {:keys [targets]}]
  (update world :effects assoc :letter-of-marque (Date.)))

(defmethod apply-ability :salvo [world {:keys [targets]}])

(defmethod apply-ability :highest-bidder [world targets])

(ns pirates.client.world
  (:require [pirates.client.towns :as towns]))

(defn near? [x1 z1 x2 z2]
  (< (+ (js/Math.pow (- x2 x1) 2)
        (js/Math.pow (- z2 z1) 2))
     64))

(defn near-town? [ship towns]
  (let [shipx (.. ship -position -x)
        shipz (.. ship -position -z)]
    (first
      (for [town towns
            :let [[_ {[lat lon] :latlon}] town
                  [townx townz] (towns/coords lat lon)]
            :when (near? shipx shipz townx townz)]
        town))))

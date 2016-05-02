(ns pirates.server.ticker-tests
  (:require
    [clojure.test :refer :all]
    [pirates.server.ticker :as ticker]
    [pirates.server.world :as world])
  (:import [java.util Date]))

(def world1
  {:players {"Blackbeard" {:status [0 0 0 0 0 0 0]}
             "Red Rackham" {:status [0 0 0 0 0 0 0]}}})

(deftest ticker-can-tick-test
  (is (= world1 (ticker/tick world1 (Date. 0)))))

(defn has [actual msg pred]
  (is (pred actual) msg)
  actual)

(deftest activating-abilities-test
  (-> world1
    (world/with-status (Date. 0) "Blackbeard" [0 0 0 0 0 0 0] :fire)
    (has "activating fire"
         #(world/activating % "Blackbeard"))
    (ticker/tick (Date. 2000))
    (has "warmup complete"
         #(and (not (world/activating % "Blackbeard"))
               (get-in % [:players "Blackbeard" :cooldowns :fire])
               (get-in % [:players "Blackbeard" :action-taken])))
    (ticker/tick (Date. 7000))
    (has "cooldown complete"
         #(not (get-in % [:players "Blackbeard" :cooldowns :fire])))))

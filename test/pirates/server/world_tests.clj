(ns pirates.server.world-tests
  (:require
    [clojure.test :refer :all]
    [pirates.server.world :as world])
  (:import [java.util Date]))

(def world1
  {:players {"Blackbeard" {:status [0 0 0 0 0 0 0]}
             "Red Rackham" {:status [0 0 0 0 0 0 0]}}})

(deftest activating-abilities-test
  (is (not= world1
            (world/with-status world1 (Date. 0) "Blackbeard" [0 0 0 0 0 0 0] :fire))))

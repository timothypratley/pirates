(ns pirates.server.ticker-tests
  (:require
    [clojure.test :refer :all]
    [clojure.pprint :as pprint]
    [pirates.server.ticker :as ticker]
    [pirates.server.world :as world])
  (:import [java.util Date]))

(deftest empty-ticker-can-tick-test
  (is (= {} (ticker/tick {} (Date. 0)))))

(defmacro has
  ([actual sym form]
   `(has ~actual ~sym ~form nil))
  ([actual sym form msg]
   `(doto ~actual
      (as-> ~sym (is ~form ~msg)))))

(deftest activating-abilities-test
    (-> {}
      (world/with-status (Date. 0) "Blackbeard" [0 0 0 0 0 0 0] :fire)
      (has w (world/activating w "Blackbeard")
           "activating")
      (ticker/tick (Date. 100))
      (has w (world/activating w "Blackbeard"))
      (ticker/tick (Date. 2000))
      (has w (and (not (world/activating w "Blackbeard"))
                  (get-in w [:players "Blackbeard" :cooldowns :fire])
                  (get-in w [:players "Blackbeard" :action-taken]))
           "warmup complete")
      (ticker/tick (Date. 7000))
      (has w (not (get-in w [:players "Blackbeard" :cooldowns :fire]))
           "cooldown complete")))

(deftest cancelling-abilities-test
  (-> {}
    (world/with-status (Date. 0) "Blackbeard" [0 0 0 0 0 0 0] :fire)
    (has w (world/activating w "Blackbeard")
         "activating")
    (ticker/tick (Date. 1000))
    (world/with-status (Date. 1000) "Blackbeard" [0 0 0 0 0 0 0] :cancel)
    (has w (not (or (world/activating w "Blackbeard")
                    (get-in w [:players "Blackbeard" :cooldowns]))))))

(deftest next-activity-activates-after-first-finishes
  (-> {}
    (world/with-status (Date. 0) "Blackbeard" [0 0 0 0 0 0 0] :sails)
    (ticker/tick (Date. 2500))
    (world/with-status (Date. 2500) "Blackbeard" [0 0 0 0 0 0 0] :fire)
    (has w (and (world/activating w "Blackbeard")
                (get-in w [:players "Blackbeard" :next-ability])))
    (ticker/tick (Date. 3000))
    (ticker/tick (Date. 3500))
    (has w (and (= :fire (second (world/activating w "Blackbeard")))
                (not (get-in w [:players "Blackbeard" :next-ability]))))))

(deftest next-activity-only-applicable-for-one-second
  (-> {}
    (world/with-status (Date. 0) "Blackbeard" [0 0 0 0 0 0 0] :fire)
    (world/with-status (Date. 0) "Blackbeard" [0 0 0 0 0 0 0] :fire)
    (ticker/tick (Date. 2000))
    (ticker/tick (Date. 7000))
    (ticker/tick (Date. 2000))
    (ticker/tick (Date. 7000))))

(deftest cannon-fire-deals-damage)

(deftest ships-can-be-sunk)

(deftest activated-abilities-leave-effects)

(deftest healing-abilities-repair-hull)
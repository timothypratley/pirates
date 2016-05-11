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
      (world/with-status (Date. 0) "Blackbeard" [0 0 0 0 0 0 0] [:fire :fire-left])
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
    (world/with-status (Date. 0) "Blackbeard" [0 0 0 0 0 0 0] [:fire :fire-left])
    (has w (world/activating w "Blackbeard")
         "activating")
    (ticker/tick (Date. 1000))
    (world/with-status (Date. 1000) "Blackbeard" [0 0 0 0 0 0 0] [:cancel])
    (has w (not (or (world/activating w "Blackbeard")
                    (get-in w [:players "Blackbeard" :cooldowns]))))))

(deftest next-activity-activates-after-first-finishes
  (-> {}
    (world/with-status (Date. 0) "Blackbeard" [0 0 0 0 0 0 0] [:sails])
    (ticker/tick (Date. 2500))
    (world/with-status (Date. 2500) "Blackbeard" [0 0 0 0 0 0 0] [:fire 1])
    (has w (and (world/activating w "Blackbeard")
                (get-in w [:players "Blackbeard" :next-ability])))
    (ticker/tick (Date. 3000))
    (ticker/tick (Date. 3500))
    (has w (and (= :fire (second (world/activating w "Blackbeard")))
                (not (get-in w [:players "Blackbeard" :next-ability]))))))

(deftest next-activity-only-applicable-for-one-second
  (-> {}
    (world/with-status (Date. 0) "Blackbeard" [0 0 0 0 0 0 0] [:sails])
    (world/with-status (Date. 0) "Blackbeard" [0 0 0 0 0 0 0] [:fire :fire-left])
    (has w (get-in w [:players "Blackbeard" :next-ability]))
    (ticker/tick (Date. 1500))
    (has w (and (world/activating w "Blackbeard")
                (not (get-in w [:players "Blackbeard" :next-ability]))))))

(deftest cannon-fire-deals-damage
  (-> {}
    (world/with-status (Date. 0) "Blackbeard" [0 0 0 0 0 0 0] [:fire :fire-left])
    (world/with-status (Date. 0) "Redbeard" [0 0 0 0 0 0 0] nil)
    (ticker/tick (Date. 2000))
    (has w (:projectiles w))
    (ticker/tick (Date. 5000))
    (has w (and (= (get-in w [:players "Blackbeard" :hull]) 100)
                (< (get-in w [:players "Redbeard" :hull]) 100)))))

(deftest ships-can-be-sunk
  (-> {:players {"Redbeard" {:hull 5
                             :status [0 0 0 0 0 0 0]}}}
    (world/with-status (Date. 0) "Blackbeard" [0 0 0 0 0 0 0] [:fire :fire-left])
    (world/with-status (Date. 0) "Redbeard" [0 0 0 0 0 0 0] nil)
    (ticker/tick (Date. 2000))
    (has w (<= (get-in w [:players "Redbeard" :hull]) 0))))

(deftest cannon-fire-can-miss
  (-> {:players {"Redbeard" {:hull 100
                             :status [100 100 0 0 0 0 0]}}}
    (world/with-status (Date. 0) "Blackbeard" [0 0 0 0 0 0 0] [:fire :fire-left])
    (ticker/tick (Date. 2000))
    (has w (:projectiles w))
    (ticker/tick (Date. 5000))
    (has w (= (get-in w [:players "Redbeard" :hull]) 100))))

(deftest activated-abilities-leave-effects
  (-> {:players {"Blackbeard" {:captain-class :freebooter}}}
    (world/with-status (Date. 0) "Blackbeard" [0 0 0 0 0 0 0] [:letter-of-marque])
    (ticker/tick (Date. 1000))
    (has w (get-in w [:players "Blackbeard" :affected-by :letter-of-marque]))))

(deftest healing-abilities-repair-hull
  (let [initial-hull 10]
    (-> {:players {"Blackbeard" {:captain-class :freebooter
                                 :hull initial-hull}}}
      (world/with-status (Date. 0) "Blackbeard" [0 0 0 0 0 0 0] [:highest-bidder "Blackbeard"])
      (ticker/tick (Date. 1000))
      (has w (> (get-in w [:players "Blackbeard" :hull]) initial-hull)))))

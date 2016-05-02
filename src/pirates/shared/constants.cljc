(ns pirates.shared.constants)

;; TODO: forward/aft placements
(def ships
  {:sloop {:gun-crew-count 2}
   :caravel {:gun-crew-count 2}
   :merchantman {:gun-crew-count 2}
   :escort {:gun-crew-count 4}
   :frigate {:gun-crew-count 8}
   :galleon {:gun-crew-count 16}})

(def abilities
  {:fire {:targets :other
          :warmup 2
          :range :cannon
          :cooldown 5}
   :sails {:targets :self
           :warmup 3
           :cooldown 0}
   :letter-of-marque {:targets :self
                      :type :effect
                      :duration 15
                      ;; cooldown 1s per damage mitigated
                      }
   :salvo {:targets :other
           :warmup 2
           :range :cannon
           ;; cooldown 5s per cannon
           }
   :highest-bidder {:targets :any
                    :range :boarding
                    ;; :cooldown 1s per damage repaired
                    }
   :mutiny {:targets :other
            :range :boarding
            :cooldown 60}})

(def base-abilities
  #{:fire :sails})

(def captains
  {:freebooter {:abilities {:letter-of-marque :ultimate
                            :salvo :primary
                            :tbc :passive
                            :highest-bidder :secondary}}
   :mutineer {:abilities {:mass-mutiny :ultimate
                          :mutiny :primary
                          :rousing-speech :secondary
                          :tbc :passive}}})

(def ranges
  {:boarding 5
   :cannon 20
   :lookout 40
   :world 10000})
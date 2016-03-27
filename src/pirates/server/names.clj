(ns pirates.server.names
  (:require
    [clojure.string :as string]
    [clojure.core.memoize :as memoize]
    [pirates.server.world :as world]))

(def dictionary
  ["Long" "Short" "Tall" "Fat" "Skinney" "Big" "Small" "Eye-patch" "Toothy"
   "Scurvy" "Salty" "Briney" "Brackish"
   "Bloodly" "Dirty" "Laughing" "Jolly" "Sullen" "Morbid"
   "Peg Leg" "Parrot" "Beard" "Hook" "Harpoon" "Plank" "Wheel"
   "Red" "Black" "Green" "Blue" "Yellow" "Purple"
   "Silver" "Gold" "Copper" "Bronze" "Peices of Eight"
   "Booty" "Loot" "Chest" "Map" "Cave"
   "Cutlass" "Rapier" "Longsword" "Pistol" "Cannon"
   "Jib" "Mainsail" "Spinnaker" "Flag"
   "William" "Pete" "Don" "Rachel" "John" "Sam" "Catherine" "Charlotte"
   "James" "Roberto" "Flora" "Eric"
   "Caesar" "Anne" "Dirk" "Jean" "Ward" "Ryen" "Van" "Sir" "The" "La" "Jan"
   "Sea" "Dog" "Corsair" "Buccaneers" "Barron" "Le" "Picard"
   "Goose" "Albatros" "Rackham" "Privateer" "Smuggler" "Pirate" "Renegade"
   "Gibbs" "Crimp" "Dancing" "Singing" "Smiling" "Grinning" "Glaring" "Frowning"
   "Sparrow" "Fish" "Cutthroat" "Kidd"
   "Teach" "Bart" "Every" "Bonny" "Morgan" "Francois" "Drake" "Tsai" "Shih"
   "Pillaging" "Cannonball" "Swashbuckling" "Cowardly"])

(defn pirate-name []
  (string/join " " (repeatedly (+ 1 (rand-int 4)) #(rand-nth dictionary))))

(defn client-name [client-id]
  (first (filter (complement (:players @world/world)) (repeatedly #(pirate-name)))))

(def one-hour (* 1000 60 60 24))

(def pirate-name-memoized (memoize/ttl client-name :ttl/threshold one-hour))

(defn unique-pirate-name [{:keys [params]}]
  (pirate-name-memoized (:client-id params)))

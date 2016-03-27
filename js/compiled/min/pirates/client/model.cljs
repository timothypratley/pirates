(ns pirates.client.model
  (:require
    [reagent.core :as reagent]
    [pirates.client.towns :as towns]))

(defonce app-state
  (reagent/atom {:status :in-port
                 :towns towns/initial-towns}))

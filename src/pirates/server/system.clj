(ns pirates.server.system
  (:require
    [pirates.server.communication :refer [msg start-broadcast-thread]]
    [pirates.server.http-kit :refer [new-web-server]]
    [pirates.server.names :as names]
    [pirates.server.routes :refer [handler]]
    [pirates.server.sente :refer [new-channel-sockets]]
    [pirates.server.ticker :refer [new-ticker]]
    [com.stuartsierra.component :as component]
    [environ.core :refer [env]]
    [taoensso.sente.server-adapters.http-kit :refer [sente-web-server-adapter]]))

(def port (atom 3000))

(defn prod-system []
  ;; TODO: componentize or not
  (start-broadcast-thread)
  (component/system-map
    :ticker (new-ticker)
    :sente (new-channel-sockets msg sente-web-server-adapter {:user-id-fn names/unique-pirate-name})
    :web (new-web-server (env :http-port @port) #'handler)))

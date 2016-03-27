(ns pirates.server.system
  (:require
    [pirates.server.routes :refer [handler]]
    [pirates.server.communication :refer [msg start-broadcast-thread]]
    [pirates.server.http-kit :refer [new-web-server]]
    [pirates.server.sente :refer [new-channel-sockets]]
    [com.stuartsierra.component :as component]
    [environ.core :refer [env]]
    [taoensso.sente.server-adapters.http-kit :refer [sente-web-server-adapter]]
    [pirates.server.names :as names]))

(def port (atom 3000))

(defn prod-system []
  ;; TODO: componentize or not
  (start-broadcast-thread)
  (component/system-map
    :sente (new-channel-sockets msg sente-web-server-adapter {:user-id-fn names/unique-pirate-name})
    :web (new-web-server (env :http-port @port) #'handler)))

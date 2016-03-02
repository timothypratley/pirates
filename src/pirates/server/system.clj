(ns pirates.server.system
  (:require
   [pirates.server.routes :refer [handler]]
   [pirates.server.communication :refer [event-msg-handler]]
   [pirates.server.http-kit :refer [new-web-server]]
   [pirates.server.sente :refer [new-channel-sockets]]
   [com.stuartsierra.component :as component]
   [environ.core :refer [env]]
   [taoensso.sente.server-adapters.http-kit :refer [sente-web-server-adapter]]))

(defn prod-system []
  (component/system-map
   :sente (new-channel-sockets event-msg-handler sente-web-server-adapter)
   :web (new-web-server (env :http-port 3000) #'handler)))

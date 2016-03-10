(ns pirates.server.communication
  (:require
    [pirates.server.world :as world]
    [reloaded.repl :refer [system]]))

(def running
  (atom true))

(defn broadcast-world []
  (doseq [uid (some-> system :sente :connected-uids deref :any)]
    (when-let [chsk-send! (:chsk-send! (:sente system))]
      (chsk-send! uid [:pirates/players (:players @world/world)]))))

(defn broadcast-loop []
  (while @running
    (try
      (Thread/sleep 500)
      (broadcast-world)
      (catch Exception ex
        (println "Error sending world:" ex)))))

(defonce broadcast-thread
  (.start (Thread. broadcast-loop)))

(defmulti msg :id)

(defn event-msg-handler [{:keys [event] :as ev-msg}]
  (msg ev-msg))

;; Message Handlers

(defmethod msg :pirates/status [{:keys [client-id ?data]}]
  (world/add-player client-id ?data))

(defmethod msg :chsk/uidport-open [{:keys [client-id]}]
  (println "New connection:" client-id))

(defmethod msg :chsk/uidport-close [{:keys [ring-req]}]
  (when-let [uid (get-in ring-req [:session :uid])]
    (println "Disconnected:" uid)
    (world/remove-player uid)))

(defmethod msg :chsk/ws-ping [_])

(defmethod msg :default [{:keys [event ?reply-fn]}]
  (println "Unhandled event:" event)
  (when ?reply-fn
    (?reply-fn {:umatched-event-as-echoed-from-from-server event})))

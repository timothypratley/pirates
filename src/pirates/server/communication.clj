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

(defn broadcast-step []
  (try
    (Thread/sleep 2000)
    (broadcast-world)
    (catch Exception ex
      (println "Error sending world:" ex))))

(defn broadcast-loop []
  (while @running
    (broadcast-step)))

(defonce broadcast-thread
  (.start (Thread. broadcast-loop)))

(defmulti msg :id)

(defmethod msg :pirates/status [{:keys [?data uid]}]
  (world/add-player uid ?data))

(defmethod msg :chsk/uidport-open [{:keys [uid client-id]}]
  (println "New connection:" uid client-id))

(defmethod msg :chsk/uidport-close [{:keys [uid]}]
  (println "Disconnected:" uid)
  (world/remove-player uid))

(defmethod msg :chsk/ws-ping [_])

(defmethod msg :default [{:keys [event ?reply-fn]}]
  (println "Unhandled event:" event)
  (when ?reply-fn
    (?reply-fn {:umatched-event-as-echoed-from-from-server event})))

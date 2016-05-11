(ns pirates.server.communication
  (:require
    [pirates.server.world :as world]
    [reloaded.repl :refer [system]])
  (:import [java.util Date]))

(def running
  (atom true))

(defn broadcast-world []
  (doseq [uid (some-> system :sente :connected-uids deref :any)]
    (when-let [chsk-send! (:chsk-send! (:sente system))]
      (chsk-send! uid [:pirates/players @world/the-world]))))

(defn broadcaster []
  (while @running
    (try
      (Thread/sleep 500)
      (broadcast-world)
      (catch Exception ex
        (println "Error sending world:" ex)))))

(defn start-broadcast-thread []
  (.start (Thread. ^Runnable broadcaster)))

(defmulti msg :id)

(defmethod msg :pirates/status [{:keys [uid ?data]}]
  (world/update-player (Date.) uid ?data))

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

(ns pirates.client.communication
  (:require
    [pirates.client.config :as config]
    [pirates.client.logging :as log]
    [pirates.client.model :as model]
    [taoensso.sente :as sente]))

(declare chsk-send!)

(defmulti event-msg-handler :id)

(defn event-msg-handler* [{:as ev-msg :keys [id ?data event]}]
  (try
    (event-msg-handler ev-msg)
    (catch :default ex
      (log/debug ex))))

(defmethod event-msg-handler :default
  [{:keys [event]}]
  (log/debug "Unhandled event:" event))

(defmethod event-msg-handler :chsk/state
  [{:keys [?data]}]
  (if (= ?data {:first-open? true})
    (log/debug "Channel socket successfully established!")
    (log/debug "Channel socket state change:" ?data)))

(defmethod event-msg-handler :chsk/recv
  [{:keys [?data]}]
  ;; TODO: should be a dispatch type??
  (swap! model/app-state assoc
         :players (second ?data)
         :at (js/Date.)))

(defmethod event-msg-handler :chsk/handshake
  [{:keys [?data]}]
  (let [[?uid ?csrf-token] ?data]
    (log/debug "Handshake:" ?uid ?csrf-token
               (swap! model/app-state assoc :uid ?uid))))

;; TODO: what about rate limiting?
;; maybe on direction change etc?
(defn maybe-send-viewpoint [k r a b]
  (let [va (:user a)
        vb (:user b)]
    (when (not= va vb))))
      ;;(chsk-send! [:pirates/user (patchin/diff va vb)])

#_(add-watch session/state :k maybe-send-viewpoint)

#_
(defn get-chsk-url
  "Connect to a configured server instead of the page host"
  [protocol chsk-host chsk-path type]
  (let [protocol (case type :ajax protocol
                            :ws   (if (= protocol "https:") "wss:" "ws:"))]
    (str protocol "//" config/server chsk-path)))

(defn start []
  (let [{:keys [chsk ch-recv send-fn state]}
        (sente/make-channel-socket! "/chsk" {:type :auto
                                             :host config/server})]
    (def chsk-send! send-fn)
    (sente/start-chsk-router! ch-recv event-msg-handler*)
    (js/window.setInterval
      (fn send-status []
        (when-let [status (:user @model/app-state)]
          (chsk-send! [:pirates/status [status]])))
      200)))

(defn fire! [firing]
  ;(swap! model/app-state model/fire firing)
  (chsk-send! [:pirates/fired firing]))

(defn ability! [ability]
  ;(swap! model/app-state model/activate-ability ability)
  (chsk-send! [:pirates/ability ability]))

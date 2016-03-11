(ns pirates.client.communication
  (:require
    [pirates.client.logging :as log]
    [pirates.client.model :as model]
    [taoensso.sente :as sente]
    [taoensso.encore :as encore]))

(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/chsk" {:type :auto :host "localhost:3000"})]
  (def chsk chsk)
  (def ch-chsk ch-recv)
  (def chsk-send! send-fn)
  (def chsk-state state))

(defn login [user-id]
  (log/debug "Logging in with user-id" user-id (:csrf-token @chsk-state))
  (encore/ajax-lite
    "/login"
    {:method :post
     :params {:user-id (str user-id)}
     :headers {"X-CSRF-Token" (:csrf-token @chsk-state)}}
    (fn [ajax-resp]
      (if (:?error ajax-resp)
        (log/debug "Login failed:" ajax-resp)
        (do
          (log/debug "Login successful")
          (sente/chsk-reconnect! chsk))))))

;;;; Routing handlers

(defmulti event-msg-handler :id)
(defn event-msg-handler* [{:as ev-msg :keys [id ?data event]}]
  (event-msg-handler ev-msg))

(defmethod event-msg-handler :default
  [{:as ev-msg :keys [event]}]
  (log/debug "Unhandled event:" event))

(defmethod event-msg-handler :chsk/state
  [{:as ev-msg :keys [?data]}]
  (if (= ?data {:first-open? true})
    (log/debug "Channel socket successfully established!")
    (log/debug "Channel socket state change:" ?data)))

(defmethod event-msg-handler :chsk/recv
  [{:as ev-msg :keys [?data]}]
  (swap! model/app-state assoc :players (second ?data)))

(defmethod event-msg-handler :chsk/handshake
  [{:as ev-msg :keys [?data]}]
  (let [[?uid ?csrf-token] ?data]
    (log/debug "Handshake:" ?uid ?csrf-token)
    (swap! model/app-state assoc :uid ?uid)))

(def router (atom nil))

(defn stop-router! []
  (when-let [stop-f @router]
    (stop-f)))

(defn start-router! []
  (stop-router!)
  (reset! router (sente/start-chsk-router! ch-chsk event-msg-handler*)))

(start-router!)

;; TODO: what about rate limiting?
(defn maybe-send-viewpoint [k r a b]
  (let [va (:user a)
        vb (:user b)]
    (when (not= va vb)
      ;;(chsk-send! [:pirates/user (patchin/diff va vb)])
      )))

#_(add-watch session/state :k maybe-send-viewpoint)

(defn f []
  (when-let [status (:user @model/app-state)]
    (chsk-send! [:pirates/status status]))
  (js/window.setTimeout
    f
    200))

(f)
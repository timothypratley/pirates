(ns pirates.server.routes
  (:require
    [reloaded.repl :refer [system]]
    [compojure.core :refer [GET POST routes]]
    [compojure.route :refer [not-found resources]]
    [ring.middleware.anti-forgery]
    [ring.middleware.defaults :refer [site-defaults wrap-defaults]]))

(defn unique-uid [user-id]
  (or
   (first (drop-while (:any @(:connected-uids (:sente system)))
                      (take 100 (iterate #(str % (rand-int 100))
                                         (if (seq user-id)
                                           user-id
                                           "guest")))))
   user-id))

(defn login! [req]
  (let [{:keys [session params]} req
        {:keys [user-id]} params]
    (println "Login request:" params)
    {:status 200
     :session (assoc session :uid (unique-uid user-id))}))

(defn status [req]
  (prn "SYS" (into {} system))
  {:status 200})

(def site-routes
  (routes
    (GET "/status" req (status req))
    (GET "/chsk" req ((:ring-ajax-get-or-ws-handshake (:sente system)) req))
    (POST "/chsk" req ((:ring-ajax-post (:sente system)) req))
    (POST "/login" req (login! req))
    (resources "/")
    (not-found "Not Found")))

(def handler
  (wrap-defaults site-routes site-defaults))

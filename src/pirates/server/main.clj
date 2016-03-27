(ns pirates.server.main
  (:require
    [pirates.server.system :refer [prod-system] :as system]
    [reloaded.repl :as reloaded]
    [clojure.string :as string])
  (:gen-class))

(defn -main [& [port]]
  (when-not (string/blank? port)
    ;; TODO: do it nicer
    (reset! system/port (Integer/parseInt port)))
  (reloaded/set-init! prod-system)
  (reloaded/go)
  (println "Server started."))
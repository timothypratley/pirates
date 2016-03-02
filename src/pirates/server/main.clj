(ns pirates.server.main
  (:require
    [pirates.server.system :refer [prod-system]]
    [reloaded.repl :as reloaded])
  (:gen-class))

(defn -main [& args]
  (reloaded/set-init! prod-system)
  (reloaded/go)
  (println "Server started."))
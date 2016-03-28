(defproject pirates "0.1.0-SNAPSHOT"
  :description "An pirates.client game clone"
  :url "http://timothypratley.github.io/pirates.client"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.6.1"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.34"]
                 [org.clojure/core.async "0.2.374"]
                 [org.clojure/core.memoize "0.5.8"]
                 [com.stuartsierra/component "0.3.1"]
                 [com.taoensso/sente "1.8.1"]
                 [compojure "1.5.0"]
                 [cljsjs/three "0.0.72-0"]
                 [cljsjs/ocean "1.0.0"]
                 [bidi "2.0.4"]
                 [devcards "0.2.1-6"]
                 [environ "1.0.2"]
                 [http-kit "2.1.19"]
                 [reagent "0.5.1"]
                 [reloaded.repl "0.2.1"]
                 [ring "1.4.0"]
                 [ring/ring-defaults "0.2.0"]
                 [ring-cors "0.1.7"]
                 [timothypratley/patchin "0.3.5"]]

  :plugins [[lein-cljsbuild "1.1.3"]
            [lein-environ "1.0.2"]]

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["target" "resources/public/js/compiled"]

  :main ^:skip-aot pirates.server.main

  :figwheel {:css-dirs ["resources/public/css"]}

  :profiles
  {:dev {:env {:dev? "true"}
         :plugins [[lein-figwheel "0.5.1"]
                   ;; TODO: remove
                   [fipp "0.6.4"]]
         :cljsbuild
         {:builds
          {"dev"
           {:source-paths ["src" "dev"]
            :figwheel {}
            :compiler {:main pirates.client.main
                       :asset-path "js/compiled/client"
                       :output-to "resources/public/js/compiled/pirates.client.js"
                       :output-dir "resources/public/js/compiled/client"
                       :source-map-timestamp true}}
           "devcards"
           {:source-paths ["src" "dev"]
            :figwheel {:devcards true}
            :compiler {:main pirates.client.main
                       :asset-path "js/compiled/devcards"
                       :output-to "resources/public/js/compiled/devcards.js"
                       :output-dir "resources/public/js/compiled/devcards"
                       :source-map-timestamp true}}
           "min"
           {:source-paths ["src" "prod"]
            :compiler {:output-to "resources/public/js/compiled/pirates.client.js"
                       :main pirates.client.main
                       :optimizations :simple}}}}}
                       ;; TODO: make compatible with :advanced mode
                       ;;:source-map "resources/public/js/compiled/pirates.client.js.map"
                       ;;:source-map-timestamp true}}}}}
   :uberjar {:uberjar-name "pirates-standalone.jar"
             :aot :all}})

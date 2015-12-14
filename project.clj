(defproject pirates "0.1.0-SNAPSHOT"
  :description "An pirates game clone"
  :url "http://timothypratley.github.io/pirates"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/core.async "0.2.374"]
                 [cljsjs/three "0.0.72-0"]
                 [cljsjs/ocean "1.0.0"]
                 [devcards "0.2.1"]
                 [reagent "0.5.1"]]

  :plugins [[lein-cljsbuild "1.1.1"]
            [lein-figwheel "0.5.0-2"]]

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["target"
                                    "js/compiled"
                                    "resources/public/js/compiled"
                                    "resources/public/js/devcards"]

  :cljsbuild
  {:builds
   {"dev"
    {:source-paths ["src"]
     :figwheel {}
     :compiler {:main pirates.core
                :asset-path "js/compiled/out"
                :output-to "resources/public/js/compiled/pirates.js"
                :output-dir "resources/public/js/compiled/out"
                :source-map-timestamp true}}
    "devcards"
    {:source-paths ["src"]
     :figwheel {:devcards true}
     :compiler {:main pirates.core
                :asset-path "js/devcards"
                :output-to "resources/public/js/compiled/devcards.js"
                :output-dir "resources/public/js/devcards"
                :source-map-timestamp true}}
    "min"
    {:source-paths ["src"]
     :compiler {:output-to "resources/public/js/compiled/pirates.js"
                :output-dir "resources/public/js/compiled"
                :main pirates.core
                :optimizations :simple
                ;; TODO: make compatible with :advanced mode
                :source-map "resources/public/js/compiled/pirates.js.map"
                :source-map-timestamp true}}}}

  :figwheel {:css-dirs ["resources/public/css"]})

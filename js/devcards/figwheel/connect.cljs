(ns figwheel.connect (:require [devcards.core :include-macros true] [pirates.client.main] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:devcards true, :build-id "devcards", :websocket-url "ws://localhost:3449/figwheel-ws"})
(devcards.core/start-devcard-ui!)


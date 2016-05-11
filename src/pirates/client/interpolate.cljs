(ns pirates.client.interpolate
  (:require
    [devcards.core :refer-macros [defcard-rg]]))

(defn forward [vector2 heading t]
  (.add vector2
    (js/THREE.Vector2.
      (+ (* t (js/Math.cos heading)))
      (- (* t (js/Math.sin heading))))))

(defn bezier [a heading1 d heading2 t]
  ;;(prn "A" (.-x a) (.-y a) heading1 1 "B" (.-x d) (.-y d) heading2 t)
  (let [dist (/ (.distanceTo a d) 2.0)
        b (-> a
            (.clone)
            (forward heading1 dist))
        c (-> d
            (.clone)
            (forward heading2 (- dist)))
        curve (js/THREE.CubicBezierCurve. a b c d)
        position (.getPoint curve t)
        tangent (.getTangent curve t)
        ;; TODO: latest THREE has an angle function on Vector2
        heading (- (js/Math.atan2 (.-y tangent) (.-x tangent)))]
    [(.-x position) (.-y position) heading]))

;; TODO: try with no interp
(defn predict [[x1 z1 heading1] [x2 z2 heading2] at]
  (let [dt (/ (- (.getTime (js/Date.)) at) 1000.0)
        target (forward (js/THREE.Vector2. x2 z2) heading2 (* 3 dt))]
    (if (< 0 dt 0.9)
      (bezier
        (js/THREE.Vector2. x1 z1) heading1
        target heading2
        dt)
      [(.-x target) (.-y target) heading2])))


(defcard-rg bezier-example
  [:svg
   {:view-box "-0.1 -0.1 1.2 1.2"}
   (doall
     (for [i (range 11)
           :let [[x y heading] (bezier
                                 (js/THREE.Vector2. 0 0) 0
                                 (js/THREE.Vector2. 1 1) 0
                                 (/ i 10))]]
       ^{:key i}
       [:g
        {:transform (str
                      "translate(" x "," y ") "
                      "rotate (" (* 180 (/ heading js/Math.PI)) ")")}
        [:path {:d "M0.01,0 L-0.008,0.01 L-0.008,-0.01"}]
        [:line
         {:x1 -0.03
          :x2 0.03
          :stroke "black"
          :stroke-width 0.005
          :stroke-linecap "round"}]]))])

(defcard-rg predict-example
  [:svg
   {:view-box "-0.1 -0.1 6.2 1.2"}
   (doall
     (for [i (range 11)
           :let [at (- (.getTime (js/Date.)) (* (/ i 5) 1000))
                 [x y heading] (predict [0 0 0] [0 1 0] at)]]
       ^{:key i}
       [:g
        {:transform (str
                      "translate(" x "," y ") "
                      "rotate (" (* 180 (/ heading js/Math.PI)) ")")}
        [:path {:d "M0.01,0 L-0.008,0.01 L-0.008,-0.01"}]
        [:line
         {:x1 -0.03
          :x2 0.03
          :stroke "black"
          :stroke-width 0.005
          :stroke-linecap "round"}]]))])

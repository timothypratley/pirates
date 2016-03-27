// Compiled by ClojureScript 1.8.34 {}
goog.provide('pirates.client.interpolate');
goog.require('cljs.core');
goog.require('devcards.core');
pirates.client.interpolate.forward = (function pirates$client$interpolate$forward(vector2,heading,t){
return vector2.add((new THREE.Vector2((t * Math.cos(heading)),(- (t * Math.sin(heading))))));
});
pirates.client.interpolate.bezier = (function pirates$client$interpolate$bezier(a,heading1,d,heading2,t){
cljs.core.prn.call(null,"A",a.x,a.y,heading1,(1),"B",d.x,d.y,heading2,t);

var dist = (a.distanceTo(d) / 2.0);
var b = pirates.client.interpolate.forward.call(null,a.clone(),heading1,dist);
var c = pirates.client.interpolate.forward.call(null,d.clone(),heading2,(- dist));
var curve = (new THREE.CubicBezierCurve(a,b,c,d));
var position = curve.getPoint(t);
var tangent = curve.getTangent(t);
var heading = (- Math.atan2(tangent.y,tangent.x));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [position.x,position.y,heading], null);
});
pirates.client.interpolate.predict = (function pirates$client$interpolate$predict(p__37317,p__37318,at){
var vec__37321 = p__37317;
var x1 = cljs.core.nth.call(null,vec__37321,(0),null);
var z1 = cljs.core.nth.call(null,vec__37321,(1),null);
var heading1 = cljs.core.nth.call(null,vec__37321,(2),null);
var vec__37322 = p__37318;
var x2 = cljs.core.nth.call(null,vec__37322,(0),null);
var z2 = cljs.core.nth.call(null,vec__37322,(1),null);
var heading2 = cljs.core.nth.call(null,vec__37322,(2),null);
var dt = (((new Date()).getTime() - at) / 1000.0);
var target = pirates.client.interpolate.forward.call(null,(new THREE.Vector2(x2,z2)),heading2,((3) * dt));
if((((0) < dt)) && ((dt < 0.9))){
return pirates.client.interpolate.bezier.call(null,(new THREE.Vector2(x1,z1)),heading1,target,heading2,dt);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [target.x,target.y,heading2], null);
}
});

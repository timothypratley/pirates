// Compiled by ClojureScript 1.8.34 {}
goog.provide('pirates.client.scene');
goog.require('cljs.core');
goog.require('pirates.client.world');
goog.require('pirates.client.interpolate');
goog.require('pirates.client.scenery');
goog.require('pirates.client.text_sprite');
pirates.client.scene.make_scene = (function pirates$client$scene$make_scene(directional_light_position){
var G__37327 = (new THREE.Scene());
G__37327.add((new THREE.AmbientLight((8947848))));

G__37327.add((function (){var G__37328 = (new THREE.DirectionalLight((16777096),(1)));
G__37328.position.copy(directional_light_position);

return G__37328;
})());

return G__37327;
});
pirates.client.scene.make_ship = (function pirates$client$scene$make_ship(scene,name){
var G__37330 = (new THREE.Object3D());
G__37330.name = name;

G__37330.add(pirates.client.text_sprite.make.call(null,name));

pirates.client.scenery.load_model.call(null,G__37330,"pirate-ship-large.json");

scene.add(G__37330);

return G__37330;
});
pirates.client.scene.wave_roll = (function pirates$client$scene$wave_roll(ship,t,steer){
var temp__4657__auto__ = ship.getObjectByName("model");
if(cljs.core.truth_(temp__4657__auto__)){
var model = temp__4657__auto__;
model.rotation.z = (Math.sin((t / (500))) / (20));

if((steer === (0))){
return model.rotation.x = (Math.sin((t / (600))) / (20));
} else {
return model.rotation.x = (steer * 0.2);
}
} else {
return null;
}
});
pirates.client.scene.other_players = (function pirates$client$scene$other_players(t,app_state,scene){
var at = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));
var seq__37345 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)));
var chunk__37348 = null;
var count__37349 = (0);
var i__37350 = (0);
while(true){
if((i__37350 < count__37349)){
var vec__37353 = cljs.core._nth.call(null,chunk__37348,i__37350);
var player_id = cljs.core.nth.call(null,vec__37353,(0),null);
var vec__37354 = cljs.core.nth.call(null,vec__37353,(1),null);
var x2 = cljs.core.nth.call(null,vec__37354,(0),null);
var z2 = cljs.core.nth.call(null,vec__37354,(1),null);
var heading2 = cljs.core.nth.call(null,vec__37354,(2),null);
var steer = cljs.core.nth.call(null,vec__37354,(3),null);
if(cljs.core.not_EQ_.call(null,player_id,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))){
var previous_37359 = scene.getObjectByName(player_id);
var ship_37360 = (function (){var or__6210__auto__ = previous_37359;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return pirates.client.scene.make_ship.call(null,scene,player_id);
}
})();
var heading1_37361 = ship_37360.rotation.y;
var x1_37362 = ship_37360.position.x;
var z1_37363 = ship_37360.position.z;
var vec__37355_37364 = pirates.client.interpolate.predict.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_37362,z1_37363,heading1_37361], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,z2,heading2], null),at);
var x_37365 = cljs.core.nth.call(null,vec__37355_37364,(0),null);
var z_37366 = cljs.core.nth.call(null,vec__37355_37364,(1),null);
var heading_37367 = cljs.core.nth.call(null,vec__37355_37364,(2),null);
ship_37360.position.set(x_37365,(0),z_37366);

ship_37360.rotation.y = heading_37367;

pirates.client.scene.wave_roll.call(null,ship_37360,(t + heading_37367),steer);

var G__37368 = seq__37345;
var G__37369 = chunk__37348;
var G__37370 = count__37349;
var G__37371 = (i__37350 + (1));
seq__37345 = G__37368;
chunk__37348 = G__37369;
count__37349 = G__37370;
i__37350 = G__37371;
continue;
} else {
var G__37372 = seq__37345;
var G__37373 = chunk__37348;
var G__37374 = count__37349;
var G__37375 = (i__37350 + (1));
seq__37345 = G__37372;
chunk__37348 = G__37373;
count__37349 = G__37374;
i__37350 = G__37375;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37345);
if(temp__4657__auto__){
var seq__37345__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37345__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__37345__$1);
var G__37376 = cljs.core.chunk_rest.call(null,seq__37345__$1);
var G__37377 = c__7021__auto__;
var G__37378 = cljs.core.count.call(null,c__7021__auto__);
var G__37379 = (0);
seq__37345 = G__37376;
chunk__37348 = G__37377;
count__37349 = G__37378;
i__37350 = G__37379;
continue;
} else {
var vec__37356 = cljs.core.first.call(null,seq__37345__$1);
var player_id = cljs.core.nth.call(null,vec__37356,(0),null);
var vec__37357 = cljs.core.nth.call(null,vec__37356,(1),null);
var x2 = cljs.core.nth.call(null,vec__37357,(0),null);
var z2 = cljs.core.nth.call(null,vec__37357,(1),null);
var heading2 = cljs.core.nth.call(null,vec__37357,(2),null);
var steer = cljs.core.nth.call(null,vec__37357,(3),null);
if(cljs.core.not_EQ_.call(null,player_id,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))){
var previous_37380 = scene.getObjectByName(player_id);
var ship_37381 = (function (){var or__6210__auto__ = previous_37380;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return pirates.client.scene.make_ship.call(null,scene,player_id);
}
})();
var heading1_37382 = ship_37381.rotation.y;
var x1_37383 = ship_37381.position.x;
var z1_37384 = ship_37381.position.z;
var vec__37358_37385 = pirates.client.interpolate.predict.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_37383,z1_37384,heading1_37382], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,z2,heading2], null),at);
var x_37386 = cljs.core.nth.call(null,vec__37358_37385,(0),null);
var z_37387 = cljs.core.nth.call(null,vec__37358_37385,(1),null);
var heading_37388 = cljs.core.nth.call(null,vec__37358_37385,(2),null);
ship_37381.position.set(x_37386,(0),z_37387);

ship_37381.rotation.y = heading_37388;

pirates.client.scene.wave_roll.call(null,ship_37381,(t + heading_37388),steer);

var G__37389 = cljs.core.next.call(null,seq__37345__$1);
var G__37390 = null;
var G__37391 = (0);
var G__37392 = (0);
seq__37345 = G__37389;
chunk__37348 = G__37390;
count__37349 = G__37391;
i__37350 = G__37392;
continue;
} else {
var G__37393 = cljs.core.next.call(null,seq__37345__$1);
var G__37394 = null;
var G__37395 = (0);
var G__37396 = (0);
seq__37345 = G__37393;
chunk__37348 = G__37394;
count__37349 = G__37395;
i__37350 = G__37396;
continue;
}
}
} else {
return null;
}
}
break;
}
});
pirates.client.scene.world_map_three_render = (function pirates$client$scene$world_map_three_render(t,app_state,renderer,scene,camera,ship,water){
pirates.client.scene.other_players.call(null,t,app_state,scene);

pirates.client.scene.wave_roll.call(null,ship,t,new cljs.core.Keyword(null,"steer","steer",1705380684).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)),new cljs.core.Keyword(null,"sailing","sailing",976626619))){
ship.translateX(0.05);

cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ship.position.x,ship.position.z,ship.rotation.y,new cljs.core.Keyword(null,"steer","steer",1705380684).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))], null));

var temp__4657__auto___37397 = pirates.client.world.near_town_QMARK_.call(null,ship,new cljs.core.Keyword(null,"towns","towns",523997405).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)));
if(cljs.core.truth_(temp__4657__auto___37397)){
var town_37398 = temp__4657__auto___37397;
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"in-port","in-port",-1489220602),new cljs.core.Keyword(null,"town","town",1921168203),town_37398);
} else {
}
} else {
}

water.material.uniforms.time.value = (water.material.uniforms.time.value + ((1) / (480)));

water.render();

return renderer.render(scene,camera);
});

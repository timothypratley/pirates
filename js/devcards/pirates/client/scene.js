// Compiled by ClojureScript 1.8.34 {}
goog.provide('pirates.client.scene');
goog.require('cljs.core');
goog.require('pirates.client.world');
goog.require('pirates.client.interpolate');
goog.require('pirates.client.scenery');
goog.require('pirates.client.text_sprite');
pirates.client.scene.make_scene = (function pirates$client$scene$make_scene(directional_light_position){
var G__83280 = (new THREE.Scene());
G__83280.add((new THREE.AmbientLight((8947848))));

G__83280.add((function (){var G__83281 = (new THREE.DirectionalLight((16777096),(1)));
G__83281.position.copy(directional_light_position);

return G__83281;
})());

return G__83280;
});
pirates.client.scene.make_ship = (function pirates$client$scene$make_ship(scene,name){
var G__83283 = (new THREE.Object3D());
G__83283.name = name;

G__83283.add(pirates.client.text_sprite.make.call(null,name));

pirates.client.scenery.load_model.call(null,G__83283,"pirate-ship-large.json");

scene.add(G__83283);

return G__83283;
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
var seq__83298 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)));
var chunk__83301 = null;
var count__83302 = (0);
var i__83303 = (0);
while(true){
if((i__83303 < count__83302)){
var vec__83306 = cljs.core._nth.call(null,chunk__83301,i__83303);
var player_id = cljs.core.nth.call(null,vec__83306,(0),null);
var vec__83307 = cljs.core.nth.call(null,vec__83306,(1),null);
var x2 = cljs.core.nth.call(null,vec__83307,(0),null);
var z2 = cljs.core.nth.call(null,vec__83307,(1),null);
var heading2 = cljs.core.nth.call(null,vec__83307,(2),null);
var steer = cljs.core.nth.call(null,vec__83307,(3),null);
if(cljs.core.not_EQ_.call(null,player_id,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))){
var previous_83312 = scene.getObjectByName(player_id);
var ship_83313 = (function (){var or__18438__auto__ = previous_83312;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return pirates.client.scene.make_ship.call(null,scene,player_id);
}
})();
var heading1_83314 = ship_83313.rotation.y;
var x1_83315 = ship_83313.position.x;
var z1_83316 = ship_83313.position.z;
var vec__83308_83317 = pirates.client.interpolate.predict.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_83315,z1_83316,heading1_83314], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,z2,heading2], null),at);
var x_83318 = cljs.core.nth.call(null,vec__83308_83317,(0),null);
var z_83319 = cljs.core.nth.call(null,vec__83308_83317,(1),null);
var heading_83320 = cljs.core.nth.call(null,vec__83308_83317,(2),null);
ship_83313.position.set(x_83318,(0),z_83319);

ship_83313.rotation.y = heading_83320;

pirates.client.scene.wave_roll.call(null,ship_83313,(t + heading_83320),steer);

var G__83321 = seq__83298;
var G__83322 = chunk__83301;
var G__83323 = count__83302;
var G__83324 = (i__83303 + (1));
seq__83298 = G__83321;
chunk__83301 = G__83322;
count__83302 = G__83323;
i__83303 = G__83324;
continue;
} else {
var G__83325 = seq__83298;
var G__83326 = chunk__83301;
var G__83327 = count__83302;
var G__83328 = (i__83303 + (1));
seq__83298 = G__83325;
chunk__83301 = G__83326;
count__83302 = G__83327;
i__83303 = G__83328;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__83298);
if(temp__4657__auto__){
var seq__83298__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83298__$1)){
var c__19249__auto__ = cljs.core.chunk_first.call(null,seq__83298__$1);
var G__83329 = cljs.core.chunk_rest.call(null,seq__83298__$1);
var G__83330 = c__19249__auto__;
var G__83331 = cljs.core.count.call(null,c__19249__auto__);
var G__83332 = (0);
seq__83298 = G__83329;
chunk__83301 = G__83330;
count__83302 = G__83331;
i__83303 = G__83332;
continue;
} else {
var vec__83309 = cljs.core.first.call(null,seq__83298__$1);
var player_id = cljs.core.nth.call(null,vec__83309,(0),null);
var vec__83310 = cljs.core.nth.call(null,vec__83309,(1),null);
var x2 = cljs.core.nth.call(null,vec__83310,(0),null);
var z2 = cljs.core.nth.call(null,vec__83310,(1),null);
var heading2 = cljs.core.nth.call(null,vec__83310,(2),null);
var steer = cljs.core.nth.call(null,vec__83310,(3),null);
if(cljs.core.not_EQ_.call(null,player_id,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))){
var previous_83333 = scene.getObjectByName(player_id);
var ship_83334 = (function (){var or__18438__auto__ = previous_83333;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return pirates.client.scene.make_ship.call(null,scene,player_id);
}
})();
var heading1_83335 = ship_83334.rotation.y;
var x1_83336 = ship_83334.position.x;
var z1_83337 = ship_83334.position.z;
var vec__83311_83338 = pirates.client.interpolate.predict.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_83336,z1_83337,heading1_83335], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,z2,heading2], null),at);
var x_83339 = cljs.core.nth.call(null,vec__83311_83338,(0),null);
var z_83340 = cljs.core.nth.call(null,vec__83311_83338,(1),null);
var heading_83341 = cljs.core.nth.call(null,vec__83311_83338,(2),null);
ship_83334.position.set(x_83339,(0),z_83340);

ship_83334.rotation.y = heading_83341;

pirates.client.scene.wave_roll.call(null,ship_83334,(t + heading_83341),steer);

var G__83342 = cljs.core.next.call(null,seq__83298__$1);
var G__83343 = null;
var G__83344 = (0);
var G__83345 = (0);
seq__83298 = G__83342;
chunk__83301 = G__83343;
count__83302 = G__83344;
i__83303 = G__83345;
continue;
} else {
var G__83346 = cljs.core.next.call(null,seq__83298__$1);
var G__83347 = null;
var G__83348 = (0);
var G__83349 = (0);
seq__83298 = G__83346;
chunk__83301 = G__83347;
count__83302 = G__83348;
i__83303 = G__83349;
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

var temp__4657__auto___83350 = pirates.client.world.near_town_QMARK_.call(null,ship,new cljs.core.Keyword(null,"towns","towns",523997405).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)));
if(cljs.core.truth_(temp__4657__auto___83350)){
var town_83351 = temp__4657__auto___83350;
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"in-port","in-port",-1489220602),new cljs.core.Keyword(null,"town","town",1921168203),town_83351);
} else {
}
} else {
}

water.material.uniforms.time.value = (water.material.uniforms.time.value + ((1) / (480)));

water.render();

return renderer.render(scene,camera);
});

//# sourceMappingURL=scene.js.map?rel=1459053684384
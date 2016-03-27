// Compiled by ClojureScript 1.8.34 {}
goog.provide('pirates.client.keyboard');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events.KeyCodes');
pirates.client.keyboard.create = (function pirates$client$keyboard$create(){
var key_codes = {};
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"codes","codes",-760505543),key_codes,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (key_codes){
return (function pirates$client$keyboard$create_$_on_key_change(e){
return (key_codes[e.keyCode] = cljs.core._EQ_.call(null,e.type,"keydown"));
});})(key_codes))
], null);
});
pirates.client.keyboard.listen = (function pirates$client$keyboard$listen(var_args){
var args37236 = [];
var len__7279__auto___37242 = arguments.length;
var i__7280__auto___37243 = (0);
while(true){
if((i__7280__auto___37243 < len__7279__auto___37242)){
args37236.push((arguments[i__7280__auto___37243]));

var G__37244 = (i__7280__auto___37243 + (1));
i__7280__auto___37243 = G__37244;
continue;
} else {
}
break;
}

var G__37238 = args37236.length;
switch (G__37238) {
case 1:
return pirates.client.keyboard.listen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pirates.client.keyboard.listen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37236.length)].join('')));

}
});

pirates.client.keyboard.listen.cljs$core$IFn$_invoke$arity$1 = (function (o){
return pirates.client.keyboard.listen.call(null,o,document);
});

pirates.client.keyboard.listen.cljs$core$IFn$_invoke$arity$2 = (function (p__37239,dom_element){
var map__37240 = p__37239;
var map__37240__$1 = ((((!((map__37240 == null)))?((((map__37240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37240):map__37240);
var o = map__37240__$1;
var handler = cljs.core.get.call(null,map__37240__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
o.dom_element = dom_element;

goog.events.listen(dom_element,"keydown",handler);

return goog.events.listen(dom_element,"keyup",handler);
});

pirates.client.keyboard.listen.cljs$lang$maxFixedArity = 2;
pirates.client.keyboard.unlisten = (function pirates$client$keyboard$unlisten(p__37246){
var map__37249 = p__37246;
var map__37249__$1 = ((((!((map__37249 == null)))?((((map__37249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37249):map__37249);
var o = map__37249__$1;
var handler = cljs.core.get.call(null,map__37249__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var dom_element = o.dom_element;
goog.events.unlisten(dom_element,"keydown",handler);

return goog.events.unlisten(dom_element,"keyup",handler);
});
pirates.client.keyboard.pressed_QMARK_ = (function pirates$client$keyboard$pressed_QMARK_(p__37251,key_codes){
var map__37254 = p__37251;
var map__37254__$1 = ((((!((map__37254 == null)))?((((map__37254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37254):map__37254);
var codes = cljs.core.get.call(null,map__37254__$1,new cljs.core.Keyword(null,"codes","codes",-760505543));
return cljs.core.every_QMARK_.call(null,((function (map__37254,map__37254__$1,codes){
return (function (k){
return (codes[k]);
});})(map__37254,map__37254__$1,codes))
,key_codes);
});
pirates.client.keyboard.altitude = (function pirates$client$keyboard$altitude(camera,dy){
camera.position.y = (function (){var x__6548__auto__ = (500);
var y__6549__auto__ = (function (){var x__6541__auto__ = (1);
var y__6542__auto__ = (camera.position.y + (camera.position.y / dy));
return ((x__6541__auto__ > y__6542__auto__) ? x__6541__auto__ : y__6542__auto__);
})();
return ((x__6548__auto__ < y__6549__auto__) ? x__6548__auto__ : y__6549__auto__);
})();

return camera.lookAt((new THREE.Vector3((0),(camera.position.y / 1.5),(0))));
});
pirates.client.keyboard.pan = (function pirates$client$keyboard$pan(camera,dr){
return camera.position = null;
});
if(typeof pirates.client.keyboard.cooldowns !== 'undefined'){
} else {
pirates.client.keyboard.cooldowns = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
pirates.client.keyboard.normalize_angle = (function pirates$client$keyboard$normalize_angle(a){
while(true){
if((a > Math.PI)){
var G__37256 = (a - ((2) * Math.PI));
a = G__37256;
continue;
} else {
if((a < (- Math.PI))){
var G__37257 = (a + ((2) * Math.PI));
a = G__37257;
continue;
} else {
return a;

}
}
break;
}
});
pirates.client.keyboard.blink = (function pirates$client$keyboard$blink(ship){
return ship.translateX((-50));
});
pirates.client.keyboard.bkb = (function pirates$client$keyboard$bkb(model){
return model.scale.set((2),(2),(2));
});
pirates.client.keyboard.submerge = (function pirates$client$keyboard$submerge(ship){
return ship.translateY((-5));
});
pirates.client.keyboard.key_bindings = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentHashSet.fromArray([goog.events.KeyCodes.LEFT], true)], true),new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentHashSet.fromArray([goog.events.KeyCodes.RIGHT], true)], true),new cljs.core.Keyword(null,"up","up",-269712113),cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentHashSet.fromArray([goog.events.KeyCodes.UP], true)], true),new cljs.core.Keyword(null,"down","down",1565245570),cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentHashSet.fromArray([goog.events.KeyCodes.DOWN], true)], true),new cljs.core.Keyword(null,"primary","primary",817773892),cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentHashSet.fromArray([goog.events.KeyCodes.ONE], true)], true),new cljs.core.Keyword(null,"secondary","secondary",-669381460),cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentHashSet.fromArray([goog.events.KeyCodes.TWO], true)], true),new cljs.core.Keyword(null,"ultimate","ultimate",-1075429817),cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentHashSet.fromArray([goog.events.KeyCodes.THREE], true)], true)], null);
pirates.client.keyboard.steers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),(1),new cljs.core.Keyword(null,"right","right",-452581833),(-1)], null);
pirates.client.keyboard.altitudes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"up","up",-269712113),(10),new cljs.core.Keyword(null,"down","down",1565245570),(-10)], null);
pirates.client.keyboard.sum_keys = (function pirates$client$keyboard$sum_keys(kb,m){
return cljs.core.reduce.call(null,(function pirates$client$keyboard$sum_keys_$_sum_deltas(acc,p__37262){
var vec__37264 = p__37262;
var dir = cljs.core.nth.call(null,vec__37264,(0),null);
var delta = cljs.core.nth.call(null,vec__37264,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,((function (vec__37264,dir,delta){
return (function (p1__37258_SHARP_){
return pirates.client.keyboard.pressed_QMARK_.call(null,kb,p1__37258_SHARP_);
});})(vec__37264,dir,delta))
,pirates.client.keyboard.key_bindings.call(null,dir)))){
return (acc + delta);
} else {
return acc;
}
}),(0),m);
});
pirates.client.keyboard.handle_keyboard = (function pirates$client$keyboard$handle_keyboard(app_state,kb,camera,ship){
var steer_37277 = pirates.client.keyboard.sum_keys.call(null,kb,pirates.client.keyboard.steers);
if((steer_37277 === (0))){
} else {
ship.rotation.y = pirates.client.keyboard.normalize_angle.call(null,(ship.rotation.y + (steer_37277 * 0.03)));
}

cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"steer","steer",1705380684),steer_37277);

var dy_37278 = pirates.client.keyboard.sum_keys.call(null,kb,pirates.client.keyboard.altitudes);
if((dy_37278 === (0))){
} else {
pirates.client.keyboard.altitude.call(null,camera,dy_37278);
}

var seq__37271 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.fromArray([goog.events.KeyCodes.Q], true),(function pirates$client$keyboard$handle_keyboard_$_a_ultimate(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ultimate","ultimate",-1075429817).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pirates.client.keyboard.cooldowns)))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,pirates.client.keyboard.cooldowns,cljs.core.assoc,new cljs.core.Keyword(null,"ultimate","ultimate",-1075429817),(60));
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.fromArray([goog.events.KeyCodes.W], true),(function pirates$client$keyboard$handle_keyboard_$_a_w(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pirates.client.keyboard.cooldowns)))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,pirates.client.keyboard.cooldowns,cljs.core.assoc,new cljs.core.Keyword(null,"w","w",354169001),(60));
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.fromArray([goog.events.KeyCodes.E], true),(function pirates$client$keyboard$handle_keyboard_$_a_e(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pirates.client.keyboard.cooldowns)))){
return null;
} else {
var temp__4657__auto__ = (ship.children[(1)]);
if(cljs.core.truth_(temp__4657__auto__)){
var model = temp__4657__auto__;
model.scale.set((2),(2),(2));

return cljs.core.swap_BANG_.call(null,pirates.client.keyboard.cooldowns,cljs.core.assoc,new cljs.core.Keyword(null,"e","e",1381269198),(60));
} else {
return null;
}
}
})], null)], null));
var chunk__37272 = null;
var count__37273 = (0);
var i__37274 = (0);
while(true){
if((i__37274 < count__37273)){
var vec__37275 = cljs.core._nth.call(null,chunk__37272,i__37274);
var ks = cljs.core.nth.call(null,vec__37275,(0),null);
var action = cljs.core.nth.call(null,vec__37275,(1),null);
if(cljs.core.truth_(pirates.client.keyboard.pressed_QMARK_.call(null,kb,ks))){
action.call(null);
} else {
}

var G__37279 = seq__37271;
var G__37280 = chunk__37272;
var G__37281 = count__37273;
var G__37282 = (i__37274 + (1));
seq__37271 = G__37279;
chunk__37272 = G__37280;
count__37273 = G__37281;
i__37274 = G__37282;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37271);
if(temp__4657__auto__){
var seq__37271__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37271__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__37271__$1);
var G__37283 = cljs.core.chunk_rest.call(null,seq__37271__$1);
var G__37284 = c__7021__auto__;
var G__37285 = cljs.core.count.call(null,c__7021__auto__);
var G__37286 = (0);
seq__37271 = G__37283;
chunk__37272 = G__37284;
count__37273 = G__37285;
i__37274 = G__37286;
continue;
} else {
var vec__37276 = cljs.core.first.call(null,seq__37271__$1);
var ks = cljs.core.nth.call(null,vec__37276,(0),null);
var action = cljs.core.nth.call(null,vec__37276,(1),null);
if(cljs.core.truth_(pirates.client.keyboard.pressed_QMARK_.call(null,kb,ks))){
action.call(null);
} else {
}

var G__37287 = cljs.core.next.call(null,seq__37271__$1);
var G__37288 = null;
var G__37289 = (0);
var G__37290 = (0);
seq__37271 = G__37287;
chunk__37272 = G__37288;
count__37273 = G__37289;
i__37274 = G__37290;
continue;
}
} else {
return null;
}
}
break;
}
});

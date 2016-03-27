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
var args80515 = [];
var len__19507__auto___80521 = arguments.length;
var i__19508__auto___80522 = (0);
while(true){
if((i__19508__auto___80522 < len__19507__auto___80521)){
args80515.push((arguments[i__19508__auto___80522]));

var G__80523 = (i__19508__auto___80522 + (1));
i__19508__auto___80522 = G__80523;
continue;
} else {
}
break;
}

var G__80517 = args80515.length;
switch (G__80517) {
case 1:
return pirates.client.keyboard.listen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pirates.client.keyboard.listen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args80515.length)].join('')));

}
});

pirates.client.keyboard.listen.cljs$core$IFn$_invoke$arity$1 = (function (o){
return pirates.client.keyboard.listen.call(null,o,document);
});

pirates.client.keyboard.listen.cljs$core$IFn$_invoke$arity$2 = (function (p__80518,dom_element){
var map__80519 = p__80518;
var map__80519__$1 = ((((!((map__80519 == null)))?((((map__80519.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80519.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80519):map__80519);
var o = map__80519__$1;
var handler = cljs.core.get.call(null,map__80519__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
o.dom_element = dom_element;

goog.events.listen(dom_element,"keydown",handler);

return goog.events.listen(dom_element,"keyup",handler);
});

pirates.client.keyboard.listen.cljs$lang$maxFixedArity = 2;
pirates.client.keyboard.unlisten = (function pirates$client$keyboard$unlisten(p__80525){
var map__80528 = p__80525;
var map__80528__$1 = ((((!((map__80528 == null)))?((((map__80528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80528):map__80528);
var o = map__80528__$1;
var handler = cljs.core.get.call(null,map__80528__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var dom_element = o.dom_element;
goog.events.unlisten(dom_element,"keydown",handler);

return goog.events.unlisten(dom_element,"keyup",handler);
});
pirates.client.keyboard.pressed_QMARK_ = (function pirates$client$keyboard$pressed_QMARK_(p__80530,key_codes){
var map__80533 = p__80530;
var map__80533__$1 = ((((!((map__80533 == null)))?((((map__80533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80533):map__80533);
var codes = cljs.core.get.call(null,map__80533__$1,new cljs.core.Keyword(null,"codes","codes",-760505543));
return cljs.core.every_QMARK_.call(null,((function (map__80533,map__80533__$1,codes){
return (function (k){
return (codes[k]);
});})(map__80533,map__80533__$1,codes))
,key_codes);
});
pirates.client.keyboard.altitude = (function pirates$client$keyboard$altitude(camera,dy){
camera.position.y = (function (){var x__18776__auto__ = (500);
var y__18777__auto__ = (function (){var x__18769__auto__ = (1);
var y__18770__auto__ = (camera.position.y + (camera.position.y / dy));
return ((x__18769__auto__ > y__18770__auto__) ? x__18769__auto__ : y__18770__auto__);
})();
return ((x__18776__auto__ < y__18777__auto__) ? x__18776__auto__ : y__18777__auto__);
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
var G__80535 = (a - ((2) * Math.PI));
a = G__80535;
continue;
} else {
if((a < (- Math.PI))){
var G__80536 = (a + ((2) * Math.PI));
a = G__80536;
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
return cljs.core.reduce.call(null,(function pirates$client$keyboard$sum_keys_$_sum_deltas(acc,p__80541){
var vec__80543 = p__80541;
var dir = cljs.core.nth.call(null,vec__80543,(0),null);
var delta = cljs.core.nth.call(null,vec__80543,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,((function (vec__80543,dir,delta){
return (function (p1__80537_SHARP_){
return pirates.client.keyboard.pressed_QMARK_.call(null,kb,p1__80537_SHARP_);
});})(vec__80543,dir,delta))
,pirates.client.keyboard.key_bindings.call(null,dir)))){
return (acc + delta);
} else {
return acc;
}
}),(0),m);
});
pirates.client.keyboard.handle_keyboard = (function pirates$client$keyboard$handle_keyboard(app_state,kb,camera,ship){
var steer_80556 = pirates.client.keyboard.sum_keys.call(null,kb,pirates.client.keyboard.steers);
if((steer_80556 === (0))){
} else {
ship.rotation.y = pirates.client.keyboard.normalize_angle.call(null,(ship.rotation.y + (steer_80556 * 0.03)));
}

cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"steer","steer",1705380684),steer_80556);

var dy_80557 = pirates.client.keyboard.sum_keys.call(null,kb,pirates.client.keyboard.altitudes);
if((dy_80557 === (0))){
} else {
pirates.client.keyboard.altitude.call(null,camera,dy_80557);
}

var seq__80550 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.fromArray([goog.events.KeyCodes.Q], true),(function pirates$client$keyboard$handle_keyboard_$_a_ultimate(){
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
var chunk__80551 = null;
var count__80552 = (0);
var i__80553 = (0);
while(true){
if((i__80553 < count__80552)){
var vec__80554 = cljs.core._nth.call(null,chunk__80551,i__80553);
var ks = cljs.core.nth.call(null,vec__80554,(0),null);
var action = cljs.core.nth.call(null,vec__80554,(1),null);
if(cljs.core.truth_(pirates.client.keyboard.pressed_QMARK_.call(null,kb,ks))){
action.call(null);
} else {
}

var G__80558 = seq__80550;
var G__80559 = chunk__80551;
var G__80560 = count__80552;
var G__80561 = (i__80553 + (1));
seq__80550 = G__80558;
chunk__80551 = G__80559;
count__80552 = G__80560;
i__80553 = G__80561;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__80550);
if(temp__4657__auto__){
var seq__80550__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__80550__$1)){
var c__19249__auto__ = cljs.core.chunk_first.call(null,seq__80550__$1);
var G__80562 = cljs.core.chunk_rest.call(null,seq__80550__$1);
var G__80563 = c__19249__auto__;
var G__80564 = cljs.core.count.call(null,c__19249__auto__);
var G__80565 = (0);
seq__80550 = G__80562;
chunk__80551 = G__80563;
count__80552 = G__80564;
i__80553 = G__80565;
continue;
} else {
var vec__80555 = cljs.core.first.call(null,seq__80550__$1);
var ks = cljs.core.nth.call(null,vec__80555,(0),null);
var action = cljs.core.nth.call(null,vec__80555,(1),null);
if(cljs.core.truth_(pirates.client.keyboard.pressed_QMARK_.call(null,kb,ks))){
action.call(null);
} else {
}

var G__80566 = cljs.core.next.call(null,seq__80550__$1);
var G__80567 = null;
var G__80568 = (0);
var G__80569 = (0);
seq__80550 = G__80566;
chunk__80551 = G__80567;
count__80552 = G__80568;
i__80553 = G__80569;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=keyboard.js.map?rel=1459051777096
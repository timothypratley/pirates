// Compiled by ClojureScript 1.8.34 {}
goog.provide('pirates.client.world');
goog.require('cljs.core');
goog.require('pirates.client.towns');
pirates.client.world.near_QMARK_ = (function pirates$client$world$near_QMARK_(x1,z1,x2,z2){
return ((Math.pow((x2 - x1),(2)) + Math.pow((z2 - z1),(2))) < (64));
});
pirates.client.world.near_town_QMARK_ = (function pirates$client$world$near_town_QMARK_(ship,towns){
var shipx = ship.position.x;
var shipz = ship.position.z;
return cljs.core.first.call(null,(function (){var iter__19218__auto__ = ((function (shipx,shipz){
return (function pirates$client$world$near_town_QMARK__$_iter__77366(s__77367){
return (new cljs.core.LazySeq(null,((function (shipx,shipz){
return (function (){
var s__77367__$1 = s__77367;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__77367__$1);
if(temp__4657__auto__){
var s__77367__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__77367__$2)){
var c__19216__auto__ = cljs.core.chunk_first.call(null,s__77367__$2);
var size__19217__auto__ = cljs.core.count.call(null,c__19216__auto__);
var b__77369 = cljs.core.chunk_buffer.call(null,size__19217__auto__);
if((function (){var i__77368 = (0);
while(true){
if((i__77368 < size__19217__auto__)){
var town = cljs.core._nth.call(null,c__19216__auto__,i__77368);
var vec__77380 = town;
var _ = cljs.core.nth.call(null,vec__77380,(0),null);
var map__77381 = cljs.core.nth.call(null,vec__77380,(1),null);
var map__77381__$1 = ((((!((map__77381 == null)))?((((map__77381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77381):map__77381);
var vec__77382 = cljs.core.get.call(null,map__77381__$1,new cljs.core.Keyword(null,"latlon","latlon",-1285780235));
var lat = cljs.core.nth.call(null,vec__77382,(0),null);
var lon = cljs.core.nth.call(null,vec__77382,(1),null);
var vec__77383 = pirates.client.towns.coords.call(null,lat,lon);
var townx = cljs.core.nth.call(null,vec__77383,(0),null);
var townz = cljs.core.nth.call(null,vec__77383,(1),null);
if(cljs.core.truth_(pirates.client.world.near_QMARK_.call(null,shipx,shipz,townx,townz))){
cljs.core.chunk_append.call(null,b__77369,town);

var G__77390 = (i__77368 + (1));
i__77368 = G__77390;
continue;
} else {
var G__77391 = (i__77368 + (1));
i__77368 = G__77391;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__77369),pirates$client$world$near_town_QMARK__$_iter__77366.call(null,cljs.core.chunk_rest.call(null,s__77367__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__77369),null);
}
} else {
var town = cljs.core.first.call(null,s__77367__$2);
var vec__77385 = town;
var _ = cljs.core.nth.call(null,vec__77385,(0),null);
var map__77386 = cljs.core.nth.call(null,vec__77385,(1),null);
var map__77386__$1 = ((((!((map__77386 == null)))?((((map__77386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77386):map__77386);
var vec__77387 = cljs.core.get.call(null,map__77386__$1,new cljs.core.Keyword(null,"latlon","latlon",-1285780235));
var lat = cljs.core.nth.call(null,vec__77387,(0),null);
var lon = cljs.core.nth.call(null,vec__77387,(1),null);
var vec__77388 = pirates.client.towns.coords.call(null,lat,lon);
var townx = cljs.core.nth.call(null,vec__77388,(0),null);
var townz = cljs.core.nth.call(null,vec__77388,(1),null);
if(cljs.core.truth_(pirates.client.world.near_QMARK_.call(null,shipx,shipz,townx,townz))){
return cljs.core.cons.call(null,town,pirates$client$world$near_town_QMARK__$_iter__77366.call(null,cljs.core.rest.call(null,s__77367__$2)));
} else {
var G__77392 = cljs.core.rest.call(null,s__77367__$2);
s__77367__$1 = G__77392;
continue;
}
}
} else {
return null;
}
break;
}
});})(shipx,shipz))
,null,null));
});})(shipx,shipz))
;
return iter__19218__auto__.call(null,towns);
})());
});

//# sourceMappingURL=world.js.map?rel=1458857946476
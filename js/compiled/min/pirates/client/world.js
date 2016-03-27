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
return cljs.core.first.call(null,(function (){var iter__6990__auto__ = ((function (shipx,shipz){
return (function pirates$client$world$near_town_QMARK__$_iter__34765(s__34766){
return (new cljs.core.LazySeq(null,((function (shipx,shipz){
return (function (){
var s__34766__$1 = s__34766;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34766__$1);
if(temp__4657__auto__){
var s__34766__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34766__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__34766__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__34768 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__34767 = (0);
while(true){
if((i__34767 < size__6989__auto__)){
var town = cljs.core._nth.call(null,c__6988__auto__,i__34767);
var vec__34779 = town;
var _ = cljs.core.nth.call(null,vec__34779,(0),null);
var map__34780 = cljs.core.nth.call(null,vec__34779,(1),null);
var map__34780__$1 = ((((!((map__34780 == null)))?((((map__34780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34780):map__34780);
var vec__34781 = cljs.core.get.call(null,map__34780__$1,new cljs.core.Keyword(null,"latlon","latlon",-1285780235));
var lat = cljs.core.nth.call(null,vec__34781,(0),null);
var lon = cljs.core.nth.call(null,vec__34781,(1),null);
var vec__34782 = pirates.client.towns.coords.call(null,lat,lon);
var townx = cljs.core.nth.call(null,vec__34782,(0),null);
var townz = cljs.core.nth.call(null,vec__34782,(1),null);
if(cljs.core.truth_(pirates.client.world.near_QMARK_.call(null,shipx,shipz,townx,townz))){
cljs.core.chunk_append.call(null,b__34768,town);

var G__34789 = (i__34767 + (1));
i__34767 = G__34789;
continue;
} else {
var G__34790 = (i__34767 + (1));
i__34767 = G__34790;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34768),pirates$client$world$near_town_QMARK__$_iter__34765.call(null,cljs.core.chunk_rest.call(null,s__34766__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34768),null);
}
} else {
var town = cljs.core.first.call(null,s__34766__$2);
var vec__34784 = town;
var _ = cljs.core.nth.call(null,vec__34784,(0),null);
var map__34785 = cljs.core.nth.call(null,vec__34784,(1),null);
var map__34785__$1 = ((((!((map__34785 == null)))?((((map__34785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34785):map__34785);
var vec__34786 = cljs.core.get.call(null,map__34785__$1,new cljs.core.Keyword(null,"latlon","latlon",-1285780235));
var lat = cljs.core.nth.call(null,vec__34786,(0),null);
var lon = cljs.core.nth.call(null,vec__34786,(1),null);
var vec__34787 = pirates.client.towns.coords.call(null,lat,lon);
var townx = cljs.core.nth.call(null,vec__34787,(0),null);
var townz = cljs.core.nth.call(null,vec__34787,(1),null);
if(cljs.core.truth_(pirates.client.world.near_QMARK_.call(null,shipx,shipz,townx,townz))){
return cljs.core.cons.call(null,town,pirates$client$world$near_town_QMARK__$_iter__34765.call(null,cljs.core.rest.call(null,s__34766__$2)));
} else {
var G__34791 = cljs.core.rest.call(null,s__34766__$2);
s__34766__$1 = G__34791;
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
return iter__6990__auto__.call(null,towns);
})());
});

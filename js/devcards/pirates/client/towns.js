// Compiled by ClojureScript 1.8.34 {}
goog.provide('pirates.client.towns');
goog.require('cljs.core');
goog.require('cljsjs.three');
goog.require('devcards.core');
goog.require('reagent.core');
pirates.client.towns.faction_materials = cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["English","Dutch","French","Spanish"], null),(function (){var iter__19218__auto__ = (function pirates$client$towns$iter__77295(s__77296){
return (new cljs.core.LazySeq(null,(function (){
var s__77296__$1 = s__77296;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__77296__$1);
if(temp__4657__auto__){
var s__77296__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__77296__$2)){
var c__19216__auto__ = cljs.core.chunk_first.call(null,s__77296__$2);
var size__19217__auto__ = cljs.core.count.call(null,c__19216__auto__);
var b__77298 = cljs.core.chunk_buffer.call(null,size__19217__auto__);
if((function (){var i__77297 = (0);
while(true){
if((i__77297 < size__19217__auto__)){
var color = cljs.core._nth.call(null,c__19216__auto__,i__77297);
cljs.core.chunk_append.call(null,b__77298,(new THREE.MeshBasicMaterial({"color": color})));

var G__77299 = (i__77297 + (1));
i__77297 = G__77299;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__77298),pirates$client$towns$iter__77295.call(null,cljs.core.chunk_rest.call(null,s__77296__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__77298),null);
}
} else {
var color = cljs.core.first.call(null,s__77296__$2);
return cljs.core.cons.call(null,(new THREE.MeshBasicMaterial({"color": color})),pirates$client$towns$iter__77295.call(null,cljs.core.rest.call(null,s__77296__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19218__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","orange","blue","yellow"], null));
})());
pirates.client.towns.create_town = (function pirates$client$towns$create_town(town_name){
var G__77301 = (new THREE.Mesh((new THREE.BoxGeometry((10),(10),(10)))));
G__77301.name = town_name;

return G__77301;
});
pirates.client.towns.coords = (function pirates$client$towns$coords(lat,lon){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((35) * ((75) - lon)),((27) * ((15) - lat))], null);
});
pirates.client.towns.load_town = (function pirates$client$towns$load_town(parent,p__77302){
var vec__77310 = p__77302;
var town_name = cljs.core.nth.call(null,vec__77310,(0),null);
var map__77311 = cljs.core.nth.call(null,vec__77310,(1),null);
var map__77311__$1 = ((((!((map__77311 == null)))?((((map__77311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77311):map__77311);
var vec__77312 = cljs.core.get.call(null,map__77311__$1,new cljs.core.Keyword(null,"latlon","latlon",-1285780235));
var lat = cljs.core.nth.call(null,vec__77312,(0),null);
var lon = cljs.core.nth.call(null,vec__77312,(1),null);
var vec__77313 = cljs.core.get.call(null,map__77311__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var rx = cljs.core.nth.call(null,vec__77313,(0),null);
var ry = cljs.core.nth.call(null,vec__77313,(1),null);
var rz = cljs.core.nth.call(null,vec__77313,(2),null);
var faction = cljs.core.get.call(null,map__77311__$1,new cljs.core.Keyword(null,"faction","faction",724804352));
var town = (function (){var or__18438__auto__ = parent.getObjectByName(town_name);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
var G__77316 = pirates.client.towns.create_town.call(null,town_name);
parent.add(G__77316);

return G__77316;
}
})();
var vec__77315 = pirates.client.towns.coords.call(null,lat,lon);
var x = cljs.core.nth.call(null,vec__77315,(0),null);
var z = cljs.core.nth.call(null,vec__77315,(1),null);
town.position.set(x,(0),z);

town.rotation.set(rx,ry,rz);

return town.material = pirates.client.towns.faction_materials.call(null,faction);
});
pirates.client.towns.load_towns = (function pirates$client$towns$load_towns(scene,towns){
cljs.core.prn.call(null,"load-towns");

var seq__77321 = cljs.core.seq.call(null,towns);
var chunk__77322 = null;
var count__77323 = (0);
var i__77324 = (0);
while(true){
if((i__77324 < count__77323)){
var town = cljs.core._nth.call(null,chunk__77322,i__77324);
pirates.client.towns.load_town.call(null,scene,town);

var G__77325 = seq__77321;
var G__77326 = chunk__77322;
var G__77327 = count__77323;
var G__77328 = (i__77324 + (1));
seq__77321 = G__77325;
chunk__77322 = G__77326;
count__77323 = G__77327;
i__77324 = G__77328;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__77321);
if(temp__4657__auto__){
var seq__77321__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__77321__$1)){
var c__19249__auto__ = cljs.core.chunk_first.call(null,seq__77321__$1);
var G__77329 = cljs.core.chunk_rest.call(null,seq__77321__$1);
var G__77330 = c__19249__auto__;
var G__77331 = cljs.core.count.call(null,c__19249__auto__);
var G__77332 = (0);
seq__77321 = G__77329;
chunk__77322 = G__77330;
count__77323 = G__77331;
i__77324 = G__77332;
continue;
} else {
var town = cljs.core.first.call(null,seq__77321__$1);
pirates.client.towns.load_town.call(null,scene,town);

var G__77333 = cljs.core.next.call(null,seq__77321__$1);
var G__77334 = null;
var G__77335 = (0);
var G__77336 = (0);
seq__77321 = G__77333;
chunk__77322 = G__77334;
count__77323 = G__77335;
i__77324 = G__77336;
continue;
}
} else {
return null;
}
}
break;
}
});
pirates.client.towns.initial_towns = cljs.core.PersistentHashMap.fromArrays(["Antigua","Petit-Goave","Nassau","Saint Lucia","Santiago","San Juan","Puerto Bello","Campeche","Eleuthera","Santo Domingo","Curacao","Trinidad","Barbados","Nombre de Dias","St Kitts","Cartagena","St Eustatius","Gran Granada","Tortuga","Santa Marta","Coro","Puerto Cabello","Vera Cruz","Margarita","Montserrat","Florida Keys","Havana","Caracas","Grand Bahama"],[new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [16.93,62.74], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"English"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [18.76,73.18], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"French"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [27.19,77.61], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"English"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [13.62,62.07], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"French"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.51,76.1], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"Spanish"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [18.59,66.76], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"Spanish"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [7.19,79.7], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"Spanish"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.73,89.91], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"Spanish"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [27.15,76.37], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"English"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [18.72,70.71], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"Spanish"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [10.7,69.53], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"Dutch"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [8.22,62.37], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"Spanish"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [11.84,60.7], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"English"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [7.24,79.23], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"Spanish"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [17.16,63.65], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"English"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [8.22,75.72], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"Spanish"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [17.47,63.95], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"Dutch"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [10.27,85.68], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"Spanish"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.73,73.29], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"French"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [6.67,71.85], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"Spanish"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [9.82,70.17], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"English"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [8.43,68.64], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"Spanish"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [19.72,95.51], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"Spanish"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [9.1,65.18], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"Dutch"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [16.42,63.17], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"English"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [26.36,81.52], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"Dutch"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [24.74,82.15], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"Spanish"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [8.59,67.58], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"Spanish"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"town",new cljs.core.Keyword(null,"latlon","latlon",-1285780235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [29.02,78.41], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"population","population",-1209901867),(1000),new cljs.core.Keyword(null,"wealth","wealth",-1566112704),(1000),new cljs.core.Keyword(null,"faction","faction",724804352),"Dutch"], null)]);
pirates.client.towns.town_locations_card = (function pirates$client$towns$town_locations_card(){
var app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(500),(0)], null),new cljs.core.Keyword(null,"look-at","look-at",189063937),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)], null),new cljs.core.Keyword(null,"towns","towns",523997405),pirates.client.towns.initial_towns], null));
return ((function (app_state){
return (function pirates$client$towns$town_locations_card_$_a_town_locations_card(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pirates.client.map.world_map,app_state], null);
});
;})(app_state))
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pirates.client.towns","pirates.client.towns",-898327094),new cljs.core.Keyword(null,"town-locations","town-locations",1217313577)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"town-locations",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof pirates.client.towns.t_pirates$client$towns77337 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pirates.client.towns.t_pirates$client$towns77337 = (function (meta77338){
this.meta77338 = meta77338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
pirates.client.towns.t_pirates$client$towns77337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77339,meta77338__$1){
var self__ = this;
var _77339__$1 = this;
return (new pirates.client.towns.t_pirates$client$towns77337(meta77338__$1));
});

pirates.client.towns.t_pirates$client$towns77337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77339){
var self__ = this;
var _77339__$1 = this;
return self__.meta77338;
});

pirates.client.towns.t_pirates$client$towns77337.prototype.devcards$core$IDevcardOptions$ = true;

pirates.client.towns.t_pirates$client$towns77337.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__23419__auto__,devcard_opts__23420__auto__){
var self__ = this;
var this__23419__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__23420__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__23438__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pirates.client.towns.town_locations_card], null);
if(cljs.core.fn_QMARK_.call(null,v__23438__auto__)){
return ((function (v__23438__auto__,this__23419__auto____$1){
return (function (data_atom__23439__auto__,owner__23440__auto__){
return reagent.core.as_element.call(null,v__23438__auto__.call(null,data_atom__23439__auto__,owner__23440__auto__));
});
;})(v__23438__auto__,this__23419__auto____$1))
} else {
return reagent.core.as_element.call(null,v__23438__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__23420__auto__))));
});

pirates.client.towns.t_pirates$client$towns77337.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77338","meta77338",-2025094714,null)], null);
});

pirates.client.towns.t_pirates$client$towns77337.cljs$lang$type = true;

pirates.client.towns.t_pirates$client$towns77337.cljs$lang$ctorStr = "pirates.client.towns/t_pirates$client$towns77337";

pirates.client.towns.t_pirates$client$towns77337.cljs$lang$ctorPrWriter = (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"pirates.client.towns/t_pirates$client$towns77337");
});

pirates.client.towns.__GT_t_pirates$client$towns77337 = (function pirates$client$towns$__GT_t_pirates$client$towns77337(meta77338){
return (new pirates.client.towns.t_pirates$client$towns77337(meta77338));
});

}

return (new pirates.client.towns.t_pirates$client$towns77337(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=towns.js.map?rel=1458857946431
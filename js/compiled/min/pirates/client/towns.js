// Compiled by ClojureScript 1.8.34 {}
goog.provide('pirates.client.towns');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('reagent.core');
pirates.client.towns.faction_materials = cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["English","Dutch","French","Spanish"], null),(function (){var iter__6990__auto__ = (function pirates$client$towns$iter__34697(s__34698){
return (new cljs.core.LazySeq(null,(function (){
var s__34698__$1 = s__34698;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34698__$1);
if(temp__4657__auto__){
var s__34698__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34698__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__34698__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__34700 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__34699 = (0);
while(true){
if((i__34699 < size__6989__auto__)){
var color = cljs.core._nth.call(null,c__6988__auto__,i__34699);
cljs.core.chunk_append.call(null,b__34700,(new THREE.MeshBasicMaterial({"color": color})));

var G__34701 = (i__34699 + (1));
i__34699 = G__34701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34700),pirates$client$towns$iter__34697.call(null,cljs.core.chunk_rest.call(null,s__34698__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34700),null);
}
} else {
var color = cljs.core.first.call(null,s__34698__$2);
return cljs.core.cons.call(null,(new THREE.MeshBasicMaterial({"color": color})),pirates$client$towns$iter__34697.call(null,cljs.core.rest.call(null,s__34698__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","orange","blue","yellow"], null));
})());
pirates.client.towns.create_town = (function pirates$client$towns$create_town(town_name){
var G__34703 = (new THREE.Mesh((new THREE.BoxGeometry((10),(10),(10)))));
G__34703.name = town_name;

return G__34703;
});
pirates.client.towns.coords = (function pirates$client$towns$coords(lat,lon){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((35) * ((75) - lon)),((27) * ((15) - lat))], null);
});
pirates.client.towns.load_town = (function pirates$client$towns$load_town(parent,p__34704){
var vec__34712 = p__34704;
var town_name = cljs.core.nth.call(null,vec__34712,(0),null);
var map__34713 = cljs.core.nth.call(null,vec__34712,(1),null);
var map__34713__$1 = ((((!((map__34713 == null)))?((((map__34713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34713):map__34713);
var vec__34714 = cljs.core.get.call(null,map__34713__$1,new cljs.core.Keyword(null,"latlon","latlon",-1285780235));
var lat = cljs.core.nth.call(null,vec__34714,(0),null);
var lon = cljs.core.nth.call(null,vec__34714,(1),null);
var vec__34715 = cljs.core.get.call(null,map__34713__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var rx = cljs.core.nth.call(null,vec__34715,(0),null);
var ry = cljs.core.nth.call(null,vec__34715,(1),null);
var rz = cljs.core.nth.call(null,vec__34715,(2),null);
var faction = cljs.core.get.call(null,map__34713__$1,new cljs.core.Keyword(null,"faction","faction",724804352));
var town = (function (){var or__6210__auto__ = parent.getObjectByName(town_name);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
var G__34718 = pirates.client.towns.create_town.call(null,town_name);
parent.add(G__34718);

return G__34718;
}
})();
var vec__34717 = pirates.client.towns.coords.call(null,lat,lon);
var x = cljs.core.nth.call(null,vec__34717,(0),null);
var z = cljs.core.nth.call(null,vec__34717,(1),null);
town.position.set(x,(0),z);

town.rotation.set(rx,ry,rz);

return town.material = pirates.client.towns.faction_materials.call(null,faction);
});
pirates.client.towns.load_towns = (function pirates$client$towns$load_towns(scene,towns){
cljs.core.prn.call(null,"load-towns");

var seq__34723 = cljs.core.seq.call(null,towns);
var chunk__34724 = null;
var count__34725 = (0);
var i__34726 = (0);
while(true){
if((i__34726 < count__34725)){
var town = cljs.core._nth.call(null,chunk__34724,i__34726);
pirates.client.towns.load_town.call(null,scene,town);

var G__34727 = seq__34723;
var G__34728 = chunk__34724;
var G__34729 = count__34725;
var G__34730 = (i__34726 + (1));
seq__34723 = G__34727;
chunk__34724 = G__34728;
count__34725 = G__34729;
i__34726 = G__34730;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34723);
if(temp__4657__auto__){
var seq__34723__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34723__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__34723__$1);
var G__34731 = cljs.core.chunk_rest.call(null,seq__34723__$1);
var G__34732 = c__7021__auto__;
var G__34733 = cljs.core.count.call(null,c__7021__auto__);
var G__34734 = (0);
seq__34723 = G__34731;
chunk__34724 = G__34732;
count__34725 = G__34733;
i__34726 = G__34734;
continue;
} else {
var town = cljs.core.first.call(null,seq__34723__$1);
pirates.client.towns.load_town.call(null,scene,town);

var G__34735 = cljs.core.next.call(null,seq__34723__$1);
var G__34736 = null;
var G__34737 = (0);
var G__34738 = (0);
seq__34723 = G__34735;
chunk__34724 = G__34736;
count__34725 = G__34737;
i__34726 = G__34738;
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

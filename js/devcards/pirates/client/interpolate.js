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
pirates.client.interpolate.predict = (function pirates$client$interpolate$predict(p__83147,p__83148,at){
var vec__83151 = p__83147;
var x1 = cljs.core.nth.call(null,vec__83151,(0),null);
var z1 = cljs.core.nth.call(null,vec__83151,(1),null);
var heading1 = cljs.core.nth.call(null,vec__83151,(2),null);
var vec__83152 = p__83148;
var x2 = cljs.core.nth.call(null,vec__83152,(0),null);
var z2 = cljs.core.nth.call(null,vec__83152,(1),null);
var heading2 = cljs.core.nth.call(null,vec__83152,(2),null);
var dt = (((new Date()).getTime() - at) / 1000.0);
var target = pirates.client.interpolate.forward.call(null,(new THREE.Vector2(x2,z2)),heading2,((3) * dt));
if((((0) < dt)) && ((dt < 0.9))){
return pirates.client.interpolate.bezier.call(null,(new THREE.Vector2(x1,z1)),heading1,target,heading2,dt);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [target.x,target.y,heading2], null);
}
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pirates.client.interpolate","pirates.client.interpolate",946414773),new cljs.core.Keyword(null,"bezier-example","bezier-example",-1848400894)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"bezier-example",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof pirates.client.interpolate.t_pirates$client$interpolate83153 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pirates.client.interpolate.t_pirates$client$interpolate83153 = (function (meta83154){
this.meta83154 = meta83154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
pirates.client.interpolate.t_pirates$client$interpolate83153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_83155,meta83154__$1){
var self__ = this;
var _83155__$1 = this;
return (new pirates.client.interpolate.t_pirates$client$interpolate83153(meta83154__$1));
});

pirates.client.interpolate.t_pirates$client$interpolate83153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_83155){
var self__ = this;
var _83155__$1 = this;
return self__.meta83154;
});

pirates.client.interpolate.t_pirates$client$interpolate83153.prototype.devcards$core$IDevcardOptions$ = true;

pirates.client.interpolate.t_pirates$client$interpolate83153.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__23419__auto__,devcard_opts__23420__auto__){
var self__ = this;
var this__23419__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__23420__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__23438__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"-0.1 -0.1 1.2 1.2"], null),cljs.core.doall.call(null,(function (){var iter__19218__auto__ = ((function (this__23419__auto____$1){
return (function pirates$client$interpolate$iter__83156(s__83157){
return (new cljs.core.LazySeq(null,((function (this__23419__auto____$1){
return (function (){
var s__83157__$1 = s__83157;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__83157__$1);
if(temp__4657__auto__){
var s__83157__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__83157__$2)){
var c__19216__auto__ = cljs.core.chunk_first.call(null,s__83157__$2);
var size__19217__auto__ = cljs.core.count.call(null,c__19216__auto__);
var b__83159 = cljs.core.chunk_buffer.call(null,size__19217__auto__);
if((function (){var i__83158 = (0);
while(true){
if((i__83158 < size__19217__auto__)){
var i = cljs.core._nth.call(null,c__19216__auto__,i__83158);
var vec__83162 = pirates.client.interpolate.bezier.call(null,(new THREE.Vector2((0),(0))),(0),(new THREE.Vector2((1),(1))),(0),(i / (10)));
var x = cljs.core.nth.call(null,vec__83162,(0),null);
var y = cljs.core.nth.call(null,vec__83162,(1),null);
var heading = cljs.core.nth.call(null,vec__83162,(2),null);
cljs.core.chunk_append.call(null,b__83159,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(") "),cljs.core.str("rotate ("),cljs.core.str(((180) * (heading / Math.PI))),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M0.01,0 L-0.008,0.01 L-0.008,-0.01"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),-0.03,new cljs.core.Keyword(null,"x2","x2",-1362513475),0.03,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.005,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__83164 = (i__83158 + (1));
i__83158 = G__83164;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83159),pirates$client$interpolate$iter__83156.call(null,cljs.core.chunk_rest.call(null,s__83157__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83159),null);
}
} else {
var i = cljs.core.first.call(null,s__83157__$2);
var vec__83163 = pirates.client.interpolate.bezier.call(null,(new THREE.Vector2((0),(0))),(0),(new THREE.Vector2((1),(1))),(0),(i / (10)));
var x = cljs.core.nth.call(null,vec__83163,(0),null);
var y = cljs.core.nth.call(null,vec__83163,(1),null);
var heading = cljs.core.nth.call(null,vec__83163,(2),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(") "),cljs.core.str("rotate ("),cljs.core.str(((180) * (heading / Math.PI))),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M0.01,0 L-0.008,0.01 L-0.008,-0.01"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),-0.03,new cljs.core.Keyword(null,"x2","x2",-1362513475),0.03,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.005,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),pirates$client$interpolate$iter__83156.call(null,cljs.core.rest.call(null,s__83157__$2)));
}
} else {
return null;
}
break;
}
});})(this__23419__auto____$1))
,null,null));
});})(this__23419__auto____$1))
;
return iter__19218__auto__.call(null,cljs.core.range.call(null,(11)));
})())], null);
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

pirates.client.interpolate.t_pirates$client$interpolate83153.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta83154","meta83154",-995609589,null)], null);
});

pirates.client.interpolate.t_pirates$client$interpolate83153.cljs$lang$type = true;

pirates.client.interpolate.t_pirates$client$interpolate83153.cljs$lang$ctorStr = "pirates.client.interpolate/t_pirates$client$interpolate83153";

pirates.client.interpolate.t_pirates$client$interpolate83153.cljs$lang$ctorPrWriter = (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"pirates.client.interpolate/t_pirates$client$interpolate83153");
});

pirates.client.interpolate.__GT_t_pirates$client$interpolate83153 = (function pirates$client$interpolate$__GT_t_pirates$client$interpolate83153(meta83154){
return (new pirates.client.interpolate.t_pirates$client$interpolate83153(meta83154));
});

}

return (new pirates.client.interpolate.t_pirates$client$interpolate83153(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pirates.client.interpolate","pirates.client.interpolate",946414773),new cljs.core.Keyword(null,"predict-example","predict-example",870723137)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"predict-example",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof pirates.client.interpolate.t_pirates$client$interpolate83165 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pirates.client.interpolate.t_pirates$client$interpolate83165 = (function (meta83166){
this.meta83166 = meta83166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
pirates.client.interpolate.t_pirates$client$interpolate83165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_83167,meta83166__$1){
var self__ = this;
var _83167__$1 = this;
return (new pirates.client.interpolate.t_pirates$client$interpolate83165(meta83166__$1));
});

pirates.client.interpolate.t_pirates$client$interpolate83165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_83167){
var self__ = this;
var _83167__$1 = this;
return self__.meta83166;
});

pirates.client.interpolate.t_pirates$client$interpolate83165.prototype.devcards$core$IDevcardOptions$ = true;

pirates.client.interpolate.t_pirates$client$interpolate83165.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__23419__auto__,devcard_opts__23420__auto__){
var self__ = this;
var this__23419__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__23420__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__23438__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"-0.1 -0.1 6.2 1.2"], null),cljs.core.doall.call(null,(function (){var iter__19218__auto__ = ((function (this__23419__auto____$1){
return (function pirates$client$interpolate$iter__83168(s__83169){
return (new cljs.core.LazySeq(null,((function (this__23419__auto____$1){
return (function (){
var s__83169__$1 = s__83169;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__83169__$1);
if(temp__4657__auto__){
var s__83169__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__83169__$2)){
var c__19216__auto__ = cljs.core.chunk_first.call(null,s__83169__$2);
var size__19217__auto__ = cljs.core.count.call(null,c__19216__auto__);
var b__83171 = cljs.core.chunk_buffer.call(null,size__19217__auto__);
if((function (){var i__83170 = (0);
while(true){
if((i__83170 < size__19217__auto__)){
var i = cljs.core._nth.call(null,c__19216__auto__,i__83170);
var at = ((new Date()).getTime() - ((i / (5)) * (1000)));
var vec__83174 = pirates.client.interpolate.predict.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),at);
var x = cljs.core.nth.call(null,vec__83174,(0),null);
var y = cljs.core.nth.call(null,vec__83174,(1),null);
var heading = cljs.core.nth.call(null,vec__83174,(2),null);
cljs.core.chunk_append.call(null,b__83171,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(") "),cljs.core.str("rotate ("),cljs.core.str(((180) * (heading / Math.PI))),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M0.01,0 L-0.008,0.01 L-0.008,-0.01"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),-0.03,new cljs.core.Keyword(null,"x2","x2",-1362513475),0.03,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.005,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__83176 = (i__83170 + (1));
i__83170 = G__83176;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83171),pirates$client$interpolate$iter__83168.call(null,cljs.core.chunk_rest.call(null,s__83169__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83171),null);
}
} else {
var i = cljs.core.first.call(null,s__83169__$2);
var at = ((new Date()).getTime() - ((i / (5)) * (1000)));
var vec__83175 = pirates.client.interpolate.predict.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),at);
var x = cljs.core.nth.call(null,vec__83175,(0),null);
var y = cljs.core.nth.call(null,vec__83175,(1),null);
var heading = cljs.core.nth.call(null,vec__83175,(2),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(") "),cljs.core.str("rotate ("),cljs.core.str(((180) * (heading / Math.PI))),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M0.01,0 L-0.008,0.01 L-0.008,-0.01"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),-0.03,new cljs.core.Keyword(null,"x2","x2",-1362513475),0.03,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.005,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),pirates$client$interpolate$iter__83168.call(null,cljs.core.rest.call(null,s__83169__$2)));
}
} else {
return null;
}
break;
}
});})(this__23419__auto____$1))
,null,null));
});})(this__23419__auto____$1))
;
return iter__19218__auto__.call(null,cljs.core.range.call(null,(11)));
})())], null);
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

pirates.client.interpolate.t_pirates$client$interpolate83165.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta83166","meta83166",-306132125,null)], null);
});

pirates.client.interpolate.t_pirates$client$interpolate83165.cljs$lang$type = true;

pirates.client.interpolate.t_pirates$client$interpolate83165.cljs$lang$ctorStr = "pirates.client.interpolate/t_pirates$client$interpolate83165";

pirates.client.interpolate.t_pirates$client$interpolate83165.cljs$lang$ctorPrWriter = (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"pirates.client.interpolate/t_pirates$client$interpolate83165");
});

pirates.client.interpolate.__GT_t_pirates$client$interpolate83165 = (function pirates$client$interpolate$__GT_t_pirates$client$interpolate83165(meta83166){
return (new pirates.client.interpolate.t_pirates$client$interpolate83165(meta83166));
});

}

return (new pirates.client.interpolate.t_pirates$client$interpolate83165(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=interpolate.js.map?rel=1459053499625
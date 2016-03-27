// Compiled by ClojureScript 1.8.34 {}
goog.provide('pirates.client.menus');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('reagent.core');
pirates.client.menus.menu = (function pirates$client$menus$menu(app_state){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function pirates$client$menus$menu_$_set_sail(e){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"sailing","sailing",976626619));
})], null),"Set sail!"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function pirates$client$menus$menu_$_set_sail(e){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"governor","governor",1840344429));
})], null),"Visit the governer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function pirates$client$menus$menu_$_set_sail(e){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"tavern","tavern",1362249469));
})], null),"Visit the tavern"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function pirates$client$menus$menu_$_set_sail(e){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"merchant","merchant",-1662127621));
})], null),"Visit the merchant"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function pirates$client$menus$menu_$_set_sail(e){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"shipwright","shipwright",-301858600));
})], null),"Visit the shipwright"], null)], null)], null);
});
pirates.client.menus.panel = (function pirates$client$menus$panel(var_args){
var args__19514__auto__ = [];
var len__19507__auto___42722 = arguments.length;
var i__19508__auto___42723 = (0);
while(true){
if((i__19508__auto___42723 < len__19507__auto___42722)){
args__19514__auto__.push((arguments[i__19508__auto___42723]));

var G__42724 = (i__19508__auto___42723 + (1));
i__19508__auto___42723 = G__42724;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return pirates.client.menus.panel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

pirates.client.menus.panel.cljs$core$IFn$_invoke$arity$variadic = (function (background_iamge,body){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),[cljs.core.str("url(\"img/"),cljs.core.str(background_iamge),cljs.core.str(".jpg\")")].join(''),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),"cover"], null)], null)], null),body);
});

pirates.client.menus.panel.cljs$lang$maxFixedArity = (1);

pirates.client.menus.panel.cljs$lang$applyTo = (function (seq42720){
var G__42721 = cljs.core.first.call(null,seq42720);
var seq42720__$1 = cljs.core.next.call(null,seq42720);
return pirates.client.menus.panel.cljs$core$IFn$_invoke$arity$variadic(G__42721,seq42720__$1);
});
pirates.client.menus.menu_example_component = (function pirates$client$menus$menu_example_component(){
var test_app_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (test_app_state){
return (function pirates$client$menus$menu_example_component_$_a_menu_example_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.pr_str.call(null,cljs.core.deref.call(null,test_app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pirates.client.menus.menu,test_app_state], null)], null);
});
;})(test_app_state))
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pirates.client.menus","pirates.client.menus",1877277747),new cljs.core.Keyword(null,"menu-example","menu-example",398273902)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"menu-example",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof pirates.client.menus.t_pirates$client$menus42725 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pirates.client.menus.t_pirates$client$menus42725 = (function (meta42726){
this.meta42726 = meta42726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
pirates.client.menus.t_pirates$client$menus42725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42727,meta42726__$1){
var self__ = this;
var _42727__$1 = this;
return (new pirates.client.menus.t_pirates$client$menus42725(meta42726__$1));
});

pirates.client.menus.t_pirates$client$menus42725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42727){
var self__ = this;
var _42727__$1 = this;
return self__.meta42726;
});

pirates.client.menus.t_pirates$client$menus42725.prototype.devcards$core$IDevcardOptions$ = true;

pirates.client.menus.t_pirates$client$menus42725.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__27302__auto__,devcard_opts__27303__auto__){
var self__ = this;
var this__27302__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__27303__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__27321__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pirates.client.menus.menu_example_component], null);
if(cljs.core.fn_QMARK_.call(null,v__27321__auto__)){
return ((function (v__27321__auto__,this__27302__auto____$1){
return (function (data_atom__27322__auto__,owner__27323__auto__){
return reagent.core.as_element.call(null,v__27321__auto__.call(null,data_atom__27322__auto__,owner__27323__auto__));
});
;})(v__27321__auto__,this__27302__auto____$1))
} else {
return reagent.core.as_element.call(null,v__27321__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__27303__auto__))));
});

pirates.client.menus.t_pirates$client$menus42725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42726","meta42726",-265438225,null)], null);
});

pirates.client.menus.t_pirates$client$menus42725.cljs$lang$type = true;

pirates.client.menus.t_pirates$client$menus42725.cljs$lang$ctorStr = "pirates.client.menus/t_pirates$client$menus42725";

pirates.client.menus.t_pirates$client$menus42725.cljs$lang$ctorPrWriter = (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"pirates.client.menus/t_pirates$client$menus42725");
});

pirates.client.menus.__GT_t_pirates$client$menus42725 = (function pirates$client$menus$__GT_t_pirates$client$menus42725(meta42726){
return (new pirates.client.menus.t_pirates$client$menus42725(meta42726));
});

}

return (new pirates.client.menus.t_pirates$client$menus42725(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
pirates.client.menus.governor = (function pirates$client$menus$governor(app_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pirates.client.menus.panel,"governor",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"opacity","opacity",397153780),0.5,new cljs.core.Keyword(null,"padding","padding",1660304693),"20px"], null)], null),"We are at war with the French!"], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pirates.client.menus","pirates.client.menus",1877277747),new cljs.core.Keyword(null,"governor-example","governor-example",411249825)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"governor-example",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof pirates.client.menus.t_pirates$client$menus42728 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pirates.client.menus.t_pirates$client$menus42728 = (function (meta42729){
this.meta42729 = meta42729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
pirates.client.menus.t_pirates$client$menus42728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42730,meta42729__$1){
var self__ = this;
var _42730__$1 = this;
return (new pirates.client.menus.t_pirates$client$menus42728(meta42729__$1));
});

pirates.client.menus.t_pirates$client$menus42728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42730){
var self__ = this;
var _42730__$1 = this;
return self__.meta42729;
});

pirates.client.menus.t_pirates$client$menus42728.prototype.devcards$core$IDevcardOptions$ = true;

pirates.client.menus.t_pirates$client$menus42728.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__27302__auto__,devcard_opts__27303__auto__){
var self__ = this;
var this__27302__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__27303__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__27321__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pirates.client.menus.governor], null);
if(cljs.core.fn_QMARK_.call(null,v__27321__auto__)){
return ((function (v__27321__auto__,this__27302__auto____$1){
return (function (data_atom__27322__auto__,owner__27323__auto__){
return reagent.core.as_element.call(null,v__27321__auto__.call(null,data_atom__27322__auto__,owner__27323__auto__));
});
;})(v__27321__auto__,this__27302__auto____$1))
} else {
return reagent.core.as_element.call(null,v__27321__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__27303__auto__))));
});

pirates.client.menus.t_pirates$client$menus42728.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42729","meta42729",-2020474804,null)], null);
});

pirates.client.menus.t_pirates$client$menus42728.cljs$lang$type = true;

pirates.client.menus.t_pirates$client$menus42728.cljs$lang$ctorStr = "pirates.client.menus/t_pirates$client$menus42728";

pirates.client.menus.t_pirates$client$menus42728.cljs$lang$ctorPrWriter = (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"pirates.client.menus/t_pirates$client$menus42728");
});

pirates.client.menus.__GT_t_pirates$client$menus42728 = (function pirates$client$menus$__GT_t_pirates$client$menus42728(meta42729){
return (new pirates.client.menus.t_pirates$client$menus42728(meta42729));
});

}

return (new pirates.client.menus.t_pirates$client$menus42728(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
pirates.client.menus.tavern = (function pirates$client$menus$tavern(app_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pirates.client.menus.panel,"pirate-tavern",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Buy map"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Recruit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Info"], null)], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pirates.client.menus","pirates.client.menus",1877277747),new cljs.core.Keyword(null,"tavern-example","tavern-example",673796846)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"tavern-example",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof pirates.client.menus.t_pirates$client$menus42731 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pirates.client.menus.t_pirates$client$menus42731 = (function (meta42732){
this.meta42732 = meta42732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
pirates.client.menus.t_pirates$client$menus42731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42733,meta42732__$1){
var self__ = this;
var _42733__$1 = this;
return (new pirates.client.menus.t_pirates$client$menus42731(meta42732__$1));
});

pirates.client.menus.t_pirates$client$menus42731.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42733){
var self__ = this;
var _42733__$1 = this;
return self__.meta42732;
});

pirates.client.menus.t_pirates$client$menus42731.prototype.devcards$core$IDevcardOptions$ = true;

pirates.client.menus.t_pirates$client$menus42731.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__27302__auto__,devcard_opts__27303__auto__){
var self__ = this;
var this__27302__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__27303__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__27321__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pirates.client.menus.tavern], null);
if(cljs.core.fn_QMARK_.call(null,v__27321__auto__)){
return ((function (v__27321__auto__,this__27302__auto____$1){
return (function (data_atom__27322__auto__,owner__27323__auto__){
return reagent.core.as_element.call(null,v__27321__auto__.call(null,data_atom__27322__auto__,owner__27323__auto__));
});
;})(v__27321__auto__,this__27302__auto____$1))
} else {
return reagent.core.as_element.call(null,v__27321__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__27303__auto__))));
});

pirates.client.menus.t_pirates$client$menus42731.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42732","meta42732",-1664479111,null)], null);
});

pirates.client.menus.t_pirates$client$menus42731.cljs$lang$type = true;

pirates.client.menus.t_pirates$client$menus42731.cljs$lang$ctorStr = "pirates.client.menus/t_pirates$client$menus42731";

pirates.client.menus.t_pirates$client$menus42731.cljs$lang$ctorPrWriter = (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"pirates.client.menus/t_pirates$client$menus42731");
});

pirates.client.menus.__GT_t_pirates$client$menus42731 = (function pirates$client$menus$__GT_t_pirates$client$menus42731(meta42732){
return (new pirates.client.menus.t_pirates$client$menus42731(meta42732));
});

}

return (new pirates.client.menus.t_pirates$client$menus42731(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
pirates.client.menus.merchant = (function pirates$client$menus$merchant(app_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pirates.client.menus.panel,"merchant",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Food"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"buy"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"sell"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"2g"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Goods"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"buy"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"sell"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"2g"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Guns"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"buy"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"sell"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"2g"], null)], null)], null)], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pirates.client.menus","pirates.client.menus",1877277747),new cljs.core.Keyword(null,"merchant-example","merchant-example",527424441)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"merchant-example",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof pirates.client.menus.t_pirates$client$menus42734 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pirates.client.menus.t_pirates$client$menus42734 = (function (meta42735){
this.meta42735 = meta42735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
pirates.client.menus.t_pirates$client$menus42734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42736,meta42735__$1){
var self__ = this;
var _42736__$1 = this;
return (new pirates.client.menus.t_pirates$client$menus42734(meta42735__$1));
});

pirates.client.menus.t_pirates$client$menus42734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42736){
var self__ = this;
var _42736__$1 = this;
return self__.meta42735;
});

pirates.client.menus.t_pirates$client$menus42734.prototype.devcards$core$IDevcardOptions$ = true;

pirates.client.menus.t_pirates$client$menus42734.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__27302__auto__,devcard_opts__27303__auto__){
var self__ = this;
var this__27302__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__27303__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__27321__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pirates.client.menus.merchant], null);
if(cljs.core.fn_QMARK_.call(null,v__27321__auto__)){
return ((function (v__27321__auto__,this__27302__auto____$1){
return (function (data_atom__27322__auto__,owner__27323__auto__){
return reagent.core.as_element.call(null,v__27321__auto__.call(null,data_atom__27322__auto__,owner__27323__auto__));
});
;})(v__27321__auto__,this__27302__auto____$1))
} else {
return reagent.core.as_element.call(null,v__27321__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__27303__auto__))));
});

pirates.client.menus.t_pirates$client$menus42734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42735","meta42735",1135386739,null)], null);
});

pirates.client.menus.t_pirates$client$menus42734.cljs$lang$type = true;

pirates.client.menus.t_pirates$client$menus42734.cljs$lang$ctorStr = "pirates.client.menus/t_pirates$client$menus42734";

pirates.client.menus.t_pirates$client$menus42734.cljs$lang$ctorPrWriter = (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"pirates.client.menus/t_pirates$client$menus42734");
});

pirates.client.menus.__GT_t_pirates$client$menus42734 = (function pirates$client$menus$__GT_t_pirates$client$menus42734(meta42735){
return (new pirates.client.menus.t_pirates$client$menus42734(meta42735));
});

}

return (new pirates.client.menus.t_pirates$client$menus42734(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
pirates.client.menus.shipwright = (function pirates$client$menus$shipwright(app_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pirates.client.menus.panel,"shipwright",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Repair for 200g"], null)], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pirates.client.menus","pirates.client.menus",1877277747),new cljs.core.Keyword(null,"shipwright-example","shipwright-example",8720333)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"shipwright-example",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof pirates.client.menus.t_pirates$client$menus42737 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pirates.client.menus.t_pirates$client$menus42737 = (function (meta42738){
this.meta42738 = meta42738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
pirates.client.menus.t_pirates$client$menus42737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42739,meta42738__$1){
var self__ = this;
var _42739__$1 = this;
return (new pirates.client.menus.t_pirates$client$menus42737(meta42738__$1));
});

pirates.client.menus.t_pirates$client$menus42737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42739){
var self__ = this;
var _42739__$1 = this;
return self__.meta42738;
});

pirates.client.menus.t_pirates$client$menus42737.prototype.devcards$core$IDevcardOptions$ = true;

pirates.client.menus.t_pirates$client$menus42737.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__27302__auto__,devcard_opts__27303__auto__){
var self__ = this;
var this__27302__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__27303__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__27321__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pirates.client.menus.shipwright], null);
if(cljs.core.fn_QMARK_.call(null,v__27321__auto__)){
return ((function (v__27321__auto__,this__27302__auto____$1){
return (function (data_atom__27322__auto__,owner__27323__auto__){
return reagent.core.as_element.call(null,v__27321__auto__.call(null,data_atom__27322__auto__,owner__27323__auto__));
});
;})(v__27321__auto__,this__27302__auto____$1))
} else {
return reagent.core.as_element.call(null,v__27321__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__27303__auto__))));
});

pirates.client.menus.t_pirates$client$menus42737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42738","meta42738",-1343735670,null)], null);
});

pirates.client.menus.t_pirates$client$menus42737.cljs$lang$type = true;

pirates.client.menus.t_pirates$client$menus42737.cljs$lang$ctorStr = "pirates.client.menus/t_pirates$client$menus42737";

pirates.client.menus.t_pirates$client$menus42737.cljs$lang$ctorPrWriter = (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"pirates.client.menus/t_pirates$client$menus42737");
});

pirates.client.menus.__GT_t_pirates$client$menus42737 = (function pirates$client$menus$__GT_t_pirates$client$menus42737(meta42738){
return (new pirates.client.menus.t_pirates$client$menus42737(meta42738));
});

}

return (new pirates.client.menus.t_pirates$client$menus42737(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
pirates.client.menus.welcome = (function pirates$client$menus$welcome(app_state){
var map__42745 = cljs.core.deref.call(null,app_state);
var map__42745__$1 = ((((!((map__42745 == null)))?((((map__42745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42745):map__42745);
var vec__42746 = cljs.core.get.call(null,map__42745__$1,new cljs.core.Keyword(null,"town","town",1921168203));
var town_name = cljs.core.nth.call(null,vec__42746,(0),null);
var map__42747 = cljs.core.nth.call(null,vec__42746,(1),null);
var map__42747__$1 = ((((!((map__42747 == null)))?((((map__42747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42747):map__42747);
var town_type = cljs.core.get.call(null,map__42747__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str("Welcome to the "),cljs.core.str(town_type),cljs.core.str(" of "),cljs.core.str(town_name)].join('')], null);
});
pirates.client.menus.in_port = (function pirates$client$menus$in_port(app_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 6 40%",new cljs.core.Keyword(null,"order","order",-1254677256),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pirates.client.menus.menu,app_state], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"3 1 60%",new cljs.core.Keyword(null,"order","order",-1254677256),(2)], null),(function (){var G__42751 = (((new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)).fqn:null);
switch (G__42751) {
case "governor":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pirates.client.menus.governor,app_state], null);

break;
case "tavern":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pirates.client.menus.tavern,app_state], null);

break;
case "merchant":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pirates.client.menus.merchant,app_state], null);

break;
case "shipwright":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pirates.client.menus.shipwright,app_state], null);

break;
case "in-port":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pirates.client.menus.welcome,app_state], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str("Error, bad status "),cljs.core.str(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)))].join('')], null);

}
})()], null)], null);
});
pirates.client.menus.in_port_example = (function pirates$client$menus$in_port_example(){
var app_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (app_state){
return (function pirates$client$menus$in_port_example_$_an_in_port_example(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pirates.client.menus.in_port,app_state], null);
});
;})(app_state))
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pirates.client.menus","pirates.client.menus",1877277747),new cljs.core.Keyword(null,"in-port-example","in-port-example",445097065)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"in-port-example",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof pirates.client.menus.t_pirates$client$menus42753 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pirates.client.menus.t_pirates$client$menus42753 = (function (meta42754){
this.meta42754 = meta42754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
pirates.client.menus.t_pirates$client$menus42753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42755,meta42754__$1){
var self__ = this;
var _42755__$1 = this;
return (new pirates.client.menus.t_pirates$client$menus42753(meta42754__$1));
});

pirates.client.menus.t_pirates$client$menus42753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42755){
var self__ = this;
var _42755__$1 = this;
return self__.meta42754;
});

pirates.client.menus.t_pirates$client$menus42753.prototype.devcards$core$IDevcardOptions$ = true;

pirates.client.menus.t_pirates$client$menus42753.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__27302__auto__,devcard_opts__27303__auto__){
var self__ = this;
var this__27302__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__27303__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__27321__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pirates.client.menus.in_port_example], null);
if(cljs.core.fn_QMARK_.call(null,v__27321__auto__)){
return ((function (v__27321__auto__,this__27302__auto____$1){
return (function (data_atom__27322__auto__,owner__27323__auto__){
return reagent.core.as_element.call(null,v__27321__auto__.call(null,data_atom__27322__auto__,owner__27323__auto__));
});
;})(v__27321__auto__,this__27302__auto____$1))
} else {
return reagent.core.as_element.call(null,v__27321__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__27303__auto__))));
});

pirates.client.menus.t_pirates$client$menus42753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42754","meta42754",871830530,null)], null);
});

pirates.client.menus.t_pirates$client$menus42753.cljs$lang$type = true;

pirates.client.menus.t_pirates$client$menus42753.cljs$lang$ctorStr = "pirates.client.menus/t_pirates$client$menus42753";

pirates.client.menus.t_pirates$client$menus42753.cljs$lang$ctorPrWriter = (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"pirates.client.menus/t_pirates$client$menus42753");
});

pirates.client.menus.__GT_t_pirates$client$menus42753 = (function pirates$client$menus$__GT_t_pirates$client$menus42753(meta42754){
return (new pirates.client.menus.t_pirates$client$menus42753(meta42754));
});

}

return (new pirates.client.menus.t_pirates$client$menus42753(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=menus.js.map?rel=1458781550890
// Compiled by ClojureScript 1.8.34 {}
goog.provide('pirates.client.main');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('pirates.client.map');
goog.require('pirates.client.model');
goog.require('pirates.client.menus');
goog.require('pirates.client.init');
goog.require('pirates.client.communication');
pirates.client.main.main_view = (function pirates$client$main$main_view(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"100 dv",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #555",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Pirates! ",new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pirates.client.model.app_state))], null),((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pirates.client.model.app_state)),new cljs.core.Keyword(null,"sailing","sailing",976626619)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pirates.client.menus.in_port,pirates.client.model.app_state], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pirates.client.map.world_map,pirates.client.model.app_state], null)], null);
});
pirates.client.main.main = (function pirates$client$main$main(){
var temp__4657__auto__ = goog.dom.getElement("app");
if(cljs.core.truth_(temp__4657__auto__)){
var app = temp__4657__auto__;
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pirates.client.main.main_view], null),app);

return pirates.client.communication.start.call(null);
} else {
return null;
}
});
pirates.client.main.main.call(null);

//# sourceMappingURL=main.js.map?rel=1459053684574
// Compiled by ClojureScript 1.8.34 {}
goog.provide('pirates.client.communication');
goog.require('cljs.core');
goog.require('pirates.client.logging');
goog.require('pirates.client.model');
goog.require('taoensso.sente');
if(typeof pirates.client.communication.event_msg_handler !== 'undefined'){
} else {
pirates.client.communication.event_msg_handler = (function (){var method_table__7134__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7136__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7137__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7138__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"pirates.client.communication","event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7138__auto__,method_table__7134__auto__,prefer_table__7135__auto__,method_cache__7136__auto__,cached_hierarchy__7137__auto__));
})();
}
pirates.client.communication.event_msg_handler_STAR_ = (function pirates$client$communication$event_msg_handler_STAR_(p__37190){
var map__37194 = p__37190;
var map__37194__$1 = ((((!((map__37194 == null)))?((((map__37194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37194):map__37194);
var ev_msg = map__37194__$1;
var id = cljs.core.get.call(null,map__37194__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__37194__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__37194__$1,new cljs.core.Keyword(null,"event","event",301435442));
try{return pirates.client.communication.event_msg_handler.call(null,ev_msg);
}catch (e37196){var ex = e37196;
return pirates.client.logging.debug.call(null,ex);
}});
cljs.core._add_method.call(null,pirates.client.communication.event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__37197){
var map__37198 = p__37197;
var map__37198__$1 = ((((!((map__37198 == null)))?((((map__37198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37198):map__37198);
var event = cljs.core.get.call(null,map__37198__$1,new cljs.core.Keyword(null,"event","event",301435442));
return pirates.client.logging.debug.call(null,"Unhandled event:",event);
}));
cljs.core._add_method.call(null,pirates.client.communication.event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__37200){
var map__37201 = p__37200;
var map__37201__$1 = ((((!((map__37201 == null)))?((((map__37201.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37201.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37201):map__37201);
var _QMARK_data = cljs.core.get.call(null,map__37201__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
if(cljs.core._EQ_.call(null,_QMARK_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true], null))){
return pirates.client.logging.debug.call(null,"Channel socket successfully established!");
} else {
return pirates.client.logging.debug.call(null,"Channel socket state change:",_QMARK_data);
}
}));
cljs.core._add_method.call(null,pirates.client.communication.event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__37203){
var map__37204 = p__37203;
var map__37204__$1 = ((((!((map__37204 == null)))?((((map__37204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37204):map__37204);
var _QMARK_data = cljs.core.get.call(null,map__37204__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return cljs.core.swap_BANG_.call(null,pirates.client.model.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.second.call(null,_QMARK_data),new cljs.core.Keyword(null,"at","at",1476951349),(new Date()));
}));
cljs.core._add_method.call(null,pirates.client.communication.event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__37206){
var map__37207 = p__37206;
var map__37207__$1 = ((((!((map__37207 == null)))?((((map__37207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37207):map__37207);
var _QMARK_data = cljs.core.get.call(null,map__37207__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__37209 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__37209,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__37209,(1),null);
return pirates.client.logging.debug.call(null,"Handshake:",_QMARK_uid,_QMARK_csrf_token,cljs.core.swap_BANG_.call(null,pirates.client.model.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid));
}));
pirates.client.communication.maybe_send_viewpoint = (function pirates$client$communication$maybe_send_viewpoint(k,r,a,b){
var va = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(a);
var vb = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,va,vb)){
return null;
} else {
return null;
}
});
pirates.client.communication.start = (function pirates$client$communication$start(){
var map__37212 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"host","host",-1558485167),"piratesserver.herokuapp.com"], null));
var map__37212__$1 = ((((!((map__37212 == null)))?((((map__37212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37212):map__37212);
var chsk = cljs.core.get.call(null,map__37212__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv = cljs.core.get.call(null,map__37212__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__37212__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__37212__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
pirates.client.communication.chsk_send_BANG_ = send_fn;

taoensso.sente.start_chsk_router_BANG_.call(null,ch_recv,pirates.client.communication.event_msg_handler_STAR_);

return window.setInterval(((function (map__37212,map__37212__$1,chsk,ch_recv,send_fn,state){
return (function pirates$client$communication$start_$_send_status(){
var temp__4657__auto__ = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pirates.client.model.app_state));
if(cljs.core.truth_(temp__4657__auto__)){
var status = temp__4657__auto__;
return pirates.client.communication.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pirates","status","pirates/status",1766394781),status], null));
} else {
return null;
}
});})(map__37212,map__37212__$1,chsk,ch_recv,send_fn,state))
,(200));
});

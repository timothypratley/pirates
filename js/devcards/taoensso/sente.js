// Compiled by ClojureScript 1.8.34 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('clojure.string');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(11),(0)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.11);
}
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281);
} else {
var vec__41531 = x;
var ev_id = cljs.core.nth.call(null,vec__41531,(0),null);
var _ = cljs.core.nth.call(null,vec__41531,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772);
} else {
return null;

}
}

}
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
if(cljs.core.truth_(taoensso.sente.event_QMARK_.call(null,x))){
return x;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
}
});
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__4657__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var _QMARK_err = temp__4657__auto__;
var err_fmt = [cljs.core.str((function (){var G__41533 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__41533) {
case "wrong-type":
return "Malformed event (wrong type).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-id-type":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "else":
return "Malformed event (unknown error).";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(_QMARK_err)].join('')));

}
})()),cljs.core.str(" Event should be of `[ev-id ?ev-data]` form: %s")].join('');
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,err_fmt,[cljs.core.str(x)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"malformed-event","malformed-event",-2090896605),x], null));
} else {
return null;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__18426__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__18426__auto__){
var and__18426__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__18426__auto____$1)){
var map__41537 = x;
var map__41537__$1 = ((((!((map__41537 == null)))?((((map__41537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41537):map__41537);
var ch_recv = cljs.core.get.call(null,map__41537__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__41537__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__41537__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__41537__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__18426__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__18426__auto____$2)){
var and__18426__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__18426__auto____$3){
var and__18426__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(cljs.core.truth_(and__18426__auto____$4)){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__18426__auto____$4;
}
} else {
return and__18426__auto____$3;
}
} else {
return and__18426__auto____$2;
}
} else {
return and__18426__auto____$1;
}
} else {
return and__18426__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__18426__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__18426__auto__){
var and__18426__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__18426__auto____$1)){
var map__41541 = x;
var map__41541__$1 = ((((!((map__41541 == null)))?((((map__41541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41541):map__41541);
var ch_recv = cljs.core.get.call(null,map__41541__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__41541__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__41541__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__41541__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__41541__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__41541__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__41541__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__18426__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__18426__auto____$2)){
var and__18426__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__18426__auto____$3){
var and__18426__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(cljs.core.truth_(and__18426__auto____$4)){
var and__18426__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__18426__auto____$5){
var and__18426__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(cljs.core.truth_(and__18426__auto____$6)){
var and__18426__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__18426__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__18426__auto____$7;
}
} else {
return and__18426__auto____$6;
}
} else {
return and__18426__auto____$5;
}
} else {
return and__18426__auto____$4;
}
} else {
return and__18426__auto____$3;
}
} else {
return and__18426__auto____$2;
}
} else {
return and__18426__auto____$1;
}
} else {
return and__18426__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__41543){
var map__41547 = p__41543;
var map__41547__$1 = ((((!((map__41547 == null)))?((((map__41547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41547):map__41547);
var ev_msg = map__41547__$1;
var event = cljs.core.get.call(null,map__41547__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__41547__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__41549 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__41549,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__41549,(1),null);
var valid_event = vec__41549;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",159,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__41549,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__41547,map__41547__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__41549,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__41547,map__41547__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null);
} else {
return cljs.core.async.put_BANG_.call(null,ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj);
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,taoensso.sente.cb_error_QMARK_.call(null,cb_reply_clj));
});
/**
 * pstr->clj
 */
taoensso.sente.unpack_STAR_ = (function taoensso$sente$unpack_STAR_(packer,pstr){
try{return taoensso.sente.interfaces.unpack.call(null,packer,(function (){var __x = pstr;
try{if(typeof __x === 'string'){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e41553){if((e41553 instanceof Error)){
var __t = e41553;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? pstr)",__x,__t,null);
} else {
throw e41553;

}
}})());
}catch (e41552){var t = e41552;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",175,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t))
,null)),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack_STAR_ = (function taoensso$sente$pack_STAR_(var_args){
var args41554 = [];
var len__19507__auto___41557 = arguments.length;
var i__19508__auto___41558 = (0);
while(true){
if((i__19508__auto___41558 < len__19507__auto___41557)){
args41554.push((arguments[i__19508__auto___41558]));

var G__41559 = (i__19508__auto___41558 + (1));
i__19508__auto___41558 = G__41559;
continue;
} else {
}
break;
}

var G__41556 = args41554.length;
switch (G__41556) {
case 3:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41554.length)].join('')));

}
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
return [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
return [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$lang$maxFixedArity = 4;
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var args__19514__auto__ = [];
var len__19507__auto___41562 = arguments.length;
var i__19508__auto___41563 = (0);
while(true){
if((i__19508__auto___41563 < len__19507__auto___41562)){
args__19514__auto__.push((arguments[i__19508__auto___41563]));

var G__41564 = (i__19508__auto___41563 + (1));
i__19508__auto___41563 = G__41564;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((0) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((0)),(0),null)):null);
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(argseq__19515__auto__);
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",193,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing: %s -> %s",args,pstr], null);
});})(pstr))
,null)),null);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = (0);

taoensso.sente.pack.cljs$lang$applyTo = (function (seq41561){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41561));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
var __x_41571 = prefixed_pstr;
try{if(typeof __x_41571 === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e41568){if((e41568 instanceof Error)){
var __t_41572 = e41568;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? prefixed-pstr)",__x_41571,__t_41572,null);
} else {
throw e41568;

}
}
var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__41570 = prefix;
switch (G__41570) {
case "-":
return false;

break;
case "+":
return true;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(prefix)].join('')));

}
})();
var vec__41569 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__41569,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__41569,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",205,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (prefix,pstr,clj,wrapped_QMARK_,vec__41569,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(prefix,pstr,clj,wrapped_QMARK_,vec__41569,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});

/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation (experimental).
 * 
 *   [1] e.g. `taoensso.sente.server-adapters.http-kit/http-kit-adapter` or
 *         `taoensso.sente.server-adapters.immutant/immutant-adapter`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__19514__auto__ = [];
var len__19507__auto___41743 = arguments.length;
var i__19508__auto___41744 = (0);
while(true){
if((i__19508__auto___41744 < len__19507__auto___41743)){
args__19514__auto__.push((arguments[i__19508__auto___41744]));

var G__41745 = (i__19508__auto___41744 + (1));
i__19508__auto___41744 = G__41745;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_adapter,p__41577){
var vec__41578 = p__41577;
var map__41579 = cljs.core.nth.call(null,vec__41578,(0),null);
var map__41579__$1 = ((((!((map__41579 == null)))?((((map__41579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41579):map__41579);
var recv_buf_or_n = cljs.core.get.call(null,map__41579__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__41579__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__41579__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__41579__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__41579__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__18438__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
var or__18438__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__18438__auto____$1)){
return or__18438__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__41579__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__41579__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var __x = send_buf_ms_ajax;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e41581){if((e41581 instanceof Error)){
var __t = e41581;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ajax)",__x,__t,null);
} else {
throw e41581;

}
}})(),(function (){var __x = send_buf_ms_ws;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e41582){if((e41582 instanceof Error)){
var __t = e41582;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",__x,__t,null);
} else {
throw e41582;

}
}})()], null))){
} else {
throw (new Error("Assert failed: (have? enc/pos-int? send-buf-ms-ajax send-buf-ms-ws)"));
}

if(cljs.core.truth_((function (){var __x = web_server_adapter;
try{if(((function (__x,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__41574_SHARP_){
if(!((p1__41574_SHARP_ == null))){
if((false) || (p1__41574_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__41574_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__41574_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__41574_SHARP_);
}
});})(__x,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e41583){if((e41583 instanceof Error)){
var __t = e41583;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__41574#] (satisfies? interfaces/IServerChanAdapter p1__41574#)) web-server-adapter)",__x,__t,null);
} else {
throw e41583;

}
}})())){
} else {
throw (new Error("Assert failed: (have? (fn* [p1__41574#] (satisfies? interfaces/IServerChanAdapter p1__41574#)) web-server-adapter)"));
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var user_id_fn__$1 = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__18438__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type,uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e41585){if((e41585 instanceof Error)){
var __t = e41585;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e41585;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__41586){
var map__41587 = p__41586;
var map__41587__$1 = ((((!((map__41587 == null)))?((((map__41587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41587):map__41587);
var old_m = map__41587__$1;
var ws = cljs.core.get.call(null,map__41587__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__41587__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__41587__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__41589 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__41589) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.call(null,ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.call(null,ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((!(cljs.core.contains_QMARK_.call(null,old_any,uid))) && (cljs.core.contains_QMARK_.call(null,new_any,uid))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e41590){if((e41590 instanceof Error)){
var __t = e41590;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e41590;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__41591){
var map__41592 = p__41591;
var map__41592__$1 = ((((!((map__41592 == null)))?((((map__41592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41592):map__41592);
var old_m = map__41592__$1;
var ws = cljs.core.get.call(null,map__41592__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__41592__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__41592__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref.call(null,conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.call(null,ws,uid):cljs.core.disj.call(null,ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.call(null,ajax,uid):cljs.core.disj.call(null,ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.call(null,any,uid):cljs.core.disj.call(null,any,uid))], null);
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_.call(null,old_any,uid)) && (!(cljs.core.contains_QMARK_.call(null,new_any,uid)))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__41747__delegate = function (user_id,ev,p__41594){
var vec__41595 = p__41594;
var map__41596 = cljs.core.nth.call(null,vec__41595,(0),null);
var map__41596__$1 = ((((!((map__41596 == null)))?((((map__41596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41596):map__41596);
var opts = map__41596__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__41596__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_41748 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __41749 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",324,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_41748,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_41748,ev], null);
});})(uid_41748,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);
var __41750__$1 = (cljs.core.truth_(uid_41748)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __41751__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_41752 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__41753 = ((function (uid_41748,__41749,__41750__$1,__41751__$2,ev_uuid_41752,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type){
var temp__4657__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),((function (uid_41748,__41749,__41750__$1,__41751__$2,ev_uuid_41752,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__41598 = cljs.core.get.call(null,m,uid_41748);
var ___$3 = cljs.core.nth.call(null,vec__41598,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__41598,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_41752)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_41748),cljs.core.get.call(null,m,uid_41748));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_41748,__41749,__41750__$1,__41751__$2,ev_uuid_41752,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4657__auto__)){
var pulled = temp__4657__auto__;
var vec__41599 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__41599,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__41599,(1),null);
var __x_41754 = buffered_evs;
try{if(cljs.core.vector_QMARK_.call(null,__x_41754)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e41600){if((e41600 instanceof Error)){
var __t_41755 = e41600;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? buffered-evs)",__x_41754,__t_41755,null);
} else {
throw e41600;

}
}
var __x_41756 = ev_uuids;
try{if(cljs.core.set_QMARK_.call(null,__x_41756)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e41601){if((e41601 instanceof Error)){
var __t_41757 = e41601;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(set? ev-uuids)",__x_41756,__t_41757,null);
} else {
throw e41601;

}
}
var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",357,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__41599,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_41748,__41749,__41750__$1,__41751__$2,ev_uuid_41752,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__41599,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_41748,__41749,__41750__$1,__41751__$2,ev_uuid_41752,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var G__41602 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__41602) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_41748,buffered_evs_ppstr);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_41748,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
} else {
return null;
}
});})(uid_41748,__41749,__41750__$1,__41751__$2,ev_uuid_41752,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",367,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_41748,__41749,__41750__$1,__41751__$2,ev_uuid_41752,flush_buffer_BANG__41753,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_41748], null);
});})(uid_41748,__41749,__41750__$1,__41751__$2,ev_uuid_41752,flush_buffer_BANG__41753,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

if(cljs.core.truth_(flush_QMARK_)){
var seq__41603_41759 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__41604_41760 = null;
var count__41605_41761 = (0);
var i__41606_41762 = (0);
while(true){
if((i__41606_41762 < count__41605_41761)){
var type_41763 = cljs.core._nth.call(null,chunk__41604_41760,i__41606_41762);
flush_buffer_BANG__41753.call(null,type_41763);

var G__41764 = seq__41603_41759;
var G__41765 = chunk__41604_41760;
var G__41766 = count__41605_41761;
var G__41767 = (i__41606_41762 + (1));
seq__41603_41759 = G__41764;
chunk__41604_41760 = G__41765;
count__41605_41761 = G__41766;
i__41606_41762 = G__41767;
continue;
} else {
var temp__4657__auto___41768 = cljs.core.seq.call(null,seq__41603_41759);
if(temp__4657__auto___41768){
var seq__41603_41769__$1 = temp__4657__auto___41768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41603_41769__$1)){
var c__19249__auto___41770 = cljs.core.chunk_first.call(null,seq__41603_41769__$1);
var G__41771 = cljs.core.chunk_rest.call(null,seq__41603_41769__$1);
var G__41772 = c__19249__auto___41770;
var G__41773 = cljs.core.count.call(null,c__19249__auto___41770);
var G__41774 = (0);
seq__41603_41759 = G__41771;
chunk__41604_41760 = G__41772;
count__41605_41761 = G__41773;
i__41606_41762 = G__41774;
continue;
} else {
var type_41775 = cljs.core.first.call(null,seq__41603_41769__$1);
flush_buffer_BANG__41753.call(null,type_41775);

var G__41776 = cljs.core.next.call(null,seq__41603_41769__$1);
var G__41777 = null;
var G__41778 = (0);
var G__41779 = (0);
seq__41603_41759 = G__41776;
chunk__41604_41760 = G__41777;
count__41605_41761 = G__41778;
i__41606_41762 = G__41779;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__41607_41780 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_41748], null))));
var chunk__41608_41781 = null;
var count__41609_41782 = (0);
var i__41610_41783 = (0);
while(true){
if((i__41610_41783 < count__41609_41782)){
var server_ch_41784 = cljs.core._nth.call(null,chunk__41608_41781,i__41610_41783);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_41784);

var G__41785 = seq__41607_41780;
var G__41786 = chunk__41608_41781;
var G__41787 = count__41609_41782;
var G__41788 = (i__41610_41783 + (1));
seq__41607_41780 = G__41785;
chunk__41608_41781 = G__41786;
count__41609_41782 = G__41787;
i__41610_41783 = G__41788;
continue;
} else {
var temp__4657__auto___41789 = cljs.core.seq.call(null,seq__41607_41780);
if(temp__4657__auto___41789){
var seq__41607_41790__$1 = temp__4657__auto___41789;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41607_41790__$1)){
var c__19249__auto___41791 = cljs.core.chunk_first.call(null,seq__41607_41790__$1);
var G__41792 = cljs.core.chunk_rest.call(null,seq__41607_41790__$1);
var G__41793 = c__19249__auto___41791;
var G__41794 = cljs.core.count.call(null,c__19249__auto___41791);
var G__41795 = (0);
seq__41607_41780 = G__41792;
chunk__41608_41781 = G__41793;
count__41609_41782 = G__41794;
i__41610_41783 = G__41795;
continue;
} else {
var server_ch_41796 = cljs.core.first.call(null,seq__41607_41790__$1);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_41796);

var G__41797 = cljs.core.next.call(null,seq__41607_41790__$1);
var G__41798 = null;
var G__41799 = (0);
var G__41800 = (0);
seq__41607_41780 = G__41797;
chunk__41608_41781 = G__41798;
count__41609_41782 = G__41799;
i__41610_41783 = G__41800;
continue;
}
} else {
}
}
break;
}

var seq__41611_41801 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_41748], null))));
var chunk__41612_41802 = null;
var count__41613_41803 = (0);
var i__41614_41804 = (0);
while(true){
if((i__41614_41804 < count__41613_41803)){
var vec__41615_41805 = cljs.core._nth.call(null,chunk__41612_41802,i__41614_41804);
var _QMARK_server_ch_41806 = cljs.core.nth.call(null,vec__41615_41805,(0),null);
var __41807__$3 = cljs.core.nth.call(null,vec__41615_41805,(1),null);
var temp__4657__auto___41808 = _QMARK_server_ch_41806;
if(cljs.core.truth_(temp__4657__auto___41808)){
var server_ch_41809 = temp__4657__auto___41808;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_41809);
} else {
}

var G__41810 = seq__41611_41801;
var G__41811 = chunk__41612_41802;
var G__41812 = count__41613_41803;
var G__41813 = (i__41614_41804 + (1));
seq__41611_41801 = G__41810;
chunk__41612_41802 = G__41811;
count__41613_41803 = G__41812;
i__41614_41804 = G__41813;
continue;
} else {
var temp__4657__auto___41814 = cljs.core.seq.call(null,seq__41611_41801);
if(temp__4657__auto___41814){
var seq__41611_41815__$1 = temp__4657__auto___41814;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41611_41815__$1)){
var c__19249__auto___41816 = cljs.core.chunk_first.call(null,seq__41611_41815__$1);
var G__41817 = cljs.core.chunk_rest.call(null,seq__41611_41815__$1);
var G__41818 = c__19249__auto___41816;
var G__41819 = cljs.core.count.call(null,c__19249__auto___41816);
var G__41820 = (0);
seq__41611_41801 = G__41817;
chunk__41612_41802 = G__41818;
count__41613_41803 = G__41819;
i__41614_41804 = G__41820;
continue;
} else {
var vec__41616_41821 = cljs.core.first.call(null,seq__41611_41815__$1);
var _QMARK_server_ch_41822 = cljs.core.nth.call(null,vec__41616_41821,(0),null);
var __41823__$3 = cljs.core.nth.call(null,vec__41616_41821,(1),null);
var temp__4657__auto___41824__$1 = _QMARK_server_ch_41822;
if(cljs.core.truth_(temp__4657__auto___41824__$1)){
var server_ch_41825 = temp__4657__auto___41824__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_41825);
} else {
}

var G__41826 = cljs.core.next.call(null,seq__41611_41815__$1);
var G__41827 = null;
var G__41828 = (0);
var G__41829 = (0);
seq__41611_41801 = G__41826;
chunk__41612_41802 = G__41827;
count__41613_41803 = G__41828;
i__41614_41804 = G__41829;
continue;
}
} else {
}
}
break;
}
} else {
var seq__41617_41830 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__41618_41831 = null;
var count__41619_41832 = (0);
var i__41620_41833 = (0);
while(true){
if((i__41620_41833 < count__41619_41832)){
var type_41834 = cljs.core._nth.call(null,chunk__41618_41831,i__41620_41833);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_41834,uid_41748], null),((function (seq__41617_41830,chunk__41618_41831,count__41619_41832,i__41620_41833,type_41834,uid_41748,__41749,__41750__$1,__41751__$2,ev_uuid_41752,flush_buffer_BANG__41753,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_41752], true)], null);
} else {
var vec__41621 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__41621,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__41621,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_41752)], null);
}
});})(seq__41617_41830,chunk__41618_41831,count__41619_41832,i__41620_41833,type_41834,uid_41748,__41749,__41750__$1,__41751__$2,ev_uuid_41752,flush_buffer_BANG__41753,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__41835 = seq__41617_41830;
var G__41836 = chunk__41618_41831;
var G__41837 = count__41619_41832;
var G__41838 = (i__41620_41833 + (1));
seq__41617_41830 = G__41835;
chunk__41618_41831 = G__41836;
count__41619_41832 = G__41837;
i__41620_41833 = G__41838;
continue;
} else {
var temp__4657__auto___41839 = cljs.core.seq.call(null,seq__41617_41830);
if(temp__4657__auto___41839){
var seq__41617_41840__$1 = temp__4657__auto___41839;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41617_41840__$1)){
var c__19249__auto___41841 = cljs.core.chunk_first.call(null,seq__41617_41840__$1);
var G__41842 = cljs.core.chunk_rest.call(null,seq__41617_41840__$1);
var G__41843 = c__19249__auto___41841;
var G__41844 = cljs.core.count.call(null,c__19249__auto___41841);
var G__41845 = (0);
seq__41617_41830 = G__41842;
chunk__41618_41831 = G__41843;
count__41619_41832 = G__41844;
i__41620_41833 = G__41845;
continue;
} else {
var type_41846 = cljs.core.first.call(null,seq__41617_41840__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_41846,uid_41748], null),((function (seq__41617_41830,chunk__41618_41831,count__41619_41832,i__41620_41833,type_41846,seq__41617_41840__$1,temp__4657__auto___41839,uid_41748,__41749,__41750__$1,__41751__$2,ev_uuid_41752,flush_buffer_BANG__41753,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_41752], true)], null);
} else {
var vec__41622 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__41622,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__41622,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_41752)], null);
}
});})(seq__41617_41830,chunk__41618_41831,count__41619_41832,i__41620_41833,type_41846,seq__41617_41840__$1,temp__4657__auto___41839,uid_41748,__41749,__41750__$1,__41751__$2,ev_uuid_41752,flush_buffer_BANG__41753,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__41847 = cljs.core.next.call(null,seq__41617_41840__$1);
var G__41848 = null;
var G__41849 = (0);
var G__41850 = (0);
seq__41617_41830 = G__41847;
chunk__41618_41831 = G__41848;
count__41619_41832 = G__41849;
i__41620_41833 = G__41850;
continue;
}
} else {
}
}
break;
}

var c__21993__auto___41851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto___41851,uid_41748,__41749,__41750__$1,__41751__$2,ev_uuid_41752,flush_buffer_BANG__41753,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto___41851,uid_41748,__41749,__41750__$1,__41751__$2,ev_uuid_41752,flush_buffer_BANG__41753,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_41632){
var state_val_41633 = (state_41632[(1)]);
if((state_val_41633 === (1))){
var state_41632__$1 = state_41632;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_41634_41852 = state_41632__$1;
(statearr_41634_41852[(1)] = (2));

} else {
var statearr_41635_41853 = state_41632__$1;
(statearr_41635_41853[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41633 === (2))){
var state_41632__$1 = state_41632;
var statearr_41636_41854 = state_41632__$1;
(statearr_41636_41854[(2)] = null);

(statearr_41636_41854[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41633 === (3))){
var inst_41625 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var state_41632__$1 = state_41632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41632__$1,(5),inst_41625);
} else {
if((state_val_41633 === (4))){
var inst_41629 = (state_41632[(2)]);
var inst_41630 = flush_buffer_BANG__41753.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_41632__$1 = (function (){var statearr_41637 = state_41632;
(statearr_41637[(7)] = inst_41629);

return statearr_41637;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41632__$1,inst_41630);
} else {
if((state_val_41633 === (5))){
var inst_41627 = (state_41632[(2)]);
var state_41632__$1 = state_41632;
var statearr_41638_41855 = state_41632__$1;
(statearr_41638_41855[(2)] = inst_41627);

(statearr_41638_41855[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__21993__auto___41851,uid_41748,__41749,__41750__$1,__41751__$2,ev_uuid_41752,flush_buffer_BANG__41753,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__21881__auto__,c__21993__auto___41851,uid_41748,__41749,__41750__$1,__41751__$2,ev_uuid_41752,flush_buffer_BANG__41753,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__21882__auto__ = null;
var taoensso$sente$state_machine__21882__auto____0 = (function (){
var statearr_41642 = [null,null,null,null,null,null,null,null];
(statearr_41642[(0)] = taoensso$sente$state_machine__21882__auto__);

(statearr_41642[(1)] = (1));

return statearr_41642;
});
var taoensso$sente$state_machine__21882__auto____1 = (function (state_41632){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_41632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e41643){if((e41643 instanceof Object)){
var ex__21885__auto__ = e41643;
var statearr_41644_41856 = state_41632;
(statearr_41644_41856[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41857 = state_41632;
state_41632 = G__41857;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
taoensso$sente$state_machine__21882__auto__ = function(state_41632){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__21882__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__21882__auto____1.call(this,state_41632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__21882__auto____0;
taoensso$sente$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__21882__auto____1;
return taoensso$sente$state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto___41851,uid_41748,__41749,__41750__$1,__41751__$2,ev_uuid_41752,flush_buffer_BANG__41753,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__21995__auto__ = (function (){var statearr_41645 = f__21994__auto__.call(null);
(statearr_41645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto___41851);

return statearr_41645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto___41851,uid_41748,__41749,__41750__$1,__41751__$2,ev_uuid_41752,flush_buffer_BANG__41753,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__21993__auto___41858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto___41858,uid_41748,__41749,__41750__$1,__41751__$2,ev_uuid_41752,flush_buffer_BANG__41753,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto___41858,uid_41748,__41749,__41750__$1,__41751__$2,ev_uuid_41752,flush_buffer_BANG__41753,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_41655){
var state_val_41656 = (state_41655[(1)]);
if((state_val_41656 === (1))){
var state_41655__$1 = state_41655;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_41657_41859 = state_41655__$1;
(statearr_41657_41859[(1)] = (2));

} else {
var statearr_41658_41860 = state_41655__$1;
(statearr_41658_41860[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41656 === (2))){
var state_41655__$1 = state_41655;
var statearr_41659_41861 = state_41655__$1;
(statearr_41659_41861[(2)] = null);

(statearr_41659_41861[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41656 === (3))){
var inst_41648 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var state_41655__$1 = state_41655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41655__$1,(5),inst_41648);
} else {
if((state_val_41656 === (4))){
var inst_41652 = (state_41655[(2)]);
var inst_41653 = flush_buffer_BANG__41753.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_41655__$1 = (function (){var statearr_41660 = state_41655;
(statearr_41660[(7)] = inst_41652);

return statearr_41660;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41655__$1,inst_41653);
} else {
if((state_val_41656 === (5))){
var inst_41650 = (state_41655[(2)]);
var state_41655__$1 = state_41655;
var statearr_41661_41862 = state_41655__$1;
(statearr_41661_41862[(2)] = inst_41650);

(statearr_41661_41862[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__21993__auto___41858,uid_41748,__41749,__41750__$1,__41751__$2,ev_uuid_41752,flush_buffer_BANG__41753,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__21881__auto__,c__21993__auto___41858,uid_41748,__41749,__41750__$1,__41751__$2,ev_uuid_41752,flush_buffer_BANG__41753,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__21882__auto__ = null;
var taoensso$sente$state_machine__21882__auto____0 = (function (){
var statearr_41665 = [null,null,null,null,null,null,null,null];
(statearr_41665[(0)] = taoensso$sente$state_machine__21882__auto__);

(statearr_41665[(1)] = (1));

return statearr_41665;
});
var taoensso$sente$state_machine__21882__auto____1 = (function (state_41655){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_41655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e41666){if((e41666 instanceof Object)){
var ex__21885__auto__ = e41666;
var statearr_41667_41863 = state_41655;
(statearr_41667_41863[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41864 = state_41655;
state_41655 = G__41864;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
taoensso$sente$state_machine__21882__auto__ = function(state_41655){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__21882__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__21882__auto____1.call(this,state_41655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__21882__auto____0;
taoensso$sente$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__21882__auto____1;
return taoensso$sente$state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto___41858,uid_41748,__41749,__41750__$1,__41751__$2,ev_uuid_41752,flush_buffer_BANG__41753,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__21995__auto__ = (function (){var statearr_41668 = f__21994__auto__.call(null);
(statearr_41668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto___41858);

return statearr_41668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto___41858,uid_41748,__41749,__41750__$1,__41751__$2,ev_uuid_41752,flush_buffer_BANG__41753,vec__41595,map__41596,map__41596__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}

return null;
};
var G__41747 = function (user_id,ev,var_args){
var p__41594 = null;
if (arguments.length > 2) {
var G__41865__i = 0, G__41865__a = new Array(arguments.length -  2);
while (G__41865__i < G__41865__a.length) {G__41865__a[G__41865__i] = arguments[G__41865__i + 2]; ++G__41865__i;}
  p__41594 = new cljs.core.IndexedSeq(G__41865__a,0);
} 
return G__41747__delegate.call(this,user_id,ev,p__41594);};
G__41747.cljs$lang$maxFixedArity = 2;
G__41747.cljs$lang$applyTo = (function (arglist__41866){
var user_id = cljs.core.first(arglist__41866);
arglist__41866 = cljs.core.next(arglist__41866);
var ev = cljs.core.first(arglist__41866);
var p__41594 = cljs.core.rest(arglist__41866);
return G__41747__delegate(user_id,ev,p__41594);
});
G__41747.cljs$core$IFn$_invoke$arity$variadic = G__41747__delegate;
return G__41747;
})()
;})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__41669 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__41669,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__41669,(1),null);
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?((function (params,ppstr,client_id,vec__41669,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",435,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__41669,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): %s",resp_clj], null);
});})(params,ppstr,client_id,vec__41669,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
});})(params,ppstr,client_id,vec__41669,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
return null;
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",442,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__41669,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): dummy-cb-200"], null);
});})(params,ppstr,client_id,vec__41669,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337)),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var csrf_token = csrf_token_fn.call(null,ring_req);
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var websocket_QMARK_ = new cljs.core.Keyword(null,"websocket?","websocket?",1552493139).cljs$core$IFn$_invoke$arity$1(ring_req);
var receive_event_msg_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__41867__delegate = function (event,p__41670){
var vec__41671 = p__41670;
var _QMARK_reply_fn = cljs.core.nth.call(null,vec__41671,(0),null);
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
};
var G__41867 = function (event,var_args){
var p__41670 = null;
if (arguments.length > 1) {
var G__41868__i = 0, G__41868__a = new Array(arguments.length -  1);
while (G__41868__i < G__41868__a.length) {G__41868__a[G__41868__i] = arguments[G__41868__i + 1]; ++G__41868__i;}
  p__41670 = new cljs.core.IndexedSeq(G__41868__a,0);
} 
return G__41867__delegate.call(this,event,p__41670);};
G__41867.cljs$lang$maxFixedArity = 1;
G__41867.cljs$lang$applyTo = (function (arglist__41869){
var event = cljs.core.first(arglist__41869);
var p__41670 = cljs.core.rest(arglist__41869);
return G__41867__delegate(event,p__41670);
});
G__41867.cljs$core$IFn$_invoke$arity$variadic = G__41867__delegate;
return G__41867;
})()
;})(csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var handshake_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",467,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handshake!"], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = ((!((_QMARK_handshake_data == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev),cljs.core.not.call(null,websocket_QMARK_));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",479,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",487,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,[cljs.core.str(server_ch)].join('')], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

taoensso.encore.reset_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id], null),server_ch);

if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954)], null));
} else {
}

return handshake_BANG_.call(null,server_ch);
} else {
var initial_conn_from_client_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_ch,taoensso.encore.now_udt.call(null)], null),(_QMARK_v == null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
var handshake_QMARK_ = (function (){var or__18438__auto__ = initial_conn_from_client_QMARK_;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954)], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return handshake_BANG_.call(null,server_ch);
} else {
return null;
}
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,req_ppstr){
var vec__41672 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__41672,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__41672,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__41672,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",514,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__41672,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__41672,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__41672,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,status){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
if(cljs.core.empty_QMARK_.call(null,new_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return new_m;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var c__21993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_41686){
var state_val_41687 = (state_41686[(1)]);
if((state_val_41687 === (1))){
var inst_41673 = cljs.core.async.timeout.call(null,(5000));
var state_41686__$1 = state_41686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41686__$1,(2),inst_41673);
} else {
if((state_val_41687 === (2))){
var inst_41675 = (state_41686[(2)]);
var inst_41676 = upd_connected_uid_BANG_.call(null,uid);
var state_41686__$1 = (function (){var statearr_41688 = state_41686;
(statearr_41688[(7)] = inst_41675);

return statearr_41688;
})();
if(cljs.core.truth_(inst_41676)){
var statearr_41689_41870 = state_41686__$1;
(statearr_41689_41870[(1)] = (3));

} else {
var statearr_41690_41871 = state_41686__$1;
(statearr_41690_41871[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41687 === (3))){
var inst_41678 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41679 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_41680 = (new cljs.core.PersistentVector(null,1,(5),inst_41678,inst_41679,null));
var inst_41681 = receive_event_msg_BANG_.call(null,inst_41680);
var state_41686__$1 = state_41686;
var statearr_41691_41872 = state_41686__$1;
(statearr_41691_41872[(2)] = inst_41681);

(statearr_41691_41872[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41687 === (4))){
var state_41686__$1 = state_41686;
var statearr_41692_41873 = state_41686__$1;
(statearr_41692_41873[(2)] = null);

(statearr_41692_41873[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41687 === (5))){
var inst_41684 = (state_41686[(2)]);
var state_41686__$1 = state_41686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41686__$1,inst_41684);
} else {
return null;
}
}
}
}
}
});})(c__21993__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__21881__auto__,c__21993__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__21882__auto__ = null;
var taoensso$sente$state_machine__21882__auto____0 = (function (){
var statearr_41696 = [null,null,null,null,null,null,null,null];
(statearr_41696[(0)] = taoensso$sente$state_machine__21882__auto__);

(statearr_41696[(1)] = (1));

return statearr_41696;
});
var taoensso$sente$state_machine__21882__auto____1 = (function (state_41686){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_41686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e41697){if((e41697 instanceof Object)){
var ex__21885__auto__ = e41697;
var statearr_41698_41874 = state_41686;
(statearr_41698_41874[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41875 = state_41686;
state_41686 = G__41875;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
taoensso$sente$state_machine__21882__auto__ = function(state_41686){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__21882__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__21882__auto____1.call(this,state_41686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__21882__auto____0;
taoensso$sente$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__21882__auto____1;
return taoensso$sente$state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__21995__auto__ = (function (){var statearr_41699 = f__21994__auto__.call(null);
(statearr_41699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto__);

return statearr_41699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__21993__auto__;
} else {
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,new cljs.core.Keyword(null,"ajax","ajax",814345549),client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__41700){
var vec__41701 = p__41700;
var server_ch__$1 = cljs.core.nth.call(null,vec__41701,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__41701,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var udt_disconnected = taoensso.encore.now_udt.call(null);
var c__21993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_41724){
var state_val_41725 = (state_41724[(1)]);
if((state_val_41725 === (1))){
var inst_41702 = cljs.core.async.timeout.call(null,(5000));
var state_41724__$1 = state_41724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41724__$1,(2),inst_41702);
} else {
if((state_val_41725 === (2))){
var inst_41704 = (state_41724[(2)]);
var inst_41705 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41706 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_41707 = (new cljs.core.PersistentVector(null,2,(5),inst_41705,inst_41706,null));
var inst_41708 = (function (){return ((function (inst_41704,inst_41705,inst_41706,inst_41707,state_val_41725,c__21993__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var vec__41726 = cljs.core.get.call(null,_QMARK_m,client_id);
var _ = cljs.core.nth.call(null,vec__41726,(0),null);
var _QMARK_udt_last_connected = cljs.core.nth.call(null,vec__41726,(1),null);
var disconnected_QMARK_ = (function (){var and__18426__auto__ = _QMARK_udt_last_connected;
if(cljs.core.truth_(and__18426__auto__)){
return (udt_disconnected >= _QMARK_udt_last_connected);
} else {
return and__18426__auto__;
}
})();
if(cljs.core.not.call(null,disconnected_QMARK_)){
return taoensso.encore.swapped.call(null,_QMARK_m,cljs.core.not.call(null,new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586)));
} else {
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
return taoensso.encore.swapped.call(null,((cljs.core.empty_QMARK_.call(null,new_m))?new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782):new_m),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586));
}
});
;})(inst_41704,inst_41705,inst_41706,inst_41707,state_val_41725,c__21993__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_41709 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_41707,inst_41708);
var state_41724__$1 = (function (){var statearr_41727 = state_41724;
(statearr_41727[(7)] = inst_41704);

return statearr_41727;
})();
if(cljs.core.truth_(inst_41709)){
var statearr_41728_41876 = state_41724__$1;
(statearr_41728_41876[(1)] = (3));

} else {
var statearr_41729_41877 = state_41724__$1;
(statearr_41729_41877[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41725 === (3))){
var inst_41711 = upd_connected_uid_BANG_.call(null,uid);
var state_41724__$1 = state_41724;
if(cljs.core.truth_(inst_41711)){
var statearr_41730_41878 = state_41724__$1;
(statearr_41730_41878[(1)] = (6));

} else {
var statearr_41731_41879 = state_41724__$1;
(statearr_41731_41879[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41725 === (4))){
var state_41724__$1 = state_41724;
var statearr_41732_41880 = state_41724__$1;
(statearr_41732_41880[(2)] = null);

(statearr_41732_41880[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41725 === (5))){
var inst_41722 = (state_41724[(2)]);
var state_41724__$1 = state_41724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41724__$1,inst_41722);
} else {
if((state_val_41725 === (6))){
var inst_41713 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41714 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_41715 = (new cljs.core.PersistentVector(null,1,(5),inst_41713,inst_41714,null));
var inst_41716 = receive_event_msg_BANG_.call(null,inst_41715);
var state_41724__$1 = state_41724;
var statearr_41733_41881 = state_41724__$1;
(statearr_41733_41881[(2)] = inst_41716);

(statearr_41733_41881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41725 === (7))){
var state_41724__$1 = state_41724;
var statearr_41734_41882 = state_41724__$1;
(statearr_41734_41882[(2)] = null);

(statearr_41734_41882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41725 === (8))){
var inst_41719 = (state_41724[(2)]);
var state_41724__$1 = state_41724;
var statearr_41735_41883 = state_41724__$1;
(statearr_41735_41883[(2)] = inst_41719);

(statearr_41735_41883[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__21993__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__21881__auto__,c__21993__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__21882__auto__ = null;
var taoensso$sente$state_machine__21882__auto____0 = (function (){
var statearr_41739 = [null,null,null,null,null,null,null,null];
(statearr_41739[(0)] = taoensso$sente$state_machine__21882__auto__);

(statearr_41739[(1)] = (1));

return statearr_41739;
});
var taoensso$sente$state_machine__21882__auto____1 = (function (state_41724){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_41724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e41740){if((e41740 instanceof Object)){
var ex__21885__auto__ = e41740;
var statearr_41741_41884 = state_41724;
(statearr_41741_41884[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41885 = state_41724;
state_41724 = G__41885;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
taoensso$sente$state_machine__21882__auto__ = function(state_41724){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__21882__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__21882__auto____1.call(this,state_41724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__21882__auto____0;
taoensso$sente$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__21882__auto____1;
return taoensso$sente$state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__21995__auto__ = (function (){var statearr_41742 = f__21994__auto__.call(null);
(statearr_41742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto__);

return statearr_41742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__21993__auto__;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__41578,map__41579,map__41579__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq41575){
var G__41576 = cljs.core.first.call(null,seq41575);
var seq41575__$1 = cljs.core.next.call(null,seq41575);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41576,seq41575__$1);
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",576,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null);

var seq__41890 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null))));
var chunk__41891 = null;
var count__41892 = (0);
var i__41893 = (0);
while(true){
if((i__41893 < count__41892)){
var server_ch = cljs.core._nth.call(null,chunk__41891,i__41893);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__41894 = seq__41890;
var G__41895 = chunk__41891;
var G__41896 = count__41892;
var G__41897 = (i__41893 + (1));
seq__41890 = G__41894;
chunk__41891 = G__41895;
count__41892 = G__41896;
i__41893 = G__41897;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41890);
if(temp__4657__auto__){
var seq__41890__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41890__$1)){
var c__19249__auto__ = cljs.core.chunk_first.call(null,seq__41890__$1);
var G__41898 = cljs.core.chunk_rest.call(null,seq__41890__$1);
var G__41899 = c__19249__auto__;
var G__41900 = cljs.core.count.call(null,c__19249__auto__);
var G__41901 = (0);
seq__41890 = G__41898;
chunk__41891 = G__41899;
count__41892 = G__41900;
i__41893 = G__41901;
continue;
} else {
var server_ch = cljs.core.first.call(null,seq__41890__$1);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__41902 = cljs.core.next.call(null,seq__41890__$1);
var G__41903 = null;
var G__41904 = (0);
var G__41905 = (0);
seq__41890 = G__41902;
chunk__41891 = G__41903;
count__41892 = G__41904;
i__41893 = G__41905;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(var_args){
var args__19514__auto__ = [];
var len__19507__auto___41995 = arguments.length;
var i__19508__auto___41996 = (0);
while(true){
if((i__19508__auto___41996 < len__19507__auto___41995)){
args__19514__auto__.push((arguments[i__19508__auto___41996]));

var G__41997 = (i__19508__auto___41996 + (1));
i__19508__auto___41996 = G__41997;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((3) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((3)),(0),null)):null);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19515__auto__);
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conns_,uid,buffered_evs_pstr,p__41910){
var vec__41911 = p__41910;
var map__41912 = cljs.core.nth.call(null,vec__41911,(0),null);
var map__41912__$1 = ((((!((map__41912 == null)))?((((map__41912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41912):map__41912);
var nmax_attempts = cljs.core.get.call(null,map__41912__$1,new cljs.core.Keyword(null,"nmax-attempts","nmax-attempts",1471144610),(7));
var ms_base = cljs.core.get.call(null,map__41912__$1,new cljs.core.Keyword(null,"ms-base","ms-base",-1962784511),(90));
var ms_rand = cljs.core.get.call(null,map__41912__$1,new cljs.core.Keyword(null,"ms-rand","ms-rand",1169398874),(90));

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",589,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__41911,map__41912,map__41912__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
});})(vec__41911,map__41912,map__41912__$1,nmax_attempts,ms_base,ms_rand))
,null)),null);

var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__21993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto__,client_ids_unsatisfied,vec__41911,map__41912,map__41912__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto__,client_ids_unsatisfied,vec__41911,map__41912,map__41912__$1,nmax_attempts,ms_base,ms_rand){
return (function (state_41961){
var state_val_41962 = (state_41961[(1)]);
if((state_val_41962 === (7))){
var inst_41916 = (state_41961[(7)]);
var inst_41922 = (state_41961[(8)]);
var inst_41915 = (state_41961[(9)]);
var inst_41933 = (function (){var n = inst_41915;
var client_ids_satisfied = inst_41916;
var _QMARK_pulled = inst_41922;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_41916,inst_41922,inst_41915,state_val_41962,c__21993__auto__,client_ids_unsatisfied,vec__41911,map__41912,map__41912__$1,nmax_attempts,ms_base,ms_rand){
return (function (s,client_id,p__41932){
var vec__41963 = p__41932;
var _QMARK_server_ch = cljs.core.nth.call(null,vec__41963,(0),null);
var _ = cljs.core.nth.call(null,vec__41963,(1),null);
if(((_QMARK_server_ch == null)) || (cljs.core.not.call(null,taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_server_ch,buffered_evs_pstr,new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103))))){
return s;
} else {
return cljs.core.conj.call(null,s,client_id);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_41916,inst_41922,inst_41915,state_val_41962,c__21993__auto__,client_ids_unsatisfied,vec__41911,map__41912,map__41912__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_41934 = cljs.core.PersistentHashSet.EMPTY;
var inst_41935 = cljs.core.reduce_kv.call(null,inst_41933,inst_41934,inst_41922);
var state_41961__$1 = state_41961;
var statearr_41964_41998 = state_41961__$1;
(statearr_41964_41998[(2)] = inst_41935);

(statearr_41964_41998[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41962 === (1))){
var inst_41914 = cljs.core.PersistentHashSet.EMPTY;
var inst_41915 = (0);
var inst_41916 = inst_41914;
var state_41961__$1 = (function (){var statearr_41965 = state_41961;
(statearr_41965[(7)] = inst_41916);

(statearr_41965[(9)] = inst_41915);

return statearr_41965;
})();
var statearr_41966_41999 = state_41961__$1;
(statearr_41966_41999[(2)] = null);

(statearr_41966_41999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41962 === (4))){
var state_41961__$1 = state_41961;
var statearr_41967_42000 = state_41961__$1;
(statearr_41967_42000[(2)] = true);

(statearr_41967_42000[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41962 === (15))){
var inst_41957 = (state_41961[(2)]);
var state_41961__$1 = state_41961;
var statearr_41968_42001 = state_41961__$1;
(statearr_41968_42001[(2)] = inst_41957);

(statearr_41968_42001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41962 === (13))){
var inst_41948 = cljs.core.rand_int.call(null,ms_rand);
var inst_41949 = (ms_base + inst_41948);
var inst_41950 = cljs.core.async.timeout.call(null,inst_41949);
var state_41961__$1 = state_41961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41961__$1,(16),inst_41950);
} else {
if((state_val_41962 === (6))){
var inst_41922 = (state_41961[(8)]);
var inst_41930 = (state_41961[(2)]);
var state_41961__$1 = (function (){var statearr_41969 = state_41961;
(statearr_41969[(10)] = inst_41930);

return statearr_41969;
})();
if(cljs.core.truth_(inst_41922)){
var statearr_41970_42002 = state_41961__$1;
(statearr_41970_42002[(1)] = (7));

} else {
var statearr_41971_42003 = state_41961__$1;
(statearr_41971_42003[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41962 === (3))){
var inst_41959 = (state_41961[(2)]);
var state_41961__$1 = state_41961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41961__$1,inst_41959);
} else {
if((state_val_41962 === (12))){
var inst_41946 = (state_41961[(2)]);
var state_41961__$1 = state_41961;
if(cljs.core.truth_(inst_41946)){
var statearr_41972_42004 = state_41961__$1;
(statearr_41972_42004[(1)] = (13));

} else {
var statearr_41973_42005 = state_41961__$1;
(statearr_41973_42005[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41962 === (2))){
var inst_41916 = (state_41961[(7)]);
var inst_41922 = (state_41961[(8)]);
var inst_41915 = (state_41961[(9)]);
var inst_41918 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41919 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_41920 = (new cljs.core.PersistentVector(null,2,(5),inst_41918,inst_41919,null));
var inst_41921 = (function (){var n = inst_41915;
var client_ids_satisfied = inst_41916;
return ((function (n,client_ids_satisfied,inst_41916,inst_41922,inst_41915,inst_41918,inst_41919,inst_41920,state_val_41962,c__21993__auto__,client_ids_unsatisfied,vec__41911,map__41912,map__41912__$1,nmax_attempts,ms_base,ms_rand){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_41916,inst_41922,inst_41915,inst_41918,inst_41919,inst_41920,state_val_41962,c__21993__auto__,client_ids_unsatisfied,vec__41911,map__41912,map__41912__$1,nmax_attempts,ms_base,ms_rand){
return (function (m__$1,k){
var vec__41974 = cljs.core.get.call(null,m__$1,k);
var _QMARK_server_ch = cljs.core.nth.call(null,vec__41974,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__41974,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_41916,inst_41922,inst_41915,inst_41918,inst_41919,inst_41920,state_val_41962,c__21993__auto__,client_ids_unsatisfied,vec__41911,map__41912,map__41912__$1,nmax_attempts,ms_base,ms_rand))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_41916,inst_41922,inst_41915,inst_41918,inst_41919,inst_41920,state_val_41962,c__21993__auto__,client_ids_unsatisfied,vec__41911,map__41912,map__41912__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_41922__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_41920,inst_41921);
var inst_41923 = (function (){var n = inst_41915;
var client_ids_satisfied = inst_41916;
var _QMARK_pulled = inst_41922__$1;
var __x = inst_41922__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,__x,inst_41916,inst_41922,inst_41915,inst_41918,inst_41919,inst_41920,inst_41921,inst_41922__$1,state_val_41962,c__21993__auto__,client_ids_unsatisfied,vec__41911,map__41912,map__41912__$1,nmax_attempts,ms_base,ms_rand){
return (function (__x__$1){
var or__18438__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,__x__$1);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,__x,inst_41916,inst_41922,inst_41915,inst_41918,inst_41919,inst_41920,inst_41921,inst_41922__$1,state_val_41962,c__21993__auto__,client_ids_unsatisfied,vec__41911,map__41912,map__41912__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_41924 = inst_41923.call(null,inst_41922__$1);
var state_41961__$1 = (function (){var statearr_41975 = state_41961;
(statearr_41975[(8)] = inst_41922__$1);

return statearr_41975;
})();
if(cljs.core.truth_(inst_41924)){
var statearr_41976_42006 = state_41961__$1;
(statearr_41976_42006[(1)] = (4));

} else {
var statearr_41977_42007 = state_41961__$1;
(statearr_41977_42007[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41962 === (11))){
var inst_41940 = (state_41961[(11)]);
var state_41961__$1 = state_41961;
var statearr_41978_42008 = state_41961__$1;
(statearr_41978_42008[(2)] = inst_41940);

(statearr_41978_42008[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41962 === (9))){
var inst_41916 = (state_41961[(7)]);
var inst_41915 = (state_41961[(9)]);
var inst_41940 = (state_41961[(11)]);
var inst_41938 = (state_41961[(2)]);
var inst_41939 = cljs.core.into.call(null,inst_41916,inst_41938);
var inst_41940__$1 = (inst_41915 < nmax_attempts);
var state_41961__$1 = (function (){var statearr_41979 = state_41961;
(statearr_41979[(11)] = inst_41940__$1);

(statearr_41979[(12)] = inst_41939);

return statearr_41979;
})();
if(cljs.core.truth_(inst_41940__$1)){
var statearr_41980_42009 = state_41961__$1;
(statearr_41980_42009[(1)] = (10));

} else {
var statearr_41981_42010 = state_41961__$1;
(statearr_41981_42010[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41962 === (5))){
var inst_41922 = (state_41961[(8)]);
var inst_41927 = "([:or nil? map?] ?pulled)";
var inst_41928 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,inst_41927,inst_41922,null,null);
var state_41961__$1 = state_41961;
var statearr_41982_42011 = state_41961__$1;
(statearr_41982_42011[(2)] = inst_41928);

(statearr_41982_42011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41962 === (14))){
var state_41961__$1 = state_41961;
var statearr_41983_42012 = state_41961__$1;
(statearr_41983_42012[(2)] = null);

(statearr_41983_42012[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41962 === (16))){
var inst_41915 = (state_41961[(9)]);
var inst_41939 = (state_41961[(12)]);
var inst_41952 = (state_41961[(2)]);
var inst_41953 = (inst_41915 + (1));
var inst_41915__$1 = inst_41953;
var inst_41916 = inst_41939;
var state_41961__$1 = (function (){var statearr_41984 = state_41961;
(statearr_41984[(7)] = inst_41916);

(statearr_41984[(13)] = inst_41952);

(statearr_41984[(9)] = inst_41915__$1);

return statearr_41984;
})();
var statearr_41985_42013 = state_41961__$1;
(statearr_41985_42013[(2)] = null);

(statearr_41985_42013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41962 === (10))){
var inst_41939 = (state_41961[(12)]);
var inst_41942 = cljs.core.complement.call(null,inst_41939);
var inst_41943 = cljs.core.some.call(null,inst_41942,client_ids_unsatisfied);
var state_41961__$1 = state_41961;
var statearr_41986_42014 = state_41961__$1;
(statearr_41986_42014[(2)] = inst_41943);

(statearr_41986_42014[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41962 === (8))){
var state_41961__$1 = state_41961;
var statearr_41987_42015 = state_41961__$1;
(statearr_41987_42015[(2)] = null);

(statearr_41987_42015[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21993__auto__,client_ids_unsatisfied,vec__41911,map__41912,map__41912__$1,nmax_attempts,ms_base,ms_rand))
;
return ((function (switch__21881__auto__,c__21993__auto__,client_ids_unsatisfied,vec__41911,map__41912,map__41912__$1,nmax_attempts,ms_base,ms_rand){
return (function() {
var taoensso$sente$state_machine__21882__auto__ = null;
var taoensso$sente$state_machine__21882__auto____0 = (function (){
var statearr_41991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41991[(0)] = taoensso$sente$state_machine__21882__auto__);

(statearr_41991[(1)] = (1));

return statearr_41991;
});
var taoensso$sente$state_machine__21882__auto____1 = (function (state_41961){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_41961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e41992){if((e41992 instanceof Object)){
var ex__21885__auto__ = e41992;
var statearr_41993_42016 = state_41961;
(statearr_41993_42016[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42017 = state_41961;
state_41961 = G__42017;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
taoensso$sente$state_machine__21882__auto__ = function(state_41961){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__21882__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__21882__auto____1.call(this,state_41961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__21882__auto____0;
taoensso$sente$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__21882__auto____1;
return taoensso$sente$state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto__,client_ids_unsatisfied,vec__41911,map__41912,map__41912__$1,nmax_attempts,ms_base,ms_rand))
})();
var state__21995__auto__ = (function (){var statearr_41994 = f__21994__auto__.call(null);
(statearr_41994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto__);

return statearr_41994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto__,client_ids_unsatisfied,vec__41911,map__41912,map__41912__$1,nmax_attempts,ms_base,ms_rand))
);

return c__21993__auto__;
}
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$maxFixedArity = (3);

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$applyTo = (function (seq41906){
var G__41907 = cljs.core.first.call(null,seq41906);
var seq41906__$1 = cljs.core.next.call(null,seq41906);
var G__41908 = cljs.core.first.call(null,seq41906__$1);
var seq41906__$2 = cljs.core.next.call(null,seq41906__$1);
var G__41909 = cljs.core.first.call(null,seq41906__$2);
var seq41906__$3 = cljs.core.next.call(null,seq41906__$2);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41907,G__41908,G__41909,seq41906__$3);
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

/**
 * Implementation detail
 */
taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
var x__19101__auto__ = (((chsk == null))?null:chsk);
var m__19102__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,chsk);
} else {
var m__19102__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-connect!",chsk);
}
}
}
});

/**
 * Implementation detail
 */
taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__19101__auto__ = (((chsk == null))?null:chsk);
var m__19102__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,chsk,ev,opts);
} else {
var m__19102__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-send!",chsk);
}
}
}
});

/**
 * DEPRECATED: Please use `chsk-disconnect!` instead
 */
taoensso.sente.chsk_destroy_BANG_ = (function taoensso$sente$chsk_destroy_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1(chsk);
} else {
var x__19101__auto__ = (((chsk == null))?null:chsk);
var m__19102__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,chsk);
} else {
var m__19102__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-destroy!",chsk);
}
}
}
});

/**
 * Disconnects channel socket
 */
taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1(chsk);
} else {
var x__19101__auto__ = (((chsk == null))?null:chsk);
var m__19102__auto__ = (taoensso.sente.chsk_disconnect_BANG_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,chsk);
} else {
var m__19102__auto____$1 = (taoensso.sente.chsk_disconnect_BANG_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-disconnect!",chsk);
}
}
}
});

/**
 * Reconnects channel socket (useful for reauthenticating after login/logout, etc.)
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__19101__auto__ = (((chsk == null))?null:chsk);
var m__19102__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,chsk);
} else {
var m__19102__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-reconnect!",chsk);
}
}
}
});

/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var args42018 = [];
var len__19507__auto___42021 = arguments.length;
var i__19508__auto___42022 = (0);
while(true){
if((i__19508__auto___42022 < len__19507__auto___42021)){
args42018.push((arguments[i__19508__auto___42022]));

var G__42023 = (i__19508__auto___42022 + (1));
i__19508__auto___42022 = G__42023;
continue;
} else {
}
break;
}

var G__42020 = args42018.length;
switch (G__42020) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42018.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",646,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if(cljs.core.truth_((function (){var or__18438__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__18438__auto__){
return or__18438__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),cljs.core.str("\n"),cljs.core.str("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nneg-int? ?timeout-ms)))")].join('')));
}

if(cljs.core.truth_((function (){var or__18438__auto__ = (_QMARK_cb == null);
if(or__18438__auto__){
return or__18438__auto__;
} else {
var or__18438__auto____$1 = cljs.core.ifn_QMARK_.call(null,_QMARK_cb);
if(or__18438__auto____$1){
return or__18438__auto____$1;
} else {
return taoensso.encore.chan_QMARK_.call(null,_QMARK_cb);
}
}
})())){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb should be nil, an ifn, or a channel: %s",cljs.core.type.call(null,_QMARK_cb))),cljs.core.str("\n"),cljs.core.str("(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))")].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4657__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto__)){
var cb_uuid = temp__4657__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4657__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__4657__auto__))
);
} else {
return null;
}
});
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__42025,merge_state){
var map__42029 = p__42025;
var map__42029__$1 = ((((!((map__42029 == null)))?((((map__42029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42029):map__42029);
var chsk = map__42029__$1;
var chs = cljs.core.get.call(null,map__42029__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__42029__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__42031 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__42029,map__42029__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var new_state__$1 = ((cljs.core.not.call(null,(function (){var and__18426__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__18426__auto__)){
var and__18426__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__18426__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__18426__auto____$1;
}
} else {
return and__18426__auto__;
}
})()))?new_state:cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true));
return taoensso.encore.swapped.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__42029,map__42029__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__42031,(0),null);
var new_state = cljs.core.nth.call(null,vec__42031,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(chs),new_state);

return new_state;
} else {
return null;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
var __x_42036 = _QMARK_cb;
try{if(cljs.core.truth_(taoensso.encore.chan_QMARK_.call(null,__x_42036))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e42034){if((e42034 instanceof Error)){
var __t_42037 = e42034;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",__x_42036,__t_42037,null);
} else {
throw e42034;

}
}
taoensso.sente.assert_event.call(null,ev);

var vec__42035 = ev;
var ev_id = cljs.core.nth.call(null,vec__42035,(0),null);
var _ = cljs.core.nth.call(null,vec__42035,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__42035,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__42035,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",703,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null);

var buffered_evs = (function (){var __x = clj;
try{if(cljs.core.vector_QMARK_.call(null,__x)){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e42043){if((e42043 instanceof Error)){
var __t = e42043;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",__x,__t,null);
} else {
throw e42043;

}
}})();
var seq__42044 = cljs.core.seq.call(null,buffered_evs);
var chunk__42045 = null;
var count__42046 = (0);
var i__42047 = (0);
while(true){
if((i__42047 < count__42046)){
var ev = cljs.core._nth.call(null,chunk__42045,i__42047);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__42048 = seq__42044;
var G__42049 = chunk__42045;
var G__42050 = count__42046;
var G__42051 = (i__42047 + (1));
seq__42044 = G__42048;
chunk__42045 = G__42049;
count__42046 = G__42050;
i__42047 = G__42051;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42044);
if(temp__4657__auto__){
var seq__42044__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42044__$1)){
var c__19249__auto__ = cljs.core.chunk_first.call(null,seq__42044__$1);
var G__42052 = cljs.core.chunk_rest.call(null,seq__42044__$1);
var G__42053 = c__19249__auto__;
var G__42054 = cljs.core.count.call(null,c__19249__auto__);
var G__42055 = (0);
seq__42044 = G__42052;
chunk__42045 = G__42053;
count__42046 = G__42054;
i__42047 = G__42055;
continue;
} else {
var ev = cljs.core.first.call(null,seq__42044__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__42056 = cljs.core.next.call(null,seq__42044__$1);
var G__42057 = null;
var G__42058 = (0);
var G__42059 = (0);
seq__42044 = G__42056;
chunk__42045 = G__42057;
count__42046 = G__42058;
i__42047 = G__42059;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handle_when_handshake_BANG_ = (function taoensso$sente$handle_when_handshake_BANG_(chsk,chs,clj){
var handshake_QMARK_ = (cljs.core.vector_QMARK_.call(null,clj)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,clj),new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686)));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",713,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["handle-when-handshake (%s): %s",((handshake_QMARK_)?new cljs.core.Keyword(null,"handshake","handshake",68079331):new cljs.core.Keyword(null,"non-handshake","non-handshake",576986062)),clj], null);
});})(handshake_QMARK_))
,null)),null);

if(handshake_QMARK_){
var vec__42062 = clj;
var _ = cljs.core.nth.call(null,vec__42062,(0),null);
var vec__42063 = cljs.core.nth.call(null,vec__42062,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__42063,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__42063,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__42063,(2),null);
var handshake_ev = vec__42062;
if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",719,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__42062,_,vec__42063,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__42062,_,vec__42063,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_))
,null)),null);
} else {
}

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token], null));

taoensso.sente.assert_event.call(null,handshake_ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.kalive_ms = kalive_ms;
this.kalive_timer_ = kalive_timer_;
this.kalive_due_QMARK__ = kalive_due_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.active_retry_id_ = active_retry_id_;
this.retry_count_ = retry_count_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19060__auto__,k__19061__auto__){
var self__ = this;
var this__19060__auto____$1 = this;
return cljs.core._lookup.call(null,this__19060__auto____$1,k__19061__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19062__auto__,k42065,else__19063__auto__){
var self__ = this;
var this__19062__auto____$1 = this;
var G__42067 = (((k42065 instanceof cljs.core.Keyword))?k42065.fqn:null);
switch (G__42067) {
case "client-id":
return self__.client_id;

break;
case "kalive-ms":
return self__.kalive_ms;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "active-retry-id_":
return self__.active_retry_id_;

break;
case "kalive-due?_":
return self__.kalive_due_QMARK__;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "kalive-timer_":
return self__.kalive_timer_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42065,else__19063__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19074__auto__,writer__19075__auto__,opts__19076__auto__){
var self__ = this;
var this__19074__auto____$1 = this;
var pr_pair__19077__auto__ = ((function (this__19074__auto____$1){
return (function (keyval__19078__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19075__auto__,cljs.core.pr_writer,""," ","",opts__19076__auto__,keyval__19078__auto__);
});})(this__19074__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19075__auto__,pr_pair__19077__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__19076__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42064){
var self__ = this;
var G__42064__$1 = this;
return (new cljs.core.RecordIter((0),G__42064__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19058__auto__){
var self__ = this;
var this__19058__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19054__auto__){
var self__ = this;
var this__19054__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19064__auto__){
var self__ = this;
var this__19064__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19055__auto__){
var self__ = this;
var this__19055__auto____$1 = this;
var h__18873__auto__ = self__.__hash;
if(!((h__18873__auto__ == null))){
return h__18873__auto__;
} else {
var h__18873__auto____$1 = cljs.core.hash_imap.call(null,this__19055__auto____$1);
self__.__hash = h__18873__auto____$1;

return h__18873__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19056__auto__,other__19057__auto__){
var self__ = this;
var this__19056__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18426__auto__ = other__19057__auto__;
if(cljs.core.truth_(and__18426__auto__)){
var and__18426__auto____$1 = (this__19056__auto____$1.constructor === other__19057__auto__.constructor);
if(and__18426__auto____$1){
return cljs.core.equiv_map.call(null,this__19056__auto____$1,other__19057__auto__);
} else {
return and__18426__auto____$1;
}
} else {
return and__18426__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19069__auto__,k__19070__auto__){
var self__ = this;
var this__19069__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__19070__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19069__auto____$1),self__.__meta),k__19070__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19070__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19067__auto__,k__19068__auto__,G__42064){
var self__ = this;
var this__19067__auto____$1 = this;
var pred__42068 = cljs.core.keyword_identical_QMARK_;
var expr__42069 = k__19068__auto__;
if(cljs.core.truth_(pred__42068.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__42069))){
return (new taoensso.sente.ChWebSocket(G__42064,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42068.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__42069))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__42064,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42068.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__42069))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__42064,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42068.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__42069))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__42064,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42068.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__42069))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__42064,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42068.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__42069))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__42064,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42068.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__42069))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__42064,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42068.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__42069))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,G__42064,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42068.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__42069))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,G__42064,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42068.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__42069))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,G__42064,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42068.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__42069))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__42064,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42068.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__42069))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__42064,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42068.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__42069))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,G__42064,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42068.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__42069))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,G__42064,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19068__auto__,G__42064),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19072__auto__){
var self__ = this;
var this__19072__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19059__auto__,G__42064){
var self__ = this;
var this__19059__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,G__42064,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19065__auto__,entry__19066__auto__){
var self__ = this;
var this__19065__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19066__auto__)){
return cljs.core._assoc.call(null,this__19065__auto____$1,cljs.core._nth.call(null,entry__19066__auto__,(0)),cljs.core._nth.call(null,entry__19066__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19065__auto____$1,entry__19066__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__42071){
var self__ = this;
var map__42072 = p__42071;
var map__42072__$1 = ((((!((map__42072 == null)))?((((map__42072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42072):map__42072);
var opts = map__42072__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__42072__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__42072__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__42072__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",750,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__42072,map__42072__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__42072,map__42072__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4657__auto___42108 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___42108)){
var cb_uuid_42109 = temp__4657__auto___42108;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_42109], null),(function (){var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e42074){if((e42074 instanceof Error)){
var __t = e42074;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e42074;

}
}})());

var temp__4657__auto___42110__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4657__auto___42110__$1)){
var timeout_ms_42111 = temp__4657__auto___42110__$1;
var c__21993__auto___42112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto___42112,timeout_ms_42111,temp__4657__auto___42110__$1,cb_uuid_42109,temp__4657__auto___42108,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__42072,map__42072__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto___42112,timeout_ms_42111,temp__4657__auto___42110__$1,cb_uuid_42109,temp__4657__auto___42108,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__42072,map__42072__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (state_42085){
var state_val_42086 = (state_42085[(1)]);
if((state_val_42086 === (1))){
var inst_42075 = cljs.core.async.timeout.call(null,timeout_ms_42111);
var state_42085__$1 = state_42085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42085__$1,(2),inst_42075);
} else {
if((state_val_42086 === (2))){
var inst_42078 = (state_42085[(7)]);
var inst_42077 = (state_42085[(2)]);
var inst_42078__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_42085__$1 = (function (){var statearr_42087 = state_42085;
(statearr_42087[(7)] = inst_42078__$1);

(statearr_42087[(8)] = inst_42077);

return statearr_42087;
})();
if(cljs.core.truth_(inst_42078__$1)){
var statearr_42088_42113 = state_42085__$1;
(statearr_42088_42113[(1)] = (3));

} else {
var statearr_42089_42114 = state_42085__$1;
(statearr_42089_42114[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (3))){
var inst_42078 = (state_42085[(7)]);
var inst_42080 = inst_42078.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_42085__$1 = state_42085;
var statearr_42090_42115 = state_42085__$1;
(statearr_42090_42115[(2)] = inst_42080);

(statearr_42090_42115[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (4))){
var state_42085__$1 = state_42085;
var statearr_42091_42116 = state_42085__$1;
(statearr_42091_42116[(2)] = null);

(statearr_42091_42116[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (5))){
var inst_42083 = (state_42085[(2)]);
var state_42085__$1 = state_42085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42085__$1,inst_42083);
} else {
return null;
}
}
}
}
}
});})(c__21993__auto___42112,timeout_ms_42111,temp__4657__auto___42110__$1,cb_uuid_42109,temp__4657__auto___42108,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__42072,map__42072__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
;
return ((function (switch__21881__auto__,c__21993__auto___42112,timeout_ms_42111,temp__4657__auto___42110__$1,cb_uuid_42109,temp__4657__auto___42108,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__42072,map__42072__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function() {
var taoensso$sente$state_machine__21882__auto__ = null;
var taoensso$sente$state_machine__21882__auto____0 = (function (){
var statearr_42095 = [null,null,null,null,null,null,null,null,null];
(statearr_42095[(0)] = taoensso$sente$state_machine__21882__auto__);

(statearr_42095[(1)] = (1));

return statearr_42095;
});
var taoensso$sente$state_machine__21882__auto____1 = (function (state_42085){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_42085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e42096){if((e42096 instanceof Object)){
var ex__21885__auto__ = e42096;
var statearr_42097_42117 = state_42085;
(statearr_42097_42117[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42118 = state_42085;
state_42085 = G__42118;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
taoensso$sente$state_machine__21882__auto__ = function(state_42085){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__21882__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__21882__auto____1.call(this,state_42085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__21882__auto____0;
taoensso$sente$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__21882__auto____1;
return taoensso$sente$state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto___42112,timeout_ms_42111,temp__4657__auto___42110__$1,cb_uuid_42109,temp__4657__auto___42108,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__42072,map__42072__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
})();
var state__21995__auto__ = (function (){var statearr_42098 = f__21994__auto__.call(null);
(statearr_42098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto___42112);

return statearr_42098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto___42112,timeout_ms_42111,temp__4657__auto___42110__$1,cb_uuid_42109,temp__4657__auto___42108,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__42072,map__42072__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e42099){if((e42099 instanceof Error)){
var e = e42099;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",769,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__42072,map__42072__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__42072,map__42072__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

var temp__4657__auto___42119 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___42119)){
var cb_uuid_42120 = temp__4657__auto___42119;
var cb_fn_STAR__42121 = (function (){var or__18438__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_42120);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e42100){if((e42100 instanceof Error)){
var __t = e42100;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e42100;

}
}}
})();
cb_fn_STAR__42121.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e42099;

}
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
return taoensso.sente.chsk_disconnect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"disconnected");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

var temp__4657__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"reconnecting");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4657__auto___42122 = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4657__auto___42122)){
var s_42123 = temp__4657__auto___42122;
s_42123.close((3000),"SENTE_RECONNECT");
} else {
}

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (function (){var or__18438__auto__ = taoensso.encore.oget.call(null,window,"WebSocket");
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return taoensso.encore.oget.call(null,window,"MozWebSocket");
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var WebSocket = temp__4657__auto__;
var retry_id = taoensso.encore.uuid_str.call(null);
var connect_fn = ((function (retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
var retry_fn = ((function (retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = cljs.core.swap_BANG_.call(null,self__.retry_count_,cljs.core.inc);
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
window.clearInterval(cljs.core.deref.call(null,self__.kalive_timer_));

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",800,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s)",retry_count_STAR_], null);
});})(retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);

return window.setTimeout(taoensso$sente$connect_fn,backoff_ms);
} else {
return null;
}
});})(retry_id,WebSocket,temp__4657__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e42104){if((e42104 instanceof Error)){
var e = e42104;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",811,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket js/Error"], null);
});})(e,retry_fn,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);

return null;
} else {
throw e42104;

}
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__42105 = _QMARK_socket;
(G__42105["onerror"] = ((function (G__42105,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",820,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__42105,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",ws_ev], null);
});})(G__42105,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);
});})(G__42105,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__42105["onmessage"] = ((function (G__42105,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__42106 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__42106,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__42106,(1),null);
var or__18438__auto__ = (function (){var and__18426__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(and__18426__auto__)){
return cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));
} else {
return and__18426__auto__;
}
})();
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
var temp__4655__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4655__auto__)){
var cb_uuid = temp__4655__auto__;
var temp__4655__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cb_fn = temp__4655__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",838,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__18438__auto__,ppstr,vec__42106,clj,_QMARK_cb_uuid,G__42105,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__18438__auto__,ppstr,vec__42106,clj,_QMARK_cb_uuid,G__42105,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
});})(G__42105,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__42105["onopen"] = ((function (G__42105,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__42105,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__42105,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__42105,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__42105["onclose"] = ((function (G__42105,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);
});})(G__42105,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

return G__42105;
})());
}
});})(retry_id,WebSocket,temp__4657__auto__,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,retry_id);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

connect_fn.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"kalive-ms","kalive-ms",1851265548,null),new cljs.core.Symbol(null,"kalive-timer_","kalive-timer_",-1096022620,null),new cljs.core.Symbol(null,"kalive-due?_","kalive-due?_",1679969599,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"active-retry-id_","active-retry-id_",1468292413,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__19094__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__19094__auto__,writer__19095__auto__){
return cljs.core._write.call(null,writer__19095__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__42066){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__42066),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__42066),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__42066),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__42066),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__42066),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__42066),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__42066),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__42066),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__42066),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__42066),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__42066),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__42066),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__42066),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__42066),null,cljs.core.dissoc.call(null,G__42066,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.timeout_ms = timeout_ms;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.active_retry_id_ = active_retry_id_;
this.backoff_ms_fn = backoff_ms_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19060__auto__,k__19061__auto__){
var self__ = this;
var this__19060__auto____$1 = this;
return cljs.core._lookup.call(null,this__19060__auto____$1,k__19061__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19062__auto__,k42125,else__19063__auto__){
var self__ = this;
var this__19062__auto____$1 = this;
var G__42127 = (((k42125 instanceof cljs.core.Keyword))?k42125.fqn:null);
switch (G__42127) {
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "url":
return self__.url;

break;
case "active-retry-id_":
return self__.active_retry_id_;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "timeout-ms":
return self__.timeout_ms;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42125,else__19063__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19074__auto__,writer__19075__auto__,opts__19076__auto__){
var self__ = this;
var this__19074__auto____$1 = this;
var pr_pair__19077__auto__ = ((function (this__19074__auto____$1){
return (function (keyval__19078__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19075__auto__,cljs.core.pr_writer,""," ","",opts__19076__auto__,keyval__19078__auto__);
});})(this__19074__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19075__auto__,pr_pair__19077__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__19076__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42124){
var self__ = this;
var G__42124__$1 = this;
return (new cljs.core.RecordIter((0),G__42124__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19058__auto__){
var self__ = this;
var this__19058__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19054__auto__){
var self__ = this;
var this__19054__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19064__auto__){
var self__ = this;
var this__19064__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19055__auto__){
var self__ = this;
var this__19055__auto____$1 = this;
var h__18873__auto__ = self__.__hash;
if(!((h__18873__auto__ == null))){
return h__18873__auto__;
} else {
var h__18873__auto____$1 = cljs.core.hash_imap.call(null,this__19055__auto____$1);
self__.__hash = h__18873__auto____$1;

return h__18873__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19056__auto__,other__19057__auto__){
var self__ = this;
var this__19056__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18426__auto__ = other__19057__auto__;
if(cljs.core.truth_(and__18426__auto__)){
var and__18426__auto____$1 = (this__19056__auto____$1.constructor === other__19057__auto__.constructor);
if(and__18426__auto____$1){
return cljs.core.equiv_map.call(null,this__19056__auto____$1,other__19057__auto__);
} else {
return and__18426__auto____$1;
}
} else {
return and__18426__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19069__auto__,k__19070__auto__){
var self__ = this;
var this__19069__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__19070__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19069__auto____$1),self__.__meta),k__19070__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19070__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19067__auto__,k__19068__auto__,G__42124){
var self__ = this;
var this__19067__auto____$1 = this;
var pred__42128 = cljs.core.keyword_identical_QMARK_;
var expr__42129 = k__19068__auto__;
if(cljs.core.truth_(pred__42128.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__42129))){
return (new taoensso.sente.ChAjaxSocket(G__42124,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42128.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__42129))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__42124,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42128.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__42129))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__42124,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42128.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__42129))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__42124,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42128.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__42129))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__42124,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42128.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__42129))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__42124,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42128.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__42129))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__42124,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42128.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__42129))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,G__42124,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42128.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__42129))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,G__42124,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42128.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__42129))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,G__42124,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42128.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__42129))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,G__42124,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19068__auto__,G__42124),null));
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19072__auto__){
var self__ = this;
var this__19072__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19059__auto__,G__42124){
var self__ = this;
var this__19059__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,G__42124,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19065__auto__,entry__19066__auto__){
var self__ = this;
var this__19065__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19066__auto__)){
return cljs.core._assoc.call(null,this__19065__auto____$1,cljs.core._nth.call(null,entry__19066__auto__,(0)),cljs.core._nth.call(null,entry__19066__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19065__auto____$1,entry__19066__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__42131){
var self__ = this;
var map__42132 = p__42131;
var map__42132__$1 = ((((!((map__42132 == null)))?((((map__42132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42132):map__42132);
var opts = map__42132__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__42132__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__42132__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__42132__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",879,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__42132,map__42132__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__42132,map__42132__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (csrf_token,_QMARK_cb_fn,chsk__$1,map__42132,map__42132__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function taoensso$sente$ajax_cb(p__42134){
var map__42138 = p__42134;
var map__42138__$1 = ((((!((map__42138 == null)))?((((map__42138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42138):map__42138);
var _QMARK_error = cljs.core.get.call(null,map__42138__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__42138__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__42140 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__42140,(0),null);
var _ = cljs.core.nth.call(null,vec__42140,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",919,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__42140,resp_clj,_,map__42138,map__42138__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__42132,map__42132__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__42140,resp_clj,_,map__42138,map__42138__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__42132,map__42132__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(csrf_token,_QMARK_cb_fn,chsk__$1,map__42132,map__42132__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
return taoensso.sente.chsk_disconnect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"disconnected");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

var temp__4657__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4657__auto__)){
var x = temp__4657__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"reconnecting");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4657__auto___42156 = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4657__auto___42156)){
var x_42157 = temp__4657__auto___42156;
x_42157.abort();
} else {
}

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var retry_id = taoensso.encore.uuid_str.call(null);
var poll_fn = ((function (retry_id,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",940,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(retry_id,chsk__$1))
,null)),null);

var retry_fn = ((function (retry_id,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",946,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s)",retry_count_STAR_], null);
});})(retry_count_STAR_,backoff_ms,retry_id,chsk__$1))
,null)),null);

return window.setTimeout(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,retry_id,chsk__$1))
,backoff_ms);
} else {
return null;
}
});})(retry_id,chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,retry_id,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__42148){
var map__42152 = p__42148;
var map__42152__$1 = ((((!((map__42152 == null)))?((((map__42152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42152):map__42152);
var _QMARK_error = cljs.core.get.call(null,map__42152__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__42152__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__42154 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__42154,(0),null);
var _ = cljs.core.nth.call(null,vec__42154,(1),null);
var or__18438__auto___42158 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__18438__auto___42158)){
} else {
var buffered_evs_42159 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs_42159);

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}

return taoensso$sente$poll_fn.call(null,(0));
}
});})(retry_fn,retry_id,chsk__$1))
));
});})(retry_id,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,retry_id);

poll_fn.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null),new cljs.core.Symbol(null,"active-retry-id_","active-retry-id_",1468292413,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__19094__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__19094__auto__,writer__19095__auto__){
return cljs.core._write.call(null,writer__19095__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__42126){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__42126),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__42126),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__42126),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__42126),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__42126),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__42126),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__42126),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__42126),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__42126),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__42126),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__42126),null,cljs.core.dissoc.call(null,G__42126,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)),null));
});

taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,chsk_host,chsk_path,type){
var protocol__$1 = (function (){var G__42161 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__42161) {
case "ajax":
return protocol;

break;
case "ws":
if(cljs.core._EQ_.call(null,protocol,"https:")){
return "wss:";
} else {
return "ws:";
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(taoensso.encore.path.call(null,chsk_host,chsk_path))].join('');
});
/**
 * Returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *           ; May `put!` (inject) arbitrary `event`s to this channel.
 *  :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *  :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *  :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *  :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto)
 *  :host           ; Server host (defaults to current page's host)
 *  :params         ; Map of any params to incl. in chsk Ring requests (handy for
 *                  ; application-level auth, etc.)
 *  :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity w/in given
 *                  ; number of milliseconds
 *  :lp-timeout-ms  ; Ping to keep a long-polling (Ajax) conn alive '' [1]
 *  :packer         ; :edn (default), or an IPacker implementation (experimental)
 *  :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`
 *  :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 * 
 *   [1] If you're using Immutant and override the default :lp-timeout-ms, you'll
 *    need to provide the same timeout value to
 *    `taoensso.sente.server-adapters.immutant/make-immutant-adapter` and use
 *    the result of that function as the web server adapter to your server-side
 *    `make-channel-socket-server!`.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__19514__auto__ = [];
var len__19507__auto___42177 = arguments.length;
var i__19508__auto___42178 = (0);
while(true){
if((i__19508__auto___42178 < len__19507__auto___42177)){
args__19514__auto__.push((arguments[i__19508__auto___42178]));

var G__42179 = (i__19508__auto___42178 + (1));
i__19508__auto___42178 = G__42179;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__42166){
var vec__42167 = p__42166;
var map__42168 = cljs.core.nth.call(null,vec__42167,(0),null);
var map__42168__$1 = ((((!((map__42168 == null)))?((((map__42168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42168):map__42168);
var opts = map__42168__$1;
var ajax_opts = cljs.core.get.call(null,map__42168__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__42168__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var lp_timeout_ms = cljs.core.get.call(null,map__42168__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var client_id = cljs.core.get.call(null,map__42168__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__18438__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var packer = cljs.core.get.call(null,map__42168__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__42168__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__42168__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__42168__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__42168__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__42168__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__42168__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__42167,(1),null);
if(cljs.core.truth_((function (){var __x = type;
try{if(((function (__x,vec__42167,map__42168,map__42168__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (__x__$1){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),__x__$1);
});})(__x,vec__42167,map__42168,map__42168__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e42170){if((e42170 instanceof Error)){
var __t = e42170;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",__x,__t,null);
} else {
throw e42170;

}
}})())){
} else {
throw (new Error("Assert failed: (have? [:in #{:ws :ajax :auto}] type)"));
}

if(cljs.core.truth_((function (){var __x = client_id;
try{if(cljs.core.truth_(taoensso.encore.nblank_str_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e42171){if((e42171 instanceof Error)){
var __t = e42171;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",__x,__t,null);
} else {
throw e42171;

}
}})())){
} else {
throw (new Error("Assert failed: (have? enc/nblank-str? client-id)"));
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",1055,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__42167,map__42168,map__42168__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__42167,map__42168,map__42168__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",1057,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__42167,map__42168,map__42168__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__42167,map__42168,map__42168__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var win_location = taoensso.encore.get_window_location.call(null);
var win_protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_location);
var host__$1 = (function (){var or__18438__auto__ = host;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var path__$1 = (function (){var or__18438__auto__ = path;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);
var ever_opened_QMARK__ = cljs.core.atom.call(null,false);
var state_STAR_ = ((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__42167,map__42168,map__42168__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__18438__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));
if(or__18438__auto__){
return or__18438__auto__;
} else {
return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})())){
return state;
} else {
cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__42167,map__42168,map__42168__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__42167,map__42168,map__42168__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__42167,map__42168,map__42168__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),(function (){var _LT_server_ch = new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs);
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__42167,map__42168,map__42168__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__42167,map__42168,map__42168__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
} else {
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__42167,map__42168,map__42168__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__42172 = ev;
var id = cljs.core.nth.call(null,vec__42172,(0),null);
var _QMARK_data = cljs.core.nth.call(null,vec__42172,(1),null);
var __x_42180 = (function (){try{return cljs.core.namespace.call(null,id);
}catch (e42173){if((e42173 instanceof Error)){
var __t = e42173;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__42163#] (not= p1__42163# \"chsk\")) (namespace id))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e42173;

}
}})();
try{if(((function (__x_42180,vec__42172,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__42167,map__42168,map__42168__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (p1__42163_SHARP_){
return cljs.core.not_EQ_.call(null,p1__42163_SHARP_,"chsk");
});})(__x_42180,vec__42172,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__42167,map__42168,map__42168__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x_42180)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e42174){if((e42174 instanceof Error)){
var __t_42181 = e42174;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__42163#] (not= p1__42163# \"chsk\")) (namespace id))",__x_42180,__t_42181,null);
} else {
throw e42174;

}
}
return ev;
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__42167,map__42168,map__42168__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
}
})()], null));
var chsk = (function (){var or__18438__auto__ = (function (){var and__18426__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));
if(and__18426__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[client_id,ws_kalive_ms,packer__$1,private_chs,params,cljs.core.atom.call(null,(0)),backoff_ms_fn,cljs.core.atom.call(null,null),(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ws","ws",86841443));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
}
})(),cljs.core.atom.call(null,"pending"),cljs.core.atom.call(null,true),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__18426__auto__;
}
})();
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
var and__18426__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));
if(and__18426__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"state_","state_",957667102)],[cljs.core.atom.call(null,null),client_id,packer__$1,private_chs,params,backoff_ms_fn,(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
}
})(),cljs.core.atom.call(null,"pending"),ajax_opts,lp_timeout_ms,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__18426__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Failed to create channel socket"),cljs.core.str("\n"),cljs.core.str("chsk")].join('')))})());
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__42167,map__42168,map__42168__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__42176 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__42176,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__42176,(1),null);
var ev__$1 = vec__42176;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__42167,map__42168,map__42168__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq42164){
var G__42165 = cljs.core.first.call(null,seq42164);
var seq42164__$1 = cljs.core.next.call(null,seq42164);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42165,seq42164__$1);
});
taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__42388 = opts;
var map__42388__$1 = ((((!((map__42388 == null)))?((((map__42388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42388):map__42388);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__42388__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__42388__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__21993__auto___42594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto___42594,map__42388,map__42388__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto___42594,map__42388,map__42388__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (state_42519){
var state_val_42520 = (state_42519[(1)]);
if((state_val_42520 === (7))){
var inst_42515 = (state_42519[(2)]);
var state_42519__$1 = state_42519;
var statearr_42521_42595 = state_42519__$1;
(statearr_42521_42595[(2)] = inst_42515);

(statearr_42521_42595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (20))){
var inst_42399 = (state_42519[(7)]);
var inst_42424 = (state_42519[(8)]);
var inst_42396 = (state_42519[(9)]);
var inst_42398 = (state_42519[(10)]);
var inst_42423 = (state_42519[(11)]);
var inst_42397 = (state_42519[(12)]);
var inst_42434 = (function (){var vec__42391 = inst_42396;
var v = inst_42397;
var p = inst_42398;
var stop_QMARK_ = inst_42399;
var map__42402 = inst_42423;
var event_msg = inst_42423;
var event = inst_42424;
return ((function (vec__42391,v,p,stop_QMARK_,map__42402,event_msg,event,inst_42399,inst_42424,inst_42396,inst_42398,inst_42423,inst_42397,state_val_42520,c__21993__auto___42594,map__42388,map__42388__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});
;})(vec__42391,v,p,stop_QMARK_,map__42402,event_msg,event,inst_42399,inst_42424,inst_42396,inst_42398,inst_42423,inst_42397,state_val_42520,c__21993__auto___42594,map__42388,map__42388__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_42435 = (new cljs.core.Delay(inst_42434,null));
var inst_42436 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",1176,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_42435,null);
var state_42519__$1 = state_42519;
var statearr_42522_42596 = state_42519__$1;
(statearr_42522_42596[(2)] = inst_42436);

(statearr_42522_42596[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (27))){
var inst_42423 = (state_42519[(11)]);
var inst_42441 = (state_42519[(2)]);
var inst_42442 = "(server-event-msg? event-msg)";
var inst_42443 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_42442,inst_42423,inst_42441,null);
var state_42519__$1 = state_42519;
var statearr_42523_42597 = state_42519__$1;
(statearr_42523_42597[(2)] = inst_42443);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42519__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (1))){
var state_42519__$1 = state_42519;
var statearr_42524_42598 = state_42519__$1;
(statearr_42524_42598[(2)] = null);

(statearr_42524_42598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (24))){
var state_42519__$1 = state_42519;
var statearr_42525_42599 = state_42519__$1;
(statearr_42525_42599[(2)] = null);

(statearr_42525_42599[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (39))){
var state_42519__$1 = state_42519;
var statearr_42526_42600 = state_42519__$1;
(statearr_42526_42600[(2)] = null);

(statearr_42526_42600[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (46))){
var inst_42488 = (state_42519[(13)]);
var inst_42496 = (state_42519[(2)]);
var inst_42497 = [inst_42496,null];
var inst_42498 = (new cljs.core.PersistentVector(null,2,(5),inst_42488,inst_42497,null));
var state_42519__$1 = state_42519;
var statearr_42527_42601 = state_42519__$1;
(statearr_42527_42601[(2)] = inst_42498);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42519__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (4))){
var inst_42399 = (state_42519[(7)]);
var inst_42396 = (state_42519[(9)]);
var inst_42398 = (state_42519[(10)]);
var inst_42396__$1 = (state_42519[(2)]);
var inst_42397 = cljs.core.nth.call(null,inst_42396__$1,(0),null);
var inst_42398__$1 = cljs.core.nth.call(null,inst_42396__$1,(1),null);
var inst_42399__$1 = taoensso.encore.kw_identical_QMARK_.call(null,inst_42398__$1,ch_ctrl);
var state_42519__$1 = (function (){var statearr_42528 = state_42519;
(statearr_42528[(7)] = inst_42399__$1);

(statearr_42528[(9)] = inst_42396__$1);

(statearr_42528[(10)] = inst_42398__$1);

(statearr_42528[(12)] = inst_42397);

return statearr_42528;
})();
if(cljs.core.truth_(inst_42399__$1)){
var statearr_42529_42602 = state_42519__$1;
(statearr_42529_42602[(1)] = (5));

} else {
var statearr_42530_42603 = state_42519__$1;
(statearr_42530_42603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (15))){
var inst_42397 = (state_42519[(12)]);
var state_42519__$1 = state_42519;
var statearr_42531_42604 = state_42519__$1;
(statearr_42531_42604[(2)] = inst_42397);

(statearr_42531_42604[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (48))){
var state_42519__$1 = state_42519;
var statearr_42532_42605 = state_42519__$1;
(statearr_42532_42605[(2)] = null);

(statearr_42532_42605[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (21))){
var state_42519__$1 = state_42519;
var statearr_42533_42606 = state_42519__$1;
(statearr_42533_42606[(2)] = null);

(statearr_42533_42606[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (31))){
var inst_42452 = (state_42519[(2)]);
var state_42519__$1 = state_42519;
var statearr_42534_42607 = state_42519__$1;
(statearr_42534_42607[(2)] = inst_42452);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42519__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (32))){
var inst_42469 = (state_42519[(2)]);
var state_42519__$1 = state_42519;
var statearr_42535_42608 = state_42519__$1;
(statearr_42535_42608[(2)] = inst_42469);

(statearr_42535_42608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (40))){
var inst_42512 = (state_42519[(2)]);
var state_42519__$1 = (function (){var statearr_42536 = state_42519;
(statearr_42536[(14)] = inst_42512);

return statearr_42536;
})();
var statearr_42537_42609 = state_42519__$1;
(statearr_42537_42609[(2)] = null);

(statearr_42537_42609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (33))){
var inst_42423 = (state_42519[(11)]);
var inst_42456 = (state_42519[(2)]);
var inst_42457 = "(client-event-msg? event-msg)";
var inst_42458 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_42457,inst_42423,inst_42456,null);
var state_42519__$1 = state_42519;
var statearr_42538_42610 = state_42519__$1;
(statearr_42538_42610[(2)] = inst_42458);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42519__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (13))){
var inst_42415 = (state_42519[(2)]);
var state_42519__$1 = state_42519;
var statearr_42539_42611 = state_42519__$1;
(statearr_42539_42611[(2)] = inst_42415);

(statearr_42539_42611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (22))){
var inst_42439 = (state_42519[(2)]);
var state_42519__$1 = (function (){var statearr_42540 = state_42519;
(statearr_42540[(15)] = inst_42439);

return statearr_42540;
})();
if(cljs.core.truth_(server_QMARK_)){
var statearr_42541_42612 = state_42519__$1;
(statearr_42541_42612[(1)] = (23));

} else {
var statearr_42542_42613 = state_42519__$1;
(statearr_42542_42613[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (36))){
var inst_42465 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_42519__$1 = state_42519;
var statearr_42543_42614 = state_42519__$1;
(statearr_42543_42614[(2)] = inst_42465);

(statearr_42543_42614[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (41))){
var inst_42500 = (state_42519[(16)]);
var inst_42502 = (state_42519[(17)]);
var inst_42500__$1 = (state_42519[(2)]);
var inst_42501 = cljs.core.nth.call(null,inst_42500__$1,(0),null);
var inst_42502__$1 = cljs.core.nth.call(null,inst_42500__$1,(1),null);
var state_42519__$1 = (function (){var statearr_42544 = state_42519;
(statearr_42544[(16)] = inst_42500__$1);

(statearr_42544[(18)] = inst_42501);

(statearr_42544[(17)] = inst_42502__$1);

return statearr_42544;
})();
if(cljs.core.truth_(inst_42502__$1)){
var statearr_42545_42615 = state_42519__$1;
(statearr_42545_42615[(1)] = (47));

} else {
var statearr_42546_42616 = state_42519__$1;
(statearr_42546_42616[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (43))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42519,(42),Error,null,(41));
var inst_42488 = cljs.core.PersistentVector.EMPTY_NODE;
var state_42519__$1 = (function (){var statearr_42547 = state_42519;
(statearr_42547[(13)] = inst_42488);

return statearr_42547;
})();
if(cljs.core.truth_(error_handler)){
var statearr_42548_42617 = state_42519__$1;
(statearr_42548_42617[(1)] = (44));

} else {
var statearr_42549_42618 = state_42519__$1;
(statearr_42549_42618[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (29))){
var inst_42423 = (state_42519[(11)]);
var state_42519__$1 = state_42519;
var statearr_42550_42619 = state_42519__$1;
(statearr_42550_42619[(2)] = inst_42423);

(statearr_42550_42619[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (44))){
var inst_42478 = (state_42519[(19)]);
var inst_42423 = (state_42519[(11)]);
var inst_42490 = error_handler.call(null,inst_42478,inst_42423);
var state_42519__$1 = state_42519;
var statearr_42551_42620 = state_42519__$1;
(statearr_42551_42620[(2)] = inst_42490);

(statearr_42551_42620[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (6))){
var inst_42397 = (state_42519[(12)]);
var inst_42405 = (inst_42397 == null);
var inst_42406 = cljs.core.not.call(null,inst_42405);
var state_42519__$1 = state_42519;
if(inst_42406){
var statearr_42552_42621 = state_42519__$1;
(statearr_42552_42621[(1)] = (8));

} else {
var statearr_42553_42622 = state_42519__$1;
(statearr_42553_42622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (28))){
var inst_42423 = (state_42519[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42519,(27),Error,null,(26));
var inst_42447 = taoensso.sente.server_event_msg_QMARK_.call(null,inst_42423);
var state_42519__$1 = state_42519;
if(cljs.core.truth_(inst_42447)){
var statearr_42554_42623 = state_42519__$1;
(statearr_42554_42623[(1)] = (29));

} else {
var statearr_42555_42624 = state_42519__$1;
(statearr_42555_42624[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (25))){
var inst_42432 = (state_42519[(20)]);
var inst_42471 = (state_42519[(2)]);
var inst_42472 = event_msg_handler.call(null,inst_42471);
var inst_42473 = [inst_42472,null];
var inst_42474 = (new cljs.core.PersistentVector(null,2,(5),inst_42432,inst_42473,null));
var state_42519__$1 = state_42519;
var statearr_42556_42625 = state_42519__$1;
(statearr_42556_42625[(2)] = inst_42474);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42519__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (34))){
var inst_42423 = (state_42519[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42519,(33),Error,null,(32));
var inst_42462 = taoensso.sente.client_event_msg_QMARK_.call(null,inst_42423);
var state_42519__$1 = state_42519;
if(cljs.core.truth_(inst_42462)){
var statearr_42557_42626 = state_42519__$1;
(statearr_42557_42626[(1)] = (35));

} else {
var statearr_42558_42627 = state_42519__$1;
(statearr_42558_42627[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (17))){
var inst_42476 = (state_42519[(21)]);
var inst_42478 = (state_42519[(19)]);
var inst_42476__$1 = (state_42519[(2)]);
var inst_42477 = cljs.core.nth.call(null,inst_42476__$1,(0),null);
var inst_42478__$1 = cljs.core.nth.call(null,inst_42476__$1,(1),null);
var state_42519__$1 = (function (){var statearr_42559 = state_42519;
(statearr_42559[(21)] = inst_42476__$1);

(statearr_42559[(19)] = inst_42478__$1);

(statearr_42559[(22)] = inst_42477);

return statearr_42559;
})();
if(cljs.core.truth_(inst_42478__$1)){
var statearr_42560_42628 = state_42519__$1;
(statearr_42560_42628[(1)] = (38));

} else {
var statearr_42561_42629 = state_42519__$1;
(statearr_42561_42629[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (3))){
var inst_42517 = (state_42519[(2)]);
var state_42519__$1 = state_42519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42519__$1,inst_42517);
} else {
if((state_val_42520 === (12))){
var state_42519__$1 = state_42519;
var statearr_42562_42630 = state_42519__$1;
(statearr_42562_42630[(2)] = false);

(statearr_42562_42630[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (2))){
var inst_42392 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42393 = [ch_recv,ch_ctrl];
var inst_42394 = (new cljs.core.PersistentVector(null,2,(5),inst_42392,inst_42393,null));
var state_42519__$1 = state_42519;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42519__$1,(4),inst_42394);
} else {
if((state_val_42520 === (23))){
var state_42519__$1 = state_42519;
var statearr_42563_42631 = state_42519__$1;
(statearr_42563_42631[(2)] = null);

(statearr_42563_42631[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (47))){
var inst_42399 = (state_42519[(7)]);
var inst_42476 = (state_42519[(21)]);
var inst_42424 = (state_42519[(8)]);
var inst_42396 = (state_42519[(9)]);
var inst_42398 = (state_42519[(10)]);
var inst_42478 = (state_42519[(19)]);
var inst_42500 = (state_42519[(16)]);
var inst_42423 = (state_42519[(11)]);
var inst_42501 = (state_42519[(18)]);
var inst_42502 = (state_42519[(17)]);
var inst_42397 = (state_42519[(12)]);
var inst_42504 = (function (){var map__42402 = inst_42423;
var p = inst_42398;
var _QMARK_error = inst_42478;
var vec__42403 = inst_42476;
var vec__42480 = inst_42500;
var v = inst_42397;
var _ = inst_42501;
var e2 = inst_42502;
var _QMARK_error2 = inst_42502;
var event_msg = inst_42423;
var e = inst_42478;
var temp__4657__auto__ = inst_42502;
var event = inst_42424;
var vec__42391 = inst_42396;
var stop_QMARK_ = inst_42399;
return ((function (map__42402,p,_QMARK_error,vec__42403,vec__42480,v,_,e2,_QMARK_error2,event_msg,e,temp__4657__auto__,event,vec__42391,stop_QMARK_,inst_42399,inst_42476,inst_42424,inst_42396,inst_42398,inst_42478,inst_42500,inst_42423,inst_42501,inst_42502,inst_42397,state_val_42520,c__21993__auto___42594,map__42388,map__42388__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});
;})(map__42402,p,_QMARK_error,vec__42403,vec__42480,v,_,e2,_QMARK_error2,event_msg,e,temp__4657__auto__,event,vec__42391,stop_QMARK_,inst_42399,inst_42476,inst_42424,inst_42396,inst_42398,inst_42478,inst_42500,inst_42423,inst_42501,inst_42502,inst_42397,state_val_42520,c__21993__auto___42594,map__42388,map__42388__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_42505 = (new cljs.core.Delay(inst_42504,null));
var inst_42506 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",1189,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_42505,null);
var state_42519__$1 = state_42519;
var statearr_42564_42632 = state_42519__$1;
(statearr_42564_42632[(2)] = inst_42506);

(statearr_42564_42632[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (35))){
var inst_42423 = (state_42519[(11)]);
var state_42519__$1 = state_42519;
var statearr_42565_42633 = state_42519__$1;
(statearr_42565_42633[(2)] = inst_42423);

(statearr_42565_42633[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42519,(18),Error,null,(17));
var inst_42432 = cljs.core.PersistentVector.EMPTY_NODE;
var state_42519__$1 = (function (){var statearr_42566 = state_42519;
(statearr_42566[(20)] = inst_42432);

return statearr_42566;
})();
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_42567_42634 = state_42519__$1;
(statearr_42567_42634[(1)] = (20));

} else {
var statearr_42568_42635 = state_42519__$1;
(statearr_42568_42635[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (11))){
var state_42519__$1 = state_42519;
var statearr_42569_42636 = state_42519__$1;
(statearr_42569_42636[(2)] = true);

(statearr_42569_42636[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (9))){
var state_42519__$1 = state_42519;
var statearr_42570_42637 = state_42519__$1;
(statearr_42570_42637[(2)] = false);

(statearr_42570_42637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (5))){
var state_42519__$1 = state_42519;
var statearr_42571_42638 = state_42519__$1;
(statearr_42571_42638[(2)] = null);

(statearr_42571_42638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (14))){
var inst_42397 = (state_42519[(12)]);
var inst_42420 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42397);
var state_42519__$1 = state_42519;
var statearr_42572_42639 = state_42519__$1;
(statearr_42572_42639[(2)] = inst_42420);

(statearr_42572_42639[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (45))){
var inst_42399 = (state_42519[(7)]);
var inst_42476 = (state_42519[(21)]);
var inst_42424 = (state_42519[(8)]);
var inst_42396 = (state_42519[(9)]);
var inst_42398 = (state_42519[(10)]);
var inst_42478 = (state_42519[(19)]);
var inst_42423 = (state_42519[(11)]);
var inst_42477 = (state_42519[(22)]);
var inst_42397 = (state_42519[(12)]);
var inst_42492 = (function (){var map__42402 = inst_42423;
var p = inst_42398;
var _QMARK_error = inst_42478;
var vec__42403 = inst_42476;
var v = inst_42397;
var temp__4655__auto__ = error_handler;
var _ = inst_42477;
var event_msg = inst_42423;
var e = inst_42478;
var temp__4657__auto__ = inst_42478;
var event = inst_42424;
var vec__42391 = inst_42396;
var stop_QMARK_ = inst_42399;
return ((function (map__42402,p,_QMARK_error,vec__42403,v,temp__4655__auto__,_,event_msg,e,temp__4657__auto__,event,vec__42391,stop_QMARK_,inst_42399,inst_42476,inst_42424,inst_42396,inst_42398,inst_42478,inst_42423,inst_42477,inst_42397,state_val_42520,c__21993__auto___42594,map__42388,map__42388__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk router `event-msg-handler` error: %s",event], null);
});
;})(map__42402,p,_QMARK_error,vec__42403,v,temp__4655__auto__,_,event_msg,e,temp__4657__auto__,event,vec__42391,stop_QMARK_,inst_42399,inst_42476,inst_42424,inst_42396,inst_42398,inst_42478,inst_42423,inst_42477,inst_42397,state_val_42520,c__21993__auto___42594,map__42388,map__42388__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_42493 = (new cljs.core.Delay(inst_42492,null));
var inst_42494 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7789479294927377616.clj",1187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_42493,null);
var state_42519__$1 = state_42519;
var statearr_42573_42640 = state_42519__$1;
(statearr_42573_42640[(2)] = inst_42494);

(statearr_42573_42640[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (26))){
var inst_42454 = (state_42519[(2)]);
var state_42519__$1 = state_42519;
var statearr_42574_42641 = state_42519__$1;
(statearr_42574_42641[(2)] = inst_42454);

(statearr_42574_42641[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (16))){
var inst_42423 = (state_42519[(11)]);
var inst_42423__$1 = (state_42519[(2)]);
var inst_42424 = cljs.core.get.call(null,inst_42423__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_42519__$1 = (function (){var statearr_42575 = state_42519;
(statearr_42575[(8)] = inst_42424);

(statearr_42575[(11)] = inst_42423__$1);

return statearr_42575;
})();
var statearr_42576_42642 = state_42519__$1;
(statearr_42576_42642[(2)] = null);

(statearr_42576_42642[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (38))){
var state_42519__$1 = state_42519;
var statearr_42577_42643 = state_42519__$1;
(statearr_42577_42643[(2)] = null);

(statearr_42577_42643[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (30))){
var inst_42450 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_42519__$1 = state_42519;
var statearr_42578_42644 = state_42519__$1;
(statearr_42578_42644[(2)] = inst_42450);

(statearr_42578_42644[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (10))){
var inst_42418 = (state_42519[(2)]);
var state_42519__$1 = state_42519;
if(cljs.core.truth_(inst_42418)){
var statearr_42579_42645 = state_42519__$1;
(statearr_42579_42645[(1)] = (14));

} else {
var statearr_42580_42646 = state_42519__$1;
(statearr_42580_42646[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (18))){
var inst_42425 = (state_42519[(2)]);
var inst_42426 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42427 = [null,inst_42425];
var inst_42428 = (new cljs.core.PersistentVector(null,2,(5),inst_42426,inst_42427,null));
var state_42519__$1 = state_42519;
var statearr_42581_42647 = state_42519__$1;
(statearr_42581_42647[(2)] = inst_42428);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42519__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (42))){
var inst_42481 = (state_42519[(2)]);
var inst_42482 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42483 = [null,inst_42481];
var inst_42484 = (new cljs.core.PersistentVector(null,2,(5),inst_42482,inst_42483,null));
var state_42519__$1 = state_42519;
var statearr_42582_42648 = state_42519__$1;
(statearr_42582_42648[(2)] = inst_42484);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42519__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (37))){
var inst_42467 = (state_42519[(2)]);
var state_42519__$1 = state_42519;
var statearr_42583_42649 = state_42519__$1;
(statearr_42583_42649[(2)] = inst_42467);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42519__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (8))){
var inst_42397 = (state_42519[(12)]);
var inst_42408 = inst_42397.cljs$lang$protocol_mask$partition0$;
var inst_42409 = (inst_42408 & (64));
var inst_42410 = inst_42397.cljs$core$ISeq$;
var inst_42411 = (inst_42409) || (inst_42410);
var state_42519__$1 = state_42519;
if(cljs.core.truth_(inst_42411)){
var statearr_42584_42650 = state_42519__$1;
(statearr_42584_42650[(1)] = (11));

} else {
var statearr_42585_42651 = state_42519__$1;
(statearr_42585_42651[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42520 === (49))){
var inst_42509 = (state_42519[(2)]);
var state_42519__$1 = state_42519;
var statearr_42586_42652 = state_42519__$1;
(statearr_42586_42652[(2)] = inst_42509);

(statearr_42586_42652[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21993__auto___42594,map__42388,map__42388__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
;
return ((function (switch__21881__auto__,c__21993__auto___42594,map__42388,map__42388__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__21882__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__21882__auto____0 = (function (){
var statearr_42590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42590[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__21882__auto__);

(statearr_42590[(1)] = (1));

return statearr_42590;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__21882__auto____1 = (function (state_42519){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_42519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e42591){if((e42591 instanceof Object)){
var ex__21885__auto__ = e42591;
var statearr_42592_42653 = state_42519;
(statearr_42592_42653[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42654 = state_42519;
state_42519 = G__42654;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__21882__auto__ = function(state_42519){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__21882__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__21882__auto____1.call(this,state_42519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__21882__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__21882__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto___42594,map__42388,map__42388__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var state__21995__auto__ = (function (){var statearr_42593 = f__21994__auto__.call(null);
(statearr_42593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto___42594);

return statearr_42593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto___42594,map__42388,map__42388__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
);


return ((function (map__42388,map__42388__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__42388,map__42388__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
});
/**
 * Creates a go-loop to call `(event-msg-handler <server-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__19514__auto__ = [];
var len__19507__auto___42662 = arguments.length;
var i__19508__auto___42663 = (0);
while(true){
if((i__19508__auto___42663 < len__19507__auto___42662)){
args__19514__auto__.push((arguments[i__19508__auto___42663]));

var G__42664 = (i__19508__auto___42663 + (1));
i__19508__auto___42663 = G__42664;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((2) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19515__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__42658){
var vec__42659 = p__42658;
var map__42660 = cljs.core.nth.call(null,vec__42659,(0),null);
var map__42660__$1 = ((((!((map__42660 == null)))?((((map__42660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42660):map__42660);
var opts = map__42660__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__42660__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__42660__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq42655){
var G__42656 = cljs.core.first.call(null,seq42655);
var seq42655__$1 = cljs.core.next.call(null,seq42655);
var G__42657 = cljs.core.first.call(null,seq42655__$1);
var seq42655__$2 = cljs.core.next.call(null,seq42655__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42656,G__42657,seq42655__$2);
});
/**
 * Creates a go-loop to call `(event-msg-handler <client-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__19514__auto__ = [];
var len__19507__auto___42672 = arguments.length;
var i__19508__auto___42673 = (0);
while(true){
if((i__19508__auto___42673 < len__19507__auto___42672)){
args__19514__auto__.push((arguments[i__19508__auto___42673]));

var G__42674 = (i__19508__auto___42673 + (1));
i__19508__auto___42673 = G__42674;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((2) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19515__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__42668){
var vec__42669 = p__42668;
var map__42670 = cljs.core.nth.call(null,vec__42669,(0),null);
var map__42670__$1 = ((((!((map__42670 == null)))?((((map__42670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42670):map__42670);
var opts = map__42670__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__42670__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__42670__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq42665){
var G__42666 = cljs.core.first.call(null,seq42665);
var seq42665__$1 = cljs.core.next.call(null,seq42665);
var G__42667 = cljs.core.first.call(null,seq42665__$1);
var seq42665__$2 = cljs.core.next.call(null,seq42665__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42666,G__42667,seq42665__$2);
});
taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead.
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});
/**
 * DEPRECATED. Please use `timbre/set-level!` instead.
 */
taoensso.sente.set_logging_level_BANG_ = (function taoensso$sente$set_logging_level_BANG_(level){
return taoensso.timbre.set_level_BANG_.call(null,level);
});
/**
 * DEPRECATED: Please use `ajax-lite` instead.
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;
/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__42675,websocket_QMARK_){
var map__42678 = p__42675;
var map__42678__$1 = ((((!((map__42678 == null)))?((((map__42678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42678):map__42678);
var location = map__42678__$1;
var adjusted_protocol = cljs.core.get.call(null,map__42678__$1,new cljs.core.Keyword(null,"adjusted-protocol","adjusted-protocol",37431492));
var host = cljs.core.get.call(null,map__42678__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__42678__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
return [cljs.core.str(adjusted_protocol),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__18438__auto__ = path;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map?rel=1458781550579
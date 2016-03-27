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
var vec__36031 = x;
var ev_id = cljs.core.nth.call(null,vec__36031,(0),null);
var _ = cljs.core.nth.call(null,vec__36031,(1),null);
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
var err_fmt = [cljs.core.str((function (){var G__36033 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__36033) {
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
var and__6198__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__6198__auto__){
var and__6198__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__6198__auto____$1)){
var map__36037 = x;
var map__36037__$1 = ((((!((map__36037 == null)))?((((map__36037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36037):map__36037);
var ch_recv = cljs.core.get.call(null,map__36037__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__36037__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__36037__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__36037__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__6198__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__6198__auto____$2)){
var and__6198__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__6198__auto____$3){
var and__6198__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(cljs.core.truth_(and__6198__auto____$4)){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__6198__auto____$4;
}
} else {
return and__6198__auto____$3;
}
} else {
return and__6198__auto____$2;
}
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__6198__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__6198__auto__){
var and__6198__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__6198__auto____$1)){
var map__36041 = x;
var map__36041__$1 = ((((!((map__36041 == null)))?((((map__36041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36041):map__36041);
var ch_recv = cljs.core.get.call(null,map__36041__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__36041__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__36041__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__36041__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__36041__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__36041__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__36041__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__6198__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__6198__auto____$2)){
var and__6198__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__6198__auto____$3){
var and__6198__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(cljs.core.truth_(and__6198__auto____$4)){
var and__6198__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__6198__auto____$5){
var and__6198__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(cljs.core.truth_(and__6198__auto____$6)){
var and__6198__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__6198__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__6198__auto____$7;
}
} else {
return and__6198__auto____$6;
}
} else {
return and__6198__auto____$5;
}
} else {
return and__6198__auto____$4;
}
} else {
return and__6198__auto____$3;
}
} else {
return and__6198__auto____$2;
}
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__36043){
var map__36047 = p__36043;
var map__36047__$1 = ((((!((map__36047 == null)))?((((map__36047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36047):map__36047);
var ev_msg = map__36047__$1;
var event = cljs.core.get.call(null,map__36047__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__36047__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__36049 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__36049,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__36049,(1),null);
var valid_event = vec__36049;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",159,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36049,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__36047,map__36047__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__36049,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__36047,map__36047__$1,ev_msg,event,_QMARK_reply_fn))
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
}catch (e36053){if((e36053 instanceof Error)){
var __t = e36053;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? pstr)",__x,__t,null);
} else {
throw e36053;

}
}})());
}catch (e36052){var t = e36052;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",175,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t){
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
var args36054 = [];
var len__7279__auto___36057 = arguments.length;
var i__7280__auto___36058 = (0);
while(true){
if((i__7280__auto___36058 < len__7279__auto___36057)){
args36054.push((arguments[i__7280__auto___36058]));

var G__36059 = (i__7280__auto___36058 + (1));
i__7280__auto___36058 = G__36059;
continue;
} else {
}
break;
}

var G__36056 = args36054.length;
switch (G__36056) {
case 3:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36054.length)].join('')));

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
var args__7286__auto__ = [];
var len__7279__auto___36062 = arguments.length;
var i__7280__auto___36063 = (0);
while(true){
if((i__7280__auto___36063 < len__7279__auto___36062)){
args__7286__auto__.push((arguments[i__7280__auto___36063]));

var G__36064 = (i__7280__auto___36063 + (1));
i__7280__auto___36063 = G__36064;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((0) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((0)),(0),null)):null);
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(argseq__7287__auto__);
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",193,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing: %s -> %s",args,pstr], null);
});})(pstr))
,null)),null);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = (0);

taoensso.sente.pack.cljs$lang$applyTo = (function (seq36061){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36061));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
var __x_36071 = prefixed_pstr;
try{if(typeof __x_36071 === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36068){if((e36068 instanceof Error)){
var __t_36072 = e36068;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? prefixed-pstr)",__x_36071,__t_36072,null);
} else {
throw e36068;

}
}
var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__36070 = prefix;
switch (G__36070) {
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
var vec__36069 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__36069,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__36069,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",205,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (prefix,pstr,clj,wrapped_QMARK_,vec__36069,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(prefix,pstr,clj,wrapped_QMARK_,vec__36069,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
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
var args__7286__auto__ = [];
var len__7279__auto___36243 = arguments.length;
var i__7280__auto___36244 = (0);
while(true){
if((i__7280__auto___36244 < len__7279__auto___36243)){
args__7286__auto__.push((arguments[i__7280__auto___36244]));

var G__36245 = (i__7280__auto___36244 + (1));
i__7280__auto___36244 = G__36245;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_adapter,p__36077){
var vec__36078 = p__36077;
var map__36079 = cljs.core.nth.call(null,vec__36078,(0),null);
var map__36079__$1 = ((((!((map__36079 == null)))?((((map__36079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36079):map__36079);
var recv_buf_or_n = cljs.core.get.call(null,map__36079__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__36079__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__36079__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__36079__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__36079__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__6210__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
var or__6210__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__6210__auto____$1)){
return or__6210__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__36079__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__36079__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var __x = send_buf_ms_ajax;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36081){if((e36081 instanceof Error)){
var __t = e36081;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ajax)",__x,__t,null);
} else {
throw e36081;

}
}})(),(function (){var __x = send_buf_ms_ws;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36082){if((e36082 instanceof Error)){
var __t = e36082;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",__x,__t,null);
} else {
throw e36082;

}
}})()], null))){
} else {
throw (new Error("Assert failed: (have? enc/pos-int? send-buf-ms-ajax send-buf-ms-ws)"));
}

if(cljs.core.truth_((function (){var __x = web_server_adapter;
try{if(((function (__x,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__36074_SHARP_){
if(!((p1__36074_SHARP_ == null))){
if((false) || (p1__36074_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__36074_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__36074_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__36074_SHARP_);
}
});})(__x,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36083){if((e36083 instanceof Error)){
var __t = e36083;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__36074#] (satisfies? interfaces/IServerChanAdapter p1__36074#)) web-server-adapter)",__x,__t,null);
} else {
throw e36083;

}
}})())){
} else {
throw (new Error("Assert failed: (have? (fn* [p1__36074#] (satisfies? interfaces/IServerChanAdapter p1__36074#)) web-server-adapter)"));
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var user_id_fn__$1 = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__6210__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type,uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36085){if((e36085 instanceof Error)){
var __t = e36085;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e36085;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__36086){
var map__36087 = p__36086;
var map__36087__$1 = ((((!((map__36087 == null)))?((((map__36087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36087):map__36087);
var old_m = map__36087__$1;
var ws = cljs.core.get.call(null,map__36087__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__36087__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__36087__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__36089 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36089) {
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
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36090){if((e36090 instanceof Error)){
var __t = e36090;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e36090;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__36091){
var map__36092 = p__36091;
var map__36092__$1 = ((((!((map__36092 == null)))?((((map__36092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36092):map__36092);
var old_m = map__36092__$1;
var ws = cljs.core.get.call(null,map__36092__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__36092__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__36092__$1,new cljs.core.Keyword(null,"any","any",1705907423));
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
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__36247__delegate = function (user_id,ev,p__36094){
var vec__36095 = p__36094;
var map__36096 = cljs.core.nth.call(null,vec__36095,(0),null);
var map__36096__$1 = ((((!((map__36096 == null)))?((((map__36096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36096):map__36096);
var opts = map__36096__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__36096__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_36248 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __36249 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",324,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_36248,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_36248,ev], null);
});})(uid_36248,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);
var __36250__$1 = (cljs.core.truth_(uid_36248)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __36251__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_36252 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__36253 = ((function (uid_36248,__36249,__36250__$1,__36251__$2,ev_uuid_36252,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type){
var temp__4657__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),((function (uid_36248,__36249,__36250__$1,__36251__$2,ev_uuid_36252,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__36098 = cljs.core.get.call(null,m,uid_36248);
var ___$3 = cljs.core.nth.call(null,vec__36098,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__36098,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_36252)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_36248),cljs.core.get.call(null,m,uid_36248));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_36248,__36249,__36250__$1,__36251__$2,ev_uuid_36252,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4657__auto__)){
var pulled = temp__4657__auto__;
var vec__36099 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__36099,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__36099,(1),null);
var __x_36254 = buffered_evs;
try{if(cljs.core.vector_QMARK_.call(null,__x_36254)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36100){if((e36100 instanceof Error)){
var __t_36255 = e36100;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? buffered-evs)",__x_36254,__t_36255,null);
} else {
throw e36100;

}
}
var __x_36256 = ev_uuids;
try{if(cljs.core.set_QMARK_.call(null,__x_36256)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36101){if((e36101 instanceof Error)){
var __t_36257 = e36101;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(set? ev-uuids)",__x_36256,__t_36257,null);
} else {
throw e36101;

}
}
var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",357,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__36099,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_36248,__36249,__36250__$1,__36251__$2,ev_uuid_36252,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__36099,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_36248,__36249,__36250__$1,__36251__$2,ev_uuid_36252,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var G__36102 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36102) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_36248,buffered_evs_ppstr);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_36248,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
} else {
return null;
}
});})(uid_36248,__36249,__36250__$1,__36251__$2,ev_uuid_36252,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",367,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_36248,__36249,__36250__$1,__36251__$2,ev_uuid_36252,flush_buffer_BANG__36253,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_36248], null);
});})(uid_36248,__36249,__36250__$1,__36251__$2,ev_uuid_36252,flush_buffer_BANG__36253,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

if(cljs.core.truth_(flush_QMARK_)){
var seq__36103_36259 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__36104_36260 = null;
var count__36105_36261 = (0);
var i__36106_36262 = (0);
while(true){
if((i__36106_36262 < count__36105_36261)){
var type_36263 = cljs.core._nth.call(null,chunk__36104_36260,i__36106_36262);
flush_buffer_BANG__36253.call(null,type_36263);

var G__36264 = seq__36103_36259;
var G__36265 = chunk__36104_36260;
var G__36266 = count__36105_36261;
var G__36267 = (i__36106_36262 + (1));
seq__36103_36259 = G__36264;
chunk__36104_36260 = G__36265;
count__36105_36261 = G__36266;
i__36106_36262 = G__36267;
continue;
} else {
var temp__4657__auto___36268 = cljs.core.seq.call(null,seq__36103_36259);
if(temp__4657__auto___36268){
var seq__36103_36269__$1 = temp__4657__auto___36268;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36103_36269__$1)){
var c__7021__auto___36270 = cljs.core.chunk_first.call(null,seq__36103_36269__$1);
var G__36271 = cljs.core.chunk_rest.call(null,seq__36103_36269__$1);
var G__36272 = c__7021__auto___36270;
var G__36273 = cljs.core.count.call(null,c__7021__auto___36270);
var G__36274 = (0);
seq__36103_36259 = G__36271;
chunk__36104_36260 = G__36272;
count__36105_36261 = G__36273;
i__36106_36262 = G__36274;
continue;
} else {
var type_36275 = cljs.core.first.call(null,seq__36103_36269__$1);
flush_buffer_BANG__36253.call(null,type_36275);

var G__36276 = cljs.core.next.call(null,seq__36103_36269__$1);
var G__36277 = null;
var G__36278 = (0);
var G__36279 = (0);
seq__36103_36259 = G__36276;
chunk__36104_36260 = G__36277;
count__36105_36261 = G__36278;
i__36106_36262 = G__36279;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__36107_36280 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_36248], null))));
var chunk__36108_36281 = null;
var count__36109_36282 = (0);
var i__36110_36283 = (0);
while(true){
if((i__36110_36283 < count__36109_36282)){
var server_ch_36284 = cljs.core._nth.call(null,chunk__36108_36281,i__36110_36283);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_36284);

var G__36285 = seq__36107_36280;
var G__36286 = chunk__36108_36281;
var G__36287 = count__36109_36282;
var G__36288 = (i__36110_36283 + (1));
seq__36107_36280 = G__36285;
chunk__36108_36281 = G__36286;
count__36109_36282 = G__36287;
i__36110_36283 = G__36288;
continue;
} else {
var temp__4657__auto___36289 = cljs.core.seq.call(null,seq__36107_36280);
if(temp__4657__auto___36289){
var seq__36107_36290__$1 = temp__4657__auto___36289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36107_36290__$1)){
var c__7021__auto___36291 = cljs.core.chunk_first.call(null,seq__36107_36290__$1);
var G__36292 = cljs.core.chunk_rest.call(null,seq__36107_36290__$1);
var G__36293 = c__7021__auto___36291;
var G__36294 = cljs.core.count.call(null,c__7021__auto___36291);
var G__36295 = (0);
seq__36107_36280 = G__36292;
chunk__36108_36281 = G__36293;
count__36109_36282 = G__36294;
i__36110_36283 = G__36295;
continue;
} else {
var server_ch_36296 = cljs.core.first.call(null,seq__36107_36290__$1);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_36296);

var G__36297 = cljs.core.next.call(null,seq__36107_36290__$1);
var G__36298 = null;
var G__36299 = (0);
var G__36300 = (0);
seq__36107_36280 = G__36297;
chunk__36108_36281 = G__36298;
count__36109_36282 = G__36299;
i__36110_36283 = G__36300;
continue;
}
} else {
}
}
break;
}

var seq__36111_36301 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_36248], null))));
var chunk__36112_36302 = null;
var count__36113_36303 = (0);
var i__36114_36304 = (0);
while(true){
if((i__36114_36304 < count__36113_36303)){
var vec__36115_36305 = cljs.core._nth.call(null,chunk__36112_36302,i__36114_36304);
var _QMARK_server_ch_36306 = cljs.core.nth.call(null,vec__36115_36305,(0),null);
var __36307__$3 = cljs.core.nth.call(null,vec__36115_36305,(1),null);
var temp__4657__auto___36308 = _QMARK_server_ch_36306;
if(cljs.core.truth_(temp__4657__auto___36308)){
var server_ch_36309 = temp__4657__auto___36308;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_36309);
} else {
}

var G__36310 = seq__36111_36301;
var G__36311 = chunk__36112_36302;
var G__36312 = count__36113_36303;
var G__36313 = (i__36114_36304 + (1));
seq__36111_36301 = G__36310;
chunk__36112_36302 = G__36311;
count__36113_36303 = G__36312;
i__36114_36304 = G__36313;
continue;
} else {
var temp__4657__auto___36314 = cljs.core.seq.call(null,seq__36111_36301);
if(temp__4657__auto___36314){
var seq__36111_36315__$1 = temp__4657__auto___36314;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36111_36315__$1)){
var c__7021__auto___36316 = cljs.core.chunk_first.call(null,seq__36111_36315__$1);
var G__36317 = cljs.core.chunk_rest.call(null,seq__36111_36315__$1);
var G__36318 = c__7021__auto___36316;
var G__36319 = cljs.core.count.call(null,c__7021__auto___36316);
var G__36320 = (0);
seq__36111_36301 = G__36317;
chunk__36112_36302 = G__36318;
count__36113_36303 = G__36319;
i__36114_36304 = G__36320;
continue;
} else {
var vec__36116_36321 = cljs.core.first.call(null,seq__36111_36315__$1);
var _QMARK_server_ch_36322 = cljs.core.nth.call(null,vec__36116_36321,(0),null);
var __36323__$3 = cljs.core.nth.call(null,vec__36116_36321,(1),null);
var temp__4657__auto___36324__$1 = _QMARK_server_ch_36322;
if(cljs.core.truth_(temp__4657__auto___36324__$1)){
var server_ch_36325 = temp__4657__auto___36324__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_36325);
} else {
}

var G__36326 = cljs.core.next.call(null,seq__36111_36315__$1);
var G__36327 = null;
var G__36328 = (0);
var G__36329 = (0);
seq__36111_36301 = G__36326;
chunk__36112_36302 = G__36327;
count__36113_36303 = G__36328;
i__36114_36304 = G__36329;
continue;
}
} else {
}
}
break;
}
} else {
var seq__36117_36330 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__36118_36331 = null;
var count__36119_36332 = (0);
var i__36120_36333 = (0);
while(true){
if((i__36120_36333 < count__36119_36332)){
var type_36334 = cljs.core._nth.call(null,chunk__36118_36331,i__36120_36333);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_36334,uid_36248], null),((function (seq__36117_36330,chunk__36118_36331,count__36119_36332,i__36120_36333,type_36334,uid_36248,__36249,__36250__$1,__36251__$2,ev_uuid_36252,flush_buffer_BANG__36253,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_36252], true)], null);
} else {
var vec__36121 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__36121,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__36121,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_36252)], null);
}
});})(seq__36117_36330,chunk__36118_36331,count__36119_36332,i__36120_36333,type_36334,uid_36248,__36249,__36250__$1,__36251__$2,ev_uuid_36252,flush_buffer_BANG__36253,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__36335 = seq__36117_36330;
var G__36336 = chunk__36118_36331;
var G__36337 = count__36119_36332;
var G__36338 = (i__36120_36333 + (1));
seq__36117_36330 = G__36335;
chunk__36118_36331 = G__36336;
count__36119_36332 = G__36337;
i__36120_36333 = G__36338;
continue;
} else {
var temp__4657__auto___36339 = cljs.core.seq.call(null,seq__36117_36330);
if(temp__4657__auto___36339){
var seq__36117_36340__$1 = temp__4657__auto___36339;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36117_36340__$1)){
var c__7021__auto___36341 = cljs.core.chunk_first.call(null,seq__36117_36340__$1);
var G__36342 = cljs.core.chunk_rest.call(null,seq__36117_36340__$1);
var G__36343 = c__7021__auto___36341;
var G__36344 = cljs.core.count.call(null,c__7021__auto___36341);
var G__36345 = (0);
seq__36117_36330 = G__36342;
chunk__36118_36331 = G__36343;
count__36119_36332 = G__36344;
i__36120_36333 = G__36345;
continue;
} else {
var type_36346 = cljs.core.first.call(null,seq__36117_36340__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_36346,uid_36248], null),((function (seq__36117_36330,chunk__36118_36331,count__36119_36332,i__36120_36333,type_36346,seq__36117_36340__$1,temp__4657__auto___36339,uid_36248,__36249,__36250__$1,__36251__$2,ev_uuid_36252,flush_buffer_BANG__36253,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_36252], true)], null);
} else {
var vec__36122 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__36122,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__36122,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_36252)], null);
}
});})(seq__36117_36330,chunk__36118_36331,count__36119_36332,i__36120_36333,type_36346,seq__36117_36340__$1,temp__4657__auto___36339,uid_36248,__36249,__36250__$1,__36251__$2,ev_uuid_36252,flush_buffer_BANG__36253,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__36347 = cljs.core.next.call(null,seq__36117_36340__$1);
var G__36348 = null;
var G__36349 = (0);
var G__36350 = (0);
seq__36117_36330 = G__36347;
chunk__36118_36331 = G__36348;
count__36119_36332 = G__36349;
i__36120_36333 = G__36350;
continue;
}
} else {
}
}
break;
}

var c__28620__auto___36351 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28620__auto___36351,uid_36248,__36249,__36250__$1,__36251__$2,ev_uuid_36252,flush_buffer_BANG__36253,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (c__28620__auto___36351,uid_36248,__36249,__36250__$1,__36251__$2,ev_uuid_36252,flush_buffer_BANG__36253,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_36132){
var state_val_36133 = (state_36132[(1)]);
if((state_val_36133 === (1))){
var state_36132__$1 = state_36132;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_36134_36352 = state_36132__$1;
(statearr_36134_36352[(1)] = (2));

} else {
var statearr_36135_36353 = state_36132__$1;
(statearr_36135_36353[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36133 === (2))){
var state_36132__$1 = state_36132;
var statearr_36136_36354 = state_36132__$1;
(statearr_36136_36354[(2)] = null);

(statearr_36136_36354[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36133 === (3))){
var inst_36125 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var state_36132__$1 = state_36132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36132__$1,(5),inst_36125);
} else {
if((state_val_36133 === (4))){
var inst_36129 = (state_36132[(2)]);
var inst_36130 = flush_buffer_BANG__36253.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_36132__$1 = (function (){var statearr_36137 = state_36132;
(statearr_36137[(7)] = inst_36129);

return statearr_36137;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36132__$1,inst_36130);
} else {
if((state_val_36133 === (5))){
var inst_36127 = (state_36132[(2)]);
var state_36132__$1 = state_36132;
var statearr_36138_36355 = state_36132__$1;
(statearr_36138_36355[(2)] = inst_36127);

(statearr_36138_36355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__28620__auto___36351,uid_36248,__36249,__36250__$1,__36251__$2,ev_uuid_36252,flush_buffer_BANG__36253,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28508__auto__,c__28620__auto___36351,uid_36248,__36249,__36250__$1,__36251__$2,ev_uuid_36252,flush_buffer_BANG__36253,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28509__auto__ = null;
var taoensso$sente$state_machine__28509__auto____0 = (function (){
var statearr_36142 = [null,null,null,null,null,null,null,null];
(statearr_36142[(0)] = taoensso$sente$state_machine__28509__auto__);

(statearr_36142[(1)] = (1));

return statearr_36142;
});
var taoensso$sente$state_machine__28509__auto____1 = (function (state_36132){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_36132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e36143){if((e36143 instanceof Object)){
var ex__28512__auto__ = e36143;
var statearr_36144_36356 = state_36132;
(statearr_36144_36356[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36357 = state_36132;
state_36132 = G__36357;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
taoensso$sente$state_machine__28509__auto__ = function(state_36132){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28509__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28509__auto____1.call(this,state_36132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28509__auto____0;
taoensso$sente$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28509__auto____1;
return taoensso$sente$state_machine__28509__auto__;
})()
;})(switch__28508__auto__,c__28620__auto___36351,uid_36248,__36249,__36250__$1,__36251__$2,ev_uuid_36252,flush_buffer_BANG__36253,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__28622__auto__ = (function (){var statearr_36145 = f__28621__auto__.call(null);
(statearr_36145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto___36351);

return statearr_36145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(c__28620__auto___36351,uid_36248,__36249,__36250__$1,__36251__$2,ev_uuid_36252,flush_buffer_BANG__36253,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__28620__auto___36358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28620__auto___36358,uid_36248,__36249,__36250__$1,__36251__$2,ev_uuid_36252,flush_buffer_BANG__36253,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (c__28620__auto___36358,uid_36248,__36249,__36250__$1,__36251__$2,ev_uuid_36252,flush_buffer_BANG__36253,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_36155){
var state_val_36156 = (state_36155[(1)]);
if((state_val_36156 === (1))){
var state_36155__$1 = state_36155;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_36157_36359 = state_36155__$1;
(statearr_36157_36359[(1)] = (2));

} else {
var statearr_36158_36360 = state_36155__$1;
(statearr_36158_36360[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36156 === (2))){
var state_36155__$1 = state_36155;
var statearr_36159_36361 = state_36155__$1;
(statearr_36159_36361[(2)] = null);

(statearr_36159_36361[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36156 === (3))){
var inst_36148 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var state_36155__$1 = state_36155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36155__$1,(5),inst_36148);
} else {
if((state_val_36156 === (4))){
var inst_36152 = (state_36155[(2)]);
var inst_36153 = flush_buffer_BANG__36253.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_36155__$1 = (function (){var statearr_36160 = state_36155;
(statearr_36160[(7)] = inst_36152);

return statearr_36160;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36155__$1,inst_36153);
} else {
if((state_val_36156 === (5))){
var inst_36150 = (state_36155[(2)]);
var state_36155__$1 = state_36155;
var statearr_36161_36362 = state_36155__$1;
(statearr_36161_36362[(2)] = inst_36150);

(statearr_36161_36362[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__28620__auto___36358,uid_36248,__36249,__36250__$1,__36251__$2,ev_uuid_36252,flush_buffer_BANG__36253,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28508__auto__,c__28620__auto___36358,uid_36248,__36249,__36250__$1,__36251__$2,ev_uuid_36252,flush_buffer_BANG__36253,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28509__auto__ = null;
var taoensso$sente$state_machine__28509__auto____0 = (function (){
var statearr_36165 = [null,null,null,null,null,null,null,null];
(statearr_36165[(0)] = taoensso$sente$state_machine__28509__auto__);

(statearr_36165[(1)] = (1));

return statearr_36165;
});
var taoensso$sente$state_machine__28509__auto____1 = (function (state_36155){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_36155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e36166){if((e36166 instanceof Object)){
var ex__28512__auto__ = e36166;
var statearr_36167_36363 = state_36155;
(statearr_36167_36363[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36364 = state_36155;
state_36155 = G__36364;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
taoensso$sente$state_machine__28509__auto__ = function(state_36155){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28509__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28509__auto____1.call(this,state_36155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28509__auto____0;
taoensso$sente$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28509__auto____1;
return taoensso$sente$state_machine__28509__auto__;
})()
;})(switch__28508__auto__,c__28620__auto___36358,uid_36248,__36249,__36250__$1,__36251__$2,ev_uuid_36252,flush_buffer_BANG__36253,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__28622__auto__ = (function (){var statearr_36168 = f__28621__auto__.call(null);
(statearr_36168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto___36358);

return statearr_36168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(c__28620__auto___36358,uid_36248,__36249,__36250__$1,__36251__$2,ev_uuid_36252,flush_buffer_BANG__36253,vec__36095,map__36096,map__36096__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}

return null;
};
var G__36247 = function (user_id,ev,var_args){
var p__36094 = null;
if (arguments.length > 2) {
var G__36365__i = 0, G__36365__a = new Array(arguments.length -  2);
while (G__36365__i < G__36365__a.length) {G__36365__a[G__36365__i] = arguments[G__36365__i + 2]; ++G__36365__i;}
  p__36094 = new cljs.core.IndexedSeq(G__36365__a,0);
} 
return G__36247__delegate.call(this,user_id,ev,p__36094);};
G__36247.cljs$lang$maxFixedArity = 2;
G__36247.cljs$lang$applyTo = (function (arglist__36366){
var user_id = cljs.core.first(arglist__36366);
arglist__36366 = cljs.core.next(arglist__36366);
var ev = cljs.core.first(arglist__36366);
var p__36094 = cljs.core.rest(arglist__36366);
return G__36247__delegate(user_id,ev,p__36094);
});
G__36247.cljs$core$IFn$_invoke$arity$variadic = G__36247__delegate;
return G__36247;
})()
;})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__36169 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__36169,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__36169,(1),null);
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?((function (params,ppstr,client_id,vec__36169,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",435,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__36169,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): %s",resp_clj], null);
});})(params,ppstr,client_id,vec__36169,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
});})(params,ppstr,client_id,vec__36169,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
return null;
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",442,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__36169,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): dummy-cb-200"], null);
});})(params,ppstr,client_id,vec__36169,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337)),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var csrf_token = csrf_token_fn.call(null,ring_req);
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var websocket_QMARK_ = new cljs.core.Keyword(null,"websocket?","websocket?",1552493139).cljs$core$IFn$_invoke$arity$1(ring_req);
var receive_event_msg_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__36367__delegate = function (event,p__36170){
var vec__36171 = p__36170;
var _QMARK_reply_fn = cljs.core.nth.call(null,vec__36171,(0),null);
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
};
var G__36367 = function (event,var_args){
var p__36170 = null;
if (arguments.length > 1) {
var G__36368__i = 0, G__36368__a = new Array(arguments.length -  1);
while (G__36368__i < G__36368__a.length) {G__36368__a[G__36368__i] = arguments[G__36368__i + 1]; ++G__36368__i;}
  p__36170 = new cljs.core.IndexedSeq(G__36368__a,0);
} 
return G__36367__delegate.call(this,event,p__36170);};
G__36367.cljs$lang$maxFixedArity = 1;
G__36367.cljs$lang$applyTo = (function (arglist__36369){
var event = cljs.core.first(arglist__36369);
var p__36170 = cljs.core.rest(arglist__36369);
return G__36367__delegate(event,p__36170);
});
G__36367.cljs$core$IFn$_invoke$arity$variadic = G__36367__delegate;
return G__36367;
})()
;})(csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var handshake_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",467,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handshake!"], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = ((!((_QMARK_handshake_data == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev),cljs.core.not.call(null,websocket_QMARK_));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",479,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",487,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,[cljs.core.str(server_ch)].join('')], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

taoensso.encore.reset_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id], null),server_ch);

if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954)], null));
} else {
}

return handshake_BANG_.call(null,server_ch);
} else {
var initial_conn_from_client_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_ch,taoensso.encore.now_udt.call(null)], null),(_QMARK_v == null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
var handshake_QMARK_ = (function (){var or__6210__auto__ = initial_conn_from_client_QMARK_;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
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
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,req_ppstr){
var vec__36172 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__36172,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__36172,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__36172,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",514,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36172,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__36172,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__36172,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,status){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
if(cljs.core.empty_QMARK_.call(null,new_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return new_m;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var c__28620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28620__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (c__28620__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_36186){
var state_val_36187 = (state_36186[(1)]);
if((state_val_36187 === (1))){
var inst_36173 = cljs.core.async.timeout.call(null,(5000));
var state_36186__$1 = state_36186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36186__$1,(2),inst_36173);
} else {
if((state_val_36187 === (2))){
var inst_36175 = (state_36186[(2)]);
var inst_36176 = upd_connected_uid_BANG_.call(null,uid);
var state_36186__$1 = (function (){var statearr_36188 = state_36186;
(statearr_36188[(7)] = inst_36175);

return statearr_36188;
})();
if(cljs.core.truth_(inst_36176)){
var statearr_36189_36370 = state_36186__$1;
(statearr_36189_36370[(1)] = (3));

} else {
var statearr_36190_36371 = state_36186__$1;
(statearr_36190_36371[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (3))){
var inst_36178 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36179 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_36180 = (new cljs.core.PersistentVector(null,1,(5),inst_36178,inst_36179,null));
var inst_36181 = receive_event_msg_BANG_.call(null,inst_36180);
var state_36186__$1 = state_36186;
var statearr_36191_36372 = state_36186__$1;
(statearr_36191_36372[(2)] = inst_36181);

(statearr_36191_36372[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (4))){
var state_36186__$1 = state_36186;
var statearr_36192_36373 = state_36186__$1;
(statearr_36192_36373[(2)] = null);

(statearr_36192_36373[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36187 === (5))){
var inst_36184 = (state_36186[(2)]);
var state_36186__$1 = state_36186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36186__$1,inst_36184);
} else {
return null;
}
}
}
}
}
});})(c__28620__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28508__auto__,c__28620__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28509__auto__ = null;
var taoensso$sente$state_machine__28509__auto____0 = (function (){
var statearr_36196 = [null,null,null,null,null,null,null,null];
(statearr_36196[(0)] = taoensso$sente$state_machine__28509__auto__);

(statearr_36196[(1)] = (1));

return statearr_36196;
});
var taoensso$sente$state_machine__28509__auto____1 = (function (state_36186){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_36186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e36197){if((e36197 instanceof Object)){
var ex__28512__auto__ = e36197;
var statearr_36198_36374 = state_36186;
(statearr_36198_36374[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36375 = state_36186;
state_36186 = G__36375;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
taoensso$sente$state_machine__28509__auto__ = function(state_36186){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28509__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28509__auto____1.call(this,state_36186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28509__auto____0;
taoensso$sente$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28509__auto____1;
return taoensso$sente$state_machine__28509__auto__;
})()
;})(switch__28508__auto__,c__28620__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__28622__auto__ = (function (){var statearr_36199 = f__28621__auto__.call(null);
(statearr_36199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto__);

return statearr_36199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(c__28620__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__28620__auto__;
} else {
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,new cljs.core.Keyword(null,"ajax","ajax",814345549),client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__36200){
var vec__36201 = p__36200;
var server_ch__$1 = cljs.core.nth.call(null,vec__36201,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__36201,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var udt_disconnected = taoensso.encore.now_udt.call(null);
var c__28620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28620__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (c__28620__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_36224){
var state_val_36225 = (state_36224[(1)]);
if((state_val_36225 === (1))){
var inst_36202 = cljs.core.async.timeout.call(null,(5000));
var state_36224__$1 = state_36224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36224__$1,(2),inst_36202);
} else {
if((state_val_36225 === (2))){
var inst_36204 = (state_36224[(2)]);
var inst_36205 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36206 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_36207 = (new cljs.core.PersistentVector(null,2,(5),inst_36205,inst_36206,null));
var inst_36208 = (function (){return ((function (inst_36204,inst_36205,inst_36206,inst_36207,state_val_36225,c__28620__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var vec__36226 = cljs.core.get.call(null,_QMARK_m,client_id);
var _ = cljs.core.nth.call(null,vec__36226,(0),null);
var _QMARK_udt_last_connected = cljs.core.nth.call(null,vec__36226,(1),null);
var disconnected_QMARK_ = (function (){var and__6198__auto__ = _QMARK_udt_last_connected;
if(cljs.core.truth_(and__6198__auto__)){
return (udt_disconnected >= _QMARK_udt_last_connected);
} else {
return and__6198__auto__;
}
})();
if(cljs.core.not.call(null,disconnected_QMARK_)){
return taoensso.encore.swapped.call(null,_QMARK_m,cljs.core.not.call(null,new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586)));
} else {
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
return taoensso.encore.swapped.call(null,((cljs.core.empty_QMARK_.call(null,new_m))?new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782):new_m),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586));
}
});
;})(inst_36204,inst_36205,inst_36206,inst_36207,state_val_36225,c__28620__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_36209 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_36207,inst_36208);
var state_36224__$1 = (function (){var statearr_36227 = state_36224;
(statearr_36227[(7)] = inst_36204);

return statearr_36227;
})();
if(cljs.core.truth_(inst_36209)){
var statearr_36228_36376 = state_36224__$1;
(statearr_36228_36376[(1)] = (3));

} else {
var statearr_36229_36377 = state_36224__$1;
(statearr_36229_36377[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36225 === (3))){
var inst_36211 = upd_connected_uid_BANG_.call(null,uid);
var state_36224__$1 = state_36224;
if(cljs.core.truth_(inst_36211)){
var statearr_36230_36378 = state_36224__$1;
(statearr_36230_36378[(1)] = (6));

} else {
var statearr_36231_36379 = state_36224__$1;
(statearr_36231_36379[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36225 === (4))){
var state_36224__$1 = state_36224;
var statearr_36232_36380 = state_36224__$1;
(statearr_36232_36380[(2)] = null);

(statearr_36232_36380[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36225 === (5))){
var inst_36222 = (state_36224[(2)]);
var state_36224__$1 = state_36224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36224__$1,inst_36222);
} else {
if((state_val_36225 === (6))){
var inst_36213 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36214 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_36215 = (new cljs.core.PersistentVector(null,1,(5),inst_36213,inst_36214,null));
var inst_36216 = receive_event_msg_BANG_.call(null,inst_36215);
var state_36224__$1 = state_36224;
var statearr_36233_36381 = state_36224__$1;
(statearr_36233_36381[(2)] = inst_36216);

(statearr_36233_36381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36225 === (7))){
var state_36224__$1 = state_36224;
var statearr_36234_36382 = state_36224__$1;
(statearr_36234_36382[(2)] = null);

(statearr_36234_36382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36225 === (8))){
var inst_36219 = (state_36224[(2)]);
var state_36224__$1 = state_36224;
var statearr_36235_36383 = state_36224__$1;
(statearr_36235_36383[(2)] = inst_36219);

(statearr_36235_36383[(1)] = (5));


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
});})(c__28620__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28508__auto__,c__28620__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28509__auto__ = null;
var taoensso$sente$state_machine__28509__auto____0 = (function (){
var statearr_36239 = [null,null,null,null,null,null,null,null];
(statearr_36239[(0)] = taoensso$sente$state_machine__28509__auto__);

(statearr_36239[(1)] = (1));

return statearr_36239;
});
var taoensso$sente$state_machine__28509__auto____1 = (function (state_36224){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_36224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e36240){if((e36240 instanceof Object)){
var ex__28512__auto__ = e36240;
var statearr_36241_36384 = state_36224;
(statearr_36241_36384[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36385 = state_36224;
state_36224 = G__36385;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
taoensso$sente$state_machine__28509__auto__ = function(state_36224){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28509__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28509__auto____1.call(this,state_36224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28509__auto____0;
taoensso$sente$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28509__auto____1;
return taoensso$sente$state_machine__28509__auto__;
})()
;})(switch__28508__auto__,c__28620__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__28622__auto__ = (function (){var statearr_36242 = f__28621__auto__.call(null);
(statearr_36242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto__);

return statearr_36242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(c__28620__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__28620__auto__;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__36078,map__36079,map__36079__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq36075){
var G__36076 = cljs.core.first.call(null,seq36075);
var seq36075__$1 = cljs.core.next.call(null,seq36075);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36076,seq36075__$1);
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",576,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null);

var seq__36390 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null))));
var chunk__36391 = null;
var count__36392 = (0);
var i__36393 = (0);
while(true){
if((i__36393 < count__36392)){
var server_ch = cljs.core._nth.call(null,chunk__36391,i__36393);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__36394 = seq__36390;
var G__36395 = chunk__36391;
var G__36396 = count__36392;
var G__36397 = (i__36393 + (1));
seq__36390 = G__36394;
chunk__36391 = G__36395;
count__36392 = G__36396;
i__36393 = G__36397;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36390);
if(temp__4657__auto__){
var seq__36390__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36390__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__36390__$1);
var G__36398 = cljs.core.chunk_rest.call(null,seq__36390__$1);
var G__36399 = c__7021__auto__;
var G__36400 = cljs.core.count.call(null,c__7021__auto__);
var G__36401 = (0);
seq__36390 = G__36398;
chunk__36391 = G__36399;
count__36392 = G__36400;
i__36393 = G__36401;
continue;
} else {
var server_ch = cljs.core.first.call(null,seq__36390__$1);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__36402 = cljs.core.next.call(null,seq__36390__$1);
var G__36403 = null;
var G__36404 = (0);
var G__36405 = (0);
seq__36390 = G__36402;
chunk__36391 = G__36403;
count__36392 = G__36404;
i__36393 = G__36405;
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
var args__7286__auto__ = [];
var len__7279__auto___36495 = arguments.length;
var i__7280__auto___36496 = (0);
while(true){
if((i__7280__auto___36496 < len__7279__auto___36495)){
args__7286__auto__.push((arguments[i__7280__auto___36496]));

var G__36497 = (i__7280__auto___36496 + (1));
i__7280__auto___36496 = G__36497;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((3) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((3)),(0),null)):null);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7287__auto__);
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conns_,uid,buffered_evs_pstr,p__36410){
var vec__36411 = p__36410;
var map__36412 = cljs.core.nth.call(null,vec__36411,(0),null);
var map__36412__$1 = ((((!((map__36412 == null)))?((((map__36412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36412):map__36412);
var nmax_attempts = cljs.core.get.call(null,map__36412__$1,new cljs.core.Keyword(null,"nmax-attempts","nmax-attempts",1471144610),(7));
var ms_base = cljs.core.get.call(null,map__36412__$1,new cljs.core.Keyword(null,"ms-base","ms-base",-1962784511),(90));
var ms_rand = cljs.core.get.call(null,map__36412__$1,new cljs.core.Keyword(null,"ms-rand","ms-rand",1169398874),(90));

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",589,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36411,map__36412,map__36412__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
});})(vec__36411,map__36412,map__36412__$1,nmax_attempts,ms_base,ms_rand))
,null)),null);

var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__28620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28620__auto__,client_ids_unsatisfied,vec__36411,map__36412,map__36412__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (c__28620__auto__,client_ids_unsatisfied,vec__36411,map__36412,map__36412__$1,nmax_attempts,ms_base,ms_rand){
return (function (state_36461){
var state_val_36462 = (state_36461[(1)]);
if((state_val_36462 === (7))){
var inst_36415 = (state_36461[(7)]);
var inst_36416 = (state_36461[(8)]);
var inst_36422 = (state_36461[(9)]);
var inst_36433 = (function (){var n = inst_36415;
var client_ids_satisfied = inst_36416;
var _QMARK_pulled = inst_36422;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_36415,inst_36416,inst_36422,state_val_36462,c__28620__auto__,client_ids_unsatisfied,vec__36411,map__36412,map__36412__$1,nmax_attempts,ms_base,ms_rand){
return (function (s,client_id,p__36432){
var vec__36463 = p__36432;
var _QMARK_server_ch = cljs.core.nth.call(null,vec__36463,(0),null);
var _ = cljs.core.nth.call(null,vec__36463,(1),null);
if(((_QMARK_server_ch == null)) || (cljs.core.not.call(null,taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_server_ch,buffered_evs_pstr,new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103))))){
return s;
} else {
return cljs.core.conj.call(null,s,client_id);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_36415,inst_36416,inst_36422,state_val_36462,c__28620__auto__,client_ids_unsatisfied,vec__36411,map__36412,map__36412__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_36434 = cljs.core.PersistentHashSet.EMPTY;
var inst_36435 = cljs.core.reduce_kv.call(null,inst_36433,inst_36434,inst_36422);
var state_36461__$1 = state_36461;
var statearr_36464_36498 = state_36461__$1;
(statearr_36464_36498[(2)] = inst_36435);

(statearr_36464_36498[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (1))){
var inst_36414 = cljs.core.PersistentHashSet.EMPTY;
var inst_36415 = (0);
var inst_36416 = inst_36414;
var state_36461__$1 = (function (){var statearr_36465 = state_36461;
(statearr_36465[(7)] = inst_36415);

(statearr_36465[(8)] = inst_36416);

return statearr_36465;
})();
var statearr_36466_36499 = state_36461__$1;
(statearr_36466_36499[(2)] = null);

(statearr_36466_36499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (4))){
var state_36461__$1 = state_36461;
var statearr_36467_36500 = state_36461__$1;
(statearr_36467_36500[(2)] = true);

(statearr_36467_36500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (15))){
var inst_36457 = (state_36461[(2)]);
var state_36461__$1 = state_36461;
var statearr_36468_36501 = state_36461__$1;
(statearr_36468_36501[(2)] = inst_36457);

(statearr_36468_36501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (13))){
var inst_36448 = cljs.core.rand_int.call(null,ms_rand);
var inst_36449 = (ms_base + inst_36448);
var inst_36450 = cljs.core.async.timeout.call(null,inst_36449);
var state_36461__$1 = state_36461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36461__$1,(16),inst_36450);
} else {
if((state_val_36462 === (6))){
var inst_36422 = (state_36461[(9)]);
var inst_36430 = (state_36461[(2)]);
var state_36461__$1 = (function (){var statearr_36469 = state_36461;
(statearr_36469[(10)] = inst_36430);

return statearr_36469;
})();
if(cljs.core.truth_(inst_36422)){
var statearr_36470_36502 = state_36461__$1;
(statearr_36470_36502[(1)] = (7));

} else {
var statearr_36471_36503 = state_36461__$1;
(statearr_36471_36503[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (3))){
var inst_36459 = (state_36461[(2)]);
var state_36461__$1 = state_36461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36461__$1,inst_36459);
} else {
if((state_val_36462 === (12))){
var inst_36446 = (state_36461[(2)]);
var state_36461__$1 = state_36461;
if(cljs.core.truth_(inst_36446)){
var statearr_36472_36504 = state_36461__$1;
(statearr_36472_36504[(1)] = (13));

} else {
var statearr_36473_36505 = state_36461__$1;
(statearr_36473_36505[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (2))){
var inst_36415 = (state_36461[(7)]);
var inst_36416 = (state_36461[(8)]);
var inst_36422 = (state_36461[(9)]);
var inst_36418 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36419 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_36420 = (new cljs.core.PersistentVector(null,2,(5),inst_36418,inst_36419,null));
var inst_36421 = (function (){var n = inst_36415;
var client_ids_satisfied = inst_36416;
return ((function (n,client_ids_satisfied,inst_36415,inst_36416,inst_36422,inst_36418,inst_36419,inst_36420,state_val_36462,c__28620__auto__,client_ids_unsatisfied,vec__36411,map__36412,map__36412__$1,nmax_attempts,ms_base,ms_rand){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_36415,inst_36416,inst_36422,inst_36418,inst_36419,inst_36420,state_val_36462,c__28620__auto__,client_ids_unsatisfied,vec__36411,map__36412,map__36412__$1,nmax_attempts,ms_base,ms_rand){
return (function (m__$1,k){
var vec__36474 = cljs.core.get.call(null,m__$1,k);
var _QMARK_server_ch = cljs.core.nth.call(null,vec__36474,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__36474,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_36415,inst_36416,inst_36422,inst_36418,inst_36419,inst_36420,state_val_36462,c__28620__auto__,client_ids_unsatisfied,vec__36411,map__36412,map__36412__$1,nmax_attempts,ms_base,ms_rand))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_36415,inst_36416,inst_36422,inst_36418,inst_36419,inst_36420,state_val_36462,c__28620__auto__,client_ids_unsatisfied,vec__36411,map__36412,map__36412__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_36422__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_36420,inst_36421);
var inst_36423 = (function (){var n = inst_36415;
var client_ids_satisfied = inst_36416;
var _QMARK_pulled = inst_36422__$1;
var __x = inst_36422__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,__x,inst_36415,inst_36416,inst_36422,inst_36418,inst_36419,inst_36420,inst_36421,inst_36422__$1,state_val_36462,c__28620__auto__,client_ids_unsatisfied,vec__36411,map__36412,map__36412__$1,nmax_attempts,ms_base,ms_rand){
return (function (__x__$1){
var or__6210__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,__x__$1);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,__x,inst_36415,inst_36416,inst_36422,inst_36418,inst_36419,inst_36420,inst_36421,inst_36422__$1,state_val_36462,c__28620__auto__,client_ids_unsatisfied,vec__36411,map__36412,map__36412__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_36424 = inst_36423.call(null,inst_36422__$1);
var state_36461__$1 = (function (){var statearr_36475 = state_36461;
(statearr_36475[(9)] = inst_36422__$1);

return statearr_36475;
})();
if(cljs.core.truth_(inst_36424)){
var statearr_36476_36506 = state_36461__$1;
(statearr_36476_36506[(1)] = (4));

} else {
var statearr_36477_36507 = state_36461__$1;
(statearr_36477_36507[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (11))){
var inst_36440 = (state_36461[(11)]);
var state_36461__$1 = state_36461;
var statearr_36478_36508 = state_36461__$1;
(statearr_36478_36508[(2)] = inst_36440);

(statearr_36478_36508[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (9))){
var inst_36440 = (state_36461[(11)]);
var inst_36415 = (state_36461[(7)]);
var inst_36416 = (state_36461[(8)]);
var inst_36438 = (state_36461[(2)]);
var inst_36439 = cljs.core.into.call(null,inst_36416,inst_36438);
var inst_36440__$1 = (inst_36415 < nmax_attempts);
var state_36461__$1 = (function (){var statearr_36479 = state_36461;
(statearr_36479[(11)] = inst_36440__$1);

(statearr_36479[(12)] = inst_36439);

return statearr_36479;
})();
if(cljs.core.truth_(inst_36440__$1)){
var statearr_36480_36509 = state_36461__$1;
(statearr_36480_36509[(1)] = (10));

} else {
var statearr_36481_36510 = state_36461__$1;
(statearr_36481_36510[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (5))){
var inst_36422 = (state_36461[(9)]);
var inst_36427 = "([:or nil? map?] ?pulled)";
var inst_36428 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,inst_36427,inst_36422,null,null);
var state_36461__$1 = state_36461;
var statearr_36482_36511 = state_36461__$1;
(statearr_36482_36511[(2)] = inst_36428);

(statearr_36482_36511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (14))){
var state_36461__$1 = state_36461;
var statearr_36483_36512 = state_36461__$1;
(statearr_36483_36512[(2)] = null);

(statearr_36483_36512[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (16))){
var inst_36415 = (state_36461[(7)]);
var inst_36439 = (state_36461[(12)]);
var inst_36452 = (state_36461[(2)]);
var inst_36453 = (inst_36415 + (1));
var inst_36415__$1 = inst_36453;
var inst_36416 = inst_36439;
var state_36461__$1 = (function (){var statearr_36484 = state_36461;
(statearr_36484[(7)] = inst_36415__$1);

(statearr_36484[(13)] = inst_36452);

(statearr_36484[(8)] = inst_36416);

return statearr_36484;
})();
var statearr_36485_36513 = state_36461__$1;
(statearr_36485_36513[(2)] = null);

(statearr_36485_36513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (10))){
var inst_36439 = (state_36461[(12)]);
var inst_36442 = cljs.core.complement.call(null,inst_36439);
var inst_36443 = cljs.core.some.call(null,inst_36442,client_ids_unsatisfied);
var state_36461__$1 = state_36461;
var statearr_36486_36514 = state_36461__$1;
(statearr_36486_36514[(2)] = inst_36443);

(statearr_36486_36514[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36462 === (8))){
var state_36461__$1 = state_36461;
var statearr_36487_36515 = state_36461__$1;
(statearr_36487_36515[(2)] = null);

(statearr_36487_36515[(1)] = (9));


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
});})(c__28620__auto__,client_ids_unsatisfied,vec__36411,map__36412,map__36412__$1,nmax_attempts,ms_base,ms_rand))
;
return ((function (switch__28508__auto__,c__28620__auto__,client_ids_unsatisfied,vec__36411,map__36412,map__36412__$1,nmax_attempts,ms_base,ms_rand){
return (function() {
var taoensso$sente$state_machine__28509__auto__ = null;
var taoensso$sente$state_machine__28509__auto____0 = (function (){
var statearr_36491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36491[(0)] = taoensso$sente$state_machine__28509__auto__);

(statearr_36491[(1)] = (1));

return statearr_36491;
});
var taoensso$sente$state_machine__28509__auto____1 = (function (state_36461){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_36461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e36492){if((e36492 instanceof Object)){
var ex__28512__auto__ = e36492;
var statearr_36493_36516 = state_36461;
(statearr_36493_36516[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36517 = state_36461;
state_36461 = G__36517;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
taoensso$sente$state_machine__28509__auto__ = function(state_36461){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28509__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28509__auto____1.call(this,state_36461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28509__auto____0;
taoensso$sente$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28509__auto____1;
return taoensso$sente$state_machine__28509__auto__;
})()
;})(switch__28508__auto__,c__28620__auto__,client_ids_unsatisfied,vec__36411,map__36412,map__36412__$1,nmax_attempts,ms_base,ms_rand))
})();
var state__28622__auto__ = (function (){var statearr_36494 = f__28621__auto__.call(null);
(statearr_36494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto__);

return statearr_36494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(c__28620__auto__,client_ids_unsatisfied,vec__36411,map__36412,map__36412__$1,nmax_attempts,ms_base,ms_rand))
);

return c__28620__auto__;
}
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$maxFixedArity = (3);

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$applyTo = (function (seq36406){
var G__36407 = cljs.core.first.call(null,seq36406);
var seq36406__$1 = cljs.core.next.call(null,seq36406);
var G__36408 = cljs.core.first.call(null,seq36406__$1);
var seq36406__$2 = cljs.core.next.call(null,seq36406__$1);
var G__36409 = cljs.core.first.call(null,seq36406__$2);
var seq36406__$3 = cljs.core.next.call(null,seq36406__$2);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36407,G__36408,G__36409,seq36406__$3);
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
var x__6873__auto__ = (((chsk == null))?null:chsk);
var m__6874__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,chsk);
} else {
var m__6874__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,chsk);
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
var x__6873__auto__ = (((chsk == null))?null:chsk);
var m__6874__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,chsk,ev,opts);
} else {
var m__6874__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,chsk,ev,opts);
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
var x__6873__auto__ = (((chsk == null))?null:chsk);
var m__6874__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,chsk);
} else {
var m__6874__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,chsk);
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
var x__6873__auto__ = (((chsk == null))?null:chsk);
var m__6874__auto__ = (taoensso.sente.chsk_disconnect_BANG_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,chsk);
} else {
var m__6874__auto____$1 = (taoensso.sente.chsk_disconnect_BANG_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,chsk);
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
var x__6873__auto__ = (((chsk == null))?null:chsk);
var m__6874__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,chsk);
} else {
var m__6874__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,chsk);
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
var args36518 = [];
var len__7279__auto___36521 = arguments.length;
var i__7280__auto___36522 = (0);
while(true){
if((i__7280__auto___36522 < len__7279__auto___36521)){
args36518.push((arguments[i__7280__auto___36522]));

var G__36523 = (i__7280__auto___36522 + (1));
i__7280__auto___36522 = G__36523;
continue;
} else {
}
break;
}

var G__36520 = args36518.length;
switch (G__36520) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36518.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",646,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if(cljs.core.truth_((function (){var or__6210__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__6210__auto__){
return or__6210__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),cljs.core.str("\n"),cljs.core.str("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nneg-int? ?timeout-ms)))")].join('')));
}

if(cljs.core.truth_((function (){var or__6210__auto__ = (_QMARK_cb == null);
if(or__6210__auto__){
return or__6210__auto__;
} else {
var or__6210__auto____$1 = cljs.core.ifn_QMARK_.call(null,_QMARK_cb);
if(or__6210__auto____$1){
return or__6210__auto____$1;
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
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__36525,merge_state){
var map__36529 = p__36525;
var map__36529__$1 = ((((!((map__36529 == null)))?((((map__36529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36529):map__36529);
var chsk = map__36529__$1;
var chs = cljs.core.get.call(null,map__36529__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__36529__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__36531 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__36529,map__36529__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var new_state__$1 = ((cljs.core.not.call(null,(function (){var and__6198__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__6198__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})()))?new_state:cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true));
return taoensso.encore.swapped.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__36529,map__36529__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__36531,(0),null);
var new_state = cljs.core.nth.call(null,vec__36531,(1),null);
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
var __x_36536 = _QMARK_cb;
try{if(cljs.core.truth_(taoensso.encore.chan_QMARK_.call(null,__x_36536))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36534){if((e36534 instanceof Error)){
var __t_36537 = e36534;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",__x_36536,__t_36537,null);
} else {
throw e36534;

}
}
taoensso.sente.assert_event.call(null,ev);

var vec__36535 = ev;
var ev_id = cljs.core.nth.call(null,vec__36535,(0),null);
var _ = cljs.core.nth.call(null,vec__36535,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__36535,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__36535,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",703,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null);

var buffered_evs = (function (){var __x = clj;
try{if(cljs.core.vector_QMARK_.call(null,__x)){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36543){if((e36543 instanceof Error)){
var __t = e36543;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",__x,__t,null);
} else {
throw e36543;

}
}})();
var seq__36544 = cljs.core.seq.call(null,buffered_evs);
var chunk__36545 = null;
var count__36546 = (0);
var i__36547 = (0);
while(true){
if((i__36547 < count__36546)){
var ev = cljs.core._nth.call(null,chunk__36545,i__36547);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__36548 = seq__36544;
var G__36549 = chunk__36545;
var G__36550 = count__36546;
var G__36551 = (i__36547 + (1));
seq__36544 = G__36548;
chunk__36545 = G__36549;
count__36546 = G__36550;
i__36547 = G__36551;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36544);
if(temp__4657__auto__){
var seq__36544__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36544__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__36544__$1);
var G__36552 = cljs.core.chunk_rest.call(null,seq__36544__$1);
var G__36553 = c__7021__auto__;
var G__36554 = cljs.core.count.call(null,c__7021__auto__);
var G__36555 = (0);
seq__36544 = G__36552;
chunk__36545 = G__36553;
count__36546 = G__36554;
i__36547 = G__36555;
continue;
} else {
var ev = cljs.core.first.call(null,seq__36544__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__36556 = cljs.core.next.call(null,seq__36544__$1);
var G__36557 = null;
var G__36558 = (0);
var G__36559 = (0);
seq__36544 = G__36556;
chunk__36545 = G__36557;
count__36546 = G__36558;
i__36547 = G__36559;
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",713,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["handle-when-handshake (%s): %s",((handshake_QMARK_)?new cljs.core.Keyword(null,"handshake","handshake",68079331):new cljs.core.Keyword(null,"non-handshake","non-handshake",576986062)),clj], null);
});})(handshake_QMARK_))
,null)),null);

if(handshake_QMARK_){
var vec__36562 = clj;
var _ = cljs.core.nth.call(null,vec__36562,(0),null);
var vec__36563 = cljs.core.nth.call(null,vec__36562,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__36563,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__36563,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__36563,(2),null);
var handshake_ev = vec__36562;
if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",719,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36562,_,vec__36563,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__36562,_,vec__36563,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_))
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
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k36565,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__36567 = (((k36565 instanceof cljs.core.Keyword))?k36565.fqn:null);
switch (G__36567) {
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
return cljs.core.get.call(null,self__.__extmap,k36565,else__6835__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36564){
var self__ = this;
var G__36564__$1 = this;
return (new cljs.core.RecordIter((0),G__36564__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
var self__ = this;
var this__6827__auto____$1 = this;
var h__6645__auto__ = self__.__hash;
if(!((h__6645__auto__ == null))){
return h__6645__auto__;
} else {
var h__6645__auto____$1 = cljs.core.hash_imap.call(null,this__6827__auto____$1);
self__.__hash = h__6645__auto____$1;

return h__6645__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
var self__ = this;
var this__6828__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6198__auto__ = other__6829__auto__;
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = (this__6828__auto____$1.constructor === other__6829__auto__.constructor);
if(and__6198__auto____$1){
return cljs.core.equiv_map.call(null,this__6828__auto____$1,other__6829__auto__);
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__36564){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__36568 = cljs.core.keyword_identical_QMARK_;
var expr__36569 = k__6840__auto__;
if(cljs.core.truth_(pred__36568.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__36569))){
return (new taoensso.sente.ChWebSocket(G__36564,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36568.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__36569))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__36564,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36568.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__36569))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__36564,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36568.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__36569))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__36564,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36568.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__36569))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__36564,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36568.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__36569))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__36564,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36568.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__36569))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__36564,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36568.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__36569))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,G__36564,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36568.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__36569))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,G__36564,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36568.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__36569))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,G__36564,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36568.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__36569))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__36564,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36568.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__36569))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__36564,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36568.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__36569))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,G__36564,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36568.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__36569))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,G__36564,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__36564),null));
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__36564){
var self__ = this;
var this__6831__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,G__36564,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__36571){
var self__ = this;
var map__36572 = p__36571;
var map__36572__$1 = ((((!((map__36572 == null)))?((((map__36572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36572):map__36572);
var opts = map__36572__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__36572__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__36572__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__36572__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",750,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__36572,map__36572__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__36572,map__36572__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4657__auto___36608 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___36608)){
var cb_uuid_36609 = temp__4657__auto___36608;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_36609], null),(function (){var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36574){if((e36574 instanceof Error)){
var __t = e36574;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e36574;

}
}})());

var temp__4657__auto___36610__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4657__auto___36610__$1)){
var timeout_ms_36611 = temp__4657__auto___36610__$1;
var c__28620__auto___36612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28620__auto___36612,timeout_ms_36611,temp__4657__auto___36610__$1,cb_uuid_36609,temp__4657__auto___36608,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36572,map__36572__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (c__28620__auto___36612,timeout_ms_36611,temp__4657__auto___36610__$1,cb_uuid_36609,temp__4657__auto___36608,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36572,map__36572__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (state_36585){
var state_val_36586 = (state_36585[(1)]);
if((state_val_36586 === (1))){
var inst_36575 = cljs.core.async.timeout.call(null,timeout_ms_36611);
var state_36585__$1 = state_36585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36585__$1,(2),inst_36575);
} else {
if((state_val_36586 === (2))){
var inst_36578 = (state_36585[(7)]);
var inst_36577 = (state_36585[(2)]);
var inst_36578__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_36585__$1 = (function (){var statearr_36587 = state_36585;
(statearr_36587[(8)] = inst_36577);

(statearr_36587[(7)] = inst_36578__$1);

return statearr_36587;
})();
if(cljs.core.truth_(inst_36578__$1)){
var statearr_36588_36613 = state_36585__$1;
(statearr_36588_36613[(1)] = (3));

} else {
var statearr_36589_36614 = state_36585__$1;
(statearr_36589_36614[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36586 === (3))){
var inst_36578 = (state_36585[(7)]);
var inst_36580 = inst_36578.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_36585__$1 = state_36585;
var statearr_36590_36615 = state_36585__$1;
(statearr_36590_36615[(2)] = inst_36580);

(statearr_36590_36615[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36586 === (4))){
var state_36585__$1 = state_36585;
var statearr_36591_36616 = state_36585__$1;
(statearr_36591_36616[(2)] = null);

(statearr_36591_36616[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36586 === (5))){
var inst_36583 = (state_36585[(2)]);
var state_36585__$1 = state_36585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36585__$1,inst_36583);
} else {
return null;
}
}
}
}
}
});})(c__28620__auto___36612,timeout_ms_36611,temp__4657__auto___36610__$1,cb_uuid_36609,temp__4657__auto___36608,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36572,map__36572__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
;
return ((function (switch__28508__auto__,c__28620__auto___36612,timeout_ms_36611,temp__4657__auto___36610__$1,cb_uuid_36609,temp__4657__auto___36608,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36572,map__36572__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function() {
var taoensso$sente$state_machine__28509__auto__ = null;
var taoensso$sente$state_machine__28509__auto____0 = (function (){
var statearr_36595 = [null,null,null,null,null,null,null,null,null];
(statearr_36595[(0)] = taoensso$sente$state_machine__28509__auto__);

(statearr_36595[(1)] = (1));

return statearr_36595;
});
var taoensso$sente$state_machine__28509__auto____1 = (function (state_36585){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_36585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e36596){if((e36596 instanceof Object)){
var ex__28512__auto__ = e36596;
var statearr_36597_36617 = state_36585;
(statearr_36597_36617[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36618 = state_36585;
state_36585 = G__36618;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
taoensso$sente$state_machine__28509__auto__ = function(state_36585){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28509__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28509__auto____1.call(this,state_36585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28509__auto____0;
taoensso$sente$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28509__auto____1;
return taoensso$sente$state_machine__28509__auto__;
})()
;})(switch__28508__auto__,c__28620__auto___36612,timeout_ms_36611,temp__4657__auto___36610__$1,cb_uuid_36609,temp__4657__auto___36608,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36572,map__36572__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
})();
var state__28622__auto__ = (function (){var statearr_36598 = f__28621__auto__.call(null);
(statearr_36598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto___36612);

return statearr_36598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(c__28620__auto___36612,timeout_ms_36611,temp__4657__auto___36610__$1,cb_uuid_36609,temp__4657__auto___36608,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36572,map__36572__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e36599){if((e36599 instanceof Error)){
var e = e36599;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",769,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36572,map__36572__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36572,map__36572__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

var temp__4657__auto___36619 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___36619)){
var cb_uuid_36620 = temp__4657__auto___36619;
var cb_fn_STAR__36621 = (function (){var or__6210__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_36620);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36600){if((e36600 instanceof Error)){
var __t = e36600;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e36600;

}
}}
})();
cb_fn_STAR__36621.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e36599;

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

var temp__4657__auto___36622 = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4657__auto___36622)){
var s_36623 = temp__4657__auto___36622;
s_36623.close((3000),"SENTE_RECONNECT");
} else {
}

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (function (){var or__6210__auto__ = taoensso.encore.oget.call(null,window,"WebSocket");
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
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

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",800,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
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
}catch (e36604){if((e36604 instanceof Error)){
var e = e36604;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",811,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket js/Error"], null);
});})(e,retry_fn,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);

return null;
} else {
throw e36604;

}
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__36605 = _QMARK_socket;
(G__36605["onerror"] = ((function (G__36605,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",820,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__36605,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",ws_ev], null);
});})(G__36605,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);
});})(G__36605,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__36605["onmessage"] = ((function (G__36605,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__36606 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__36606,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__36606,(1),null);
var or__6210__auto__ = (function (){var and__6198__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));
} else {
return and__6198__auto__;
}
})();
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
var temp__4655__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4655__auto__)){
var cb_uuid = temp__4655__auto__;
var temp__4655__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cb_fn = temp__4655__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",838,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__6210__auto__,ppstr,vec__36606,clj,_QMARK_cb_uuid,G__36605,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__6210__auto__,ppstr,vec__36606,clj,_QMARK_cb_uuid,G__36605,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
});})(G__36605,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__36605["onopen"] = ((function (G__36605,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__36605,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__36605,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__36605,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__36605["onclose"] = ((function (G__36605,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);
});})(G__36605,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

return G__36605;
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

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__36566){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__36566),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__36566),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__36566),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__36566),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__36566),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__36566),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__36566),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__36566),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__36566),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__36566),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__36566),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__36566),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__36566),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__36566),null,cljs.core.dissoc.call(null,G__36566,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)),null));
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
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6832__auto__,k__6833__auto__){
var self__ = this;
var this__6832__auto____$1 = this;
return cljs.core._lookup.call(null,this__6832__auto____$1,k__6833__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6834__auto__,k36625,else__6835__auto__){
var self__ = this;
var this__6834__auto____$1 = this;
var G__36627 = (((k36625 instanceof cljs.core.Keyword))?k36625.fqn:null);
switch (G__36627) {
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
return cljs.core.get.call(null,self__.__extmap,k36625,else__6835__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6846__auto__,writer__6847__auto__,opts__6848__auto__){
var self__ = this;
var this__6846__auto____$1 = this;
var pr_pair__6849__auto__ = ((function (this__6846__auto____$1){
return (function (keyval__6850__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,cljs.core.pr_writer,""," ","",opts__6848__auto__,keyval__6850__auto__);
});})(this__6846__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6847__auto__,pr_pair__6849__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__6848__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36624){
var self__ = this;
var G__36624__$1 = this;
return (new cljs.core.RecordIter((0),G__36624__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6830__auto__){
var self__ = this;
var this__6830__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6826__auto__){
var self__ = this;
var this__6826__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6836__auto__){
var self__ = this;
var this__6836__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6827__auto__){
var self__ = this;
var this__6827__auto____$1 = this;
var h__6645__auto__ = self__.__hash;
if(!((h__6645__auto__ == null))){
return h__6645__auto__;
} else {
var h__6645__auto____$1 = cljs.core.hash_imap.call(null,this__6827__auto____$1);
self__.__hash = h__6645__auto____$1;

return h__6645__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6828__auto__,other__6829__auto__){
var self__ = this;
var this__6828__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6198__auto__ = other__6829__auto__;
if(cljs.core.truth_(and__6198__auto__)){
var and__6198__auto____$1 = (this__6828__auto____$1.constructor === other__6829__auto__.constructor);
if(and__6198__auto____$1){
return cljs.core.equiv_map.call(null,this__6828__auto____$1,other__6829__auto__);
} else {
return and__6198__auto____$1;
}
} else {
return and__6198__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6841__auto__,k__6842__auto__){
var self__ = this;
var this__6841__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__6842__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6841__auto____$1),self__.__meta),k__6842__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6842__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6839__auto__,k__6840__auto__,G__36624){
var self__ = this;
var this__6839__auto____$1 = this;
var pred__36628 = cljs.core.keyword_identical_QMARK_;
var expr__36629 = k__6840__auto__;
if(cljs.core.truth_(pred__36628.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__36629))){
return (new taoensso.sente.ChAjaxSocket(G__36624,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36628.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__36629))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__36624,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36628.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__36629))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__36624,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36628.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__36629))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__36624,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36628.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__36629))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__36624,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36628.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__36629))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__36624,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36628.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__36629))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__36624,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36628.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__36629))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,G__36624,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36628.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__36629))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,G__36624,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36628.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__36629))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,G__36624,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36628.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__36629))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,G__36624,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6840__auto__,G__36624),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6844__auto__){
var self__ = this;
var this__6844__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6831__auto__,G__36624){
var self__ = this;
var this__6831__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,G__36624,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6837__auto__,entry__6838__auto__){
var self__ = this;
var this__6837__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6838__auto__)){
return cljs.core._assoc.call(null,this__6837__auto____$1,cljs.core._nth.call(null,entry__6838__auto__,(0)),cljs.core._nth.call(null,entry__6838__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6837__auto____$1,entry__6838__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__36631){
var self__ = this;
var map__36632 = p__36631;
var map__36632__$1 = ((((!((map__36632 == null)))?((((map__36632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36632):map__36632);
var opts = map__36632__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__36632__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__36632__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__36632__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",879,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__36632,map__36632__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__36632,map__36632__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
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
})()], null)),((function (csrf_token,_QMARK_cb_fn,chsk__$1,map__36632,map__36632__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function taoensso$sente$ajax_cb(p__36634){
var map__36638 = p__36634;
var map__36638__$1 = ((((!((map__36638 == null)))?((((map__36638.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36638.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36638):map__36638);
var _QMARK_error = cljs.core.get.call(null,map__36638__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__36638__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
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
var vec__36640 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__36640,(0),null);
var _ = cljs.core.nth.call(null,vec__36640,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",919,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__36640,resp_clj,_,map__36638,map__36638__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__36632,map__36632__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__36640,resp_clj,_,map__36638,map__36638__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__36632,map__36632__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(csrf_token,_QMARK_cb_fn,chsk__$1,map__36632,map__36632__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
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

var temp__4657__auto___36656 = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4657__auto___36656)){
var x_36657 = temp__4657__auto___36656;
x_36657.abort();
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",940,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(retry_id,chsk__$1))
,null)),null);

var retry_fn = ((function (retry_id,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",946,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
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
return (function taoensso$sente$poll_fn_$_ajax_cb(p__36648){
var map__36652 = p__36648;
var map__36652__$1 = ((((!((map__36652 == null)))?((((map__36652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36652):map__36652);
var _QMARK_error = cljs.core.get.call(null,map__36652__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__36652__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
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
var vec__36654 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__36654,(0),null);
var _ = cljs.core.nth.call(null,vec__36654,(1),null);
var or__6210__auto___36658 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__6210__auto___36658)){
} else {
var buffered_evs_36659 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs_36659);

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

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__6866__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__6866__auto__,writer__6867__auto__){
return cljs.core._write.call(null,writer__6867__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__36626){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__36626),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__36626),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__36626),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__36626),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__36626),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__36626),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__36626),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__36626),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__36626),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__36626),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__36626),null,cljs.core.dissoc.call(null,G__36626,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)),null));
});

taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,chsk_host,chsk_path,type){
var protocol__$1 = (function (){var G__36661 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36661) {
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
var args__7286__auto__ = [];
var len__7279__auto___36677 = arguments.length;
var i__7280__auto___36678 = (0);
while(true){
if((i__7280__auto___36678 < len__7279__auto___36677)){
args__7286__auto__.push((arguments[i__7280__auto___36678]));

var G__36679 = (i__7280__auto___36678 + (1));
i__7280__auto___36678 = G__36679;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__36666){
var vec__36667 = p__36666;
var map__36668 = cljs.core.nth.call(null,vec__36667,(0),null);
var map__36668__$1 = ((((!((map__36668 == null)))?((((map__36668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36668):map__36668);
var opts = map__36668__$1;
var ajax_opts = cljs.core.get.call(null,map__36668__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__36668__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var lp_timeout_ms = cljs.core.get.call(null,map__36668__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var client_id = cljs.core.get.call(null,map__36668__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__6210__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var packer = cljs.core.get.call(null,map__36668__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__36668__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__36668__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__36668__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__36668__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__36668__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__36668__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__36667,(1),null);
if(cljs.core.truth_((function (){var __x = type;
try{if(((function (__x,vec__36667,map__36668,map__36668__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (__x__$1){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),__x__$1);
});})(__x,vec__36667,map__36668,map__36668__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36670){if((e36670 instanceof Error)){
var __t = e36670;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",__x,__t,null);
} else {
throw e36670;

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
}catch (e36671){if((e36671 instanceof Error)){
var __t = e36671;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",__x,__t,null);
} else {
throw e36671;

}
}})())){
} else {
throw (new Error("Assert failed: (have? enc/nblank-str? client-id)"));
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",1055,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36667,map__36668,map__36668__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__36667,map__36668,map__36668__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",1057,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36667,map__36668,map__36668__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__36667,map__36668,map__36668__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var win_location = taoensso.encore.get_window_location.call(null);
var win_protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_location);
var host__$1 = (function (){var or__6210__auto__ = host;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var path__$1 = (function (){var or__6210__auto__ = path;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);
var ever_opened_QMARK__ = cljs.core.atom.call(null,false);
var state_STAR_ = ((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__36667,map__36668,map__36668__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__6210__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));
if(or__6210__auto__){
return or__6210__auto__;
} else {
return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})())){
return state;
} else {
cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__36667,map__36668,map__36668__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36667,map__36668,map__36668__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36667,map__36668,map__36668__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),(function (){var _LT_server_ch = new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs);
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36667,map__36668,map__36668__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36667,map__36668,map__36668__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
} else {
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36667,map__36668,map__36668__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__36672 = ev;
var id = cljs.core.nth.call(null,vec__36672,(0),null);
var _QMARK_data = cljs.core.nth.call(null,vec__36672,(1),null);
var __x_36680 = (function (){try{return cljs.core.namespace.call(null,id);
}catch (e36673){if((e36673 instanceof Error)){
var __t = e36673;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__36663#] (not= p1__36663# \"chsk\")) (namespace id))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e36673;

}
}})();
try{if(((function (__x_36680,vec__36672,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36667,map__36668,map__36668__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (p1__36663_SHARP_){
return cljs.core.not_EQ_.call(null,p1__36663_SHARP_,"chsk");
});})(__x_36680,vec__36672,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36667,map__36668,map__36668__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x_36680)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36674){if((e36674 instanceof Error)){
var __t_36681 = e36674;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__36663#] (not= p1__36663# \"chsk\")) (namespace id))",__x_36680,__t_36681,null);
} else {
throw e36674;

}
}
return ev;
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36667,map__36668,map__36668__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
}
})()], null));
var chsk = (function (){var or__6210__auto__ = (function (){var and__6198__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));
if(and__6198__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[client_id,ws_kalive_ms,packer__$1,private_chs,params,cljs.core.atom.call(null,(0)),backoff_ms_fn,cljs.core.atom.call(null,null),(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ws","ws",86841443));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
}
})(),cljs.core.atom.call(null,"pending"),cljs.core.atom.call(null,true),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__6198__auto__;
}
})();
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
var and__6198__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));
if(and__6198__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"state_","state_",957667102)],[cljs.core.atom.call(null,null),client_id,packer__$1,private_chs,params,backoff_ms_fn,(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
}
})(),cljs.core.atom.call(null,"pending"),ajax_opts,lp_timeout_ms,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__6198__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Failed to create channel socket"),cljs.core.str("\n"),cljs.core.str("chsk")].join('')))})());
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__36667,map__36668,map__36668__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__36676 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__36676,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__36676,(1),null);
var ev__$1 = vec__36676;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__36667,map__36668,map__36668__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq36664){
var G__36665 = cljs.core.first.call(null,seq36664);
var seq36664__$1 = cljs.core.next.call(null,seq36664);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36665,seq36664__$1);
});
taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__36888 = opts;
var map__36888__$1 = ((((!((map__36888 == null)))?((((map__36888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36888):map__36888);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36888__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36888__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__28620__auto___37094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28620__auto___37094,map__36888,map__36888__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (c__28620__auto___37094,map__36888,map__36888__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (state_37019){
var state_val_37020 = (state_37019[(1)]);
if((state_val_37020 === (7))){
var inst_37015 = (state_37019[(2)]);
var state_37019__$1 = state_37019;
var statearr_37021_37095 = state_37019__$1;
(statearr_37021_37095[(2)] = inst_37015);

(statearr_37021_37095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (20))){
var inst_36898 = (state_37019[(7)]);
var inst_36897 = (state_37019[(8)]);
var inst_36899 = (state_37019[(9)]);
var inst_36924 = (state_37019[(10)]);
var inst_36923 = (state_37019[(11)]);
var inst_36896 = (state_37019[(12)]);
var inst_36934 = (function (){var vec__36891 = inst_36896;
var v = inst_36897;
var p = inst_36898;
var stop_QMARK_ = inst_36899;
var map__36902 = inst_36923;
var event_msg = inst_36923;
var event = inst_36924;
return ((function (vec__36891,v,p,stop_QMARK_,map__36902,event_msg,event,inst_36898,inst_36897,inst_36899,inst_36924,inst_36923,inst_36896,state_val_37020,c__28620__auto___37094,map__36888,map__36888__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});
;})(vec__36891,v,p,stop_QMARK_,map__36902,event_msg,event,inst_36898,inst_36897,inst_36899,inst_36924,inst_36923,inst_36896,state_val_37020,c__28620__auto___37094,map__36888,map__36888__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_36935 = (new cljs.core.Delay(inst_36934,null));
var inst_36936 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",1176,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_36935,null);
var state_37019__$1 = state_37019;
var statearr_37022_37096 = state_37019__$1;
(statearr_37022_37096[(2)] = inst_36936);

(statearr_37022_37096[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (27))){
var inst_36923 = (state_37019[(11)]);
var inst_36941 = (state_37019[(2)]);
var inst_36942 = "(server-event-msg? event-msg)";
var inst_36943 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_36942,inst_36923,inst_36941,null);
var state_37019__$1 = state_37019;
var statearr_37023_37097 = state_37019__$1;
(statearr_37023_37097[(2)] = inst_36943);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37019__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (1))){
var state_37019__$1 = state_37019;
var statearr_37024_37098 = state_37019__$1;
(statearr_37024_37098[(2)] = null);

(statearr_37024_37098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (24))){
var state_37019__$1 = state_37019;
var statearr_37025_37099 = state_37019__$1;
(statearr_37025_37099[(2)] = null);

(statearr_37025_37099[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (39))){
var state_37019__$1 = state_37019;
var statearr_37026_37100 = state_37019__$1;
(statearr_37026_37100[(2)] = null);

(statearr_37026_37100[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (46))){
var inst_36988 = (state_37019[(13)]);
var inst_36996 = (state_37019[(2)]);
var inst_36997 = [inst_36996,null];
var inst_36998 = (new cljs.core.PersistentVector(null,2,(5),inst_36988,inst_36997,null));
var state_37019__$1 = state_37019;
var statearr_37027_37101 = state_37019__$1;
(statearr_37027_37101[(2)] = inst_36998);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37019__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (4))){
var inst_36898 = (state_37019[(7)]);
var inst_36899 = (state_37019[(9)]);
var inst_36896 = (state_37019[(12)]);
var inst_36896__$1 = (state_37019[(2)]);
var inst_36897 = cljs.core.nth.call(null,inst_36896__$1,(0),null);
var inst_36898__$1 = cljs.core.nth.call(null,inst_36896__$1,(1),null);
var inst_36899__$1 = taoensso.encore.kw_identical_QMARK_.call(null,inst_36898__$1,ch_ctrl);
var state_37019__$1 = (function (){var statearr_37028 = state_37019;
(statearr_37028[(7)] = inst_36898__$1);

(statearr_37028[(8)] = inst_36897);

(statearr_37028[(9)] = inst_36899__$1);

(statearr_37028[(12)] = inst_36896__$1);

return statearr_37028;
})();
if(cljs.core.truth_(inst_36899__$1)){
var statearr_37029_37102 = state_37019__$1;
(statearr_37029_37102[(1)] = (5));

} else {
var statearr_37030_37103 = state_37019__$1;
(statearr_37030_37103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (15))){
var inst_36897 = (state_37019[(8)]);
var state_37019__$1 = state_37019;
var statearr_37031_37104 = state_37019__$1;
(statearr_37031_37104[(2)] = inst_36897);

(statearr_37031_37104[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (48))){
var state_37019__$1 = state_37019;
var statearr_37032_37105 = state_37019__$1;
(statearr_37032_37105[(2)] = null);

(statearr_37032_37105[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (21))){
var state_37019__$1 = state_37019;
var statearr_37033_37106 = state_37019__$1;
(statearr_37033_37106[(2)] = null);

(statearr_37033_37106[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (31))){
var inst_36952 = (state_37019[(2)]);
var state_37019__$1 = state_37019;
var statearr_37034_37107 = state_37019__$1;
(statearr_37034_37107[(2)] = inst_36952);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37019__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (32))){
var inst_36969 = (state_37019[(2)]);
var state_37019__$1 = state_37019;
var statearr_37035_37108 = state_37019__$1;
(statearr_37035_37108[(2)] = inst_36969);

(statearr_37035_37108[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (40))){
var inst_37012 = (state_37019[(2)]);
var state_37019__$1 = (function (){var statearr_37036 = state_37019;
(statearr_37036[(14)] = inst_37012);

return statearr_37036;
})();
var statearr_37037_37109 = state_37019__$1;
(statearr_37037_37109[(2)] = null);

(statearr_37037_37109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (33))){
var inst_36923 = (state_37019[(11)]);
var inst_36956 = (state_37019[(2)]);
var inst_36957 = "(client-event-msg? event-msg)";
var inst_36958 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_36957,inst_36923,inst_36956,null);
var state_37019__$1 = state_37019;
var statearr_37038_37110 = state_37019__$1;
(statearr_37038_37110[(2)] = inst_36958);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37019__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (13))){
var inst_36915 = (state_37019[(2)]);
var state_37019__$1 = state_37019;
var statearr_37039_37111 = state_37019__$1;
(statearr_37039_37111[(2)] = inst_36915);

(statearr_37039_37111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (22))){
var inst_36939 = (state_37019[(2)]);
var state_37019__$1 = (function (){var statearr_37040 = state_37019;
(statearr_37040[(15)] = inst_36939);

return statearr_37040;
})();
if(cljs.core.truth_(server_QMARK_)){
var statearr_37041_37112 = state_37019__$1;
(statearr_37041_37112[(1)] = (23));

} else {
var statearr_37042_37113 = state_37019__$1;
(statearr_37042_37113[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (36))){
var inst_36965 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_37019__$1 = state_37019;
var statearr_37043_37114 = state_37019__$1;
(statearr_37043_37114[(2)] = inst_36965);

(statearr_37043_37114[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (41))){
var inst_37000 = (state_37019[(16)]);
var inst_37002 = (state_37019[(17)]);
var inst_37000__$1 = (state_37019[(2)]);
var inst_37001 = cljs.core.nth.call(null,inst_37000__$1,(0),null);
var inst_37002__$1 = cljs.core.nth.call(null,inst_37000__$1,(1),null);
var state_37019__$1 = (function (){var statearr_37044 = state_37019;
(statearr_37044[(16)] = inst_37000__$1);

(statearr_37044[(17)] = inst_37002__$1);

(statearr_37044[(18)] = inst_37001);

return statearr_37044;
})();
if(cljs.core.truth_(inst_37002__$1)){
var statearr_37045_37115 = state_37019__$1;
(statearr_37045_37115[(1)] = (47));

} else {
var statearr_37046_37116 = state_37019__$1;
(statearr_37046_37116[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (43))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37019,(42),Error,null,(41));
var inst_36988 = cljs.core.PersistentVector.EMPTY_NODE;
var state_37019__$1 = (function (){var statearr_37047 = state_37019;
(statearr_37047[(13)] = inst_36988);

return statearr_37047;
})();
if(cljs.core.truth_(error_handler)){
var statearr_37048_37117 = state_37019__$1;
(statearr_37048_37117[(1)] = (44));

} else {
var statearr_37049_37118 = state_37019__$1;
(statearr_37049_37118[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (29))){
var inst_36923 = (state_37019[(11)]);
var state_37019__$1 = state_37019;
var statearr_37050_37119 = state_37019__$1;
(statearr_37050_37119[(2)] = inst_36923);

(statearr_37050_37119[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (44))){
var inst_36978 = (state_37019[(19)]);
var inst_36923 = (state_37019[(11)]);
var inst_36990 = error_handler.call(null,inst_36978,inst_36923);
var state_37019__$1 = state_37019;
var statearr_37051_37120 = state_37019__$1;
(statearr_37051_37120[(2)] = inst_36990);

(statearr_37051_37120[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (6))){
var inst_36897 = (state_37019[(8)]);
var inst_36905 = (inst_36897 == null);
var inst_36906 = cljs.core.not.call(null,inst_36905);
var state_37019__$1 = state_37019;
if(inst_36906){
var statearr_37052_37121 = state_37019__$1;
(statearr_37052_37121[(1)] = (8));

} else {
var statearr_37053_37122 = state_37019__$1;
(statearr_37053_37122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (28))){
var inst_36923 = (state_37019[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37019,(27),Error,null,(26));
var inst_36947 = taoensso.sente.server_event_msg_QMARK_.call(null,inst_36923);
var state_37019__$1 = state_37019;
if(cljs.core.truth_(inst_36947)){
var statearr_37054_37123 = state_37019__$1;
(statearr_37054_37123[(1)] = (29));

} else {
var statearr_37055_37124 = state_37019__$1;
(statearr_37055_37124[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (25))){
var inst_36932 = (state_37019[(20)]);
var inst_36971 = (state_37019[(2)]);
var inst_36972 = event_msg_handler.call(null,inst_36971);
var inst_36973 = [inst_36972,null];
var inst_36974 = (new cljs.core.PersistentVector(null,2,(5),inst_36932,inst_36973,null));
var state_37019__$1 = state_37019;
var statearr_37056_37125 = state_37019__$1;
(statearr_37056_37125[(2)] = inst_36974);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37019__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (34))){
var inst_36923 = (state_37019[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37019,(33),Error,null,(32));
var inst_36962 = taoensso.sente.client_event_msg_QMARK_.call(null,inst_36923);
var state_37019__$1 = state_37019;
if(cljs.core.truth_(inst_36962)){
var statearr_37057_37126 = state_37019__$1;
(statearr_37057_37126[(1)] = (35));

} else {
var statearr_37058_37127 = state_37019__$1;
(statearr_37058_37127[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (17))){
var inst_36976 = (state_37019[(21)]);
var inst_36978 = (state_37019[(19)]);
var inst_36976__$1 = (state_37019[(2)]);
var inst_36977 = cljs.core.nth.call(null,inst_36976__$1,(0),null);
var inst_36978__$1 = cljs.core.nth.call(null,inst_36976__$1,(1),null);
var state_37019__$1 = (function (){var statearr_37059 = state_37019;
(statearr_37059[(21)] = inst_36976__$1);

(statearr_37059[(19)] = inst_36978__$1);

(statearr_37059[(22)] = inst_36977);

return statearr_37059;
})();
if(cljs.core.truth_(inst_36978__$1)){
var statearr_37060_37128 = state_37019__$1;
(statearr_37060_37128[(1)] = (38));

} else {
var statearr_37061_37129 = state_37019__$1;
(statearr_37061_37129[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (3))){
var inst_37017 = (state_37019[(2)]);
var state_37019__$1 = state_37019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37019__$1,inst_37017);
} else {
if((state_val_37020 === (12))){
var state_37019__$1 = state_37019;
var statearr_37062_37130 = state_37019__$1;
(statearr_37062_37130[(2)] = false);

(statearr_37062_37130[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (2))){
var inst_36892 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36893 = [ch_recv,ch_ctrl];
var inst_36894 = (new cljs.core.PersistentVector(null,2,(5),inst_36892,inst_36893,null));
var state_37019__$1 = state_37019;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37019__$1,(4),inst_36894);
} else {
if((state_val_37020 === (23))){
var state_37019__$1 = state_37019;
var statearr_37063_37131 = state_37019__$1;
(statearr_37063_37131[(2)] = null);

(statearr_37063_37131[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (47))){
var inst_36898 = (state_37019[(7)]);
var inst_36976 = (state_37019[(21)]);
var inst_36897 = (state_37019[(8)]);
var inst_36978 = (state_37019[(19)]);
var inst_37000 = (state_37019[(16)]);
var inst_37002 = (state_37019[(17)]);
var inst_36899 = (state_37019[(9)]);
var inst_37001 = (state_37019[(18)]);
var inst_36924 = (state_37019[(10)]);
var inst_36923 = (state_37019[(11)]);
var inst_36896 = (state_37019[(12)]);
var inst_37004 = (function (){var p = inst_36898;
var _QMARK_error = inst_36978;
var vec__36891 = inst_36896;
var vec__36980 = inst_37000;
var map__36902 = inst_36923;
var v = inst_36897;
var _ = inst_37001;
var e2 = inst_37002;
var vec__36903 = inst_36976;
var _QMARK_error2 = inst_37002;
var event_msg = inst_36923;
var e = inst_36978;
var temp__4657__auto__ = inst_37002;
var event = inst_36924;
var stop_QMARK_ = inst_36899;
return ((function (p,_QMARK_error,vec__36891,vec__36980,map__36902,v,_,e2,vec__36903,_QMARK_error2,event_msg,e,temp__4657__auto__,event,stop_QMARK_,inst_36898,inst_36976,inst_36897,inst_36978,inst_37000,inst_37002,inst_36899,inst_37001,inst_36924,inst_36923,inst_36896,state_val_37020,c__28620__auto___37094,map__36888,map__36888__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});
;})(p,_QMARK_error,vec__36891,vec__36980,map__36902,v,_,e2,vec__36903,_QMARK_error2,event_msg,e,temp__4657__auto__,event,stop_QMARK_,inst_36898,inst_36976,inst_36897,inst_36978,inst_37000,inst_37002,inst_36899,inst_37001,inst_36924,inst_36923,inst_36896,state_val_37020,c__28620__auto___37094,map__36888,map__36888__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_37005 = (new cljs.core.Delay(inst_37004,null));
var inst_37006 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",1189,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37005,null);
var state_37019__$1 = state_37019;
var statearr_37064_37132 = state_37019__$1;
(statearr_37064_37132[(2)] = inst_37006);

(statearr_37064_37132[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (35))){
var inst_36923 = (state_37019[(11)]);
var state_37019__$1 = state_37019;
var statearr_37065_37133 = state_37019__$1;
(statearr_37065_37133[(2)] = inst_36923);

(statearr_37065_37133[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37019,(18),Error,null,(17));
var inst_36932 = cljs.core.PersistentVector.EMPTY_NODE;
var state_37019__$1 = (function (){var statearr_37066 = state_37019;
(statearr_37066[(20)] = inst_36932);

return statearr_37066;
})();
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_37067_37134 = state_37019__$1;
(statearr_37067_37134[(1)] = (20));

} else {
var statearr_37068_37135 = state_37019__$1;
(statearr_37068_37135[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (11))){
var state_37019__$1 = state_37019;
var statearr_37069_37136 = state_37019__$1;
(statearr_37069_37136[(2)] = true);

(statearr_37069_37136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (9))){
var state_37019__$1 = state_37019;
var statearr_37070_37137 = state_37019__$1;
(statearr_37070_37137[(2)] = false);

(statearr_37070_37137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (5))){
var state_37019__$1 = state_37019;
var statearr_37071_37138 = state_37019__$1;
(statearr_37071_37138[(2)] = null);

(statearr_37071_37138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (14))){
var inst_36897 = (state_37019[(8)]);
var inst_36920 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36897);
var state_37019__$1 = state_37019;
var statearr_37072_37139 = state_37019__$1;
(statearr_37072_37139[(2)] = inst_36920);

(statearr_37072_37139[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (45))){
var inst_36898 = (state_37019[(7)]);
var inst_36976 = (state_37019[(21)]);
var inst_36897 = (state_37019[(8)]);
var inst_36978 = (state_37019[(19)]);
var inst_36977 = (state_37019[(22)]);
var inst_36899 = (state_37019[(9)]);
var inst_36924 = (state_37019[(10)]);
var inst_36923 = (state_37019[(11)]);
var inst_36896 = (state_37019[(12)]);
var inst_36992 = (function (){var p = inst_36898;
var _QMARK_error = inst_36978;
var vec__36891 = inst_36896;
var map__36902 = inst_36923;
var v = inst_36897;
var temp__4655__auto__ = error_handler;
var _ = inst_36977;
var vec__36903 = inst_36976;
var event_msg = inst_36923;
var e = inst_36978;
var temp__4657__auto__ = inst_36978;
var event = inst_36924;
var stop_QMARK_ = inst_36899;
return ((function (p,_QMARK_error,vec__36891,map__36902,v,temp__4655__auto__,_,vec__36903,event_msg,e,temp__4657__auto__,event,stop_QMARK_,inst_36898,inst_36976,inst_36897,inst_36978,inst_36977,inst_36899,inst_36924,inst_36923,inst_36896,state_val_37020,c__28620__auto___37094,map__36888,map__36888__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk router `event-msg-handler` error: %s",event], null);
});
;})(p,_QMARK_error,vec__36891,map__36902,v,temp__4655__auto__,_,vec__36903,event_msg,e,temp__4657__auto__,event,stop_QMARK_,inst_36898,inst_36976,inst_36897,inst_36978,inst_36977,inst_36899,inst_36924,inst_36923,inst_36896,state_val_37020,c__28620__auto___37094,map__36888,map__36888__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_36993 = (new cljs.core.Delay(inst_36992,null));
var inst_36994 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/8r/y2d3thln6s3fyrl_s6vknb440000gn/T/form-init7429342688463193409.clj",1187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_36993,null);
var state_37019__$1 = state_37019;
var statearr_37073_37140 = state_37019__$1;
(statearr_37073_37140[(2)] = inst_36994);

(statearr_37073_37140[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (26))){
var inst_36954 = (state_37019[(2)]);
var state_37019__$1 = state_37019;
var statearr_37074_37141 = state_37019__$1;
(statearr_37074_37141[(2)] = inst_36954);

(statearr_37074_37141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (16))){
var inst_36923 = (state_37019[(11)]);
var inst_36923__$1 = (state_37019[(2)]);
var inst_36924 = cljs.core.get.call(null,inst_36923__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_37019__$1 = (function (){var statearr_37075 = state_37019;
(statearr_37075[(10)] = inst_36924);

(statearr_37075[(11)] = inst_36923__$1);

return statearr_37075;
})();
var statearr_37076_37142 = state_37019__$1;
(statearr_37076_37142[(2)] = null);

(statearr_37076_37142[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (38))){
var state_37019__$1 = state_37019;
var statearr_37077_37143 = state_37019__$1;
(statearr_37077_37143[(2)] = null);

(statearr_37077_37143[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (30))){
var inst_36950 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_37019__$1 = state_37019;
var statearr_37078_37144 = state_37019__$1;
(statearr_37078_37144[(2)] = inst_36950);

(statearr_37078_37144[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (10))){
var inst_36918 = (state_37019[(2)]);
var state_37019__$1 = state_37019;
if(cljs.core.truth_(inst_36918)){
var statearr_37079_37145 = state_37019__$1;
(statearr_37079_37145[(1)] = (14));

} else {
var statearr_37080_37146 = state_37019__$1;
(statearr_37080_37146[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (18))){
var inst_36925 = (state_37019[(2)]);
var inst_36926 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36927 = [null,inst_36925];
var inst_36928 = (new cljs.core.PersistentVector(null,2,(5),inst_36926,inst_36927,null));
var state_37019__$1 = state_37019;
var statearr_37081_37147 = state_37019__$1;
(statearr_37081_37147[(2)] = inst_36928);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37019__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (42))){
var inst_36981 = (state_37019[(2)]);
var inst_36982 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36983 = [null,inst_36981];
var inst_36984 = (new cljs.core.PersistentVector(null,2,(5),inst_36982,inst_36983,null));
var state_37019__$1 = state_37019;
var statearr_37082_37148 = state_37019__$1;
(statearr_37082_37148[(2)] = inst_36984);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37019__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (37))){
var inst_36967 = (state_37019[(2)]);
var state_37019__$1 = state_37019;
var statearr_37083_37149 = state_37019__$1;
(statearr_37083_37149[(2)] = inst_36967);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37019__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (8))){
var inst_36897 = (state_37019[(8)]);
var inst_36908 = inst_36897.cljs$lang$protocol_mask$partition0$;
var inst_36909 = (inst_36908 & (64));
var inst_36910 = inst_36897.cljs$core$ISeq$;
var inst_36911 = (inst_36909) || (inst_36910);
var state_37019__$1 = state_37019;
if(cljs.core.truth_(inst_36911)){
var statearr_37084_37150 = state_37019__$1;
(statearr_37084_37150[(1)] = (11));

} else {
var statearr_37085_37151 = state_37019__$1;
(statearr_37085_37151[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (49))){
var inst_37009 = (state_37019[(2)]);
var state_37019__$1 = state_37019;
var statearr_37086_37152 = state_37019__$1;
(statearr_37086_37152[(2)] = inst_37009);

(statearr_37086_37152[(1)] = (40));


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
});})(c__28620__auto___37094,map__36888,map__36888__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
;
return ((function (switch__28508__auto__,c__28620__auto___37094,map__36888,map__36888__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__28509__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__28509__auto____0 = (function (){
var statearr_37090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37090[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__28509__auto__);

(statearr_37090[(1)] = (1));

return statearr_37090;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__28509__auto____1 = (function (state_37019){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_37019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e37091){if((e37091 instanceof Object)){
var ex__28512__auto__ = e37091;
var statearr_37092_37153 = state_37019;
(statearr_37092_37153[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37154 = state_37019;
state_37019 = G__37154;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__28509__auto__ = function(state_37019){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__28509__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__28509__auto____1.call(this,state_37019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__28509__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__28509__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__28509__auto__;
})()
;})(switch__28508__auto__,c__28620__auto___37094,map__36888,map__36888__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var state__28622__auto__ = (function (){var statearr_37093 = f__28621__auto__.call(null);
(statearr_37093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto___37094);

return statearr_37093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(c__28620__auto___37094,map__36888,map__36888__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
);


return ((function (map__36888,map__36888__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__36888,map__36888__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
});
/**
 * Creates a go-loop to call `(event-msg-handler <server-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__7286__auto__ = [];
var len__7279__auto___37162 = arguments.length;
var i__7280__auto___37163 = (0);
while(true){
if((i__7280__auto___37163 < len__7279__auto___37162)){
args__7286__auto__.push((arguments[i__7280__auto___37163]));

var G__37164 = (i__7280__auto___37163 + (1));
i__7280__auto___37163 = G__37164;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((2) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7287__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__37158){
var vec__37159 = p__37158;
var map__37160 = cljs.core.nth.call(null,vec__37159,(0),null);
var map__37160__$1 = ((((!((map__37160 == null)))?((((map__37160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37160):map__37160);
var opts = map__37160__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__37160__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__37160__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq37155){
var G__37156 = cljs.core.first.call(null,seq37155);
var seq37155__$1 = cljs.core.next.call(null,seq37155);
var G__37157 = cljs.core.first.call(null,seq37155__$1);
var seq37155__$2 = cljs.core.next.call(null,seq37155__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37156,G__37157,seq37155__$2);
});
/**
 * Creates a go-loop to call `(event-msg-handler <client-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__7286__auto__ = [];
var len__7279__auto___37172 = arguments.length;
var i__7280__auto___37173 = (0);
while(true){
if((i__7280__auto___37173 < len__7279__auto___37172)){
args__7286__auto__.push((arguments[i__7280__auto___37173]));

var G__37174 = (i__7280__auto___37173 + (1));
i__7280__auto___37173 = G__37174;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((2) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7287__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__37168){
var vec__37169 = p__37168;
var map__37170 = cljs.core.nth.call(null,vec__37169,(0),null);
var map__37170__$1 = ((((!((map__37170 == null)))?((((map__37170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37170):map__37170);
var opts = map__37170__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__37170__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__37170__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq37165){
var G__37166 = cljs.core.first.call(null,seq37165);
var seq37165__$1 = cljs.core.next.call(null,seq37165);
var G__37167 = cljs.core.first.call(null,seq37165__$1);
var seq37165__$2 = cljs.core.next.call(null,seq37165__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37166,G__37167,seq37165__$2);
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
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__37175,websocket_QMARK_){
var map__37178 = p__37175;
var map__37178__$1 = ((((!((map__37178 == null)))?((((map__37178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37178):map__37178);
var location = map__37178__$1;
var adjusted_protocol = cljs.core.get.call(null,map__37178__$1,new cljs.core.Keyword(null,"adjusted-protocol","adjusted-protocol",37431492));
var host = cljs.core.get.call(null,map__37178__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__37178__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
return [cljs.core.str(adjusted_protocol),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__6210__auto__ = path;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return pathname;
}
})())].join('');
});

// Compiled by ClojureScript 1.8.34 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args35694 = [];
var len__19507__auto___35700 = arguments.length;
var i__19508__auto___35701 = (0);
while(true){
if((i__19508__auto___35701 < len__19507__auto___35700)){
args35694.push((arguments[i__19508__auto___35701]));

var G__35702 = (i__19508__auto___35701 + (1));
i__19508__auto___35701 = G__35702;
continue;
} else {
}
break;
}

var G__35696 = args35694.length;
switch (G__35696) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35694.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async35697 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35697 = (function (f,blockable,meta35698){
this.f = f;
this.blockable = blockable;
this.meta35698 = meta35698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35699,meta35698__$1){
var self__ = this;
var _35699__$1 = this;
return (new cljs.core.async.t_cljs$core$async35697(self__.f,self__.blockable,meta35698__$1));
});

cljs.core.async.t_cljs$core$async35697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35699){
var self__ = this;
var _35699__$1 = this;
return self__.meta35698;
});

cljs.core.async.t_cljs$core$async35697.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35697.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async35697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async35697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35698","meta35698",1259502358,null)], null);
});

cljs.core.async.t_cljs$core$async35697.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35697";

cljs.core.async.t_cljs$core$async35697.cljs$lang$ctorPrWriter = (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"cljs.core.async/t_cljs$core$async35697");
});

cljs.core.async.__GT_t_cljs$core$async35697 = (function cljs$core$async$__GT_t_cljs$core$async35697(f__$1,blockable__$1,meta35698){
return (new cljs.core.async.t_cljs$core$async35697(f__$1,blockable__$1,meta35698));
});

}

return (new cljs.core.async.t_cljs$core$async35697(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args35706 = [];
var len__19507__auto___35709 = arguments.length;
var i__19508__auto___35710 = (0);
while(true){
if((i__19508__auto___35710 < len__19507__auto___35709)){
args35706.push((arguments[i__19508__auto___35710]));

var G__35711 = (i__19508__auto___35710 + (1));
i__19508__auto___35710 = G__35711;
continue;
} else {
}
break;
}

var G__35708 = args35706.length;
switch (G__35708) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35706.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args35713 = [];
var len__19507__auto___35716 = arguments.length;
var i__19508__auto___35717 = (0);
while(true){
if((i__19508__auto___35717 < len__19507__auto___35716)){
args35713.push((arguments[i__19508__auto___35717]));

var G__35718 = (i__19508__auto___35717 + (1));
i__19508__auto___35717 = G__35718;
continue;
} else {
}
break;
}

var G__35715 = args35713.length;
switch (G__35715) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35713.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args35720 = [];
var len__19507__auto___35723 = arguments.length;
var i__19508__auto___35724 = (0);
while(true){
if((i__19508__auto___35724 < len__19507__auto___35723)){
args35720.push((arguments[i__19508__auto___35724]));

var G__35725 = (i__19508__auto___35724 + (1));
i__19508__auto___35724 = G__35725;
continue;
} else {
}
break;
}

var G__35722 = args35720.length;
switch (G__35722) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35720.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35727 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35727);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35727,ret){
return (function (){
return fn1.call(null,val_35727);
});})(val_35727,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args35728 = [];
var len__19507__auto___35731 = arguments.length;
var i__19508__auto___35732 = (0);
while(true){
if((i__19508__auto___35732 < len__19507__auto___35731)){
args35728.push((arguments[i__19508__auto___35732]));

var G__35733 = (i__19508__auto___35732 + (1));
i__19508__auto___35732 = G__35733;
continue;
} else {
}
break;
}

var G__35730 = args35728.length;
switch (G__35730) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35728.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19352__auto___35735 = n;
var x_35736 = (0);
while(true){
if((x_35736 < n__19352__auto___35735)){
(a[x_35736] = (0));

var G__35737 = (x_35736 + (1));
x_35736 = G__35737;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__35738 = (i + (1));
i = G__35738;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async35742 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35742 = (function (alt_flag,flag,meta35743){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta35743 = meta35743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35744,meta35743__$1){
var self__ = this;
var _35744__$1 = this;
return (new cljs.core.async.t_cljs$core$async35742(self__.alt_flag,self__.flag,meta35743__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async35742.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35744){
var self__ = this;
var _35744__$1 = this;
return self__.meta35743;
});})(flag))
;

cljs.core.async.t_cljs$core$async35742.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35742.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async35742.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35742.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35742.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35743","meta35743",946289196,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async35742.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35742.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35742";

cljs.core.async.t_cljs$core$async35742.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"cljs.core.async/t_cljs$core$async35742");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async35742 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35742(alt_flag__$1,flag__$1,meta35743){
return (new cljs.core.async.t_cljs$core$async35742(alt_flag__$1,flag__$1,meta35743));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async35742(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async35748 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35748 = (function (alt_handler,flag,cb,meta35749){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta35749 = meta35749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35750,meta35749__$1){
var self__ = this;
var _35750__$1 = this;
return (new cljs.core.async.t_cljs$core$async35748(self__.alt_handler,self__.flag,self__.cb,meta35749__$1));
});

cljs.core.async.t_cljs$core$async35748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35750){
var self__ = this;
var _35750__$1 = this;
return self__.meta35749;
});

cljs.core.async.t_cljs$core$async35748.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35748.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async35748.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35748.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async35748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35749","meta35749",1078769235,null)], null);
});

cljs.core.async.t_cljs$core$async35748.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35748";

cljs.core.async.t_cljs$core$async35748.cljs$lang$ctorPrWriter = (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"cljs.core.async/t_cljs$core$async35748");
});

cljs.core.async.__GT_t_cljs$core$async35748 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35748(alt_handler__$1,flag__$1,cb__$1,meta35749){
return (new cljs.core.async.t_cljs$core$async35748(alt_handler__$1,flag__$1,cb__$1,meta35749));
});

}

return (new cljs.core.async.t_cljs$core$async35748(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35751_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35751_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35752_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35752_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18438__auto__ = wport;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35753 = (i + (1));
i = G__35753;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18438__auto__ = ret;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18426__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18426__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18426__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19514__auto__ = [];
var len__19507__auto___35759 = arguments.length;
var i__19508__auto___35760 = (0);
while(true){
if((i__19508__auto___35760 < len__19507__auto___35759)){
args__19514__auto__.push((arguments[i__19508__auto___35760]));

var G__35761 = (i__19508__auto___35760 + (1));
i__19508__auto___35760 = G__35761;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35756){
var map__35757 = p__35756;
var map__35757__$1 = ((((!((map__35757 == null)))?((((map__35757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35757):map__35757);
var opts = map__35757__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35754){
var G__35755 = cljs.core.first.call(null,seq35754);
var seq35754__$1 = cljs.core.next.call(null,seq35754);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35755,seq35754__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args35762 = [];
var len__19507__auto___35812 = arguments.length;
var i__19508__auto___35813 = (0);
while(true){
if((i__19508__auto___35813 < len__19507__auto___35812)){
args35762.push((arguments[i__19508__auto___35813]));

var G__35814 = (i__19508__auto___35813 + (1));
i__19508__auto___35813 = G__35814;
continue;
} else {
}
break;
}

var G__35764 = args35762.length;
switch (G__35764) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35762.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21993__auto___35816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto___35816){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto___35816){
return (function (state_35788){
var state_val_35789 = (state_35788[(1)]);
if((state_val_35789 === (7))){
var inst_35784 = (state_35788[(2)]);
var state_35788__$1 = state_35788;
var statearr_35790_35817 = state_35788__$1;
(statearr_35790_35817[(2)] = inst_35784);

(statearr_35790_35817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (1))){
var state_35788__$1 = state_35788;
var statearr_35791_35818 = state_35788__$1;
(statearr_35791_35818[(2)] = null);

(statearr_35791_35818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (4))){
var inst_35767 = (state_35788[(7)]);
var inst_35767__$1 = (state_35788[(2)]);
var inst_35768 = (inst_35767__$1 == null);
var state_35788__$1 = (function (){var statearr_35792 = state_35788;
(statearr_35792[(7)] = inst_35767__$1);

return statearr_35792;
})();
if(cljs.core.truth_(inst_35768)){
var statearr_35793_35819 = state_35788__$1;
(statearr_35793_35819[(1)] = (5));

} else {
var statearr_35794_35820 = state_35788__$1;
(statearr_35794_35820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (13))){
var state_35788__$1 = state_35788;
var statearr_35795_35821 = state_35788__$1;
(statearr_35795_35821[(2)] = null);

(statearr_35795_35821[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (6))){
var inst_35767 = (state_35788[(7)]);
var state_35788__$1 = state_35788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35788__$1,(11),to,inst_35767);
} else {
if((state_val_35789 === (3))){
var inst_35786 = (state_35788[(2)]);
var state_35788__$1 = state_35788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35788__$1,inst_35786);
} else {
if((state_val_35789 === (12))){
var state_35788__$1 = state_35788;
var statearr_35796_35822 = state_35788__$1;
(statearr_35796_35822[(2)] = null);

(statearr_35796_35822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (2))){
var state_35788__$1 = state_35788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35788__$1,(4),from);
} else {
if((state_val_35789 === (11))){
var inst_35777 = (state_35788[(2)]);
var state_35788__$1 = state_35788;
if(cljs.core.truth_(inst_35777)){
var statearr_35797_35823 = state_35788__$1;
(statearr_35797_35823[(1)] = (12));

} else {
var statearr_35798_35824 = state_35788__$1;
(statearr_35798_35824[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (9))){
var state_35788__$1 = state_35788;
var statearr_35799_35825 = state_35788__$1;
(statearr_35799_35825[(2)] = null);

(statearr_35799_35825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (5))){
var state_35788__$1 = state_35788;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35800_35826 = state_35788__$1;
(statearr_35800_35826[(1)] = (8));

} else {
var statearr_35801_35827 = state_35788__$1;
(statearr_35801_35827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (14))){
var inst_35782 = (state_35788[(2)]);
var state_35788__$1 = state_35788;
var statearr_35802_35828 = state_35788__$1;
(statearr_35802_35828[(2)] = inst_35782);

(statearr_35802_35828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (10))){
var inst_35774 = (state_35788[(2)]);
var state_35788__$1 = state_35788;
var statearr_35803_35829 = state_35788__$1;
(statearr_35803_35829[(2)] = inst_35774);

(statearr_35803_35829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (8))){
var inst_35771 = cljs.core.async.close_BANG_.call(null,to);
var state_35788__$1 = state_35788;
var statearr_35804_35830 = state_35788__$1;
(statearr_35804_35830[(2)] = inst_35771);

(statearr_35804_35830[(1)] = (10));


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
});})(c__21993__auto___35816))
;
return ((function (switch__21881__auto__,c__21993__auto___35816){
return (function() {
var cljs$core$async$state_machine__21882__auto__ = null;
var cljs$core$async$state_machine__21882__auto____0 = (function (){
var statearr_35808 = [null,null,null,null,null,null,null,null];
(statearr_35808[(0)] = cljs$core$async$state_machine__21882__auto__);

(statearr_35808[(1)] = (1));

return statearr_35808;
});
var cljs$core$async$state_machine__21882__auto____1 = (function (state_35788){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_35788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e35809){if((e35809 instanceof Object)){
var ex__21885__auto__ = e35809;
var statearr_35810_35831 = state_35788;
(statearr_35810_35831[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35832 = state_35788;
state_35788 = G__35832;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
cljs$core$async$state_machine__21882__auto__ = function(state_35788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21882__auto____1.call(this,state_35788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21882__auto____0;
cljs$core$async$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21882__auto____1;
return cljs$core$async$state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto___35816))
})();
var state__21995__auto__ = (function (){var statearr_35811 = f__21994__auto__.call(null);
(statearr_35811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto___35816);

return statearr_35811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto___35816))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__36016){
var vec__36017 = p__36016;
var v = cljs.core.nth.call(null,vec__36017,(0),null);
var p = cljs.core.nth.call(null,vec__36017,(1),null);
var job = vec__36017;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21993__auto___36199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto___36199,res,vec__36017,v,p,job,jobs,results){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto___36199,res,vec__36017,v,p,job,jobs,results){
return (function (state_36022){
var state_val_36023 = (state_36022[(1)]);
if((state_val_36023 === (1))){
var state_36022__$1 = state_36022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36022__$1,(2),res,v);
} else {
if((state_val_36023 === (2))){
var inst_36019 = (state_36022[(2)]);
var inst_36020 = cljs.core.async.close_BANG_.call(null,res);
var state_36022__$1 = (function (){var statearr_36024 = state_36022;
(statearr_36024[(7)] = inst_36019);

return statearr_36024;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36022__$1,inst_36020);
} else {
return null;
}
}
});})(c__21993__auto___36199,res,vec__36017,v,p,job,jobs,results))
;
return ((function (switch__21881__auto__,c__21993__auto___36199,res,vec__36017,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____0 = (function (){
var statearr_36028 = [null,null,null,null,null,null,null,null];
(statearr_36028[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__);

(statearr_36028[(1)] = (1));

return statearr_36028;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____1 = (function (state_36022){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_36022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e36029){if((e36029 instanceof Object)){
var ex__21885__auto__ = e36029;
var statearr_36030_36200 = state_36022;
(statearr_36030_36200[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36201 = state_36022;
state_36022 = G__36201;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__ = function(state_36022){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____1.call(this,state_36022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto___36199,res,vec__36017,v,p,job,jobs,results))
})();
var state__21995__auto__ = (function (){var statearr_36031 = f__21994__auto__.call(null);
(statearr_36031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto___36199);

return statearr_36031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto___36199,res,vec__36017,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36032){
var vec__36033 = p__36032;
var v = cljs.core.nth.call(null,vec__36033,(0),null);
var p = cljs.core.nth.call(null,vec__36033,(1),null);
var job = vec__36033;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19352__auto___36202 = n;
var __36203 = (0);
while(true){
if((__36203 < n__19352__auto___36202)){
var G__36034_36204 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36034_36204) {
case "compute":
var c__21993__auto___36206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36203,c__21993__auto___36206,G__36034_36204,n__19352__auto___36202,jobs,results,process,async){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (__36203,c__21993__auto___36206,G__36034_36204,n__19352__auto___36202,jobs,results,process,async){
return (function (state_36047){
var state_val_36048 = (state_36047[(1)]);
if((state_val_36048 === (1))){
var state_36047__$1 = state_36047;
var statearr_36049_36207 = state_36047__$1;
(statearr_36049_36207[(2)] = null);

(statearr_36049_36207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36048 === (2))){
var state_36047__$1 = state_36047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36047__$1,(4),jobs);
} else {
if((state_val_36048 === (3))){
var inst_36045 = (state_36047[(2)]);
var state_36047__$1 = state_36047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36047__$1,inst_36045);
} else {
if((state_val_36048 === (4))){
var inst_36037 = (state_36047[(2)]);
var inst_36038 = process.call(null,inst_36037);
var state_36047__$1 = state_36047;
if(cljs.core.truth_(inst_36038)){
var statearr_36050_36208 = state_36047__$1;
(statearr_36050_36208[(1)] = (5));

} else {
var statearr_36051_36209 = state_36047__$1;
(statearr_36051_36209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36048 === (5))){
var state_36047__$1 = state_36047;
var statearr_36052_36210 = state_36047__$1;
(statearr_36052_36210[(2)] = null);

(statearr_36052_36210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36048 === (6))){
var state_36047__$1 = state_36047;
var statearr_36053_36211 = state_36047__$1;
(statearr_36053_36211[(2)] = null);

(statearr_36053_36211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36048 === (7))){
var inst_36043 = (state_36047[(2)]);
var state_36047__$1 = state_36047;
var statearr_36054_36212 = state_36047__$1;
(statearr_36054_36212[(2)] = inst_36043);

(statearr_36054_36212[(1)] = (3));


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
});})(__36203,c__21993__auto___36206,G__36034_36204,n__19352__auto___36202,jobs,results,process,async))
;
return ((function (__36203,switch__21881__auto__,c__21993__auto___36206,G__36034_36204,n__19352__auto___36202,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____0 = (function (){
var statearr_36058 = [null,null,null,null,null,null,null];
(statearr_36058[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__);

(statearr_36058[(1)] = (1));

return statearr_36058;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____1 = (function (state_36047){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_36047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e36059){if((e36059 instanceof Object)){
var ex__21885__auto__ = e36059;
var statearr_36060_36213 = state_36047;
(statearr_36060_36213[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36214 = state_36047;
state_36047 = G__36214;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__ = function(state_36047){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____1.call(this,state_36047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__;
})()
;})(__36203,switch__21881__auto__,c__21993__auto___36206,G__36034_36204,n__19352__auto___36202,jobs,results,process,async))
})();
var state__21995__auto__ = (function (){var statearr_36061 = f__21994__auto__.call(null);
(statearr_36061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto___36206);

return statearr_36061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(__36203,c__21993__auto___36206,G__36034_36204,n__19352__auto___36202,jobs,results,process,async))
);


break;
case "async":
var c__21993__auto___36215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36203,c__21993__auto___36215,G__36034_36204,n__19352__auto___36202,jobs,results,process,async){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (__36203,c__21993__auto___36215,G__36034_36204,n__19352__auto___36202,jobs,results,process,async){
return (function (state_36074){
var state_val_36075 = (state_36074[(1)]);
if((state_val_36075 === (1))){
var state_36074__$1 = state_36074;
var statearr_36076_36216 = state_36074__$1;
(statearr_36076_36216[(2)] = null);

(statearr_36076_36216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36075 === (2))){
var state_36074__$1 = state_36074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36074__$1,(4),jobs);
} else {
if((state_val_36075 === (3))){
var inst_36072 = (state_36074[(2)]);
var state_36074__$1 = state_36074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36074__$1,inst_36072);
} else {
if((state_val_36075 === (4))){
var inst_36064 = (state_36074[(2)]);
var inst_36065 = async.call(null,inst_36064);
var state_36074__$1 = state_36074;
if(cljs.core.truth_(inst_36065)){
var statearr_36077_36217 = state_36074__$1;
(statearr_36077_36217[(1)] = (5));

} else {
var statearr_36078_36218 = state_36074__$1;
(statearr_36078_36218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36075 === (5))){
var state_36074__$1 = state_36074;
var statearr_36079_36219 = state_36074__$1;
(statearr_36079_36219[(2)] = null);

(statearr_36079_36219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36075 === (6))){
var state_36074__$1 = state_36074;
var statearr_36080_36220 = state_36074__$1;
(statearr_36080_36220[(2)] = null);

(statearr_36080_36220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36075 === (7))){
var inst_36070 = (state_36074[(2)]);
var state_36074__$1 = state_36074;
var statearr_36081_36221 = state_36074__$1;
(statearr_36081_36221[(2)] = inst_36070);

(statearr_36081_36221[(1)] = (3));


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
});})(__36203,c__21993__auto___36215,G__36034_36204,n__19352__auto___36202,jobs,results,process,async))
;
return ((function (__36203,switch__21881__auto__,c__21993__auto___36215,G__36034_36204,n__19352__auto___36202,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____0 = (function (){
var statearr_36085 = [null,null,null,null,null,null,null];
(statearr_36085[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__);

(statearr_36085[(1)] = (1));

return statearr_36085;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____1 = (function (state_36074){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_36074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e36086){if((e36086 instanceof Object)){
var ex__21885__auto__ = e36086;
var statearr_36087_36222 = state_36074;
(statearr_36087_36222[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36223 = state_36074;
state_36074 = G__36223;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__ = function(state_36074){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____1.call(this,state_36074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__;
})()
;})(__36203,switch__21881__auto__,c__21993__auto___36215,G__36034_36204,n__19352__auto___36202,jobs,results,process,async))
})();
var state__21995__auto__ = (function (){var statearr_36088 = f__21994__auto__.call(null);
(statearr_36088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto___36215);

return statearr_36088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(__36203,c__21993__auto___36215,G__36034_36204,n__19352__auto___36202,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__36224 = (__36203 + (1));
__36203 = G__36224;
continue;
} else {
}
break;
}

var c__21993__auto___36225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto___36225,jobs,results,process,async){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto___36225,jobs,results,process,async){
return (function (state_36110){
var state_val_36111 = (state_36110[(1)]);
if((state_val_36111 === (1))){
var state_36110__$1 = state_36110;
var statearr_36112_36226 = state_36110__$1;
(statearr_36112_36226[(2)] = null);

(statearr_36112_36226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36111 === (2))){
var state_36110__$1 = state_36110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36110__$1,(4),from);
} else {
if((state_val_36111 === (3))){
var inst_36108 = (state_36110[(2)]);
var state_36110__$1 = state_36110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36110__$1,inst_36108);
} else {
if((state_val_36111 === (4))){
var inst_36091 = (state_36110[(7)]);
var inst_36091__$1 = (state_36110[(2)]);
var inst_36092 = (inst_36091__$1 == null);
var state_36110__$1 = (function (){var statearr_36113 = state_36110;
(statearr_36113[(7)] = inst_36091__$1);

return statearr_36113;
})();
if(cljs.core.truth_(inst_36092)){
var statearr_36114_36227 = state_36110__$1;
(statearr_36114_36227[(1)] = (5));

} else {
var statearr_36115_36228 = state_36110__$1;
(statearr_36115_36228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36111 === (5))){
var inst_36094 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36110__$1 = state_36110;
var statearr_36116_36229 = state_36110__$1;
(statearr_36116_36229[(2)] = inst_36094);

(statearr_36116_36229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36111 === (6))){
var inst_36091 = (state_36110[(7)]);
var inst_36096 = (state_36110[(8)]);
var inst_36096__$1 = cljs.core.async.chan.call(null,(1));
var inst_36097 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36098 = [inst_36091,inst_36096__$1];
var inst_36099 = (new cljs.core.PersistentVector(null,2,(5),inst_36097,inst_36098,null));
var state_36110__$1 = (function (){var statearr_36117 = state_36110;
(statearr_36117[(8)] = inst_36096__$1);

return statearr_36117;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36110__$1,(8),jobs,inst_36099);
} else {
if((state_val_36111 === (7))){
var inst_36106 = (state_36110[(2)]);
var state_36110__$1 = state_36110;
var statearr_36118_36230 = state_36110__$1;
(statearr_36118_36230[(2)] = inst_36106);

(statearr_36118_36230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36111 === (8))){
var inst_36096 = (state_36110[(8)]);
var inst_36101 = (state_36110[(2)]);
var state_36110__$1 = (function (){var statearr_36119 = state_36110;
(statearr_36119[(9)] = inst_36101);

return statearr_36119;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36110__$1,(9),results,inst_36096);
} else {
if((state_val_36111 === (9))){
var inst_36103 = (state_36110[(2)]);
var state_36110__$1 = (function (){var statearr_36120 = state_36110;
(statearr_36120[(10)] = inst_36103);

return statearr_36120;
})();
var statearr_36121_36231 = state_36110__$1;
(statearr_36121_36231[(2)] = null);

(statearr_36121_36231[(1)] = (2));


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
});})(c__21993__auto___36225,jobs,results,process,async))
;
return ((function (switch__21881__auto__,c__21993__auto___36225,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____0 = (function (){
var statearr_36125 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36125[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__);

(statearr_36125[(1)] = (1));

return statearr_36125;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____1 = (function (state_36110){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_36110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e36126){if((e36126 instanceof Object)){
var ex__21885__auto__ = e36126;
var statearr_36127_36232 = state_36110;
(statearr_36127_36232[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36233 = state_36110;
state_36110 = G__36233;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__ = function(state_36110){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____1.call(this,state_36110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto___36225,jobs,results,process,async))
})();
var state__21995__auto__ = (function (){var statearr_36128 = f__21994__auto__.call(null);
(statearr_36128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto___36225);

return statearr_36128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto___36225,jobs,results,process,async))
);


var c__21993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto__,jobs,results,process,async){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto__,jobs,results,process,async){
return (function (state_36166){
var state_val_36167 = (state_36166[(1)]);
if((state_val_36167 === (7))){
var inst_36162 = (state_36166[(2)]);
var state_36166__$1 = state_36166;
var statearr_36168_36234 = state_36166__$1;
(statearr_36168_36234[(2)] = inst_36162);

(statearr_36168_36234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36167 === (20))){
var state_36166__$1 = state_36166;
var statearr_36169_36235 = state_36166__$1;
(statearr_36169_36235[(2)] = null);

(statearr_36169_36235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36167 === (1))){
var state_36166__$1 = state_36166;
var statearr_36170_36236 = state_36166__$1;
(statearr_36170_36236[(2)] = null);

(statearr_36170_36236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36167 === (4))){
var inst_36131 = (state_36166[(7)]);
var inst_36131__$1 = (state_36166[(2)]);
var inst_36132 = (inst_36131__$1 == null);
var state_36166__$1 = (function (){var statearr_36171 = state_36166;
(statearr_36171[(7)] = inst_36131__$1);

return statearr_36171;
})();
if(cljs.core.truth_(inst_36132)){
var statearr_36172_36237 = state_36166__$1;
(statearr_36172_36237[(1)] = (5));

} else {
var statearr_36173_36238 = state_36166__$1;
(statearr_36173_36238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36167 === (15))){
var inst_36144 = (state_36166[(8)]);
var state_36166__$1 = state_36166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36166__$1,(18),to,inst_36144);
} else {
if((state_val_36167 === (21))){
var inst_36157 = (state_36166[(2)]);
var state_36166__$1 = state_36166;
var statearr_36174_36239 = state_36166__$1;
(statearr_36174_36239[(2)] = inst_36157);

(statearr_36174_36239[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36167 === (13))){
var inst_36159 = (state_36166[(2)]);
var state_36166__$1 = (function (){var statearr_36175 = state_36166;
(statearr_36175[(9)] = inst_36159);

return statearr_36175;
})();
var statearr_36176_36240 = state_36166__$1;
(statearr_36176_36240[(2)] = null);

(statearr_36176_36240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36167 === (6))){
var inst_36131 = (state_36166[(7)]);
var state_36166__$1 = state_36166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36166__$1,(11),inst_36131);
} else {
if((state_val_36167 === (17))){
var inst_36152 = (state_36166[(2)]);
var state_36166__$1 = state_36166;
if(cljs.core.truth_(inst_36152)){
var statearr_36177_36241 = state_36166__$1;
(statearr_36177_36241[(1)] = (19));

} else {
var statearr_36178_36242 = state_36166__$1;
(statearr_36178_36242[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36167 === (3))){
var inst_36164 = (state_36166[(2)]);
var state_36166__$1 = state_36166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36166__$1,inst_36164);
} else {
if((state_val_36167 === (12))){
var inst_36141 = (state_36166[(10)]);
var state_36166__$1 = state_36166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36166__$1,(14),inst_36141);
} else {
if((state_val_36167 === (2))){
var state_36166__$1 = state_36166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36166__$1,(4),results);
} else {
if((state_val_36167 === (19))){
var state_36166__$1 = state_36166;
var statearr_36179_36243 = state_36166__$1;
(statearr_36179_36243[(2)] = null);

(statearr_36179_36243[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36167 === (11))){
var inst_36141 = (state_36166[(2)]);
var state_36166__$1 = (function (){var statearr_36180 = state_36166;
(statearr_36180[(10)] = inst_36141);

return statearr_36180;
})();
var statearr_36181_36244 = state_36166__$1;
(statearr_36181_36244[(2)] = null);

(statearr_36181_36244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36167 === (9))){
var state_36166__$1 = state_36166;
var statearr_36182_36245 = state_36166__$1;
(statearr_36182_36245[(2)] = null);

(statearr_36182_36245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36167 === (5))){
var state_36166__$1 = state_36166;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36183_36246 = state_36166__$1;
(statearr_36183_36246[(1)] = (8));

} else {
var statearr_36184_36247 = state_36166__$1;
(statearr_36184_36247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36167 === (14))){
var inst_36146 = (state_36166[(11)]);
var inst_36144 = (state_36166[(8)]);
var inst_36144__$1 = (state_36166[(2)]);
var inst_36145 = (inst_36144__$1 == null);
var inst_36146__$1 = cljs.core.not.call(null,inst_36145);
var state_36166__$1 = (function (){var statearr_36185 = state_36166;
(statearr_36185[(11)] = inst_36146__$1);

(statearr_36185[(8)] = inst_36144__$1);

return statearr_36185;
})();
if(inst_36146__$1){
var statearr_36186_36248 = state_36166__$1;
(statearr_36186_36248[(1)] = (15));

} else {
var statearr_36187_36249 = state_36166__$1;
(statearr_36187_36249[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36167 === (16))){
var inst_36146 = (state_36166[(11)]);
var state_36166__$1 = state_36166;
var statearr_36188_36250 = state_36166__$1;
(statearr_36188_36250[(2)] = inst_36146);

(statearr_36188_36250[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36167 === (10))){
var inst_36138 = (state_36166[(2)]);
var state_36166__$1 = state_36166;
var statearr_36189_36251 = state_36166__$1;
(statearr_36189_36251[(2)] = inst_36138);

(statearr_36189_36251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36167 === (18))){
var inst_36149 = (state_36166[(2)]);
var state_36166__$1 = state_36166;
var statearr_36190_36252 = state_36166__$1;
(statearr_36190_36252[(2)] = inst_36149);

(statearr_36190_36252[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36167 === (8))){
var inst_36135 = cljs.core.async.close_BANG_.call(null,to);
var state_36166__$1 = state_36166;
var statearr_36191_36253 = state_36166__$1;
(statearr_36191_36253[(2)] = inst_36135);

(statearr_36191_36253[(1)] = (10));


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
});})(c__21993__auto__,jobs,results,process,async))
;
return ((function (switch__21881__auto__,c__21993__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____0 = (function (){
var statearr_36195 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36195[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__);

(statearr_36195[(1)] = (1));

return statearr_36195;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____1 = (function (state_36166){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_36166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e36196){if((e36196 instanceof Object)){
var ex__21885__auto__ = e36196;
var statearr_36197_36254 = state_36166;
(statearr_36197_36254[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36255 = state_36166;
state_36166 = G__36255;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__ = function(state_36166){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____1.call(this,state_36166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto__,jobs,results,process,async))
})();
var state__21995__auto__ = (function (){var statearr_36198 = f__21994__auto__.call(null);
(statearr_36198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto__);

return statearr_36198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto__,jobs,results,process,async))
);

return c__21993__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args36256 = [];
var len__19507__auto___36259 = arguments.length;
var i__19508__auto___36260 = (0);
while(true){
if((i__19508__auto___36260 < len__19507__auto___36259)){
args36256.push((arguments[i__19508__auto___36260]));

var G__36261 = (i__19508__auto___36260 + (1));
i__19508__auto___36260 = G__36261;
continue;
} else {
}
break;
}

var G__36258 = args36256.length;
switch (G__36258) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36256.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args36263 = [];
var len__19507__auto___36266 = arguments.length;
var i__19508__auto___36267 = (0);
while(true){
if((i__19508__auto___36267 < len__19507__auto___36266)){
args36263.push((arguments[i__19508__auto___36267]));

var G__36268 = (i__19508__auto___36267 + (1));
i__19508__auto___36267 = G__36268;
continue;
} else {
}
break;
}

var G__36265 = args36263.length;
switch (G__36265) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36263.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args36270 = [];
var len__19507__auto___36323 = arguments.length;
var i__19508__auto___36324 = (0);
while(true){
if((i__19508__auto___36324 < len__19507__auto___36323)){
args36270.push((arguments[i__19508__auto___36324]));

var G__36325 = (i__19508__auto___36324 + (1));
i__19508__auto___36324 = G__36325;
continue;
} else {
}
break;
}

var G__36272 = args36270.length;
switch (G__36272) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36270.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21993__auto___36327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto___36327,tc,fc){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto___36327,tc,fc){
return (function (state_36298){
var state_val_36299 = (state_36298[(1)]);
if((state_val_36299 === (7))){
var inst_36294 = (state_36298[(2)]);
var state_36298__$1 = state_36298;
var statearr_36300_36328 = state_36298__$1;
(statearr_36300_36328[(2)] = inst_36294);

(statearr_36300_36328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36299 === (1))){
var state_36298__$1 = state_36298;
var statearr_36301_36329 = state_36298__$1;
(statearr_36301_36329[(2)] = null);

(statearr_36301_36329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36299 === (4))){
var inst_36275 = (state_36298[(7)]);
var inst_36275__$1 = (state_36298[(2)]);
var inst_36276 = (inst_36275__$1 == null);
var state_36298__$1 = (function (){var statearr_36302 = state_36298;
(statearr_36302[(7)] = inst_36275__$1);

return statearr_36302;
})();
if(cljs.core.truth_(inst_36276)){
var statearr_36303_36330 = state_36298__$1;
(statearr_36303_36330[(1)] = (5));

} else {
var statearr_36304_36331 = state_36298__$1;
(statearr_36304_36331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36299 === (13))){
var state_36298__$1 = state_36298;
var statearr_36305_36332 = state_36298__$1;
(statearr_36305_36332[(2)] = null);

(statearr_36305_36332[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36299 === (6))){
var inst_36275 = (state_36298[(7)]);
var inst_36281 = p.call(null,inst_36275);
var state_36298__$1 = state_36298;
if(cljs.core.truth_(inst_36281)){
var statearr_36306_36333 = state_36298__$1;
(statearr_36306_36333[(1)] = (9));

} else {
var statearr_36307_36334 = state_36298__$1;
(statearr_36307_36334[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36299 === (3))){
var inst_36296 = (state_36298[(2)]);
var state_36298__$1 = state_36298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36298__$1,inst_36296);
} else {
if((state_val_36299 === (12))){
var state_36298__$1 = state_36298;
var statearr_36308_36335 = state_36298__$1;
(statearr_36308_36335[(2)] = null);

(statearr_36308_36335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36299 === (2))){
var state_36298__$1 = state_36298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36298__$1,(4),ch);
} else {
if((state_val_36299 === (11))){
var inst_36275 = (state_36298[(7)]);
var inst_36285 = (state_36298[(2)]);
var state_36298__$1 = state_36298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36298__$1,(8),inst_36285,inst_36275);
} else {
if((state_val_36299 === (9))){
var state_36298__$1 = state_36298;
var statearr_36309_36336 = state_36298__$1;
(statearr_36309_36336[(2)] = tc);

(statearr_36309_36336[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36299 === (5))){
var inst_36278 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36279 = cljs.core.async.close_BANG_.call(null,fc);
var state_36298__$1 = (function (){var statearr_36310 = state_36298;
(statearr_36310[(8)] = inst_36278);

return statearr_36310;
})();
var statearr_36311_36337 = state_36298__$1;
(statearr_36311_36337[(2)] = inst_36279);

(statearr_36311_36337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36299 === (14))){
var inst_36292 = (state_36298[(2)]);
var state_36298__$1 = state_36298;
var statearr_36312_36338 = state_36298__$1;
(statearr_36312_36338[(2)] = inst_36292);

(statearr_36312_36338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36299 === (10))){
var state_36298__$1 = state_36298;
var statearr_36313_36339 = state_36298__$1;
(statearr_36313_36339[(2)] = fc);

(statearr_36313_36339[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36299 === (8))){
var inst_36287 = (state_36298[(2)]);
var state_36298__$1 = state_36298;
if(cljs.core.truth_(inst_36287)){
var statearr_36314_36340 = state_36298__$1;
(statearr_36314_36340[(1)] = (12));

} else {
var statearr_36315_36341 = state_36298__$1;
(statearr_36315_36341[(1)] = (13));

}

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
});})(c__21993__auto___36327,tc,fc))
;
return ((function (switch__21881__auto__,c__21993__auto___36327,tc,fc){
return (function() {
var cljs$core$async$state_machine__21882__auto__ = null;
var cljs$core$async$state_machine__21882__auto____0 = (function (){
var statearr_36319 = [null,null,null,null,null,null,null,null,null];
(statearr_36319[(0)] = cljs$core$async$state_machine__21882__auto__);

(statearr_36319[(1)] = (1));

return statearr_36319;
});
var cljs$core$async$state_machine__21882__auto____1 = (function (state_36298){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_36298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e36320){if((e36320 instanceof Object)){
var ex__21885__auto__ = e36320;
var statearr_36321_36342 = state_36298;
(statearr_36321_36342[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36343 = state_36298;
state_36298 = G__36343;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
cljs$core$async$state_machine__21882__auto__ = function(state_36298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21882__auto____1.call(this,state_36298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21882__auto____0;
cljs$core$async$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21882__auto____1;
return cljs$core$async$state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto___36327,tc,fc))
})();
var state__21995__auto__ = (function (){var statearr_36322 = f__21994__auto__.call(null);
(statearr_36322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto___36327);

return statearr_36322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto___36327,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto__){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto__){
return (function (state_36407){
var state_val_36408 = (state_36407[(1)]);
if((state_val_36408 === (7))){
var inst_36403 = (state_36407[(2)]);
var state_36407__$1 = state_36407;
var statearr_36409_36430 = state_36407__$1;
(statearr_36409_36430[(2)] = inst_36403);

(statearr_36409_36430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36408 === (1))){
var inst_36387 = init;
var state_36407__$1 = (function (){var statearr_36410 = state_36407;
(statearr_36410[(7)] = inst_36387);

return statearr_36410;
})();
var statearr_36411_36431 = state_36407__$1;
(statearr_36411_36431[(2)] = null);

(statearr_36411_36431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36408 === (4))){
var inst_36390 = (state_36407[(8)]);
var inst_36390__$1 = (state_36407[(2)]);
var inst_36391 = (inst_36390__$1 == null);
var state_36407__$1 = (function (){var statearr_36412 = state_36407;
(statearr_36412[(8)] = inst_36390__$1);

return statearr_36412;
})();
if(cljs.core.truth_(inst_36391)){
var statearr_36413_36432 = state_36407__$1;
(statearr_36413_36432[(1)] = (5));

} else {
var statearr_36414_36433 = state_36407__$1;
(statearr_36414_36433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36408 === (6))){
var inst_36394 = (state_36407[(9)]);
var inst_36390 = (state_36407[(8)]);
var inst_36387 = (state_36407[(7)]);
var inst_36394__$1 = f.call(null,inst_36387,inst_36390);
var inst_36395 = cljs.core.reduced_QMARK_.call(null,inst_36394__$1);
var state_36407__$1 = (function (){var statearr_36415 = state_36407;
(statearr_36415[(9)] = inst_36394__$1);

return statearr_36415;
})();
if(inst_36395){
var statearr_36416_36434 = state_36407__$1;
(statearr_36416_36434[(1)] = (8));

} else {
var statearr_36417_36435 = state_36407__$1;
(statearr_36417_36435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36408 === (3))){
var inst_36405 = (state_36407[(2)]);
var state_36407__$1 = state_36407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36407__$1,inst_36405);
} else {
if((state_val_36408 === (2))){
var state_36407__$1 = state_36407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36407__$1,(4),ch);
} else {
if((state_val_36408 === (9))){
var inst_36394 = (state_36407[(9)]);
var inst_36387 = inst_36394;
var state_36407__$1 = (function (){var statearr_36418 = state_36407;
(statearr_36418[(7)] = inst_36387);

return statearr_36418;
})();
var statearr_36419_36436 = state_36407__$1;
(statearr_36419_36436[(2)] = null);

(statearr_36419_36436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36408 === (5))){
var inst_36387 = (state_36407[(7)]);
var state_36407__$1 = state_36407;
var statearr_36420_36437 = state_36407__$1;
(statearr_36420_36437[(2)] = inst_36387);

(statearr_36420_36437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36408 === (10))){
var inst_36401 = (state_36407[(2)]);
var state_36407__$1 = state_36407;
var statearr_36421_36438 = state_36407__$1;
(statearr_36421_36438[(2)] = inst_36401);

(statearr_36421_36438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36408 === (8))){
var inst_36394 = (state_36407[(9)]);
var inst_36397 = cljs.core.deref.call(null,inst_36394);
var state_36407__$1 = state_36407;
var statearr_36422_36439 = state_36407__$1;
(statearr_36422_36439[(2)] = inst_36397);

(statearr_36422_36439[(1)] = (10));


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
});})(c__21993__auto__))
;
return ((function (switch__21881__auto__,c__21993__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21882__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21882__auto____0 = (function (){
var statearr_36426 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36426[(0)] = cljs$core$async$reduce_$_state_machine__21882__auto__);

(statearr_36426[(1)] = (1));

return statearr_36426;
});
var cljs$core$async$reduce_$_state_machine__21882__auto____1 = (function (state_36407){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_36407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e36427){if((e36427 instanceof Object)){
var ex__21885__auto__ = e36427;
var statearr_36428_36440 = state_36407;
(statearr_36428_36440[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36441 = state_36407;
state_36407 = G__36441;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21882__auto__ = function(state_36407){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21882__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21882__auto____1.call(this,state_36407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21882__auto____0;
cljs$core$async$reduce_$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21882__auto____1;
return cljs$core$async$reduce_$_state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto__))
})();
var state__21995__auto__ = (function (){var statearr_36429 = f__21994__auto__.call(null);
(statearr_36429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto__);

return statearr_36429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto__))
);

return c__21993__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args36442 = [];
var len__19507__auto___36494 = arguments.length;
var i__19508__auto___36495 = (0);
while(true){
if((i__19508__auto___36495 < len__19507__auto___36494)){
args36442.push((arguments[i__19508__auto___36495]));

var G__36496 = (i__19508__auto___36495 + (1));
i__19508__auto___36495 = G__36496;
continue;
} else {
}
break;
}

var G__36444 = args36442.length;
switch (G__36444) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36442.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto__){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto__){
return (function (state_36469){
var state_val_36470 = (state_36469[(1)]);
if((state_val_36470 === (7))){
var inst_36451 = (state_36469[(2)]);
var state_36469__$1 = state_36469;
var statearr_36471_36498 = state_36469__$1;
(statearr_36471_36498[(2)] = inst_36451);

(statearr_36471_36498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36470 === (1))){
var inst_36445 = cljs.core.seq.call(null,coll);
var inst_36446 = inst_36445;
var state_36469__$1 = (function (){var statearr_36472 = state_36469;
(statearr_36472[(7)] = inst_36446);

return statearr_36472;
})();
var statearr_36473_36499 = state_36469__$1;
(statearr_36473_36499[(2)] = null);

(statearr_36473_36499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36470 === (4))){
var inst_36446 = (state_36469[(7)]);
var inst_36449 = cljs.core.first.call(null,inst_36446);
var state_36469__$1 = state_36469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36469__$1,(7),ch,inst_36449);
} else {
if((state_val_36470 === (13))){
var inst_36463 = (state_36469[(2)]);
var state_36469__$1 = state_36469;
var statearr_36474_36500 = state_36469__$1;
(statearr_36474_36500[(2)] = inst_36463);

(statearr_36474_36500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36470 === (6))){
var inst_36454 = (state_36469[(2)]);
var state_36469__$1 = state_36469;
if(cljs.core.truth_(inst_36454)){
var statearr_36475_36501 = state_36469__$1;
(statearr_36475_36501[(1)] = (8));

} else {
var statearr_36476_36502 = state_36469__$1;
(statearr_36476_36502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36470 === (3))){
var inst_36467 = (state_36469[(2)]);
var state_36469__$1 = state_36469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36469__$1,inst_36467);
} else {
if((state_val_36470 === (12))){
var state_36469__$1 = state_36469;
var statearr_36477_36503 = state_36469__$1;
(statearr_36477_36503[(2)] = null);

(statearr_36477_36503[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36470 === (2))){
var inst_36446 = (state_36469[(7)]);
var state_36469__$1 = state_36469;
if(cljs.core.truth_(inst_36446)){
var statearr_36478_36504 = state_36469__$1;
(statearr_36478_36504[(1)] = (4));

} else {
var statearr_36479_36505 = state_36469__$1;
(statearr_36479_36505[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36470 === (11))){
var inst_36460 = cljs.core.async.close_BANG_.call(null,ch);
var state_36469__$1 = state_36469;
var statearr_36480_36506 = state_36469__$1;
(statearr_36480_36506[(2)] = inst_36460);

(statearr_36480_36506[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36470 === (9))){
var state_36469__$1 = state_36469;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36481_36507 = state_36469__$1;
(statearr_36481_36507[(1)] = (11));

} else {
var statearr_36482_36508 = state_36469__$1;
(statearr_36482_36508[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36470 === (5))){
var inst_36446 = (state_36469[(7)]);
var state_36469__$1 = state_36469;
var statearr_36483_36509 = state_36469__$1;
(statearr_36483_36509[(2)] = inst_36446);

(statearr_36483_36509[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36470 === (10))){
var inst_36465 = (state_36469[(2)]);
var state_36469__$1 = state_36469;
var statearr_36484_36510 = state_36469__$1;
(statearr_36484_36510[(2)] = inst_36465);

(statearr_36484_36510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36470 === (8))){
var inst_36446 = (state_36469[(7)]);
var inst_36456 = cljs.core.next.call(null,inst_36446);
var inst_36446__$1 = inst_36456;
var state_36469__$1 = (function (){var statearr_36485 = state_36469;
(statearr_36485[(7)] = inst_36446__$1);

return statearr_36485;
})();
var statearr_36486_36511 = state_36469__$1;
(statearr_36486_36511[(2)] = null);

(statearr_36486_36511[(1)] = (2));


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
});})(c__21993__auto__))
;
return ((function (switch__21881__auto__,c__21993__auto__){
return (function() {
var cljs$core$async$state_machine__21882__auto__ = null;
var cljs$core$async$state_machine__21882__auto____0 = (function (){
var statearr_36490 = [null,null,null,null,null,null,null,null];
(statearr_36490[(0)] = cljs$core$async$state_machine__21882__auto__);

(statearr_36490[(1)] = (1));

return statearr_36490;
});
var cljs$core$async$state_machine__21882__auto____1 = (function (state_36469){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_36469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e36491){if((e36491 instanceof Object)){
var ex__21885__auto__ = e36491;
var statearr_36492_36512 = state_36469;
(statearr_36492_36512[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36513 = state_36469;
state_36469 = G__36513;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
cljs$core$async$state_machine__21882__auto__ = function(state_36469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21882__auto____1.call(this,state_36469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21882__auto____0;
cljs$core$async$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21882__auto____1;
return cljs$core$async$state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto__))
})();
var state__21995__auto__ = (function (){var statearr_36493 = f__21994__auto__.call(null);
(statearr_36493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto__);

return statearr_36493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto__))
);

return c__21993__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19101__auto__ = (((_ == null))?null:_);
var m__19102__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,_);
} else {
var m__19102__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19101__auto__ = (((m == null))?null:m);
var m__19102__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19102__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19101__auto__ = (((m == null))?null:m);
var m__19102__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,m,ch);
} else {
var m__19102__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19101__auto__ = (((m == null))?null:m);
var m__19102__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,m);
} else {
var m__19102__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async36735 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36735 = (function (mult,ch,cs,meta36736){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta36736 = meta36736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36737,meta36736__$1){
var self__ = this;
var _36737__$1 = this;
return (new cljs.core.async.t_cljs$core$async36735(self__.mult,self__.ch,self__.cs,meta36736__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async36735.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36737){
var self__ = this;
var _36737__$1 = this;
return self__.meta36736;
});})(cs))
;

cljs.core.async.t_cljs$core$async36735.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async36735.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async36735.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async36735.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36735.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36735.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36735.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36736","meta36736",1993334560,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async36735.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36735";

cljs.core.async.t_cljs$core$async36735.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"cljs.core.async/t_cljs$core$async36735");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async36735 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async36735(mult__$1,ch__$1,cs__$1,meta36736){
return (new cljs.core.async.t_cljs$core$async36735(mult__$1,ch__$1,cs__$1,meta36736));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async36735(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21993__auto___36956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto___36956,cs,m,dchan,dctr,done){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto___36956,cs,m,dchan,dctr,done){
return (function (state_36868){
var state_val_36869 = (state_36868[(1)]);
if((state_val_36869 === (7))){
var inst_36864 = (state_36868[(2)]);
var state_36868__$1 = state_36868;
var statearr_36870_36957 = state_36868__$1;
(statearr_36870_36957[(2)] = inst_36864);

(statearr_36870_36957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (20))){
var inst_36769 = (state_36868[(7)]);
var inst_36779 = cljs.core.first.call(null,inst_36769);
var inst_36780 = cljs.core.nth.call(null,inst_36779,(0),null);
var inst_36781 = cljs.core.nth.call(null,inst_36779,(1),null);
var state_36868__$1 = (function (){var statearr_36871 = state_36868;
(statearr_36871[(8)] = inst_36780);

return statearr_36871;
})();
if(cljs.core.truth_(inst_36781)){
var statearr_36872_36958 = state_36868__$1;
(statearr_36872_36958[(1)] = (22));

} else {
var statearr_36873_36959 = state_36868__$1;
(statearr_36873_36959[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (27))){
var inst_36740 = (state_36868[(9)]);
var inst_36816 = (state_36868[(10)]);
var inst_36811 = (state_36868[(11)]);
var inst_36809 = (state_36868[(12)]);
var inst_36816__$1 = cljs.core._nth.call(null,inst_36809,inst_36811);
var inst_36817 = cljs.core.async.put_BANG_.call(null,inst_36816__$1,inst_36740,done);
var state_36868__$1 = (function (){var statearr_36874 = state_36868;
(statearr_36874[(10)] = inst_36816__$1);

return statearr_36874;
})();
if(cljs.core.truth_(inst_36817)){
var statearr_36875_36960 = state_36868__$1;
(statearr_36875_36960[(1)] = (30));

} else {
var statearr_36876_36961 = state_36868__$1;
(statearr_36876_36961[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (1))){
var state_36868__$1 = state_36868;
var statearr_36877_36962 = state_36868__$1;
(statearr_36877_36962[(2)] = null);

(statearr_36877_36962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (24))){
var inst_36769 = (state_36868[(7)]);
var inst_36786 = (state_36868[(2)]);
var inst_36787 = cljs.core.next.call(null,inst_36769);
var inst_36749 = inst_36787;
var inst_36750 = null;
var inst_36751 = (0);
var inst_36752 = (0);
var state_36868__$1 = (function (){var statearr_36878 = state_36868;
(statearr_36878[(13)] = inst_36786);

(statearr_36878[(14)] = inst_36751);

(statearr_36878[(15)] = inst_36749);

(statearr_36878[(16)] = inst_36750);

(statearr_36878[(17)] = inst_36752);

return statearr_36878;
})();
var statearr_36879_36963 = state_36868__$1;
(statearr_36879_36963[(2)] = null);

(statearr_36879_36963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (39))){
var state_36868__$1 = state_36868;
var statearr_36883_36964 = state_36868__$1;
(statearr_36883_36964[(2)] = null);

(statearr_36883_36964[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (4))){
var inst_36740 = (state_36868[(9)]);
var inst_36740__$1 = (state_36868[(2)]);
var inst_36741 = (inst_36740__$1 == null);
var state_36868__$1 = (function (){var statearr_36884 = state_36868;
(statearr_36884[(9)] = inst_36740__$1);

return statearr_36884;
})();
if(cljs.core.truth_(inst_36741)){
var statearr_36885_36965 = state_36868__$1;
(statearr_36885_36965[(1)] = (5));

} else {
var statearr_36886_36966 = state_36868__$1;
(statearr_36886_36966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (15))){
var inst_36751 = (state_36868[(14)]);
var inst_36749 = (state_36868[(15)]);
var inst_36750 = (state_36868[(16)]);
var inst_36752 = (state_36868[(17)]);
var inst_36765 = (state_36868[(2)]);
var inst_36766 = (inst_36752 + (1));
var tmp36880 = inst_36751;
var tmp36881 = inst_36749;
var tmp36882 = inst_36750;
var inst_36749__$1 = tmp36881;
var inst_36750__$1 = tmp36882;
var inst_36751__$1 = tmp36880;
var inst_36752__$1 = inst_36766;
var state_36868__$1 = (function (){var statearr_36887 = state_36868;
(statearr_36887[(18)] = inst_36765);

(statearr_36887[(14)] = inst_36751__$1);

(statearr_36887[(15)] = inst_36749__$1);

(statearr_36887[(16)] = inst_36750__$1);

(statearr_36887[(17)] = inst_36752__$1);

return statearr_36887;
})();
var statearr_36888_36967 = state_36868__$1;
(statearr_36888_36967[(2)] = null);

(statearr_36888_36967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (21))){
var inst_36790 = (state_36868[(2)]);
var state_36868__$1 = state_36868;
var statearr_36892_36968 = state_36868__$1;
(statearr_36892_36968[(2)] = inst_36790);

(statearr_36892_36968[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (31))){
var inst_36816 = (state_36868[(10)]);
var inst_36820 = done.call(null,null);
var inst_36821 = cljs.core.async.untap_STAR_.call(null,m,inst_36816);
var state_36868__$1 = (function (){var statearr_36893 = state_36868;
(statearr_36893[(19)] = inst_36820);

return statearr_36893;
})();
var statearr_36894_36969 = state_36868__$1;
(statearr_36894_36969[(2)] = inst_36821);

(statearr_36894_36969[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (32))){
var inst_36810 = (state_36868[(20)]);
var inst_36811 = (state_36868[(11)]);
var inst_36808 = (state_36868[(21)]);
var inst_36809 = (state_36868[(12)]);
var inst_36823 = (state_36868[(2)]);
var inst_36824 = (inst_36811 + (1));
var tmp36889 = inst_36810;
var tmp36890 = inst_36808;
var tmp36891 = inst_36809;
var inst_36808__$1 = tmp36890;
var inst_36809__$1 = tmp36891;
var inst_36810__$1 = tmp36889;
var inst_36811__$1 = inst_36824;
var state_36868__$1 = (function (){var statearr_36895 = state_36868;
(statearr_36895[(20)] = inst_36810__$1);

(statearr_36895[(11)] = inst_36811__$1);

(statearr_36895[(22)] = inst_36823);

(statearr_36895[(21)] = inst_36808__$1);

(statearr_36895[(12)] = inst_36809__$1);

return statearr_36895;
})();
var statearr_36896_36970 = state_36868__$1;
(statearr_36896_36970[(2)] = null);

(statearr_36896_36970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (40))){
var inst_36836 = (state_36868[(23)]);
var inst_36840 = done.call(null,null);
var inst_36841 = cljs.core.async.untap_STAR_.call(null,m,inst_36836);
var state_36868__$1 = (function (){var statearr_36897 = state_36868;
(statearr_36897[(24)] = inst_36840);

return statearr_36897;
})();
var statearr_36898_36971 = state_36868__$1;
(statearr_36898_36971[(2)] = inst_36841);

(statearr_36898_36971[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (33))){
var inst_36827 = (state_36868[(25)]);
var inst_36829 = cljs.core.chunked_seq_QMARK_.call(null,inst_36827);
var state_36868__$1 = state_36868;
if(inst_36829){
var statearr_36899_36972 = state_36868__$1;
(statearr_36899_36972[(1)] = (36));

} else {
var statearr_36900_36973 = state_36868__$1;
(statearr_36900_36973[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (13))){
var inst_36759 = (state_36868[(26)]);
var inst_36762 = cljs.core.async.close_BANG_.call(null,inst_36759);
var state_36868__$1 = state_36868;
var statearr_36901_36974 = state_36868__$1;
(statearr_36901_36974[(2)] = inst_36762);

(statearr_36901_36974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (22))){
var inst_36780 = (state_36868[(8)]);
var inst_36783 = cljs.core.async.close_BANG_.call(null,inst_36780);
var state_36868__$1 = state_36868;
var statearr_36902_36975 = state_36868__$1;
(statearr_36902_36975[(2)] = inst_36783);

(statearr_36902_36975[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (36))){
var inst_36827 = (state_36868[(25)]);
var inst_36831 = cljs.core.chunk_first.call(null,inst_36827);
var inst_36832 = cljs.core.chunk_rest.call(null,inst_36827);
var inst_36833 = cljs.core.count.call(null,inst_36831);
var inst_36808 = inst_36832;
var inst_36809 = inst_36831;
var inst_36810 = inst_36833;
var inst_36811 = (0);
var state_36868__$1 = (function (){var statearr_36903 = state_36868;
(statearr_36903[(20)] = inst_36810);

(statearr_36903[(11)] = inst_36811);

(statearr_36903[(21)] = inst_36808);

(statearr_36903[(12)] = inst_36809);

return statearr_36903;
})();
var statearr_36904_36976 = state_36868__$1;
(statearr_36904_36976[(2)] = null);

(statearr_36904_36976[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (41))){
var inst_36827 = (state_36868[(25)]);
var inst_36843 = (state_36868[(2)]);
var inst_36844 = cljs.core.next.call(null,inst_36827);
var inst_36808 = inst_36844;
var inst_36809 = null;
var inst_36810 = (0);
var inst_36811 = (0);
var state_36868__$1 = (function (){var statearr_36905 = state_36868;
(statearr_36905[(20)] = inst_36810);

(statearr_36905[(27)] = inst_36843);

(statearr_36905[(11)] = inst_36811);

(statearr_36905[(21)] = inst_36808);

(statearr_36905[(12)] = inst_36809);

return statearr_36905;
})();
var statearr_36906_36977 = state_36868__$1;
(statearr_36906_36977[(2)] = null);

(statearr_36906_36977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (43))){
var state_36868__$1 = state_36868;
var statearr_36907_36978 = state_36868__$1;
(statearr_36907_36978[(2)] = null);

(statearr_36907_36978[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (29))){
var inst_36852 = (state_36868[(2)]);
var state_36868__$1 = state_36868;
var statearr_36908_36979 = state_36868__$1;
(statearr_36908_36979[(2)] = inst_36852);

(statearr_36908_36979[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (44))){
var inst_36861 = (state_36868[(2)]);
var state_36868__$1 = (function (){var statearr_36909 = state_36868;
(statearr_36909[(28)] = inst_36861);

return statearr_36909;
})();
var statearr_36910_36980 = state_36868__$1;
(statearr_36910_36980[(2)] = null);

(statearr_36910_36980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (6))){
var inst_36800 = (state_36868[(29)]);
var inst_36799 = cljs.core.deref.call(null,cs);
var inst_36800__$1 = cljs.core.keys.call(null,inst_36799);
var inst_36801 = cljs.core.count.call(null,inst_36800__$1);
var inst_36802 = cljs.core.reset_BANG_.call(null,dctr,inst_36801);
var inst_36807 = cljs.core.seq.call(null,inst_36800__$1);
var inst_36808 = inst_36807;
var inst_36809 = null;
var inst_36810 = (0);
var inst_36811 = (0);
var state_36868__$1 = (function (){var statearr_36911 = state_36868;
(statearr_36911[(30)] = inst_36802);

(statearr_36911[(20)] = inst_36810);

(statearr_36911[(29)] = inst_36800__$1);

(statearr_36911[(11)] = inst_36811);

(statearr_36911[(21)] = inst_36808);

(statearr_36911[(12)] = inst_36809);

return statearr_36911;
})();
var statearr_36912_36981 = state_36868__$1;
(statearr_36912_36981[(2)] = null);

(statearr_36912_36981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (28))){
var inst_36827 = (state_36868[(25)]);
var inst_36808 = (state_36868[(21)]);
var inst_36827__$1 = cljs.core.seq.call(null,inst_36808);
var state_36868__$1 = (function (){var statearr_36913 = state_36868;
(statearr_36913[(25)] = inst_36827__$1);

return statearr_36913;
})();
if(inst_36827__$1){
var statearr_36914_36982 = state_36868__$1;
(statearr_36914_36982[(1)] = (33));

} else {
var statearr_36915_36983 = state_36868__$1;
(statearr_36915_36983[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (25))){
var inst_36810 = (state_36868[(20)]);
var inst_36811 = (state_36868[(11)]);
var inst_36813 = (inst_36811 < inst_36810);
var inst_36814 = inst_36813;
var state_36868__$1 = state_36868;
if(cljs.core.truth_(inst_36814)){
var statearr_36916_36984 = state_36868__$1;
(statearr_36916_36984[(1)] = (27));

} else {
var statearr_36917_36985 = state_36868__$1;
(statearr_36917_36985[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (34))){
var state_36868__$1 = state_36868;
var statearr_36918_36986 = state_36868__$1;
(statearr_36918_36986[(2)] = null);

(statearr_36918_36986[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (17))){
var state_36868__$1 = state_36868;
var statearr_36919_36987 = state_36868__$1;
(statearr_36919_36987[(2)] = null);

(statearr_36919_36987[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (3))){
var inst_36866 = (state_36868[(2)]);
var state_36868__$1 = state_36868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36868__$1,inst_36866);
} else {
if((state_val_36869 === (12))){
var inst_36795 = (state_36868[(2)]);
var state_36868__$1 = state_36868;
var statearr_36920_36988 = state_36868__$1;
(statearr_36920_36988[(2)] = inst_36795);

(statearr_36920_36988[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (2))){
var state_36868__$1 = state_36868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36868__$1,(4),ch);
} else {
if((state_val_36869 === (23))){
var state_36868__$1 = state_36868;
var statearr_36921_36989 = state_36868__$1;
(statearr_36921_36989[(2)] = null);

(statearr_36921_36989[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (35))){
var inst_36850 = (state_36868[(2)]);
var state_36868__$1 = state_36868;
var statearr_36922_36990 = state_36868__$1;
(statearr_36922_36990[(2)] = inst_36850);

(statearr_36922_36990[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (19))){
var inst_36769 = (state_36868[(7)]);
var inst_36773 = cljs.core.chunk_first.call(null,inst_36769);
var inst_36774 = cljs.core.chunk_rest.call(null,inst_36769);
var inst_36775 = cljs.core.count.call(null,inst_36773);
var inst_36749 = inst_36774;
var inst_36750 = inst_36773;
var inst_36751 = inst_36775;
var inst_36752 = (0);
var state_36868__$1 = (function (){var statearr_36923 = state_36868;
(statearr_36923[(14)] = inst_36751);

(statearr_36923[(15)] = inst_36749);

(statearr_36923[(16)] = inst_36750);

(statearr_36923[(17)] = inst_36752);

return statearr_36923;
})();
var statearr_36924_36991 = state_36868__$1;
(statearr_36924_36991[(2)] = null);

(statearr_36924_36991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (11))){
var inst_36749 = (state_36868[(15)]);
var inst_36769 = (state_36868[(7)]);
var inst_36769__$1 = cljs.core.seq.call(null,inst_36749);
var state_36868__$1 = (function (){var statearr_36925 = state_36868;
(statearr_36925[(7)] = inst_36769__$1);

return statearr_36925;
})();
if(inst_36769__$1){
var statearr_36926_36992 = state_36868__$1;
(statearr_36926_36992[(1)] = (16));

} else {
var statearr_36927_36993 = state_36868__$1;
(statearr_36927_36993[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (9))){
var inst_36797 = (state_36868[(2)]);
var state_36868__$1 = state_36868;
var statearr_36928_36994 = state_36868__$1;
(statearr_36928_36994[(2)] = inst_36797);

(statearr_36928_36994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (5))){
var inst_36747 = cljs.core.deref.call(null,cs);
var inst_36748 = cljs.core.seq.call(null,inst_36747);
var inst_36749 = inst_36748;
var inst_36750 = null;
var inst_36751 = (0);
var inst_36752 = (0);
var state_36868__$1 = (function (){var statearr_36929 = state_36868;
(statearr_36929[(14)] = inst_36751);

(statearr_36929[(15)] = inst_36749);

(statearr_36929[(16)] = inst_36750);

(statearr_36929[(17)] = inst_36752);

return statearr_36929;
})();
var statearr_36930_36995 = state_36868__$1;
(statearr_36930_36995[(2)] = null);

(statearr_36930_36995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (14))){
var state_36868__$1 = state_36868;
var statearr_36931_36996 = state_36868__$1;
(statearr_36931_36996[(2)] = null);

(statearr_36931_36996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (45))){
var inst_36858 = (state_36868[(2)]);
var state_36868__$1 = state_36868;
var statearr_36932_36997 = state_36868__$1;
(statearr_36932_36997[(2)] = inst_36858);

(statearr_36932_36997[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (26))){
var inst_36800 = (state_36868[(29)]);
var inst_36854 = (state_36868[(2)]);
var inst_36855 = cljs.core.seq.call(null,inst_36800);
var state_36868__$1 = (function (){var statearr_36933 = state_36868;
(statearr_36933[(31)] = inst_36854);

return statearr_36933;
})();
if(inst_36855){
var statearr_36934_36998 = state_36868__$1;
(statearr_36934_36998[(1)] = (42));

} else {
var statearr_36935_36999 = state_36868__$1;
(statearr_36935_36999[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (16))){
var inst_36769 = (state_36868[(7)]);
var inst_36771 = cljs.core.chunked_seq_QMARK_.call(null,inst_36769);
var state_36868__$1 = state_36868;
if(inst_36771){
var statearr_36936_37000 = state_36868__$1;
(statearr_36936_37000[(1)] = (19));

} else {
var statearr_36937_37001 = state_36868__$1;
(statearr_36937_37001[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (38))){
var inst_36847 = (state_36868[(2)]);
var state_36868__$1 = state_36868;
var statearr_36938_37002 = state_36868__$1;
(statearr_36938_37002[(2)] = inst_36847);

(statearr_36938_37002[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (30))){
var state_36868__$1 = state_36868;
var statearr_36939_37003 = state_36868__$1;
(statearr_36939_37003[(2)] = null);

(statearr_36939_37003[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (10))){
var inst_36750 = (state_36868[(16)]);
var inst_36752 = (state_36868[(17)]);
var inst_36758 = cljs.core._nth.call(null,inst_36750,inst_36752);
var inst_36759 = cljs.core.nth.call(null,inst_36758,(0),null);
var inst_36760 = cljs.core.nth.call(null,inst_36758,(1),null);
var state_36868__$1 = (function (){var statearr_36940 = state_36868;
(statearr_36940[(26)] = inst_36759);

return statearr_36940;
})();
if(cljs.core.truth_(inst_36760)){
var statearr_36941_37004 = state_36868__$1;
(statearr_36941_37004[(1)] = (13));

} else {
var statearr_36942_37005 = state_36868__$1;
(statearr_36942_37005[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (18))){
var inst_36793 = (state_36868[(2)]);
var state_36868__$1 = state_36868;
var statearr_36943_37006 = state_36868__$1;
(statearr_36943_37006[(2)] = inst_36793);

(statearr_36943_37006[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (42))){
var state_36868__$1 = state_36868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36868__$1,(45),dchan);
} else {
if((state_val_36869 === (37))){
var inst_36740 = (state_36868[(9)]);
var inst_36827 = (state_36868[(25)]);
var inst_36836 = (state_36868[(23)]);
var inst_36836__$1 = cljs.core.first.call(null,inst_36827);
var inst_36837 = cljs.core.async.put_BANG_.call(null,inst_36836__$1,inst_36740,done);
var state_36868__$1 = (function (){var statearr_36944 = state_36868;
(statearr_36944[(23)] = inst_36836__$1);

return statearr_36944;
})();
if(cljs.core.truth_(inst_36837)){
var statearr_36945_37007 = state_36868__$1;
(statearr_36945_37007[(1)] = (39));

} else {
var statearr_36946_37008 = state_36868__$1;
(statearr_36946_37008[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36869 === (8))){
var inst_36751 = (state_36868[(14)]);
var inst_36752 = (state_36868[(17)]);
var inst_36754 = (inst_36752 < inst_36751);
var inst_36755 = inst_36754;
var state_36868__$1 = state_36868;
if(cljs.core.truth_(inst_36755)){
var statearr_36947_37009 = state_36868__$1;
(statearr_36947_37009[(1)] = (10));

} else {
var statearr_36948_37010 = state_36868__$1;
(statearr_36948_37010[(1)] = (11));

}

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
});})(c__21993__auto___36956,cs,m,dchan,dctr,done))
;
return ((function (switch__21881__auto__,c__21993__auto___36956,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21882__auto__ = null;
var cljs$core$async$mult_$_state_machine__21882__auto____0 = (function (){
var statearr_36952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36952[(0)] = cljs$core$async$mult_$_state_machine__21882__auto__);

(statearr_36952[(1)] = (1));

return statearr_36952;
});
var cljs$core$async$mult_$_state_machine__21882__auto____1 = (function (state_36868){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_36868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e36953){if((e36953 instanceof Object)){
var ex__21885__auto__ = e36953;
var statearr_36954_37011 = state_36868;
(statearr_36954_37011[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37012 = state_36868;
state_36868 = G__37012;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21882__auto__ = function(state_36868){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21882__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21882__auto____1.call(this,state_36868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21882__auto____0;
cljs$core$async$mult_$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21882__auto____1;
return cljs$core$async$mult_$_state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto___36956,cs,m,dchan,dctr,done))
})();
var state__21995__auto__ = (function (){var statearr_36955 = f__21994__auto__.call(null);
(statearr_36955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto___36956);

return statearr_36955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto___36956,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args37013 = [];
var len__19507__auto___37016 = arguments.length;
var i__19508__auto___37017 = (0);
while(true){
if((i__19508__auto___37017 < len__19507__auto___37016)){
args37013.push((arguments[i__19508__auto___37017]));

var G__37018 = (i__19508__auto___37017 + (1));
i__19508__auto___37017 = G__37018;
continue;
} else {
}
break;
}

var G__37015 = args37013.length;
switch (G__37015) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37013.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19101__auto__ = (((m == null))?null:m);
var m__19102__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,m,ch);
} else {
var m__19102__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19101__auto__ = (((m == null))?null:m);
var m__19102__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,m,ch);
} else {
var m__19102__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19101__auto__ = (((m == null))?null:m);
var m__19102__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,m);
} else {
var m__19102__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19101__auto__ = (((m == null))?null:m);
var m__19102__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,m,state_map);
} else {
var m__19102__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19101__auto__ = (((m == null))?null:m);
var m__19102__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,m,mode);
} else {
var m__19102__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19514__auto__ = [];
var len__19507__auto___37030 = arguments.length;
var i__19508__auto___37031 = (0);
while(true){
if((i__19508__auto___37031 < len__19507__auto___37030)){
args__19514__auto__.push((arguments[i__19508__auto___37031]));

var G__37032 = (i__19508__auto___37031 + (1));
i__19508__auto___37031 = G__37032;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((3) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19515__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37024){
var map__37025 = p__37024;
var map__37025__$1 = ((((!((map__37025 == null)))?((((map__37025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37025):map__37025);
var opts = map__37025__$1;
var statearr_37027_37033 = state;
(statearr_37027_37033[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__37025,map__37025__$1,opts){
return (function (val){
var statearr_37028_37034 = state;
(statearr_37028_37034[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37025,map__37025__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_37029_37035 = state;
(statearr_37029_37035[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37020){
var G__37021 = cljs.core.first.call(null,seq37020);
var seq37020__$1 = cljs.core.next.call(null,seq37020);
var G__37022 = cljs.core.first.call(null,seq37020__$1);
var seq37020__$2 = cljs.core.next.call(null,seq37020__$1);
var G__37023 = cljs.core.first.call(null,seq37020__$2);
var seq37020__$3 = cljs.core.next.call(null,seq37020__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37021,G__37022,G__37023,seq37020__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async37199 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37199 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37200){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37200 = meta37200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37201,meta37200__$1){
var self__ = this;
var _37201__$1 = this;
return (new cljs.core.async.t_cljs$core$async37199(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37200__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37199.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37201){
var self__ = this;
var _37201__$1 = this;
return self__.meta37200;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37199.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37199.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37199.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async37199.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37199.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37199.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37199.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37199.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37199.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37200","meta37200",1119710803,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37199.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37199";

cljs.core.async.t_cljs$core$async37199.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"cljs.core.async/t_cljs$core$async37199");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async37199 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async37199(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37200){
return (new cljs.core.async.t_cljs$core$async37199(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37200));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async37199(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21993__auto___37362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto___37362,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto___37362,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37299){
var state_val_37300 = (state_37299[(1)]);
if((state_val_37300 === (7))){
var inst_37217 = (state_37299[(2)]);
var state_37299__$1 = state_37299;
var statearr_37301_37363 = state_37299__$1;
(statearr_37301_37363[(2)] = inst_37217);

(statearr_37301_37363[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (20))){
var inst_37229 = (state_37299[(7)]);
var state_37299__$1 = state_37299;
var statearr_37302_37364 = state_37299__$1;
(statearr_37302_37364[(2)] = inst_37229);

(statearr_37302_37364[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (27))){
var state_37299__$1 = state_37299;
var statearr_37303_37365 = state_37299__$1;
(statearr_37303_37365[(2)] = null);

(statearr_37303_37365[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (1))){
var inst_37205 = (state_37299[(8)]);
var inst_37205__$1 = calc_state.call(null);
var inst_37207 = (inst_37205__$1 == null);
var inst_37208 = cljs.core.not.call(null,inst_37207);
var state_37299__$1 = (function (){var statearr_37304 = state_37299;
(statearr_37304[(8)] = inst_37205__$1);

return statearr_37304;
})();
if(inst_37208){
var statearr_37305_37366 = state_37299__$1;
(statearr_37305_37366[(1)] = (2));

} else {
var statearr_37306_37367 = state_37299__$1;
(statearr_37306_37367[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (24))){
var inst_37252 = (state_37299[(9)]);
var inst_37259 = (state_37299[(10)]);
var inst_37273 = (state_37299[(11)]);
var inst_37273__$1 = inst_37252.call(null,inst_37259);
var state_37299__$1 = (function (){var statearr_37307 = state_37299;
(statearr_37307[(11)] = inst_37273__$1);

return statearr_37307;
})();
if(cljs.core.truth_(inst_37273__$1)){
var statearr_37308_37368 = state_37299__$1;
(statearr_37308_37368[(1)] = (29));

} else {
var statearr_37309_37369 = state_37299__$1;
(statearr_37309_37369[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (4))){
var inst_37220 = (state_37299[(2)]);
var state_37299__$1 = state_37299;
if(cljs.core.truth_(inst_37220)){
var statearr_37310_37370 = state_37299__$1;
(statearr_37310_37370[(1)] = (8));

} else {
var statearr_37311_37371 = state_37299__$1;
(statearr_37311_37371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (15))){
var inst_37246 = (state_37299[(2)]);
var state_37299__$1 = state_37299;
if(cljs.core.truth_(inst_37246)){
var statearr_37312_37372 = state_37299__$1;
(statearr_37312_37372[(1)] = (19));

} else {
var statearr_37313_37373 = state_37299__$1;
(statearr_37313_37373[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (21))){
var inst_37251 = (state_37299[(12)]);
var inst_37251__$1 = (state_37299[(2)]);
var inst_37252 = cljs.core.get.call(null,inst_37251__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37253 = cljs.core.get.call(null,inst_37251__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37254 = cljs.core.get.call(null,inst_37251__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37299__$1 = (function (){var statearr_37314 = state_37299;
(statearr_37314[(9)] = inst_37252);

(statearr_37314[(12)] = inst_37251__$1);

(statearr_37314[(13)] = inst_37253);

return statearr_37314;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37299__$1,(22),inst_37254);
} else {
if((state_val_37300 === (31))){
var inst_37281 = (state_37299[(2)]);
var state_37299__$1 = state_37299;
if(cljs.core.truth_(inst_37281)){
var statearr_37315_37374 = state_37299__$1;
(statearr_37315_37374[(1)] = (32));

} else {
var statearr_37316_37375 = state_37299__$1;
(statearr_37316_37375[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (32))){
var inst_37258 = (state_37299[(14)]);
var state_37299__$1 = state_37299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37299__$1,(35),out,inst_37258);
} else {
if((state_val_37300 === (33))){
var inst_37251 = (state_37299[(12)]);
var inst_37229 = inst_37251;
var state_37299__$1 = (function (){var statearr_37317 = state_37299;
(statearr_37317[(7)] = inst_37229);

return statearr_37317;
})();
var statearr_37318_37376 = state_37299__$1;
(statearr_37318_37376[(2)] = null);

(statearr_37318_37376[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (13))){
var inst_37229 = (state_37299[(7)]);
var inst_37236 = inst_37229.cljs$lang$protocol_mask$partition0$;
var inst_37237 = (inst_37236 & (64));
var inst_37238 = inst_37229.cljs$core$ISeq$;
var inst_37239 = (inst_37237) || (inst_37238);
var state_37299__$1 = state_37299;
if(cljs.core.truth_(inst_37239)){
var statearr_37319_37377 = state_37299__$1;
(statearr_37319_37377[(1)] = (16));

} else {
var statearr_37320_37378 = state_37299__$1;
(statearr_37320_37378[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (22))){
var inst_37258 = (state_37299[(14)]);
var inst_37259 = (state_37299[(10)]);
var inst_37257 = (state_37299[(2)]);
var inst_37258__$1 = cljs.core.nth.call(null,inst_37257,(0),null);
var inst_37259__$1 = cljs.core.nth.call(null,inst_37257,(1),null);
var inst_37260 = (inst_37258__$1 == null);
var inst_37261 = cljs.core._EQ_.call(null,inst_37259__$1,change);
var inst_37262 = (inst_37260) || (inst_37261);
var state_37299__$1 = (function (){var statearr_37321 = state_37299;
(statearr_37321[(14)] = inst_37258__$1);

(statearr_37321[(10)] = inst_37259__$1);

return statearr_37321;
})();
if(cljs.core.truth_(inst_37262)){
var statearr_37322_37379 = state_37299__$1;
(statearr_37322_37379[(1)] = (23));

} else {
var statearr_37323_37380 = state_37299__$1;
(statearr_37323_37380[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (36))){
var inst_37251 = (state_37299[(12)]);
var inst_37229 = inst_37251;
var state_37299__$1 = (function (){var statearr_37324 = state_37299;
(statearr_37324[(7)] = inst_37229);

return statearr_37324;
})();
var statearr_37325_37381 = state_37299__$1;
(statearr_37325_37381[(2)] = null);

(statearr_37325_37381[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (29))){
var inst_37273 = (state_37299[(11)]);
var state_37299__$1 = state_37299;
var statearr_37326_37382 = state_37299__$1;
(statearr_37326_37382[(2)] = inst_37273);

(statearr_37326_37382[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (6))){
var state_37299__$1 = state_37299;
var statearr_37327_37383 = state_37299__$1;
(statearr_37327_37383[(2)] = false);

(statearr_37327_37383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (28))){
var inst_37269 = (state_37299[(2)]);
var inst_37270 = calc_state.call(null);
var inst_37229 = inst_37270;
var state_37299__$1 = (function (){var statearr_37328 = state_37299;
(statearr_37328[(15)] = inst_37269);

(statearr_37328[(7)] = inst_37229);

return statearr_37328;
})();
var statearr_37329_37384 = state_37299__$1;
(statearr_37329_37384[(2)] = null);

(statearr_37329_37384[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (25))){
var inst_37295 = (state_37299[(2)]);
var state_37299__$1 = state_37299;
var statearr_37330_37385 = state_37299__$1;
(statearr_37330_37385[(2)] = inst_37295);

(statearr_37330_37385[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (34))){
var inst_37293 = (state_37299[(2)]);
var state_37299__$1 = state_37299;
var statearr_37331_37386 = state_37299__$1;
(statearr_37331_37386[(2)] = inst_37293);

(statearr_37331_37386[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (17))){
var state_37299__$1 = state_37299;
var statearr_37332_37387 = state_37299__$1;
(statearr_37332_37387[(2)] = false);

(statearr_37332_37387[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (3))){
var state_37299__$1 = state_37299;
var statearr_37333_37388 = state_37299__$1;
(statearr_37333_37388[(2)] = false);

(statearr_37333_37388[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (12))){
var inst_37297 = (state_37299[(2)]);
var state_37299__$1 = state_37299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37299__$1,inst_37297);
} else {
if((state_val_37300 === (2))){
var inst_37205 = (state_37299[(8)]);
var inst_37210 = inst_37205.cljs$lang$protocol_mask$partition0$;
var inst_37211 = (inst_37210 & (64));
var inst_37212 = inst_37205.cljs$core$ISeq$;
var inst_37213 = (inst_37211) || (inst_37212);
var state_37299__$1 = state_37299;
if(cljs.core.truth_(inst_37213)){
var statearr_37334_37389 = state_37299__$1;
(statearr_37334_37389[(1)] = (5));

} else {
var statearr_37335_37390 = state_37299__$1;
(statearr_37335_37390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (23))){
var inst_37258 = (state_37299[(14)]);
var inst_37264 = (inst_37258 == null);
var state_37299__$1 = state_37299;
if(cljs.core.truth_(inst_37264)){
var statearr_37336_37391 = state_37299__$1;
(statearr_37336_37391[(1)] = (26));

} else {
var statearr_37337_37392 = state_37299__$1;
(statearr_37337_37392[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (35))){
var inst_37284 = (state_37299[(2)]);
var state_37299__$1 = state_37299;
if(cljs.core.truth_(inst_37284)){
var statearr_37338_37393 = state_37299__$1;
(statearr_37338_37393[(1)] = (36));

} else {
var statearr_37339_37394 = state_37299__$1;
(statearr_37339_37394[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (19))){
var inst_37229 = (state_37299[(7)]);
var inst_37248 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37229);
var state_37299__$1 = state_37299;
var statearr_37340_37395 = state_37299__$1;
(statearr_37340_37395[(2)] = inst_37248);

(statearr_37340_37395[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (11))){
var inst_37229 = (state_37299[(7)]);
var inst_37233 = (inst_37229 == null);
var inst_37234 = cljs.core.not.call(null,inst_37233);
var state_37299__$1 = state_37299;
if(inst_37234){
var statearr_37341_37396 = state_37299__$1;
(statearr_37341_37396[(1)] = (13));

} else {
var statearr_37342_37397 = state_37299__$1;
(statearr_37342_37397[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (9))){
var inst_37205 = (state_37299[(8)]);
var state_37299__$1 = state_37299;
var statearr_37343_37398 = state_37299__$1;
(statearr_37343_37398[(2)] = inst_37205);

(statearr_37343_37398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (5))){
var state_37299__$1 = state_37299;
var statearr_37344_37399 = state_37299__$1;
(statearr_37344_37399[(2)] = true);

(statearr_37344_37399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (14))){
var state_37299__$1 = state_37299;
var statearr_37345_37400 = state_37299__$1;
(statearr_37345_37400[(2)] = false);

(statearr_37345_37400[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (26))){
var inst_37259 = (state_37299[(10)]);
var inst_37266 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37259);
var state_37299__$1 = state_37299;
var statearr_37346_37401 = state_37299__$1;
(statearr_37346_37401[(2)] = inst_37266);

(statearr_37346_37401[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (16))){
var state_37299__$1 = state_37299;
var statearr_37347_37402 = state_37299__$1;
(statearr_37347_37402[(2)] = true);

(statearr_37347_37402[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (38))){
var inst_37289 = (state_37299[(2)]);
var state_37299__$1 = state_37299;
var statearr_37348_37403 = state_37299__$1;
(statearr_37348_37403[(2)] = inst_37289);

(statearr_37348_37403[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (30))){
var inst_37252 = (state_37299[(9)]);
var inst_37259 = (state_37299[(10)]);
var inst_37253 = (state_37299[(13)]);
var inst_37276 = cljs.core.empty_QMARK_.call(null,inst_37252);
var inst_37277 = inst_37253.call(null,inst_37259);
var inst_37278 = cljs.core.not.call(null,inst_37277);
var inst_37279 = (inst_37276) && (inst_37278);
var state_37299__$1 = state_37299;
var statearr_37349_37404 = state_37299__$1;
(statearr_37349_37404[(2)] = inst_37279);

(statearr_37349_37404[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (10))){
var inst_37205 = (state_37299[(8)]);
var inst_37225 = (state_37299[(2)]);
var inst_37226 = cljs.core.get.call(null,inst_37225,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37227 = cljs.core.get.call(null,inst_37225,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37228 = cljs.core.get.call(null,inst_37225,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37229 = inst_37205;
var state_37299__$1 = (function (){var statearr_37350 = state_37299;
(statearr_37350[(16)] = inst_37226);

(statearr_37350[(17)] = inst_37228);

(statearr_37350[(7)] = inst_37229);

(statearr_37350[(18)] = inst_37227);

return statearr_37350;
})();
var statearr_37351_37405 = state_37299__$1;
(statearr_37351_37405[(2)] = null);

(statearr_37351_37405[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (18))){
var inst_37243 = (state_37299[(2)]);
var state_37299__$1 = state_37299;
var statearr_37352_37406 = state_37299__$1;
(statearr_37352_37406[(2)] = inst_37243);

(statearr_37352_37406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (37))){
var state_37299__$1 = state_37299;
var statearr_37353_37407 = state_37299__$1;
(statearr_37353_37407[(2)] = null);

(statearr_37353_37407[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37300 === (8))){
var inst_37205 = (state_37299[(8)]);
var inst_37222 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37205);
var state_37299__$1 = state_37299;
var statearr_37354_37408 = state_37299__$1;
(statearr_37354_37408[(2)] = inst_37222);

(statearr_37354_37408[(1)] = (10));


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
});})(c__21993__auto___37362,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21881__auto__,c__21993__auto___37362,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21882__auto__ = null;
var cljs$core$async$mix_$_state_machine__21882__auto____0 = (function (){
var statearr_37358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37358[(0)] = cljs$core$async$mix_$_state_machine__21882__auto__);

(statearr_37358[(1)] = (1));

return statearr_37358;
});
var cljs$core$async$mix_$_state_machine__21882__auto____1 = (function (state_37299){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_37299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e37359){if((e37359 instanceof Object)){
var ex__21885__auto__ = e37359;
var statearr_37360_37409 = state_37299;
(statearr_37360_37409[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37410 = state_37299;
state_37299 = G__37410;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21882__auto__ = function(state_37299){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21882__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21882__auto____1.call(this,state_37299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21882__auto____0;
cljs$core$async$mix_$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21882__auto____1;
return cljs$core$async$mix_$_state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto___37362,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21995__auto__ = (function (){var statearr_37361 = f__21994__auto__.call(null);
(statearr_37361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto___37362);

return statearr_37361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto___37362,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19101__auto__ = (((p == null))?null:p);
var m__19102__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19102__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19101__auto__ = (((p == null))?null:p);
var m__19102__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,p,v,ch);
} else {
var m__19102__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args37411 = [];
var len__19507__auto___37414 = arguments.length;
var i__19508__auto___37415 = (0);
while(true){
if((i__19508__auto___37415 < len__19507__auto___37414)){
args37411.push((arguments[i__19508__auto___37415]));

var G__37416 = (i__19508__auto___37415 + (1));
i__19508__auto___37415 = G__37416;
continue;
} else {
}
break;
}

var G__37413 = args37411.length;
switch (G__37413) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37411.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19101__auto__ = (((p == null))?null:p);
var m__19102__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,p);
} else {
var m__19102__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19101__auto__ = (((p == null))?null:p);
var m__19102__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,p,v);
} else {
var m__19102__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args37419 = [];
var len__19507__auto___37544 = arguments.length;
var i__19508__auto___37545 = (0);
while(true){
if((i__19508__auto___37545 < len__19507__auto___37544)){
args37419.push((arguments[i__19508__auto___37545]));

var G__37546 = (i__19508__auto___37545 + (1));
i__19508__auto___37545 = G__37546;
continue;
} else {
}
break;
}

var G__37421 = args37419.length;
switch (G__37421) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37419.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18438__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18438__auto__,mults){
return (function (p1__37418_SHARP_){
if(cljs.core.truth_(p1__37418_SHARP_.call(null,topic))){
return p1__37418_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37418_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18438__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async37422 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37422 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37423){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37423 = meta37423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37424,meta37423__$1){
var self__ = this;
var _37424__$1 = this;
return (new cljs.core.async.t_cljs$core$async37422(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37423__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37422.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37424){
var self__ = this;
var _37424__$1 = this;
return self__.meta37423;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37422.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37422.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37422.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async37422.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37422.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37422.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37422.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37422.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37423","meta37423",897808542,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37422.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37422.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37422";

cljs.core.async.t_cljs$core$async37422.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"cljs.core.async/t_cljs$core$async37422");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async37422 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async37422(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37423){
return (new cljs.core.async.t_cljs$core$async37422(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37423));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async37422(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21993__auto___37548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto___37548,mults,ensure_mult,p){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto___37548,mults,ensure_mult,p){
return (function (state_37496){
var state_val_37497 = (state_37496[(1)]);
if((state_val_37497 === (7))){
var inst_37492 = (state_37496[(2)]);
var state_37496__$1 = state_37496;
var statearr_37498_37549 = state_37496__$1;
(statearr_37498_37549[(2)] = inst_37492);

(statearr_37498_37549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37497 === (20))){
var state_37496__$1 = state_37496;
var statearr_37499_37550 = state_37496__$1;
(statearr_37499_37550[(2)] = null);

(statearr_37499_37550[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37497 === (1))){
var state_37496__$1 = state_37496;
var statearr_37500_37551 = state_37496__$1;
(statearr_37500_37551[(2)] = null);

(statearr_37500_37551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37497 === (24))){
var inst_37475 = (state_37496[(7)]);
var inst_37484 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_37475);
var state_37496__$1 = state_37496;
var statearr_37501_37552 = state_37496__$1;
(statearr_37501_37552[(2)] = inst_37484);

(statearr_37501_37552[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37497 === (4))){
var inst_37427 = (state_37496[(8)]);
var inst_37427__$1 = (state_37496[(2)]);
var inst_37428 = (inst_37427__$1 == null);
var state_37496__$1 = (function (){var statearr_37502 = state_37496;
(statearr_37502[(8)] = inst_37427__$1);

return statearr_37502;
})();
if(cljs.core.truth_(inst_37428)){
var statearr_37503_37553 = state_37496__$1;
(statearr_37503_37553[(1)] = (5));

} else {
var statearr_37504_37554 = state_37496__$1;
(statearr_37504_37554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37497 === (15))){
var inst_37469 = (state_37496[(2)]);
var state_37496__$1 = state_37496;
var statearr_37505_37555 = state_37496__$1;
(statearr_37505_37555[(2)] = inst_37469);

(statearr_37505_37555[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37497 === (21))){
var inst_37489 = (state_37496[(2)]);
var state_37496__$1 = (function (){var statearr_37506 = state_37496;
(statearr_37506[(9)] = inst_37489);

return statearr_37506;
})();
var statearr_37507_37556 = state_37496__$1;
(statearr_37507_37556[(2)] = null);

(statearr_37507_37556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37497 === (13))){
var inst_37451 = (state_37496[(10)]);
var inst_37453 = cljs.core.chunked_seq_QMARK_.call(null,inst_37451);
var state_37496__$1 = state_37496;
if(inst_37453){
var statearr_37508_37557 = state_37496__$1;
(statearr_37508_37557[(1)] = (16));

} else {
var statearr_37509_37558 = state_37496__$1;
(statearr_37509_37558[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37497 === (22))){
var inst_37481 = (state_37496[(2)]);
var state_37496__$1 = state_37496;
if(cljs.core.truth_(inst_37481)){
var statearr_37510_37559 = state_37496__$1;
(statearr_37510_37559[(1)] = (23));

} else {
var statearr_37511_37560 = state_37496__$1;
(statearr_37511_37560[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37497 === (6))){
var inst_37427 = (state_37496[(8)]);
var inst_37477 = (state_37496[(11)]);
var inst_37475 = (state_37496[(7)]);
var inst_37475__$1 = topic_fn.call(null,inst_37427);
var inst_37476 = cljs.core.deref.call(null,mults);
var inst_37477__$1 = cljs.core.get.call(null,inst_37476,inst_37475__$1);
var state_37496__$1 = (function (){var statearr_37512 = state_37496;
(statearr_37512[(11)] = inst_37477__$1);

(statearr_37512[(7)] = inst_37475__$1);

return statearr_37512;
})();
if(cljs.core.truth_(inst_37477__$1)){
var statearr_37513_37561 = state_37496__$1;
(statearr_37513_37561[(1)] = (19));

} else {
var statearr_37514_37562 = state_37496__$1;
(statearr_37514_37562[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37497 === (25))){
var inst_37486 = (state_37496[(2)]);
var state_37496__$1 = state_37496;
var statearr_37515_37563 = state_37496__$1;
(statearr_37515_37563[(2)] = inst_37486);

(statearr_37515_37563[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37497 === (17))){
var inst_37451 = (state_37496[(10)]);
var inst_37460 = cljs.core.first.call(null,inst_37451);
var inst_37461 = cljs.core.async.muxch_STAR_.call(null,inst_37460);
var inst_37462 = cljs.core.async.close_BANG_.call(null,inst_37461);
var inst_37463 = cljs.core.next.call(null,inst_37451);
var inst_37437 = inst_37463;
var inst_37438 = null;
var inst_37439 = (0);
var inst_37440 = (0);
var state_37496__$1 = (function (){var statearr_37516 = state_37496;
(statearr_37516[(12)] = inst_37440);

(statearr_37516[(13)] = inst_37437);

(statearr_37516[(14)] = inst_37439);

(statearr_37516[(15)] = inst_37438);

(statearr_37516[(16)] = inst_37462);

return statearr_37516;
})();
var statearr_37517_37564 = state_37496__$1;
(statearr_37517_37564[(2)] = null);

(statearr_37517_37564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37497 === (3))){
var inst_37494 = (state_37496[(2)]);
var state_37496__$1 = state_37496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37496__$1,inst_37494);
} else {
if((state_val_37497 === (12))){
var inst_37471 = (state_37496[(2)]);
var state_37496__$1 = state_37496;
var statearr_37518_37565 = state_37496__$1;
(statearr_37518_37565[(2)] = inst_37471);

(statearr_37518_37565[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37497 === (2))){
var state_37496__$1 = state_37496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37496__$1,(4),ch);
} else {
if((state_val_37497 === (23))){
var state_37496__$1 = state_37496;
var statearr_37519_37566 = state_37496__$1;
(statearr_37519_37566[(2)] = null);

(statearr_37519_37566[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37497 === (19))){
var inst_37427 = (state_37496[(8)]);
var inst_37477 = (state_37496[(11)]);
var inst_37479 = cljs.core.async.muxch_STAR_.call(null,inst_37477);
var state_37496__$1 = state_37496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37496__$1,(22),inst_37479,inst_37427);
} else {
if((state_val_37497 === (11))){
var inst_37437 = (state_37496[(13)]);
var inst_37451 = (state_37496[(10)]);
var inst_37451__$1 = cljs.core.seq.call(null,inst_37437);
var state_37496__$1 = (function (){var statearr_37520 = state_37496;
(statearr_37520[(10)] = inst_37451__$1);

return statearr_37520;
})();
if(inst_37451__$1){
var statearr_37521_37567 = state_37496__$1;
(statearr_37521_37567[(1)] = (13));

} else {
var statearr_37522_37568 = state_37496__$1;
(statearr_37522_37568[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37497 === (9))){
var inst_37473 = (state_37496[(2)]);
var state_37496__$1 = state_37496;
var statearr_37523_37569 = state_37496__$1;
(statearr_37523_37569[(2)] = inst_37473);

(statearr_37523_37569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37497 === (5))){
var inst_37434 = cljs.core.deref.call(null,mults);
var inst_37435 = cljs.core.vals.call(null,inst_37434);
var inst_37436 = cljs.core.seq.call(null,inst_37435);
var inst_37437 = inst_37436;
var inst_37438 = null;
var inst_37439 = (0);
var inst_37440 = (0);
var state_37496__$1 = (function (){var statearr_37524 = state_37496;
(statearr_37524[(12)] = inst_37440);

(statearr_37524[(13)] = inst_37437);

(statearr_37524[(14)] = inst_37439);

(statearr_37524[(15)] = inst_37438);

return statearr_37524;
})();
var statearr_37525_37570 = state_37496__$1;
(statearr_37525_37570[(2)] = null);

(statearr_37525_37570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37497 === (14))){
var state_37496__$1 = state_37496;
var statearr_37529_37571 = state_37496__$1;
(statearr_37529_37571[(2)] = null);

(statearr_37529_37571[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37497 === (16))){
var inst_37451 = (state_37496[(10)]);
var inst_37455 = cljs.core.chunk_first.call(null,inst_37451);
var inst_37456 = cljs.core.chunk_rest.call(null,inst_37451);
var inst_37457 = cljs.core.count.call(null,inst_37455);
var inst_37437 = inst_37456;
var inst_37438 = inst_37455;
var inst_37439 = inst_37457;
var inst_37440 = (0);
var state_37496__$1 = (function (){var statearr_37530 = state_37496;
(statearr_37530[(12)] = inst_37440);

(statearr_37530[(13)] = inst_37437);

(statearr_37530[(14)] = inst_37439);

(statearr_37530[(15)] = inst_37438);

return statearr_37530;
})();
var statearr_37531_37572 = state_37496__$1;
(statearr_37531_37572[(2)] = null);

(statearr_37531_37572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37497 === (10))){
var inst_37440 = (state_37496[(12)]);
var inst_37437 = (state_37496[(13)]);
var inst_37439 = (state_37496[(14)]);
var inst_37438 = (state_37496[(15)]);
var inst_37445 = cljs.core._nth.call(null,inst_37438,inst_37440);
var inst_37446 = cljs.core.async.muxch_STAR_.call(null,inst_37445);
var inst_37447 = cljs.core.async.close_BANG_.call(null,inst_37446);
var inst_37448 = (inst_37440 + (1));
var tmp37526 = inst_37437;
var tmp37527 = inst_37439;
var tmp37528 = inst_37438;
var inst_37437__$1 = tmp37526;
var inst_37438__$1 = tmp37528;
var inst_37439__$1 = tmp37527;
var inst_37440__$1 = inst_37448;
var state_37496__$1 = (function (){var statearr_37532 = state_37496;
(statearr_37532[(12)] = inst_37440__$1);

(statearr_37532[(17)] = inst_37447);

(statearr_37532[(13)] = inst_37437__$1);

(statearr_37532[(14)] = inst_37439__$1);

(statearr_37532[(15)] = inst_37438__$1);

return statearr_37532;
})();
var statearr_37533_37573 = state_37496__$1;
(statearr_37533_37573[(2)] = null);

(statearr_37533_37573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37497 === (18))){
var inst_37466 = (state_37496[(2)]);
var state_37496__$1 = state_37496;
var statearr_37534_37574 = state_37496__$1;
(statearr_37534_37574[(2)] = inst_37466);

(statearr_37534_37574[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37497 === (8))){
var inst_37440 = (state_37496[(12)]);
var inst_37439 = (state_37496[(14)]);
var inst_37442 = (inst_37440 < inst_37439);
var inst_37443 = inst_37442;
var state_37496__$1 = state_37496;
if(cljs.core.truth_(inst_37443)){
var statearr_37535_37575 = state_37496__$1;
(statearr_37535_37575[(1)] = (10));

} else {
var statearr_37536_37576 = state_37496__$1;
(statearr_37536_37576[(1)] = (11));

}

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
});})(c__21993__auto___37548,mults,ensure_mult,p))
;
return ((function (switch__21881__auto__,c__21993__auto___37548,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21882__auto__ = null;
var cljs$core$async$state_machine__21882__auto____0 = (function (){
var statearr_37540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37540[(0)] = cljs$core$async$state_machine__21882__auto__);

(statearr_37540[(1)] = (1));

return statearr_37540;
});
var cljs$core$async$state_machine__21882__auto____1 = (function (state_37496){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_37496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e37541){if((e37541 instanceof Object)){
var ex__21885__auto__ = e37541;
var statearr_37542_37577 = state_37496;
(statearr_37542_37577[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37578 = state_37496;
state_37496 = G__37578;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
cljs$core$async$state_machine__21882__auto__ = function(state_37496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21882__auto____1.call(this,state_37496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21882__auto____0;
cljs$core$async$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21882__auto____1;
return cljs$core$async$state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto___37548,mults,ensure_mult,p))
})();
var state__21995__auto__ = (function (){var statearr_37543 = f__21994__auto__.call(null);
(statearr_37543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto___37548);

return statearr_37543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto___37548,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args37579 = [];
var len__19507__auto___37582 = arguments.length;
var i__19508__auto___37583 = (0);
while(true){
if((i__19508__auto___37583 < len__19507__auto___37582)){
args37579.push((arguments[i__19508__auto___37583]));

var G__37584 = (i__19508__auto___37583 + (1));
i__19508__auto___37583 = G__37584;
continue;
} else {
}
break;
}

var G__37581 = args37579.length;
switch (G__37581) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37579.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args37586 = [];
var len__19507__auto___37589 = arguments.length;
var i__19508__auto___37590 = (0);
while(true){
if((i__19508__auto___37590 < len__19507__auto___37589)){
args37586.push((arguments[i__19508__auto___37590]));

var G__37591 = (i__19508__auto___37590 + (1));
i__19508__auto___37590 = G__37591;
continue;
} else {
}
break;
}

var G__37588 = args37586.length;
switch (G__37588) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37586.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args37593 = [];
var len__19507__auto___37664 = arguments.length;
var i__19508__auto___37665 = (0);
while(true){
if((i__19508__auto___37665 < len__19507__auto___37664)){
args37593.push((arguments[i__19508__auto___37665]));

var G__37666 = (i__19508__auto___37665 + (1));
i__19508__auto___37665 = G__37666;
continue;
} else {
}
break;
}

var G__37595 = args37593.length;
switch (G__37595) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37593.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21993__auto___37668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto___37668,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto___37668,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37634){
var state_val_37635 = (state_37634[(1)]);
if((state_val_37635 === (7))){
var state_37634__$1 = state_37634;
var statearr_37636_37669 = state_37634__$1;
(statearr_37636_37669[(2)] = null);

(statearr_37636_37669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (1))){
var state_37634__$1 = state_37634;
var statearr_37637_37670 = state_37634__$1;
(statearr_37637_37670[(2)] = null);

(statearr_37637_37670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (4))){
var inst_37598 = (state_37634[(7)]);
var inst_37600 = (inst_37598 < cnt);
var state_37634__$1 = state_37634;
if(cljs.core.truth_(inst_37600)){
var statearr_37638_37671 = state_37634__$1;
(statearr_37638_37671[(1)] = (6));

} else {
var statearr_37639_37672 = state_37634__$1;
(statearr_37639_37672[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (15))){
var inst_37630 = (state_37634[(2)]);
var state_37634__$1 = state_37634;
var statearr_37640_37673 = state_37634__$1;
(statearr_37640_37673[(2)] = inst_37630);

(statearr_37640_37673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (13))){
var inst_37623 = cljs.core.async.close_BANG_.call(null,out);
var state_37634__$1 = state_37634;
var statearr_37641_37674 = state_37634__$1;
(statearr_37641_37674[(2)] = inst_37623);

(statearr_37641_37674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (6))){
var state_37634__$1 = state_37634;
var statearr_37642_37675 = state_37634__$1;
(statearr_37642_37675[(2)] = null);

(statearr_37642_37675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (3))){
var inst_37632 = (state_37634[(2)]);
var state_37634__$1 = state_37634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37634__$1,inst_37632);
} else {
if((state_val_37635 === (12))){
var inst_37620 = (state_37634[(8)]);
var inst_37620__$1 = (state_37634[(2)]);
var inst_37621 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37620__$1);
var state_37634__$1 = (function (){var statearr_37643 = state_37634;
(statearr_37643[(8)] = inst_37620__$1);

return statearr_37643;
})();
if(cljs.core.truth_(inst_37621)){
var statearr_37644_37676 = state_37634__$1;
(statearr_37644_37676[(1)] = (13));

} else {
var statearr_37645_37677 = state_37634__$1;
(statearr_37645_37677[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (2))){
var inst_37597 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_37598 = (0);
var state_37634__$1 = (function (){var statearr_37646 = state_37634;
(statearr_37646[(9)] = inst_37597);

(statearr_37646[(7)] = inst_37598);

return statearr_37646;
})();
var statearr_37647_37678 = state_37634__$1;
(statearr_37647_37678[(2)] = null);

(statearr_37647_37678[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (11))){
var inst_37598 = (state_37634[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37634,(10),Object,null,(9));
var inst_37607 = chs__$1.call(null,inst_37598);
var inst_37608 = done.call(null,inst_37598);
var inst_37609 = cljs.core.async.take_BANG_.call(null,inst_37607,inst_37608);
var state_37634__$1 = state_37634;
var statearr_37648_37679 = state_37634__$1;
(statearr_37648_37679[(2)] = inst_37609);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37634__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (9))){
var inst_37598 = (state_37634[(7)]);
var inst_37611 = (state_37634[(2)]);
var inst_37612 = (inst_37598 + (1));
var inst_37598__$1 = inst_37612;
var state_37634__$1 = (function (){var statearr_37649 = state_37634;
(statearr_37649[(7)] = inst_37598__$1);

(statearr_37649[(10)] = inst_37611);

return statearr_37649;
})();
var statearr_37650_37680 = state_37634__$1;
(statearr_37650_37680[(2)] = null);

(statearr_37650_37680[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (5))){
var inst_37618 = (state_37634[(2)]);
var state_37634__$1 = (function (){var statearr_37651 = state_37634;
(statearr_37651[(11)] = inst_37618);

return statearr_37651;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37634__$1,(12),dchan);
} else {
if((state_val_37635 === (14))){
var inst_37620 = (state_37634[(8)]);
var inst_37625 = cljs.core.apply.call(null,f,inst_37620);
var state_37634__$1 = state_37634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37634__$1,(16),out,inst_37625);
} else {
if((state_val_37635 === (16))){
var inst_37627 = (state_37634[(2)]);
var state_37634__$1 = (function (){var statearr_37652 = state_37634;
(statearr_37652[(12)] = inst_37627);

return statearr_37652;
})();
var statearr_37653_37681 = state_37634__$1;
(statearr_37653_37681[(2)] = null);

(statearr_37653_37681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (10))){
var inst_37602 = (state_37634[(2)]);
var inst_37603 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_37634__$1 = (function (){var statearr_37654 = state_37634;
(statearr_37654[(13)] = inst_37602);

return statearr_37654;
})();
var statearr_37655_37682 = state_37634__$1;
(statearr_37655_37682[(2)] = inst_37603);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37634__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (8))){
var inst_37616 = (state_37634[(2)]);
var state_37634__$1 = state_37634;
var statearr_37656_37683 = state_37634__$1;
(statearr_37656_37683[(2)] = inst_37616);

(statearr_37656_37683[(1)] = (5));


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
});})(c__21993__auto___37668,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21881__auto__,c__21993__auto___37668,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21882__auto__ = null;
var cljs$core$async$state_machine__21882__auto____0 = (function (){
var statearr_37660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37660[(0)] = cljs$core$async$state_machine__21882__auto__);

(statearr_37660[(1)] = (1));

return statearr_37660;
});
var cljs$core$async$state_machine__21882__auto____1 = (function (state_37634){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_37634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e37661){if((e37661 instanceof Object)){
var ex__21885__auto__ = e37661;
var statearr_37662_37684 = state_37634;
(statearr_37662_37684[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37685 = state_37634;
state_37634 = G__37685;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
cljs$core$async$state_machine__21882__auto__ = function(state_37634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21882__auto____1.call(this,state_37634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21882__auto____0;
cljs$core$async$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21882__auto____1;
return cljs$core$async$state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto___37668,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21995__auto__ = (function (){var statearr_37663 = f__21994__auto__.call(null);
(statearr_37663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto___37668);

return statearr_37663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto___37668,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args37687 = [];
var len__19507__auto___37743 = arguments.length;
var i__19508__auto___37744 = (0);
while(true){
if((i__19508__auto___37744 < len__19507__auto___37743)){
args37687.push((arguments[i__19508__auto___37744]));

var G__37745 = (i__19508__auto___37744 + (1));
i__19508__auto___37744 = G__37745;
continue;
} else {
}
break;
}

var G__37689 = args37687.length;
switch (G__37689) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37687.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21993__auto___37747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto___37747,out){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto___37747,out){
return (function (state_37719){
var state_val_37720 = (state_37719[(1)]);
if((state_val_37720 === (7))){
var inst_37699 = (state_37719[(7)]);
var inst_37698 = (state_37719[(8)]);
var inst_37698__$1 = (state_37719[(2)]);
var inst_37699__$1 = cljs.core.nth.call(null,inst_37698__$1,(0),null);
var inst_37700 = cljs.core.nth.call(null,inst_37698__$1,(1),null);
var inst_37701 = (inst_37699__$1 == null);
var state_37719__$1 = (function (){var statearr_37721 = state_37719;
(statearr_37721[(7)] = inst_37699__$1);

(statearr_37721[(8)] = inst_37698__$1);

(statearr_37721[(9)] = inst_37700);

return statearr_37721;
})();
if(cljs.core.truth_(inst_37701)){
var statearr_37722_37748 = state_37719__$1;
(statearr_37722_37748[(1)] = (8));

} else {
var statearr_37723_37749 = state_37719__$1;
(statearr_37723_37749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (1))){
var inst_37690 = cljs.core.vec.call(null,chs);
var inst_37691 = inst_37690;
var state_37719__$1 = (function (){var statearr_37724 = state_37719;
(statearr_37724[(10)] = inst_37691);

return statearr_37724;
})();
var statearr_37725_37750 = state_37719__$1;
(statearr_37725_37750[(2)] = null);

(statearr_37725_37750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (4))){
var inst_37691 = (state_37719[(10)]);
var state_37719__$1 = state_37719;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37719__$1,(7),inst_37691);
} else {
if((state_val_37720 === (6))){
var inst_37715 = (state_37719[(2)]);
var state_37719__$1 = state_37719;
var statearr_37726_37751 = state_37719__$1;
(statearr_37726_37751[(2)] = inst_37715);

(statearr_37726_37751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (3))){
var inst_37717 = (state_37719[(2)]);
var state_37719__$1 = state_37719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37719__$1,inst_37717);
} else {
if((state_val_37720 === (2))){
var inst_37691 = (state_37719[(10)]);
var inst_37693 = cljs.core.count.call(null,inst_37691);
var inst_37694 = (inst_37693 > (0));
var state_37719__$1 = state_37719;
if(cljs.core.truth_(inst_37694)){
var statearr_37728_37752 = state_37719__$1;
(statearr_37728_37752[(1)] = (4));

} else {
var statearr_37729_37753 = state_37719__$1;
(statearr_37729_37753[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (11))){
var inst_37691 = (state_37719[(10)]);
var inst_37708 = (state_37719[(2)]);
var tmp37727 = inst_37691;
var inst_37691__$1 = tmp37727;
var state_37719__$1 = (function (){var statearr_37730 = state_37719;
(statearr_37730[(11)] = inst_37708);

(statearr_37730[(10)] = inst_37691__$1);

return statearr_37730;
})();
var statearr_37731_37754 = state_37719__$1;
(statearr_37731_37754[(2)] = null);

(statearr_37731_37754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (9))){
var inst_37699 = (state_37719[(7)]);
var state_37719__$1 = state_37719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37719__$1,(11),out,inst_37699);
} else {
if((state_val_37720 === (5))){
var inst_37713 = cljs.core.async.close_BANG_.call(null,out);
var state_37719__$1 = state_37719;
var statearr_37732_37755 = state_37719__$1;
(statearr_37732_37755[(2)] = inst_37713);

(statearr_37732_37755[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (10))){
var inst_37711 = (state_37719[(2)]);
var state_37719__$1 = state_37719;
var statearr_37733_37756 = state_37719__$1;
(statearr_37733_37756[(2)] = inst_37711);

(statearr_37733_37756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (8))){
var inst_37699 = (state_37719[(7)]);
var inst_37691 = (state_37719[(10)]);
var inst_37698 = (state_37719[(8)]);
var inst_37700 = (state_37719[(9)]);
var inst_37703 = (function (){var cs = inst_37691;
var vec__37696 = inst_37698;
var v = inst_37699;
var c = inst_37700;
return ((function (cs,vec__37696,v,c,inst_37699,inst_37691,inst_37698,inst_37700,state_val_37720,c__21993__auto___37747,out){
return (function (p1__37686_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__37686_SHARP_);
});
;})(cs,vec__37696,v,c,inst_37699,inst_37691,inst_37698,inst_37700,state_val_37720,c__21993__auto___37747,out))
})();
var inst_37704 = cljs.core.filterv.call(null,inst_37703,inst_37691);
var inst_37691__$1 = inst_37704;
var state_37719__$1 = (function (){var statearr_37734 = state_37719;
(statearr_37734[(10)] = inst_37691__$1);

return statearr_37734;
})();
var statearr_37735_37757 = state_37719__$1;
(statearr_37735_37757[(2)] = null);

(statearr_37735_37757[(1)] = (2));


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
});})(c__21993__auto___37747,out))
;
return ((function (switch__21881__auto__,c__21993__auto___37747,out){
return (function() {
var cljs$core$async$state_machine__21882__auto__ = null;
var cljs$core$async$state_machine__21882__auto____0 = (function (){
var statearr_37739 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37739[(0)] = cljs$core$async$state_machine__21882__auto__);

(statearr_37739[(1)] = (1));

return statearr_37739;
});
var cljs$core$async$state_machine__21882__auto____1 = (function (state_37719){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_37719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e37740){if((e37740 instanceof Object)){
var ex__21885__auto__ = e37740;
var statearr_37741_37758 = state_37719;
(statearr_37741_37758[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37759 = state_37719;
state_37719 = G__37759;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
cljs$core$async$state_machine__21882__auto__ = function(state_37719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21882__auto____1.call(this,state_37719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21882__auto____0;
cljs$core$async$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21882__auto____1;
return cljs$core$async$state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto___37747,out))
})();
var state__21995__auto__ = (function (){var statearr_37742 = f__21994__auto__.call(null);
(statearr_37742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto___37747);

return statearr_37742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto___37747,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args37760 = [];
var len__19507__auto___37809 = arguments.length;
var i__19508__auto___37810 = (0);
while(true){
if((i__19508__auto___37810 < len__19507__auto___37809)){
args37760.push((arguments[i__19508__auto___37810]));

var G__37811 = (i__19508__auto___37810 + (1));
i__19508__auto___37810 = G__37811;
continue;
} else {
}
break;
}

var G__37762 = args37760.length;
switch (G__37762) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37760.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21993__auto___37813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto___37813,out){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto___37813,out){
return (function (state_37786){
var state_val_37787 = (state_37786[(1)]);
if((state_val_37787 === (7))){
var inst_37768 = (state_37786[(7)]);
var inst_37768__$1 = (state_37786[(2)]);
var inst_37769 = (inst_37768__$1 == null);
var inst_37770 = cljs.core.not.call(null,inst_37769);
var state_37786__$1 = (function (){var statearr_37788 = state_37786;
(statearr_37788[(7)] = inst_37768__$1);

return statearr_37788;
})();
if(inst_37770){
var statearr_37789_37814 = state_37786__$1;
(statearr_37789_37814[(1)] = (8));

} else {
var statearr_37790_37815 = state_37786__$1;
(statearr_37790_37815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37787 === (1))){
var inst_37763 = (0);
var state_37786__$1 = (function (){var statearr_37791 = state_37786;
(statearr_37791[(8)] = inst_37763);

return statearr_37791;
})();
var statearr_37792_37816 = state_37786__$1;
(statearr_37792_37816[(2)] = null);

(statearr_37792_37816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37787 === (4))){
var state_37786__$1 = state_37786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37786__$1,(7),ch);
} else {
if((state_val_37787 === (6))){
var inst_37781 = (state_37786[(2)]);
var state_37786__$1 = state_37786;
var statearr_37793_37817 = state_37786__$1;
(statearr_37793_37817[(2)] = inst_37781);

(statearr_37793_37817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37787 === (3))){
var inst_37783 = (state_37786[(2)]);
var inst_37784 = cljs.core.async.close_BANG_.call(null,out);
var state_37786__$1 = (function (){var statearr_37794 = state_37786;
(statearr_37794[(9)] = inst_37783);

return statearr_37794;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37786__$1,inst_37784);
} else {
if((state_val_37787 === (2))){
var inst_37763 = (state_37786[(8)]);
var inst_37765 = (inst_37763 < n);
var state_37786__$1 = state_37786;
if(cljs.core.truth_(inst_37765)){
var statearr_37795_37818 = state_37786__$1;
(statearr_37795_37818[(1)] = (4));

} else {
var statearr_37796_37819 = state_37786__$1;
(statearr_37796_37819[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37787 === (11))){
var inst_37763 = (state_37786[(8)]);
var inst_37773 = (state_37786[(2)]);
var inst_37774 = (inst_37763 + (1));
var inst_37763__$1 = inst_37774;
var state_37786__$1 = (function (){var statearr_37797 = state_37786;
(statearr_37797[(10)] = inst_37773);

(statearr_37797[(8)] = inst_37763__$1);

return statearr_37797;
})();
var statearr_37798_37820 = state_37786__$1;
(statearr_37798_37820[(2)] = null);

(statearr_37798_37820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37787 === (9))){
var state_37786__$1 = state_37786;
var statearr_37799_37821 = state_37786__$1;
(statearr_37799_37821[(2)] = null);

(statearr_37799_37821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37787 === (5))){
var state_37786__$1 = state_37786;
var statearr_37800_37822 = state_37786__$1;
(statearr_37800_37822[(2)] = null);

(statearr_37800_37822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37787 === (10))){
var inst_37778 = (state_37786[(2)]);
var state_37786__$1 = state_37786;
var statearr_37801_37823 = state_37786__$1;
(statearr_37801_37823[(2)] = inst_37778);

(statearr_37801_37823[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37787 === (8))){
var inst_37768 = (state_37786[(7)]);
var state_37786__$1 = state_37786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37786__$1,(11),out,inst_37768);
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
});})(c__21993__auto___37813,out))
;
return ((function (switch__21881__auto__,c__21993__auto___37813,out){
return (function() {
var cljs$core$async$state_machine__21882__auto__ = null;
var cljs$core$async$state_machine__21882__auto____0 = (function (){
var statearr_37805 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37805[(0)] = cljs$core$async$state_machine__21882__auto__);

(statearr_37805[(1)] = (1));

return statearr_37805;
});
var cljs$core$async$state_machine__21882__auto____1 = (function (state_37786){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_37786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e37806){if((e37806 instanceof Object)){
var ex__21885__auto__ = e37806;
var statearr_37807_37824 = state_37786;
(statearr_37807_37824[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37825 = state_37786;
state_37786 = G__37825;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
cljs$core$async$state_machine__21882__auto__ = function(state_37786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21882__auto____1.call(this,state_37786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21882__auto____0;
cljs$core$async$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21882__auto____1;
return cljs$core$async$state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto___37813,out))
})();
var state__21995__auto__ = (function (){var statearr_37808 = f__21994__auto__.call(null);
(statearr_37808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto___37813);

return statearr_37808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto___37813,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async37833 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37833 = (function (map_LT_,f,ch,meta37834){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta37834 = meta37834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37835,meta37834__$1){
var self__ = this;
var _37835__$1 = this;
return (new cljs.core.async.t_cljs$core$async37833(self__.map_LT_,self__.f,self__.ch,meta37834__$1));
});

cljs.core.async.t_cljs$core$async37833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37835){
var self__ = this;
var _37835__$1 = this;
return self__.meta37834;
});

cljs.core.async.t_cljs$core$async37833.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async37833.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37833.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37833.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async37833.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async37836 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37836 = (function (map_LT_,f,ch,meta37834,_,fn1,meta37837){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta37834 = meta37834;
this._ = _;
this.fn1 = fn1;
this.meta37837 = meta37837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_37838,meta37837__$1){
var self__ = this;
var _37838__$1 = this;
return (new cljs.core.async.t_cljs$core$async37836(self__.map_LT_,self__.f,self__.ch,self__.meta37834,self__._,self__.fn1,meta37837__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async37836.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_37838){
var self__ = this;
var _37838__$1 = this;
return self__.meta37837;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37836.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37836.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37836.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37836.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__37826_SHARP_){
return f1.call(null,(((p1__37826_SHARP_ == null))?null:self__.f.call(null,p1__37826_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async37836.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37834","meta37834",-91214440,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37833","cljs.core.async/t_cljs$core$async37833",-1119270507,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37837","meta37837",1335016362,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37836.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37836";

cljs.core.async.t_cljs$core$async37836.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"cljs.core.async/t_cljs$core$async37836");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async37836 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37836(map_LT___$1,f__$1,ch__$1,meta37834__$1,___$2,fn1__$1,meta37837){
return (new cljs.core.async.t_cljs$core$async37836(map_LT___$1,f__$1,ch__$1,meta37834__$1,___$2,fn1__$1,meta37837));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async37836(self__.map_LT_,self__.f,self__.ch,self__.meta37834,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18426__auto__ = ret;
if(cljs.core.truth_(and__18426__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18426__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async37833.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async37833.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async37833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37834","meta37834",-91214440,null)], null);
});

cljs.core.async.t_cljs$core$async37833.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37833";

cljs.core.async.t_cljs$core$async37833.cljs$lang$ctorPrWriter = (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"cljs.core.async/t_cljs$core$async37833");
});

cljs.core.async.__GT_t_cljs$core$async37833 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37833(map_LT___$1,f__$1,ch__$1,meta37834){
return (new cljs.core.async.t_cljs$core$async37833(map_LT___$1,f__$1,ch__$1,meta37834));
});

}

return (new cljs.core.async.t_cljs$core$async37833(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async37842 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37842 = (function (map_GT_,f,ch,meta37843){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta37843 = meta37843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37844,meta37843__$1){
var self__ = this;
var _37844__$1 = this;
return (new cljs.core.async.t_cljs$core$async37842(self__.map_GT_,self__.f,self__.ch,meta37843__$1));
});

cljs.core.async.t_cljs$core$async37842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37844){
var self__ = this;
var _37844__$1 = this;
return self__.meta37843;
});

cljs.core.async.t_cljs$core$async37842.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async37842.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37842.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async37842.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37842.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async37842.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async37842.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37843","meta37843",-1858126251,null)], null);
});

cljs.core.async.t_cljs$core$async37842.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37842.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37842";

cljs.core.async.t_cljs$core$async37842.cljs$lang$ctorPrWriter = (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"cljs.core.async/t_cljs$core$async37842");
});

cljs.core.async.__GT_t_cljs$core$async37842 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37842(map_GT___$1,f__$1,ch__$1,meta37843){
return (new cljs.core.async.t_cljs$core$async37842(map_GT___$1,f__$1,ch__$1,meta37843));
});

}

return (new cljs.core.async.t_cljs$core$async37842(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async37848 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37848 = (function (filter_GT_,p,ch,meta37849){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta37849 = meta37849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37850,meta37849__$1){
var self__ = this;
var _37850__$1 = this;
return (new cljs.core.async.t_cljs$core$async37848(self__.filter_GT_,self__.p,self__.ch,meta37849__$1));
});

cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37850){
var self__ = this;
var _37850__$1 = this;
return self__.meta37849;
});

cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async37848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37849","meta37849",1684049120,null)], null);
});

cljs.core.async.t_cljs$core$async37848.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37848";

cljs.core.async.t_cljs$core$async37848.cljs$lang$ctorPrWriter = (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"cljs.core.async/t_cljs$core$async37848");
});

cljs.core.async.__GT_t_cljs$core$async37848 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37848(filter_GT___$1,p__$1,ch__$1,meta37849){
return (new cljs.core.async.t_cljs$core$async37848(filter_GT___$1,p__$1,ch__$1,meta37849));
});

}

return (new cljs.core.async.t_cljs$core$async37848(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args37851 = [];
var len__19507__auto___37895 = arguments.length;
var i__19508__auto___37896 = (0);
while(true){
if((i__19508__auto___37896 < len__19507__auto___37895)){
args37851.push((arguments[i__19508__auto___37896]));

var G__37897 = (i__19508__auto___37896 + (1));
i__19508__auto___37896 = G__37897;
continue;
} else {
}
break;
}

var G__37853 = args37851.length;
switch (G__37853) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37851.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21993__auto___37899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto___37899,out){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto___37899,out){
return (function (state_37874){
var state_val_37875 = (state_37874[(1)]);
if((state_val_37875 === (7))){
var inst_37870 = (state_37874[(2)]);
var state_37874__$1 = state_37874;
var statearr_37876_37900 = state_37874__$1;
(statearr_37876_37900[(2)] = inst_37870);

(statearr_37876_37900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37875 === (1))){
var state_37874__$1 = state_37874;
var statearr_37877_37901 = state_37874__$1;
(statearr_37877_37901[(2)] = null);

(statearr_37877_37901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37875 === (4))){
var inst_37856 = (state_37874[(7)]);
var inst_37856__$1 = (state_37874[(2)]);
var inst_37857 = (inst_37856__$1 == null);
var state_37874__$1 = (function (){var statearr_37878 = state_37874;
(statearr_37878[(7)] = inst_37856__$1);

return statearr_37878;
})();
if(cljs.core.truth_(inst_37857)){
var statearr_37879_37902 = state_37874__$1;
(statearr_37879_37902[(1)] = (5));

} else {
var statearr_37880_37903 = state_37874__$1;
(statearr_37880_37903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37875 === (6))){
var inst_37856 = (state_37874[(7)]);
var inst_37861 = p.call(null,inst_37856);
var state_37874__$1 = state_37874;
if(cljs.core.truth_(inst_37861)){
var statearr_37881_37904 = state_37874__$1;
(statearr_37881_37904[(1)] = (8));

} else {
var statearr_37882_37905 = state_37874__$1;
(statearr_37882_37905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37875 === (3))){
var inst_37872 = (state_37874[(2)]);
var state_37874__$1 = state_37874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37874__$1,inst_37872);
} else {
if((state_val_37875 === (2))){
var state_37874__$1 = state_37874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37874__$1,(4),ch);
} else {
if((state_val_37875 === (11))){
var inst_37864 = (state_37874[(2)]);
var state_37874__$1 = state_37874;
var statearr_37883_37906 = state_37874__$1;
(statearr_37883_37906[(2)] = inst_37864);

(statearr_37883_37906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37875 === (9))){
var state_37874__$1 = state_37874;
var statearr_37884_37907 = state_37874__$1;
(statearr_37884_37907[(2)] = null);

(statearr_37884_37907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37875 === (5))){
var inst_37859 = cljs.core.async.close_BANG_.call(null,out);
var state_37874__$1 = state_37874;
var statearr_37885_37908 = state_37874__$1;
(statearr_37885_37908[(2)] = inst_37859);

(statearr_37885_37908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37875 === (10))){
var inst_37867 = (state_37874[(2)]);
var state_37874__$1 = (function (){var statearr_37886 = state_37874;
(statearr_37886[(8)] = inst_37867);

return statearr_37886;
})();
var statearr_37887_37909 = state_37874__$1;
(statearr_37887_37909[(2)] = null);

(statearr_37887_37909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37875 === (8))){
var inst_37856 = (state_37874[(7)]);
var state_37874__$1 = state_37874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37874__$1,(11),out,inst_37856);
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
});})(c__21993__auto___37899,out))
;
return ((function (switch__21881__auto__,c__21993__auto___37899,out){
return (function() {
var cljs$core$async$state_machine__21882__auto__ = null;
var cljs$core$async$state_machine__21882__auto____0 = (function (){
var statearr_37891 = [null,null,null,null,null,null,null,null,null];
(statearr_37891[(0)] = cljs$core$async$state_machine__21882__auto__);

(statearr_37891[(1)] = (1));

return statearr_37891;
});
var cljs$core$async$state_machine__21882__auto____1 = (function (state_37874){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_37874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e37892){if((e37892 instanceof Object)){
var ex__21885__auto__ = e37892;
var statearr_37893_37910 = state_37874;
(statearr_37893_37910[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37911 = state_37874;
state_37874 = G__37911;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
cljs$core$async$state_machine__21882__auto__ = function(state_37874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21882__auto____1.call(this,state_37874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21882__auto____0;
cljs$core$async$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21882__auto____1;
return cljs$core$async$state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto___37899,out))
})();
var state__21995__auto__ = (function (){var statearr_37894 = f__21994__auto__.call(null);
(statearr_37894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto___37899);

return statearr_37894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto___37899,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args37912 = [];
var len__19507__auto___37915 = arguments.length;
var i__19508__auto___37916 = (0);
while(true){
if((i__19508__auto___37916 < len__19507__auto___37915)){
args37912.push((arguments[i__19508__auto___37916]));

var G__37917 = (i__19508__auto___37916 + (1));
i__19508__auto___37916 = G__37917;
continue;
} else {
}
break;
}

var G__37914 = args37912.length;
switch (G__37914) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37912.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto__){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto__){
return (function (state_38084){
var state_val_38085 = (state_38084[(1)]);
if((state_val_38085 === (7))){
var inst_38080 = (state_38084[(2)]);
var state_38084__$1 = state_38084;
var statearr_38086_38127 = state_38084__$1;
(statearr_38086_38127[(2)] = inst_38080);

(statearr_38086_38127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (20))){
var inst_38050 = (state_38084[(7)]);
var inst_38061 = (state_38084[(2)]);
var inst_38062 = cljs.core.next.call(null,inst_38050);
var inst_38036 = inst_38062;
var inst_38037 = null;
var inst_38038 = (0);
var inst_38039 = (0);
var state_38084__$1 = (function (){var statearr_38087 = state_38084;
(statearr_38087[(8)] = inst_38036);

(statearr_38087[(9)] = inst_38037);

(statearr_38087[(10)] = inst_38039);

(statearr_38087[(11)] = inst_38038);

(statearr_38087[(12)] = inst_38061);

return statearr_38087;
})();
var statearr_38088_38128 = state_38084__$1;
(statearr_38088_38128[(2)] = null);

(statearr_38088_38128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (1))){
var state_38084__$1 = state_38084;
var statearr_38089_38129 = state_38084__$1;
(statearr_38089_38129[(2)] = null);

(statearr_38089_38129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (4))){
var inst_38025 = (state_38084[(13)]);
var inst_38025__$1 = (state_38084[(2)]);
var inst_38026 = (inst_38025__$1 == null);
var state_38084__$1 = (function (){var statearr_38090 = state_38084;
(statearr_38090[(13)] = inst_38025__$1);

return statearr_38090;
})();
if(cljs.core.truth_(inst_38026)){
var statearr_38091_38130 = state_38084__$1;
(statearr_38091_38130[(1)] = (5));

} else {
var statearr_38092_38131 = state_38084__$1;
(statearr_38092_38131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (15))){
var state_38084__$1 = state_38084;
var statearr_38096_38132 = state_38084__$1;
(statearr_38096_38132[(2)] = null);

(statearr_38096_38132[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (21))){
var state_38084__$1 = state_38084;
var statearr_38097_38133 = state_38084__$1;
(statearr_38097_38133[(2)] = null);

(statearr_38097_38133[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (13))){
var inst_38036 = (state_38084[(8)]);
var inst_38037 = (state_38084[(9)]);
var inst_38039 = (state_38084[(10)]);
var inst_38038 = (state_38084[(11)]);
var inst_38046 = (state_38084[(2)]);
var inst_38047 = (inst_38039 + (1));
var tmp38093 = inst_38036;
var tmp38094 = inst_38037;
var tmp38095 = inst_38038;
var inst_38036__$1 = tmp38093;
var inst_38037__$1 = tmp38094;
var inst_38038__$1 = tmp38095;
var inst_38039__$1 = inst_38047;
var state_38084__$1 = (function (){var statearr_38098 = state_38084;
(statearr_38098[(14)] = inst_38046);

(statearr_38098[(8)] = inst_38036__$1);

(statearr_38098[(9)] = inst_38037__$1);

(statearr_38098[(10)] = inst_38039__$1);

(statearr_38098[(11)] = inst_38038__$1);

return statearr_38098;
})();
var statearr_38099_38134 = state_38084__$1;
(statearr_38099_38134[(2)] = null);

(statearr_38099_38134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (22))){
var state_38084__$1 = state_38084;
var statearr_38100_38135 = state_38084__$1;
(statearr_38100_38135[(2)] = null);

(statearr_38100_38135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (6))){
var inst_38025 = (state_38084[(13)]);
var inst_38034 = f.call(null,inst_38025);
var inst_38035 = cljs.core.seq.call(null,inst_38034);
var inst_38036 = inst_38035;
var inst_38037 = null;
var inst_38038 = (0);
var inst_38039 = (0);
var state_38084__$1 = (function (){var statearr_38101 = state_38084;
(statearr_38101[(8)] = inst_38036);

(statearr_38101[(9)] = inst_38037);

(statearr_38101[(10)] = inst_38039);

(statearr_38101[(11)] = inst_38038);

return statearr_38101;
})();
var statearr_38102_38136 = state_38084__$1;
(statearr_38102_38136[(2)] = null);

(statearr_38102_38136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (17))){
var inst_38050 = (state_38084[(7)]);
var inst_38054 = cljs.core.chunk_first.call(null,inst_38050);
var inst_38055 = cljs.core.chunk_rest.call(null,inst_38050);
var inst_38056 = cljs.core.count.call(null,inst_38054);
var inst_38036 = inst_38055;
var inst_38037 = inst_38054;
var inst_38038 = inst_38056;
var inst_38039 = (0);
var state_38084__$1 = (function (){var statearr_38103 = state_38084;
(statearr_38103[(8)] = inst_38036);

(statearr_38103[(9)] = inst_38037);

(statearr_38103[(10)] = inst_38039);

(statearr_38103[(11)] = inst_38038);

return statearr_38103;
})();
var statearr_38104_38137 = state_38084__$1;
(statearr_38104_38137[(2)] = null);

(statearr_38104_38137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (3))){
var inst_38082 = (state_38084[(2)]);
var state_38084__$1 = state_38084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38084__$1,inst_38082);
} else {
if((state_val_38085 === (12))){
var inst_38070 = (state_38084[(2)]);
var state_38084__$1 = state_38084;
var statearr_38105_38138 = state_38084__$1;
(statearr_38105_38138[(2)] = inst_38070);

(statearr_38105_38138[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (2))){
var state_38084__$1 = state_38084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38084__$1,(4),in$);
} else {
if((state_val_38085 === (23))){
var inst_38078 = (state_38084[(2)]);
var state_38084__$1 = state_38084;
var statearr_38106_38139 = state_38084__$1;
(statearr_38106_38139[(2)] = inst_38078);

(statearr_38106_38139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (19))){
var inst_38065 = (state_38084[(2)]);
var state_38084__$1 = state_38084;
var statearr_38107_38140 = state_38084__$1;
(statearr_38107_38140[(2)] = inst_38065);

(statearr_38107_38140[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (11))){
var inst_38036 = (state_38084[(8)]);
var inst_38050 = (state_38084[(7)]);
var inst_38050__$1 = cljs.core.seq.call(null,inst_38036);
var state_38084__$1 = (function (){var statearr_38108 = state_38084;
(statearr_38108[(7)] = inst_38050__$1);

return statearr_38108;
})();
if(inst_38050__$1){
var statearr_38109_38141 = state_38084__$1;
(statearr_38109_38141[(1)] = (14));

} else {
var statearr_38110_38142 = state_38084__$1;
(statearr_38110_38142[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (9))){
var inst_38072 = (state_38084[(2)]);
var inst_38073 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38084__$1 = (function (){var statearr_38111 = state_38084;
(statearr_38111[(15)] = inst_38072);

return statearr_38111;
})();
if(cljs.core.truth_(inst_38073)){
var statearr_38112_38143 = state_38084__$1;
(statearr_38112_38143[(1)] = (21));

} else {
var statearr_38113_38144 = state_38084__$1;
(statearr_38113_38144[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (5))){
var inst_38028 = cljs.core.async.close_BANG_.call(null,out);
var state_38084__$1 = state_38084;
var statearr_38114_38145 = state_38084__$1;
(statearr_38114_38145[(2)] = inst_38028);

(statearr_38114_38145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (14))){
var inst_38050 = (state_38084[(7)]);
var inst_38052 = cljs.core.chunked_seq_QMARK_.call(null,inst_38050);
var state_38084__$1 = state_38084;
if(inst_38052){
var statearr_38115_38146 = state_38084__$1;
(statearr_38115_38146[(1)] = (17));

} else {
var statearr_38116_38147 = state_38084__$1;
(statearr_38116_38147[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (16))){
var inst_38068 = (state_38084[(2)]);
var state_38084__$1 = state_38084;
var statearr_38117_38148 = state_38084__$1;
(statearr_38117_38148[(2)] = inst_38068);

(statearr_38117_38148[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38085 === (10))){
var inst_38037 = (state_38084[(9)]);
var inst_38039 = (state_38084[(10)]);
var inst_38044 = cljs.core._nth.call(null,inst_38037,inst_38039);
var state_38084__$1 = state_38084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38084__$1,(13),out,inst_38044);
} else {
if((state_val_38085 === (18))){
var inst_38050 = (state_38084[(7)]);
var inst_38059 = cljs.core.first.call(null,inst_38050);
var state_38084__$1 = state_38084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38084__$1,(20),out,inst_38059);
} else {
if((state_val_38085 === (8))){
var inst_38039 = (state_38084[(10)]);
var inst_38038 = (state_38084[(11)]);
var inst_38041 = (inst_38039 < inst_38038);
var inst_38042 = inst_38041;
var state_38084__$1 = state_38084;
if(cljs.core.truth_(inst_38042)){
var statearr_38118_38149 = state_38084__$1;
(statearr_38118_38149[(1)] = (10));

} else {
var statearr_38119_38150 = state_38084__$1;
(statearr_38119_38150[(1)] = (11));

}

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
});})(c__21993__auto__))
;
return ((function (switch__21881__auto__,c__21993__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21882__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21882__auto____0 = (function (){
var statearr_38123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38123[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21882__auto__);

(statearr_38123[(1)] = (1));

return statearr_38123;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21882__auto____1 = (function (state_38084){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_38084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e38124){if((e38124 instanceof Object)){
var ex__21885__auto__ = e38124;
var statearr_38125_38151 = state_38084;
(statearr_38125_38151[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38152 = state_38084;
state_38084 = G__38152;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21882__auto__ = function(state_38084){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21882__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21882__auto____1.call(this,state_38084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21882__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21882__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto__))
})();
var state__21995__auto__ = (function (){var statearr_38126 = f__21994__auto__.call(null);
(statearr_38126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto__);

return statearr_38126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto__))
);

return c__21993__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args38153 = [];
var len__19507__auto___38156 = arguments.length;
var i__19508__auto___38157 = (0);
while(true){
if((i__19508__auto___38157 < len__19507__auto___38156)){
args38153.push((arguments[i__19508__auto___38157]));

var G__38158 = (i__19508__auto___38157 + (1));
i__19508__auto___38157 = G__38158;
continue;
} else {
}
break;
}

var G__38155 = args38153.length;
switch (G__38155) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38153.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args38160 = [];
var len__19507__auto___38163 = arguments.length;
var i__19508__auto___38164 = (0);
while(true){
if((i__19508__auto___38164 < len__19507__auto___38163)){
args38160.push((arguments[i__19508__auto___38164]));

var G__38165 = (i__19508__auto___38164 + (1));
i__19508__auto___38164 = G__38165;
continue;
} else {
}
break;
}

var G__38162 = args38160.length;
switch (G__38162) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38160.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args38167 = [];
var len__19507__auto___38218 = arguments.length;
var i__19508__auto___38219 = (0);
while(true){
if((i__19508__auto___38219 < len__19507__auto___38218)){
args38167.push((arguments[i__19508__auto___38219]));

var G__38220 = (i__19508__auto___38219 + (1));
i__19508__auto___38219 = G__38220;
continue;
} else {
}
break;
}

var G__38169 = args38167.length;
switch (G__38169) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38167.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21993__auto___38222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto___38222,out){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto___38222,out){
return (function (state_38193){
var state_val_38194 = (state_38193[(1)]);
if((state_val_38194 === (7))){
var inst_38188 = (state_38193[(2)]);
var state_38193__$1 = state_38193;
var statearr_38195_38223 = state_38193__$1;
(statearr_38195_38223[(2)] = inst_38188);

(statearr_38195_38223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38194 === (1))){
var inst_38170 = null;
var state_38193__$1 = (function (){var statearr_38196 = state_38193;
(statearr_38196[(7)] = inst_38170);

return statearr_38196;
})();
var statearr_38197_38224 = state_38193__$1;
(statearr_38197_38224[(2)] = null);

(statearr_38197_38224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38194 === (4))){
var inst_38173 = (state_38193[(8)]);
var inst_38173__$1 = (state_38193[(2)]);
var inst_38174 = (inst_38173__$1 == null);
var inst_38175 = cljs.core.not.call(null,inst_38174);
var state_38193__$1 = (function (){var statearr_38198 = state_38193;
(statearr_38198[(8)] = inst_38173__$1);

return statearr_38198;
})();
if(inst_38175){
var statearr_38199_38225 = state_38193__$1;
(statearr_38199_38225[(1)] = (5));

} else {
var statearr_38200_38226 = state_38193__$1;
(statearr_38200_38226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38194 === (6))){
var state_38193__$1 = state_38193;
var statearr_38201_38227 = state_38193__$1;
(statearr_38201_38227[(2)] = null);

(statearr_38201_38227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38194 === (3))){
var inst_38190 = (state_38193[(2)]);
var inst_38191 = cljs.core.async.close_BANG_.call(null,out);
var state_38193__$1 = (function (){var statearr_38202 = state_38193;
(statearr_38202[(9)] = inst_38190);

return statearr_38202;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38193__$1,inst_38191);
} else {
if((state_val_38194 === (2))){
var state_38193__$1 = state_38193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38193__$1,(4),ch);
} else {
if((state_val_38194 === (11))){
var inst_38173 = (state_38193[(8)]);
var inst_38182 = (state_38193[(2)]);
var inst_38170 = inst_38173;
var state_38193__$1 = (function (){var statearr_38203 = state_38193;
(statearr_38203[(10)] = inst_38182);

(statearr_38203[(7)] = inst_38170);

return statearr_38203;
})();
var statearr_38204_38228 = state_38193__$1;
(statearr_38204_38228[(2)] = null);

(statearr_38204_38228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38194 === (9))){
var inst_38173 = (state_38193[(8)]);
var state_38193__$1 = state_38193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38193__$1,(11),out,inst_38173);
} else {
if((state_val_38194 === (5))){
var inst_38173 = (state_38193[(8)]);
var inst_38170 = (state_38193[(7)]);
var inst_38177 = cljs.core._EQ_.call(null,inst_38173,inst_38170);
var state_38193__$1 = state_38193;
if(inst_38177){
var statearr_38206_38229 = state_38193__$1;
(statearr_38206_38229[(1)] = (8));

} else {
var statearr_38207_38230 = state_38193__$1;
(statearr_38207_38230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38194 === (10))){
var inst_38185 = (state_38193[(2)]);
var state_38193__$1 = state_38193;
var statearr_38208_38231 = state_38193__$1;
(statearr_38208_38231[(2)] = inst_38185);

(statearr_38208_38231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38194 === (8))){
var inst_38170 = (state_38193[(7)]);
var tmp38205 = inst_38170;
var inst_38170__$1 = tmp38205;
var state_38193__$1 = (function (){var statearr_38209 = state_38193;
(statearr_38209[(7)] = inst_38170__$1);

return statearr_38209;
})();
var statearr_38210_38232 = state_38193__$1;
(statearr_38210_38232[(2)] = null);

(statearr_38210_38232[(1)] = (2));


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
});})(c__21993__auto___38222,out))
;
return ((function (switch__21881__auto__,c__21993__auto___38222,out){
return (function() {
var cljs$core$async$state_machine__21882__auto__ = null;
var cljs$core$async$state_machine__21882__auto____0 = (function (){
var statearr_38214 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38214[(0)] = cljs$core$async$state_machine__21882__auto__);

(statearr_38214[(1)] = (1));

return statearr_38214;
});
var cljs$core$async$state_machine__21882__auto____1 = (function (state_38193){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_38193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e38215){if((e38215 instanceof Object)){
var ex__21885__auto__ = e38215;
var statearr_38216_38233 = state_38193;
(statearr_38216_38233[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38234 = state_38193;
state_38193 = G__38234;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
cljs$core$async$state_machine__21882__auto__ = function(state_38193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21882__auto____1.call(this,state_38193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21882__auto____0;
cljs$core$async$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21882__auto____1;
return cljs$core$async$state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto___38222,out))
})();
var state__21995__auto__ = (function (){var statearr_38217 = f__21994__auto__.call(null);
(statearr_38217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto___38222);

return statearr_38217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto___38222,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args38235 = [];
var len__19507__auto___38305 = arguments.length;
var i__19508__auto___38306 = (0);
while(true){
if((i__19508__auto___38306 < len__19507__auto___38305)){
args38235.push((arguments[i__19508__auto___38306]));

var G__38307 = (i__19508__auto___38306 + (1));
i__19508__auto___38306 = G__38307;
continue;
} else {
}
break;
}

var G__38237 = args38235.length;
switch (G__38237) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38235.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21993__auto___38309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto___38309,out){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto___38309,out){
return (function (state_38275){
var state_val_38276 = (state_38275[(1)]);
if((state_val_38276 === (7))){
var inst_38271 = (state_38275[(2)]);
var state_38275__$1 = state_38275;
var statearr_38277_38310 = state_38275__$1;
(statearr_38277_38310[(2)] = inst_38271);

(statearr_38277_38310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38276 === (1))){
var inst_38238 = (new Array(n));
var inst_38239 = inst_38238;
var inst_38240 = (0);
var state_38275__$1 = (function (){var statearr_38278 = state_38275;
(statearr_38278[(7)] = inst_38240);

(statearr_38278[(8)] = inst_38239);

return statearr_38278;
})();
var statearr_38279_38311 = state_38275__$1;
(statearr_38279_38311[(2)] = null);

(statearr_38279_38311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38276 === (4))){
var inst_38243 = (state_38275[(9)]);
var inst_38243__$1 = (state_38275[(2)]);
var inst_38244 = (inst_38243__$1 == null);
var inst_38245 = cljs.core.not.call(null,inst_38244);
var state_38275__$1 = (function (){var statearr_38280 = state_38275;
(statearr_38280[(9)] = inst_38243__$1);

return statearr_38280;
})();
if(inst_38245){
var statearr_38281_38312 = state_38275__$1;
(statearr_38281_38312[(1)] = (5));

} else {
var statearr_38282_38313 = state_38275__$1;
(statearr_38282_38313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38276 === (15))){
var inst_38265 = (state_38275[(2)]);
var state_38275__$1 = state_38275;
var statearr_38283_38314 = state_38275__$1;
(statearr_38283_38314[(2)] = inst_38265);

(statearr_38283_38314[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38276 === (13))){
var state_38275__$1 = state_38275;
var statearr_38284_38315 = state_38275__$1;
(statearr_38284_38315[(2)] = null);

(statearr_38284_38315[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38276 === (6))){
var inst_38240 = (state_38275[(7)]);
var inst_38261 = (inst_38240 > (0));
var state_38275__$1 = state_38275;
if(cljs.core.truth_(inst_38261)){
var statearr_38285_38316 = state_38275__$1;
(statearr_38285_38316[(1)] = (12));

} else {
var statearr_38286_38317 = state_38275__$1;
(statearr_38286_38317[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38276 === (3))){
var inst_38273 = (state_38275[(2)]);
var state_38275__$1 = state_38275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38275__$1,inst_38273);
} else {
if((state_val_38276 === (12))){
var inst_38239 = (state_38275[(8)]);
var inst_38263 = cljs.core.vec.call(null,inst_38239);
var state_38275__$1 = state_38275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38275__$1,(15),out,inst_38263);
} else {
if((state_val_38276 === (2))){
var state_38275__$1 = state_38275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38275__$1,(4),ch);
} else {
if((state_val_38276 === (11))){
var inst_38255 = (state_38275[(2)]);
var inst_38256 = (new Array(n));
var inst_38239 = inst_38256;
var inst_38240 = (0);
var state_38275__$1 = (function (){var statearr_38287 = state_38275;
(statearr_38287[(7)] = inst_38240);

(statearr_38287[(10)] = inst_38255);

(statearr_38287[(8)] = inst_38239);

return statearr_38287;
})();
var statearr_38288_38318 = state_38275__$1;
(statearr_38288_38318[(2)] = null);

(statearr_38288_38318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38276 === (9))){
var inst_38239 = (state_38275[(8)]);
var inst_38253 = cljs.core.vec.call(null,inst_38239);
var state_38275__$1 = state_38275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38275__$1,(11),out,inst_38253);
} else {
if((state_val_38276 === (5))){
var inst_38240 = (state_38275[(7)]);
var inst_38239 = (state_38275[(8)]);
var inst_38243 = (state_38275[(9)]);
var inst_38248 = (state_38275[(11)]);
var inst_38247 = (inst_38239[inst_38240] = inst_38243);
var inst_38248__$1 = (inst_38240 + (1));
var inst_38249 = (inst_38248__$1 < n);
var state_38275__$1 = (function (){var statearr_38289 = state_38275;
(statearr_38289[(12)] = inst_38247);

(statearr_38289[(11)] = inst_38248__$1);

return statearr_38289;
})();
if(cljs.core.truth_(inst_38249)){
var statearr_38290_38319 = state_38275__$1;
(statearr_38290_38319[(1)] = (8));

} else {
var statearr_38291_38320 = state_38275__$1;
(statearr_38291_38320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38276 === (14))){
var inst_38268 = (state_38275[(2)]);
var inst_38269 = cljs.core.async.close_BANG_.call(null,out);
var state_38275__$1 = (function (){var statearr_38293 = state_38275;
(statearr_38293[(13)] = inst_38268);

return statearr_38293;
})();
var statearr_38294_38321 = state_38275__$1;
(statearr_38294_38321[(2)] = inst_38269);

(statearr_38294_38321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38276 === (10))){
var inst_38259 = (state_38275[(2)]);
var state_38275__$1 = state_38275;
var statearr_38295_38322 = state_38275__$1;
(statearr_38295_38322[(2)] = inst_38259);

(statearr_38295_38322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38276 === (8))){
var inst_38239 = (state_38275[(8)]);
var inst_38248 = (state_38275[(11)]);
var tmp38292 = inst_38239;
var inst_38239__$1 = tmp38292;
var inst_38240 = inst_38248;
var state_38275__$1 = (function (){var statearr_38296 = state_38275;
(statearr_38296[(7)] = inst_38240);

(statearr_38296[(8)] = inst_38239__$1);

return statearr_38296;
})();
var statearr_38297_38323 = state_38275__$1;
(statearr_38297_38323[(2)] = null);

(statearr_38297_38323[(1)] = (2));


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
});})(c__21993__auto___38309,out))
;
return ((function (switch__21881__auto__,c__21993__auto___38309,out){
return (function() {
var cljs$core$async$state_machine__21882__auto__ = null;
var cljs$core$async$state_machine__21882__auto____0 = (function (){
var statearr_38301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38301[(0)] = cljs$core$async$state_machine__21882__auto__);

(statearr_38301[(1)] = (1));

return statearr_38301;
});
var cljs$core$async$state_machine__21882__auto____1 = (function (state_38275){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_38275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e38302){if((e38302 instanceof Object)){
var ex__21885__auto__ = e38302;
var statearr_38303_38324 = state_38275;
(statearr_38303_38324[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38325 = state_38275;
state_38275 = G__38325;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
cljs$core$async$state_machine__21882__auto__ = function(state_38275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21882__auto____1.call(this,state_38275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21882__auto____0;
cljs$core$async$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21882__auto____1;
return cljs$core$async$state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto___38309,out))
})();
var state__21995__auto__ = (function (){var statearr_38304 = f__21994__auto__.call(null);
(statearr_38304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto___38309);

return statearr_38304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto___38309,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args38326 = [];
var len__19507__auto___38400 = arguments.length;
var i__19508__auto___38401 = (0);
while(true){
if((i__19508__auto___38401 < len__19507__auto___38400)){
args38326.push((arguments[i__19508__auto___38401]));

var G__38402 = (i__19508__auto___38401 + (1));
i__19508__auto___38401 = G__38402;
continue;
} else {
}
break;
}

var G__38328 = args38326.length;
switch (G__38328) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38326.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21993__auto___38404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto___38404,out){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto___38404,out){
return (function (state_38370){
var state_val_38371 = (state_38370[(1)]);
if((state_val_38371 === (7))){
var inst_38366 = (state_38370[(2)]);
var state_38370__$1 = state_38370;
var statearr_38372_38405 = state_38370__$1;
(statearr_38372_38405[(2)] = inst_38366);

(statearr_38372_38405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38371 === (1))){
var inst_38329 = [];
var inst_38330 = inst_38329;
var inst_38331 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38370__$1 = (function (){var statearr_38373 = state_38370;
(statearr_38373[(7)] = inst_38331);

(statearr_38373[(8)] = inst_38330);

return statearr_38373;
})();
var statearr_38374_38406 = state_38370__$1;
(statearr_38374_38406[(2)] = null);

(statearr_38374_38406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38371 === (4))){
var inst_38334 = (state_38370[(9)]);
var inst_38334__$1 = (state_38370[(2)]);
var inst_38335 = (inst_38334__$1 == null);
var inst_38336 = cljs.core.not.call(null,inst_38335);
var state_38370__$1 = (function (){var statearr_38375 = state_38370;
(statearr_38375[(9)] = inst_38334__$1);

return statearr_38375;
})();
if(inst_38336){
var statearr_38376_38407 = state_38370__$1;
(statearr_38376_38407[(1)] = (5));

} else {
var statearr_38377_38408 = state_38370__$1;
(statearr_38377_38408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38371 === (15))){
var inst_38360 = (state_38370[(2)]);
var state_38370__$1 = state_38370;
var statearr_38378_38409 = state_38370__$1;
(statearr_38378_38409[(2)] = inst_38360);

(statearr_38378_38409[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38371 === (13))){
var state_38370__$1 = state_38370;
var statearr_38379_38410 = state_38370__$1;
(statearr_38379_38410[(2)] = null);

(statearr_38379_38410[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38371 === (6))){
var inst_38330 = (state_38370[(8)]);
var inst_38355 = inst_38330.length;
var inst_38356 = (inst_38355 > (0));
var state_38370__$1 = state_38370;
if(cljs.core.truth_(inst_38356)){
var statearr_38380_38411 = state_38370__$1;
(statearr_38380_38411[(1)] = (12));

} else {
var statearr_38381_38412 = state_38370__$1;
(statearr_38381_38412[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38371 === (3))){
var inst_38368 = (state_38370[(2)]);
var state_38370__$1 = state_38370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38370__$1,inst_38368);
} else {
if((state_val_38371 === (12))){
var inst_38330 = (state_38370[(8)]);
var inst_38358 = cljs.core.vec.call(null,inst_38330);
var state_38370__$1 = state_38370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38370__$1,(15),out,inst_38358);
} else {
if((state_val_38371 === (2))){
var state_38370__$1 = state_38370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38370__$1,(4),ch);
} else {
if((state_val_38371 === (11))){
var inst_38334 = (state_38370[(9)]);
var inst_38338 = (state_38370[(10)]);
var inst_38348 = (state_38370[(2)]);
var inst_38349 = [];
var inst_38350 = inst_38349.push(inst_38334);
var inst_38330 = inst_38349;
var inst_38331 = inst_38338;
var state_38370__$1 = (function (){var statearr_38382 = state_38370;
(statearr_38382[(11)] = inst_38350);

(statearr_38382[(12)] = inst_38348);

(statearr_38382[(7)] = inst_38331);

(statearr_38382[(8)] = inst_38330);

return statearr_38382;
})();
var statearr_38383_38413 = state_38370__$1;
(statearr_38383_38413[(2)] = null);

(statearr_38383_38413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38371 === (9))){
var inst_38330 = (state_38370[(8)]);
var inst_38346 = cljs.core.vec.call(null,inst_38330);
var state_38370__$1 = state_38370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38370__$1,(11),out,inst_38346);
} else {
if((state_val_38371 === (5))){
var inst_38334 = (state_38370[(9)]);
var inst_38338 = (state_38370[(10)]);
var inst_38331 = (state_38370[(7)]);
var inst_38338__$1 = f.call(null,inst_38334);
var inst_38339 = cljs.core._EQ_.call(null,inst_38338__$1,inst_38331);
var inst_38340 = cljs.core.keyword_identical_QMARK_.call(null,inst_38331,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38341 = (inst_38339) || (inst_38340);
var state_38370__$1 = (function (){var statearr_38384 = state_38370;
(statearr_38384[(10)] = inst_38338__$1);

return statearr_38384;
})();
if(cljs.core.truth_(inst_38341)){
var statearr_38385_38414 = state_38370__$1;
(statearr_38385_38414[(1)] = (8));

} else {
var statearr_38386_38415 = state_38370__$1;
(statearr_38386_38415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38371 === (14))){
var inst_38363 = (state_38370[(2)]);
var inst_38364 = cljs.core.async.close_BANG_.call(null,out);
var state_38370__$1 = (function (){var statearr_38388 = state_38370;
(statearr_38388[(13)] = inst_38363);

return statearr_38388;
})();
var statearr_38389_38416 = state_38370__$1;
(statearr_38389_38416[(2)] = inst_38364);

(statearr_38389_38416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38371 === (10))){
var inst_38353 = (state_38370[(2)]);
var state_38370__$1 = state_38370;
var statearr_38390_38417 = state_38370__$1;
(statearr_38390_38417[(2)] = inst_38353);

(statearr_38390_38417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38371 === (8))){
var inst_38334 = (state_38370[(9)]);
var inst_38338 = (state_38370[(10)]);
var inst_38330 = (state_38370[(8)]);
var inst_38343 = inst_38330.push(inst_38334);
var tmp38387 = inst_38330;
var inst_38330__$1 = tmp38387;
var inst_38331 = inst_38338;
var state_38370__$1 = (function (){var statearr_38391 = state_38370;
(statearr_38391[(14)] = inst_38343);

(statearr_38391[(7)] = inst_38331);

(statearr_38391[(8)] = inst_38330__$1);

return statearr_38391;
})();
var statearr_38392_38418 = state_38370__$1;
(statearr_38392_38418[(2)] = null);

(statearr_38392_38418[(1)] = (2));


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
});})(c__21993__auto___38404,out))
;
return ((function (switch__21881__auto__,c__21993__auto___38404,out){
return (function() {
var cljs$core$async$state_machine__21882__auto__ = null;
var cljs$core$async$state_machine__21882__auto____0 = (function (){
var statearr_38396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38396[(0)] = cljs$core$async$state_machine__21882__auto__);

(statearr_38396[(1)] = (1));

return statearr_38396;
});
var cljs$core$async$state_machine__21882__auto____1 = (function (state_38370){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_38370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e38397){if((e38397 instanceof Object)){
var ex__21885__auto__ = e38397;
var statearr_38398_38419 = state_38370;
(statearr_38398_38419[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38420 = state_38370;
state_38370 = G__38420;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
cljs$core$async$state_machine__21882__auto__ = function(state_38370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21882__auto____1.call(this,state_38370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21882__auto____0;
cljs$core$async$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21882__auto____1;
return cljs$core$async$state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto___38404,out))
})();
var state__21995__auto__ = (function (){var statearr_38399 = f__21994__auto__.call(null);
(statearr_38399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto___38404);

return statearr_38399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto___38404,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1458781542471
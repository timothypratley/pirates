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
var args28665 = [];
var len__7279__auto___28671 = arguments.length;
var i__7280__auto___28672 = (0);
while(true){
if((i__7280__auto___28672 < len__7279__auto___28671)){
args28665.push((arguments[i__7280__auto___28672]));

var G__28673 = (i__7280__auto___28672 + (1));
i__7280__auto___28672 = G__28673;
continue;
} else {
}
break;
}

var G__28667 = args28665.length;
switch (G__28667) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28665.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28668 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28668 = (function (f,blockable,meta28669){
this.f = f;
this.blockable = blockable;
this.meta28669 = meta28669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28670,meta28669__$1){
var self__ = this;
var _28670__$1 = this;
return (new cljs.core.async.t_cljs$core$async28668(self__.f,self__.blockable,meta28669__$1));
});

cljs.core.async.t_cljs$core$async28668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28670){
var self__ = this;
var _28670__$1 = this;
return self__.meta28669;
});

cljs.core.async.t_cljs$core$async28668.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28668.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28668.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28668.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28668.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28669","meta28669",-1680649469,null)], null);
});

cljs.core.async.t_cljs$core$async28668.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28668.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28668";

cljs.core.async.t_cljs$core$async28668.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async28668");
});

cljs.core.async.__GT_t_cljs$core$async28668 = (function cljs$core$async$__GT_t_cljs$core$async28668(f__$1,blockable__$1,meta28669){
return (new cljs.core.async.t_cljs$core$async28668(f__$1,blockable__$1,meta28669));
});

}

return (new cljs.core.async.t_cljs$core$async28668(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args28677 = [];
var len__7279__auto___28680 = arguments.length;
var i__7280__auto___28681 = (0);
while(true){
if((i__7280__auto___28681 < len__7279__auto___28680)){
args28677.push((arguments[i__7280__auto___28681]));

var G__28682 = (i__7280__auto___28681 + (1));
i__7280__auto___28681 = G__28682;
continue;
} else {
}
break;
}

var G__28679 = args28677.length;
switch (G__28679) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28677.length)].join('')));

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
var args28684 = [];
var len__7279__auto___28687 = arguments.length;
var i__7280__auto___28688 = (0);
while(true){
if((i__7280__auto___28688 < len__7279__auto___28687)){
args28684.push((arguments[i__7280__auto___28688]));

var G__28689 = (i__7280__auto___28688 + (1));
i__7280__auto___28688 = G__28689;
continue;
} else {
}
break;
}

var G__28686 = args28684.length;
switch (G__28686) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28684.length)].join('')));

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
var args28691 = [];
var len__7279__auto___28694 = arguments.length;
var i__7280__auto___28695 = (0);
while(true){
if((i__7280__auto___28695 < len__7279__auto___28694)){
args28691.push((arguments[i__7280__auto___28695]));

var G__28696 = (i__7280__auto___28695 + (1));
i__7280__auto___28695 = G__28696;
continue;
} else {
}
break;
}

var G__28693 = args28691.length;
switch (G__28693) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28691.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28698 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28698);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28698,ret){
return (function (){
return fn1.call(null,val_28698);
});})(val_28698,ret))
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
var args28699 = [];
var len__7279__auto___28702 = arguments.length;
var i__7280__auto___28703 = (0);
while(true){
if((i__7280__auto___28703 < len__7279__auto___28702)){
args28699.push((arguments[i__7280__auto___28703]));

var G__28704 = (i__7280__auto___28703 + (1));
i__7280__auto___28703 = G__28704;
continue;
} else {
}
break;
}

var G__28701 = args28699.length;
switch (G__28701) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28699.length)].join('')));

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
var n__7124__auto___28706 = n;
var x_28707 = (0);
while(true){
if((x_28707 < n__7124__auto___28706)){
(a[x_28707] = (0));

var G__28708 = (x_28707 + (1));
x_28707 = G__28708;
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

var G__28709 = (i + (1));
i = G__28709;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28713 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28713 = (function (alt_flag,flag,meta28714){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28714 = meta28714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28715,meta28714__$1){
var self__ = this;
var _28715__$1 = this;
return (new cljs.core.async.t_cljs$core$async28713(self__.alt_flag,self__.flag,meta28714__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28713.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28715){
var self__ = this;
var _28715__$1 = this;
return self__.meta28714;
});})(flag))
;

cljs.core.async.t_cljs$core$async28713.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28713.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28713.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28713.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28713.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28714","meta28714",1478388474,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28713.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28713";

cljs.core.async.t_cljs$core$async28713.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async28713");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28713 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28713(alt_flag__$1,flag__$1,meta28714){
return (new cljs.core.async.t_cljs$core$async28713(alt_flag__$1,flag__$1,meta28714));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28713(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28719 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28719 = (function (alt_handler,flag,cb,meta28720){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28720 = meta28720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28721,meta28720__$1){
var self__ = this;
var _28721__$1 = this;
return (new cljs.core.async.t_cljs$core$async28719(self__.alt_handler,self__.flag,self__.cb,meta28720__$1));
});

cljs.core.async.t_cljs$core$async28719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28721){
var self__ = this;
var _28721__$1 = this;
return self__.meta28720;
});

cljs.core.async.t_cljs$core$async28719.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28719.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28719.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28719.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28720","meta28720",-902012297,null)], null);
});

cljs.core.async.t_cljs$core$async28719.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28719";

cljs.core.async.t_cljs$core$async28719.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async28719");
});

cljs.core.async.__GT_t_cljs$core$async28719 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28719(alt_handler__$1,flag__$1,cb__$1,meta28720){
return (new cljs.core.async.t_cljs$core$async28719(alt_handler__$1,flag__$1,cb__$1,meta28720));
});

}

return (new cljs.core.async.t_cljs$core$async28719(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28722_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28722_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28723_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28723_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6210__auto__ = wport;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28724 = (i + (1));
i = G__28724;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6210__auto__ = ret;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6198__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6198__auto__;
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
var args__7286__auto__ = [];
var len__7279__auto___28730 = arguments.length;
var i__7280__auto___28731 = (0);
while(true){
if((i__7280__auto___28731 < len__7279__auto___28730)){
args__7286__auto__.push((arguments[i__7280__auto___28731]));

var G__28732 = (i__7280__auto___28731 + (1));
i__7280__auto___28731 = G__28732;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28727){
var map__28728 = p__28727;
var map__28728__$1 = ((((!((map__28728 == null)))?((((map__28728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28728):map__28728);
var opts = map__28728__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28725){
var G__28726 = cljs.core.first.call(null,seq28725);
var seq28725__$1 = cljs.core.next.call(null,seq28725);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28726,seq28725__$1);
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
var args28733 = [];
var len__7279__auto___28783 = arguments.length;
var i__7280__auto___28784 = (0);
while(true){
if((i__7280__auto___28784 < len__7279__auto___28783)){
args28733.push((arguments[i__7280__auto___28784]));

var G__28785 = (i__7280__auto___28784 + (1));
i__7280__auto___28784 = G__28785;
continue;
} else {
}
break;
}

var G__28735 = args28733.length;
switch (G__28735) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28733.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28620__auto___28787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28620__auto___28787){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (c__28620__auto___28787){
return (function (state_28759){
var state_val_28760 = (state_28759[(1)]);
if((state_val_28760 === (7))){
var inst_28755 = (state_28759[(2)]);
var state_28759__$1 = state_28759;
var statearr_28761_28788 = state_28759__$1;
(statearr_28761_28788[(2)] = inst_28755);

(statearr_28761_28788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (1))){
var state_28759__$1 = state_28759;
var statearr_28762_28789 = state_28759__$1;
(statearr_28762_28789[(2)] = null);

(statearr_28762_28789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (4))){
var inst_28738 = (state_28759[(7)]);
var inst_28738__$1 = (state_28759[(2)]);
var inst_28739 = (inst_28738__$1 == null);
var state_28759__$1 = (function (){var statearr_28763 = state_28759;
(statearr_28763[(7)] = inst_28738__$1);

return statearr_28763;
})();
if(cljs.core.truth_(inst_28739)){
var statearr_28764_28790 = state_28759__$1;
(statearr_28764_28790[(1)] = (5));

} else {
var statearr_28765_28791 = state_28759__$1;
(statearr_28765_28791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (13))){
var state_28759__$1 = state_28759;
var statearr_28766_28792 = state_28759__$1;
(statearr_28766_28792[(2)] = null);

(statearr_28766_28792[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (6))){
var inst_28738 = (state_28759[(7)]);
var state_28759__$1 = state_28759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28759__$1,(11),to,inst_28738);
} else {
if((state_val_28760 === (3))){
var inst_28757 = (state_28759[(2)]);
var state_28759__$1 = state_28759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28759__$1,inst_28757);
} else {
if((state_val_28760 === (12))){
var state_28759__$1 = state_28759;
var statearr_28767_28793 = state_28759__$1;
(statearr_28767_28793[(2)] = null);

(statearr_28767_28793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (2))){
var state_28759__$1 = state_28759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28759__$1,(4),from);
} else {
if((state_val_28760 === (11))){
var inst_28748 = (state_28759[(2)]);
var state_28759__$1 = state_28759;
if(cljs.core.truth_(inst_28748)){
var statearr_28768_28794 = state_28759__$1;
(statearr_28768_28794[(1)] = (12));

} else {
var statearr_28769_28795 = state_28759__$1;
(statearr_28769_28795[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (9))){
var state_28759__$1 = state_28759;
var statearr_28770_28796 = state_28759__$1;
(statearr_28770_28796[(2)] = null);

(statearr_28770_28796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (5))){
var state_28759__$1 = state_28759;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28771_28797 = state_28759__$1;
(statearr_28771_28797[(1)] = (8));

} else {
var statearr_28772_28798 = state_28759__$1;
(statearr_28772_28798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (14))){
var inst_28753 = (state_28759[(2)]);
var state_28759__$1 = state_28759;
var statearr_28773_28799 = state_28759__$1;
(statearr_28773_28799[(2)] = inst_28753);

(statearr_28773_28799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (10))){
var inst_28745 = (state_28759[(2)]);
var state_28759__$1 = state_28759;
var statearr_28774_28800 = state_28759__$1;
(statearr_28774_28800[(2)] = inst_28745);

(statearr_28774_28800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (8))){
var inst_28742 = cljs.core.async.close_BANG_.call(null,to);
var state_28759__$1 = state_28759;
var statearr_28775_28801 = state_28759__$1;
(statearr_28775_28801[(2)] = inst_28742);

(statearr_28775_28801[(1)] = (10));


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
});})(c__28620__auto___28787))
;
return ((function (switch__28508__auto__,c__28620__auto___28787){
return (function() {
var cljs$core$async$state_machine__28509__auto__ = null;
var cljs$core$async$state_machine__28509__auto____0 = (function (){
var statearr_28779 = [null,null,null,null,null,null,null,null];
(statearr_28779[(0)] = cljs$core$async$state_machine__28509__auto__);

(statearr_28779[(1)] = (1));

return statearr_28779;
});
var cljs$core$async$state_machine__28509__auto____1 = (function (state_28759){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_28759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e28780){if((e28780 instanceof Object)){
var ex__28512__auto__ = e28780;
var statearr_28781_28802 = state_28759;
(statearr_28781_28802[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28803 = state_28759;
state_28759 = G__28803;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
cljs$core$async$state_machine__28509__auto__ = function(state_28759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28509__auto____1.call(this,state_28759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28509__auto____0;
cljs$core$async$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28509__auto____1;
return cljs$core$async$state_machine__28509__auto__;
})()
;})(switch__28508__auto__,c__28620__auto___28787))
})();
var state__28622__auto__ = (function (){var statearr_28782 = f__28621__auto__.call(null);
(statearr_28782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto___28787);

return statearr_28782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(c__28620__auto___28787))
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
return (function (p__28987){
var vec__28988 = p__28987;
var v = cljs.core.nth.call(null,vec__28988,(0),null);
var p = cljs.core.nth.call(null,vec__28988,(1),null);
var job = vec__28988;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28620__auto___29170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28620__auto___29170,res,vec__28988,v,p,job,jobs,results){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (c__28620__auto___29170,res,vec__28988,v,p,job,jobs,results){
return (function (state_28993){
var state_val_28994 = (state_28993[(1)]);
if((state_val_28994 === (1))){
var state_28993__$1 = state_28993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28993__$1,(2),res,v);
} else {
if((state_val_28994 === (2))){
var inst_28990 = (state_28993[(2)]);
var inst_28991 = cljs.core.async.close_BANG_.call(null,res);
var state_28993__$1 = (function (){var statearr_28995 = state_28993;
(statearr_28995[(7)] = inst_28990);

return statearr_28995;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28993__$1,inst_28991);
} else {
return null;
}
}
});})(c__28620__auto___29170,res,vec__28988,v,p,job,jobs,results))
;
return ((function (switch__28508__auto__,c__28620__auto___29170,res,vec__28988,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____0 = (function (){
var statearr_28999 = [null,null,null,null,null,null,null,null];
(statearr_28999[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__);

(statearr_28999[(1)] = (1));

return statearr_28999;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____1 = (function (state_28993){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_28993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e29000){if((e29000 instanceof Object)){
var ex__28512__auto__ = e29000;
var statearr_29001_29171 = state_28993;
(statearr_29001_29171[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29172 = state_28993;
state_28993 = G__29172;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__ = function(state_28993){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____1.call(this,state_28993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__;
})()
;})(switch__28508__auto__,c__28620__auto___29170,res,vec__28988,v,p,job,jobs,results))
})();
var state__28622__auto__ = (function (){var statearr_29002 = f__28621__auto__.call(null);
(statearr_29002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto___29170);

return statearr_29002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(c__28620__auto___29170,res,vec__28988,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29003){
var vec__29004 = p__29003;
var v = cljs.core.nth.call(null,vec__29004,(0),null);
var p = cljs.core.nth.call(null,vec__29004,(1),null);
var job = vec__29004;
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
var n__7124__auto___29173 = n;
var __29174 = (0);
while(true){
if((__29174 < n__7124__auto___29173)){
var G__29005_29175 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29005_29175) {
case "compute":
var c__28620__auto___29177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29174,c__28620__auto___29177,G__29005_29175,n__7124__auto___29173,jobs,results,process,async){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (__29174,c__28620__auto___29177,G__29005_29175,n__7124__auto___29173,jobs,results,process,async){
return (function (state_29018){
var state_val_29019 = (state_29018[(1)]);
if((state_val_29019 === (1))){
var state_29018__$1 = state_29018;
var statearr_29020_29178 = state_29018__$1;
(statearr_29020_29178[(2)] = null);

(statearr_29020_29178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29019 === (2))){
var state_29018__$1 = state_29018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29018__$1,(4),jobs);
} else {
if((state_val_29019 === (3))){
var inst_29016 = (state_29018[(2)]);
var state_29018__$1 = state_29018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29018__$1,inst_29016);
} else {
if((state_val_29019 === (4))){
var inst_29008 = (state_29018[(2)]);
var inst_29009 = process.call(null,inst_29008);
var state_29018__$1 = state_29018;
if(cljs.core.truth_(inst_29009)){
var statearr_29021_29179 = state_29018__$1;
(statearr_29021_29179[(1)] = (5));

} else {
var statearr_29022_29180 = state_29018__$1;
(statearr_29022_29180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29019 === (5))){
var state_29018__$1 = state_29018;
var statearr_29023_29181 = state_29018__$1;
(statearr_29023_29181[(2)] = null);

(statearr_29023_29181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29019 === (6))){
var state_29018__$1 = state_29018;
var statearr_29024_29182 = state_29018__$1;
(statearr_29024_29182[(2)] = null);

(statearr_29024_29182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29019 === (7))){
var inst_29014 = (state_29018[(2)]);
var state_29018__$1 = state_29018;
var statearr_29025_29183 = state_29018__$1;
(statearr_29025_29183[(2)] = inst_29014);

(statearr_29025_29183[(1)] = (3));


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
});})(__29174,c__28620__auto___29177,G__29005_29175,n__7124__auto___29173,jobs,results,process,async))
;
return ((function (__29174,switch__28508__auto__,c__28620__auto___29177,G__29005_29175,n__7124__auto___29173,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____0 = (function (){
var statearr_29029 = [null,null,null,null,null,null,null];
(statearr_29029[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__);

(statearr_29029[(1)] = (1));

return statearr_29029;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____1 = (function (state_29018){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_29018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e29030){if((e29030 instanceof Object)){
var ex__28512__auto__ = e29030;
var statearr_29031_29184 = state_29018;
(statearr_29031_29184[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29185 = state_29018;
state_29018 = G__29185;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__ = function(state_29018){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____1.call(this,state_29018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__;
})()
;})(__29174,switch__28508__auto__,c__28620__auto___29177,G__29005_29175,n__7124__auto___29173,jobs,results,process,async))
})();
var state__28622__auto__ = (function (){var statearr_29032 = f__28621__auto__.call(null);
(statearr_29032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto___29177);

return statearr_29032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(__29174,c__28620__auto___29177,G__29005_29175,n__7124__auto___29173,jobs,results,process,async))
);


break;
case "async":
var c__28620__auto___29186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29174,c__28620__auto___29186,G__29005_29175,n__7124__auto___29173,jobs,results,process,async){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (__29174,c__28620__auto___29186,G__29005_29175,n__7124__auto___29173,jobs,results,process,async){
return (function (state_29045){
var state_val_29046 = (state_29045[(1)]);
if((state_val_29046 === (1))){
var state_29045__$1 = state_29045;
var statearr_29047_29187 = state_29045__$1;
(statearr_29047_29187[(2)] = null);

(statearr_29047_29187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (2))){
var state_29045__$1 = state_29045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29045__$1,(4),jobs);
} else {
if((state_val_29046 === (3))){
var inst_29043 = (state_29045[(2)]);
var state_29045__$1 = state_29045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29045__$1,inst_29043);
} else {
if((state_val_29046 === (4))){
var inst_29035 = (state_29045[(2)]);
var inst_29036 = async.call(null,inst_29035);
var state_29045__$1 = state_29045;
if(cljs.core.truth_(inst_29036)){
var statearr_29048_29188 = state_29045__$1;
(statearr_29048_29188[(1)] = (5));

} else {
var statearr_29049_29189 = state_29045__$1;
(statearr_29049_29189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (5))){
var state_29045__$1 = state_29045;
var statearr_29050_29190 = state_29045__$1;
(statearr_29050_29190[(2)] = null);

(statearr_29050_29190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (6))){
var state_29045__$1 = state_29045;
var statearr_29051_29191 = state_29045__$1;
(statearr_29051_29191[(2)] = null);

(statearr_29051_29191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (7))){
var inst_29041 = (state_29045[(2)]);
var state_29045__$1 = state_29045;
var statearr_29052_29192 = state_29045__$1;
(statearr_29052_29192[(2)] = inst_29041);

(statearr_29052_29192[(1)] = (3));


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
});})(__29174,c__28620__auto___29186,G__29005_29175,n__7124__auto___29173,jobs,results,process,async))
;
return ((function (__29174,switch__28508__auto__,c__28620__auto___29186,G__29005_29175,n__7124__auto___29173,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____0 = (function (){
var statearr_29056 = [null,null,null,null,null,null,null];
(statearr_29056[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__);

(statearr_29056[(1)] = (1));

return statearr_29056;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____1 = (function (state_29045){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_29045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e29057){if((e29057 instanceof Object)){
var ex__28512__auto__ = e29057;
var statearr_29058_29193 = state_29045;
(statearr_29058_29193[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29194 = state_29045;
state_29045 = G__29194;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__ = function(state_29045){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____1.call(this,state_29045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__;
})()
;})(__29174,switch__28508__auto__,c__28620__auto___29186,G__29005_29175,n__7124__auto___29173,jobs,results,process,async))
})();
var state__28622__auto__ = (function (){var statearr_29059 = f__28621__auto__.call(null);
(statearr_29059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto___29186);

return statearr_29059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(__29174,c__28620__auto___29186,G__29005_29175,n__7124__auto___29173,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29195 = (__29174 + (1));
__29174 = G__29195;
continue;
} else {
}
break;
}

var c__28620__auto___29196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28620__auto___29196,jobs,results,process,async){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (c__28620__auto___29196,jobs,results,process,async){
return (function (state_29081){
var state_val_29082 = (state_29081[(1)]);
if((state_val_29082 === (1))){
var state_29081__$1 = state_29081;
var statearr_29083_29197 = state_29081__$1;
(statearr_29083_29197[(2)] = null);

(statearr_29083_29197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (2))){
var state_29081__$1 = state_29081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29081__$1,(4),from);
} else {
if((state_val_29082 === (3))){
var inst_29079 = (state_29081[(2)]);
var state_29081__$1 = state_29081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29081__$1,inst_29079);
} else {
if((state_val_29082 === (4))){
var inst_29062 = (state_29081[(7)]);
var inst_29062__$1 = (state_29081[(2)]);
var inst_29063 = (inst_29062__$1 == null);
var state_29081__$1 = (function (){var statearr_29084 = state_29081;
(statearr_29084[(7)] = inst_29062__$1);

return statearr_29084;
})();
if(cljs.core.truth_(inst_29063)){
var statearr_29085_29198 = state_29081__$1;
(statearr_29085_29198[(1)] = (5));

} else {
var statearr_29086_29199 = state_29081__$1;
(statearr_29086_29199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (5))){
var inst_29065 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29081__$1 = state_29081;
var statearr_29087_29200 = state_29081__$1;
(statearr_29087_29200[(2)] = inst_29065);

(statearr_29087_29200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (6))){
var inst_29067 = (state_29081[(8)]);
var inst_29062 = (state_29081[(7)]);
var inst_29067__$1 = cljs.core.async.chan.call(null,(1));
var inst_29068 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29069 = [inst_29062,inst_29067__$1];
var inst_29070 = (new cljs.core.PersistentVector(null,2,(5),inst_29068,inst_29069,null));
var state_29081__$1 = (function (){var statearr_29088 = state_29081;
(statearr_29088[(8)] = inst_29067__$1);

return statearr_29088;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29081__$1,(8),jobs,inst_29070);
} else {
if((state_val_29082 === (7))){
var inst_29077 = (state_29081[(2)]);
var state_29081__$1 = state_29081;
var statearr_29089_29201 = state_29081__$1;
(statearr_29089_29201[(2)] = inst_29077);

(statearr_29089_29201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (8))){
var inst_29067 = (state_29081[(8)]);
var inst_29072 = (state_29081[(2)]);
var state_29081__$1 = (function (){var statearr_29090 = state_29081;
(statearr_29090[(9)] = inst_29072);

return statearr_29090;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29081__$1,(9),results,inst_29067);
} else {
if((state_val_29082 === (9))){
var inst_29074 = (state_29081[(2)]);
var state_29081__$1 = (function (){var statearr_29091 = state_29081;
(statearr_29091[(10)] = inst_29074);

return statearr_29091;
})();
var statearr_29092_29202 = state_29081__$1;
(statearr_29092_29202[(2)] = null);

(statearr_29092_29202[(1)] = (2));


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
});})(c__28620__auto___29196,jobs,results,process,async))
;
return ((function (switch__28508__auto__,c__28620__auto___29196,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____0 = (function (){
var statearr_29096 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29096[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__);

(statearr_29096[(1)] = (1));

return statearr_29096;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____1 = (function (state_29081){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_29081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e29097){if((e29097 instanceof Object)){
var ex__28512__auto__ = e29097;
var statearr_29098_29203 = state_29081;
(statearr_29098_29203[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29204 = state_29081;
state_29081 = G__29204;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__ = function(state_29081){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____1.call(this,state_29081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__;
})()
;})(switch__28508__auto__,c__28620__auto___29196,jobs,results,process,async))
})();
var state__28622__auto__ = (function (){var statearr_29099 = f__28621__auto__.call(null);
(statearr_29099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto___29196);

return statearr_29099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(c__28620__auto___29196,jobs,results,process,async))
);


var c__28620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28620__auto__,jobs,results,process,async){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (c__28620__auto__,jobs,results,process,async){
return (function (state_29137){
var state_val_29138 = (state_29137[(1)]);
if((state_val_29138 === (7))){
var inst_29133 = (state_29137[(2)]);
var state_29137__$1 = state_29137;
var statearr_29139_29205 = state_29137__$1;
(statearr_29139_29205[(2)] = inst_29133);

(statearr_29139_29205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (20))){
var state_29137__$1 = state_29137;
var statearr_29140_29206 = state_29137__$1;
(statearr_29140_29206[(2)] = null);

(statearr_29140_29206[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (1))){
var state_29137__$1 = state_29137;
var statearr_29141_29207 = state_29137__$1;
(statearr_29141_29207[(2)] = null);

(statearr_29141_29207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (4))){
var inst_29102 = (state_29137[(7)]);
var inst_29102__$1 = (state_29137[(2)]);
var inst_29103 = (inst_29102__$1 == null);
var state_29137__$1 = (function (){var statearr_29142 = state_29137;
(statearr_29142[(7)] = inst_29102__$1);

return statearr_29142;
})();
if(cljs.core.truth_(inst_29103)){
var statearr_29143_29208 = state_29137__$1;
(statearr_29143_29208[(1)] = (5));

} else {
var statearr_29144_29209 = state_29137__$1;
(statearr_29144_29209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (15))){
var inst_29115 = (state_29137[(8)]);
var state_29137__$1 = state_29137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29137__$1,(18),to,inst_29115);
} else {
if((state_val_29138 === (21))){
var inst_29128 = (state_29137[(2)]);
var state_29137__$1 = state_29137;
var statearr_29145_29210 = state_29137__$1;
(statearr_29145_29210[(2)] = inst_29128);

(statearr_29145_29210[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (13))){
var inst_29130 = (state_29137[(2)]);
var state_29137__$1 = (function (){var statearr_29146 = state_29137;
(statearr_29146[(9)] = inst_29130);

return statearr_29146;
})();
var statearr_29147_29211 = state_29137__$1;
(statearr_29147_29211[(2)] = null);

(statearr_29147_29211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (6))){
var inst_29102 = (state_29137[(7)]);
var state_29137__$1 = state_29137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29137__$1,(11),inst_29102);
} else {
if((state_val_29138 === (17))){
var inst_29123 = (state_29137[(2)]);
var state_29137__$1 = state_29137;
if(cljs.core.truth_(inst_29123)){
var statearr_29148_29212 = state_29137__$1;
(statearr_29148_29212[(1)] = (19));

} else {
var statearr_29149_29213 = state_29137__$1;
(statearr_29149_29213[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (3))){
var inst_29135 = (state_29137[(2)]);
var state_29137__$1 = state_29137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29137__$1,inst_29135);
} else {
if((state_val_29138 === (12))){
var inst_29112 = (state_29137[(10)]);
var state_29137__$1 = state_29137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29137__$1,(14),inst_29112);
} else {
if((state_val_29138 === (2))){
var state_29137__$1 = state_29137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29137__$1,(4),results);
} else {
if((state_val_29138 === (19))){
var state_29137__$1 = state_29137;
var statearr_29150_29214 = state_29137__$1;
(statearr_29150_29214[(2)] = null);

(statearr_29150_29214[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (11))){
var inst_29112 = (state_29137[(2)]);
var state_29137__$1 = (function (){var statearr_29151 = state_29137;
(statearr_29151[(10)] = inst_29112);

return statearr_29151;
})();
var statearr_29152_29215 = state_29137__$1;
(statearr_29152_29215[(2)] = null);

(statearr_29152_29215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (9))){
var state_29137__$1 = state_29137;
var statearr_29153_29216 = state_29137__$1;
(statearr_29153_29216[(2)] = null);

(statearr_29153_29216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (5))){
var state_29137__$1 = state_29137;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29154_29217 = state_29137__$1;
(statearr_29154_29217[(1)] = (8));

} else {
var statearr_29155_29218 = state_29137__$1;
(statearr_29155_29218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (14))){
var inst_29115 = (state_29137[(8)]);
var inst_29117 = (state_29137[(11)]);
var inst_29115__$1 = (state_29137[(2)]);
var inst_29116 = (inst_29115__$1 == null);
var inst_29117__$1 = cljs.core.not.call(null,inst_29116);
var state_29137__$1 = (function (){var statearr_29156 = state_29137;
(statearr_29156[(8)] = inst_29115__$1);

(statearr_29156[(11)] = inst_29117__$1);

return statearr_29156;
})();
if(inst_29117__$1){
var statearr_29157_29219 = state_29137__$1;
(statearr_29157_29219[(1)] = (15));

} else {
var statearr_29158_29220 = state_29137__$1;
(statearr_29158_29220[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (16))){
var inst_29117 = (state_29137[(11)]);
var state_29137__$1 = state_29137;
var statearr_29159_29221 = state_29137__$1;
(statearr_29159_29221[(2)] = inst_29117);

(statearr_29159_29221[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (10))){
var inst_29109 = (state_29137[(2)]);
var state_29137__$1 = state_29137;
var statearr_29160_29222 = state_29137__$1;
(statearr_29160_29222[(2)] = inst_29109);

(statearr_29160_29222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (18))){
var inst_29120 = (state_29137[(2)]);
var state_29137__$1 = state_29137;
var statearr_29161_29223 = state_29137__$1;
(statearr_29161_29223[(2)] = inst_29120);

(statearr_29161_29223[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (8))){
var inst_29106 = cljs.core.async.close_BANG_.call(null,to);
var state_29137__$1 = state_29137;
var statearr_29162_29224 = state_29137__$1;
(statearr_29162_29224[(2)] = inst_29106);

(statearr_29162_29224[(1)] = (10));


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
});})(c__28620__auto__,jobs,results,process,async))
;
return ((function (switch__28508__auto__,c__28620__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____0 = (function (){
var statearr_29166 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29166[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__);

(statearr_29166[(1)] = (1));

return statearr_29166;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____1 = (function (state_29137){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_29137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e29167){if((e29167 instanceof Object)){
var ex__28512__auto__ = e29167;
var statearr_29168_29225 = state_29137;
(statearr_29168_29225[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29226 = state_29137;
state_29137 = G__29226;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__ = function(state_29137){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____1.call(this,state_29137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28509__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28509__auto__;
})()
;})(switch__28508__auto__,c__28620__auto__,jobs,results,process,async))
})();
var state__28622__auto__ = (function (){var statearr_29169 = f__28621__auto__.call(null);
(statearr_29169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto__);

return statearr_29169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(c__28620__auto__,jobs,results,process,async))
);

return c__28620__auto__;
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
var args29227 = [];
var len__7279__auto___29230 = arguments.length;
var i__7280__auto___29231 = (0);
while(true){
if((i__7280__auto___29231 < len__7279__auto___29230)){
args29227.push((arguments[i__7280__auto___29231]));

var G__29232 = (i__7280__auto___29231 + (1));
i__7280__auto___29231 = G__29232;
continue;
} else {
}
break;
}

var G__29229 = args29227.length;
switch (G__29229) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29227.length)].join('')));

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
var args29234 = [];
var len__7279__auto___29237 = arguments.length;
var i__7280__auto___29238 = (0);
while(true){
if((i__7280__auto___29238 < len__7279__auto___29237)){
args29234.push((arguments[i__7280__auto___29238]));

var G__29239 = (i__7280__auto___29238 + (1));
i__7280__auto___29238 = G__29239;
continue;
} else {
}
break;
}

var G__29236 = args29234.length;
switch (G__29236) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29234.length)].join('')));

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
var args29241 = [];
var len__7279__auto___29294 = arguments.length;
var i__7280__auto___29295 = (0);
while(true){
if((i__7280__auto___29295 < len__7279__auto___29294)){
args29241.push((arguments[i__7280__auto___29295]));

var G__29296 = (i__7280__auto___29295 + (1));
i__7280__auto___29295 = G__29296;
continue;
} else {
}
break;
}

var G__29243 = args29241.length;
switch (G__29243) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29241.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28620__auto___29298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28620__auto___29298,tc,fc){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (c__28620__auto___29298,tc,fc){
return (function (state_29269){
var state_val_29270 = (state_29269[(1)]);
if((state_val_29270 === (7))){
var inst_29265 = (state_29269[(2)]);
var state_29269__$1 = state_29269;
var statearr_29271_29299 = state_29269__$1;
(statearr_29271_29299[(2)] = inst_29265);

(statearr_29271_29299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29270 === (1))){
var state_29269__$1 = state_29269;
var statearr_29272_29300 = state_29269__$1;
(statearr_29272_29300[(2)] = null);

(statearr_29272_29300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29270 === (4))){
var inst_29246 = (state_29269[(7)]);
var inst_29246__$1 = (state_29269[(2)]);
var inst_29247 = (inst_29246__$1 == null);
var state_29269__$1 = (function (){var statearr_29273 = state_29269;
(statearr_29273[(7)] = inst_29246__$1);

return statearr_29273;
})();
if(cljs.core.truth_(inst_29247)){
var statearr_29274_29301 = state_29269__$1;
(statearr_29274_29301[(1)] = (5));

} else {
var statearr_29275_29302 = state_29269__$1;
(statearr_29275_29302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29270 === (13))){
var state_29269__$1 = state_29269;
var statearr_29276_29303 = state_29269__$1;
(statearr_29276_29303[(2)] = null);

(statearr_29276_29303[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29270 === (6))){
var inst_29246 = (state_29269[(7)]);
var inst_29252 = p.call(null,inst_29246);
var state_29269__$1 = state_29269;
if(cljs.core.truth_(inst_29252)){
var statearr_29277_29304 = state_29269__$1;
(statearr_29277_29304[(1)] = (9));

} else {
var statearr_29278_29305 = state_29269__$1;
(statearr_29278_29305[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29270 === (3))){
var inst_29267 = (state_29269[(2)]);
var state_29269__$1 = state_29269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29269__$1,inst_29267);
} else {
if((state_val_29270 === (12))){
var state_29269__$1 = state_29269;
var statearr_29279_29306 = state_29269__$1;
(statearr_29279_29306[(2)] = null);

(statearr_29279_29306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29270 === (2))){
var state_29269__$1 = state_29269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29269__$1,(4),ch);
} else {
if((state_val_29270 === (11))){
var inst_29246 = (state_29269[(7)]);
var inst_29256 = (state_29269[(2)]);
var state_29269__$1 = state_29269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29269__$1,(8),inst_29256,inst_29246);
} else {
if((state_val_29270 === (9))){
var state_29269__$1 = state_29269;
var statearr_29280_29307 = state_29269__$1;
(statearr_29280_29307[(2)] = tc);

(statearr_29280_29307[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29270 === (5))){
var inst_29249 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29250 = cljs.core.async.close_BANG_.call(null,fc);
var state_29269__$1 = (function (){var statearr_29281 = state_29269;
(statearr_29281[(8)] = inst_29249);

return statearr_29281;
})();
var statearr_29282_29308 = state_29269__$1;
(statearr_29282_29308[(2)] = inst_29250);

(statearr_29282_29308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29270 === (14))){
var inst_29263 = (state_29269[(2)]);
var state_29269__$1 = state_29269;
var statearr_29283_29309 = state_29269__$1;
(statearr_29283_29309[(2)] = inst_29263);

(statearr_29283_29309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29270 === (10))){
var state_29269__$1 = state_29269;
var statearr_29284_29310 = state_29269__$1;
(statearr_29284_29310[(2)] = fc);

(statearr_29284_29310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29270 === (8))){
var inst_29258 = (state_29269[(2)]);
var state_29269__$1 = state_29269;
if(cljs.core.truth_(inst_29258)){
var statearr_29285_29311 = state_29269__$1;
(statearr_29285_29311[(1)] = (12));

} else {
var statearr_29286_29312 = state_29269__$1;
(statearr_29286_29312[(1)] = (13));

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
});})(c__28620__auto___29298,tc,fc))
;
return ((function (switch__28508__auto__,c__28620__auto___29298,tc,fc){
return (function() {
var cljs$core$async$state_machine__28509__auto__ = null;
var cljs$core$async$state_machine__28509__auto____0 = (function (){
var statearr_29290 = [null,null,null,null,null,null,null,null,null];
(statearr_29290[(0)] = cljs$core$async$state_machine__28509__auto__);

(statearr_29290[(1)] = (1));

return statearr_29290;
});
var cljs$core$async$state_machine__28509__auto____1 = (function (state_29269){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_29269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e29291){if((e29291 instanceof Object)){
var ex__28512__auto__ = e29291;
var statearr_29292_29313 = state_29269;
(statearr_29292_29313[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29314 = state_29269;
state_29269 = G__29314;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
cljs$core$async$state_machine__28509__auto__ = function(state_29269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28509__auto____1.call(this,state_29269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28509__auto____0;
cljs$core$async$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28509__auto____1;
return cljs$core$async$state_machine__28509__auto__;
})()
;})(switch__28508__auto__,c__28620__auto___29298,tc,fc))
})();
var state__28622__auto__ = (function (){var statearr_29293 = f__28621__auto__.call(null);
(statearr_29293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto___29298);

return statearr_29293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(c__28620__auto___29298,tc,fc))
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
var c__28620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28620__auto__){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (c__28620__auto__){
return (function (state_29378){
var state_val_29379 = (state_29378[(1)]);
if((state_val_29379 === (7))){
var inst_29374 = (state_29378[(2)]);
var state_29378__$1 = state_29378;
var statearr_29380_29401 = state_29378__$1;
(statearr_29380_29401[(2)] = inst_29374);

(statearr_29380_29401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (1))){
var inst_29358 = init;
var state_29378__$1 = (function (){var statearr_29381 = state_29378;
(statearr_29381[(7)] = inst_29358);

return statearr_29381;
})();
var statearr_29382_29402 = state_29378__$1;
(statearr_29382_29402[(2)] = null);

(statearr_29382_29402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (4))){
var inst_29361 = (state_29378[(8)]);
var inst_29361__$1 = (state_29378[(2)]);
var inst_29362 = (inst_29361__$1 == null);
var state_29378__$1 = (function (){var statearr_29383 = state_29378;
(statearr_29383[(8)] = inst_29361__$1);

return statearr_29383;
})();
if(cljs.core.truth_(inst_29362)){
var statearr_29384_29403 = state_29378__$1;
(statearr_29384_29403[(1)] = (5));

} else {
var statearr_29385_29404 = state_29378__$1;
(statearr_29385_29404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (6))){
var inst_29358 = (state_29378[(7)]);
var inst_29361 = (state_29378[(8)]);
var inst_29365 = (state_29378[(9)]);
var inst_29365__$1 = f.call(null,inst_29358,inst_29361);
var inst_29366 = cljs.core.reduced_QMARK_.call(null,inst_29365__$1);
var state_29378__$1 = (function (){var statearr_29386 = state_29378;
(statearr_29386[(9)] = inst_29365__$1);

return statearr_29386;
})();
if(inst_29366){
var statearr_29387_29405 = state_29378__$1;
(statearr_29387_29405[(1)] = (8));

} else {
var statearr_29388_29406 = state_29378__$1;
(statearr_29388_29406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (3))){
var inst_29376 = (state_29378[(2)]);
var state_29378__$1 = state_29378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29378__$1,inst_29376);
} else {
if((state_val_29379 === (2))){
var state_29378__$1 = state_29378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29378__$1,(4),ch);
} else {
if((state_val_29379 === (9))){
var inst_29365 = (state_29378[(9)]);
var inst_29358 = inst_29365;
var state_29378__$1 = (function (){var statearr_29389 = state_29378;
(statearr_29389[(7)] = inst_29358);

return statearr_29389;
})();
var statearr_29390_29407 = state_29378__$1;
(statearr_29390_29407[(2)] = null);

(statearr_29390_29407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (5))){
var inst_29358 = (state_29378[(7)]);
var state_29378__$1 = state_29378;
var statearr_29391_29408 = state_29378__$1;
(statearr_29391_29408[(2)] = inst_29358);

(statearr_29391_29408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (10))){
var inst_29372 = (state_29378[(2)]);
var state_29378__$1 = state_29378;
var statearr_29392_29409 = state_29378__$1;
(statearr_29392_29409[(2)] = inst_29372);

(statearr_29392_29409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (8))){
var inst_29365 = (state_29378[(9)]);
var inst_29368 = cljs.core.deref.call(null,inst_29365);
var state_29378__$1 = state_29378;
var statearr_29393_29410 = state_29378__$1;
(statearr_29393_29410[(2)] = inst_29368);

(statearr_29393_29410[(1)] = (10));


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
});})(c__28620__auto__))
;
return ((function (switch__28508__auto__,c__28620__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28509__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28509__auto____0 = (function (){
var statearr_29397 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29397[(0)] = cljs$core$async$reduce_$_state_machine__28509__auto__);

(statearr_29397[(1)] = (1));

return statearr_29397;
});
var cljs$core$async$reduce_$_state_machine__28509__auto____1 = (function (state_29378){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_29378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e29398){if((e29398 instanceof Object)){
var ex__28512__auto__ = e29398;
var statearr_29399_29411 = state_29378;
(statearr_29399_29411[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29412 = state_29378;
state_29378 = G__29412;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28509__auto__ = function(state_29378){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28509__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28509__auto____1.call(this,state_29378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28509__auto____0;
cljs$core$async$reduce_$_state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28509__auto____1;
return cljs$core$async$reduce_$_state_machine__28509__auto__;
})()
;})(switch__28508__auto__,c__28620__auto__))
})();
var state__28622__auto__ = (function (){var statearr_29400 = f__28621__auto__.call(null);
(statearr_29400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto__);

return statearr_29400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(c__28620__auto__))
);

return c__28620__auto__;
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
var args29413 = [];
var len__7279__auto___29465 = arguments.length;
var i__7280__auto___29466 = (0);
while(true){
if((i__7280__auto___29466 < len__7279__auto___29465)){
args29413.push((arguments[i__7280__auto___29466]));

var G__29467 = (i__7280__auto___29466 + (1));
i__7280__auto___29466 = G__29467;
continue;
} else {
}
break;
}

var G__29415 = args29413.length;
switch (G__29415) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29413.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28620__auto__){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (c__28620__auto__){
return (function (state_29440){
var state_val_29441 = (state_29440[(1)]);
if((state_val_29441 === (7))){
var inst_29422 = (state_29440[(2)]);
var state_29440__$1 = state_29440;
var statearr_29442_29469 = state_29440__$1;
(statearr_29442_29469[(2)] = inst_29422);

(statearr_29442_29469[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29441 === (1))){
var inst_29416 = cljs.core.seq.call(null,coll);
var inst_29417 = inst_29416;
var state_29440__$1 = (function (){var statearr_29443 = state_29440;
(statearr_29443[(7)] = inst_29417);

return statearr_29443;
})();
var statearr_29444_29470 = state_29440__$1;
(statearr_29444_29470[(2)] = null);

(statearr_29444_29470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29441 === (4))){
var inst_29417 = (state_29440[(7)]);
var inst_29420 = cljs.core.first.call(null,inst_29417);
var state_29440__$1 = state_29440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29440__$1,(7),ch,inst_29420);
} else {
if((state_val_29441 === (13))){
var inst_29434 = (state_29440[(2)]);
var state_29440__$1 = state_29440;
var statearr_29445_29471 = state_29440__$1;
(statearr_29445_29471[(2)] = inst_29434);

(statearr_29445_29471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29441 === (6))){
var inst_29425 = (state_29440[(2)]);
var state_29440__$1 = state_29440;
if(cljs.core.truth_(inst_29425)){
var statearr_29446_29472 = state_29440__$1;
(statearr_29446_29472[(1)] = (8));

} else {
var statearr_29447_29473 = state_29440__$1;
(statearr_29447_29473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29441 === (3))){
var inst_29438 = (state_29440[(2)]);
var state_29440__$1 = state_29440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29440__$1,inst_29438);
} else {
if((state_val_29441 === (12))){
var state_29440__$1 = state_29440;
var statearr_29448_29474 = state_29440__$1;
(statearr_29448_29474[(2)] = null);

(statearr_29448_29474[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29441 === (2))){
var inst_29417 = (state_29440[(7)]);
var state_29440__$1 = state_29440;
if(cljs.core.truth_(inst_29417)){
var statearr_29449_29475 = state_29440__$1;
(statearr_29449_29475[(1)] = (4));

} else {
var statearr_29450_29476 = state_29440__$1;
(statearr_29450_29476[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29441 === (11))){
var inst_29431 = cljs.core.async.close_BANG_.call(null,ch);
var state_29440__$1 = state_29440;
var statearr_29451_29477 = state_29440__$1;
(statearr_29451_29477[(2)] = inst_29431);

(statearr_29451_29477[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29441 === (9))){
var state_29440__$1 = state_29440;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29452_29478 = state_29440__$1;
(statearr_29452_29478[(1)] = (11));

} else {
var statearr_29453_29479 = state_29440__$1;
(statearr_29453_29479[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29441 === (5))){
var inst_29417 = (state_29440[(7)]);
var state_29440__$1 = state_29440;
var statearr_29454_29480 = state_29440__$1;
(statearr_29454_29480[(2)] = inst_29417);

(statearr_29454_29480[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29441 === (10))){
var inst_29436 = (state_29440[(2)]);
var state_29440__$1 = state_29440;
var statearr_29455_29481 = state_29440__$1;
(statearr_29455_29481[(2)] = inst_29436);

(statearr_29455_29481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29441 === (8))){
var inst_29417 = (state_29440[(7)]);
var inst_29427 = cljs.core.next.call(null,inst_29417);
var inst_29417__$1 = inst_29427;
var state_29440__$1 = (function (){var statearr_29456 = state_29440;
(statearr_29456[(7)] = inst_29417__$1);

return statearr_29456;
})();
var statearr_29457_29482 = state_29440__$1;
(statearr_29457_29482[(2)] = null);

(statearr_29457_29482[(1)] = (2));


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
});})(c__28620__auto__))
;
return ((function (switch__28508__auto__,c__28620__auto__){
return (function() {
var cljs$core$async$state_machine__28509__auto__ = null;
var cljs$core$async$state_machine__28509__auto____0 = (function (){
var statearr_29461 = [null,null,null,null,null,null,null,null];
(statearr_29461[(0)] = cljs$core$async$state_machine__28509__auto__);

(statearr_29461[(1)] = (1));

return statearr_29461;
});
var cljs$core$async$state_machine__28509__auto____1 = (function (state_29440){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_29440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e29462){if((e29462 instanceof Object)){
var ex__28512__auto__ = e29462;
var statearr_29463_29483 = state_29440;
(statearr_29463_29483[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29484 = state_29440;
state_29440 = G__29484;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
cljs$core$async$state_machine__28509__auto__ = function(state_29440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28509__auto____1.call(this,state_29440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28509__auto____0;
cljs$core$async$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28509__auto____1;
return cljs$core$async$state_machine__28509__auto__;
})()
;})(switch__28508__auto__,c__28620__auto__))
})();
var state__28622__auto__ = (function (){var statearr_29464 = f__28621__auto__.call(null);
(statearr_29464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto__);

return statearr_29464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(c__28620__auto__))
);

return c__28620__auto__;
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
var x__6873__auto__ = (((_ == null))?null:_);
var m__6874__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,_);
} else {
var m__6874__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,_);
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
var x__6873__auto__ = (((m == null))?null:m);
var m__6874__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__6874__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__6873__auto__ = (((m == null))?null:m);
var m__6874__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,m,ch);
} else {
var m__6874__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,m,ch);
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
var x__6873__auto__ = (((m == null))?null:m);
var m__6874__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,m);
} else {
var m__6874__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async29706 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29706 = (function (mult,ch,cs,meta29707){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29707 = meta29707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29708,meta29707__$1){
var self__ = this;
var _29708__$1 = this;
return (new cljs.core.async.t_cljs$core$async29706(self__.mult,self__.ch,self__.cs,meta29707__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29706.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29708){
var self__ = this;
var _29708__$1 = this;
return self__.meta29707;
});})(cs))
;

cljs.core.async.t_cljs$core$async29706.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29706.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29706.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29706.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29706.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29706.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29706.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29707","meta29707",1345207050,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29706.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29706.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29706";

cljs.core.async.t_cljs$core$async29706.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async29706");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29706 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29706(mult__$1,ch__$1,cs__$1,meta29707){
return (new cljs.core.async.t_cljs$core$async29706(mult__$1,ch__$1,cs__$1,meta29707));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29706(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28620__auto___29927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28620__auto___29927,cs,m,dchan,dctr,done){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (c__28620__auto___29927,cs,m,dchan,dctr,done){
return (function (state_29839){
var state_val_29840 = (state_29839[(1)]);
if((state_val_29840 === (7))){
var inst_29835 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
var statearr_29841_29928 = state_29839__$1;
(statearr_29841_29928[(2)] = inst_29835);

(statearr_29841_29928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (20))){
var inst_29740 = (state_29839[(7)]);
var inst_29750 = cljs.core.first.call(null,inst_29740);
var inst_29751 = cljs.core.nth.call(null,inst_29750,(0),null);
var inst_29752 = cljs.core.nth.call(null,inst_29750,(1),null);
var state_29839__$1 = (function (){var statearr_29842 = state_29839;
(statearr_29842[(8)] = inst_29751);

return statearr_29842;
})();
if(cljs.core.truth_(inst_29752)){
var statearr_29843_29929 = state_29839__$1;
(statearr_29843_29929[(1)] = (22));

} else {
var statearr_29844_29930 = state_29839__$1;
(statearr_29844_29930[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (27))){
var inst_29782 = (state_29839[(9)]);
var inst_29780 = (state_29839[(10)]);
var inst_29787 = (state_29839[(11)]);
var inst_29711 = (state_29839[(12)]);
var inst_29787__$1 = cljs.core._nth.call(null,inst_29780,inst_29782);
var inst_29788 = cljs.core.async.put_BANG_.call(null,inst_29787__$1,inst_29711,done);
var state_29839__$1 = (function (){var statearr_29845 = state_29839;
(statearr_29845[(11)] = inst_29787__$1);

return statearr_29845;
})();
if(cljs.core.truth_(inst_29788)){
var statearr_29846_29931 = state_29839__$1;
(statearr_29846_29931[(1)] = (30));

} else {
var statearr_29847_29932 = state_29839__$1;
(statearr_29847_29932[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (1))){
var state_29839__$1 = state_29839;
var statearr_29848_29933 = state_29839__$1;
(statearr_29848_29933[(2)] = null);

(statearr_29848_29933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (24))){
var inst_29740 = (state_29839[(7)]);
var inst_29757 = (state_29839[(2)]);
var inst_29758 = cljs.core.next.call(null,inst_29740);
var inst_29720 = inst_29758;
var inst_29721 = null;
var inst_29722 = (0);
var inst_29723 = (0);
var state_29839__$1 = (function (){var statearr_29849 = state_29839;
(statearr_29849[(13)] = inst_29723);

(statearr_29849[(14)] = inst_29722);

(statearr_29849[(15)] = inst_29721);

(statearr_29849[(16)] = inst_29757);

(statearr_29849[(17)] = inst_29720);

return statearr_29849;
})();
var statearr_29850_29934 = state_29839__$1;
(statearr_29850_29934[(2)] = null);

(statearr_29850_29934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (39))){
var state_29839__$1 = state_29839;
var statearr_29854_29935 = state_29839__$1;
(statearr_29854_29935[(2)] = null);

(statearr_29854_29935[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (4))){
var inst_29711 = (state_29839[(12)]);
var inst_29711__$1 = (state_29839[(2)]);
var inst_29712 = (inst_29711__$1 == null);
var state_29839__$1 = (function (){var statearr_29855 = state_29839;
(statearr_29855[(12)] = inst_29711__$1);

return statearr_29855;
})();
if(cljs.core.truth_(inst_29712)){
var statearr_29856_29936 = state_29839__$1;
(statearr_29856_29936[(1)] = (5));

} else {
var statearr_29857_29937 = state_29839__$1;
(statearr_29857_29937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (15))){
var inst_29723 = (state_29839[(13)]);
var inst_29722 = (state_29839[(14)]);
var inst_29721 = (state_29839[(15)]);
var inst_29720 = (state_29839[(17)]);
var inst_29736 = (state_29839[(2)]);
var inst_29737 = (inst_29723 + (1));
var tmp29851 = inst_29722;
var tmp29852 = inst_29721;
var tmp29853 = inst_29720;
var inst_29720__$1 = tmp29853;
var inst_29721__$1 = tmp29852;
var inst_29722__$1 = tmp29851;
var inst_29723__$1 = inst_29737;
var state_29839__$1 = (function (){var statearr_29858 = state_29839;
(statearr_29858[(13)] = inst_29723__$1);

(statearr_29858[(14)] = inst_29722__$1);

(statearr_29858[(18)] = inst_29736);

(statearr_29858[(15)] = inst_29721__$1);

(statearr_29858[(17)] = inst_29720__$1);

return statearr_29858;
})();
var statearr_29859_29938 = state_29839__$1;
(statearr_29859_29938[(2)] = null);

(statearr_29859_29938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (21))){
var inst_29761 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
var statearr_29863_29939 = state_29839__$1;
(statearr_29863_29939[(2)] = inst_29761);

(statearr_29863_29939[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (31))){
var inst_29787 = (state_29839[(11)]);
var inst_29791 = done.call(null,null);
var inst_29792 = cljs.core.async.untap_STAR_.call(null,m,inst_29787);
var state_29839__$1 = (function (){var statearr_29864 = state_29839;
(statearr_29864[(19)] = inst_29791);

return statearr_29864;
})();
var statearr_29865_29940 = state_29839__$1;
(statearr_29865_29940[(2)] = inst_29792);

(statearr_29865_29940[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (32))){
var inst_29779 = (state_29839[(20)]);
var inst_29782 = (state_29839[(9)]);
var inst_29780 = (state_29839[(10)]);
var inst_29781 = (state_29839[(21)]);
var inst_29794 = (state_29839[(2)]);
var inst_29795 = (inst_29782 + (1));
var tmp29860 = inst_29779;
var tmp29861 = inst_29780;
var tmp29862 = inst_29781;
var inst_29779__$1 = tmp29860;
var inst_29780__$1 = tmp29861;
var inst_29781__$1 = tmp29862;
var inst_29782__$1 = inst_29795;
var state_29839__$1 = (function (){var statearr_29866 = state_29839;
(statearr_29866[(20)] = inst_29779__$1);

(statearr_29866[(9)] = inst_29782__$1);

(statearr_29866[(10)] = inst_29780__$1);

(statearr_29866[(21)] = inst_29781__$1);

(statearr_29866[(22)] = inst_29794);

return statearr_29866;
})();
var statearr_29867_29941 = state_29839__$1;
(statearr_29867_29941[(2)] = null);

(statearr_29867_29941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (40))){
var inst_29807 = (state_29839[(23)]);
var inst_29811 = done.call(null,null);
var inst_29812 = cljs.core.async.untap_STAR_.call(null,m,inst_29807);
var state_29839__$1 = (function (){var statearr_29868 = state_29839;
(statearr_29868[(24)] = inst_29811);

return statearr_29868;
})();
var statearr_29869_29942 = state_29839__$1;
(statearr_29869_29942[(2)] = inst_29812);

(statearr_29869_29942[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (33))){
var inst_29798 = (state_29839[(25)]);
var inst_29800 = cljs.core.chunked_seq_QMARK_.call(null,inst_29798);
var state_29839__$1 = state_29839;
if(inst_29800){
var statearr_29870_29943 = state_29839__$1;
(statearr_29870_29943[(1)] = (36));

} else {
var statearr_29871_29944 = state_29839__$1;
(statearr_29871_29944[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (13))){
var inst_29730 = (state_29839[(26)]);
var inst_29733 = cljs.core.async.close_BANG_.call(null,inst_29730);
var state_29839__$1 = state_29839;
var statearr_29872_29945 = state_29839__$1;
(statearr_29872_29945[(2)] = inst_29733);

(statearr_29872_29945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (22))){
var inst_29751 = (state_29839[(8)]);
var inst_29754 = cljs.core.async.close_BANG_.call(null,inst_29751);
var state_29839__$1 = state_29839;
var statearr_29873_29946 = state_29839__$1;
(statearr_29873_29946[(2)] = inst_29754);

(statearr_29873_29946[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (36))){
var inst_29798 = (state_29839[(25)]);
var inst_29802 = cljs.core.chunk_first.call(null,inst_29798);
var inst_29803 = cljs.core.chunk_rest.call(null,inst_29798);
var inst_29804 = cljs.core.count.call(null,inst_29802);
var inst_29779 = inst_29803;
var inst_29780 = inst_29802;
var inst_29781 = inst_29804;
var inst_29782 = (0);
var state_29839__$1 = (function (){var statearr_29874 = state_29839;
(statearr_29874[(20)] = inst_29779);

(statearr_29874[(9)] = inst_29782);

(statearr_29874[(10)] = inst_29780);

(statearr_29874[(21)] = inst_29781);

return statearr_29874;
})();
var statearr_29875_29947 = state_29839__$1;
(statearr_29875_29947[(2)] = null);

(statearr_29875_29947[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (41))){
var inst_29798 = (state_29839[(25)]);
var inst_29814 = (state_29839[(2)]);
var inst_29815 = cljs.core.next.call(null,inst_29798);
var inst_29779 = inst_29815;
var inst_29780 = null;
var inst_29781 = (0);
var inst_29782 = (0);
var state_29839__$1 = (function (){var statearr_29876 = state_29839;
(statearr_29876[(20)] = inst_29779);

(statearr_29876[(9)] = inst_29782);

(statearr_29876[(10)] = inst_29780);

(statearr_29876[(21)] = inst_29781);

(statearr_29876[(27)] = inst_29814);

return statearr_29876;
})();
var statearr_29877_29948 = state_29839__$1;
(statearr_29877_29948[(2)] = null);

(statearr_29877_29948[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (43))){
var state_29839__$1 = state_29839;
var statearr_29878_29949 = state_29839__$1;
(statearr_29878_29949[(2)] = null);

(statearr_29878_29949[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (29))){
var inst_29823 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
var statearr_29879_29950 = state_29839__$1;
(statearr_29879_29950[(2)] = inst_29823);

(statearr_29879_29950[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (44))){
var inst_29832 = (state_29839[(2)]);
var state_29839__$1 = (function (){var statearr_29880 = state_29839;
(statearr_29880[(28)] = inst_29832);

return statearr_29880;
})();
var statearr_29881_29951 = state_29839__$1;
(statearr_29881_29951[(2)] = null);

(statearr_29881_29951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (6))){
var inst_29771 = (state_29839[(29)]);
var inst_29770 = cljs.core.deref.call(null,cs);
var inst_29771__$1 = cljs.core.keys.call(null,inst_29770);
var inst_29772 = cljs.core.count.call(null,inst_29771__$1);
var inst_29773 = cljs.core.reset_BANG_.call(null,dctr,inst_29772);
var inst_29778 = cljs.core.seq.call(null,inst_29771__$1);
var inst_29779 = inst_29778;
var inst_29780 = null;
var inst_29781 = (0);
var inst_29782 = (0);
var state_29839__$1 = (function (){var statearr_29882 = state_29839;
(statearr_29882[(20)] = inst_29779);

(statearr_29882[(29)] = inst_29771__$1);

(statearr_29882[(9)] = inst_29782);

(statearr_29882[(10)] = inst_29780);

(statearr_29882[(21)] = inst_29781);

(statearr_29882[(30)] = inst_29773);

return statearr_29882;
})();
var statearr_29883_29952 = state_29839__$1;
(statearr_29883_29952[(2)] = null);

(statearr_29883_29952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (28))){
var inst_29779 = (state_29839[(20)]);
var inst_29798 = (state_29839[(25)]);
var inst_29798__$1 = cljs.core.seq.call(null,inst_29779);
var state_29839__$1 = (function (){var statearr_29884 = state_29839;
(statearr_29884[(25)] = inst_29798__$1);

return statearr_29884;
})();
if(inst_29798__$1){
var statearr_29885_29953 = state_29839__$1;
(statearr_29885_29953[(1)] = (33));

} else {
var statearr_29886_29954 = state_29839__$1;
(statearr_29886_29954[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (25))){
var inst_29782 = (state_29839[(9)]);
var inst_29781 = (state_29839[(21)]);
var inst_29784 = (inst_29782 < inst_29781);
var inst_29785 = inst_29784;
var state_29839__$1 = state_29839;
if(cljs.core.truth_(inst_29785)){
var statearr_29887_29955 = state_29839__$1;
(statearr_29887_29955[(1)] = (27));

} else {
var statearr_29888_29956 = state_29839__$1;
(statearr_29888_29956[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (34))){
var state_29839__$1 = state_29839;
var statearr_29889_29957 = state_29839__$1;
(statearr_29889_29957[(2)] = null);

(statearr_29889_29957[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (17))){
var state_29839__$1 = state_29839;
var statearr_29890_29958 = state_29839__$1;
(statearr_29890_29958[(2)] = null);

(statearr_29890_29958[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (3))){
var inst_29837 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29839__$1,inst_29837);
} else {
if((state_val_29840 === (12))){
var inst_29766 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
var statearr_29891_29959 = state_29839__$1;
(statearr_29891_29959[(2)] = inst_29766);

(statearr_29891_29959[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (2))){
var state_29839__$1 = state_29839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29839__$1,(4),ch);
} else {
if((state_val_29840 === (23))){
var state_29839__$1 = state_29839;
var statearr_29892_29960 = state_29839__$1;
(statearr_29892_29960[(2)] = null);

(statearr_29892_29960[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (35))){
var inst_29821 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
var statearr_29893_29961 = state_29839__$1;
(statearr_29893_29961[(2)] = inst_29821);

(statearr_29893_29961[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (19))){
var inst_29740 = (state_29839[(7)]);
var inst_29744 = cljs.core.chunk_first.call(null,inst_29740);
var inst_29745 = cljs.core.chunk_rest.call(null,inst_29740);
var inst_29746 = cljs.core.count.call(null,inst_29744);
var inst_29720 = inst_29745;
var inst_29721 = inst_29744;
var inst_29722 = inst_29746;
var inst_29723 = (0);
var state_29839__$1 = (function (){var statearr_29894 = state_29839;
(statearr_29894[(13)] = inst_29723);

(statearr_29894[(14)] = inst_29722);

(statearr_29894[(15)] = inst_29721);

(statearr_29894[(17)] = inst_29720);

return statearr_29894;
})();
var statearr_29895_29962 = state_29839__$1;
(statearr_29895_29962[(2)] = null);

(statearr_29895_29962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (11))){
var inst_29720 = (state_29839[(17)]);
var inst_29740 = (state_29839[(7)]);
var inst_29740__$1 = cljs.core.seq.call(null,inst_29720);
var state_29839__$1 = (function (){var statearr_29896 = state_29839;
(statearr_29896[(7)] = inst_29740__$1);

return statearr_29896;
})();
if(inst_29740__$1){
var statearr_29897_29963 = state_29839__$1;
(statearr_29897_29963[(1)] = (16));

} else {
var statearr_29898_29964 = state_29839__$1;
(statearr_29898_29964[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (9))){
var inst_29768 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
var statearr_29899_29965 = state_29839__$1;
(statearr_29899_29965[(2)] = inst_29768);

(statearr_29899_29965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (5))){
var inst_29718 = cljs.core.deref.call(null,cs);
var inst_29719 = cljs.core.seq.call(null,inst_29718);
var inst_29720 = inst_29719;
var inst_29721 = null;
var inst_29722 = (0);
var inst_29723 = (0);
var state_29839__$1 = (function (){var statearr_29900 = state_29839;
(statearr_29900[(13)] = inst_29723);

(statearr_29900[(14)] = inst_29722);

(statearr_29900[(15)] = inst_29721);

(statearr_29900[(17)] = inst_29720);

return statearr_29900;
})();
var statearr_29901_29966 = state_29839__$1;
(statearr_29901_29966[(2)] = null);

(statearr_29901_29966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (14))){
var state_29839__$1 = state_29839;
var statearr_29902_29967 = state_29839__$1;
(statearr_29902_29967[(2)] = null);

(statearr_29902_29967[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (45))){
var inst_29829 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
var statearr_29903_29968 = state_29839__$1;
(statearr_29903_29968[(2)] = inst_29829);

(statearr_29903_29968[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (26))){
var inst_29771 = (state_29839[(29)]);
var inst_29825 = (state_29839[(2)]);
var inst_29826 = cljs.core.seq.call(null,inst_29771);
var state_29839__$1 = (function (){var statearr_29904 = state_29839;
(statearr_29904[(31)] = inst_29825);

return statearr_29904;
})();
if(inst_29826){
var statearr_29905_29969 = state_29839__$1;
(statearr_29905_29969[(1)] = (42));

} else {
var statearr_29906_29970 = state_29839__$1;
(statearr_29906_29970[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (16))){
var inst_29740 = (state_29839[(7)]);
var inst_29742 = cljs.core.chunked_seq_QMARK_.call(null,inst_29740);
var state_29839__$1 = state_29839;
if(inst_29742){
var statearr_29907_29971 = state_29839__$1;
(statearr_29907_29971[(1)] = (19));

} else {
var statearr_29908_29972 = state_29839__$1;
(statearr_29908_29972[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (38))){
var inst_29818 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
var statearr_29909_29973 = state_29839__$1;
(statearr_29909_29973[(2)] = inst_29818);

(statearr_29909_29973[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (30))){
var state_29839__$1 = state_29839;
var statearr_29910_29974 = state_29839__$1;
(statearr_29910_29974[(2)] = null);

(statearr_29910_29974[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (10))){
var inst_29723 = (state_29839[(13)]);
var inst_29721 = (state_29839[(15)]);
var inst_29729 = cljs.core._nth.call(null,inst_29721,inst_29723);
var inst_29730 = cljs.core.nth.call(null,inst_29729,(0),null);
var inst_29731 = cljs.core.nth.call(null,inst_29729,(1),null);
var state_29839__$1 = (function (){var statearr_29911 = state_29839;
(statearr_29911[(26)] = inst_29730);

return statearr_29911;
})();
if(cljs.core.truth_(inst_29731)){
var statearr_29912_29975 = state_29839__$1;
(statearr_29912_29975[(1)] = (13));

} else {
var statearr_29913_29976 = state_29839__$1;
(statearr_29913_29976[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (18))){
var inst_29764 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
var statearr_29914_29977 = state_29839__$1;
(statearr_29914_29977[(2)] = inst_29764);

(statearr_29914_29977[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (42))){
var state_29839__$1 = state_29839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29839__$1,(45),dchan);
} else {
if((state_val_29840 === (37))){
var inst_29807 = (state_29839[(23)]);
var inst_29798 = (state_29839[(25)]);
var inst_29711 = (state_29839[(12)]);
var inst_29807__$1 = cljs.core.first.call(null,inst_29798);
var inst_29808 = cljs.core.async.put_BANG_.call(null,inst_29807__$1,inst_29711,done);
var state_29839__$1 = (function (){var statearr_29915 = state_29839;
(statearr_29915[(23)] = inst_29807__$1);

return statearr_29915;
})();
if(cljs.core.truth_(inst_29808)){
var statearr_29916_29978 = state_29839__$1;
(statearr_29916_29978[(1)] = (39));

} else {
var statearr_29917_29979 = state_29839__$1;
(statearr_29917_29979[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (8))){
var inst_29723 = (state_29839[(13)]);
var inst_29722 = (state_29839[(14)]);
var inst_29725 = (inst_29723 < inst_29722);
var inst_29726 = inst_29725;
var state_29839__$1 = state_29839;
if(cljs.core.truth_(inst_29726)){
var statearr_29918_29980 = state_29839__$1;
(statearr_29918_29980[(1)] = (10));

} else {
var statearr_29919_29981 = state_29839__$1;
(statearr_29919_29981[(1)] = (11));

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
});})(c__28620__auto___29927,cs,m,dchan,dctr,done))
;
return ((function (switch__28508__auto__,c__28620__auto___29927,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28509__auto__ = null;
var cljs$core$async$mult_$_state_machine__28509__auto____0 = (function (){
var statearr_29923 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29923[(0)] = cljs$core$async$mult_$_state_machine__28509__auto__);

(statearr_29923[(1)] = (1));

return statearr_29923;
});
var cljs$core$async$mult_$_state_machine__28509__auto____1 = (function (state_29839){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_29839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e29924){if((e29924 instanceof Object)){
var ex__28512__auto__ = e29924;
var statearr_29925_29982 = state_29839;
(statearr_29925_29982[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29983 = state_29839;
state_29839 = G__29983;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28509__auto__ = function(state_29839){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28509__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28509__auto____1.call(this,state_29839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28509__auto____0;
cljs$core$async$mult_$_state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28509__auto____1;
return cljs$core$async$mult_$_state_machine__28509__auto__;
})()
;})(switch__28508__auto__,c__28620__auto___29927,cs,m,dchan,dctr,done))
})();
var state__28622__auto__ = (function (){var statearr_29926 = f__28621__auto__.call(null);
(statearr_29926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto___29927);

return statearr_29926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(c__28620__auto___29927,cs,m,dchan,dctr,done))
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
var args29984 = [];
var len__7279__auto___29987 = arguments.length;
var i__7280__auto___29988 = (0);
while(true){
if((i__7280__auto___29988 < len__7279__auto___29987)){
args29984.push((arguments[i__7280__auto___29988]));

var G__29989 = (i__7280__auto___29988 + (1));
i__7280__auto___29988 = G__29989;
continue;
} else {
}
break;
}

var G__29986 = args29984.length;
switch (G__29986) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29984.length)].join('')));

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
var x__6873__auto__ = (((m == null))?null:m);
var m__6874__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,m,ch);
} else {
var m__6874__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,m,ch);
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
var x__6873__auto__ = (((m == null))?null:m);
var m__6874__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,m,ch);
} else {
var m__6874__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,m,ch);
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
var x__6873__auto__ = (((m == null))?null:m);
var m__6874__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,m);
} else {
var m__6874__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,m);
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
var x__6873__auto__ = (((m == null))?null:m);
var m__6874__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,m,state_map);
} else {
var m__6874__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,m,state_map);
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
var x__6873__auto__ = (((m == null))?null:m);
var m__6874__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,m,mode);
} else {
var m__6874__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7286__auto__ = [];
var len__7279__auto___30001 = arguments.length;
var i__7280__auto___30002 = (0);
while(true){
if((i__7280__auto___30002 < len__7279__auto___30001)){
args__7286__auto__.push((arguments[i__7280__auto___30002]));

var G__30003 = (i__7280__auto___30002 + (1));
i__7280__auto___30002 = G__30003;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((3) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7287__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29995){
var map__29996 = p__29995;
var map__29996__$1 = ((((!((map__29996 == null)))?((((map__29996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29996):map__29996);
var opts = map__29996__$1;
var statearr_29998_30004 = state;
(statearr_29998_30004[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29996,map__29996__$1,opts){
return (function (val){
var statearr_29999_30005 = state;
(statearr_29999_30005[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29996,map__29996__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30000_30006 = state;
(statearr_30000_30006[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29991){
var G__29992 = cljs.core.first.call(null,seq29991);
var seq29991__$1 = cljs.core.next.call(null,seq29991);
var G__29993 = cljs.core.first.call(null,seq29991__$1);
var seq29991__$2 = cljs.core.next.call(null,seq29991__$1);
var G__29994 = cljs.core.first.call(null,seq29991__$2);
var seq29991__$3 = cljs.core.next.call(null,seq29991__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29992,G__29993,G__29994,seq29991__$3);
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
if(typeof cljs.core.async.t_cljs$core$async30170 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30170 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30171){
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
this.meta30171 = meta30171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30172,meta30171__$1){
var self__ = this;
var _30172__$1 = this;
return (new cljs.core.async.t_cljs$core$async30170(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30171__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30170.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30172){
var self__ = this;
var _30172__$1 = this;
return self__.meta30171;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30170.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30170.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30170.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30170.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30170.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30170.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30170.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30170.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async30170.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30171","meta30171",-308910322,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30170.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30170";

cljs.core.async.t_cljs$core$async30170.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async30170");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30170 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30170(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30171){
return (new cljs.core.async.t_cljs$core$async30170(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30171));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30170(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28620__auto___30333 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28620__auto___30333,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (c__28620__auto___30333,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30270){
var state_val_30271 = (state_30270[(1)]);
if((state_val_30271 === (7))){
var inst_30188 = (state_30270[(2)]);
var state_30270__$1 = state_30270;
var statearr_30272_30334 = state_30270__$1;
(statearr_30272_30334[(2)] = inst_30188);

(statearr_30272_30334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (20))){
var inst_30200 = (state_30270[(7)]);
var state_30270__$1 = state_30270;
var statearr_30273_30335 = state_30270__$1;
(statearr_30273_30335[(2)] = inst_30200);

(statearr_30273_30335[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (27))){
var state_30270__$1 = state_30270;
var statearr_30274_30336 = state_30270__$1;
(statearr_30274_30336[(2)] = null);

(statearr_30274_30336[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (1))){
var inst_30176 = (state_30270[(8)]);
var inst_30176__$1 = calc_state.call(null);
var inst_30178 = (inst_30176__$1 == null);
var inst_30179 = cljs.core.not.call(null,inst_30178);
var state_30270__$1 = (function (){var statearr_30275 = state_30270;
(statearr_30275[(8)] = inst_30176__$1);

return statearr_30275;
})();
if(inst_30179){
var statearr_30276_30337 = state_30270__$1;
(statearr_30276_30337[(1)] = (2));

} else {
var statearr_30277_30338 = state_30270__$1;
(statearr_30277_30338[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (24))){
var inst_30230 = (state_30270[(9)]);
var inst_30244 = (state_30270[(10)]);
var inst_30223 = (state_30270[(11)]);
var inst_30244__$1 = inst_30223.call(null,inst_30230);
var state_30270__$1 = (function (){var statearr_30278 = state_30270;
(statearr_30278[(10)] = inst_30244__$1);

return statearr_30278;
})();
if(cljs.core.truth_(inst_30244__$1)){
var statearr_30279_30339 = state_30270__$1;
(statearr_30279_30339[(1)] = (29));

} else {
var statearr_30280_30340 = state_30270__$1;
(statearr_30280_30340[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (4))){
var inst_30191 = (state_30270[(2)]);
var state_30270__$1 = state_30270;
if(cljs.core.truth_(inst_30191)){
var statearr_30281_30341 = state_30270__$1;
(statearr_30281_30341[(1)] = (8));

} else {
var statearr_30282_30342 = state_30270__$1;
(statearr_30282_30342[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (15))){
var inst_30217 = (state_30270[(2)]);
var state_30270__$1 = state_30270;
if(cljs.core.truth_(inst_30217)){
var statearr_30283_30343 = state_30270__$1;
(statearr_30283_30343[(1)] = (19));

} else {
var statearr_30284_30344 = state_30270__$1;
(statearr_30284_30344[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (21))){
var inst_30222 = (state_30270[(12)]);
var inst_30222__$1 = (state_30270[(2)]);
var inst_30223 = cljs.core.get.call(null,inst_30222__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30224 = cljs.core.get.call(null,inst_30222__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30225 = cljs.core.get.call(null,inst_30222__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30270__$1 = (function (){var statearr_30285 = state_30270;
(statearr_30285[(12)] = inst_30222__$1);

(statearr_30285[(11)] = inst_30223);

(statearr_30285[(13)] = inst_30224);

return statearr_30285;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30270__$1,(22),inst_30225);
} else {
if((state_val_30271 === (31))){
var inst_30252 = (state_30270[(2)]);
var state_30270__$1 = state_30270;
if(cljs.core.truth_(inst_30252)){
var statearr_30286_30345 = state_30270__$1;
(statearr_30286_30345[(1)] = (32));

} else {
var statearr_30287_30346 = state_30270__$1;
(statearr_30287_30346[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (32))){
var inst_30229 = (state_30270[(14)]);
var state_30270__$1 = state_30270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30270__$1,(35),out,inst_30229);
} else {
if((state_val_30271 === (33))){
var inst_30222 = (state_30270[(12)]);
var inst_30200 = inst_30222;
var state_30270__$1 = (function (){var statearr_30288 = state_30270;
(statearr_30288[(7)] = inst_30200);

return statearr_30288;
})();
var statearr_30289_30347 = state_30270__$1;
(statearr_30289_30347[(2)] = null);

(statearr_30289_30347[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (13))){
var inst_30200 = (state_30270[(7)]);
var inst_30207 = inst_30200.cljs$lang$protocol_mask$partition0$;
var inst_30208 = (inst_30207 & (64));
var inst_30209 = inst_30200.cljs$core$ISeq$;
var inst_30210 = (inst_30208) || (inst_30209);
var state_30270__$1 = state_30270;
if(cljs.core.truth_(inst_30210)){
var statearr_30290_30348 = state_30270__$1;
(statearr_30290_30348[(1)] = (16));

} else {
var statearr_30291_30349 = state_30270__$1;
(statearr_30291_30349[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (22))){
var inst_30230 = (state_30270[(9)]);
var inst_30229 = (state_30270[(14)]);
var inst_30228 = (state_30270[(2)]);
var inst_30229__$1 = cljs.core.nth.call(null,inst_30228,(0),null);
var inst_30230__$1 = cljs.core.nth.call(null,inst_30228,(1),null);
var inst_30231 = (inst_30229__$1 == null);
var inst_30232 = cljs.core._EQ_.call(null,inst_30230__$1,change);
var inst_30233 = (inst_30231) || (inst_30232);
var state_30270__$1 = (function (){var statearr_30292 = state_30270;
(statearr_30292[(9)] = inst_30230__$1);

(statearr_30292[(14)] = inst_30229__$1);

return statearr_30292;
})();
if(cljs.core.truth_(inst_30233)){
var statearr_30293_30350 = state_30270__$1;
(statearr_30293_30350[(1)] = (23));

} else {
var statearr_30294_30351 = state_30270__$1;
(statearr_30294_30351[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (36))){
var inst_30222 = (state_30270[(12)]);
var inst_30200 = inst_30222;
var state_30270__$1 = (function (){var statearr_30295 = state_30270;
(statearr_30295[(7)] = inst_30200);

return statearr_30295;
})();
var statearr_30296_30352 = state_30270__$1;
(statearr_30296_30352[(2)] = null);

(statearr_30296_30352[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (29))){
var inst_30244 = (state_30270[(10)]);
var state_30270__$1 = state_30270;
var statearr_30297_30353 = state_30270__$1;
(statearr_30297_30353[(2)] = inst_30244);

(statearr_30297_30353[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (6))){
var state_30270__$1 = state_30270;
var statearr_30298_30354 = state_30270__$1;
(statearr_30298_30354[(2)] = false);

(statearr_30298_30354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (28))){
var inst_30240 = (state_30270[(2)]);
var inst_30241 = calc_state.call(null);
var inst_30200 = inst_30241;
var state_30270__$1 = (function (){var statearr_30299 = state_30270;
(statearr_30299[(15)] = inst_30240);

(statearr_30299[(7)] = inst_30200);

return statearr_30299;
})();
var statearr_30300_30355 = state_30270__$1;
(statearr_30300_30355[(2)] = null);

(statearr_30300_30355[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (25))){
var inst_30266 = (state_30270[(2)]);
var state_30270__$1 = state_30270;
var statearr_30301_30356 = state_30270__$1;
(statearr_30301_30356[(2)] = inst_30266);

(statearr_30301_30356[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (34))){
var inst_30264 = (state_30270[(2)]);
var state_30270__$1 = state_30270;
var statearr_30302_30357 = state_30270__$1;
(statearr_30302_30357[(2)] = inst_30264);

(statearr_30302_30357[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (17))){
var state_30270__$1 = state_30270;
var statearr_30303_30358 = state_30270__$1;
(statearr_30303_30358[(2)] = false);

(statearr_30303_30358[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (3))){
var state_30270__$1 = state_30270;
var statearr_30304_30359 = state_30270__$1;
(statearr_30304_30359[(2)] = false);

(statearr_30304_30359[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (12))){
var inst_30268 = (state_30270[(2)]);
var state_30270__$1 = state_30270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30270__$1,inst_30268);
} else {
if((state_val_30271 === (2))){
var inst_30176 = (state_30270[(8)]);
var inst_30181 = inst_30176.cljs$lang$protocol_mask$partition0$;
var inst_30182 = (inst_30181 & (64));
var inst_30183 = inst_30176.cljs$core$ISeq$;
var inst_30184 = (inst_30182) || (inst_30183);
var state_30270__$1 = state_30270;
if(cljs.core.truth_(inst_30184)){
var statearr_30305_30360 = state_30270__$1;
(statearr_30305_30360[(1)] = (5));

} else {
var statearr_30306_30361 = state_30270__$1;
(statearr_30306_30361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (23))){
var inst_30229 = (state_30270[(14)]);
var inst_30235 = (inst_30229 == null);
var state_30270__$1 = state_30270;
if(cljs.core.truth_(inst_30235)){
var statearr_30307_30362 = state_30270__$1;
(statearr_30307_30362[(1)] = (26));

} else {
var statearr_30308_30363 = state_30270__$1;
(statearr_30308_30363[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (35))){
var inst_30255 = (state_30270[(2)]);
var state_30270__$1 = state_30270;
if(cljs.core.truth_(inst_30255)){
var statearr_30309_30364 = state_30270__$1;
(statearr_30309_30364[(1)] = (36));

} else {
var statearr_30310_30365 = state_30270__$1;
(statearr_30310_30365[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (19))){
var inst_30200 = (state_30270[(7)]);
var inst_30219 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30200);
var state_30270__$1 = state_30270;
var statearr_30311_30366 = state_30270__$1;
(statearr_30311_30366[(2)] = inst_30219);

(statearr_30311_30366[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (11))){
var inst_30200 = (state_30270[(7)]);
var inst_30204 = (inst_30200 == null);
var inst_30205 = cljs.core.not.call(null,inst_30204);
var state_30270__$1 = state_30270;
if(inst_30205){
var statearr_30312_30367 = state_30270__$1;
(statearr_30312_30367[(1)] = (13));

} else {
var statearr_30313_30368 = state_30270__$1;
(statearr_30313_30368[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (9))){
var inst_30176 = (state_30270[(8)]);
var state_30270__$1 = state_30270;
var statearr_30314_30369 = state_30270__$1;
(statearr_30314_30369[(2)] = inst_30176);

(statearr_30314_30369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (5))){
var state_30270__$1 = state_30270;
var statearr_30315_30370 = state_30270__$1;
(statearr_30315_30370[(2)] = true);

(statearr_30315_30370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (14))){
var state_30270__$1 = state_30270;
var statearr_30316_30371 = state_30270__$1;
(statearr_30316_30371[(2)] = false);

(statearr_30316_30371[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (26))){
var inst_30230 = (state_30270[(9)]);
var inst_30237 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30230);
var state_30270__$1 = state_30270;
var statearr_30317_30372 = state_30270__$1;
(statearr_30317_30372[(2)] = inst_30237);

(statearr_30317_30372[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (16))){
var state_30270__$1 = state_30270;
var statearr_30318_30373 = state_30270__$1;
(statearr_30318_30373[(2)] = true);

(statearr_30318_30373[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (38))){
var inst_30260 = (state_30270[(2)]);
var state_30270__$1 = state_30270;
var statearr_30319_30374 = state_30270__$1;
(statearr_30319_30374[(2)] = inst_30260);

(statearr_30319_30374[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (30))){
var inst_30230 = (state_30270[(9)]);
var inst_30223 = (state_30270[(11)]);
var inst_30224 = (state_30270[(13)]);
var inst_30247 = cljs.core.empty_QMARK_.call(null,inst_30223);
var inst_30248 = inst_30224.call(null,inst_30230);
var inst_30249 = cljs.core.not.call(null,inst_30248);
var inst_30250 = (inst_30247) && (inst_30249);
var state_30270__$1 = state_30270;
var statearr_30320_30375 = state_30270__$1;
(statearr_30320_30375[(2)] = inst_30250);

(statearr_30320_30375[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (10))){
var inst_30176 = (state_30270[(8)]);
var inst_30196 = (state_30270[(2)]);
var inst_30197 = cljs.core.get.call(null,inst_30196,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30198 = cljs.core.get.call(null,inst_30196,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30199 = cljs.core.get.call(null,inst_30196,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30200 = inst_30176;
var state_30270__$1 = (function (){var statearr_30321 = state_30270;
(statearr_30321[(16)] = inst_30197);

(statearr_30321[(7)] = inst_30200);

(statearr_30321[(17)] = inst_30198);

(statearr_30321[(18)] = inst_30199);

return statearr_30321;
})();
var statearr_30322_30376 = state_30270__$1;
(statearr_30322_30376[(2)] = null);

(statearr_30322_30376[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (18))){
var inst_30214 = (state_30270[(2)]);
var state_30270__$1 = state_30270;
var statearr_30323_30377 = state_30270__$1;
(statearr_30323_30377[(2)] = inst_30214);

(statearr_30323_30377[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (37))){
var state_30270__$1 = state_30270;
var statearr_30324_30378 = state_30270__$1;
(statearr_30324_30378[(2)] = null);

(statearr_30324_30378[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (8))){
var inst_30176 = (state_30270[(8)]);
var inst_30193 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30176);
var state_30270__$1 = state_30270;
var statearr_30325_30379 = state_30270__$1;
(statearr_30325_30379[(2)] = inst_30193);

(statearr_30325_30379[(1)] = (10));


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
});})(c__28620__auto___30333,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28508__auto__,c__28620__auto___30333,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28509__auto__ = null;
var cljs$core$async$mix_$_state_machine__28509__auto____0 = (function (){
var statearr_30329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30329[(0)] = cljs$core$async$mix_$_state_machine__28509__auto__);

(statearr_30329[(1)] = (1));

return statearr_30329;
});
var cljs$core$async$mix_$_state_machine__28509__auto____1 = (function (state_30270){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_30270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e30330){if((e30330 instanceof Object)){
var ex__28512__auto__ = e30330;
var statearr_30331_30380 = state_30270;
(statearr_30331_30380[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30381 = state_30270;
state_30270 = G__30381;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28509__auto__ = function(state_30270){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28509__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28509__auto____1.call(this,state_30270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28509__auto____0;
cljs$core$async$mix_$_state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28509__auto____1;
return cljs$core$async$mix_$_state_machine__28509__auto__;
})()
;})(switch__28508__auto__,c__28620__auto___30333,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28622__auto__ = (function (){var statearr_30332 = f__28621__auto__.call(null);
(statearr_30332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto___30333);

return statearr_30332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(c__28620__auto___30333,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__6873__auto__ = (((p == null))?null:p);
var m__6874__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__6874__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__6873__auto__ = (((p == null))?null:p);
var m__6874__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,p,v,ch);
} else {
var m__6874__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30382 = [];
var len__7279__auto___30385 = arguments.length;
var i__7280__auto___30386 = (0);
while(true){
if((i__7280__auto___30386 < len__7279__auto___30385)){
args30382.push((arguments[i__7280__auto___30386]));

var G__30387 = (i__7280__auto___30386 + (1));
i__7280__auto___30386 = G__30387;
continue;
} else {
}
break;
}

var G__30384 = args30382.length;
switch (G__30384) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30382.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6873__auto__ = (((p == null))?null:p);
var m__6874__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,p);
} else {
var m__6874__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,p);
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
var x__6873__auto__ = (((p == null))?null:p);
var m__6874__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,p,v);
} else {
var m__6874__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,p,v);
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
var args30390 = [];
var len__7279__auto___30515 = arguments.length;
var i__7280__auto___30516 = (0);
while(true){
if((i__7280__auto___30516 < len__7279__auto___30515)){
args30390.push((arguments[i__7280__auto___30516]));

var G__30517 = (i__7280__auto___30516 + (1));
i__7280__auto___30516 = G__30517;
continue;
} else {
}
break;
}

var G__30392 = args30390.length;
switch (G__30392) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30390.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6210__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6210__auto__,mults){
return (function (p1__30389_SHARP_){
if(cljs.core.truth_(p1__30389_SHARP_.call(null,topic))){
return p1__30389_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30389_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6210__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30393 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30393 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30394){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30394 = meta30394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30395,meta30394__$1){
var self__ = this;
var _30395__$1 = this;
return (new cljs.core.async.t_cljs$core$async30393(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30394__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30393.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30395){
var self__ = this;
var _30395__$1 = this;
return self__.meta30394;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30393.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30393.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30393.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30393.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30393.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async30393.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30393.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30393.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30394","meta30394",-51459351,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30393.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30393";

cljs.core.async.t_cljs$core$async30393.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async30393");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30393 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30393(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30394){
return (new cljs.core.async.t_cljs$core$async30393(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30394));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30393(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28620__auto___30519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28620__auto___30519,mults,ensure_mult,p){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (c__28620__auto___30519,mults,ensure_mult,p){
return (function (state_30467){
var state_val_30468 = (state_30467[(1)]);
if((state_val_30468 === (7))){
var inst_30463 = (state_30467[(2)]);
var state_30467__$1 = state_30467;
var statearr_30469_30520 = state_30467__$1;
(statearr_30469_30520[(2)] = inst_30463);

(statearr_30469_30520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (20))){
var state_30467__$1 = state_30467;
var statearr_30470_30521 = state_30467__$1;
(statearr_30470_30521[(2)] = null);

(statearr_30470_30521[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (1))){
var state_30467__$1 = state_30467;
var statearr_30471_30522 = state_30467__$1;
(statearr_30471_30522[(2)] = null);

(statearr_30471_30522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (24))){
var inst_30446 = (state_30467[(7)]);
var inst_30455 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30446);
var state_30467__$1 = state_30467;
var statearr_30472_30523 = state_30467__$1;
(statearr_30472_30523[(2)] = inst_30455);

(statearr_30472_30523[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (4))){
var inst_30398 = (state_30467[(8)]);
var inst_30398__$1 = (state_30467[(2)]);
var inst_30399 = (inst_30398__$1 == null);
var state_30467__$1 = (function (){var statearr_30473 = state_30467;
(statearr_30473[(8)] = inst_30398__$1);

return statearr_30473;
})();
if(cljs.core.truth_(inst_30399)){
var statearr_30474_30524 = state_30467__$1;
(statearr_30474_30524[(1)] = (5));

} else {
var statearr_30475_30525 = state_30467__$1;
(statearr_30475_30525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (15))){
var inst_30440 = (state_30467[(2)]);
var state_30467__$1 = state_30467;
var statearr_30476_30526 = state_30467__$1;
(statearr_30476_30526[(2)] = inst_30440);

(statearr_30476_30526[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (21))){
var inst_30460 = (state_30467[(2)]);
var state_30467__$1 = (function (){var statearr_30477 = state_30467;
(statearr_30477[(9)] = inst_30460);

return statearr_30477;
})();
var statearr_30478_30527 = state_30467__$1;
(statearr_30478_30527[(2)] = null);

(statearr_30478_30527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (13))){
var inst_30422 = (state_30467[(10)]);
var inst_30424 = cljs.core.chunked_seq_QMARK_.call(null,inst_30422);
var state_30467__$1 = state_30467;
if(inst_30424){
var statearr_30479_30528 = state_30467__$1;
(statearr_30479_30528[(1)] = (16));

} else {
var statearr_30480_30529 = state_30467__$1;
(statearr_30480_30529[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (22))){
var inst_30452 = (state_30467[(2)]);
var state_30467__$1 = state_30467;
if(cljs.core.truth_(inst_30452)){
var statearr_30481_30530 = state_30467__$1;
(statearr_30481_30530[(1)] = (23));

} else {
var statearr_30482_30531 = state_30467__$1;
(statearr_30482_30531[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (6))){
var inst_30398 = (state_30467[(8)]);
var inst_30448 = (state_30467[(11)]);
var inst_30446 = (state_30467[(7)]);
var inst_30446__$1 = topic_fn.call(null,inst_30398);
var inst_30447 = cljs.core.deref.call(null,mults);
var inst_30448__$1 = cljs.core.get.call(null,inst_30447,inst_30446__$1);
var state_30467__$1 = (function (){var statearr_30483 = state_30467;
(statearr_30483[(11)] = inst_30448__$1);

(statearr_30483[(7)] = inst_30446__$1);

return statearr_30483;
})();
if(cljs.core.truth_(inst_30448__$1)){
var statearr_30484_30532 = state_30467__$1;
(statearr_30484_30532[(1)] = (19));

} else {
var statearr_30485_30533 = state_30467__$1;
(statearr_30485_30533[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (25))){
var inst_30457 = (state_30467[(2)]);
var state_30467__$1 = state_30467;
var statearr_30486_30534 = state_30467__$1;
(statearr_30486_30534[(2)] = inst_30457);

(statearr_30486_30534[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (17))){
var inst_30422 = (state_30467[(10)]);
var inst_30431 = cljs.core.first.call(null,inst_30422);
var inst_30432 = cljs.core.async.muxch_STAR_.call(null,inst_30431);
var inst_30433 = cljs.core.async.close_BANG_.call(null,inst_30432);
var inst_30434 = cljs.core.next.call(null,inst_30422);
var inst_30408 = inst_30434;
var inst_30409 = null;
var inst_30410 = (0);
var inst_30411 = (0);
var state_30467__$1 = (function (){var statearr_30487 = state_30467;
(statearr_30487[(12)] = inst_30409);

(statearr_30487[(13)] = inst_30408);

(statearr_30487[(14)] = inst_30411);

(statearr_30487[(15)] = inst_30410);

(statearr_30487[(16)] = inst_30433);

return statearr_30487;
})();
var statearr_30488_30535 = state_30467__$1;
(statearr_30488_30535[(2)] = null);

(statearr_30488_30535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (3))){
var inst_30465 = (state_30467[(2)]);
var state_30467__$1 = state_30467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30467__$1,inst_30465);
} else {
if((state_val_30468 === (12))){
var inst_30442 = (state_30467[(2)]);
var state_30467__$1 = state_30467;
var statearr_30489_30536 = state_30467__$1;
(statearr_30489_30536[(2)] = inst_30442);

(statearr_30489_30536[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (2))){
var state_30467__$1 = state_30467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30467__$1,(4),ch);
} else {
if((state_val_30468 === (23))){
var state_30467__$1 = state_30467;
var statearr_30490_30537 = state_30467__$1;
(statearr_30490_30537[(2)] = null);

(statearr_30490_30537[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (19))){
var inst_30398 = (state_30467[(8)]);
var inst_30448 = (state_30467[(11)]);
var inst_30450 = cljs.core.async.muxch_STAR_.call(null,inst_30448);
var state_30467__$1 = state_30467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30467__$1,(22),inst_30450,inst_30398);
} else {
if((state_val_30468 === (11))){
var inst_30408 = (state_30467[(13)]);
var inst_30422 = (state_30467[(10)]);
var inst_30422__$1 = cljs.core.seq.call(null,inst_30408);
var state_30467__$1 = (function (){var statearr_30491 = state_30467;
(statearr_30491[(10)] = inst_30422__$1);

return statearr_30491;
})();
if(inst_30422__$1){
var statearr_30492_30538 = state_30467__$1;
(statearr_30492_30538[(1)] = (13));

} else {
var statearr_30493_30539 = state_30467__$1;
(statearr_30493_30539[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (9))){
var inst_30444 = (state_30467[(2)]);
var state_30467__$1 = state_30467;
var statearr_30494_30540 = state_30467__$1;
(statearr_30494_30540[(2)] = inst_30444);

(statearr_30494_30540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (5))){
var inst_30405 = cljs.core.deref.call(null,mults);
var inst_30406 = cljs.core.vals.call(null,inst_30405);
var inst_30407 = cljs.core.seq.call(null,inst_30406);
var inst_30408 = inst_30407;
var inst_30409 = null;
var inst_30410 = (0);
var inst_30411 = (0);
var state_30467__$1 = (function (){var statearr_30495 = state_30467;
(statearr_30495[(12)] = inst_30409);

(statearr_30495[(13)] = inst_30408);

(statearr_30495[(14)] = inst_30411);

(statearr_30495[(15)] = inst_30410);

return statearr_30495;
})();
var statearr_30496_30541 = state_30467__$1;
(statearr_30496_30541[(2)] = null);

(statearr_30496_30541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (14))){
var state_30467__$1 = state_30467;
var statearr_30500_30542 = state_30467__$1;
(statearr_30500_30542[(2)] = null);

(statearr_30500_30542[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (16))){
var inst_30422 = (state_30467[(10)]);
var inst_30426 = cljs.core.chunk_first.call(null,inst_30422);
var inst_30427 = cljs.core.chunk_rest.call(null,inst_30422);
var inst_30428 = cljs.core.count.call(null,inst_30426);
var inst_30408 = inst_30427;
var inst_30409 = inst_30426;
var inst_30410 = inst_30428;
var inst_30411 = (0);
var state_30467__$1 = (function (){var statearr_30501 = state_30467;
(statearr_30501[(12)] = inst_30409);

(statearr_30501[(13)] = inst_30408);

(statearr_30501[(14)] = inst_30411);

(statearr_30501[(15)] = inst_30410);

return statearr_30501;
})();
var statearr_30502_30543 = state_30467__$1;
(statearr_30502_30543[(2)] = null);

(statearr_30502_30543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (10))){
var inst_30409 = (state_30467[(12)]);
var inst_30408 = (state_30467[(13)]);
var inst_30411 = (state_30467[(14)]);
var inst_30410 = (state_30467[(15)]);
var inst_30416 = cljs.core._nth.call(null,inst_30409,inst_30411);
var inst_30417 = cljs.core.async.muxch_STAR_.call(null,inst_30416);
var inst_30418 = cljs.core.async.close_BANG_.call(null,inst_30417);
var inst_30419 = (inst_30411 + (1));
var tmp30497 = inst_30409;
var tmp30498 = inst_30408;
var tmp30499 = inst_30410;
var inst_30408__$1 = tmp30498;
var inst_30409__$1 = tmp30497;
var inst_30410__$1 = tmp30499;
var inst_30411__$1 = inst_30419;
var state_30467__$1 = (function (){var statearr_30503 = state_30467;
(statearr_30503[(12)] = inst_30409__$1);

(statearr_30503[(17)] = inst_30418);

(statearr_30503[(13)] = inst_30408__$1);

(statearr_30503[(14)] = inst_30411__$1);

(statearr_30503[(15)] = inst_30410__$1);

return statearr_30503;
})();
var statearr_30504_30544 = state_30467__$1;
(statearr_30504_30544[(2)] = null);

(statearr_30504_30544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (18))){
var inst_30437 = (state_30467[(2)]);
var state_30467__$1 = state_30467;
var statearr_30505_30545 = state_30467__$1;
(statearr_30505_30545[(2)] = inst_30437);

(statearr_30505_30545[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (8))){
var inst_30411 = (state_30467[(14)]);
var inst_30410 = (state_30467[(15)]);
var inst_30413 = (inst_30411 < inst_30410);
var inst_30414 = inst_30413;
var state_30467__$1 = state_30467;
if(cljs.core.truth_(inst_30414)){
var statearr_30506_30546 = state_30467__$1;
(statearr_30506_30546[(1)] = (10));

} else {
var statearr_30507_30547 = state_30467__$1;
(statearr_30507_30547[(1)] = (11));

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
});})(c__28620__auto___30519,mults,ensure_mult,p))
;
return ((function (switch__28508__auto__,c__28620__auto___30519,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28509__auto__ = null;
var cljs$core$async$state_machine__28509__auto____0 = (function (){
var statearr_30511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30511[(0)] = cljs$core$async$state_machine__28509__auto__);

(statearr_30511[(1)] = (1));

return statearr_30511;
});
var cljs$core$async$state_machine__28509__auto____1 = (function (state_30467){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_30467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e30512){if((e30512 instanceof Object)){
var ex__28512__auto__ = e30512;
var statearr_30513_30548 = state_30467;
(statearr_30513_30548[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30549 = state_30467;
state_30467 = G__30549;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
cljs$core$async$state_machine__28509__auto__ = function(state_30467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28509__auto____1.call(this,state_30467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28509__auto____0;
cljs$core$async$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28509__auto____1;
return cljs$core$async$state_machine__28509__auto__;
})()
;})(switch__28508__auto__,c__28620__auto___30519,mults,ensure_mult,p))
})();
var state__28622__auto__ = (function (){var statearr_30514 = f__28621__auto__.call(null);
(statearr_30514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto___30519);

return statearr_30514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(c__28620__auto___30519,mults,ensure_mult,p))
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
var args30550 = [];
var len__7279__auto___30553 = arguments.length;
var i__7280__auto___30554 = (0);
while(true){
if((i__7280__auto___30554 < len__7279__auto___30553)){
args30550.push((arguments[i__7280__auto___30554]));

var G__30555 = (i__7280__auto___30554 + (1));
i__7280__auto___30554 = G__30555;
continue;
} else {
}
break;
}

var G__30552 = args30550.length;
switch (G__30552) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30550.length)].join('')));

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
var args30557 = [];
var len__7279__auto___30560 = arguments.length;
var i__7280__auto___30561 = (0);
while(true){
if((i__7280__auto___30561 < len__7279__auto___30560)){
args30557.push((arguments[i__7280__auto___30561]));

var G__30562 = (i__7280__auto___30561 + (1));
i__7280__auto___30561 = G__30562;
continue;
} else {
}
break;
}

var G__30559 = args30557.length;
switch (G__30559) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30557.length)].join('')));

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
var args30564 = [];
var len__7279__auto___30635 = arguments.length;
var i__7280__auto___30636 = (0);
while(true){
if((i__7280__auto___30636 < len__7279__auto___30635)){
args30564.push((arguments[i__7280__auto___30636]));

var G__30637 = (i__7280__auto___30636 + (1));
i__7280__auto___30636 = G__30637;
continue;
} else {
}
break;
}

var G__30566 = args30564.length;
switch (G__30566) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30564.length)].join('')));

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
var c__28620__auto___30639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28620__auto___30639,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (c__28620__auto___30639,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30605){
var state_val_30606 = (state_30605[(1)]);
if((state_val_30606 === (7))){
var state_30605__$1 = state_30605;
var statearr_30607_30640 = state_30605__$1;
(statearr_30607_30640[(2)] = null);

(statearr_30607_30640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (1))){
var state_30605__$1 = state_30605;
var statearr_30608_30641 = state_30605__$1;
(statearr_30608_30641[(2)] = null);

(statearr_30608_30641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (4))){
var inst_30569 = (state_30605[(7)]);
var inst_30571 = (inst_30569 < cnt);
var state_30605__$1 = state_30605;
if(cljs.core.truth_(inst_30571)){
var statearr_30609_30642 = state_30605__$1;
(statearr_30609_30642[(1)] = (6));

} else {
var statearr_30610_30643 = state_30605__$1;
(statearr_30610_30643[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (15))){
var inst_30601 = (state_30605[(2)]);
var state_30605__$1 = state_30605;
var statearr_30611_30644 = state_30605__$1;
(statearr_30611_30644[(2)] = inst_30601);

(statearr_30611_30644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (13))){
var inst_30594 = cljs.core.async.close_BANG_.call(null,out);
var state_30605__$1 = state_30605;
var statearr_30612_30645 = state_30605__$1;
(statearr_30612_30645[(2)] = inst_30594);

(statearr_30612_30645[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (6))){
var state_30605__$1 = state_30605;
var statearr_30613_30646 = state_30605__$1;
(statearr_30613_30646[(2)] = null);

(statearr_30613_30646[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (3))){
var inst_30603 = (state_30605[(2)]);
var state_30605__$1 = state_30605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30605__$1,inst_30603);
} else {
if((state_val_30606 === (12))){
var inst_30591 = (state_30605[(8)]);
var inst_30591__$1 = (state_30605[(2)]);
var inst_30592 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30591__$1);
var state_30605__$1 = (function (){var statearr_30614 = state_30605;
(statearr_30614[(8)] = inst_30591__$1);

return statearr_30614;
})();
if(cljs.core.truth_(inst_30592)){
var statearr_30615_30647 = state_30605__$1;
(statearr_30615_30647[(1)] = (13));

} else {
var statearr_30616_30648 = state_30605__$1;
(statearr_30616_30648[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (2))){
var inst_30568 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30569 = (0);
var state_30605__$1 = (function (){var statearr_30617 = state_30605;
(statearr_30617[(7)] = inst_30569);

(statearr_30617[(9)] = inst_30568);

return statearr_30617;
})();
var statearr_30618_30649 = state_30605__$1;
(statearr_30618_30649[(2)] = null);

(statearr_30618_30649[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (11))){
var inst_30569 = (state_30605[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30605,(10),Object,null,(9));
var inst_30578 = chs__$1.call(null,inst_30569);
var inst_30579 = done.call(null,inst_30569);
var inst_30580 = cljs.core.async.take_BANG_.call(null,inst_30578,inst_30579);
var state_30605__$1 = state_30605;
var statearr_30619_30650 = state_30605__$1;
(statearr_30619_30650[(2)] = inst_30580);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30605__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (9))){
var inst_30569 = (state_30605[(7)]);
var inst_30582 = (state_30605[(2)]);
var inst_30583 = (inst_30569 + (1));
var inst_30569__$1 = inst_30583;
var state_30605__$1 = (function (){var statearr_30620 = state_30605;
(statearr_30620[(10)] = inst_30582);

(statearr_30620[(7)] = inst_30569__$1);

return statearr_30620;
})();
var statearr_30621_30651 = state_30605__$1;
(statearr_30621_30651[(2)] = null);

(statearr_30621_30651[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (5))){
var inst_30589 = (state_30605[(2)]);
var state_30605__$1 = (function (){var statearr_30622 = state_30605;
(statearr_30622[(11)] = inst_30589);

return statearr_30622;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30605__$1,(12),dchan);
} else {
if((state_val_30606 === (14))){
var inst_30591 = (state_30605[(8)]);
var inst_30596 = cljs.core.apply.call(null,f,inst_30591);
var state_30605__$1 = state_30605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30605__$1,(16),out,inst_30596);
} else {
if((state_val_30606 === (16))){
var inst_30598 = (state_30605[(2)]);
var state_30605__$1 = (function (){var statearr_30623 = state_30605;
(statearr_30623[(12)] = inst_30598);

return statearr_30623;
})();
var statearr_30624_30652 = state_30605__$1;
(statearr_30624_30652[(2)] = null);

(statearr_30624_30652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (10))){
var inst_30573 = (state_30605[(2)]);
var inst_30574 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30605__$1 = (function (){var statearr_30625 = state_30605;
(statearr_30625[(13)] = inst_30573);

return statearr_30625;
})();
var statearr_30626_30653 = state_30605__$1;
(statearr_30626_30653[(2)] = inst_30574);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30605__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (8))){
var inst_30587 = (state_30605[(2)]);
var state_30605__$1 = state_30605;
var statearr_30627_30654 = state_30605__$1;
(statearr_30627_30654[(2)] = inst_30587);

(statearr_30627_30654[(1)] = (5));


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
});})(c__28620__auto___30639,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28508__auto__,c__28620__auto___30639,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28509__auto__ = null;
var cljs$core$async$state_machine__28509__auto____0 = (function (){
var statearr_30631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30631[(0)] = cljs$core$async$state_machine__28509__auto__);

(statearr_30631[(1)] = (1));

return statearr_30631;
});
var cljs$core$async$state_machine__28509__auto____1 = (function (state_30605){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_30605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e30632){if((e30632 instanceof Object)){
var ex__28512__auto__ = e30632;
var statearr_30633_30655 = state_30605;
(statearr_30633_30655[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30656 = state_30605;
state_30605 = G__30656;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
cljs$core$async$state_machine__28509__auto__ = function(state_30605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28509__auto____1.call(this,state_30605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28509__auto____0;
cljs$core$async$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28509__auto____1;
return cljs$core$async$state_machine__28509__auto__;
})()
;})(switch__28508__auto__,c__28620__auto___30639,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28622__auto__ = (function (){var statearr_30634 = f__28621__auto__.call(null);
(statearr_30634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto___30639);

return statearr_30634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(c__28620__auto___30639,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args30658 = [];
var len__7279__auto___30714 = arguments.length;
var i__7280__auto___30715 = (0);
while(true){
if((i__7280__auto___30715 < len__7279__auto___30714)){
args30658.push((arguments[i__7280__auto___30715]));

var G__30716 = (i__7280__auto___30715 + (1));
i__7280__auto___30715 = G__30716;
continue;
} else {
}
break;
}

var G__30660 = args30658.length;
switch (G__30660) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30658.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28620__auto___30718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28620__auto___30718,out){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (c__28620__auto___30718,out){
return (function (state_30690){
var state_val_30691 = (state_30690[(1)]);
if((state_val_30691 === (7))){
var inst_30669 = (state_30690[(7)]);
var inst_30670 = (state_30690[(8)]);
var inst_30669__$1 = (state_30690[(2)]);
var inst_30670__$1 = cljs.core.nth.call(null,inst_30669__$1,(0),null);
var inst_30671 = cljs.core.nth.call(null,inst_30669__$1,(1),null);
var inst_30672 = (inst_30670__$1 == null);
var state_30690__$1 = (function (){var statearr_30692 = state_30690;
(statearr_30692[(9)] = inst_30671);

(statearr_30692[(7)] = inst_30669__$1);

(statearr_30692[(8)] = inst_30670__$1);

return statearr_30692;
})();
if(cljs.core.truth_(inst_30672)){
var statearr_30693_30719 = state_30690__$1;
(statearr_30693_30719[(1)] = (8));

} else {
var statearr_30694_30720 = state_30690__$1;
(statearr_30694_30720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30691 === (1))){
var inst_30661 = cljs.core.vec.call(null,chs);
var inst_30662 = inst_30661;
var state_30690__$1 = (function (){var statearr_30695 = state_30690;
(statearr_30695[(10)] = inst_30662);

return statearr_30695;
})();
var statearr_30696_30721 = state_30690__$1;
(statearr_30696_30721[(2)] = null);

(statearr_30696_30721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30691 === (4))){
var inst_30662 = (state_30690[(10)]);
var state_30690__$1 = state_30690;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30690__$1,(7),inst_30662);
} else {
if((state_val_30691 === (6))){
var inst_30686 = (state_30690[(2)]);
var state_30690__$1 = state_30690;
var statearr_30697_30722 = state_30690__$1;
(statearr_30697_30722[(2)] = inst_30686);

(statearr_30697_30722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30691 === (3))){
var inst_30688 = (state_30690[(2)]);
var state_30690__$1 = state_30690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30690__$1,inst_30688);
} else {
if((state_val_30691 === (2))){
var inst_30662 = (state_30690[(10)]);
var inst_30664 = cljs.core.count.call(null,inst_30662);
var inst_30665 = (inst_30664 > (0));
var state_30690__$1 = state_30690;
if(cljs.core.truth_(inst_30665)){
var statearr_30699_30723 = state_30690__$1;
(statearr_30699_30723[(1)] = (4));

} else {
var statearr_30700_30724 = state_30690__$1;
(statearr_30700_30724[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30691 === (11))){
var inst_30662 = (state_30690[(10)]);
var inst_30679 = (state_30690[(2)]);
var tmp30698 = inst_30662;
var inst_30662__$1 = tmp30698;
var state_30690__$1 = (function (){var statearr_30701 = state_30690;
(statearr_30701[(10)] = inst_30662__$1);

(statearr_30701[(11)] = inst_30679);

return statearr_30701;
})();
var statearr_30702_30725 = state_30690__$1;
(statearr_30702_30725[(2)] = null);

(statearr_30702_30725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30691 === (9))){
var inst_30670 = (state_30690[(8)]);
var state_30690__$1 = state_30690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30690__$1,(11),out,inst_30670);
} else {
if((state_val_30691 === (5))){
var inst_30684 = cljs.core.async.close_BANG_.call(null,out);
var state_30690__$1 = state_30690;
var statearr_30703_30726 = state_30690__$1;
(statearr_30703_30726[(2)] = inst_30684);

(statearr_30703_30726[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30691 === (10))){
var inst_30682 = (state_30690[(2)]);
var state_30690__$1 = state_30690;
var statearr_30704_30727 = state_30690__$1;
(statearr_30704_30727[(2)] = inst_30682);

(statearr_30704_30727[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30691 === (8))){
var inst_30662 = (state_30690[(10)]);
var inst_30671 = (state_30690[(9)]);
var inst_30669 = (state_30690[(7)]);
var inst_30670 = (state_30690[(8)]);
var inst_30674 = (function (){var cs = inst_30662;
var vec__30667 = inst_30669;
var v = inst_30670;
var c = inst_30671;
return ((function (cs,vec__30667,v,c,inst_30662,inst_30671,inst_30669,inst_30670,state_val_30691,c__28620__auto___30718,out){
return (function (p1__30657_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30657_SHARP_);
});
;})(cs,vec__30667,v,c,inst_30662,inst_30671,inst_30669,inst_30670,state_val_30691,c__28620__auto___30718,out))
})();
var inst_30675 = cljs.core.filterv.call(null,inst_30674,inst_30662);
var inst_30662__$1 = inst_30675;
var state_30690__$1 = (function (){var statearr_30705 = state_30690;
(statearr_30705[(10)] = inst_30662__$1);

return statearr_30705;
})();
var statearr_30706_30728 = state_30690__$1;
(statearr_30706_30728[(2)] = null);

(statearr_30706_30728[(1)] = (2));


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
});})(c__28620__auto___30718,out))
;
return ((function (switch__28508__auto__,c__28620__auto___30718,out){
return (function() {
var cljs$core$async$state_machine__28509__auto__ = null;
var cljs$core$async$state_machine__28509__auto____0 = (function (){
var statearr_30710 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30710[(0)] = cljs$core$async$state_machine__28509__auto__);

(statearr_30710[(1)] = (1));

return statearr_30710;
});
var cljs$core$async$state_machine__28509__auto____1 = (function (state_30690){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_30690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e30711){if((e30711 instanceof Object)){
var ex__28512__auto__ = e30711;
var statearr_30712_30729 = state_30690;
(statearr_30712_30729[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30730 = state_30690;
state_30690 = G__30730;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
cljs$core$async$state_machine__28509__auto__ = function(state_30690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28509__auto____1.call(this,state_30690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28509__auto____0;
cljs$core$async$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28509__auto____1;
return cljs$core$async$state_machine__28509__auto__;
})()
;})(switch__28508__auto__,c__28620__auto___30718,out))
})();
var state__28622__auto__ = (function (){var statearr_30713 = f__28621__auto__.call(null);
(statearr_30713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto___30718);

return statearr_30713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(c__28620__auto___30718,out))
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
var args30731 = [];
var len__7279__auto___30780 = arguments.length;
var i__7280__auto___30781 = (0);
while(true){
if((i__7280__auto___30781 < len__7279__auto___30780)){
args30731.push((arguments[i__7280__auto___30781]));

var G__30782 = (i__7280__auto___30781 + (1));
i__7280__auto___30781 = G__30782;
continue;
} else {
}
break;
}

var G__30733 = args30731.length;
switch (G__30733) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30731.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28620__auto___30784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28620__auto___30784,out){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (c__28620__auto___30784,out){
return (function (state_30757){
var state_val_30758 = (state_30757[(1)]);
if((state_val_30758 === (7))){
var inst_30739 = (state_30757[(7)]);
var inst_30739__$1 = (state_30757[(2)]);
var inst_30740 = (inst_30739__$1 == null);
var inst_30741 = cljs.core.not.call(null,inst_30740);
var state_30757__$1 = (function (){var statearr_30759 = state_30757;
(statearr_30759[(7)] = inst_30739__$1);

return statearr_30759;
})();
if(inst_30741){
var statearr_30760_30785 = state_30757__$1;
(statearr_30760_30785[(1)] = (8));

} else {
var statearr_30761_30786 = state_30757__$1;
(statearr_30761_30786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (1))){
var inst_30734 = (0);
var state_30757__$1 = (function (){var statearr_30762 = state_30757;
(statearr_30762[(8)] = inst_30734);

return statearr_30762;
})();
var statearr_30763_30787 = state_30757__$1;
(statearr_30763_30787[(2)] = null);

(statearr_30763_30787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (4))){
var state_30757__$1 = state_30757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30757__$1,(7),ch);
} else {
if((state_val_30758 === (6))){
var inst_30752 = (state_30757[(2)]);
var state_30757__$1 = state_30757;
var statearr_30764_30788 = state_30757__$1;
(statearr_30764_30788[(2)] = inst_30752);

(statearr_30764_30788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (3))){
var inst_30754 = (state_30757[(2)]);
var inst_30755 = cljs.core.async.close_BANG_.call(null,out);
var state_30757__$1 = (function (){var statearr_30765 = state_30757;
(statearr_30765[(9)] = inst_30754);

return statearr_30765;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30757__$1,inst_30755);
} else {
if((state_val_30758 === (2))){
var inst_30734 = (state_30757[(8)]);
var inst_30736 = (inst_30734 < n);
var state_30757__$1 = state_30757;
if(cljs.core.truth_(inst_30736)){
var statearr_30766_30789 = state_30757__$1;
(statearr_30766_30789[(1)] = (4));

} else {
var statearr_30767_30790 = state_30757__$1;
(statearr_30767_30790[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (11))){
var inst_30734 = (state_30757[(8)]);
var inst_30744 = (state_30757[(2)]);
var inst_30745 = (inst_30734 + (1));
var inst_30734__$1 = inst_30745;
var state_30757__$1 = (function (){var statearr_30768 = state_30757;
(statearr_30768[(8)] = inst_30734__$1);

(statearr_30768[(10)] = inst_30744);

return statearr_30768;
})();
var statearr_30769_30791 = state_30757__$1;
(statearr_30769_30791[(2)] = null);

(statearr_30769_30791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (9))){
var state_30757__$1 = state_30757;
var statearr_30770_30792 = state_30757__$1;
(statearr_30770_30792[(2)] = null);

(statearr_30770_30792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (5))){
var state_30757__$1 = state_30757;
var statearr_30771_30793 = state_30757__$1;
(statearr_30771_30793[(2)] = null);

(statearr_30771_30793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (10))){
var inst_30749 = (state_30757[(2)]);
var state_30757__$1 = state_30757;
var statearr_30772_30794 = state_30757__$1;
(statearr_30772_30794[(2)] = inst_30749);

(statearr_30772_30794[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (8))){
var inst_30739 = (state_30757[(7)]);
var state_30757__$1 = state_30757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30757__$1,(11),out,inst_30739);
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
});})(c__28620__auto___30784,out))
;
return ((function (switch__28508__auto__,c__28620__auto___30784,out){
return (function() {
var cljs$core$async$state_machine__28509__auto__ = null;
var cljs$core$async$state_machine__28509__auto____0 = (function (){
var statearr_30776 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30776[(0)] = cljs$core$async$state_machine__28509__auto__);

(statearr_30776[(1)] = (1));

return statearr_30776;
});
var cljs$core$async$state_machine__28509__auto____1 = (function (state_30757){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_30757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e30777){if((e30777 instanceof Object)){
var ex__28512__auto__ = e30777;
var statearr_30778_30795 = state_30757;
(statearr_30778_30795[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30796 = state_30757;
state_30757 = G__30796;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
cljs$core$async$state_machine__28509__auto__ = function(state_30757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28509__auto____1.call(this,state_30757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28509__auto____0;
cljs$core$async$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28509__auto____1;
return cljs$core$async$state_machine__28509__auto__;
})()
;})(switch__28508__auto__,c__28620__auto___30784,out))
})();
var state__28622__auto__ = (function (){var statearr_30779 = f__28621__auto__.call(null);
(statearr_30779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto___30784);

return statearr_30779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(c__28620__auto___30784,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30804 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30804 = (function (map_LT_,f,ch,meta30805){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30805 = meta30805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30806,meta30805__$1){
var self__ = this;
var _30806__$1 = this;
return (new cljs.core.async.t_cljs$core$async30804(self__.map_LT_,self__.f,self__.ch,meta30805__$1));
});

cljs.core.async.t_cljs$core$async30804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30806){
var self__ = this;
var _30806__$1 = this;
return self__.meta30805;
});

cljs.core.async.t_cljs$core$async30804.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30804.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30804.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30804.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30804.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30807 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30807 = (function (map_LT_,f,ch,meta30805,_,fn1,meta30808){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30805 = meta30805;
this._ = _;
this.fn1 = fn1;
this.meta30808 = meta30808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30809,meta30808__$1){
var self__ = this;
var _30809__$1 = this;
return (new cljs.core.async.t_cljs$core$async30807(self__.map_LT_,self__.f,self__.ch,self__.meta30805,self__._,self__.fn1,meta30808__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30807.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30809){
var self__ = this;
var _30809__$1 = this;
return self__.meta30808;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30807.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30807.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30807.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30807.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30797_SHARP_){
return f1.call(null,(((p1__30797_SHARP_ == null))?null:self__.f.call(null,p1__30797_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30807.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30805","meta30805",1442163941,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30804","cljs.core.async/t_cljs$core$async30804",-1888826762,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30808","meta30808",-1920784749,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30807.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30807";

cljs.core.async.t_cljs$core$async30807.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async30807");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30807 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30807(map_LT___$1,f__$1,ch__$1,meta30805__$1,___$2,fn1__$1,meta30808){
return (new cljs.core.async.t_cljs$core$async30807(map_LT___$1,f__$1,ch__$1,meta30805__$1,___$2,fn1__$1,meta30808));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30807(self__.map_LT_,self__.f,self__.ch,self__.meta30805,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6198__auto__ = ret;
if(cljs.core.truth_(and__6198__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6198__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30804.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30804.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30805","meta30805",1442163941,null)], null);
});

cljs.core.async.t_cljs$core$async30804.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30804";

cljs.core.async.t_cljs$core$async30804.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async30804");
});

cljs.core.async.__GT_t_cljs$core$async30804 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30804(map_LT___$1,f__$1,ch__$1,meta30805){
return (new cljs.core.async.t_cljs$core$async30804(map_LT___$1,f__$1,ch__$1,meta30805));
});

}

return (new cljs.core.async.t_cljs$core$async30804(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30813 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30813 = (function (map_GT_,f,ch,meta30814){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30814 = meta30814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30815,meta30814__$1){
var self__ = this;
var _30815__$1 = this;
return (new cljs.core.async.t_cljs$core$async30813(self__.map_GT_,self__.f,self__.ch,meta30814__$1));
});

cljs.core.async.t_cljs$core$async30813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30815){
var self__ = this;
var _30815__$1 = this;
return self__.meta30814;
});

cljs.core.async.t_cljs$core$async30813.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30813.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30813.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30813.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30813.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30813.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30814","meta30814",-396998292,null)], null);
});

cljs.core.async.t_cljs$core$async30813.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30813";

cljs.core.async.t_cljs$core$async30813.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async30813");
});

cljs.core.async.__GT_t_cljs$core$async30813 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30813(map_GT___$1,f__$1,ch__$1,meta30814){
return (new cljs.core.async.t_cljs$core$async30813(map_GT___$1,f__$1,ch__$1,meta30814));
});

}

return (new cljs.core.async.t_cljs$core$async30813(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30819 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30819 = (function (filter_GT_,p,ch,meta30820){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30820 = meta30820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30821,meta30820__$1){
var self__ = this;
var _30821__$1 = this;
return (new cljs.core.async.t_cljs$core$async30819(self__.filter_GT_,self__.p,self__.ch,meta30820__$1));
});

cljs.core.async.t_cljs$core$async30819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30821){
var self__ = this;
var _30821__$1 = this;
return self__.meta30820;
});

cljs.core.async.t_cljs$core$async30819.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30819.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30819.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30819.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30819.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30819.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30819.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30820","meta30820",-686148521,null)], null);
});

cljs.core.async.t_cljs$core$async30819.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30819";

cljs.core.async.t_cljs$core$async30819.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async30819");
});

cljs.core.async.__GT_t_cljs$core$async30819 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30819(filter_GT___$1,p__$1,ch__$1,meta30820){
return (new cljs.core.async.t_cljs$core$async30819(filter_GT___$1,p__$1,ch__$1,meta30820));
});

}

return (new cljs.core.async.t_cljs$core$async30819(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args30822 = [];
var len__7279__auto___30866 = arguments.length;
var i__7280__auto___30867 = (0);
while(true){
if((i__7280__auto___30867 < len__7279__auto___30866)){
args30822.push((arguments[i__7280__auto___30867]));

var G__30868 = (i__7280__auto___30867 + (1));
i__7280__auto___30867 = G__30868;
continue;
} else {
}
break;
}

var G__30824 = args30822.length;
switch (G__30824) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30822.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28620__auto___30870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28620__auto___30870,out){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (c__28620__auto___30870,out){
return (function (state_30845){
var state_val_30846 = (state_30845[(1)]);
if((state_val_30846 === (7))){
var inst_30841 = (state_30845[(2)]);
var state_30845__$1 = state_30845;
var statearr_30847_30871 = state_30845__$1;
(statearr_30847_30871[(2)] = inst_30841);

(statearr_30847_30871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (1))){
var state_30845__$1 = state_30845;
var statearr_30848_30872 = state_30845__$1;
(statearr_30848_30872[(2)] = null);

(statearr_30848_30872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (4))){
var inst_30827 = (state_30845[(7)]);
var inst_30827__$1 = (state_30845[(2)]);
var inst_30828 = (inst_30827__$1 == null);
var state_30845__$1 = (function (){var statearr_30849 = state_30845;
(statearr_30849[(7)] = inst_30827__$1);

return statearr_30849;
})();
if(cljs.core.truth_(inst_30828)){
var statearr_30850_30873 = state_30845__$1;
(statearr_30850_30873[(1)] = (5));

} else {
var statearr_30851_30874 = state_30845__$1;
(statearr_30851_30874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (6))){
var inst_30827 = (state_30845[(7)]);
var inst_30832 = p.call(null,inst_30827);
var state_30845__$1 = state_30845;
if(cljs.core.truth_(inst_30832)){
var statearr_30852_30875 = state_30845__$1;
(statearr_30852_30875[(1)] = (8));

} else {
var statearr_30853_30876 = state_30845__$1;
(statearr_30853_30876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (3))){
var inst_30843 = (state_30845[(2)]);
var state_30845__$1 = state_30845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30845__$1,inst_30843);
} else {
if((state_val_30846 === (2))){
var state_30845__$1 = state_30845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30845__$1,(4),ch);
} else {
if((state_val_30846 === (11))){
var inst_30835 = (state_30845[(2)]);
var state_30845__$1 = state_30845;
var statearr_30854_30877 = state_30845__$1;
(statearr_30854_30877[(2)] = inst_30835);

(statearr_30854_30877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (9))){
var state_30845__$1 = state_30845;
var statearr_30855_30878 = state_30845__$1;
(statearr_30855_30878[(2)] = null);

(statearr_30855_30878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (5))){
var inst_30830 = cljs.core.async.close_BANG_.call(null,out);
var state_30845__$1 = state_30845;
var statearr_30856_30879 = state_30845__$1;
(statearr_30856_30879[(2)] = inst_30830);

(statearr_30856_30879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (10))){
var inst_30838 = (state_30845[(2)]);
var state_30845__$1 = (function (){var statearr_30857 = state_30845;
(statearr_30857[(8)] = inst_30838);

return statearr_30857;
})();
var statearr_30858_30880 = state_30845__$1;
(statearr_30858_30880[(2)] = null);

(statearr_30858_30880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (8))){
var inst_30827 = (state_30845[(7)]);
var state_30845__$1 = state_30845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30845__$1,(11),out,inst_30827);
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
});})(c__28620__auto___30870,out))
;
return ((function (switch__28508__auto__,c__28620__auto___30870,out){
return (function() {
var cljs$core$async$state_machine__28509__auto__ = null;
var cljs$core$async$state_machine__28509__auto____0 = (function (){
var statearr_30862 = [null,null,null,null,null,null,null,null,null];
(statearr_30862[(0)] = cljs$core$async$state_machine__28509__auto__);

(statearr_30862[(1)] = (1));

return statearr_30862;
});
var cljs$core$async$state_machine__28509__auto____1 = (function (state_30845){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_30845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e30863){if((e30863 instanceof Object)){
var ex__28512__auto__ = e30863;
var statearr_30864_30881 = state_30845;
(statearr_30864_30881[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30882 = state_30845;
state_30845 = G__30882;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
cljs$core$async$state_machine__28509__auto__ = function(state_30845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28509__auto____1.call(this,state_30845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28509__auto____0;
cljs$core$async$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28509__auto____1;
return cljs$core$async$state_machine__28509__auto__;
})()
;})(switch__28508__auto__,c__28620__auto___30870,out))
})();
var state__28622__auto__ = (function (){var statearr_30865 = f__28621__auto__.call(null);
(statearr_30865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto___30870);

return statearr_30865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(c__28620__auto___30870,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30883 = [];
var len__7279__auto___30886 = arguments.length;
var i__7280__auto___30887 = (0);
while(true){
if((i__7280__auto___30887 < len__7279__auto___30886)){
args30883.push((arguments[i__7280__auto___30887]));

var G__30888 = (i__7280__auto___30887 + (1));
i__7280__auto___30887 = G__30888;
continue;
} else {
}
break;
}

var G__30885 = args30883.length;
switch (G__30885) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30883.length)].join('')));

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
var c__28620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28620__auto__){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (c__28620__auto__){
return (function (state_31055){
var state_val_31056 = (state_31055[(1)]);
if((state_val_31056 === (7))){
var inst_31051 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
var statearr_31057_31098 = state_31055__$1;
(statearr_31057_31098[(2)] = inst_31051);

(statearr_31057_31098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (20))){
var inst_31021 = (state_31055[(7)]);
var inst_31032 = (state_31055[(2)]);
var inst_31033 = cljs.core.next.call(null,inst_31021);
var inst_31007 = inst_31033;
var inst_31008 = null;
var inst_31009 = (0);
var inst_31010 = (0);
var state_31055__$1 = (function (){var statearr_31058 = state_31055;
(statearr_31058[(8)] = inst_31010);

(statearr_31058[(9)] = inst_31007);

(statearr_31058[(10)] = inst_31032);

(statearr_31058[(11)] = inst_31008);

(statearr_31058[(12)] = inst_31009);

return statearr_31058;
})();
var statearr_31059_31099 = state_31055__$1;
(statearr_31059_31099[(2)] = null);

(statearr_31059_31099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (1))){
var state_31055__$1 = state_31055;
var statearr_31060_31100 = state_31055__$1;
(statearr_31060_31100[(2)] = null);

(statearr_31060_31100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (4))){
var inst_30996 = (state_31055[(13)]);
var inst_30996__$1 = (state_31055[(2)]);
var inst_30997 = (inst_30996__$1 == null);
var state_31055__$1 = (function (){var statearr_31061 = state_31055;
(statearr_31061[(13)] = inst_30996__$1);

return statearr_31061;
})();
if(cljs.core.truth_(inst_30997)){
var statearr_31062_31101 = state_31055__$1;
(statearr_31062_31101[(1)] = (5));

} else {
var statearr_31063_31102 = state_31055__$1;
(statearr_31063_31102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (15))){
var state_31055__$1 = state_31055;
var statearr_31067_31103 = state_31055__$1;
(statearr_31067_31103[(2)] = null);

(statearr_31067_31103[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (21))){
var state_31055__$1 = state_31055;
var statearr_31068_31104 = state_31055__$1;
(statearr_31068_31104[(2)] = null);

(statearr_31068_31104[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (13))){
var inst_31010 = (state_31055[(8)]);
var inst_31007 = (state_31055[(9)]);
var inst_31008 = (state_31055[(11)]);
var inst_31009 = (state_31055[(12)]);
var inst_31017 = (state_31055[(2)]);
var inst_31018 = (inst_31010 + (1));
var tmp31064 = inst_31007;
var tmp31065 = inst_31008;
var tmp31066 = inst_31009;
var inst_31007__$1 = tmp31064;
var inst_31008__$1 = tmp31065;
var inst_31009__$1 = tmp31066;
var inst_31010__$1 = inst_31018;
var state_31055__$1 = (function (){var statearr_31069 = state_31055;
(statearr_31069[(14)] = inst_31017);

(statearr_31069[(8)] = inst_31010__$1);

(statearr_31069[(9)] = inst_31007__$1);

(statearr_31069[(11)] = inst_31008__$1);

(statearr_31069[(12)] = inst_31009__$1);

return statearr_31069;
})();
var statearr_31070_31105 = state_31055__$1;
(statearr_31070_31105[(2)] = null);

(statearr_31070_31105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (22))){
var state_31055__$1 = state_31055;
var statearr_31071_31106 = state_31055__$1;
(statearr_31071_31106[(2)] = null);

(statearr_31071_31106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (6))){
var inst_30996 = (state_31055[(13)]);
var inst_31005 = f.call(null,inst_30996);
var inst_31006 = cljs.core.seq.call(null,inst_31005);
var inst_31007 = inst_31006;
var inst_31008 = null;
var inst_31009 = (0);
var inst_31010 = (0);
var state_31055__$1 = (function (){var statearr_31072 = state_31055;
(statearr_31072[(8)] = inst_31010);

(statearr_31072[(9)] = inst_31007);

(statearr_31072[(11)] = inst_31008);

(statearr_31072[(12)] = inst_31009);

return statearr_31072;
})();
var statearr_31073_31107 = state_31055__$1;
(statearr_31073_31107[(2)] = null);

(statearr_31073_31107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (17))){
var inst_31021 = (state_31055[(7)]);
var inst_31025 = cljs.core.chunk_first.call(null,inst_31021);
var inst_31026 = cljs.core.chunk_rest.call(null,inst_31021);
var inst_31027 = cljs.core.count.call(null,inst_31025);
var inst_31007 = inst_31026;
var inst_31008 = inst_31025;
var inst_31009 = inst_31027;
var inst_31010 = (0);
var state_31055__$1 = (function (){var statearr_31074 = state_31055;
(statearr_31074[(8)] = inst_31010);

(statearr_31074[(9)] = inst_31007);

(statearr_31074[(11)] = inst_31008);

(statearr_31074[(12)] = inst_31009);

return statearr_31074;
})();
var statearr_31075_31108 = state_31055__$1;
(statearr_31075_31108[(2)] = null);

(statearr_31075_31108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (3))){
var inst_31053 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31055__$1,inst_31053);
} else {
if((state_val_31056 === (12))){
var inst_31041 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
var statearr_31076_31109 = state_31055__$1;
(statearr_31076_31109[(2)] = inst_31041);

(statearr_31076_31109[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (2))){
var state_31055__$1 = state_31055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31055__$1,(4),in$);
} else {
if((state_val_31056 === (23))){
var inst_31049 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
var statearr_31077_31110 = state_31055__$1;
(statearr_31077_31110[(2)] = inst_31049);

(statearr_31077_31110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (19))){
var inst_31036 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
var statearr_31078_31111 = state_31055__$1;
(statearr_31078_31111[(2)] = inst_31036);

(statearr_31078_31111[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (11))){
var inst_31021 = (state_31055[(7)]);
var inst_31007 = (state_31055[(9)]);
var inst_31021__$1 = cljs.core.seq.call(null,inst_31007);
var state_31055__$1 = (function (){var statearr_31079 = state_31055;
(statearr_31079[(7)] = inst_31021__$1);

return statearr_31079;
})();
if(inst_31021__$1){
var statearr_31080_31112 = state_31055__$1;
(statearr_31080_31112[(1)] = (14));

} else {
var statearr_31081_31113 = state_31055__$1;
(statearr_31081_31113[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (9))){
var inst_31043 = (state_31055[(2)]);
var inst_31044 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31055__$1 = (function (){var statearr_31082 = state_31055;
(statearr_31082[(15)] = inst_31043);

return statearr_31082;
})();
if(cljs.core.truth_(inst_31044)){
var statearr_31083_31114 = state_31055__$1;
(statearr_31083_31114[(1)] = (21));

} else {
var statearr_31084_31115 = state_31055__$1;
(statearr_31084_31115[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (5))){
var inst_30999 = cljs.core.async.close_BANG_.call(null,out);
var state_31055__$1 = state_31055;
var statearr_31085_31116 = state_31055__$1;
(statearr_31085_31116[(2)] = inst_30999);

(statearr_31085_31116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (14))){
var inst_31021 = (state_31055[(7)]);
var inst_31023 = cljs.core.chunked_seq_QMARK_.call(null,inst_31021);
var state_31055__$1 = state_31055;
if(inst_31023){
var statearr_31086_31117 = state_31055__$1;
(statearr_31086_31117[(1)] = (17));

} else {
var statearr_31087_31118 = state_31055__$1;
(statearr_31087_31118[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (16))){
var inst_31039 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
var statearr_31088_31119 = state_31055__$1;
(statearr_31088_31119[(2)] = inst_31039);

(statearr_31088_31119[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (10))){
var inst_31010 = (state_31055[(8)]);
var inst_31008 = (state_31055[(11)]);
var inst_31015 = cljs.core._nth.call(null,inst_31008,inst_31010);
var state_31055__$1 = state_31055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31055__$1,(13),out,inst_31015);
} else {
if((state_val_31056 === (18))){
var inst_31021 = (state_31055[(7)]);
var inst_31030 = cljs.core.first.call(null,inst_31021);
var state_31055__$1 = state_31055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31055__$1,(20),out,inst_31030);
} else {
if((state_val_31056 === (8))){
var inst_31010 = (state_31055[(8)]);
var inst_31009 = (state_31055[(12)]);
var inst_31012 = (inst_31010 < inst_31009);
var inst_31013 = inst_31012;
var state_31055__$1 = state_31055;
if(cljs.core.truth_(inst_31013)){
var statearr_31089_31120 = state_31055__$1;
(statearr_31089_31120[(1)] = (10));

} else {
var statearr_31090_31121 = state_31055__$1;
(statearr_31090_31121[(1)] = (11));

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
});})(c__28620__auto__))
;
return ((function (switch__28508__auto__,c__28620__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28509__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28509__auto____0 = (function (){
var statearr_31094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31094[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28509__auto__);

(statearr_31094[(1)] = (1));

return statearr_31094;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28509__auto____1 = (function (state_31055){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_31055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e31095){if((e31095 instanceof Object)){
var ex__28512__auto__ = e31095;
var statearr_31096_31122 = state_31055;
(statearr_31096_31122[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31123 = state_31055;
state_31055 = G__31123;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28509__auto__ = function(state_31055){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28509__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28509__auto____1.call(this,state_31055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28509__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28509__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28509__auto__;
})()
;})(switch__28508__auto__,c__28620__auto__))
})();
var state__28622__auto__ = (function (){var statearr_31097 = f__28621__auto__.call(null);
(statearr_31097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto__);

return statearr_31097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(c__28620__auto__))
);

return c__28620__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31124 = [];
var len__7279__auto___31127 = arguments.length;
var i__7280__auto___31128 = (0);
while(true){
if((i__7280__auto___31128 < len__7279__auto___31127)){
args31124.push((arguments[i__7280__auto___31128]));

var G__31129 = (i__7280__auto___31128 + (1));
i__7280__auto___31128 = G__31129;
continue;
} else {
}
break;
}

var G__31126 = args31124.length;
switch (G__31126) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31124.length)].join('')));

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
var args31131 = [];
var len__7279__auto___31134 = arguments.length;
var i__7280__auto___31135 = (0);
while(true){
if((i__7280__auto___31135 < len__7279__auto___31134)){
args31131.push((arguments[i__7280__auto___31135]));

var G__31136 = (i__7280__auto___31135 + (1));
i__7280__auto___31135 = G__31136;
continue;
} else {
}
break;
}

var G__31133 = args31131.length;
switch (G__31133) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31131.length)].join('')));

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
var args31138 = [];
var len__7279__auto___31189 = arguments.length;
var i__7280__auto___31190 = (0);
while(true){
if((i__7280__auto___31190 < len__7279__auto___31189)){
args31138.push((arguments[i__7280__auto___31190]));

var G__31191 = (i__7280__auto___31190 + (1));
i__7280__auto___31190 = G__31191;
continue;
} else {
}
break;
}

var G__31140 = args31138.length;
switch (G__31140) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31138.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28620__auto___31193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28620__auto___31193,out){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (c__28620__auto___31193,out){
return (function (state_31164){
var state_val_31165 = (state_31164[(1)]);
if((state_val_31165 === (7))){
var inst_31159 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
var statearr_31166_31194 = state_31164__$1;
(statearr_31166_31194[(2)] = inst_31159);

(statearr_31166_31194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (1))){
var inst_31141 = null;
var state_31164__$1 = (function (){var statearr_31167 = state_31164;
(statearr_31167[(7)] = inst_31141);

return statearr_31167;
})();
var statearr_31168_31195 = state_31164__$1;
(statearr_31168_31195[(2)] = null);

(statearr_31168_31195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (4))){
var inst_31144 = (state_31164[(8)]);
var inst_31144__$1 = (state_31164[(2)]);
var inst_31145 = (inst_31144__$1 == null);
var inst_31146 = cljs.core.not.call(null,inst_31145);
var state_31164__$1 = (function (){var statearr_31169 = state_31164;
(statearr_31169[(8)] = inst_31144__$1);

return statearr_31169;
})();
if(inst_31146){
var statearr_31170_31196 = state_31164__$1;
(statearr_31170_31196[(1)] = (5));

} else {
var statearr_31171_31197 = state_31164__$1;
(statearr_31171_31197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (6))){
var state_31164__$1 = state_31164;
var statearr_31172_31198 = state_31164__$1;
(statearr_31172_31198[(2)] = null);

(statearr_31172_31198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (3))){
var inst_31161 = (state_31164[(2)]);
var inst_31162 = cljs.core.async.close_BANG_.call(null,out);
var state_31164__$1 = (function (){var statearr_31173 = state_31164;
(statearr_31173[(9)] = inst_31161);

return statearr_31173;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31164__$1,inst_31162);
} else {
if((state_val_31165 === (2))){
var state_31164__$1 = state_31164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31164__$1,(4),ch);
} else {
if((state_val_31165 === (11))){
var inst_31144 = (state_31164[(8)]);
var inst_31153 = (state_31164[(2)]);
var inst_31141 = inst_31144;
var state_31164__$1 = (function (){var statearr_31174 = state_31164;
(statearr_31174[(10)] = inst_31153);

(statearr_31174[(7)] = inst_31141);

return statearr_31174;
})();
var statearr_31175_31199 = state_31164__$1;
(statearr_31175_31199[(2)] = null);

(statearr_31175_31199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (9))){
var inst_31144 = (state_31164[(8)]);
var state_31164__$1 = state_31164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31164__$1,(11),out,inst_31144);
} else {
if((state_val_31165 === (5))){
var inst_31144 = (state_31164[(8)]);
var inst_31141 = (state_31164[(7)]);
var inst_31148 = cljs.core._EQ_.call(null,inst_31144,inst_31141);
var state_31164__$1 = state_31164;
if(inst_31148){
var statearr_31177_31200 = state_31164__$1;
(statearr_31177_31200[(1)] = (8));

} else {
var statearr_31178_31201 = state_31164__$1;
(statearr_31178_31201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (10))){
var inst_31156 = (state_31164[(2)]);
var state_31164__$1 = state_31164;
var statearr_31179_31202 = state_31164__$1;
(statearr_31179_31202[(2)] = inst_31156);

(statearr_31179_31202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31165 === (8))){
var inst_31141 = (state_31164[(7)]);
var tmp31176 = inst_31141;
var inst_31141__$1 = tmp31176;
var state_31164__$1 = (function (){var statearr_31180 = state_31164;
(statearr_31180[(7)] = inst_31141__$1);

return statearr_31180;
})();
var statearr_31181_31203 = state_31164__$1;
(statearr_31181_31203[(2)] = null);

(statearr_31181_31203[(1)] = (2));


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
});})(c__28620__auto___31193,out))
;
return ((function (switch__28508__auto__,c__28620__auto___31193,out){
return (function() {
var cljs$core$async$state_machine__28509__auto__ = null;
var cljs$core$async$state_machine__28509__auto____0 = (function (){
var statearr_31185 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31185[(0)] = cljs$core$async$state_machine__28509__auto__);

(statearr_31185[(1)] = (1));

return statearr_31185;
});
var cljs$core$async$state_machine__28509__auto____1 = (function (state_31164){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_31164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e31186){if((e31186 instanceof Object)){
var ex__28512__auto__ = e31186;
var statearr_31187_31204 = state_31164;
(statearr_31187_31204[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31205 = state_31164;
state_31164 = G__31205;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
cljs$core$async$state_machine__28509__auto__ = function(state_31164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28509__auto____1.call(this,state_31164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28509__auto____0;
cljs$core$async$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28509__auto____1;
return cljs$core$async$state_machine__28509__auto__;
})()
;})(switch__28508__auto__,c__28620__auto___31193,out))
})();
var state__28622__auto__ = (function (){var statearr_31188 = f__28621__auto__.call(null);
(statearr_31188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto___31193);

return statearr_31188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(c__28620__auto___31193,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31206 = [];
var len__7279__auto___31276 = arguments.length;
var i__7280__auto___31277 = (0);
while(true){
if((i__7280__auto___31277 < len__7279__auto___31276)){
args31206.push((arguments[i__7280__auto___31277]));

var G__31278 = (i__7280__auto___31277 + (1));
i__7280__auto___31277 = G__31278;
continue;
} else {
}
break;
}

var G__31208 = args31206.length;
switch (G__31208) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31206.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28620__auto___31280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28620__auto___31280,out){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (c__28620__auto___31280,out){
return (function (state_31246){
var state_val_31247 = (state_31246[(1)]);
if((state_val_31247 === (7))){
var inst_31242 = (state_31246[(2)]);
var state_31246__$1 = state_31246;
var statearr_31248_31281 = state_31246__$1;
(statearr_31248_31281[(2)] = inst_31242);

(statearr_31248_31281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (1))){
var inst_31209 = (new Array(n));
var inst_31210 = inst_31209;
var inst_31211 = (0);
var state_31246__$1 = (function (){var statearr_31249 = state_31246;
(statearr_31249[(7)] = inst_31211);

(statearr_31249[(8)] = inst_31210);

return statearr_31249;
})();
var statearr_31250_31282 = state_31246__$1;
(statearr_31250_31282[(2)] = null);

(statearr_31250_31282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (4))){
var inst_31214 = (state_31246[(9)]);
var inst_31214__$1 = (state_31246[(2)]);
var inst_31215 = (inst_31214__$1 == null);
var inst_31216 = cljs.core.not.call(null,inst_31215);
var state_31246__$1 = (function (){var statearr_31251 = state_31246;
(statearr_31251[(9)] = inst_31214__$1);

return statearr_31251;
})();
if(inst_31216){
var statearr_31252_31283 = state_31246__$1;
(statearr_31252_31283[(1)] = (5));

} else {
var statearr_31253_31284 = state_31246__$1;
(statearr_31253_31284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (15))){
var inst_31236 = (state_31246[(2)]);
var state_31246__$1 = state_31246;
var statearr_31254_31285 = state_31246__$1;
(statearr_31254_31285[(2)] = inst_31236);

(statearr_31254_31285[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (13))){
var state_31246__$1 = state_31246;
var statearr_31255_31286 = state_31246__$1;
(statearr_31255_31286[(2)] = null);

(statearr_31255_31286[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (6))){
var inst_31211 = (state_31246[(7)]);
var inst_31232 = (inst_31211 > (0));
var state_31246__$1 = state_31246;
if(cljs.core.truth_(inst_31232)){
var statearr_31256_31287 = state_31246__$1;
(statearr_31256_31287[(1)] = (12));

} else {
var statearr_31257_31288 = state_31246__$1;
(statearr_31257_31288[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (3))){
var inst_31244 = (state_31246[(2)]);
var state_31246__$1 = state_31246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31246__$1,inst_31244);
} else {
if((state_val_31247 === (12))){
var inst_31210 = (state_31246[(8)]);
var inst_31234 = cljs.core.vec.call(null,inst_31210);
var state_31246__$1 = state_31246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31246__$1,(15),out,inst_31234);
} else {
if((state_val_31247 === (2))){
var state_31246__$1 = state_31246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31246__$1,(4),ch);
} else {
if((state_val_31247 === (11))){
var inst_31226 = (state_31246[(2)]);
var inst_31227 = (new Array(n));
var inst_31210 = inst_31227;
var inst_31211 = (0);
var state_31246__$1 = (function (){var statearr_31258 = state_31246;
(statearr_31258[(7)] = inst_31211);

(statearr_31258[(8)] = inst_31210);

(statearr_31258[(10)] = inst_31226);

return statearr_31258;
})();
var statearr_31259_31289 = state_31246__$1;
(statearr_31259_31289[(2)] = null);

(statearr_31259_31289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (9))){
var inst_31210 = (state_31246[(8)]);
var inst_31224 = cljs.core.vec.call(null,inst_31210);
var state_31246__$1 = state_31246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31246__$1,(11),out,inst_31224);
} else {
if((state_val_31247 === (5))){
var inst_31214 = (state_31246[(9)]);
var inst_31211 = (state_31246[(7)]);
var inst_31219 = (state_31246[(11)]);
var inst_31210 = (state_31246[(8)]);
var inst_31218 = (inst_31210[inst_31211] = inst_31214);
var inst_31219__$1 = (inst_31211 + (1));
var inst_31220 = (inst_31219__$1 < n);
var state_31246__$1 = (function (){var statearr_31260 = state_31246;
(statearr_31260[(11)] = inst_31219__$1);

(statearr_31260[(12)] = inst_31218);

return statearr_31260;
})();
if(cljs.core.truth_(inst_31220)){
var statearr_31261_31290 = state_31246__$1;
(statearr_31261_31290[(1)] = (8));

} else {
var statearr_31262_31291 = state_31246__$1;
(statearr_31262_31291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (14))){
var inst_31239 = (state_31246[(2)]);
var inst_31240 = cljs.core.async.close_BANG_.call(null,out);
var state_31246__$1 = (function (){var statearr_31264 = state_31246;
(statearr_31264[(13)] = inst_31239);

return statearr_31264;
})();
var statearr_31265_31292 = state_31246__$1;
(statearr_31265_31292[(2)] = inst_31240);

(statearr_31265_31292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (10))){
var inst_31230 = (state_31246[(2)]);
var state_31246__$1 = state_31246;
var statearr_31266_31293 = state_31246__$1;
(statearr_31266_31293[(2)] = inst_31230);

(statearr_31266_31293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (8))){
var inst_31219 = (state_31246[(11)]);
var inst_31210 = (state_31246[(8)]);
var tmp31263 = inst_31210;
var inst_31210__$1 = tmp31263;
var inst_31211 = inst_31219;
var state_31246__$1 = (function (){var statearr_31267 = state_31246;
(statearr_31267[(7)] = inst_31211);

(statearr_31267[(8)] = inst_31210__$1);

return statearr_31267;
})();
var statearr_31268_31294 = state_31246__$1;
(statearr_31268_31294[(2)] = null);

(statearr_31268_31294[(1)] = (2));


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
});})(c__28620__auto___31280,out))
;
return ((function (switch__28508__auto__,c__28620__auto___31280,out){
return (function() {
var cljs$core$async$state_machine__28509__auto__ = null;
var cljs$core$async$state_machine__28509__auto____0 = (function (){
var statearr_31272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31272[(0)] = cljs$core$async$state_machine__28509__auto__);

(statearr_31272[(1)] = (1));

return statearr_31272;
});
var cljs$core$async$state_machine__28509__auto____1 = (function (state_31246){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_31246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e31273){if((e31273 instanceof Object)){
var ex__28512__auto__ = e31273;
var statearr_31274_31295 = state_31246;
(statearr_31274_31295[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31296 = state_31246;
state_31246 = G__31296;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
cljs$core$async$state_machine__28509__auto__ = function(state_31246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28509__auto____1.call(this,state_31246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28509__auto____0;
cljs$core$async$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28509__auto____1;
return cljs$core$async$state_machine__28509__auto__;
})()
;})(switch__28508__auto__,c__28620__auto___31280,out))
})();
var state__28622__auto__ = (function (){var statearr_31275 = f__28621__auto__.call(null);
(statearr_31275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto___31280);

return statearr_31275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(c__28620__auto___31280,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31297 = [];
var len__7279__auto___31371 = arguments.length;
var i__7280__auto___31372 = (0);
while(true){
if((i__7280__auto___31372 < len__7279__auto___31371)){
args31297.push((arguments[i__7280__auto___31372]));

var G__31373 = (i__7280__auto___31372 + (1));
i__7280__auto___31372 = G__31373;
continue;
} else {
}
break;
}

var G__31299 = args31297.length;
switch (G__31299) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31297.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28620__auto___31375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28620__auto___31375,out){
return (function (){
var f__28621__auto__ = (function (){var switch__28508__auto__ = ((function (c__28620__auto___31375,out){
return (function (state_31341){
var state_val_31342 = (state_31341[(1)]);
if((state_val_31342 === (7))){
var inst_31337 = (state_31341[(2)]);
var state_31341__$1 = state_31341;
var statearr_31343_31376 = state_31341__$1;
(statearr_31343_31376[(2)] = inst_31337);

(statearr_31343_31376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (1))){
var inst_31300 = [];
var inst_31301 = inst_31300;
var inst_31302 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31341__$1 = (function (){var statearr_31344 = state_31341;
(statearr_31344[(7)] = inst_31302);

(statearr_31344[(8)] = inst_31301);

return statearr_31344;
})();
var statearr_31345_31377 = state_31341__$1;
(statearr_31345_31377[(2)] = null);

(statearr_31345_31377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (4))){
var inst_31305 = (state_31341[(9)]);
var inst_31305__$1 = (state_31341[(2)]);
var inst_31306 = (inst_31305__$1 == null);
var inst_31307 = cljs.core.not.call(null,inst_31306);
var state_31341__$1 = (function (){var statearr_31346 = state_31341;
(statearr_31346[(9)] = inst_31305__$1);

return statearr_31346;
})();
if(inst_31307){
var statearr_31347_31378 = state_31341__$1;
(statearr_31347_31378[(1)] = (5));

} else {
var statearr_31348_31379 = state_31341__$1;
(statearr_31348_31379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (15))){
var inst_31331 = (state_31341[(2)]);
var state_31341__$1 = state_31341;
var statearr_31349_31380 = state_31341__$1;
(statearr_31349_31380[(2)] = inst_31331);

(statearr_31349_31380[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (13))){
var state_31341__$1 = state_31341;
var statearr_31350_31381 = state_31341__$1;
(statearr_31350_31381[(2)] = null);

(statearr_31350_31381[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (6))){
var inst_31301 = (state_31341[(8)]);
var inst_31326 = inst_31301.length;
var inst_31327 = (inst_31326 > (0));
var state_31341__$1 = state_31341;
if(cljs.core.truth_(inst_31327)){
var statearr_31351_31382 = state_31341__$1;
(statearr_31351_31382[(1)] = (12));

} else {
var statearr_31352_31383 = state_31341__$1;
(statearr_31352_31383[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (3))){
var inst_31339 = (state_31341[(2)]);
var state_31341__$1 = state_31341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31341__$1,inst_31339);
} else {
if((state_val_31342 === (12))){
var inst_31301 = (state_31341[(8)]);
var inst_31329 = cljs.core.vec.call(null,inst_31301);
var state_31341__$1 = state_31341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31341__$1,(15),out,inst_31329);
} else {
if((state_val_31342 === (2))){
var state_31341__$1 = state_31341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31341__$1,(4),ch);
} else {
if((state_val_31342 === (11))){
var inst_31309 = (state_31341[(10)]);
var inst_31305 = (state_31341[(9)]);
var inst_31319 = (state_31341[(2)]);
var inst_31320 = [];
var inst_31321 = inst_31320.push(inst_31305);
var inst_31301 = inst_31320;
var inst_31302 = inst_31309;
var state_31341__$1 = (function (){var statearr_31353 = state_31341;
(statearr_31353[(7)] = inst_31302);

(statearr_31353[(8)] = inst_31301);

(statearr_31353[(11)] = inst_31319);

(statearr_31353[(12)] = inst_31321);

return statearr_31353;
})();
var statearr_31354_31384 = state_31341__$1;
(statearr_31354_31384[(2)] = null);

(statearr_31354_31384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (9))){
var inst_31301 = (state_31341[(8)]);
var inst_31317 = cljs.core.vec.call(null,inst_31301);
var state_31341__$1 = state_31341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31341__$1,(11),out,inst_31317);
} else {
if((state_val_31342 === (5))){
var inst_31302 = (state_31341[(7)]);
var inst_31309 = (state_31341[(10)]);
var inst_31305 = (state_31341[(9)]);
var inst_31309__$1 = f.call(null,inst_31305);
var inst_31310 = cljs.core._EQ_.call(null,inst_31309__$1,inst_31302);
var inst_31311 = cljs.core.keyword_identical_QMARK_.call(null,inst_31302,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31312 = (inst_31310) || (inst_31311);
var state_31341__$1 = (function (){var statearr_31355 = state_31341;
(statearr_31355[(10)] = inst_31309__$1);

return statearr_31355;
})();
if(cljs.core.truth_(inst_31312)){
var statearr_31356_31385 = state_31341__$1;
(statearr_31356_31385[(1)] = (8));

} else {
var statearr_31357_31386 = state_31341__$1;
(statearr_31357_31386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (14))){
var inst_31334 = (state_31341[(2)]);
var inst_31335 = cljs.core.async.close_BANG_.call(null,out);
var state_31341__$1 = (function (){var statearr_31359 = state_31341;
(statearr_31359[(13)] = inst_31334);

return statearr_31359;
})();
var statearr_31360_31387 = state_31341__$1;
(statearr_31360_31387[(2)] = inst_31335);

(statearr_31360_31387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (10))){
var inst_31324 = (state_31341[(2)]);
var state_31341__$1 = state_31341;
var statearr_31361_31388 = state_31341__$1;
(statearr_31361_31388[(2)] = inst_31324);

(statearr_31361_31388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (8))){
var inst_31309 = (state_31341[(10)]);
var inst_31301 = (state_31341[(8)]);
var inst_31305 = (state_31341[(9)]);
var inst_31314 = inst_31301.push(inst_31305);
var tmp31358 = inst_31301;
var inst_31301__$1 = tmp31358;
var inst_31302 = inst_31309;
var state_31341__$1 = (function (){var statearr_31362 = state_31341;
(statearr_31362[(7)] = inst_31302);

(statearr_31362[(8)] = inst_31301__$1);

(statearr_31362[(14)] = inst_31314);

return statearr_31362;
})();
var statearr_31363_31389 = state_31341__$1;
(statearr_31363_31389[(2)] = null);

(statearr_31363_31389[(1)] = (2));


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
});})(c__28620__auto___31375,out))
;
return ((function (switch__28508__auto__,c__28620__auto___31375,out){
return (function() {
var cljs$core$async$state_machine__28509__auto__ = null;
var cljs$core$async$state_machine__28509__auto____0 = (function (){
var statearr_31367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31367[(0)] = cljs$core$async$state_machine__28509__auto__);

(statearr_31367[(1)] = (1));

return statearr_31367;
});
var cljs$core$async$state_machine__28509__auto____1 = (function (state_31341){
while(true){
var ret_value__28510__auto__ = (function (){try{while(true){
var result__28511__auto__ = switch__28508__auto__.call(null,state_31341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28511__auto__;
}
break;
}
}catch (e31368){if((e31368 instanceof Object)){
var ex__28512__auto__ = e31368;
var statearr_31369_31390 = state_31341;
(statearr_31369_31390[(5)] = ex__28512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31391 = state_31341;
state_31341 = G__31391;
continue;
} else {
return ret_value__28510__auto__;
}
break;
}
});
cljs$core$async$state_machine__28509__auto__ = function(state_31341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28509__auto____1.call(this,state_31341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28509__auto____0;
cljs$core$async$state_machine__28509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28509__auto____1;
return cljs$core$async$state_machine__28509__auto__;
})()
;})(switch__28508__auto__,c__28620__auto___31375,out))
})();
var state__28622__auto__ = (function (){var statearr_31370 = f__28621__auto__.call(null);
(statearr_31370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28620__auto___31375);

return statearr_31370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28622__auto__);
});})(c__28620__auto___31375,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

// Compiled by ClojureScript 1.8.34 {}
goog.provide('pirates.client.logging');
goog.require('cljs.core');
pirates.client.logging.debug = (function pirates$client$logging$debug(var_args){
var args__19514__auto__ = [];
var len__19507__auto___42683 = arguments.length;
var i__19508__auto___42684 = (0);
while(true){
if((i__19508__auto___42684 < len__19507__auto___42683)){
args__19514__auto__.push((arguments[i__19508__auto___42684]));

var G__42685 = (i__19508__auto___42684 + (1));
i__19508__auto___42684 = G__42685;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((0) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((0)),(0),null)):null);
return pirates.client.logging.debug.cljs$core$IFn$_invoke$arity$variadic(argseq__19515__auto__);
});

pirates.client.logging.debug.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.prn.call(null,args);
});

pirates.client.logging.debug.cljs$lang$maxFixedArity = (0);

pirates.client.logging.debug.cljs$lang$applyTo = (function (seq42682){
return pirates.client.logging.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42682));
});

//# sourceMappingURL=logging.js.map?rel=1458781550694
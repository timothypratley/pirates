// Compiled by ClojureScript 1.8.34 {}
goog.provide('pirates.client.logging');
goog.require('cljs.core');
pirates.client.logging.debug = (function pirates$client$logging$debug(var_args){
var args__7286__auto__ = [];
var len__7279__auto___37183 = arguments.length;
var i__7280__auto___37184 = (0);
while(true){
if((i__7280__auto___37184 < len__7279__auto___37183)){
args__7286__auto__.push((arguments[i__7280__auto___37184]));

var G__37185 = (i__7280__auto___37184 + (1));
i__7280__auto___37184 = G__37185;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((0) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((0)),(0),null)):null);
return pirates.client.logging.debug.cljs$core$IFn$_invoke$arity$variadic(argseq__7287__auto__);
});

pirates.client.logging.debug.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.prn.call(null,args);
});

pirates.client.logging.debug.cljs$lang$maxFixedArity = (0);

pirates.client.logging.debug.cljs$lang$applyTo = (function (seq37182){
return pirates.client.logging.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37182));
});

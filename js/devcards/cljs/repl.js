// Compiled by ClojureScript 1.8.34 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44085_44099 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44086_44100 = null;
var count__44087_44101 = (0);
var i__44088_44102 = (0);
while(true){
if((i__44088_44102 < count__44087_44101)){
var f_44103 = cljs.core._nth.call(null,chunk__44086_44100,i__44088_44102);
cljs.core.println.call(null,"  ",f_44103);

var G__44104 = seq__44085_44099;
var G__44105 = chunk__44086_44100;
var G__44106 = count__44087_44101;
var G__44107 = (i__44088_44102 + (1));
seq__44085_44099 = G__44104;
chunk__44086_44100 = G__44105;
count__44087_44101 = G__44106;
i__44088_44102 = G__44107;
continue;
} else {
var temp__4657__auto___44108 = cljs.core.seq.call(null,seq__44085_44099);
if(temp__4657__auto___44108){
var seq__44085_44109__$1 = temp__4657__auto___44108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44085_44109__$1)){
var c__19249__auto___44110 = cljs.core.chunk_first.call(null,seq__44085_44109__$1);
var G__44111 = cljs.core.chunk_rest.call(null,seq__44085_44109__$1);
var G__44112 = c__19249__auto___44110;
var G__44113 = cljs.core.count.call(null,c__19249__auto___44110);
var G__44114 = (0);
seq__44085_44099 = G__44111;
chunk__44086_44100 = G__44112;
count__44087_44101 = G__44113;
i__44088_44102 = G__44114;
continue;
} else {
var f_44115 = cljs.core.first.call(null,seq__44085_44109__$1);
cljs.core.println.call(null,"  ",f_44115);

var G__44116 = cljs.core.next.call(null,seq__44085_44109__$1);
var G__44117 = null;
var G__44118 = (0);
var G__44119 = (0);
seq__44085_44099 = G__44116;
chunk__44086_44100 = G__44117;
count__44087_44101 = G__44118;
i__44088_44102 = G__44119;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_44120 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18438__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_44120);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_44120)))?cljs.core.second.call(null,arglists_44120):arglists_44120));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44089 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44090 = null;
var count__44091 = (0);
var i__44092 = (0);
while(true){
if((i__44092 < count__44091)){
var vec__44093 = cljs.core._nth.call(null,chunk__44090,i__44092);
var name = cljs.core.nth.call(null,vec__44093,(0),null);
var map__44094 = cljs.core.nth.call(null,vec__44093,(1),null);
var map__44094__$1 = ((((!((map__44094 == null)))?((((map__44094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44094):map__44094);
var doc = cljs.core.get.call(null,map__44094__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__44094__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__44121 = seq__44089;
var G__44122 = chunk__44090;
var G__44123 = count__44091;
var G__44124 = (i__44092 + (1));
seq__44089 = G__44121;
chunk__44090 = G__44122;
count__44091 = G__44123;
i__44092 = G__44124;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44089);
if(temp__4657__auto__){
var seq__44089__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44089__$1)){
var c__19249__auto__ = cljs.core.chunk_first.call(null,seq__44089__$1);
var G__44125 = cljs.core.chunk_rest.call(null,seq__44089__$1);
var G__44126 = c__19249__auto__;
var G__44127 = cljs.core.count.call(null,c__19249__auto__);
var G__44128 = (0);
seq__44089 = G__44125;
chunk__44090 = G__44126;
count__44091 = G__44127;
i__44092 = G__44128;
continue;
} else {
var vec__44096 = cljs.core.first.call(null,seq__44089__$1);
var name = cljs.core.nth.call(null,vec__44096,(0),null);
var map__44097 = cljs.core.nth.call(null,vec__44096,(1),null);
var map__44097__$1 = ((((!((map__44097 == null)))?((((map__44097.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44097.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44097):map__44097);
var doc = cljs.core.get.call(null,map__44097__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__44097__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__44129 = cljs.core.next.call(null,seq__44089__$1);
var G__44130 = null;
var G__44131 = (0);
var G__44132 = (0);
seq__44089 = G__44129;
chunk__44090 = G__44130;
count__44091 = G__44131;
i__44092 = G__44132;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1458781552058
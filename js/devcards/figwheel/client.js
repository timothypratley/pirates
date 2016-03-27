// Compiled by ClojureScript 1.8.34 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__44389 = cljs.core._EQ_;
var expr__44390 = (function (){var or__18438__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e44393){if((e44393 instanceof Error)){
var e = e44393;
return false;
} else {
throw e44393;

}
}})();
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__44389.call(null,"true",expr__44390))){
return true;
} else {
if(cljs.core.truth_(pred__44389.call(null,"false",expr__44390))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__44390)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e44395){if((e44395 instanceof Error)){
var e = e44395;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e44395;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19514__auto__ = [];
var len__19507__auto___44397 = arguments.length;
var i__19508__auto___44398 = (0);
while(true){
if((i__19508__auto___44398 < len__19507__auto___44397)){
args__19514__auto__.push((arguments[i__19508__auto___44398]));

var G__44399 = (i__19508__auto___44398 + (1));
i__19508__auto___44398 = G__44399;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((0) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19515__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq44396){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44396));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__44400){
var map__44403 = p__44400;
var map__44403__$1 = ((((!((map__44403 == null)))?((((map__44403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44403):map__44403);
var message = cljs.core.get.call(null,map__44403__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__44403__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18438__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18426__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18426__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18426__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21993__auto___44565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto___44565,ch){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto___44565,ch){
return (function (state_44534){
var state_val_44535 = (state_44534[(1)]);
if((state_val_44535 === (7))){
var inst_44530 = (state_44534[(2)]);
var state_44534__$1 = state_44534;
var statearr_44536_44566 = state_44534__$1;
(statearr_44536_44566[(2)] = inst_44530);

(statearr_44536_44566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44535 === (1))){
var state_44534__$1 = state_44534;
var statearr_44537_44567 = state_44534__$1;
(statearr_44537_44567[(2)] = null);

(statearr_44537_44567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44535 === (4))){
var inst_44487 = (state_44534[(7)]);
var inst_44487__$1 = (state_44534[(2)]);
var state_44534__$1 = (function (){var statearr_44538 = state_44534;
(statearr_44538[(7)] = inst_44487__$1);

return statearr_44538;
})();
if(cljs.core.truth_(inst_44487__$1)){
var statearr_44539_44568 = state_44534__$1;
(statearr_44539_44568[(1)] = (5));

} else {
var statearr_44540_44569 = state_44534__$1;
(statearr_44540_44569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44535 === (15))){
var inst_44494 = (state_44534[(8)]);
var inst_44509 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_44494);
var inst_44510 = cljs.core.first.call(null,inst_44509);
var inst_44511 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_44510);
var inst_44512 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_44511)].join('');
var inst_44513 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_44512);
var state_44534__$1 = state_44534;
var statearr_44541_44570 = state_44534__$1;
(statearr_44541_44570[(2)] = inst_44513);

(statearr_44541_44570[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44535 === (13))){
var inst_44518 = (state_44534[(2)]);
var state_44534__$1 = state_44534;
var statearr_44542_44571 = state_44534__$1;
(statearr_44542_44571[(2)] = inst_44518);

(statearr_44542_44571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44535 === (6))){
var state_44534__$1 = state_44534;
var statearr_44543_44572 = state_44534__$1;
(statearr_44543_44572[(2)] = null);

(statearr_44543_44572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44535 === (17))){
var inst_44516 = (state_44534[(2)]);
var state_44534__$1 = state_44534;
var statearr_44544_44573 = state_44534__$1;
(statearr_44544_44573[(2)] = inst_44516);

(statearr_44544_44573[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44535 === (3))){
var inst_44532 = (state_44534[(2)]);
var state_44534__$1 = state_44534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44534__$1,inst_44532);
} else {
if((state_val_44535 === (12))){
var inst_44493 = (state_44534[(9)]);
var inst_44507 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_44493,opts);
var state_44534__$1 = state_44534;
if(cljs.core.truth_(inst_44507)){
var statearr_44545_44574 = state_44534__$1;
(statearr_44545_44574[(1)] = (15));

} else {
var statearr_44546_44575 = state_44534__$1;
(statearr_44546_44575[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44535 === (2))){
var state_44534__$1 = state_44534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44534__$1,(4),ch);
} else {
if((state_val_44535 === (11))){
var inst_44494 = (state_44534[(8)]);
var inst_44499 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44500 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_44494);
var inst_44501 = cljs.core.async.timeout.call(null,(1000));
var inst_44502 = [inst_44500,inst_44501];
var inst_44503 = (new cljs.core.PersistentVector(null,2,(5),inst_44499,inst_44502,null));
var state_44534__$1 = state_44534;
return cljs.core.async.ioc_alts_BANG_.call(null,state_44534__$1,(14),inst_44503);
} else {
if((state_val_44535 === (9))){
var inst_44494 = (state_44534[(8)]);
var inst_44520 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_44521 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_44494);
var inst_44522 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44521);
var inst_44523 = [cljs.core.str("Not loading: "),cljs.core.str(inst_44522)].join('');
var inst_44524 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_44523);
var state_44534__$1 = (function (){var statearr_44547 = state_44534;
(statearr_44547[(10)] = inst_44520);

return statearr_44547;
})();
var statearr_44548_44576 = state_44534__$1;
(statearr_44548_44576[(2)] = inst_44524);

(statearr_44548_44576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44535 === (5))){
var inst_44487 = (state_44534[(7)]);
var inst_44489 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_44490 = (new cljs.core.PersistentArrayMap(null,2,inst_44489,null));
var inst_44491 = (new cljs.core.PersistentHashSet(null,inst_44490,null));
var inst_44492 = figwheel.client.focus_msgs.call(null,inst_44491,inst_44487);
var inst_44493 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_44492);
var inst_44494 = cljs.core.first.call(null,inst_44492);
var inst_44495 = figwheel.client.autoload_QMARK_.call(null);
var state_44534__$1 = (function (){var statearr_44549 = state_44534;
(statearr_44549[(8)] = inst_44494);

(statearr_44549[(9)] = inst_44493);

return statearr_44549;
})();
if(cljs.core.truth_(inst_44495)){
var statearr_44550_44577 = state_44534__$1;
(statearr_44550_44577[(1)] = (8));

} else {
var statearr_44551_44578 = state_44534__$1;
(statearr_44551_44578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44535 === (14))){
var inst_44505 = (state_44534[(2)]);
var state_44534__$1 = state_44534;
var statearr_44552_44579 = state_44534__$1;
(statearr_44552_44579[(2)] = inst_44505);

(statearr_44552_44579[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44535 === (16))){
var state_44534__$1 = state_44534;
var statearr_44553_44580 = state_44534__$1;
(statearr_44553_44580[(2)] = null);

(statearr_44553_44580[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44535 === (10))){
var inst_44526 = (state_44534[(2)]);
var state_44534__$1 = (function (){var statearr_44554 = state_44534;
(statearr_44554[(11)] = inst_44526);

return statearr_44554;
})();
var statearr_44555_44581 = state_44534__$1;
(statearr_44555_44581[(2)] = null);

(statearr_44555_44581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44535 === (8))){
var inst_44493 = (state_44534[(9)]);
var inst_44497 = figwheel.client.reload_file_state_QMARK_.call(null,inst_44493,opts);
var state_44534__$1 = state_44534;
if(cljs.core.truth_(inst_44497)){
var statearr_44556_44582 = state_44534__$1;
(statearr_44556_44582[(1)] = (11));

} else {
var statearr_44557_44583 = state_44534__$1;
(statearr_44557_44583[(1)] = (12));

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
});})(c__21993__auto___44565,ch))
;
return ((function (switch__21881__auto__,c__21993__auto___44565,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21882__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21882__auto____0 = (function (){
var statearr_44561 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44561[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21882__auto__);

(statearr_44561[(1)] = (1));

return statearr_44561;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21882__auto____1 = (function (state_44534){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_44534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e44562){if((e44562 instanceof Object)){
var ex__21885__auto__ = e44562;
var statearr_44563_44584 = state_44534;
(statearr_44563_44584[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44585 = state_44534;
state_44534 = G__44585;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21882__auto__ = function(state_44534){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21882__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21882__auto____1.call(this,state_44534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21882__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21882__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto___44565,ch))
})();
var state__21995__auto__ = (function (){var statearr_44564 = f__21994__auto__.call(null);
(statearr_44564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto___44565);

return statearr_44564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto___44565,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__44586_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__44586_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_44593 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_44593){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_44591 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_44592 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_44592;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_44591;
}}catch (e44590){if((e44590 instanceof Error)){
var e = e44590;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_44593], null));
} else {
var e = e44590;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_44593))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__44594){
var map__44601 = p__44594;
var map__44601__$1 = ((((!((map__44601 == null)))?((((map__44601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44601):map__44601);
var opts = map__44601__$1;
var build_id = cljs.core.get.call(null,map__44601__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__44601,map__44601__$1,opts,build_id){
return (function (p__44603){
var vec__44604 = p__44603;
var map__44605 = cljs.core.nth.call(null,vec__44604,(0),null);
var map__44605__$1 = ((((!((map__44605 == null)))?((((map__44605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44605):map__44605);
var msg = map__44605__$1;
var msg_name = cljs.core.get.call(null,map__44605__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__44604,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__44604,map__44605,map__44605__$1,msg,msg_name,_,map__44601,map__44601__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__44604,map__44605,map__44605__$1,msg,msg_name,_,map__44601,map__44601__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__44601,map__44601__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__44611){
var vec__44612 = p__44611;
var map__44613 = cljs.core.nth.call(null,vec__44612,(0),null);
var map__44613__$1 = ((((!((map__44613 == null)))?((((map__44613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44613):map__44613);
var msg = map__44613__$1;
var msg_name = cljs.core.get.call(null,map__44613__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__44612,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__44615){
var map__44625 = p__44615;
var map__44625__$1 = ((((!((map__44625 == null)))?((((map__44625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44625):map__44625);
var on_compile_warning = cljs.core.get.call(null,map__44625__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__44625__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__44625,map__44625__$1,on_compile_warning,on_compile_fail){
return (function (p__44627){
var vec__44628 = p__44627;
var map__44629 = cljs.core.nth.call(null,vec__44628,(0),null);
var map__44629__$1 = ((((!((map__44629 == null)))?((((map__44629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44629):map__44629);
var msg = map__44629__$1;
var msg_name = cljs.core.get.call(null,map__44629__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__44628,(1));
var pred__44631 = cljs.core._EQ_;
var expr__44632 = msg_name;
if(cljs.core.truth_(pred__44631.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__44632))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__44631.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__44632))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__44625,map__44625__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto__,msg_hist,msg_names,msg){
return (function (state_44848){
var state_val_44849 = (state_44848[(1)]);
if((state_val_44849 === (7))){
var inst_44772 = (state_44848[(2)]);
var state_44848__$1 = state_44848;
if(cljs.core.truth_(inst_44772)){
var statearr_44850_44896 = state_44848__$1;
(statearr_44850_44896[(1)] = (8));

} else {
var statearr_44851_44897 = state_44848__$1;
(statearr_44851_44897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (20))){
var inst_44842 = (state_44848[(2)]);
var state_44848__$1 = state_44848;
var statearr_44852_44898 = state_44848__$1;
(statearr_44852_44898[(2)] = inst_44842);

(statearr_44852_44898[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (27))){
var inst_44838 = (state_44848[(2)]);
var state_44848__$1 = state_44848;
var statearr_44853_44899 = state_44848__$1;
(statearr_44853_44899[(2)] = inst_44838);

(statearr_44853_44899[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (1))){
var inst_44765 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_44848__$1 = state_44848;
if(cljs.core.truth_(inst_44765)){
var statearr_44854_44900 = state_44848__$1;
(statearr_44854_44900[(1)] = (2));

} else {
var statearr_44855_44901 = state_44848__$1;
(statearr_44855_44901[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (24))){
var inst_44840 = (state_44848[(2)]);
var state_44848__$1 = state_44848;
var statearr_44856_44902 = state_44848__$1;
(statearr_44856_44902[(2)] = inst_44840);

(statearr_44856_44902[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (4))){
var inst_44846 = (state_44848[(2)]);
var state_44848__$1 = state_44848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44848__$1,inst_44846);
} else {
if((state_val_44849 === (15))){
var inst_44844 = (state_44848[(2)]);
var state_44848__$1 = state_44848;
var statearr_44857_44903 = state_44848__$1;
(statearr_44857_44903[(2)] = inst_44844);

(statearr_44857_44903[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (21))){
var inst_44803 = (state_44848[(2)]);
var state_44848__$1 = state_44848;
var statearr_44858_44904 = state_44848__$1;
(statearr_44858_44904[(2)] = inst_44803);

(statearr_44858_44904[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (31))){
var inst_44827 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_44848__$1 = state_44848;
if(cljs.core.truth_(inst_44827)){
var statearr_44859_44905 = state_44848__$1;
(statearr_44859_44905[(1)] = (34));

} else {
var statearr_44860_44906 = state_44848__$1;
(statearr_44860_44906[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (32))){
var inst_44836 = (state_44848[(2)]);
var state_44848__$1 = state_44848;
var statearr_44861_44907 = state_44848__$1;
(statearr_44861_44907[(2)] = inst_44836);

(statearr_44861_44907[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (33))){
var inst_44825 = (state_44848[(2)]);
var state_44848__$1 = state_44848;
var statearr_44862_44908 = state_44848__$1;
(statearr_44862_44908[(2)] = inst_44825);

(statearr_44862_44908[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (13))){
var inst_44786 = figwheel.client.heads_up.clear.call(null);
var state_44848__$1 = state_44848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44848__$1,(16),inst_44786);
} else {
if((state_val_44849 === (22))){
var inst_44807 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44808 = figwheel.client.heads_up.append_message.call(null,inst_44807);
var state_44848__$1 = state_44848;
var statearr_44863_44909 = state_44848__$1;
(statearr_44863_44909[(2)] = inst_44808);

(statearr_44863_44909[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (36))){
var inst_44834 = (state_44848[(2)]);
var state_44848__$1 = state_44848;
var statearr_44864_44910 = state_44848__$1;
(statearr_44864_44910[(2)] = inst_44834);

(statearr_44864_44910[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (29))){
var inst_44818 = (state_44848[(2)]);
var state_44848__$1 = state_44848;
var statearr_44865_44911 = state_44848__$1;
(statearr_44865_44911[(2)] = inst_44818);

(statearr_44865_44911[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (6))){
var inst_44767 = (state_44848[(7)]);
var state_44848__$1 = state_44848;
var statearr_44866_44912 = state_44848__$1;
(statearr_44866_44912[(2)] = inst_44767);

(statearr_44866_44912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (28))){
var inst_44814 = (state_44848[(2)]);
var inst_44815 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44816 = figwheel.client.heads_up.display_warning.call(null,inst_44815);
var state_44848__$1 = (function (){var statearr_44867 = state_44848;
(statearr_44867[(8)] = inst_44814);

return statearr_44867;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44848__$1,(29),inst_44816);
} else {
if((state_val_44849 === (25))){
var inst_44812 = figwheel.client.heads_up.clear.call(null);
var state_44848__$1 = state_44848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44848__$1,(28),inst_44812);
} else {
if((state_val_44849 === (34))){
var inst_44829 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44848__$1 = state_44848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44848__$1,(37),inst_44829);
} else {
if((state_val_44849 === (17))){
var inst_44794 = (state_44848[(2)]);
var state_44848__$1 = state_44848;
var statearr_44868_44913 = state_44848__$1;
(statearr_44868_44913[(2)] = inst_44794);

(statearr_44868_44913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (3))){
var inst_44784 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_44848__$1 = state_44848;
if(cljs.core.truth_(inst_44784)){
var statearr_44869_44914 = state_44848__$1;
(statearr_44869_44914[(1)] = (13));

} else {
var statearr_44870_44915 = state_44848__$1;
(statearr_44870_44915[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (12))){
var inst_44780 = (state_44848[(2)]);
var state_44848__$1 = state_44848;
var statearr_44871_44916 = state_44848__$1;
(statearr_44871_44916[(2)] = inst_44780);

(statearr_44871_44916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (2))){
var inst_44767 = (state_44848[(7)]);
var inst_44767__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_44848__$1 = (function (){var statearr_44872 = state_44848;
(statearr_44872[(7)] = inst_44767__$1);

return statearr_44872;
})();
if(cljs.core.truth_(inst_44767__$1)){
var statearr_44873_44917 = state_44848__$1;
(statearr_44873_44917[(1)] = (5));

} else {
var statearr_44874_44918 = state_44848__$1;
(statearr_44874_44918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (23))){
var inst_44810 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_44848__$1 = state_44848;
if(cljs.core.truth_(inst_44810)){
var statearr_44875_44919 = state_44848__$1;
(statearr_44875_44919[(1)] = (25));

} else {
var statearr_44876_44920 = state_44848__$1;
(statearr_44876_44920[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (35))){
var state_44848__$1 = state_44848;
var statearr_44877_44921 = state_44848__$1;
(statearr_44877_44921[(2)] = null);

(statearr_44877_44921[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (19))){
var inst_44805 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_44848__$1 = state_44848;
if(cljs.core.truth_(inst_44805)){
var statearr_44878_44922 = state_44848__$1;
(statearr_44878_44922[(1)] = (22));

} else {
var statearr_44879_44923 = state_44848__$1;
(statearr_44879_44923[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (11))){
var inst_44776 = (state_44848[(2)]);
var state_44848__$1 = state_44848;
var statearr_44880_44924 = state_44848__$1;
(statearr_44880_44924[(2)] = inst_44776);

(statearr_44880_44924[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (9))){
var inst_44778 = figwheel.client.heads_up.clear.call(null);
var state_44848__$1 = state_44848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44848__$1,(12),inst_44778);
} else {
if((state_val_44849 === (5))){
var inst_44769 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_44848__$1 = state_44848;
var statearr_44881_44925 = state_44848__$1;
(statearr_44881_44925[(2)] = inst_44769);

(statearr_44881_44925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (14))){
var inst_44796 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_44848__$1 = state_44848;
if(cljs.core.truth_(inst_44796)){
var statearr_44882_44926 = state_44848__$1;
(statearr_44882_44926[(1)] = (18));

} else {
var statearr_44883_44927 = state_44848__$1;
(statearr_44883_44927[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (26))){
var inst_44820 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_44848__$1 = state_44848;
if(cljs.core.truth_(inst_44820)){
var statearr_44884_44928 = state_44848__$1;
(statearr_44884_44928[(1)] = (30));

} else {
var statearr_44885_44929 = state_44848__$1;
(statearr_44885_44929[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (16))){
var inst_44788 = (state_44848[(2)]);
var inst_44789 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44790 = figwheel.client.format_messages.call(null,inst_44789);
var inst_44791 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44792 = figwheel.client.heads_up.display_error.call(null,inst_44790,inst_44791);
var state_44848__$1 = (function (){var statearr_44886 = state_44848;
(statearr_44886[(9)] = inst_44788);

return statearr_44886;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44848__$1,(17),inst_44792);
} else {
if((state_val_44849 === (30))){
var inst_44822 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44823 = figwheel.client.heads_up.display_warning.call(null,inst_44822);
var state_44848__$1 = state_44848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44848__$1,(33),inst_44823);
} else {
if((state_val_44849 === (10))){
var inst_44782 = (state_44848[(2)]);
var state_44848__$1 = state_44848;
var statearr_44887_44930 = state_44848__$1;
(statearr_44887_44930[(2)] = inst_44782);

(statearr_44887_44930[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (18))){
var inst_44798 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44799 = figwheel.client.format_messages.call(null,inst_44798);
var inst_44800 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44801 = figwheel.client.heads_up.display_error.call(null,inst_44799,inst_44800);
var state_44848__$1 = state_44848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44848__$1,(21),inst_44801);
} else {
if((state_val_44849 === (37))){
var inst_44831 = (state_44848[(2)]);
var state_44848__$1 = state_44848;
var statearr_44888_44931 = state_44848__$1;
(statearr_44888_44931[(2)] = inst_44831);

(statearr_44888_44931[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44849 === (8))){
var inst_44774 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44848__$1 = state_44848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44848__$1,(11),inst_44774);
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
});})(c__21993__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21881__auto__,c__21993__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21882__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21882__auto____0 = (function (){
var statearr_44892 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44892[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21882__auto__);

(statearr_44892[(1)] = (1));

return statearr_44892;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21882__auto____1 = (function (state_44848){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_44848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e44893){if((e44893 instanceof Object)){
var ex__21885__auto__ = e44893;
var statearr_44894_44932 = state_44848;
(statearr_44894_44932[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44933 = state_44848;
state_44848 = G__44933;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21882__auto__ = function(state_44848){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21882__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21882__auto____1.call(this,state_44848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21882__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21882__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto__,msg_hist,msg_names,msg))
})();
var state__21995__auto__ = (function (){var statearr_44895 = f__21994__auto__.call(null);
(statearr_44895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto__);

return statearr_44895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto__,msg_hist,msg_names,msg))
);

return c__21993__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21993__auto___44996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto___44996,ch){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto___44996,ch){
return (function (state_44979){
var state_val_44980 = (state_44979[(1)]);
if((state_val_44980 === (1))){
var state_44979__$1 = state_44979;
var statearr_44981_44997 = state_44979__$1;
(statearr_44981_44997[(2)] = null);

(statearr_44981_44997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (2))){
var state_44979__$1 = state_44979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44979__$1,(4),ch);
} else {
if((state_val_44980 === (3))){
var inst_44977 = (state_44979[(2)]);
var state_44979__$1 = state_44979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44979__$1,inst_44977);
} else {
if((state_val_44980 === (4))){
var inst_44967 = (state_44979[(7)]);
var inst_44967__$1 = (state_44979[(2)]);
var state_44979__$1 = (function (){var statearr_44982 = state_44979;
(statearr_44982[(7)] = inst_44967__$1);

return statearr_44982;
})();
if(cljs.core.truth_(inst_44967__$1)){
var statearr_44983_44998 = state_44979__$1;
(statearr_44983_44998[(1)] = (5));

} else {
var statearr_44984_44999 = state_44979__$1;
(statearr_44984_44999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (5))){
var inst_44967 = (state_44979[(7)]);
var inst_44969 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_44967);
var state_44979__$1 = state_44979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44979__$1,(8),inst_44969);
} else {
if((state_val_44980 === (6))){
var state_44979__$1 = state_44979;
var statearr_44985_45000 = state_44979__$1;
(statearr_44985_45000[(2)] = null);

(statearr_44985_45000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (7))){
var inst_44975 = (state_44979[(2)]);
var state_44979__$1 = state_44979;
var statearr_44986_45001 = state_44979__$1;
(statearr_44986_45001[(2)] = inst_44975);

(statearr_44986_45001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44980 === (8))){
var inst_44971 = (state_44979[(2)]);
var state_44979__$1 = (function (){var statearr_44987 = state_44979;
(statearr_44987[(8)] = inst_44971);

return statearr_44987;
})();
var statearr_44988_45002 = state_44979__$1;
(statearr_44988_45002[(2)] = null);

(statearr_44988_45002[(1)] = (2));


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
});})(c__21993__auto___44996,ch))
;
return ((function (switch__21881__auto__,c__21993__auto___44996,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21882__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21882__auto____0 = (function (){
var statearr_44992 = [null,null,null,null,null,null,null,null,null];
(statearr_44992[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21882__auto__);

(statearr_44992[(1)] = (1));

return statearr_44992;
});
var figwheel$client$heads_up_plugin_$_state_machine__21882__auto____1 = (function (state_44979){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_44979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e44993){if((e44993 instanceof Object)){
var ex__21885__auto__ = e44993;
var statearr_44994_45003 = state_44979;
(statearr_44994_45003[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45004 = state_44979;
state_44979 = G__45004;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21882__auto__ = function(state_44979){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21882__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21882__auto____1.call(this,state_44979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21882__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21882__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto___44996,ch))
})();
var state__21995__auto__ = (function (){var statearr_44995 = f__21994__auto__.call(null);
(statearr_44995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto___44996);

return statearr_44995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto___44996,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto__){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto__){
return (function (state_45025){
var state_val_45026 = (state_45025[(1)]);
if((state_val_45026 === (1))){
var inst_45020 = cljs.core.async.timeout.call(null,(3000));
var state_45025__$1 = state_45025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45025__$1,(2),inst_45020);
} else {
if((state_val_45026 === (2))){
var inst_45022 = (state_45025[(2)]);
var inst_45023 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_45025__$1 = (function (){var statearr_45027 = state_45025;
(statearr_45027[(7)] = inst_45022);

return statearr_45027;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45025__$1,inst_45023);
} else {
return null;
}
}
});})(c__21993__auto__))
;
return ((function (switch__21881__auto__,c__21993__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21882__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21882__auto____0 = (function (){
var statearr_45031 = [null,null,null,null,null,null,null,null];
(statearr_45031[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21882__auto__);

(statearr_45031[(1)] = (1));

return statearr_45031;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21882__auto____1 = (function (state_45025){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_45025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e45032){if((e45032 instanceof Object)){
var ex__21885__auto__ = e45032;
var statearr_45033_45035 = state_45025;
(statearr_45033_45035[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45036 = state_45025;
state_45025 = G__45036;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21882__auto__ = function(state_45025){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21882__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21882__auto____1.call(this,state_45025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21882__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21882__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto__))
})();
var state__21995__auto__ = (function (){var statearr_45034 = f__21994__auto__.call(null);
(statearr_45034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto__);

return statearr_45034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto__))
);

return c__21993__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__45037){
var map__45044 = p__45037;
var map__45044__$1 = ((((!((map__45044 == null)))?((((map__45044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45044):map__45044);
var ed = map__45044__$1;
var formatted_exception = cljs.core.get.call(null,map__45044__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__45044__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__45044__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__45046_45050 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__45047_45051 = null;
var count__45048_45052 = (0);
var i__45049_45053 = (0);
while(true){
if((i__45049_45053 < count__45048_45052)){
var msg_45054 = cljs.core._nth.call(null,chunk__45047_45051,i__45049_45053);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_45054);

var G__45055 = seq__45046_45050;
var G__45056 = chunk__45047_45051;
var G__45057 = count__45048_45052;
var G__45058 = (i__45049_45053 + (1));
seq__45046_45050 = G__45055;
chunk__45047_45051 = G__45056;
count__45048_45052 = G__45057;
i__45049_45053 = G__45058;
continue;
} else {
var temp__4657__auto___45059 = cljs.core.seq.call(null,seq__45046_45050);
if(temp__4657__auto___45059){
var seq__45046_45060__$1 = temp__4657__auto___45059;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45046_45060__$1)){
var c__19249__auto___45061 = cljs.core.chunk_first.call(null,seq__45046_45060__$1);
var G__45062 = cljs.core.chunk_rest.call(null,seq__45046_45060__$1);
var G__45063 = c__19249__auto___45061;
var G__45064 = cljs.core.count.call(null,c__19249__auto___45061);
var G__45065 = (0);
seq__45046_45050 = G__45062;
chunk__45047_45051 = G__45063;
count__45048_45052 = G__45064;
i__45049_45053 = G__45065;
continue;
} else {
var msg_45066 = cljs.core.first.call(null,seq__45046_45060__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_45066);

var G__45067 = cljs.core.next.call(null,seq__45046_45060__$1);
var G__45068 = null;
var G__45069 = (0);
var G__45070 = (0);
seq__45046_45050 = G__45067;
chunk__45047_45051 = G__45068;
count__45048_45052 = G__45069;
i__45049_45053 = G__45070;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__45071){
var map__45074 = p__45071;
var map__45074__$1 = ((((!((map__45074 == null)))?((((map__45074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45074):map__45074);
var w = map__45074__$1;
var message = cljs.core.get.call(null,map__45074__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18426__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18426__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18426__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__45082 = cljs.core.seq.call(null,plugins);
var chunk__45083 = null;
var count__45084 = (0);
var i__45085 = (0);
while(true){
if((i__45085 < count__45084)){
var vec__45086 = cljs.core._nth.call(null,chunk__45083,i__45085);
var k = cljs.core.nth.call(null,vec__45086,(0),null);
var plugin = cljs.core.nth.call(null,vec__45086,(1),null);
if(cljs.core.truth_(plugin)){
var pl_45088 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__45082,chunk__45083,count__45084,i__45085,pl_45088,vec__45086,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_45088.call(null,msg_hist);
});})(seq__45082,chunk__45083,count__45084,i__45085,pl_45088,vec__45086,k,plugin))
);
} else {
}

var G__45089 = seq__45082;
var G__45090 = chunk__45083;
var G__45091 = count__45084;
var G__45092 = (i__45085 + (1));
seq__45082 = G__45089;
chunk__45083 = G__45090;
count__45084 = G__45091;
i__45085 = G__45092;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45082);
if(temp__4657__auto__){
var seq__45082__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45082__$1)){
var c__19249__auto__ = cljs.core.chunk_first.call(null,seq__45082__$1);
var G__45093 = cljs.core.chunk_rest.call(null,seq__45082__$1);
var G__45094 = c__19249__auto__;
var G__45095 = cljs.core.count.call(null,c__19249__auto__);
var G__45096 = (0);
seq__45082 = G__45093;
chunk__45083 = G__45094;
count__45084 = G__45095;
i__45085 = G__45096;
continue;
} else {
var vec__45087 = cljs.core.first.call(null,seq__45082__$1);
var k = cljs.core.nth.call(null,vec__45087,(0),null);
var plugin = cljs.core.nth.call(null,vec__45087,(1),null);
if(cljs.core.truth_(plugin)){
var pl_45097 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__45082,chunk__45083,count__45084,i__45085,pl_45097,vec__45087,k,plugin,seq__45082__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_45097.call(null,msg_hist);
});})(seq__45082,chunk__45083,count__45084,i__45085,pl_45097,vec__45087,k,plugin,seq__45082__$1,temp__4657__auto__))
);
} else {
}

var G__45098 = cljs.core.next.call(null,seq__45082__$1);
var G__45099 = null;
var G__45100 = (0);
var G__45101 = (0);
seq__45082 = G__45098;
chunk__45083 = G__45099;
count__45084 = G__45100;
i__45085 = G__45101;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args45102 = [];
var len__19507__auto___45105 = arguments.length;
var i__19508__auto___45106 = (0);
while(true){
if((i__19508__auto___45106 < len__19507__auto___45105)){
args45102.push((arguments[i__19508__auto___45106]));

var G__45107 = (i__19508__auto___45106 + (1));
i__19508__auto___45106 = G__45107;
continue;
} else {
}
break;
}

var G__45104 = args45102.length;
switch (G__45104) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45102.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19514__auto__ = [];
var len__19507__auto___45113 = arguments.length;
var i__19508__auto___45114 = (0);
while(true){
if((i__19508__auto___45114 < len__19507__auto___45113)){
args__19514__auto__.push((arguments[i__19508__auto___45114]));

var G__45115 = (i__19508__auto___45114 + (1));
i__19508__auto___45114 = G__45115;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((0) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19515__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__45110){
var map__45111 = p__45110;
var map__45111__$1 = ((((!((map__45111 == null)))?((((map__45111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45111):map__45111);
var opts = map__45111__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq45109){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45109));
});

//# sourceMappingURL=client.js.map?rel=1458781552804
// Compiled by ClojureScript 1.8.34 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19514__auto__ = [];
var len__19507__auto___44155 = arguments.length;
var i__19508__auto___44156 = (0);
while(true){
if((i__19508__auto___44156 < len__19507__auto___44155)){
args__19514__auto__.push((arguments[i__19508__auto___44156]));

var G__44157 = (i__19508__auto___44156 + (1));
i__19508__auto___44156 = G__44157;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((2) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19515__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__44147_44158 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__44148_44159 = null;
var count__44149_44160 = (0);
var i__44150_44161 = (0);
while(true){
if((i__44150_44161 < count__44149_44160)){
var k_44162 = cljs.core._nth.call(null,chunk__44148_44159,i__44150_44161);
e.setAttribute(cljs.core.name.call(null,k_44162),cljs.core.get.call(null,attrs,k_44162));

var G__44163 = seq__44147_44158;
var G__44164 = chunk__44148_44159;
var G__44165 = count__44149_44160;
var G__44166 = (i__44150_44161 + (1));
seq__44147_44158 = G__44163;
chunk__44148_44159 = G__44164;
count__44149_44160 = G__44165;
i__44150_44161 = G__44166;
continue;
} else {
var temp__4657__auto___44167 = cljs.core.seq.call(null,seq__44147_44158);
if(temp__4657__auto___44167){
var seq__44147_44168__$1 = temp__4657__auto___44167;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44147_44168__$1)){
var c__19249__auto___44169 = cljs.core.chunk_first.call(null,seq__44147_44168__$1);
var G__44170 = cljs.core.chunk_rest.call(null,seq__44147_44168__$1);
var G__44171 = c__19249__auto___44169;
var G__44172 = cljs.core.count.call(null,c__19249__auto___44169);
var G__44173 = (0);
seq__44147_44158 = G__44170;
chunk__44148_44159 = G__44171;
count__44149_44160 = G__44172;
i__44150_44161 = G__44173;
continue;
} else {
var k_44174 = cljs.core.first.call(null,seq__44147_44168__$1);
e.setAttribute(cljs.core.name.call(null,k_44174),cljs.core.get.call(null,attrs,k_44174));

var G__44175 = cljs.core.next.call(null,seq__44147_44168__$1);
var G__44176 = null;
var G__44177 = (0);
var G__44178 = (0);
seq__44147_44158 = G__44175;
chunk__44148_44159 = G__44176;
count__44149_44160 = G__44177;
i__44150_44161 = G__44178;
continue;
}
} else {
}
}
break;
}

var seq__44151_44179 = cljs.core.seq.call(null,children);
var chunk__44152_44180 = null;
var count__44153_44181 = (0);
var i__44154_44182 = (0);
while(true){
if((i__44154_44182 < count__44153_44181)){
var ch_44183 = cljs.core._nth.call(null,chunk__44152_44180,i__44154_44182);
e.appendChild(ch_44183);

var G__44184 = seq__44151_44179;
var G__44185 = chunk__44152_44180;
var G__44186 = count__44153_44181;
var G__44187 = (i__44154_44182 + (1));
seq__44151_44179 = G__44184;
chunk__44152_44180 = G__44185;
count__44153_44181 = G__44186;
i__44154_44182 = G__44187;
continue;
} else {
var temp__4657__auto___44188 = cljs.core.seq.call(null,seq__44151_44179);
if(temp__4657__auto___44188){
var seq__44151_44189__$1 = temp__4657__auto___44188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44151_44189__$1)){
var c__19249__auto___44190 = cljs.core.chunk_first.call(null,seq__44151_44189__$1);
var G__44191 = cljs.core.chunk_rest.call(null,seq__44151_44189__$1);
var G__44192 = c__19249__auto___44190;
var G__44193 = cljs.core.count.call(null,c__19249__auto___44190);
var G__44194 = (0);
seq__44151_44179 = G__44191;
chunk__44152_44180 = G__44192;
count__44153_44181 = G__44193;
i__44154_44182 = G__44194;
continue;
} else {
var ch_44195 = cljs.core.first.call(null,seq__44151_44189__$1);
e.appendChild(ch_44195);

var G__44196 = cljs.core.next.call(null,seq__44151_44189__$1);
var G__44197 = null;
var G__44198 = (0);
var G__44199 = (0);
seq__44151_44179 = G__44196;
chunk__44152_44180 = G__44197;
count__44153_44181 = G__44198;
i__44154_44182 = G__44199;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq44144){
var G__44145 = cljs.core.first.call(null,seq44144);
var seq44144__$1 = cljs.core.next.call(null,seq44144);
var G__44146 = cljs.core.first.call(null,seq44144__$1);
var seq44144__$2 = cljs.core.next.call(null,seq44144__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__44145,G__44146,seq44144__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19362__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19363__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19364__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19365__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19366__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19362__auto__,prefer_table__19363__auto__,method_cache__19364__auto__,cached_hierarchy__19365__auto__,hierarchy__19366__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19362__auto__,prefer_table__19363__auto__,method_cache__19364__auto__,cached_hierarchy__19365__auto__,hierarchy__19366__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19366__auto__,method_table__19362__auto__,prefer_table__19363__auto__,method_cache__19364__auto__,cached_hierarchy__19365__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_44200 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_44200.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_44200.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_44200.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_44200);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__44201,st_map){
var map__44206 = p__44201;
var map__44206__$1 = ((((!((map__44206 == null)))?((((map__44206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44206):map__44206);
var container_el = cljs.core.get.call(null,map__44206__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__44206,map__44206__$1,container_el){
return (function (p__44208){
var vec__44209 = p__44208;
var k = cljs.core.nth.call(null,vec__44209,(0),null);
var v = cljs.core.nth.call(null,vec__44209,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__44206,map__44206__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__44210,dom_str){
var map__44213 = p__44210;
var map__44213__$1 = ((((!((map__44213 == null)))?((((map__44213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44213):map__44213);
var c = map__44213__$1;
var content_area_el = cljs.core.get.call(null,map__44213__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__44215){
var map__44218 = p__44215;
var map__44218__$1 = ((((!((map__44218 == null)))?((((map__44218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44218):map__44218);
var content_area_el = cljs.core.get.call(null,map__44218__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto__){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto__){
return (function (state_44261){
var state_val_44262 = (state_44261[(1)]);
if((state_val_44262 === (1))){
var inst_44246 = (state_44261[(7)]);
var inst_44246__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_44247 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_44248 = ["10px","10px","100%","68px","1.0"];
var inst_44249 = cljs.core.PersistentHashMap.fromArrays(inst_44247,inst_44248);
var inst_44250 = cljs.core.merge.call(null,inst_44249,style);
var inst_44251 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_44246__$1,inst_44250);
var inst_44252 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_44246__$1,msg);
var inst_44253 = cljs.core.async.timeout.call(null,(300));
var state_44261__$1 = (function (){var statearr_44263 = state_44261;
(statearr_44263[(7)] = inst_44246__$1);

(statearr_44263[(8)] = inst_44252);

(statearr_44263[(9)] = inst_44251);

return statearr_44263;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44261__$1,(2),inst_44253);
} else {
if((state_val_44262 === (2))){
var inst_44246 = (state_44261[(7)]);
var inst_44255 = (state_44261[(2)]);
var inst_44256 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_44257 = ["auto"];
var inst_44258 = cljs.core.PersistentHashMap.fromArrays(inst_44256,inst_44257);
var inst_44259 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_44246,inst_44258);
var state_44261__$1 = (function (){var statearr_44264 = state_44261;
(statearr_44264[(10)] = inst_44255);

return statearr_44264;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44261__$1,inst_44259);
} else {
return null;
}
}
});})(c__21993__auto__))
;
return ((function (switch__21881__auto__,c__21993__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21882__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21882__auto____0 = (function (){
var statearr_44268 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44268[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21882__auto__);

(statearr_44268[(1)] = (1));

return statearr_44268;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21882__auto____1 = (function (state_44261){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_44261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e44269){if((e44269 instanceof Object)){
var ex__21885__auto__ = e44269;
var statearr_44270_44272 = state_44261;
(statearr_44270_44272[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44273 = state_44261;
state_44261 = G__44273;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21882__auto__ = function(state_44261){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21882__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21882__auto____1.call(this,state_44261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21882__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21882__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto__))
})();
var state__21995__auto__ = (function (){var statearr_44271 = f__21994__auto__.call(null);
(statearr_44271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto__);

return statearr_44271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto__))
);

return c__21993__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__44275 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__44275,(0),null);
var ln = cljs.core.nth.call(null,vec__44275,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__44278 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__44278,(0),null);
var file_line = cljs.core.nth.call(null,vec__44278,(1),null);
var file_column = cljs.core.nth.call(null,vec__44278,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__44278,file_name,file_line,file_column){
return (function (p1__44276_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__44276_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__44278,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18438__auto__ = file_line;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
var and__18426__auto__ = cause;
if(cljs.core.truth_(and__18426__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18426__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__44281 = figwheel.client.heads_up.ensure_container.call(null);
var map__44281__$1 = ((((!((map__44281 == null)))?((((map__44281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44281):map__44281);
var content_area_el = cljs.core.get.call(null,map__44281__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto__){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto__){
return (function (state_44329){
var state_val_44330 = (state_44329[(1)]);
if((state_val_44330 === (1))){
var inst_44312 = (state_44329[(7)]);
var inst_44312__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_44313 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_44314 = ["0.0"];
var inst_44315 = cljs.core.PersistentHashMap.fromArrays(inst_44313,inst_44314);
var inst_44316 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_44312__$1,inst_44315);
var inst_44317 = cljs.core.async.timeout.call(null,(300));
var state_44329__$1 = (function (){var statearr_44331 = state_44329;
(statearr_44331[(7)] = inst_44312__$1);

(statearr_44331[(8)] = inst_44316);

return statearr_44331;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44329__$1,(2),inst_44317);
} else {
if((state_val_44330 === (2))){
var inst_44312 = (state_44329[(7)]);
var inst_44319 = (state_44329[(2)]);
var inst_44320 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_44321 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_44322 = cljs.core.PersistentHashMap.fromArrays(inst_44320,inst_44321);
var inst_44323 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_44312,inst_44322);
var inst_44324 = cljs.core.async.timeout.call(null,(200));
var state_44329__$1 = (function (){var statearr_44332 = state_44329;
(statearr_44332[(9)] = inst_44319);

(statearr_44332[(10)] = inst_44323);

return statearr_44332;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44329__$1,(3),inst_44324);
} else {
if((state_val_44330 === (3))){
var inst_44312 = (state_44329[(7)]);
var inst_44326 = (state_44329[(2)]);
var inst_44327 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_44312,"");
var state_44329__$1 = (function (){var statearr_44333 = state_44329;
(statearr_44333[(11)] = inst_44326);

return statearr_44333;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44329__$1,inst_44327);
} else {
return null;
}
}
}
});})(c__21993__auto__))
;
return ((function (switch__21881__auto__,c__21993__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21882__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21882__auto____0 = (function (){
var statearr_44337 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44337[(0)] = figwheel$client$heads_up$clear_$_state_machine__21882__auto__);

(statearr_44337[(1)] = (1));

return statearr_44337;
});
var figwheel$client$heads_up$clear_$_state_machine__21882__auto____1 = (function (state_44329){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_44329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e44338){if((e44338 instanceof Object)){
var ex__21885__auto__ = e44338;
var statearr_44339_44341 = state_44329;
(statearr_44339_44341[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44342 = state_44329;
state_44329 = G__44342;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21882__auto__ = function(state_44329){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21882__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21882__auto____1.call(this,state_44329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21882__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21882__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto__))
})();
var state__21995__auto__ = (function (){var statearr_44340 = f__21994__auto__.call(null);
(statearr_44340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto__);

return statearr_44340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto__))
);

return c__21993__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto__){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto__){
return (function (state_44374){
var state_val_44375 = (state_44374[(1)]);
if((state_val_44375 === (1))){
var inst_44364 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_44374__$1 = state_44374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44374__$1,(2),inst_44364);
} else {
if((state_val_44375 === (2))){
var inst_44366 = (state_44374[(2)]);
var inst_44367 = cljs.core.async.timeout.call(null,(400));
var state_44374__$1 = (function (){var statearr_44376 = state_44374;
(statearr_44376[(7)] = inst_44366);

return statearr_44376;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44374__$1,(3),inst_44367);
} else {
if((state_val_44375 === (3))){
var inst_44369 = (state_44374[(2)]);
var inst_44370 = figwheel.client.heads_up.clear.call(null);
var state_44374__$1 = (function (){var statearr_44377 = state_44374;
(statearr_44377[(8)] = inst_44369);

return statearr_44377;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44374__$1,(4),inst_44370);
} else {
if((state_val_44375 === (4))){
var inst_44372 = (state_44374[(2)]);
var state_44374__$1 = state_44374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44374__$1,inst_44372);
} else {
return null;
}
}
}
}
});})(c__21993__auto__))
;
return ((function (switch__21881__auto__,c__21993__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21882__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21882__auto____0 = (function (){
var statearr_44381 = [null,null,null,null,null,null,null,null,null];
(statearr_44381[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21882__auto__);

(statearr_44381[(1)] = (1));

return statearr_44381;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21882__auto____1 = (function (state_44374){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_44374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e44382){if((e44382 instanceof Object)){
var ex__21885__auto__ = e44382;
var statearr_44383_44385 = state_44374;
(statearr_44383_44385[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44386 = state_44374;
state_44374 = G__44386;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21882__auto__ = function(state_44374){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21882__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21882__auto____1.call(this,state_44374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21882__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21882__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto__))
})();
var state__21995__auto__ = (function (){var statearr_44384 = f__21994__auto__.call(null);
(statearr_44384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto__);

return statearr_44384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto__))
);

return c__21993__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1458781552305
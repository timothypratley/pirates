// Compiled by ClojureScript 1.8.34 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom.server');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__38526__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__38525 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__38525,(0),null);
var body = cljs.core.nthnext.call(null,vec__38525,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__38526 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38527__i = 0, G__38527__a = new Array(arguments.length -  0);
while (G__38527__i < G__38527__a.length) {G__38527__a[G__38527__i] = arguments[G__38527__i + 0]; ++G__38527__i;}
  args = new cljs.core.IndexedSeq(G__38527__a,0);
} 
return G__38526__delegate.call(this,args);};
G__38526.cljs$lang$maxFixedArity = 0;
G__38526.cljs$lang$applyTo = (function (arglist__38528){
var args = cljs.core.seq(arglist__38528);
return G__38526__delegate(args);
});
G__38526.cljs$core$IFn$_invoke$arity$variadic = G__38526__delegate;
return G__38526;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19218__auto__ = (function sablono$core$update_arglists_$_iter__38533(s__38534){
return (new cljs.core.LazySeq(null,(function (){
var s__38534__$1 = s__38534;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38534__$1);
if(temp__4657__auto__){
var s__38534__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38534__$2)){
var c__19216__auto__ = cljs.core.chunk_first.call(null,s__38534__$2);
var size__19217__auto__ = cljs.core.count.call(null,c__19216__auto__);
var b__38536 = cljs.core.chunk_buffer.call(null,size__19217__auto__);
if((function (){var i__38535 = (0);
while(true){
if((i__38535 < size__19217__auto__)){
var args = cljs.core._nth.call(null,c__19216__auto__,i__38535);
cljs.core.chunk_append.call(null,b__38536,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__38537 = (i__38535 + (1));
i__38535 = G__38537;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38536),sablono$core$update_arglists_$_iter__38533.call(null,cljs.core.chunk_rest.call(null,s__38534__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38536),null);
}
} else {
var args = cljs.core.first.call(null,s__38534__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__38533.call(null,cljs.core.rest.call(null,s__38534__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19218__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__19514__auto__ = [];
var len__19507__auto___38543 = arguments.length;
var i__19508__auto___38544 = (0);
while(true){
if((i__19508__auto___38544 < len__19507__auto___38543)){
args__19514__auto__.push((arguments[i__19508__auto___38544]));

var G__38545 = (i__19508__auto___38544 + (1));
i__19508__auto___38544 = G__38545;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((0) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19515__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19218__auto__ = (function sablono$core$iter__38539(s__38540){
return (new cljs.core.LazySeq(null,(function (){
var s__38540__$1 = s__38540;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38540__$1);
if(temp__4657__auto__){
var s__38540__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38540__$2)){
var c__19216__auto__ = cljs.core.chunk_first.call(null,s__38540__$2);
var size__19217__auto__ = cljs.core.count.call(null,c__19216__auto__);
var b__38542 = cljs.core.chunk_buffer.call(null,size__19217__auto__);
if((function (){var i__38541 = (0);
while(true){
if((i__38541 < size__19217__auto__)){
var style = cljs.core._nth.call(null,c__19216__auto__,i__38541);
cljs.core.chunk_append.call(null,b__38542,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__38546 = (i__38541 + (1));
i__38541 = G__38546;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38542),sablono$core$iter__38539.call(null,cljs.core.chunk_rest.call(null,s__38540__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38542),null);
}
} else {
var style = cljs.core.first.call(null,s__38540__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__38539.call(null,cljs.core.rest.call(null,s__38540__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19218__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq38538){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38538));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to38547 = (function sablono$core$link_to38547(var_args){
var args__19514__auto__ = [];
var len__19507__auto___38550 = arguments.length;
var i__19508__auto___38551 = (0);
while(true){
if((i__19508__auto___38551 < len__19507__auto___38550)){
args__19514__auto__.push((arguments[i__19508__auto___38551]));

var G__38552 = (i__19508__auto___38551 + (1));
i__19508__auto___38551 = G__38552;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to38547.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

sablono.core.link_to38547.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to38547.cljs$lang$maxFixedArity = (1);

sablono.core.link_to38547.cljs$lang$applyTo = (function (seq38548){
var G__38549 = cljs.core.first.call(null,seq38548);
var seq38548__$1 = cljs.core.next.call(null,seq38548);
return sablono.core.link_to38547.cljs$core$IFn$_invoke$arity$variadic(G__38549,seq38548__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to38547);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to38553 = (function sablono$core$mail_to38553(var_args){
var args__19514__auto__ = [];
var len__19507__auto___38558 = arguments.length;
var i__19508__auto___38559 = (0);
while(true){
if((i__19508__auto___38559 < len__19507__auto___38558)){
args__19514__auto__.push((arguments[i__19508__auto___38559]));

var G__38560 = (i__19508__auto___38559 + (1));
i__19508__auto___38559 = G__38560;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to38553.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

sablono.core.mail_to38553.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__38556){
var vec__38557 = p__38556;
var content = cljs.core.nth.call(null,vec__38557,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18438__auto__ = content;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to38553.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to38553.cljs$lang$applyTo = (function (seq38554){
var G__38555 = cljs.core.first.call(null,seq38554);
var seq38554__$1 = cljs.core.next.call(null,seq38554);
return sablono.core.mail_to38553.cljs$core$IFn$_invoke$arity$variadic(G__38555,seq38554__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to38553);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list38561 = (function sablono$core$unordered_list38561(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19218__auto__ = (function sablono$core$unordered_list38561_$_iter__38566(s__38567){
return (new cljs.core.LazySeq(null,(function (){
var s__38567__$1 = s__38567;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38567__$1);
if(temp__4657__auto__){
var s__38567__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38567__$2)){
var c__19216__auto__ = cljs.core.chunk_first.call(null,s__38567__$2);
var size__19217__auto__ = cljs.core.count.call(null,c__19216__auto__);
var b__38569 = cljs.core.chunk_buffer.call(null,size__19217__auto__);
if((function (){var i__38568 = (0);
while(true){
if((i__38568 < size__19217__auto__)){
var x = cljs.core._nth.call(null,c__19216__auto__,i__38568);
cljs.core.chunk_append.call(null,b__38569,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38570 = (i__38568 + (1));
i__38568 = G__38570;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38569),sablono$core$unordered_list38561_$_iter__38566.call(null,cljs.core.chunk_rest.call(null,s__38567__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38569),null);
}
} else {
var x = cljs.core.first.call(null,s__38567__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list38561_$_iter__38566.call(null,cljs.core.rest.call(null,s__38567__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19218__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list38561);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list38571 = (function sablono$core$ordered_list38571(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19218__auto__ = (function sablono$core$ordered_list38571_$_iter__38576(s__38577){
return (new cljs.core.LazySeq(null,(function (){
var s__38577__$1 = s__38577;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38577__$1);
if(temp__4657__auto__){
var s__38577__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38577__$2)){
var c__19216__auto__ = cljs.core.chunk_first.call(null,s__38577__$2);
var size__19217__auto__ = cljs.core.count.call(null,c__19216__auto__);
var b__38579 = cljs.core.chunk_buffer.call(null,size__19217__auto__);
if((function (){var i__38578 = (0);
while(true){
if((i__38578 < size__19217__auto__)){
var x = cljs.core._nth.call(null,c__19216__auto__,i__38578);
cljs.core.chunk_append.call(null,b__38579,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38580 = (i__38578 + (1));
i__38578 = G__38580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38579),sablono$core$ordered_list38571_$_iter__38576.call(null,cljs.core.chunk_rest.call(null,s__38577__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38579),null);
}
} else {
var x = cljs.core.first.call(null,s__38577__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list38571_$_iter__38576.call(null,cljs.core.rest.call(null,s__38577__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19218__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list38571);
/**
 * Create an image element.
 */
sablono.core.image38581 = (function sablono$core$image38581(var_args){
var args38582 = [];
var len__19507__auto___38585 = arguments.length;
var i__19508__auto___38586 = (0);
while(true){
if((i__19508__auto___38586 < len__19507__auto___38585)){
args38582.push((arguments[i__19508__auto___38586]));

var G__38587 = (i__19508__auto___38586 + (1));
i__19508__auto___38586 = G__38587;
continue;
} else {
}
break;
}

var G__38584 = args38582.length;
switch (G__38584) {
case 1:
return sablono.core.image38581.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image38581.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38582.length)].join('')));

}
});

sablono.core.image38581.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image38581.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image38581.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image38581);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__38589_SHARP_,p2__38590_SHARP_){
return [cljs.core.str(p1__38589_SHARP_),cljs.core.str("["),cljs.core.str(p2__38590_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__38591_SHARP_,p2__38592_SHARP_){
return [cljs.core.str(p1__38591_SHARP_),cljs.core.str("-"),cljs.core.str(p2__38592_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field38593 = (function sablono$core$color_field38593(var_args){
var args38594 = [];
var len__19507__auto___38661 = arguments.length;
var i__19508__auto___38662 = (0);
while(true){
if((i__19508__auto___38662 < len__19507__auto___38661)){
args38594.push((arguments[i__19508__auto___38662]));

var G__38663 = (i__19508__auto___38662 + (1));
i__19508__auto___38662 = G__38663;
continue;
} else {
}
break;
}

var G__38596 = args38594.length;
switch (G__38596) {
case 1:
return sablono.core.color_field38593.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field38593.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38594.length)].join('')));

}
});

sablono.core.color_field38593.cljs$core$IFn$_invoke$arity$1 = (function (name__25298__auto__){
return sablono.core.color_field38593.call(null,name__25298__auto__,null);
});

sablono.core.color_field38593.cljs$core$IFn$_invoke$arity$2 = (function (name__25298__auto__,value__25299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__25298__auto__,value__25299__auto__);
});

sablono.core.color_field38593.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field38593);

/**
 * Creates a date input field.
 */
sablono.core.date_field38597 = (function sablono$core$date_field38597(var_args){
var args38598 = [];
var len__19507__auto___38665 = arguments.length;
var i__19508__auto___38666 = (0);
while(true){
if((i__19508__auto___38666 < len__19507__auto___38665)){
args38598.push((arguments[i__19508__auto___38666]));

var G__38667 = (i__19508__auto___38666 + (1));
i__19508__auto___38666 = G__38667;
continue;
} else {
}
break;
}

var G__38600 = args38598.length;
switch (G__38600) {
case 1:
return sablono.core.date_field38597.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field38597.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38598.length)].join('')));

}
});

sablono.core.date_field38597.cljs$core$IFn$_invoke$arity$1 = (function (name__25298__auto__){
return sablono.core.date_field38597.call(null,name__25298__auto__,null);
});

sablono.core.date_field38597.cljs$core$IFn$_invoke$arity$2 = (function (name__25298__auto__,value__25299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__25298__auto__,value__25299__auto__);
});

sablono.core.date_field38597.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field38597);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field38601 = (function sablono$core$datetime_field38601(var_args){
var args38602 = [];
var len__19507__auto___38669 = arguments.length;
var i__19508__auto___38670 = (0);
while(true){
if((i__19508__auto___38670 < len__19507__auto___38669)){
args38602.push((arguments[i__19508__auto___38670]));

var G__38671 = (i__19508__auto___38670 + (1));
i__19508__auto___38670 = G__38671;
continue;
} else {
}
break;
}

var G__38604 = args38602.length;
switch (G__38604) {
case 1:
return sablono.core.datetime_field38601.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field38601.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38602.length)].join('')));

}
});

sablono.core.datetime_field38601.cljs$core$IFn$_invoke$arity$1 = (function (name__25298__auto__){
return sablono.core.datetime_field38601.call(null,name__25298__auto__,null);
});

sablono.core.datetime_field38601.cljs$core$IFn$_invoke$arity$2 = (function (name__25298__auto__,value__25299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__25298__auto__,value__25299__auto__);
});

sablono.core.datetime_field38601.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field38601);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field38605 = (function sablono$core$datetime_local_field38605(var_args){
var args38606 = [];
var len__19507__auto___38673 = arguments.length;
var i__19508__auto___38674 = (0);
while(true){
if((i__19508__auto___38674 < len__19507__auto___38673)){
args38606.push((arguments[i__19508__auto___38674]));

var G__38675 = (i__19508__auto___38674 + (1));
i__19508__auto___38674 = G__38675;
continue;
} else {
}
break;
}

var G__38608 = args38606.length;
switch (G__38608) {
case 1:
return sablono.core.datetime_local_field38605.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field38605.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38606.length)].join('')));

}
});

sablono.core.datetime_local_field38605.cljs$core$IFn$_invoke$arity$1 = (function (name__25298__auto__){
return sablono.core.datetime_local_field38605.call(null,name__25298__auto__,null);
});

sablono.core.datetime_local_field38605.cljs$core$IFn$_invoke$arity$2 = (function (name__25298__auto__,value__25299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__25298__auto__,value__25299__auto__);
});

sablono.core.datetime_local_field38605.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field38605);

/**
 * Creates a email input field.
 */
sablono.core.email_field38609 = (function sablono$core$email_field38609(var_args){
var args38610 = [];
var len__19507__auto___38677 = arguments.length;
var i__19508__auto___38678 = (0);
while(true){
if((i__19508__auto___38678 < len__19507__auto___38677)){
args38610.push((arguments[i__19508__auto___38678]));

var G__38679 = (i__19508__auto___38678 + (1));
i__19508__auto___38678 = G__38679;
continue;
} else {
}
break;
}

var G__38612 = args38610.length;
switch (G__38612) {
case 1:
return sablono.core.email_field38609.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field38609.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38610.length)].join('')));

}
});

sablono.core.email_field38609.cljs$core$IFn$_invoke$arity$1 = (function (name__25298__auto__){
return sablono.core.email_field38609.call(null,name__25298__auto__,null);
});

sablono.core.email_field38609.cljs$core$IFn$_invoke$arity$2 = (function (name__25298__auto__,value__25299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__25298__auto__,value__25299__auto__);
});

sablono.core.email_field38609.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field38609);

/**
 * Creates a file input field.
 */
sablono.core.file_field38613 = (function sablono$core$file_field38613(var_args){
var args38614 = [];
var len__19507__auto___38681 = arguments.length;
var i__19508__auto___38682 = (0);
while(true){
if((i__19508__auto___38682 < len__19507__auto___38681)){
args38614.push((arguments[i__19508__auto___38682]));

var G__38683 = (i__19508__auto___38682 + (1));
i__19508__auto___38682 = G__38683;
continue;
} else {
}
break;
}

var G__38616 = args38614.length;
switch (G__38616) {
case 1:
return sablono.core.file_field38613.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field38613.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38614.length)].join('')));

}
});

sablono.core.file_field38613.cljs$core$IFn$_invoke$arity$1 = (function (name__25298__auto__){
return sablono.core.file_field38613.call(null,name__25298__auto__,null);
});

sablono.core.file_field38613.cljs$core$IFn$_invoke$arity$2 = (function (name__25298__auto__,value__25299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__25298__auto__,value__25299__auto__);
});

sablono.core.file_field38613.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field38613);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field38617 = (function sablono$core$hidden_field38617(var_args){
var args38618 = [];
var len__19507__auto___38685 = arguments.length;
var i__19508__auto___38686 = (0);
while(true){
if((i__19508__auto___38686 < len__19507__auto___38685)){
args38618.push((arguments[i__19508__auto___38686]));

var G__38687 = (i__19508__auto___38686 + (1));
i__19508__auto___38686 = G__38687;
continue;
} else {
}
break;
}

var G__38620 = args38618.length;
switch (G__38620) {
case 1:
return sablono.core.hidden_field38617.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field38617.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38618.length)].join('')));

}
});

sablono.core.hidden_field38617.cljs$core$IFn$_invoke$arity$1 = (function (name__25298__auto__){
return sablono.core.hidden_field38617.call(null,name__25298__auto__,null);
});

sablono.core.hidden_field38617.cljs$core$IFn$_invoke$arity$2 = (function (name__25298__auto__,value__25299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__25298__auto__,value__25299__auto__);
});

sablono.core.hidden_field38617.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field38617);

/**
 * Creates a month input field.
 */
sablono.core.month_field38621 = (function sablono$core$month_field38621(var_args){
var args38622 = [];
var len__19507__auto___38689 = arguments.length;
var i__19508__auto___38690 = (0);
while(true){
if((i__19508__auto___38690 < len__19507__auto___38689)){
args38622.push((arguments[i__19508__auto___38690]));

var G__38691 = (i__19508__auto___38690 + (1));
i__19508__auto___38690 = G__38691;
continue;
} else {
}
break;
}

var G__38624 = args38622.length;
switch (G__38624) {
case 1:
return sablono.core.month_field38621.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field38621.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38622.length)].join('')));

}
});

sablono.core.month_field38621.cljs$core$IFn$_invoke$arity$1 = (function (name__25298__auto__){
return sablono.core.month_field38621.call(null,name__25298__auto__,null);
});

sablono.core.month_field38621.cljs$core$IFn$_invoke$arity$2 = (function (name__25298__auto__,value__25299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__25298__auto__,value__25299__auto__);
});

sablono.core.month_field38621.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field38621);

/**
 * Creates a number input field.
 */
sablono.core.number_field38625 = (function sablono$core$number_field38625(var_args){
var args38626 = [];
var len__19507__auto___38693 = arguments.length;
var i__19508__auto___38694 = (0);
while(true){
if((i__19508__auto___38694 < len__19507__auto___38693)){
args38626.push((arguments[i__19508__auto___38694]));

var G__38695 = (i__19508__auto___38694 + (1));
i__19508__auto___38694 = G__38695;
continue;
} else {
}
break;
}

var G__38628 = args38626.length;
switch (G__38628) {
case 1:
return sablono.core.number_field38625.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field38625.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38626.length)].join('')));

}
});

sablono.core.number_field38625.cljs$core$IFn$_invoke$arity$1 = (function (name__25298__auto__){
return sablono.core.number_field38625.call(null,name__25298__auto__,null);
});

sablono.core.number_field38625.cljs$core$IFn$_invoke$arity$2 = (function (name__25298__auto__,value__25299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__25298__auto__,value__25299__auto__);
});

sablono.core.number_field38625.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field38625);

/**
 * Creates a password input field.
 */
sablono.core.password_field38629 = (function sablono$core$password_field38629(var_args){
var args38630 = [];
var len__19507__auto___38697 = arguments.length;
var i__19508__auto___38698 = (0);
while(true){
if((i__19508__auto___38698 < len__19507__auto___38697)){
args38630.push((arguments[i__19508__auto___38698]));

var G__38699 = (i__19508__auto___38698 + (1));
i__19508__auto___38698 = G__38699;
continue;
} else {
}
break;
}

var G__38632 = args38630.length;
switch (G__38632) {
case 1:
return sablono.core.password_field38629.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field38629.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38630.length)].join('')));

}
});

sablono.core.password_field38629.cljs$core$IFn$_invoke$arity$1 = (function (name__25298__auto__){
return sablono.core.password_field38629.call(null,name__25298__auto__,null);
});

sablono.core.password_field38629.cljs$core$IFn$_invoke$arity$2 = (function (name__25298__auto__,value__25299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__25298__auto__,value__25299__auto__);
});

sablono.core.password_field38629.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field38629);

/**
 * Creates a range input field.
 */
sablono.core.range_field38633 = (function sablono$core$range_field38633(var_args){
var args38634 = [];
var len__19507__auto___38701 = arguments.length;
var i__19508__auto___38702 = (0);
while(true){
if((i__19508__auto___38702 < len__19507__auto___38701)){
args38634.push((arguments[i__19508__auto___38702]));

var G__38703 = (i__19508__auto___38702 + (1));
i__19508__auto___38702 = G__38703;
continue;
} else {
}
break;
}

var G__38636 = args38634.length;
switch (G__38636) {
case 1:
return sablono.core.range_field38633.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field38633.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38634.length)].join('')));

}
});

sablono.core.range_field38633.cljs$core$IFn$_invoke$arity$1 = (function (name__25298__auto__){
return sablono.core.range_field38633.call(null,name__25298__auto__,null);
});

sablono.core.range_field38633.cljs$core$IFn$_invoke$arity$2 = (function (name__25298__auto__,value__25299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__25298__auto__,value__25299__auto__);
});

sablono.core.range_field38633.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field38633);

/**
 * Creates a search input field.
 */
sablono.core.search_field38637 = (function sablono$core$search_field38637(var_args){
var args38638 = [];
var len__19507__auto___38705 = arguments.length;
var i__19508__auto___38706 = (0);
while(true){
if((i__19508__auto___38706 < len__19507__auto___38705)){
args38638.push((arguments[i__19508__auto___38706]));

var G__38707 = (i__19508__auto___38706 + (1));
i__19508__auto___38706 = G__38707;
continue;
} else {
}
break;
}

var G__38640 = args38638.length;
switch (G__38640) {
case 1:
return sablono.core.search_field38637.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field38637.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38638.length)].join('')));

}
});

sablono.core.search_field38637.cljs$core$IFn$_invoke$arity$1 = (function (name__25298__auto__){
return sablono.core.search_field38637.call(null,name__25298__auto__,null);
});

sablono.core.search_field38637.cljs$core$IFn$_invoke$arity$2 = (function (name__25298__auto__,value__25299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__25298__auto__,value__25299__auto__);
});

sablono.core.search_field38637.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field38637);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field38641 = (function sablono$core$tel_field38641(var_args){
var args38642 = [];
var len__19507__auto___38709 = arguments.length;
var i__19508__auto___38710 = (0);
while(true){
if((i__19508__auto___38710 < len__19507__auto___38709)){
args38642.push((arguments[i__19508__auto___38710]));

var G__38711 = (i__19508__auto___38710 + (1));
i__19508__auto___38710 = G__38711;
continue;
} else {
}
break;
}

var G__38644 = args38642.length;
switch (G__38644) {
case 1:
return sablono.core.tel_field38641.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field38641.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38642.length)].join('')));

}
});

sablono.core.tel_field38641.cljs$core$IFn$_invoke$arity$1 = (function (name__25298__auto__){
return sablono.core.tel_field38641.call(null,name__25298__auto__,null);
});

sablono.core.tel_field38641.cljs$core$IFn$_invoke$arity$2 = (function (name__25298__auto__,value__25299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__25298__auto__,value__25299__auto__);
});

sablono.core.tel_field38641.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field38641);

/**
 * Creates a text input field.
 */
sablono.core.text_field38645 = (function sablono$core$text_field38645(var_args){
var args38646 = [];
var len__19507__auto___38713 = arguments.length;
var i__19508__auto___38714 = (0);
while(true){
if((i__19508__auto___38714 < len__19507__auto___38713)){
args38646.push((arguments[i__19508__auto___38714]));

var G__38715 = (i__19508__auto___38714 + (1));
i__19508__auto___38714 = G__38715;
continue;
} else {
}
break;
}

var G__38648 = args38646.length;
switch (G__38648) {
case 1:
return sablono.core.text_field38645.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field38645.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38646.length)].join('')));

}
});

sablono.core.text_field38645.cljs$core$IFn$_invoke$arity$1 = (function (name__25298__auto__){
return sablono.core.text_field38645.call(null,name__25298__auto__,null);
});

sablono.core.text_field38645.cljs$core$IFn$_invoke$arity$2 = (function (name__25298__auto__,value__25299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__25298__auto__,value__25299__auto__);
});

sablono.core.text_field38645.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field38645);

/**
 * Creates a time input field.
 */
sablono.core.time_field38649 = (function sablono$core$time_field38649(var_args){
var args38650 = [];
var len__19507__auto___38717 = arguments.length;
var i__19508__auto___38718 = (0);
while(true){
if((i__19508__auto___38718 < len__19507__auto___38717)){
args38650.push((arguments[i__19508__auto___38718]));

var G__38719 = (i__19508__auto___38718 + (1));
i__19508__auto___38718 = G__38719;
continue;
} else {
}
break;
}

var G__38652 = args38650.length;
switch (G__38652) {
case 1:
return sablono.core.time_field38649.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field38649.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38650.length)].join('')));

}
});

sablono.core.time_field38649.cljs$core$IFn$_invoke$arity$1 = (function (name__25298__auto__){
return sablono.core.time_field38649.call(null,name__25298__auto__,null);
});

sablono.core.time_field38649.cljs$core$IFn$_invoke$arity$2 = (function (name__25298__auto__,value__25299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__25298__auto__,value__25299__auto__);
});

sablono.core.time_field38649.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field38649);

/**
 * Creates a url input field.
 */
sablono.core.url_field38653 = (function sablono$core$url_field38653(var_args){
var args38654 = [];
var len__19507__auto___38721 = arguments.length;
var i__19508__auto___38722 = (0);
while(true){
if((i__19508__auto___38722 < len__19507__auto___38721)){
args38654.push((arguments[i__19508__auto___38722]));

var G__38723 = (i__19508__auto___38722 + (1));
i__19508__auto___38722 = G__38723;
continue;
} else {
}
break;
}

var G__38656 = args38654.length;
switch (G__38656) {
case 1:
return sablono.core.url_field38653.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field38653.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38654.length)].join('')));

}
});

sablono.core.url_field38653.cljs$core$IFn$_invoke$arity$1 = (function (name__25298__auto__){
return sablono.core.url_field38653.call(null,name__25298__auto__,null);
});

sablono.core.url_field38653.cljs$core$IFn$_invoke$arity$2 = (function (name__25298__auto__,value__25299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__25298__auto__,value__25299__auto__);
});

sablono.core.url_field38653.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field38653);

/**
 * Creates a week input field.
 */
sablono.core.week_field38657 = (function sablono$core$week_field38657(var_args){
var args38658 = [];
var len__19507__auto___38725 = arguments.length;
var i__19508__auto___38726 = (0);
while(true){
if((i__19508__auto___38726 < len__19507__auto___38725)){
args38658.push((arguments[i__19508__auto___38726]));

var G__38727 = (i__19508__auto___38726 + (1));
i__19508__auto___38726 = G__38727;
continue;
} else {
}
break;
}

var G__38660 = args38658.length;
switch (G__38660) {
case 1:
return sablono.core.week_field38657.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field38657.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38658.length)].join('')));

}
});

sablono.core.week_field38657.cljs$core$IFn$_invoke$arity$1 = (function (name__25298__auto__){
return sablono.core.week_field38657.call(null,name__25298__auto__,null);
});

sablono.core.week_field38657.cljs$core$IFn$_invoke$arity$2 = (function (name__25298__auto__,value__25299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__25298__auto__,value__25299__auto__);
});

sablono.core.week_field38657.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field38657);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box38729 = (function sablono$core$check_box38729(var_args){
var args38730 = [];
var len__19507__auto___38733 = arguments.length;
var i__19508__auto___38734 = (0);
while(true){
if((i__19508__auto___38734 < len__19507__auto___38733)){
args38730.push((arguments[i__19508__auto___38734]));

var G__38735 = (i__19508__auto___38734 + (1));
i__19508__auto___38734 = G__38735;
continue;
} else {
}
break;
}

var G__38732 = args38730.length;
switch (G__38732) {
case 1:
return sablono.core.check_box38729.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box38729.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box38729.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38730.length)].join('')));

}
});

sablono.core.check_box38729.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box38729.call(null,name,null);
});

sablono.core.check_box38729.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box38729.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box38729.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box38729.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box38729);
/**
 * Creates a radio button.
 */
sablono.core.radio_button38737 = (function sablono$core$radio_button38737(var_args){
var args38738 = [];
var len__19507__auto___38741 = arguments.length;
var i__19508__auto___38742 = (0);
while(true){
if((i__19508__auto___38742 < len__19507__auto___38741)){
args38738.push((arguments[i__19508__auto___38742]));

var G__38743 = (i__19508__auto___38742 + (1));
i__19508__auto___38742 = G__38743;
continue;
} else {
}
break;
}

var G__38740 = args38738.length;
switch (G__38740) {
case 1:
return sablono.core.radio_button38737.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button38737.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button38737.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38738.length)].join('')));

}
});

sablono.core.radio_button38737.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button38737.call(null,group,null);
});

sablono.core.radio_button38737.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button38737.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button38737.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button38737.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button38737);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options38745 = (function sablono$core$select_options38745(coll){
var iter__19218__auto__ = (function sablono$core$select_options38745_$_iter__38754(s__38755){
return (new cljs.core.LazySeq(null,(function (){
var s__38755__$1 = s__38755;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38755__$1);
if(temp__4657__auto__){
var s__38755__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38755__$2)){
var c__19216__auto__ = cljs.core.chunk_first.call(null,s__38755__$2);
var size__19217__auto__ = cljs.core.count.call(null,c__19216__auto__);
var b__38757 = cljs.core.chunk_buffer.call(null,size__19217__auto__);
if((function (){var i__38756 = (0);
while(true){
if((i__38756 < size__19217__auto__)){
var x = cljs.core._nth.call(null,c__19216__auto__,i__38756);
cljs.core.chunk_append.call(null,b__38757,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__38760 = x;
var text = cljs.core.nth.call(null,vec__38760,(0),null);
var val = cljs.core.nth.call(null,vec__38760,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__38760,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options38745.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38762 = (i__38756 + (1));
i__38756 = G__38762;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38757),sablono$core$select_options38745_$_iter__38754.call(null,cljs.core.chunk_rest.call(null,s__38755__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38757),null);
}
} else {
var x = cljs.core.first.call(null,s__38755__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__38761 = x;
var text = cljs.core.nth.call(null,vec__38761,(0),null);
var val = cljs.core.nth.call(null,vec__38761,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__38761,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options38745.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options38745_$_iter__38754.call(null,cljs.core.rest.call(null,s__38755__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19218__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options38745);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down38763 = (function sablono$core$drop_down38763(var_args){
var args38764 = [];
var len__19507__auto___38767 = arguments.length;
var i__19508__auto___38768 = (0);
while(true){
if((i__19508__auto___38768 < len__19507__auto___38767)){
args38764.push((arguments[i__19508__auto___38768]));

var G__38769 = (i__19508__auto___38768 + (1));
i__19508__auto___38768 = G__38769;
continue;
} else {
}
break;
}

var G__38766 = args38764.length;
switch (G__38766) {
case 2:
return sablono.core.drop_down38763.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38763.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38764.length)].join('')));

}
});

sablono.core.drop_down38763.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38763.call(null,name,options,null);
});

sablono.core.drop_down38763.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down38763.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down38763);
/**
 * Creates a text area element.
 */
sablono.core.text_area38771 = (function sablono$core$text_area38771(var_args){
var args38772 = [];
var len__19507__auto___38775 = arguments.length;
var i__19508__auto___38776 = (0);
while(true){
if((i__19508__auto___38776 < len__19507__auto___38775)){
args38772.push((arguments[i__19508__auto___38776]));

var G__38777 = (i__19508__auto___38776 + (1));
i__19508__auto___38776 = G__38777;
continue;
} else {
}
break;
}

var G__38774 = args38772.length;
switch (G__38774) {
case 1:
return sablono.core.text_area38771.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38771.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38772.length)].join('')));

}
});

sablono.core.text_area38771.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area38771.call(null,name,null);
});

sablono.core.text_area38771.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area38771.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area38771);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38779 = (function sablono$core$label38779(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label38779);
/**
 * Creates a submit button.
 */
sablono.core.submit_button38780 = (function sablono$core$submit_button38780(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button38780);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button38781 = (function sablono$core$reset_button38781(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button38781);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to38782 = (function sablono$core$form_to38782(var_args){
var args__19514__auto__ = [];
var len__19507__auto___38787 = arguments.length;
var i__19508__auto___38788 = (0);
while(true){
if((i__19508__auto___38788 < len__19507__auto___38787)){
args__19514__auto__.push((arguments[i__19508__auto___38788]));

var G__38789 = (i__19508__auto___38788 + (1));
i__19508__auto___38788 = G__38789;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to38782.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

sablono.core.form_to38782.cljs$core$IFn$_invoke$arity$variadic = (function (p__38785,body){
var vec__38786 = p__38785;
var method = cljs.core.nth.call(null,vec__38786,(0),null);
var action = cljs.core.nth.call(null,vec__38786,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to38782.cljs$lang$maxFixedArity = (1);

sablono.core.form_to38782.cljs$lang$applyTo = (function (seq38783){
var G__38784 = cljs.core.first.call(null,seq38783);
var seq38783__$1 = cljs.core.next.call(null,seq38783);
return sablono.core.form_to38782.cljs$core$IFn$_invoke$arity$variadic(G__38784,seq38783__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to38782);

//# sourceMappingURL=core.js.map?rel=1458781543207
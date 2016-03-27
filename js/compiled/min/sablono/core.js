// Compiled by ClojureScript 1.8.34 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__31937__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__31936 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__31936,(0),null);
var body = cljs.core.nthnext.call(null,vec__31936,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__31937 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31938__i = 0, G__31938__a = new Array(arguments.length -  0);
while (G__31938__i < G__31938__a.length) {G__31938__a[G__31938__i] = arguments[G__31938__i + 0]; ++G__31938__i;}
  args = new cljs.core.IndexedSeq(G__31938__a,0);
} 
return G__31937__delegate.call(this,args);};
G__31937.cljs$lang$maxFixedArity = 0;
G__31937.cljs$lang$applyTo = (function (arglist__31939){
var args = cljs.core.seq(arglist__31939);
return G__31937__delegate(args);
});
G__31937.cljs$core$IFn$_invoke$arity$variadic = G__31937__delegate;
return G__31937;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__6990__auto__ = (function sablono$core$update_arglists_$_iter__31944(s__31945){
return (new cljs.core.LazySeq(null,(function (){
var s__31945__$1 = s__31945;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31945__$1);
if(temp__4657__auto__){
var s__31945__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31945__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__31945__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__31947 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__31946 = (0);
while(true){
if((i__31946 < size__6989__auto__)){
var args = cljs.core._nth.call(null,c__6988__auto__,i__31946);
cljs.core.chunk_append.call(null,b__31947,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__31948 = (i__31946 + (1));
i__31946 = G__31948;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31947),sablono$core$update_arglists_$_iter__31944.call(null,cljs.core.chunk_rest.call(null,s__31945__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31947),null);
}
} else {
var args = cljs.core.first.call(null,s__31945__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__31944.call(null,cljs.core.rest.call(null,s__31945__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,arglists);
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
var args__7286__auto__ = [];
var len__7279__auto___31954 = arguments.length;
var i__7280__auto___31955 = (0);
while(true){
if((i__7280__auto___31955 < len__7279__auto___31954)){
args__7286__auto__.push((arguments[i__7280__auto___31955]));

var G__31956 = (i__7280__auto___31955 + (1));
i__7280__auto___31955 = G__31956;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((0) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7287__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__6990__auto__ = (function sablono$core$iter__31950(s__31951){
return (new cljs.core.LazySeq(null,(function (){
var s__31951__$1 = s__31951;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31951__$1);
if(temp__4657__auto__){
var s__31951__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31951__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__31951__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__31953 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__31952 = (0);
while(true){
if((i__31952 < size__6989__auto__)){
var style = cljs.core._nth.call(null,c__6988__auto__,i__31952);
cljs.core.chunk_append.call(null,b__31953,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__31957 = (i__31952 + (1));
i__31952 = G__31957;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31953),sablono$core$iter__31950.call(null,cljs.core.chunk_rest.call(null,s__31951__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31953),null);
}
} else {
var style = cljs.core.first.call(null,s__31951__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__31950.call(null,cljs.core.rest.call(null,s__31951__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq31949){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31949));
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
sablono.core.link_to31958 = (function sablono$core$link_to31958(var_args){
var args__7286__auto__ = [];
var len__7279__auto___31961 = arguments.length;
var i__7280__auto___31962 = (0);
while(true){
if((i__7280__auto___31962 < len__7279__auto___31961)){
args__7286__auto__.push((arguments[i__7280__auto___31962]));

var G__31963 = (i__7280__auto___31962 + (1));
i__7280__auto___31962 = G__31963;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to31958.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

sablono.core.link_to31958.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to31958.cljs$lang$maxFixedArity = (1);

sablono.core.link_to31958.cljs$lang$applyTo = (function (seq31959){
var G__31960 = cljs.core.first.call(null,seq31959);
var seq31959__$1 = cljs.core.next.call(null,seq31959);
return sablono.core.link_to31958.cljs$core$IFn$_invoke$arity$variadic(G__31960,seq31959__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to31958);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to31964 = (function sablono$core$mail_to31964(var_args){
var args__7286__auto__ = [];
var len__7279__auto___31969 = arguments.length;
var i__7280__auto___31970 = (0);
while(true){
if((i__7280__auto___31970 < len__7279__auto___31969)){
args__7286__auto__.push((arguments[i__7280__auto___31970]));

var G__31971 = (i__7280__auto___31970 + (1));
i__7280__auto___31970 = G__31971;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to31964.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

sablono.core.mail_to31964.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__31967){
var vec__31968 = p__31967;
var content = cljs.core.nth.call(null,vec__31968,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6210__auto__ = content;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to31964.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to31964.cljs$lang$applyTo = (function (seq31965){
var G__31966 = cljs.core.first.call(null,seq31965);
var seq31965__$1 = cljs.core.next.call(null,seq31965);
return sablono.core.mail_to31964.cljs$core$IFn$_invoke$arity$variadic(G__31966,seq31965__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to31964);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list31972 = (function sablono$core$unordered_list31972(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__6990__auto__ = (function sablono$core$unordered_list31972_$_iter__31977(s__31978){
return (new cljs.core.LazySeq(null,(function (){
var s__31978__$1 = s__31978;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31978__$1);
if(temp__4657__auto__){
var s__31978__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31978__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__31978__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__31980 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__31979 = (0);
while(true){
if((i__31979 < size__6989__auto__)){
var x = cljs.core._nth.call(null,c__6988__auto__,i__31979);
cljs.core.chunk_append.call(null,b__31980,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__31981 = (i__31979 + (1));
i__31979 = G__31981;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31980),sablono$core$unordered_list31972_$_iter__31977.call(null,cljs.core.chunk_rest.call(null,s__31978__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31980),null);
}
} else {
var x = cljs.core.first.call(null,s__31978__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list31972_$_iter__31977.call(null,cljs.core.rest.call(null,s__31978__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list31972);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list31982 = (function sablono$core$ordered_list31982(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__6990__auto__ = (function sablono$core$ordered_list31982_$_iter__31987(s__31988){
return (new cljs.core.LazySeq(null,(function (){
var s__31988__$1 = s__31988;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31988__$1);
if(temp__4657__auto__){
var s__31988__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31988__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__31988__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__31990 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__31989 = (0);
while(true){
if((i__31989 < size__6989__auto__)){
var x = cljs.core._nth.call(null,c__6988__auto__,i__31989);
cljs.core.chunk_append.call(null,b__31990,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__31991 = (i__31989 + (1));
i__31989 = G__31991;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31990),sablono$core$ordered_list31982_$_iter__31987.call(null,cljs.core.chunk_rest.call(null,s__31988__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31990),null);
}
} else {
var x = cljs.core.first.call(null,s__31988__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list31982_$_iter__31987.call(null,cljs.core.rest.call(null,s__31988__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list31982);
/**
 * Create an image element.
 */
sablono.core.image31992 = (function sablono$core$image31992(var_args){
var args31993 = [];
var len__7279__auto___31996 = arguments.length;
var i__7280__auto___31997 = (0);
while(true){
if((i__7280__auto___31997 < len__7279__auto___31996)){
args31993.push((arguments[i__7280__auto___31997]));

var G__31998 = (i__7280__auto___31997 + (1));
i__7280__auto___31997 = G__31998;
continue;
} else {
}
break;
}

var G__31995 = args31993.length;
switch (G__31995) {
case 1:
return sablono.core.image31992.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image31992.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31993.length)].join('')));

}
});

sablono.core.image31992.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image31992.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image31992.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image31992);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__32000_SHARP_,p2__32001_SHARP_){
return [cljs.core.str(p1__32000_SHARP_),cljs.core.str("["),cljs.core.str(p2__32001_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__32002_SHARP_,p2__32003_SHARP_){
return [cljs.core.str(p1__32002_SHARP_),cljs.core.str("-"),cljs.core.str(p2__32003_SHARP_)].join('');
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
sablono.core.color_field32004 = (function sablono$core$color_field32004(var_args){
var args32005 = [];
var len__7279__auto___32072 = arguments.length;
var i__7280__auto___32073 = (0);
while(true){
if((i__7280__auto___32073 < len__7279__auto___32072)){
args32005.push((arguments[i__7280__auto___32073]));

var G__32074 = (i__7280__auto___32073 + (1));
i__7280__auto___32073 = G__32074;
continue;
} else {
}
break;
}

var G__32007 = args32005.length;
switch (G__32007) {
case 1:
return sablono.core.color_field32004.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field32004.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32005.length)].join('')));

}
});

sablono.core.color_field32004.cljs$core$IFn$_invoke$arity$1 = (function (name__31925__auto__){
return sablono.core.color_field32004.call(null,name__31925__auto__,null);
});

sablono.core.color_field32004.cljs$core$IFn$_invoke$arity$2 = (function (name__31925__auto__,value__31926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__31925__auto__,value__31926__auto__);
});

sablono.core.color_field32004.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field32004);

/**
 * Creates a date input field.
 */
sablono.core.date_field32008 = (function sablono$core$date_field32008(var_args){
var args32009 = [];
var len__7279__auto___32076 = arguments.length;
var i__7280__auto___32077 = (0);
while(true){
if((i__7280__auto___32077 < len__7279__auto___32076)){
args32009.push((arguments[i__7280__auto___32077]));

var G__32078 = (i__7280__auto___32077 + (1));
i__7280__auto___32077 = G__32078;
continue;
} else {
}
break;
}

var G__32011 = args32009.length;
switch (G__32011) {
case 1:
return sablono.core.date_field32008.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field32008.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32009.length)].join('')));

}
});

sablono.core.date_field32008.cljs$core$IFn$_invoke$arity$1 = (function (name__31925__auto__){
return sablono.core.date_field32008.call(null,name__31925__auto__,null);
});

sablono.core.date_field32008.cljs$core$IFn$_invoke$arity$2 = (function (name__31925__auto__,value__31926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__31925__auto__,value__31926__auto__);
});

sablono.core.date_field32008.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field32008);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field32012 = (function sablono$core$datetime_field32012(var_args){
var args32013 = [];
var len__7279__auto___32080 = arguments.length;
var i__7280__auto___32081 = (0);
while(true){
if((i__7280__auto___32081 < len__7279__auto___32080)){
args32013.push((arguments[i__7280__auto___32081]));

var G__32082 = (i__7280__auto___32081 + (1));
i__7280__auto___32081 = G__32082;
continue;
} else {
}
break;
}

var G__32015 = args32013.length;
switch (G__32015) {
case 1:
return sablono.core.datetime_field32012.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field32012.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32013.length)].join('')));

}
});

sablono.core.datetime_field32012.cljs$core$IFn$_invoke$arity$1 = (function (name__31925__auto__){
return sablono.core.datetime_field32012.call(null,name__31925__auto__,null);
});

sablono.core.datetime_field32012.cljs$core$IFn$_invoke$arity$2 = (function (name__31925__auto__,value__31926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__31925__auto__,value__31926__auto__);
});

sablono.core.datetime_field32012.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field32012);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field32016 = (function sablono$core$datetime_local_field32016(var_args){
var args32017 = [];
var len__7279__auto___32084 = arguments.length;
var i__7280__auto___32085 = (0);
while(true){
if((i__7280__auto___32085 < len__7279__auto___32084)){
args32017.push((arguments[i__7280__auto___32085]));

var G__32086 = (i__7280__auto___32085 + (1));
i__7280__auto___32085 = G__32086;
continue;
} else {
}
break;
}

var G__32019 = args32017.length;
switch (G__32019) {
case 1:
return sablono.core.datetime_local_field32016.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field32016.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32017.length)].join('')));

}
});

sablono.core.datetime_local_field32016.cljs$core$IFn$_invoke$arity$1 = (function (name__31925__auto__){
return sablono.core.datetime_local_field32016.call(null,name__31925__auto__,null);
});

sablono.core.datetime_local_field32016.cljs$core$IFn$_invoke$arity$2 = (function (name__31925__auto__,value__31926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__31925__auto__,value__31926__auto__);
});

sablono.core.datetime_local_field32016.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field32016);

/**
 * Creates a email input field.
 */
sablono.core.email_field32020 = (function sablono$core$email_field32020(var_args){
var args32021 = [];
var len__7279__auto___32088 = arguments.length;
var i__7280__auto___32089 = (0);
while(true){
if((i__7280__auto___32089 < len__7279__auto___32088)){
args32021.push((arguments[i__7280__auto___32089]));

var G__32090 = (i__7280__auto___32089 + (1));
i__7280__auto___32089 = G__32090;
continue;
} else {
}
break;
}

var G__32023 = args32021.length;
switch (G__32023) {
case 1:
return sablono.core.email_field32020.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field32020.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32021.length)].join('')));

}
});

sablono.core.email_field32020.cljs$core$IFn$_invoke$arity$1 = (function (name__31925__auto__){
return sablono.core.email_field32020.call(null,name__31925__auto__,null);
});

sablono.core.email_field32020.cljs$core$IFn$_invoke$arity$2 = (function (name__31925__auto__,value__31926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__31925__auto__,value__31926__auto__);
});

sablono.core.email_field32020.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field32020);

/**
 * Creates a file input field.
 */
sablono.core.file_field32024 = (function sablono$core$file_field32024(var_args){
var args32025 = [];
var len__7279__auto___32092 = arguments.length;
var i__7280__auto___32093 = (0);
while(true){
if((i__7280__auto___32093 < len__7279__auto___32092)){
args32025.push((arguments[i__7280__auto___32093]));

var G__32094 = (i__7280__auto___32093 + (1));
i__7280__auto___32093 = G__32094;
continue;
} else {
}
break;
}

var G__32027 = args32025.length;
switch (G__32027) {
case 1:
return sablono.core.file_field32024.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field32024.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32025.length)].join('')));

}
});

sablono.core.file_field32024.cljs$core$IFn$_invoke$arity$1 = (function (name__31925__auto__){
return sablono.core.file_field32024.call(null,name__31925__auto__,null);
});

sablono.core.file_field32024.cljs$core$IFn$_invoke$arity$2 = (function (name__31925__auto__,value__31926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__31925__auto__,value__31926__auto__);
});

sablono.core.file_field32024.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field32024);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field32028 = (function sablono$core$hidden_field32028(var_args){
var args32029 = [];
var len__7279__auto___32096 = arguments.length;
var i__7280__auto___32097 = (0);
while(true){
if((i__7280__auto___32097 < len__7279__auto___32096)){
args32029.push((arguments[i__7280__auto___32097]));

var G__32098 = (i__7280__auto___32097 + (1));
i__7280__auto___32097 = G__32098;
continue;
} else {
}
break;
}

var G__32031 = args32029.length;
switch (G__32031) {
case 1:
return sablono.core.hidden_field32028.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field32028.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32029.length)].join('')));

}
});

sablono.core.hidden_field32028.cljs$core$IFn$_invoke$arity$1 = (function (name__31925__auto__){
return sablono.core.hidden_field32028.call(null,name__31925__auto__,null);
});

sablono.core.hidden_field32028.cljs$core$IFn$_invoke$arity$2 = (function (name__31925__auto__,value__31926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__31925__auto__,value__31926__auto__);
});

sablono.core.hidden_field32028.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field32028);

/**
 * Creates a month input field.
 */
sablono.core.month_field32032 = (function sablono$core$month_field32032(var_args){
var args32033 = [];
var len__7279__auto___32100 = arguments.length;
var i__7280__auto___32101 = (0);
while(true){
if((i__7280__auto___32101 < len__7279__auto___32100)){
args32033.push((arguments[i__7280__auto___32101]));

var G__32102 = (i__7280__auto___32101 + (1));
i__7280__auto___32101 = G__32102;
continue;
} else {
}
break;
}

var G__32035 = args32033.length;
switch (G__32035) {
case 1:
return sablono.core.month_field32032.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field32032.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32033.length)].join('')));

}
});

sablono.core.month_field32032.cljs$core$IFn$_invoke$arity$1 = (function (name__31925__auto__){
return sablono.core.month_field32032.call(null,name__31925__auto__,null);
});

sablono.core.month_field32032.cljs$core$IFn$_invoke$arity$2 = (function (name__31925__auto__,value__31926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__31925__auto__,value__31926__auto__);
});

sablono.core.month_field32032.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field32032);

/**
 * Creates a number input field.
 */
sablono.core.number_field32036 = (function sablono$core$number_field32036(var_args){
var args32037 = [];
var len__7279__auto___32104 = arguments.length;
var i__7280__auto___32105 = (0);
while(true){
if((i__7280__auto___32105 < len__7279__auto___32104)){
args32037.push((arguments[i__7280__auto___32105]));

var G__32106 = (i__7280__auto___32105 + (1));
i__7280__auto___32105 = G__32106;
continue;
} else {
}
break;
}

var G__32039 = args32037.length;
switch (G__32039) {
case 1:
return sablono.core.number_field32036.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field32036.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32037.length)].join('')));

}
});

sablono.core.number_field32036.cljs$core$IFn$_invoke$arity$1 = (function (name__31925__auto__){
return sablono.core.number_field32036.call(null,name__31925__auto__,null);
});

sablono.core.number_field32036.cljs$core$IFn$_invoke$arity$2 = (function (name__31925__auto__,value__31926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__31925__auto__,value__31926__auto__);
});

sablono.core.number_field32036.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field32036);

/**
 * Creates a password input field.
 */
sablono.core.password_field32040 = (function sablono$core$password_field32040(var_args){
var args32041 = [];
var len__7279__auto___32108 = arguments.length;
var i__7280__auto___32109 = (0);
while(true){
if((i__7280__auto___32109 < len__7279__auto___32108)){
args32041.push((arguments[i__7280__auto___32109]));

var G__32110 = (i__7280__auto___32109 + (1));
i__7280__auto___32109 = G__32110;
continue;
} else {
}
break;
}

var G__32043 = args32041.length;
switch (G__32043) {
case 1:
return sablono.core.password_field32040.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field32040.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32041.length)].join('')));

}
});

sablono.core.password_field32040.cljs$core$IFn$_invoke$arity$1 = (function (name__31925__auto__){
return sablono.core.password_field32040.call(null,name__31925__auto__,null);
});

sablono.core.password_field32040.cljs$core$IFn$_invoke$arity$2 = (function (name__31925__auto__,value__31926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__31925__auto__,value__31926__auto__);
});

sablono.core.password_field32040.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field32040);

/**
 * Creates a range input field.
 */
sablono.core.range_field32044 = (function sablono$core$range_field32044(var_args){
var args32045 = [];
var len__7279__auto___32112 = arguments.length;
var i__7280__auto___32113 = (0);
while(true){
if((i__7280__auto___32113 < len__7279__auto___32112)){
args32045.push((arguments[i__7280__auto___32113]));

var G__32114 = (i__7280__auto___32113 + (1));
i__7280__auto___32113 = G__32114;
continue;
} else {
}
break;
}

var G__32047 = args32045.length;
switch (G__32047) {
case 1:
return sablono.core.range_field32044.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field32044.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32045.length)].join('')));

}
});

sablono.core.range_field32044.cljs$core$IFn$_invoke$arity$1 = (function (name__31925__auto__){
return sablono.core.range_field32044.call(null,name__31925__auto__,null);
});

sablono.core.range_field32044.cljs$core$IFn$_invoke$arity$2 = (function (name__31925__auto__,value__31926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__31925__auto__,value__31926__auto__);
});

sablono.core.range_field32044.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field32044);

/**
 * Creates a search input field.
 */
sablono.core.search_field32048 = (function sablono$core$search_field32048(var_args){
var args32049 = [];
var len__7279__auto___32116 = arguments.length;
var i__7280__auto___32117 = (0);
while(true){
if((i__7280__auto___32117 < len__7279__auto___32116)){
args32049.push((arguments[i__7280__auto___32117]));

var G__32118 = (i__7280__auto___32117 + (1));
i__7280__auto___32117 = G__32118;
continue;
} else {
}
break;
}

var G__32051 = args32049.length;
switch (G__32051) {
case 1:
return sablono.core.search_field32048.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field32048.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32049.length)].join('')));

}
});

sablono.core.search_field32048.cljs$core$IFn$_invoke$arity$1 = (function (name__31925__auto__){
return sablono.core.search_field32048.call(null,name__31925__auto__,null);
});

sablono.core.search_field32048.cljs$core$IFn$_invoke$arity$2 = (function (name__31925__auto__,value__31926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__31925__auto__,value__31926__auto__);
});

sablono.core.search_field32048.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field32048);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field32052 = (function sablono$core$tel_field32052(var_args){
var args32053 = [];
var len__7279__auto___32120 = arguments.length;
var i__7280__auto___32121 = (0);
while(true){
if((i__7280__auto___32121 < len__7279__auto___32120)){
args32053.push((arguments[i__7280__auto___32121]));

var G__32122 = (i__7280__auto___32121 + (1));
i__7280__auto___32121 = G__32122;
continue;
} else {
}
break;
}

var G__32055 = args32053.length;
switch (G__32055) {
case 1:
return sablono.core.tel_field32052.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field32052.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32053.length)].join('')));

}
});

sablono.core.tel_field32052.cljs$core$IFn$_invoke$arity$1 = (function (name__31925__auto__){
return sablono.core.tel_field32052.call(null,name__31925__auto__,null);
});

sablono.core.tel_field32052.cljs$core$IFn$_invoke$arity$2 = (function (name__31925__auto__,value__31926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__31925__auto__,value__31926__auto__);
});

sablono.core.tel_field32052.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field32052);

/**
 * Creates a text input field.
 */
sablono.core.text_field32056 = (function sablono$core$text_field32056(var_args){
var args32057 = [];
var len__7279__auto___32124 = arguments.length;
var i__7280__auto___32125 = (0);
while(true){
if((i__7280__auto___32125 < len__7279__auto___32124)){
args32057.push((arguments[i__7280__auto___32125]));

var G__32126 = (i__7280__auto___32125 + (1));
i__7280__auto___32125 = G__32126;
continue;
} else {
}
break;
}

var G__32059 = args32057.length;
switch (G__32059) {
case 1:
return sablono.core.text_field32056.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field32056.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32057.length)].join('')));

}
});

sablono.core.text_field32056.cljs$core$IFn$_invoke$arity$1 = (function (name__31925__auto__){
return sablono.core.text_field32056.call(null,name__31925__auto__,null);
});

sablono.core.text_field32056.cljs$core$IFn$_invoke$arity$2 = (function (name__31925__auto__,value__31926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__31925__auto__,value__31926__auto__);
});

sablono.core.text_field32056.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field32056);

/**
 * Creates a time input field.
 */
sablono.core.time_field32060 = (function sablono$core$time_field32060(var_args){
var args32061 = [];
var len__7279__auto___32128 = arguments.length;
var i__7280__auto___32129 = (0);
while(true){
if((i__7280__auto___32129 < len__7279__auto___32128)){
args32061.push((arguments[i__7280__auto___32129]));

var G__32130 = (i__7280__auto___32129 + (1));
i__7280__auto___32129 = G__32130;
continue;
} else {
}
break;
}

var G__32063 = args32061.length;
switch (G__32063) {
case 1:
return sablono.core.time_field32060.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field32060.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32061.length)].join('')));

}
});

sablono.core.time_field32060.cljs$core$IFn$_invoke$arity$1 = (function (name__31925__auto__){
return sablono.core.time_field32060.call(null,name__31925__auto__,null);
});

sablono.core.time_field32060.cljs$core$IFn$_invoke$arity$2 = (function (name__31925__auto__,value__31926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__31925__auto__,value__31926__auto__);
});

sablono.core.time_field32060.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field32060);

/**
 * Creates a url input field.
 */
sablono.core.url_field32064 = (function sablono$core$url_field32064(var_args){
var args32065 = [];
var len__7279__auto___32132 = arguments.length;
var i__7280__auto___32133 = (0);
while(true){
if((i__7280__auto___32133 < len__7279__auto___32132)){
args32065.push((arguments[i__7280__auto___32133]));

var G__32134 = (i__7280__auto___32133 + (1));
i__7280__auto___32133 = G__32134;
continue;
} else {
}
break;
}

var G__32067 = args32065.length;
switch (G__32067) {
case 1:
return sablono.core.url_field32064.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field32064.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32065.length)].join('')));

}
});

sablono.core.url_field32064.cljs$core$IFn$_invoke$arity$1 = (function (name__31925__auto__){
return sablono.core.url_field32064.call(null,name__31925__auto__,null);
});

sablono.core.url_field32064.cljs$core$IFn$_invoke$arity$2 = (function (name__31925__auto__,value__31926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__31925__auto__,value__31926__auto__);
});

sablono.core.url_field32064.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field32064);

/**
 * Creates a week input field.
 */
sablono.core.week_field32068 = (function sablono$core$week_field32068(var_args){
var args32069 = [];
var len__7279__auto___32136 = arguments.length;
var i__7280__auto___32137 = (0);
while(true){
if((i__7280__auto___32137 < len__7279__auto___32136)){
args32069.push((arguments[i__7280__auto___32137]));

var G__32138 = (i__7280__auto___32137 + (1));
i__7280__auto___32137 = G__32138;
continue;
} else {
}
break;
}

var G__32071 = args32069.length;
switch (G__32071) {
case 1:
return sablono.core.week_field32068.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field32068.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32069.length)].join('')));

}
});

sablono.core.week_field32068.cljs$core$IFn$_invoke$arity$1 = (function (name__31925__auto__){
return sablono.core.week_field32068.call(null,name__31925__auto__,null);
});

sablono.core.week_field32068.cljs$core$IFn$_invoke$arity$2 = (function (name__31925__auto__,value__31926__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__31925__auto__,value__31926__auto__);
});

sablono.core.week_field32068.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field32068);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box32140 = (function sablono$core$check_box32140(var_args){
var args32141 = [];
var len__7279__auto___32144 = arguments.length;
var i__7280__auto___32145 = (0);
while(true){
if((i__7280__auto___32145 < len__7279__auto___32144)){
args32141.push((arguments[i__7280__auto___32145]));

var G__32146 = (i__7280__auto___32145 + (1));
i__7280__auto___32145 = G__32146;
continue;
} else {
}
break;
}

var G__32143 = args32141.length;
switch (G__32143) {
case 1:
return sablono.core.check_box32140.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box32140.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box32140.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32141.length)].join('')));

}
});

sablono.core.check_box32140.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box32140.call(null,name,null);
});

sablono.core.check_box32140.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box32140.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box32140.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box32140.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box32140);
/**
 * Creates a radio button.
 */
sablono.core.radio_button32148 = (function sablono$core$radio_button32148(var_args){
var args32149 = [];
var len__7279__auto___32152 = arguments.length;
var i__7280__auto___32153 = (0);
while(true){
if((i__7280__auto___32153 < len__7279__auto___32152)){
args32149.push((arguments[i__7280__auto___32153]));

var G__32154 = (i__7280__auto___32153 + (1));
i__7280__auto___32153 = G__32154;
continue;
} else {
}
break;
}

var G__32151 = args32149.length;
switch (G__32151) {
case 1:
return sablono.core.radio_button32148.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button32148.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button32148.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32149.length)].join('')));

}
});

sablono.core.radio_button32148.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button32148.call(null,group,null);
});

sablono.core.radio_button32148.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button32148.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button32148.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button32148.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button32148);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options32156 = (function sablono$core$select_options32156(coll){
var iter__6990__auto__ = (function sablono$core$select_options32156_$_iter__32165(s__32166){
return (new cljs.core.LazySeq(null,(function (){
var s__32166__$1 = s__32166;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32166__$1);
if(temp__4657__auto__){
var s__32166__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32166__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__32166__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__32168 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__32167 = (0);
while(true){
if((i__32167 < size__6989__auto__)){
var x = cljs.core._nth.call(null,c__6988__auto__,i__32167);
cljs.core.chunk_append.call(null,b__32168,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32171 = x;
var text = cljs.core.nth.call(null,vec__32171,(0),null);
var val = cljs.core.nth.call(null,vec__32171,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32171,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32156.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__32173 = (i__32167 + (1));
i__32167 = G__32173;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32168),sablono$core$select_options32156_$_iter__32165.call(null,cljs.core.chunk_rest.call(null,s__32166__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32168),null);
}
} else {
var x = cljs.core.first.call(null,s__32166__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32172 = x;
var text = cljs.core.nth.call(null,vec__32172,(0),null);
var val = cljs.core.nth.call(null,vec__32172,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32172,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32156.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options32156_$_iter__32165.call(null,cljs.core.rest.call(null,s__32166__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options32156);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down32174 = (function sablono$core$drop_down32174(var_args){
var args32175 = [];
var len__7279__auto___32178 = arguments.length;
var i__7280__auto___32179 = (0);
while(true){
if((i__7280__auto___32179 < len__7279__auto___32178)){
args32175.push((arguments[i__7280__auto___32179]));

var G__32180 = (i__7280__auto___32179 + (1));
i__7280__auto___32179 = G__32180;
continue;
} else {
}
break;
}

var G__32177 = args32175.length;
switch (G__32177) {
case 2:
return sablono.core.drop_down32174.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down32174.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32175.length)].join('')));

}
});

sablono.core.drop_down32174.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down32174.call(null,name,options,null);
});

sablono.core.drop_down32174.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down32174.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down32174);
/**
 * Creates a text area element.
 */
sablono.core.text_area32182 = (function sablono$core$text_area32182(var_args){
var args32183 = [];
var len__7279__auto___32186 = arguments.length;
var i__7280__auto___32187 = (0);
while(true){
if((i__7280__auto___32187 < len__7279__auto___32186)){
args32183.push((arguments[i__7280__auto___32187]));

var G__32188 = (i__7280__auto___32187 + (1));
i__7280__auto___32187 = G__32188;
continue;
} else {
}
break;
}

var G__32185 = args32183.length;
switch (G__32185) {
case 1:
return sablono.core.text_area32182.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area32182.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32183.length)].join('')));

}
});

sablono.core.text_area32182.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area32182.call(null,name,null);
});

sablono.core.text_area32182.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area32182.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area32182);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label32190 = (function sablono$core$label32190(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label32190);
/**
 * Creates a submit button.
 */
sablono.core.submit_button32191 = (function sablono$core$submit_button32191(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button32191);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button32192 = (function sablono$core$reset_button32192(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button32192);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to32193 = (function sablono$core$form_to32193(var_args){
var args__7286__auto__ = [];
var len__7279__auto___32198 = arguments.length;
var i__7280__auto___32199 = (0);
while(true){
if((i__7280__auto___32199 < len__7279__auto___32198)){
args__7286__auto__.push((arguments[i__7280__auto___32199]));

var G__32200 = (i__7280__auto___32199 + (1));
i__7280__auto___32199 = G__32200;
continue;
} else {
}
break;
}

var argseq__7287__auto__ = ((((1) < args__7286__auto__.length))?(new cljs.core.IndexedSeq(args__7286__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to32193.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7287__auto__);
});

sablono.core.form_to32193.cljs$core$IFn$_invoke$arity$variadic = (function (p__32196,body){
var vec__32197 = p__32196;
var method = cljs.core.nth.call(null,vec__32197,(0),null);
var action = cljs.core.nth.call(null,vec__32197,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to32193.cljs$lang$maxFixedArity = (1);

sablono.core.form_to32193.cljs$lang$applyTo = (function (seq32194){
var G__32195 = cljs.core.first.call(null,seq32194);
var seq32194__$1 = cljs.core.next.call(null,seq32194);
return sablono.core.form_to32193.cljs$core$IFn$_invoke$arity$variadic(G__32195,seq32194__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to32193);

// Compiled by ClojureScript 1.8.34 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__4655__auto__ = goog.global.document;
if(cljs.core.truth_(temp__4655__auto__)){
var doc = temp__4655__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__19423__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_35595_35597 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_35596_35598 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_35595_35597,_STAR_print_fn_STAR_35596_35598,sb__19423__auto__){
return (function (x__19424__auto__){
return sb__19423__auto__.append(x__19424__auto__);
});})(_STAR_print_newline_STAR_35595_35597,_STAR_print_fn_STAR_35596_35598,sb__19423__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_35596_35598;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_35595_35597;
}
return [cljs.core.str(sb__19423__auto__)].join('');
}catch (e35593){if((e35593 instanceof Error)){
var e1 = e35593;
try{return obj.toString();
}catch (e35594){if((e35594 instanceof Error)){
var e2 = e35594;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e35594;

}
}} else {
throw e35593;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_35600 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_35600;
}});

//# sourceMappingURL=utils.js.map?rel=1458781540764
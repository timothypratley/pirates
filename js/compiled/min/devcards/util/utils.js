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
try{var sb__7195__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_27620_27622 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_27621_27623 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_27620_27622,_STAR_print_fn_STAR_27621_27623,sb__7195__auto__){
return (function (x__7196__auto__){
return sb__7195__auto__.append(x__7196__auto__);
});})(_STAR_print_newline_STAR_27620_27622,_STAR_print_fn_STAR_27621_27623,sb__7195__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27621_27623;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27620_27622;
}
return [cljs.core.str(sb__7195__auto__)].join('');
}catch (e27618){if((e27618 instanceof Error)){
var e1 = e27618;
try{return obj.toString();
}catch (e27619){if((e27619 instanceof Error)){
var e2 = e27619;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e27619;

}
}} else {
throw e27618;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_27625 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_27625;
}});

// Compiled by ClojureScript 1.8.34 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18438__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18438__auto__){
return or__18438__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18438__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__43061_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__43061_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__43066 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__43067 = null;
var count__43068 = (0);
var i__43069 = (0);
while(true){
if((i__43069 < count__43068)){
var n = cljs.core._nth.call(null,chunk__43067,i__43069);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__43070 = seq__43066;
var G__43071 = chunk__43067;
var G__43072 = count__43068;
var G__43073 = (i__43069 + (1));
seq__43066 = G__43070;
chunk__43067 = G__43071;
count__43068 = G__43072;
i__43069 = G__43073;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43066);
if(temp__4657__auto__){
var seq__43066__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43066__$1)){
var c__19249__auto__ = cljs.core.chunk_first.call(null,seq__43066__$1);
var G__43074 = cljs.core.chunk_rest.call(null,seq__43066__$1);
var G__43075 = c__19249__auto__;
var G__43076 = cljs.core.count.call(null,c__19249__auto__);
var G__43077 = (0);
seq__43066 = G__43074;
chunk__43067 = G__43075;
count__43068 = G__43076;
i__43069 = G__43077;
continue;
} else {
var n = cljs.core.first.call(null,seq__43066__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__43078 = cljs.core.next.call(null,seq__43066__$1);
var G__43079 = null;
var G__43080 = (0);
var G__43081 = (0);
seq__43066 = G__43078;
chunk__43067 = G__43079;
count__43068 = G__43080;
i__43069 = G__43081;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__43120_43127 = cljs.core.seq.call(null,deps);
var chunk__43121_43128 = null;
var count__43122_43129 = (0);
var i__43123_43130 = (0);
while(true){
if((i__43123_43130 < count__43122_43129)){
var dep_43131 = cljs.core._nth.call(null,chunk__43121_43128,i__43123_43130);
topo_sort_helper_STAR_.call(null,dep_43131,(depth + (1)),state);

var G__43132 = seq__43120_43127;
var G__43133 = chunk__43121_43128;
var G__43134 = count__43122_43129;
var G__43135 = (i__43123_43130 + (1));
seq__43120_43127 = G__43132;
chunk__43121_43128 = G__43133;
count__43122_43129 = G__43134;
i__43123_43130 = G__43135;
continue;
} else {
var temp__4657__auto___43136 = cljs.core.seq.call(null,seq__43120_43127);
if(temp__4657__auto___43136){
var seq__43120_43137__$1 = temp__4657__auto___43136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43120_43137__$1)){
var c__19249__auto___43138 = cljs.core.chunk_first.call(null,seq__43120_43137__$1);
var G__43139 = cljs.core.chunk_rest.call(null,seq__43120_43137__$1);
var G__43140 = c__19249__auto___43138;
var G__43141 = cljs.core.count.call(null,c__19249__auto___43138);
var G__43142 = (0);
seq__43120_43127 = G__43139;
chunk__43121_43128 = G__43140;
count__43122_43129 = G__43141;
i__43123_43130 = G__43142;
continue;
} else {
var dep_43143 = cljs.core.first.call(null,seq__43120_43137__$1);
topo_sort_helper_STAR_.call(null,dep_43143,(depth + (1)),state);

var G__43144 = cljs.core.next.call(null,seq__43120_43137__$1);
var G__43145 = null;
var G__43146 = (0);
var G__43147 = (0);
seq__43120_43127 = G__43144;
chunk__43121_43128 = G__43145;
count__43122_43129 = G__43146;
i__43123_43130 = G__43147;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__43124){
var vec__43126 = p__43124;
var x = cljs.core.nth.call(null,vec__43126,(0),null);
var xs = cljs.core.nthnext.call(null,vec__43126,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__43126,x,xs,get_deps__$1){
return (function (p1__43082_SHARP_){
return clojure.set.difference.call(null,p1__43082_SHARP_,x);
});})(vec__43126,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__43160 = cljs.core.seq.call(null,provides);
var chunk__43161 = null;
var count__43162 = (0);
var i__43163 = (0);
while(true){
if((i__43163 < count__43162)){
var prov = cljs.core._nth.call(null,chunk__43161,i__43163);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__43164_43172 = cljs.core.seq.call(null,requires);
var chunk__43165_43173 = null;
var count__43166_43174 = (0);
var i__43167_43175 = (0);
while(true){
if((i__43167_43175 < count__43166_43174)){
var req_43176 = cljs.core._nth.call(null,chunk__43165_43173,i__43167_43175);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43176,prov);

var G__43177 = seq__43164_43172;
var G__43178 = chunk__43165_43173;
var G__43179 = count__43166_43174;
var G__43180 = (i__43167_43175 + (1));
seq__43164_43172 = G__43177;
chunk__43165_43173 = G__43178;
count__43166_43174 = G__43179;
i__43167_43175 = G__43180;
continue;
} else {
var temp__4657__auto___43181 = cljs.core.seq.call(null,seq__43164_43172);
if(temp__4657__auto___43181){
var seq__43164_43182__$1 = temp__4657__auto___43181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43164_43182__$1)){
var c__19249__auto___43183 = cljs.core.chunk_first.call(null,seq__43164_43182__$1);
var G__43184 = cljs.core.chunk_rest.call(null,seq__43164_43182__$1);
var G__43185 = c__19249__auto___43183;
var G__43186 = cljs.core.count.call(null,c__19249__auto___43183);
var G__43187 = (0);
seq__43164_43172 = G__43184;
chunk__43165_43173 = G__43185;
count__43166_43174 = G__43186;
i__43167_43175 = G__43187;
continue;
} else {
var req_43188 = cljs.core.first.call(null,seq__43164_43182__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43188,prov);

var G__43189 = cljs.core.next.call(null,seq__43164_43182__$1);
var G__43190 = null;
var G__43191 = (0);
var G__43192 = (0);
seq__43164_43172 = G__43189;
chunk__43165_43173 = G__43190;
count__43166_43174 = G__43191;
i__43167_43175 = G__43192;
continue;
}
} else {
}
}
break;
}

var G__43193 = seq__43160;
var G__43194 = chunk__43161;
var G__43195 = count__43162;
var G__43196 = (i__43163 + (1));
seq__43160 = G__43193;
chunk__43161 = G__43194;
count__43162 = G__43195;
i__43163 = G__43196;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43160);
if(temp__4657__auto__){
var seq__43160__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43160__$1)){
var c__19249__auto__ = cljs.core.chunk_first.call(null,seq__43160__$1);
var G__43197 = cljs.core.chunk_rest.call(null,seq__43160__$1);
var G__43198 = c__19249__auto__;
var G__43199 = cljs.core.count.call(null,c__19249__auto__);
var G__43200 = (0);
seq__43160 = G__43197;
chunk__43161 = G__43198;
count__43162 = G__43199;
i__43163 = G__43200;
continue;
} else {
var prov = cljs.core.first.call(null,seq__43160__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__43168_43201 = cljs.core.seq.call(null,requires);
var chunk__43169_43202 = null;
var count__43170_43203 = (0);
var i__43171_43204 = (0);
while(true){
if((i__43171_43204 < count__43170_43203)){
var req_43205 = cljs.core._nth.call(null,chunk__43169_43202,i__43171_43204);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43205,prov);

var G__43206 = seq__43168_43201;
var G__43207 = chunk__43169_43202;
var G__43208 = count__43170_43203;
var G__43209 = (i__43171_43204 + (1));
seq__43168_43201 = G__43206;
chunk__43169_43202 = G__43207;
count__43170_43203 = G__43208;
i__43171_43204 = G__43209;
continue;
} else {
var temp__4657__auto___43210__$1 = cljs.core.seq.call(null,seq__43168_43201);
if(temp__4657__auto___43210__$1){
var seq__43168_43211__$1 = temp__4657__auto___43210__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43168_43211__$1)){
var c__19249__auto___43212 = cljs.core.chunk_first.call(null,seq__43168_43211__$1);
var G__43213 = cljs.core.chunk_rest.call(null,seq__43168_43211__$1);
var G__43214 = c__19249__auto___43212;
var G__43215 = cljs.core.count.call(null,c__19249__auto___43212);
var G__43216 = (0);
seq__43168_43201 = G__43213;
chunk__43169_43202 = G__43214;
count__43170_43203 = G__43215;
i__43171_43204 = G__43216;
continue;
} else {
var req_43217 = cljs.core.first.call(null,seq__43168_43211__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_43217,prov);

var G__43218 = cljs.core.next.call(null,seq__43168_43211__$1);
var G__43219 = null;
var G__43220 = (0);
var G__43221 = (0);
seq__43168_43201 = G__43218;
chunk__43169_43202 = G__43219;
count__43170_43203 = G__43220;
i__43171_43204 = G__43221;
continue;
}
} else {
}
}
break;
}

var G__43222 = cljs.core.next.call(null,seq__43160__$1);
var G__43223 = null;
var G__43224 = (0);
var G__43225 = (0);
seq__43160 = G__43222;
chunk__43161 = G__43223;
count__43162 = G__43224;
i__43163 = G__43225;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__43230_43234 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__43231_43235 = null;
var count__43232_43236 = (0);
var i__43233_43237 = (0);
while(true){
if((i__43233_43237 < count__43232_43236)){
var ns_43238 = cljs.core._nth.call(null,chunk__43231_43235,i__43233_43237);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_43238);

var G__43239 = seq__43230_43234;
var G__43240 = chunk__43231_43235;
var G__43241 = count__43232_43236;
var G__43242 = (i__43233_43237 + (1));
seq__43230_43234 = G__43239;
chunk__43231_43235 = G__43240;
count__43232_43236 = G__43241;
i__43233_43237 = G__43242;
continue;
} else {
var temp__4657__auto___43243 = cljs.core.seq.call(null,seq__43230_43234);
if(temp__4657__auto___43243){
var seq__43230_43244__$1 = temp__4657__auto___43243;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43230_43244__$1)){
var c__19249__auto___43245 = cljs.core.chunk_first.call(null,seq__43230_43244__$1);
var G__43246 = cljs.core.chunk_rest.call(null,seq__43230_43244__$1);
var G__43247 = c__19249__auto___43245;
var G__43248 = cljs.core.count.call(null,c__19249__auto___43245);
var G__43249 = (0);
seq__43230_43234 = G__43246;
chunk__43231_43235 = G__43247;
count__43232_43236 = G__43248;
i__43233_43237 = G__43249;
continue;
} else {
var ns_43250 = cljs.core.first.call(null,seq__43230_43244__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_43250);

var G__43251 = cljs.core.next.call(null,seq__43230_43244__$1);
var G__43252 = null;
var G__43253 = (0);
var G__43254 = (0);
seq__43230_43234 = G__43251;
chunk__43231_43235 = G__43252;
count__43232_43236 = G__43253;
i__43233_43237 = G__43254;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18438__auto__ = goog.require__;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__43255__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__43255 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43256__i = 0, G__43256__a = new Array(arguments.length -  0);
while (G__43256__i < G__43256__a.length) {G__43256__a[G__43256__i] = arguments[G__43256__i + 0]; ++G__43256__i;}
  args = new cljs.core.IndexedSeq(G__43256__a,0);
} 
return G__43255__delegate.call(this,args);};
G__43255.cljs$lang$maxFixedArity = 0;
G__43255.cljs$lang$applyTo = (function (arglist__43257){
var args = cljs.core.seq(arglist__43257);
return G__43255__delegate(args);
});
G__43255.cljs$core$IFn$_invoke$arity$variadic = G__43255__delegate;
return G__43255;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__43259 = cljs.core._EQ_;
var expr__43260 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__43259.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__43260))){
var path_parts = ((function (pred__43259,expr__43260){
return (function (p1__43258_SHARP_){
return clojure.string.split.call(null,p1__43258_SHARP_,/[\/\\]/);
});})(pred__43259,expr__43260))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__43259,expr__43260){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e43262){if((e43262 instanceof Error)){
var e = e43262;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e43262;

}
}})());
});
;})(path_parts,sep,root,pred__43259,expr__43260))
} else {
if(cljs.core.truth_(pred__43259.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__43260))){
return ((function (pred__43259,expr__43260){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__43259,expr__43260){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__43259,expr__43260))
);

return deferred.addErrback(((function (deferred,pred__43259,expr__43260){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__43259,expr__43260))
);
});
;})(pred__43259,expr__43260))
} else {
return ((function (pred__43259,expr__43260){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__43259,expr__43260))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__43263,callback){
var map__43266 = p__43263;
var map__43266__$1 = ((((!((map__43266 == null)))?((((map__43266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43266):map__43266);
var file_msg = map__43266__$1;
var request_url = cljs.core.get.call(null,map__43266__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__43266,map__43266__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__43266,map__43266__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto__){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto__){
return (function (state_43290){
var state_val_43291 = (state_43290[(1)]);
if((state_val_43291 === (7))){
var inst_43286 = (state_43290[(2)]);
var state_43290__$1 = state_43290;
var statearr_43292_43312 = state_43290__$1;
(statearr_43292_43312[(2)] = inst_43286);

(statearr_43292_43312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (1))){
var state_43290__$1 = state_43290;
var statearr_43293_43313 = state_43290__$1;
(statearr_43293_43313[(2)] = null);

(statearr_43293_43313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (4))){
var inst_43270 = (state_43290[(7)]);
var inst_43270__$1 = (state_43290[(2)]);
var state_43290__$1 = (function (){var statearr_43294 = state_43290;
(statearr_43294[(7)] = inst_43270__$1);

return statearr_43294;
})();
if(cljs.core.truth_(inst_43270__$1)){
var statearr_43295_43314 = state_43290__$1;
(statearr_43295_43314[(1)] = (5));

} else {
var statearr_43296_43315 = state_43290__$1;
(statearr_43296_43315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (6))){
var state_43290__$1 = state_43290;
var statearr_43297_43316 = state_43290__$1;
(statearr_43297_43316[(2)] = null);

(statearr_43297_43316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (3))){
var inst_43288 = (state_43290[(2)]);
var state_43290__$1 = state_43290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43290__$1,inst_43288);
} else {
if((state_val_43291 === (2))){
var state_43290__$1 = state_43290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43290__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_43291 === (11))){
var inst_43282 = (state_43290[(2)]);
var state_43290__$1 = (function (){var statearr_43298 = state_43290;
(statearr_43298[(8)] = inst_43282);

return statearr_43298;
})();
var statearr_43299_43317 = state_43290__$1;
(statearr_43299_43317[(2)] = null);

(statearr_43299_43317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (9))){
var inst_43274 = (state_43290[(9)]);
var inst_43276 = (state_43290[(10)]);
var inst_43278 = inst_43276.call(null,inst_43274);
var state_43290__$1 = state_43290;
var statearr_43300_43318 = state_43290__$1;
(statearr_43300_43318[(2)] = inst_43278);

(statearr_43300_43318[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (5))){
var inst_43270 = (state_43290[(7)]);
var inst_43272 = figwheel.client.file_reloading.blocking_load.call(null,inst_43270);
var state_43290__$1 = state_43290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43290__$1,(8),inst_43272);
} else {
if((state_val_43291 === (10))){
var inst_43274 = (state_43290[(9)]);
var inst_43280 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_43274);
var state_43290__$1 = state_43290;
var statearr_43301_43319 = state_43290__$1;
(statearr_43301_43319[(2)] = inst_43280);

(statearr_43301_43319[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (8))){
var inst_43276 = (state_43290[(10)]);
var inst_43270 = (state_43290[(7)]);
var inst_43274 = (state_43290[(2)]);
var inst_43275 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_43276__$1 = cljs.core.get.call(null,inst_43275,inst_43270);
var state_43290__$1 = (function (){var statearr_43302 = state_43290;
(statearr_43302[(9)] = inst_43274);

(statearr_43302[(10)] = inst_43276__$1);

return statearr_43302;
})();
if(cljs.core.truth_(inst_43276__$1)){
var statearr_43303_43320 = state_43290__$1;
(statearr_43303_43320[(1)] = (9));

} else {
var statearr_43304_43321 = state_43290__$1;
(statearr_43304_43321[(1)] = (10));

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
});})(c__21993__auto__))
;
return ((function (switch__21881__auto__,c__21993__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21882__auto__ = null;
var figwheel$client$file_reloading$state_machine__21882__auto____0 = (function (){
var statearr_43308 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43308[(0)] = figwheel$client$file_reloading$state_machine__21882__auto__);

(statearr_43308[(1)] = (1));

return statearr_43308;
});
var figwheel$client$file_reloading$state_machine__21882__auto____1 = (function (state_43290){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_43290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e43309){if((e43309 instanceof Object)){
var ex__21885__auto__ = e43309;
var statearr_43310_43322 = state_43290;
(statearr_43310_43322[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43323 = state_43290;
state_43290 = G__43323;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21882__auto__ = function(state_43290){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21882__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21882__auto____1.call(this,state_43290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21882__auto____0;
figwheel$client$file_reloading$state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21882__auto____1;
return figwheel$client$file_reloading$state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto__))
})();
var state__21995__auto__ = (function (){var statearr_43311 = f__21994__auto__.call(null);
(statearr_43311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto__);

return statearr_43311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto__))
);

return c__21993__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__43324,callback){
var map__43327 = p__43324;
var map__43327__$1 = ((((!((map__43327 == null)))?((((map__43327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43327):map__43327);
var file_msg = map__43327__$1;
var namespace = cljs.core.get.call(null,map__43327__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__43327,map__43327__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__43327,map__43327__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__43329){
var map__43332 = p__43329;
var map__43332__$1 = ((((!((map__43332 == null)))?((((map__43332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43332):map__43332);
var file_msg = map__43332__$1;
var namespace = cljs.core.get.call(null,map__43332__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18426__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18426__auto__){
var or__18438__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
var or__18438__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18438__auto____$1)){
return or__18438__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18426__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__43334,callback){
var map__43337 = p__43334;
var map__43337__$1 = ((((!((map__43337 == null)))?((((map__43337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43337):map__43337);
var file_msg = map__43337__$1;
var request_url = cljs.core.get.call(null,map__43337__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__43337__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21993__auto___43425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto___43425,out){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto___43425,out){
return (function (state_43407){
var state_val_43408 = (state_43407[(1)]);
if((state_val_43408 === (1))){
var inst_43385 = cljs.core.nth.call(null,files,(0),null);
var inst_43386 = cljs.core.nthnext.call(null,files,(1));
var inst_43387 = files;
var state_43407__$1 = (function (){var statearr_43409 = state_43407;
(statearr_43409[(7)] = inst_43385);

(statearr_43409[(8)] = inst_43387);

(statearr_43409[(9)] = inst_43386);

return statearr_43409;
})();
var statearr_43410_43426 = state_43407__$1;
(statearr_43410_43426[(2)] = null);

(statearr_43410_43426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43408 === (2))){
var inst_43390 = (state_43407[(10)]);
var inst_43387 = (state_43407[(8)]);
var inst_43390__$1 = cljs.core.nth.call(null,inst_43387,(0),null);
var inst_43391 = cljs.core.nthnext.call(null,inst_43387,(1));
var inst_43392 = (inst_43390__$1 == null);
var inst_43393 = cljs.core.not.call(null,inst_43392);
var state_43407__$1 = (function (){var statearr_43411 = state_43407;
(statearr_43411[(10)] = inst_43390__$1);

(statearr_43411[(11)] = inst_43391);

return statearr_43411;
})();
if(inst_43393){
var statearr_43412_43427 = state_43407__$1;
(statearr_43412_43427[(1)] = (4));

} else {
var statearr_43413_43428 = state_43407__$1;
(statearr_43413_43428[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43408 === (3))){
var inst_43405 = (state_43407[(2)]);
var state_43407__$1 = state_43407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43407__$1,inst_43405);
} else {
if((state_val_43408 === (4))){
var inst_43390 = (state_43407[(10)]);
var inst_43395 = figwheel.client.file_reloading.reload_js_file.call(null,inst_43390);
var state_43407__$1 = state_43407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43407__$1,(7),inst_43395);
} else {
if((state_val_43408 === (5))){
var inst_43401 = cljs.core.async.close_BANG_.call(null,out);
var state_43407__$1 = state_43407;
var statearr_43414_43429 = state_43407__$1;
(statearr_43414_43429[(2)] = inst_43401);

(statearr_43414_43429[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43408 === (6))){
var inst_43403 = (state_43407[(2)]);
var state_43407__$1 = state_43407;
var statearr_43415_43430 = state_43407__$1;
(statearr_43415_43430[(2)] = inst_43403);

(statearr_43415_43430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43408 === (7))){
var inst_43391 = (state_43407[(11)]);
var inst_43397 = (state_43407[(2)]);
var inst_43398 = cljs.core.async.put_BANG_.call(null,out,inst_43397);
var inst_43387 = inst_43391;
var state_43407__$1 = (function (){var statearr_43416 = state_43407;
(statearr_43416[(12)] = inst_43398);

(statearr_43416[(8)] = inst_43387);

return statearr_43416;
})();
var statearr_43417_43431 = state_43407__$1;
(statearr_43417_43431[(2)] = null);

(statearr_43417_43431[(1)] = (2));


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
});})(c__21993__auto___43425,out))
;
return ((function (switch__21881__auto__,c__21993__auto___43425,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21882__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21882__auto____0 = (function (){
var statearr_43421 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43421[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21882__auto__);

(statearr_43421[(1)] = (1));

return statearr_43421;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21882__auto____1 = (function (state_43407){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_43407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e43422){if((e43422 instanceof Object)){
var ex__21885__auto__ = e43422;
var statearr_43423_43432 = state_43407;
(statearr_43423_43432[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43433 = state_43407;
state_43407 = G__43433;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21882__auto__ = function(state_43407){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21882__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21882__auto____1.call(this,state_43407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21882__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21882__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto___43425,out))
})();
var state__21995__auto__ = (function (){var statearr_43424 = f__21994__auto__.call(null);
(statearr_43424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto___43425);

return statearr_43424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto___43425,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__43434,opts){
var map__43438 = p__43434;
var map__43438__$1 = ((((!((map__43438 == null)))?((((map__43438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43438):map__43438);
var eval_body__$1 = cljs.core.get.call(null,map__43438__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__43438__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18426__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18426__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18426__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e43440){var e = e43440;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__43441_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__43441_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__43446){
var vec__43447 = p__43446;
var k = cljs.core.nth.call(null,vec__43447,(0),null);
var v = cljs.core.nth.call(null,vec__43447,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__43448){
var vec__43449 = p__43448;
var k = cljs.core.nth.call(null,vec__43449,(0),null);
var v = cljs.core.nth.call(null,vec__43449,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__43453,p__43454){
var map__43701 = p__43453;
var map__43701__$1 = ((((!((map__43701 == null)))?((((map__43701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43701):map__43701);
var opts = map__43701__$1;
var before_jsload = cljs.core.get.call(null,map__43701__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__43701__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__43701__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__43702 = p__43454;
var map__43702__$1 = ((((!((map__43702 == null)))?((((map__43702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43702):map__43702);
var msg = map__43702__$1;
var files = cljs.core.get.call(null,map__43702__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__43702__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__43702__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21993__auto__,map__43701,map__43701__$1,opts,before_jsload,on_jsload,reload_dependents,map__43702,map__43702__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21994__auto__ = (function (){var switch__21881__auto__ = ((function (c__21993__auto__,map__43701,map__43701__$1,opts,before_jsload,on_jsload,reload_dependents,map__43702,map__43702__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_43855){
var state_val_43856 = (state_43855[(1)]);
if((state_val_43856 === (7))){
var inst_43716 = (state_43855[(7)]);
var inst_43717 = (state_43855[(8)]);
var inst_43718 = (state_43855[(9)]);
var inst_43719 = (state_43855[(10)]);
var inst_43724 = cljs.core._nth.call(null,inst_43717,inst_43719);
var inst_43725 = figwheel.client.file_reloading.eval_body.call(null,inst_43724,opts);
var inst_43726 = (inst_43719 + (1));
var tmp43857 = inst_43716;
var tmp43858 = inst_43717;
var tmp43859 = inst_43718;
var inst_43716__$1 = tmp43857;
var inst_43717__$1 = tmp43858;
var inst_43718__$1 = tmp43859;
var inst_43719__$1 = inst_43726;
var state_43855__$1 = (function (){var statearr_43860 = state_43855;
(statearr_43860[(7)] = inst_43716__$1);

(statearr_43860[(8)] = inst_43717__$1);

(statearr_43860[(9)] = inst_43718__$1);

(statearr_43860[(11)] = inst_43725);

(statearr_43860[(10)] = inst_43719__$1);

return statearr_43860;
})();
var statearr_43861_43947 = state_43855__$1;
(statearr_43861_43947[(2)] = null);

(statearr_43861_43947[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (20))){
var inst_43759 = (state_43855[(12)]);
var inst_43767 = figwheel.client.file_reloading.sort_files.call(null,inst_43759);
var state_43855__$1 = state_43855;
var statearr_43862_43948 = state_43855__$1;
(statearr_43862_43948[(2)] = inst_43767);

(statearr_43862_43948[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (27))){
var state_43855__$1 = state_43855;
var statearr_43863_43949 = state_43855__$1;
(statearr_43863_43949[(2)] = null);

(statearr_43863_43949[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (1))){
var inst_43708 = (state_43855[(13)]);
var inst_43705 = before_jsload.call(null,files);
var inst_43706 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_43707 = (function (){return ((function (inst_43708,inst_43705,inst_43706,state_val_43856,c__21993__auto__,map__43701,map__43701__$1,opts,before_jsload,on_jsload,reload_dependents,map__43702,map__43702__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43450_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__43450_SHARP_);
});
;})(inst_43708,inst_43705,inst_43706,state_val_43856,c__21993__auto__,map__43701,map__43701__$1,opts,before_jsload,on_jsload,reload_dependents,map__43702,map__43702__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43708__$1 = cljs.core.filter.call(null,inst_43707,files);
var inst_43709 = cljs.core.not_empty.call(null,inst_43708__$1);
var state_43855__$1 = (function (){var statearr_43864 = state_43855;
(statearr_43864[(14)] = inst_43705);

(statearr_43864[(15)] = inst_43706);

(statearr_43864[(13)] = inst_43708__$1);

return statearr_43864;
})();
if(cljs.core.truth_(inst_43709)){
var statearr_43865_43950 = state_43855__$1;
(statearr_43865_43950[(1)] = (2));

} else {
var statearr_43866_43951 = state_43855__$1;
(statearr_43866_43951[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (24))){
var state_43855__$1 = state_43855;
var statearr_43867_43952 = state_43855__$1;
(statearr_43867_43952[(2)] = null);

(statearr_43867_43952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (39))){
var inst_43809 = (state_43855[(16)]);
var state_43855__$1 = state_43855;
var statearr_43868_43953 = state_43855__$1;
(statearr_43868_43953[(2)] = inst_43809);

(statearr_43868_43953[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (46))){
var inst_43850 = (state_43855[(2)]);
var state_43855__$1 = state_43855;
var statearr_43869_43954 = state_43855__$1;
(statearr_43869_43954[(2)] = inst_43850);

(statearr_43869_43954[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (4))){
var inst_43753 = (state_43855[(2)]);
var inst_43754 = cljs.core.List.EMPTY;
var inst_43755 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_43754);
var inst_43756 = (function (){return ((function (inst_43753,inst_43754,inst_43755,state_val_43856,c__21993__auto__,map__43701,map__43701__$1,opts,before_jsload,on_jsload,reload_dependents,map__43702,map__43702__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43451_SHARP_){
var and__18426__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__43451_SHARP_);
if(cljs.core.truth_(and__18426__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__43451_SHARP_));
} else {
return and__18426__auto__;
}
});
;})(inst_43753,inst_43754,inst_43755,state_val_43856,c__21993__auto__,map__43701,map__43701__$1,opts,before_jsload,on_jsload,reload_dependents,map__43702,map__43702__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43757 = cljs.core.filter.call(null,inst_43756,files);
var inst_43758 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_43759 = cljs.core.concat.call(null,inst_43757,inst_43758);
var state_43855__$1 = (function (){var statearr_43870 = state_43855;
(statearr_43870[(17)] = inst_43755);

(statearr_43870[(12)] = inst_43759);

(statearr_43870[(18)] = inst_43753);

return statearr_43870;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_43871_43955 = state_43855__$1;
(statearr_43871_43955[(1)] = (16));

} else {
var statearr_43872_43956 = state_43855__$1;
(statearr_43872_43956[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (15))){
var inst_43743 = (state_43855[(2)]);
var state_43855__$1 = state_43855;
var statearr_43873_43957 = state_43855__$1;
(statearr_43873_43957[(2)] = inst_43743);

(statearr_43873_43957[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (21))){
var inst_43769 = (state_43855[(19)]);
var inst_43769__$1 = (state_43855[(2)]);
var inst_43770 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_43769__$1);
var state_43855__$1 = (function (){var statearr_43874 = state_43855;
(statearr_43874[(19)] = inst_43769__$1);

return statearr_43874;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43855__$1,(22),inst_43770);
} else {
if((state_val_43856 === (31))){
var inst_43853 = (state_43855[(2)]);
var state_43855__$1 = state_43855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43855__$1,inst_43853);
} else {
if((state_val_43856 === (32))){
var inst_43809 = (state_43855[(16)]);
var inst_43814 = inst_43809.cljs$lang$protocol_mask$partition0$;
var inst_43815 = (inst_43814 & (64));
var inst_43816 = inst_43809.cljs$core$ISeq$;
var inst_43817 = (inst_43815) || (inst_43816);
var state_43855__$1 = state_43855;
if(cljs.core.truth_(inst_43817)){
var statearr_43875_43958 = state_43855__$1;
(statearr_43875_43958[(1)] = (35));

} else {
var statearr_43876_43959 = state_43855__$1;
(statearr_43876_43959[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (40))){
var inst_43830 = (state_43855[(20)]);
var inst_43829 = (state_43855[(2)]);
var inst_43830__$1 = cljs.core.get.call(null,inst_43829,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_43831 = cljs.core.get.call(null,inst_43829,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_43832 = cljs.core.not_empty.call(null,inst_43830__$1);
var state_43855__$1 = (function (){var statearr_43877 = state_43855;
(statearr_43877[(20)] = inst_43830__$1);

(statearr_43877[(21)] = inst_43831);

return statearr_43877;
})();
if(cljs.core.truth_(inst_43832)){
var statearr_43878_43960 = state_43855__$1;
(statearr_43878_43960[(1)] = (41));

} else {
var statearr_43879_43961 = state_43855__$1;
(statearr_43879_43961[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (33))){
var state_43855__$1 = state_43855;
var statearr_43880_43962 = state_43855__$1;
(statearr_43880_43962[(2)] = false);

(statearr_43880_43962[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (13))){
var inst_43729 = (state_43855[(22)]);
var inst_43733 = cljs.core.chunk_first.call(null,inst_43729);
var inst_43734 = cljs.core.chunk_rest.call(null,inst_43729);
var inst_43735 = cljs.core.count.call(null,inst_43733);
var inst_43716 = inst_43734;
var inst_43717 = inst_43733;
var inst_43718 = inst_43735;
var inst_43719 = (0);
var state_43855__$1 = (function (){var statearr_43881 = state_43855;
(statearr_43881[(7)] = inst_43716);

(statearr_43881[(8)] = inst_43717);

(statearr_43881[(9)] = inst_43718);

(statearr_43881[(10)] = inst_43719);

return statearr_43881;
})();
var statearr_43882_43963 = state_43855__$1;
(statearr_43882_43963[(2)] = null);

(statearr_43882_43963[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (22))){
var inst_43777 = (state_43855[(23)]);
var inst_43773 = (state_43855[(24)]);
var inst_43772 = (state_43855[(25)]);
var inst_43769 = (state_43855[(19)]);
var inst_43772__$1 = (state_43855[(2)]);
var inst_43773__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43772__$1);
var inst_43774 = (function (){var all_files = inst_43769;
var res_SINGLEQUOTE_ = inst_43772__$1;
var res = inst_43773__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_43777,inst_43773,inst_43772,inst_43769,inst_43772__$1,inst_43773__$1,state_val_43856,c__21993__auto__,map__43701,map__43701__$1,opts,before_jsload,on_jsload,reload_dependents,map__43702,map__43702__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43452_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__43452_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_43777,inst_43773,inst_43772,inst_43769,inst_43772__$1,inst_43773__$1,state_val_43856,c__21993__auto__,map__43701,map__43701__$1,opts,before_jsload,on_jsload,reload_dependents,map__43702,map__43702__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43775 = cljs.core.filter.call(null,inst_43774,inst_43772__$1);
var inst_43776 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_43777__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43776);
var inst_43778 = cljs.core.not_empty.call(null,inst_43777__$1);
var state_43855__$1 = (function (){var statearr_43883 = state_43855;
(statearr_43883[(23)] = inst_43777__$1);

(statearr_43883[(24)] = inst_43773__$1);

(statearr_43883[(26)] = inst_43775);

(statearr_43883[(25)] = inst_43772__$1);

return statearr_43883;
})();
if(cljs.core.truth_(inst_43778)){
var statearr_43884_43964 = state_43855__$1;
(statearr_43884_43964[(1)] = (23));

} else {
var statearr_43885_43965 = state_43855__$1;
(statearr_43885_43965[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (36))){
var state_43855__$1 = state_43855;
var statearr_43886_43966 = state_43855__$1;
(statearr_43886_43966[(2)] = false);

(statearr_43886_43966[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (41))){
var inst_43830 = (state_43855[(20)]);
var inst_43834 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_43835 = cljs.core.map.call(null,inst_43834,inst_43830);
var inst_43836 = cljs.core.pr_str.call(null,inst_43835);
var inst_43837 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_43836)].join('');
var inst_43838 = figwheel.client.utils.log.call(null,inst_43837);
var state_43855__$1 = state_43855;
var statearr_43887_43967 = state_43855__$1;
(statearr_43887_43967[(2)] = inst_43838);

(statearr_43887_43967[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (43))){
var inst_43831 = (state_43855[(21)]);
var inst_43841 = (state_43855[(2)]);
var inst_43842 = cljs.core.not_empty.call(null,inst_43831);
var state_43855__$1 = (function (){var statearr_43888 = state_43855;
(statearr_43888[(27)] = inst_43841);

return statearr_43888;
})();
if(cljs.core.truth_(inst_43842)){
var statearr_43889_43968 = state_43855__$1;
(statearr_43889_43968[(1)] = (44));

} else {
var statearr_43890_43969 = state_43855__$1;
(statearr_43890_43969[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (29))){
var inst_43777 = (state_43855[(23)]);
var inst_43773 = (state_43855[(24)]);
var inst_43809 = (state_43855[(16)]);
var inst_43775 = (state_43855[(26)]);
var inst_43772 = (state_43855[(25)]);
var inst_43769 = (state_43855[(19)]);
var inst_43805 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_43808 = (function (){var all_files = inst_43769;
var res_SINGLEQUOTE_ = inst_43772;
var res = inst_43773;
var files_not_loaded = inst_43775;
var dependencies_that_loaded = inst_43777;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43777,inst_43773,inst_43809,inst_43775,inst_43772,inst_43769,inst_43805,state_val_43856,c__21993__auto__,map__43701,map__43701__$1,opts,before_jsload,on_jsload,reload_dependents,map__43702,map__43702__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43807){
var map__43891 = p__43807;
var map__43891__$1 = ((((!((map__43891 == null)))?((((map__43891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43891):map__43891);
var namespace = cljs.core.get.call(null,map__43891__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43777,inst_43773,inst_43809,inst_43775,inst_43772,inst_43769,inst_43805,state_val_43856,c__21993__auto__,map__43701,map__43701__$1,opts,before_jsload,on_jsload,reload_dependents,map__43702,map__43702__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43809__$1 = cljs.core.group_by.call(null,inst_43808,inst_43775);
var inst_43811 = (inst_43809__$1 == null);
var inst_43812 = cljs.core.not.call(null,inst_43811);
var state_43855__$1 = (function (){var statearr_43893 = state_43855;
(statearr_43893[(16)] = inst_43809__$1);

(statearr_43893[(28)] = inst_43805);

return statearr_43893;
})();
if(inst_43812){
var statearr_43894_43970 = state_43855__$1;
(statearr_43894_43970[(1)] = (32));

} else {
var statearr_43895_43971 = state_43855__$1;
(statearr_43895_43971[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (44))){
var inst_43831 = (state_43855[(21)]);
var inst_43844 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43831);
var inst_43845 = cljs.core.pr_str.call(null,inst_43844);
var inst_43846 = [cljs.core.str("not required: "),cljs.core.str(inst_43845)].join('');
var inst_43847 = figwheel.client.utils.log.call(null,inst_43846);
var state_43855__$1 = state_43855;
var statearr_43896_43972 = state_43855__$1;
(statearr_43896_43972[(2)] = inst_43847);

(statearr_43896_43972[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (6))){
var inst_43750 = (state_43855[(2)]);
var state_43855__$1 = state_43855;
var statearr_43897_43973 = state_43855__$1;
(statearr_43897_43973[(2)] = inst_43750);

(statearr_43897_43973[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (28))){
var inst_43775 = (state_43855[(26)]);
var inst_43802 = (state_43855[(2)]);
var inst_43803 = cljs.core.not_empty.call(null,inst_43775);
var state_43855__$1 = (function (){var statearr_43898 = state_43855;
(statearr_43898[(29)] = inst_43802);

return statearr_43898;
})();
if(cljs.core.truth_(inst_43803)){
var statearr_43899_43974 = state_43855__$1;
(statearr_43899_43974[(1)] = (29));

} else {
var statearr_43900_43975 = state_43855__$1;
(statearr_43900_43975[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (25))){
var inst_43773 = (state_43855[(24)]);
var inst_43789 = (state_43855[(2)]);
var inst_43790 = cljs.core.not_empty.call(null,inst_43773);
var state_43855__$1 = (function (){var statearr_43901 = state_43855;
(statearr_43901[(30)] = inst_43789);

return statearr_43901;
})();
if(cljs.core.truth_(inst_43790)){
var statearr_43902_43976 = state_43855__$1;
(statearr_43902_43976[(1)] = (26));

} else {
var statearr_43903_43977 = state_43855__$1;
(statearr_43903_43977[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (34))){
var inst_43824 = (state_43855[(2)]);
var state_43855__$1 = state_43855;
if(cljs.core.truth_(inst_43824)){
var statearr_43904_43978 = state_43855__$1;
(statearr_43904_43978[(1)] = (38));

} else {
var statearr_43905_43979 = state_43855__$1;
(statearr_43905_43979[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (17))){
var state_43855__$1 = state_43855;
var statearr_43906_43980 = state_43855__$1;
(statearr_43906_43980[(2)] = recompile_dependents);

(statearr_43906_43980[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (3))){
var state_43855__$1 = state_43855;
var statearr_43907_43981 = state_43855__$1;
(statearr_43907_43981[(2)] = null);

(statearr_43907_43981[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (12))){
var inst_43746 = (state_43855[(2)]);
var state_43855__$1 = state_43855;
var statearr_43908_43982 = state_43855__$1;
(statearr_43908_43982[(2)] = inst_43746);

(statearr_43908_43982[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (2))){
var inst_43708 = (state_43855[(13)]);
var inst_43715 = cljs.core.seq.call(null,inst_43708);
var inst_43716 = inst_43715;
var inst_43717 = null;
var inst_43718 = (0);
var inst_43719 = (0);
var state_43855__$1 = (function (){var statearr_43909 = state_43855;
(statearr_43909[(7)] = inst_43716);

(statearr_43909[(8)] = inst_43717);

(statearr_43909[(9)] = inst_43718);

(statearr_43909[(10)] = inst_43719);

return statearr_43909;
})();
var statearr_43910_43983 = state_43855__$1;
(statearr_43910_43983[(2)] = null);

(statearr_43910_43983[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (23))){
var inst_43777 = (state_43855[(23)]);
var inst_43773 = (state_43855[(24)]);
var inst_43775 = (state_43855[(26)]);
var inst_43772 = (state_43855[(25)]);
var inst_43769 = (state_43855[(19)]);
var inst_43780 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_43782 = (function (){var all_files = inst_43769;
var res_SINGLEQUOTE_ = inst_43772;
var res = inst_43773;
var files_not_loaded = inst_43775;
var dependencies_that_loaded = inst_43777;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43777,inst_43773,inst_43775,inst_43772,inst_43769,inst_43780,state_val_43856,c__21993__auto__,map__43701,map__43701__$1,opts,before_jsload,on_jsload,reload_dependents,map__43702,map__43702__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43781){
var map__43911 = p__43781;
var map__43911__$1 = ((((!((map__43911 == null)))?((((map__43911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43911):map__43911);
var request_url = cljs.core.get.call(null,map__43911__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43777,inst_43773,inst_43775,inst_43772,inst_43769,inst_43780,state_val_43856,c__21993__auto__,map__43701,map__43701__$1,opts,before_jsload,on_jsload,reload_dependents,map__43702,map__43702__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43783 = cljs.core.reverse.call(null,inst_43777);
var inst_43784 = cljs.core.map.call(null,inst_43782,inst_43783);
var inst_43785 = cljs.core.pr_str.call(null,inst_43784);
var inst_43786 = figwheel.client.utils.log.call(null,inst_43785);
var state_43855__$1 = (function (){var statearr_43913 = state_43855;
(statearr_43913[(31)] = inst_43780);

return statearr_43913;
})();
var statearr_43914_43984 = state_43855__$1;
(statearr_43914_43984[(2)] = inst_43786);

(statearr_43914_43984[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (35))){
var state_43855__$1 = state_43855;
var statearr_43915_43985 = state_43855__$1;
(statearr_43915_43985[(2)] = true);

(statearr_43915_43985[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (19))){
var inst_43759 = (state_43855[(12)]);
var inst_43765 = figwheel.client.file_reloading.expand_files.call(null,inst_43759);
var state_43855__$1 = state_43855;
var statearr_43916_43986 = state_43855__$1;
(statearr_43916_43986[(2)] = inst_43765);

(statearr_43916_43986[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (11))){
var state_43855__$1 = state_43855;
var statearr_43917_43987 = state_43855__$1;
(statearr_43917_43987[(2)] = null);

(statearr_43917_43987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (9))){
var inst_43748 = (state_43855[(2)]);
var state_43855__$1 = state_43855;
var statearr_43918_43988 = state_43855__$1;
(statearr_43918_43988[(2)] = inst_43748);

(statearr_43918_43988[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (5))){
var inst_43718 = (state_43855[(9)]);
var inst_43719 = (state_43855[(10)]);
var inst_43721 = (inst_43719 < inst_43718);
var inst_43722 = inst_43721;
var state_43855__$1 = state_43855;
if(cljs.core.truth_(inst_43722)){
var statearr_43919_43989 = state_43855__$1;
(statearr_43919_43989[(1)] = (7));

} else {
var statearr_43920_43990 = state_43855__$1;
(statearr_43920_43990[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (14))){
var inst_43729 = (state_43855[(22)]);
var inst_43738 = cljs.core.first.call(null,inst_43729);
var inst_43739 = figwheel.client.file_reloading.eval_body.call(null,inst_43738,opts);
var inst_43740 = cljs.core.next.call(null,inst_43729);
var inst_43716 = inst_43740;
var inst_43717 = null;
var inst_43718 = (0);
var inst_43719 = (0);
var state_43855__$1 = (function (){var statearr_43921 = state_43855;
(statearr_43921[(7)] = inst_43716);

(statearr_43921[(8)] = inst_43717);

(statearr_43921[(32)] = inst_43739);

(statearr_43921[(9)] = inst_43718);

(statearr_43921[(10)] = inst_43719);

return statearr_43921;
})();
var statearr_43922_43991 = state_43855__$1;
(statearr_43922_43991[(2)] = null);

(statearr_43922_43991[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (45))){
var state_43855__$1 = state_43855;
var statearr_43923_43992 = state_43855__$1;
(statearr_43923_43992[(2)] = null);

(statearr_43923_43992[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (26))){
var inst_43777 = (state_43855[(23)]);
var inst_43773 = (state_43855[(24)]);
var inst_43775 = (state_43855[(26)]);
var inst_43772 = (state_43855[(25)]);
var inst_43769 = (state_43855[(19)]);
var inst_43792 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_43794 = (function (){var all_files = inst_43769;
var res_SINGLEQUOTE_ = inst_43772;
var res = inst_43773;
var files_not_loaded = inst_43775;
var dependencies_that_loaded = inst_43777;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43777,inst_43773,inst_43775,inst_43772,inst_43769,inst_43792,state_val_43856,c__21993__auto__,map__43701,map__43701__$1,opts,before_jsload,on_jsload,reload_dependents,map__43702,map__43702__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43793){
var map__43924 = p__43793;
var map__43924__$1 = ((((!((map__43924 == null)))?((((map__43924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43924):map__43924);
var namespace = cljs.core.get.call(null,map__43924__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__43924__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43777,inst_43773,inst_43775,inst_43772,inst_43769,inst_43792,state_val_43856,c__21993__auto__,map__43701,map__43701__$1,opts,before_jsload,on_jsload,reload_dependents,map__43702,map__43702__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43795 = cljs.core.map.call(null,inst_43794,inst_43773);
var inst_43796 = cljs.core.pr_str.call(null,inst_43795);
var inst_43797 = figwheel.client.utils.log.call(null,inst_43796);
var inst_43798 = (function (){var all_files = inst_43769;
var res_SINGLEQUOTE_ = inst_43772;
var res = inst_43773;
var files_not_loaded = inst_43775;
var dependencies_that_loaded = inst_43777;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43777,inst_43773,inst_43775,inst_43772,inst_43769,inst_43792,inst_43794,inst_43795,inst_43796,inst_43797,state_val_43856,c__21993__auto__,map__43701,map__43701__$1,opts,before_jsload,on_jsload,reload_dependents,map__43702,map__43702__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43777,inst_43773,inst_43775,inst_43772,inst_43769,inst_43792,inst_43794,inst_43795,inst_43796,inst_43797,state_val_43856,c__21993__auto__,map__43701,map__43701__$1,opts,before_jsload,on_jsload,reload_dependents,map__43702,map__43702__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43799 = setTimeout(inst_43798,(10));
var state_43855__$1 = (function (){var statearr_43926 = state_43855;
(statearr_43926[(33)] = inst_43797);

(statearr_43926[(34)] = inst_43792);

return statearr_43926;
})();
var statearr_43927_43993 = state_43855__$1;
(statearr_43927_43993[(2)] = inst_43799);

(statearr_43927_43993[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (16))){
var state_43855__$1 = state_43855;
var statearr_43928_43994 = state_43855__$1;
(statearr_43928_43994[(2)] = reload_dependents);

(statearr_43928_43994[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (38))){
var inst_43809 = (state_43855[(16)]);
var inst_43826 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43809);
var state_43855__$1 = state_43855;
var statearr_43929_43995 = state_43855__$1;
(statearr_43929_43995[(2)] = inst_43826);

(statearr_43929_43995[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (30))){
var state_43855__$1 = state_43855;
var statearr_43930_43996 = state_43855__$1;
(statearr_43930_43996[(2)] = null);

(statearr_43930_43996[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (10))){
var inst_43729 = (state_43855[(22)]);
var inst_43731 = cljs.core.chunked_seq_QMARK_.call(null,inst_43729);
var state_43855__$1 = state_43855;
if(inst_43731){
var statearr_43931_43997 = state_43855__$1;
(statearr_43931_43997[(1)] = (13));

} else {
var statearr_43932_43998 = state_43855__$1;
(statearr_43932_43998[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (18))){
var inst_43763 = (state_43855[(2)]);
var state_43855__$1 = state_43855;
if(cljs.core.truth_(inst_43763)){
var statearr_43933_43999 = state_43855__$1;
(statearr_43933_43999[(1)] = (19));

} else {
var statearr_43934_44000 = state_43855__$1;
(statearr_43934_44000[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (42))){
var state_43855__$1 = state_43855;
var statearr_43935_44001 = state_43855__$1;
(statearr_43935_44001[(2)] = null);

(statearr_43935_44001[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (37))){
var inst_43821 = (state_43855[(2)]);
var state_43855__$1 = state_43855;
var statearr_43936_44002 = state_43855__$1;
(statearr_43936_44002[(2)] = inst_43821);

(statearr_43936_44002[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43856 === (8))){
var inst_43716 = (state_43855[(7)]);
var inst_43729 = (state_43855[(22)]);
var inst_43729__$1 = cljs.core.seq.call(null,inst_43716);
var state_43855__$1 = (function (){var statearr_43937 = state_43855;
(statearr_43937[(22)] = inst_43729__$1);

return statearr_43937;
})();
if(inst_43729__$1){
var statearr_43938_44003 = state_43855__$1;
(statearr_43938_44003[(1)] = (10));

} else {
var statearr_43939_44004 = state_43855__$1;
(statearr_43939_44004[(1)] = (11));

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
}
});})(c__21993__auto__,map__43701,map__43701__$1,opts,before_jsload,on_jsload,reload_dependents,map__43702,map__43702__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21881__auto__,c__21993__auto__,map__43701,map__43701__$1,opts,before_jsload,on_jsload,reload_dependents,map__43702,map__43702__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21882__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21882__auto____0 = (function (){
var statearr_43943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43943[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21882__auto__);

(statearr_43943[(1)] = (1));

return statearr_43943;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21882__auto____1 = (function (state_43855){
while(true){
var ret_value__21883__auto__ = (function (){try{while(true){
var result__21884__auto__ = switch__21881__auto__.call(null,state_43855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21884__auto__;
}
break;
}
}catch (e43944){if((e43944 instanceof Object)){
var ex__21885__auto__ = e43944;
var statearr_43945_44005 = state_43855;
(statearr_43945_44005[(5)] = ex__21885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44006 = state_43855;
state_43855 = G__44006;
continue;
} else {
return ret_value__21883__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21882__auto__ = function(state_43855){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21882__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21882__auto____1.call(this,state_43855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21882__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21882__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21882__auto__;
})()
;})(switch__21881__auto__,c__21993__auto__,map__43701,map__43701__$1,opts,before_jsload,on_jsload,reload_dependents,map__43702,map__43702__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21995__auto__ = (function (){var statearr_43946 = f__21994__auto__.call(null);
(statearr_43946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21993__auto__);

return statearr_43946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21995__auto__);
});})(c__21993__auto__,map__43701,map__43701__$1,opts,before_jsload,on_jsload,reload_dependents,map__43702,map__43702__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21993__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__44009,link){
var map__44012 = p__44009;
var map__44012__$1 = ((((!((map__44012 == null)))?((((map__44012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44012):map__44012);
var file = cljs.core.get.call(null,map__44012__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__44012,map__44012__$1,file){
return (function (p1__44007_SHARP_,p2__44008_SHARP_){
if(cljs.core._EQ_.call(null,p1__44007_SHARP_,p2__44008_SHARP_)){
return p1__44007_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__44012,map__44012__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__44018){
var map__44019 = p__44018;
var map__44019__$1 = ((((!((map__44019 == null)))?((((map__44019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44019):map__44019);
var match_length = cljs.core.get.call(null,map__44019__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__44019__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__44014_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__44014_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args44021 = [];
var len__19507__auto___44024 = arguments.length;
var i__19508__auto___44025 = (0);
while(true){
if((i__19508__auto___44025 < len__19507__auto___44024)){
args44021.push((arguments[i__19508__auto___44025]));

var G__44026 = (i__19508__auto___44025 + (1));
i__19508__auto___44025 = G__44026;
continue;
} else {
}
break;
}

var G__44023 = args44021.length;
switch (G__44023) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44021.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__44028_SHARP_,p2__44029_SHARP_){
return cljs.core.assoc.call(null,p1__44028_SHARP_,cljs.core.get.call(null,p2__44029_SHARP_,key),p2__44029_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__44030){
var map__44033 = p__44030;
var map__44033__$1 = ((((!((map__44033 == null)))?((((map__44033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44033):map__44033);
var f_data = map__44033__$1;
var file = cljs.core.get.call(null,map__44033__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__44035,files_msg){
var map__44042 = p__44035;
var map__44042__$1 = ((((!((map__44042 == null)))?((((map__44042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44042):map__44042);
var opts = map__44042__$1;
var on_cssload = cljs.core.get.call(null,map__44042__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__44044_44048 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__44045_44049 = null;
var count__44046_44050 = (0);
var i__44047_44051 = (0);
while(true){
if((i__44047_44051 < count__44046_44050)){
var f_44052 = cljs.core._nth.call(null,chunk__44045_44049,i__44047_44051);
figwheel.client.file_reloading.reload_css_file.call(null,f_44052);

var G__44053 = seq__44044_44048;
var G__44054 = chunk__44045_44049;
var G__44055 = count__44046_44050;
var G__44056 = (i__44047_44051 + (1));
seq__44044_44048 = G__44053;
chunk__44045_44049 = G__44054;
count__44046_44050 = G__44055;
i__44047_44051 = G__44056;
continue;
} else {
var temp__4657__auto___44057 = cljs.core.seq.call(null,seq__44044_44048);
if(temp__4657__auto___44057){
var seq__44044_44058__$1 = temp__4657__auto___44057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44044_44058__$1)){
var c__19249__auto___44059 = cljs.core.chunk_first.call(null,seq__44044_44058__$1);
var G__44060 = cljs.core.chunk_rest.call(null,seq__44044_44058__$1);
var G__44061 = c__19249__auto___44059;
var G__44062 = cljs.core.count.call(null,c__19249__auto___44059);
var G__44063 = (0);
seq__44044_44048 = G__44060;
chunk__44045_44049 = G__44061;
count__44046_44050 = G__44062;
i__44047_44051 = G__44063;
continue;
} else {
var f_44064 = cljs.core.first.call(null,seq__44044_44058__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_44064);

var G__44065 = cljs.core.next.call(null,seq__44044_44058__$1);
var G__44066 = null;
var G__44067 = (0);
var G__44068 = (0);
seq__44044_44048 = G__44065;
chunk__44045_44049 = G__44066;
count__44046_44050 = G__44067;
i__44047_44051 = G__44068;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__44042,map__44042__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__44042,map__44042__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1458781551963
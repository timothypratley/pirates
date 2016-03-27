// Compiled by ClojureScript 1.8.34 {}
goog.provide('pirates.client.model');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('pirates.client.towns');
if(typeof pirates.client.model.app_state !== 'undefined'){
} else {
pirates.client.model.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"in-port","in-port",-1489220602),new cljs.core.Keyword(null,"towns","towns",523997405),pirates.client.towns.initial_towns], null));
}

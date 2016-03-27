// Compiled by ClojureScript 1.8.34 {}
goog.provide('pirates.client.map');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('pirates.client.towns');
goog.require('pirates.client.scene');
goog.require('pirates.client.keyboard');
goog.require('pirates.client.scenery');
pirates.client.map.create_renderer = (function pirates$client$map$create_renderer(element){
var G__37402 = (new THREE.WebGLRenderer({"antialias": true, "canvas": element}));
G__37402.setPixelRatio(window.devicePixelRatio);

return G__37402;
});
pirates.client.map.map_mouse = (function pirates$client$map$map_mouse(ship,e){
var rect = e.target.getBoundingClientRect();
var x = ((e.clientX - rect.left) - (rect.width / (2)));
var y = ((rect.height / (2)) - (e.clientY - rect.top));
return ship.rotation.y = Math.atan2((- y),(- x));
});
pirates.client.map.world_map = (function pirates$client$map$world_map(app_state){
var raf = cljs.core.atom.call(null,null);
var camera = (function (){var G__37407 = (new THREE.PerspectiveCamera((75),(2),0.1,(1000)));
G__37407.position.set((0),(5),(10));

G__37407.lookAt((new THREE.Vector3((0),(0),(0))));

return G__37407;
})();
var directional_light_position = (new THREE.Vector3((-600),(300),(600)));
var scene = pirates.client.scene.make_scene.call(null,directional_light_position);
var ship = (function (){var G__37408 = pirates.client.scene.make_ship.call(null,scene,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$2(cljs.core.deref.call(null,app_state),"Unknown"));
G__37408.add(camera);

return G__37408;
})();
var keyboard = pirates.client.keyboard.create.call(null);
var mouse_down = cljs.core.atom.call(null,false);
var resize = cljs.core.atom.call(null,null);
pirates.client.scenery.create_terrain.call(null,scene);

pirates.client.towns.load_towns.call(null,scene,new cljs.core.Keyword(null,"towns","towns",523997405).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)));

pirates.client.scenery.loadSkyBox.call(null,scene);

return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"world-map",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (raf,camera,directional_light_position,scene,ship,keyboard,mouse_down,resize){
return (function pirates$client$map$world_map_$_world_map_render(app_state__$1){
var temp__4657__auto___37411 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"position","position",-2011731912)], null));
if(cljs.core.truth_(temp__4657__auto___37411)){
var vec__37410_37412 = temp__4657__auto___37411;
var x_37413 = cljs.core.nth.call(null,vec__37410_37412,(0),null);
var y_37414 = cljs.core.nth.call(null,vec__37410_37412,(1),null);
var z_37415 = cljs.core.nth.call(null,vec__37410_37412,(2),null);
camera.position.set(x_37413,y_37414,z_37415);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"unselectable","unselectable",1539229191),"on",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (raf,camera,directional_light_position,scene,ship,keyboard,mouse_down,resize){
return (function pirates$client$map$world_map_$_world_map_render_$_map_click(e){
return pirates.client.map.map_mouse.call(null,ship,e);
});})(raf,camera,directional_light_position,scene,ship,keyboard,mouse_down,resize))
,new cljs.core.Keyword(null,"on-wheel","on-wheel",-1971630708),((function (raf,camera,directional_light_position,scene,ship,keyboard,mouse_down,resize){
return (function (e){
return pirates.client.keyboard.altitude.call(null,camera,((500) / e.deltaY));
});})(raf,camera,directional_light_position,scene,ship,keyboard,mouse_down,resize))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (raf,camera,directional_light_position,scene,ship,keyboard,mouse_down,resize){
return (function pirates$client$map$world_map_$_world_map_render_$_map_mouse_down(e){
if((e.button === (0))){
return cljs.core.reset_BANG_.call(null,mouse_down,true);
} else {
return null;
}
});})(raf,camera,directional_light_position,scene,ship,keyboard,mouse_down,resize))
,new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),((function (raf,camera,directional_light_position,scene,ship,keyboard,mouse_down,resize){
return (function pirates$client$map$world_map_$_world_map_render_$_map_mouse_up(e){
if((e.button === (0))){
return cljs.core.reset_BANG_.call(null,mouse_down,false);
} else {
return null;
}
});})(raf,camera,directional_light_position,scene,ship,keyboard,mouse_down,resize))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (raf,camera,directional_light_position,scene,ship,keyboard,mouse_down,resize){
return (function pirates$client$map$world_map_$_world_map_render_$_map_blur(e){
return cljs.core.reset_BANG_.call(null,mouse_down,false);
});})(raf,camera,directional_light_position,scene,ship,keyboard,mouse_down,resize))
,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),((function (raf,camera,directional_light_position,scene,ship,keyboard,mouse_down,resize){
return (function pirates$client$map$world_map_$_world_map_render_$_map_mouse_move(e){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_down))){
return pirates.client.map.map_mouse.call(null,ship,e);
} else {
return null;
}
});})(raf,camera,directional_light_position,scene,ship,keyboard,mouse_down,resize))
], null)], null);
});})(raf,camera,directional_light_position,scene,ship,keyboard,mouse_down,resize))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (raf,camera,directional_light_position,scene,ship,keyboard,mouse_down,resize){
return (function pirates$client$map$world_map_$_world_map_did_mount(this$){
var element = this$.getDOMNode();
var renderer = pirates.client.map.create_renderer.call(null,element);
var water = pirates.client.scenery.create_water.call(null,scene,renderer,camera,directional_light_position);
var resize_renderer = ((function (element,renderer,water,raf,camera,directional_light_position,scene,ship,keyboard,mouse_down,resize){
return (function pirates$client$map$world_map_$_world_map_did_mount_$_a_resize_renderer(){
var w = (0.9 * window.innerWidth);
var h = (0.7 * window.innerHeight);
camera.aspect = (w / h);

camera.updateProjectionMatrix();

return renderer.setSize(w,h);
});})(element,renderer,water,raf,camera,directional_light_position,scene,ship,keyboard,mouse_down,resize))
;
resize_renderer.call(null);

cljs.core.reset_BANG_.call(null,resize,resize_renderer);

window.addEventListener("resize",resize_renderer);

pirates.client.keyboard.listen.call(null,keyboard);

return ((function (element,renderer,water,resize_renderer,raf,camera,directional_light_position,scene,ship,keyboard,mouse_down,resize){
return (function pirates$client$map$world_map_$_world_map_did_mount_$_world_map_animate(t){
cljs.core.reset_BANG_.call(null,raf,window.requestAnimationFrame(pirates$client$map$world_map_$_world_map_did_mount_$_world_map_animate));

pirates.client.keyboard.handle_keyboard.call(null,app_state,keyboard,camera,ship);

return pirates.client.scene.world_map_three_render.call(null,t,app_state,renderer,scene,camera,ship,water);
});})(element,renderer,water,resize_renderer,raf,camera,directional_light_position,scene,ship,keyboard,mouse_down,resize))
.call(null);
});})(raf,camera,directional_light_position,scene,ship,keyboard,mouse_down,resize))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (raf,camera,directional_light_position,scene,ship,keyboard,mouse_down,resize){
return (function pirates$client$map$world_map_$_world_map_will_unmount(this$){
window.removeEventListener("resize",cljs.core.deref.call(null,resize));

window.cancelAnimationFrame(cljs.core.deref.call(null,raf));

return pirates.client.keyboard.unlisten.call(null,keyboard);
});})(raf,camera,directional_light_position,scene,ship,keyboard,mouse_down,resize))
], null));
});

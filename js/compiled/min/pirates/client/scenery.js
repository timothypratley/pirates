// Compiled by ClojureScript 1.8.34 {}
goog.provide('pirates.client.scenery');
goog.require('cljs.core');
pirates.client.scenery.loadSkyBox = (function pirates$client$scenery$loadSkyBox(scene){
var aCubeMap = THREE.ImageUtils.loadTextureCube(["img/px.jpg","img/nx.jpg","img/py.jpg","img/ny.jpg","img/pz.jpg","img/nz.jpg"]);
aCubeMap.format = THREE.RGBFormat;

var aShader = (THREE.ShaderLib["cube"]);
(aShader.uniforms["tCube"]).value = aCubeMap;

var fs = aShader.fragmentShader;
var vs = aShader.vertexShader;
var us = aShader.uniforms;
var aSkyBoxMaterial = (new THREE.ShaderMaterial({"fragmentShader": fs, "vertexShader": vs, "uniforms": us, "depthWrite": false, "side": THREE.BackSide}));
var aSkybox = (new THREE.Mesh((new THREE.BoxGeometry((1000),(1000),(1000))),aSkyBoxMaterial));
return scene.add(aSkybox);
});
pirates.client.scenery.get_height_data = (function pirates$client$scenery$get_height_data(img){
var canvas = document.createElement("canvas");
var w = img.width;
var h = img.height;
canvas.width = w;

canvas.height = h;

var context = canvas.getContext("2d");
context.drawImage(img,(0),(0));

var iter__6990__auto__ = ((function (context,canvas,w,h){
return (function pirates$client$scenery$get_height_data_$_iter__37303(s__37304){
return (new cljs.core.LazySeq(null,((function (context,canvas,w,h){
return (function (){
var s__37304__$1 = s__37304;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37304__$1);
if(temp__4657__auto__){
var s__37304__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37304__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__37304__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__37306 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__37305 = (0);
while(true){
if((i__37305 < size__6989__auto__)){
var vec__37309 = cljs.core._nth.call(null,c__6988__auto__,i__37305);
var r = cljs.core.nth.call(null,vec__37309,(0),null);
var g = cljs.core.nth.call(null,vec__37309,(1),null);
var b = cljs.core.nth.call(null,vec__37309,(2),null);
var a = cljs.core.nth.call(null,vec__37309,(3),null);
cljs.core.chunk_append.call(null,b__37306,(function (){var z = (((r + g) + b) / (50));
if((z < (2))){
return (-1);
} else {
return z;
}
})());

var G__37311 = (i__37305 + (1));
i__37305 = G__37311;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37306),pirates$client$scenery$get_height_data_$_iter__37303.call(null,cljs.core.chunk_rest.call(null,s__37304__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37306),null);
}
} else {
var vec__37310 = cljs.core.first.call(null,s__37304__$2);
var r = cljs.core.nth.call(null,vec__37310,(0),null);
var g = cljs.core.nth.call(null,vec__37310,(1),null);
var b = cljs.core.nth.call(null,vec__37310,(2),null);
var a = cljs.core.nth.call(null,vec__37310,(3),null);
return cljs.core.cons.call(null,(function (){var z = (((r + g) + b) / (50));
if((z < (2))){
return (-1);
} else {
return z;
}
})(),pirates$client$scenery$get_height_data_$_iter__37303.call(null,cljs.core.rest.call(null,s__37304__$2)));
}
} else {
return null;
}
break;
}
});})(context,canvas,w,h))
,null,null));
});})(context,canvas,w,h))
;
return iter__6990__auto__.call(null,cljs.core.partition.call(null,(4),cljs.core.array_seq.call(null,context.getImageData((0),(0),w,h).data)));
});
pirates.client.scenery.create_terrain = (function pirates$client$scenery$create_terrain(scene){
var img = (new Image());
img.onload = ((function (img){
return (function pirates$client$scenery$create_terrain_$_create_terrain_img_load(){
var w = img.width;
var h = img.height;
var geometry = (new THREE.PlaneGeometry((w * (10)),(h * (10)),(w - (1)),(h - (1))));
var material = (new THREE.MeshBasicMaterial({"color": (17408), "side": THREE.DoubleSide}));
var plane = (new THREE.Mesh(geometry,material));
var data = pirates.client.scenery.get_height_data.call(null,img);
plane.rotation.x = (Math.PI / (-2));

var n__7124__auto___37312 = (w * h);
var i_37313 = (0);
while(true){
if((i_37313 < n__7124__auto___37312)){
(plane.geometry.vertices[i_37313]).z = cljs.core.nth.call(null,data,i_37313);

var G__37314 = (i_37313 + (1));
i_37313 = G__37314;
continue;
} else {
}
break;
}

return scene.add(plane);
});})(img))
;

return img.src = "img/caribbean.png";
});
pirates.client.scenery.load_model = (function pirates$client$scenery$load_model(parent,filename){
var loader = (new THREE.ObjectLoader());
return loader.load([cljs.core.str("models/"),cljs.core.str(filename)].join(''),((function (loader){
return (function (obj){
obj.rotation.y = Math.PI;

obj.position.x = 0.5;

obj.name = "model";

return parent.add(obj);
});})(loader))
);
});
pirates.client.scenery.create_water = (function pirates$client$scenery$create_water(scene,renderer,camera,directional_light_position){
var normals = (new THREE.ImageUtils.loadTexture("img/waternormals.jpg"));
normals.wrapS = THREE.RepeatWrapping;

normals.wrapT = THREE.RepeatWrapping;

var water = (new THREE.Water(renderer,camera,scene,{"textureWidth": (512), "textureHeight": (512), "waterNormals": normals, "alpha": 0.8, "sunDirection": directional_light_position.clone().normalize(), "sunColor": (16777215), "waterColor": (7695), "distortionScale": (35)}));
var mirror = (new THREE.Mesh((new THREE.PlaneBufferGeometry((1000),(1000))),water.material));
mirror.rotation.x = (Math.PI / (-2));

mirror.add(water);

scene.add(mirror);

return water;
});
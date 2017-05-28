// Compiled by ClojureScript 1.9.473 {}
goog.provide('visualizing_category_theory.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
visualizing_category_theory.core.setup = (function visualizing_category_theory$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"arrows","arrows",-1209622014),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
visualizing_category_theory.core.update_state = (function visualizing_category_theory$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.1)], null);
});
visualizing_category_theory.core.draw_state = (function visualizing_category_theory$core$draw_state(state){
quil.core.background.call(null,(240));

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var x = ((150) * quil.core.cos.call(null,angle));
var y = ((150) * quil.core.sin.call(null,angle));
var tr__8398__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__8398__auto__);

return quil.core.ellipse.call(null,x,y,(100),(100));
}finally {quil.core.pop_matrix.call(null);
}});
visualizing_category_theory.core.visualizing_category_theory = (function visualizing_category_theory$core$visualizing_category_theory(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"visualizing_category_theory",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,visualizing_category_theory.core.update_state))?(function() { 
var G__8475__delegate = function (args){
return cljs.core.apply.call(null,visualizing_category_theory.core.update_state,args);
};
var G__8475 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8476__i = 0, G__8476__a = new Array(arguments.length -  0);
while (G__8476__i < G__8476__a.length) {G__8476__a[G__8476__i] = arguments[G__8476__i + 0]; ++G__8476__i;}
  args = new cljs.core.IndexedSeq(G__8476__a,0);
} 
return G__8475__delegate.call(this,args);};
G__8475.cljs$lang$maxFixedArity = 0;
G__8475.cljs$lang$applyTo = (function (arglist__8477){
var args = cljs.core.seq(arglist__8477);
return G__8475__delegate(args);
});
G__8475.cljs$core$IFn$_invoke$arity$variadic = G__8475__delegate;
return G__8475;
})()
:visualizing_category_theory.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,visualizing_category_theory.core.setup))?(function() { 
var G__8478__delegate = function (args){
return cljs.core.apply.call(null,visualizing_category_theory.core.setup,args);
};
var G__8478 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8479__i = 0, G__8479__a = new Array(arguments.length -  0);
while (G__8479__i < G__8479__a.length) {G__8479__a[G__8479__i] = arguments[G__8479__i + 0]; ++G__8479__i;}
  args = new cljs.core.IndexedSeq(G__8479__a,0);
} 
return G__8478__delegate.call(this,args);};
G__8478.cljs$lang$maxFixedArity = 0;
G__8478.cljs$lang$applyTo = (function (arglist__8480){
var args = cljs.core.seq(arglist__8480);
return G__8478__delegate(args);
});
G__8478.cljs$core$IFn$_invoke$arity$variadic = G__8478__delegate;
return G__8478;
})()
:visualizing_category_theory.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,visualizing_category_theory.core.draw_state))?(function() { 
var G__8481__delegate = function (args){
return cljs.core.apply.call(null,visualizing_category_theory.core.draw_state,args);
};
var G__8481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8482__i = 0, G__8482__a = new Array(arguments.length -  0);
while (G__8482__i < G__8482__a.length) {G__8482__a[G__8482__i] = arguments[G__8482__i + 0]; ++G__8482__i;}
  args = new cljs.core.IndexedSeq(G__8482__a,0);
} 
return G__8481__delegate.call(this,args);};
G__8481.cljs$lang$maxFixedArity = 0;
G__8481.cljs$lang$applyTo = (function (arglist__8483){
var args = cljs.core.seq(arglist__8483);
return G__8481__delegate(args);
});
G__8481.cljs$core$IFn$_invoke$arity$variadic = G__8481__delegate;
return G__8481;
})()
:visualizing_category_theory.core.draw_state));
});
goog.exportSymbol('visualizing_category_theory.core.visualizing_category_theory', visualizing_category_theory.core.visualizing_category_theory);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8011__8012__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__8011__8012__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),visualizing_category_theory.core.visualizing_category_theory,new cljs.core.Keyword(null,"host-id","host-id",742376279),"visualizing_category_theory"], null));
}

//# sourceMappingURL=core.js.map
webpackJsonp([6],{"+osL":function(t,i){},"4fZK":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});s("urR/");var e=s("Tcn2"),a=s("KQ6f"),n=s("MqhK");a.default.use(e.a);var c={data:function(){return{list:[]}},mounted:function(){var t=this;n.a.getPointList().then(function(i){t.list=i.data.list})},methods:{onClickLeft:function(){this.$router.go(-1)}}},l={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"view-point"},[s("van-nav-bar",{attrs:{title:"我的积分"},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}}),t._v(" "),s("div",{staticClass:"content"},[s("ul",{staticClass:"list"},t._l(t.list,function(i,e){return s("li",{key:e,staticClass:"item"},[s("div",{staticClass:"item-date"},[t._v(t._s(i.createTime.substr(0,10)))]),t._v(" "),s("div",{staticClass:"item-value",class:{"is-negative":!i.action}},[t._v(t._s(i.action?"+":"-")+t._s(i.value))]),t._v(" "),s("div",{staticClass:"item-desc"},[t._v(t._s(i.description))])])}),0)])],1)},staticRenderFns:[]};var o=s("C7Lr")(c,l,!1,function(t){s("+osL")},"data-v-7b2e5cd6",null);i.default=o.exports}});
//# sourceMappingURL=6.16c907e7f840c1e96a9b.js.map
webpackJsonp([5],{RSVL:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});a("mo2Y");var e=a("frYa"),i=a("KQ6f"),n=a("MqhK");i.default.use(e.a);var l={data:function(){return{list:[]}},mounted:function(){var t=this;n.a.getXzCategorytList().then(function(s){setTimeout(function(){t.list=s.data.list},500)})}},c={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"view"},[a("div",{staticClass:"content"},[a("div",{staticClass:"side"},[t.list.length?a("ul",{staticClass:"list"},t._l(t.list,function(s,e){return a("li",{key:e,staticClass:"item",attrs:{"data-cid":s.id}},[a("span",{domProps:{textContent:t._s(s.name)}})])}),0):a("div",{staticClass:"loading"},[a("van-loading")],1)])])])},staticRenderFns:[]};var r=a("C7Lr")(l,c,!1,function(t){a("g7t8")},"data-v-ecf9cb42",null);s.default=r.exports},g7t8:function(t,s){}});
//# sourceMappingURL=5.004d3f2e146774a11faf.js.map
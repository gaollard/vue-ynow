webpackJsonp([8],{"8yCI":function(t,s){},"H+w4":function(t,s,n){"use strict";var a=n("hU59");n.n(a)},RSVL:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});n("H+w4");var a=n("Qyky"),i=n("/xf8"),e=n("MqhK");i.default.use(a.a);var l={data:function(){return{list:[]}},mounted:function(){var t=this;e.a.getXzCategorytList().then(function(s){setTimeout(function(){t.list=s.data.list},500)})}},c={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"view"},[n("div",{staticClass:"content"},[n("div",{staticClass:"side"},[t.list.length?n("ul",{staticClass:"list"},t._l(t.list,function(s,a){return n("li",{key:a,staticClass:"item",attrs:{"data-cid":s.id}},[n("span",{domProps:{textContent:t._s(s.name)}})])}),0):n("div",{staticClass:"loading"},[n("van-loading")],1)])])])},staticRenderFns:[]};var r=n("C7Lr")(l,c,!1,function(t){n("8yCI")},"data-v-a3d8b100",null);s.default=r.exports}});
//# sourceMappingURL=8.21b7033afd2800f03813.js.map
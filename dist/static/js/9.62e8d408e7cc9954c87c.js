webpackJsonp([9],{Do9w:function(t,e){},vEgj:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("/xf8"),s=n("0Fdj"),a=n("MqhK");i.default.use(s.e);var r={data:function(){return{list:[]}},mounted:function(){var t=this;a.a.getCheckinList().then(function(e){t.list=e.data.list})},methods:{onClickLeft:function(){this.$router.go(-1)}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view"},[n("van-nav-bar",{attrs:{title:"我的资料"},on:{"click-left":t.onClickLeft}}),t._v(" "),n("ul",{staticClass:"list"},t._l(t.list,function(e,i){return n("li",{key:i,staticClass:"item"},[t._v("\n      "+t._s(e.date.substr(0,10))+"\n    ")])}),0)],1)},staticRenderFns:[]};var c=n("C7Lr")(r,l,!1,function(t){n("Do9w")},"data-v-be83b2e8",null);e.default=c.exports}});
//# sourceMappingURL=9.62e8d408e7cc9954c87c.js.map
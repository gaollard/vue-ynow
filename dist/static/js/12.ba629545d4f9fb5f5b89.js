webpackJsonp([12],{CjxZ:function(t,e){},vi7c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("4way");var s=i("lFAY"),n=i("/xf8"),o=i("MqhK");n.default.use(s.a);var a={data:function(){return{list:[]}},mounted:function(){this.doGetXzProductCollect()},methods:{onClickLeft:function(){this.$router.go(-1)},doGetXzProductCollect:function(){var t=this;o.a.getXzProductCollect({typeId:1}).then(function(e){t.list=e.data.list})},doDeleteXzProductCollect:function(t){var e=this;o.a.deleteXzProductCollect({recordId:t.id}).then(function(t){e.doGetXzProductCollect()})}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"view-point"},[i("van-nav-bar",{attrs:{title:"我的收藏","left-text":"返回"},on:{"click-left":t.onClickLeft}}),t._v(" "),i("div",{staticClass:"content"},[i("ul",{staticClass:"list"},t._l(t.list,function(e,s){return i("li",{key:s,staticClass:"item"},[i("div",{staticClass:"item-logo",style:{"background-image":"url("+e.itemInfo.imgs[0]+")"}}),t._v(" "),i("div",{staticClass:"item-right"},[i("div",{staticClass:"item-name"},[t._v(t._s(e.itemInfo.name.substr(0,45)))]),t._v(" "),i("div",{staticClass:"item-btm"},[i("span",{staticClass:"item-price"},[t._v("￥"+t._s(e.itemInfo.price/100))]),t._v(" "),i("span",{staticClass:"item-discount"},[t._v(t._s(e.itemInfo.depreciation))]),t._v(" "),i("span",{staticClass:"item-postion"},[t._v(t._s(e.itemInfo.position))]),t._v(" "),i("span",{staticClass:"item-btn",on:{click:function(i){t.doDeleteXzProductCollect(e)}}},[t._v("取消收藏")])])])])}),0)])],1)},staticRenderFns:[]};var l=i("C7Lr")(a,c,!1,function(t){i("CjxZ")},"data-v-23788542",null);e.default=l.exports}});
//# sourceMappingURL=12.ba629545d4f9fb5f5b89.js.map
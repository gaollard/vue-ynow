webpackJsonp([10],{TIjo:function(t,e){},eSIO:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("urR/");var a=n("Tcn2"),l=n("KQ6f"),r=n("MqhK");l.default.use(a.a);var v={data:function(){return{userInfo:{}}},methods:{onClickLeft:function(){this.$router.go(-1)}},mounted:function(){var t=this;r.a.getUserInfo().then(function(e){t.userInfo=e.data})}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"我的资料","left-text":"返回"},on:{"click-left":t.onClickLeft}}),t._v(" "),n("div",{staticClass:"content"},[n("van-cell-group",[n("van-cell",{attrs:{title:"头像",value:"无"}}),t._v(" "),n("van-cell",{attrs:{title:"昵称",value:t.userInfo.nickname}}),t._v(" "),n("van-cell",{attrs:{title:"背景图",value:"无"}}),t._v(" "),n("van-cell",{attrs:{title:"性别",value:1==t.userInfo.gender?"男":"女"}}),t._v(" "),n("van-cell",{attrs:{title:"手机号码",value:t.userInfo.mobile}}),t._v(" "),n("van-cell",{attrs:{title:"电子邮箱",value:t.userInfo.email}}),t._v(" "),n("van-cell",{attrs:{title:"QQ绑定",value:"无"}}),t._v(" "),n("van-cell",{attrs:{title:"微信绑定",value:"无"}})],1)],1)],1)},staticRenderFns:[]};var c=n("C7Lr")(v,u,!1,function(t){n("TIjo")},"data-v-0b3b764c",null);e.default=c.exports}});
//# sourceMappingURL=10.4ab6c64ccff07f0a2619.js.map
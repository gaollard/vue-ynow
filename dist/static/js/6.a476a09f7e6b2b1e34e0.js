webpackJsonp([6],{SWUO:function(e,t,s){var a=s("1TJe");a(a.S+a.F*!s("n3Xl"),"Object",{defineProperty:s("+oMM").f})},Y4nq:function(e,t){},a3Yh:function(e,t,s){"use strict";t.__esModule=!0;var a,r=s("liLe"),n=(a=r)&&a.__esModule?a:{default:a};t.default=function(e,t,s){return t in e?(0,n.default)(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}},liLe:function(e,t,s){e.exports={default:s("t2Bb"),__esModule:!0}},t2Bb:function(e,t,s){s("SWUO");var a=s("iKmH").Object;e.exports=function(e,t,s){return a.defineProperty(e,t,s)}},uY4G:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("lC5x"),r=s.n(a),n=(s("GHWT"),s("1yQd")),i=s("J0Oq"),o=s.n(i),c=s("a3Yh"),u=s.n(c),l=(s("pkmQ"),s("p8HH")),d=s("MqhK"),f={comments:u()({},l.a.name,l.a),data:function(){return{userInfo:null}},computed:{stl:function(){return{"background-image":"url("+this.userInfo.avatar+")"}}},mounted:function(){this.doGetUserProfile()},methods:{doGetUserProfile:function(){var e=this;return o()(r.a.mark(function t(){var s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.getUserProfile({uid:e.$route.params.userId});case 3:0==+(s=t.sent).retCode?e.userInfo=s.data:Object(n.a)(s.errMsg),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,e,[[0,7]])}))()},handleFollow:function(){var e=this;return o()(r.a.mark(function t(){var s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.addFollow({followId:e.$route.params.userId});case 3:0==+(s=t.sent).retCode?n.a.success("添加成功"):Object(n.a)(s.errMsg),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,e,[[0,7]])}))()}}},v={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.userInfo?s("div",{staticClass:"view"},[s("div",{staticClass:"card-banner"},[s("div",{staticClass:"blur-bg",style:e.stl}),e._v(" "),s("div",{staticClass:"box"},[s("div",{staticClass:"userInfo"},[s("img",{staticClass:"avatar",attrs:{src:e.userInfo.avatar}}),e._v(" "),s("p",{staticClass:"account"},[e._v(e._s(e.userInfo.nickname))]),e._v(" "),s("p",{staticClass:"nickname"},[e._v("昵称：独到之处找我")])]),e._v(" "),s("div",{staticClass:"desc"},[e._v("现居"+e._s(e.userInfo.residence)+"，"+e._s(e.userInfo.college)+"毕业。")]),e._v(" "),e._m(0),e._v(" "),s("van-button",{staticClass:"follow",attrs:{size:"small",type:"primary"},on:{click:e.handleFollow}},[e._v("+关注")])],1)])]):e._e()},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"ui-flex assets"},[t("div",[this._v("50超赞")]),this._v(" "),t("div",[this._v("2关注")]),this._v(" "),t("div",[this._v("57粉丝")])])}]};var _=s("C7Lr")(f,v,!1,function(e){s("Y4nq")},"data-v-96eadbfe",null);t.default=_.exports}});
//# sourceMappingURL=6.a476a09f7e6b2b1e34e0.js.map
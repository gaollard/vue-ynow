webpackJsonp([6],{"4YfN":function(t,e,s){"use strict";e.__esModule=!0;var n,a=s("aA9S"),i=(n=a)&&n.__esModule?n:{default:n};e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t}},HVFi:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("4YfN"),a=s.n(n),i=s("nUeE"),r=s.n(i),u=s("R4Sj"),c=r.a.get("userInfo"),o={data:function(){return{}},computed:a()({},Object(u.b)({userList:function(t){return t.chat.userList},msgList:function(t){return t.chat.msgList},msgObj:function(t){return t.chat.msgObj}})),methods:{getMsgKey:function(t){return c.id+"_"+t.id},getLastMsg:function(t){var e=this.getMsgKey(t);return this.msgObj[e][0].content}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"view"},[s("div",{staticClass:"list"},t._l(t.userList,function(e){return s("div",{key:e.id,staticClass:"item",attrs:{"data-uid":e.id},on:{click:function(s){t.$router.push("/chatItem/"+e.id)}}},[s("img",{staticClass:"item-avatar",attrs:{src:e.avatar,alt:"头像"}}),t._v(" "),s("div",[s("div",{staticClass:"item-name"},[t._v(t._s(e.nickname))]),t._v(" "),s("div",{staticClass:"item-msg",domProps:{textContent:t._s(t.getLastMsg(e))}})])])}),0)])},staticRenderFns:[]};var f=s("C7Lr")(o,d,!1,function(t){s("k+Gh")},"data-v-ac5f89e2",null);e.default=f.exports},"k+Gh":function(t,e){}});
//# sourceMappingURL=6.4477220365a886c6d5c4.js.map
webpackJsonp([8],{NQ0Q:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("4YfN"),r=n.n(a),s=(n("elc6"),n("ypB5")),i=(n("xDMY"),n("gH86")),o=(n("X4Fc"),n("v+Hq")),c=n("xd7I"),u=n("nUeE"),f=n.n(u),l=n("R4Sj"),d=f.a.get("userInfo");c.default.use(s.a).use(i.a).use(o.a);var m={data:function(){return{userInfo:d,msgList:[],content:"mock message"}},computed:r()({},Object(l.b)({list:function(t){var e=d.id+"_"+this.$route.params.partnerId,n=[].concat(t.chat.msgObj[e]||[]);return n.sort(function(t,e){return e.create_time<t.create_time?1:e.create_time===t.create_time?0:-1}),n},partnerInfo:function(t){var e=this;return t.chat.userList.find(function(t){return+t.id==+e.$route.params.partnerId})}})),methods:{getAvatar:function(t){return this.isFromMe(t)?this.userInfo.avatar:this.partnerInfo.avatar},isFromMe:function(t){return+t.f_from==+this.userInfo.id},itemCls:function(t){return this.isFromMe(t)?"item-mine":"item-partner"},doSendMsg:function(){this.$store.dispatch("chat/sendMsg",{to:this.$route.params.partnerId,content:this.content})}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view"},[n("van-nav-bar",{attrs:{title:t.partnerInfo.nickname,"left-text":"返回","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),t._v(" "),n("div",{staticClass:"list content"},t._l(t.list,function(e){return n("div",{key:e.id,staticClass:"item",class:t.itemCls(e),attrs:{"data-from":e.from,"data-to":e.to},on:{click:function(n){return t.$router.push("/chatItem/"+e.id)}}},[n("img",{staticClass:"item-avatar",attrs:{src:t.getAvatar(e),alt:"头像"}}),t._v(" "),n("div",{staticClass:"item-name"},[t._v(t._s(e.content))])])}),0),t._v(" "),n("div",{staticClass:"btm-fixed"},[n("div",{staticClass:"form"},[n("van-field",{staticClass:"form-input",attrs:{placeholder:"请输入用户名"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),n("van-button",{staticClass:"form-submit",attrs:{type:"primary"},on:{click:t.doSendMsg}},[t._v("发送")])],1)])],1)},staticRenderFns:[]};var p=n("C7Lr")(m,v,!1,function(t){n("kFwE")},"data-v-adaea7a0",null);e.default=p.exports},kFwE:function(t,e){}});
//# sourceMappingURL=8.af474c36960470e44450.js.map
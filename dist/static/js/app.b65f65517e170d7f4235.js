webpackJsonp([18],{"/Sfe":function(t,e){},0:function(t,e){},"3wqn":function(t,e){},"4ye5":function(t,e){},EYUC:function(t,e){},HiBx:function(t,e){},MQTf:function(t,e){},MqhK:function(t,e,n){"use strict";var a=n("T/88"),i=n("rVsN"),r=n.n(i),o=n("6iV/"),s=n.n(o),c=n("aozt"),u=n.n(c),l=n("uAC3"),d=n.n(l),v=n("kIhv"),f=n.n(v);u.a.interceptors.request.use(function(t){var e=d.a.get("token")||"",n=new f.a(t.url,!0);return n.query.token=e,t.url=n.toString(),t.data||(t.data={}),"post"===t.method&&(t.data=s.a.stringify(t.data),t.headers["Content-Type"]="application/x-www-form-urlencoded"),t},function(t){return r.a.reject(t)}),u.a.interceptors.response.use(function(t){return t.data},function(t){return r.a.reject(t)});var m=u.a;e.a={get7nToken:function(){return m.get(a.a+"/upload/getToken")},login:function(t){var e=t.mobile,n=t.password;return m.post(a.a+"/user/login",{mobile:e,password:n})},getUserInfo:function(){return m.get(a.a+"/user/userInfo")},updateUserInfo:function(t){return m.post(a.a+"/user/userInfo",t)},getCheckinStatus:function(){return m.get(a.a+"/checkin")},checkin:function(){return m.post(a.a+"/checkin")},getCheckinList:function(){return m.get(a.a+"/checkin/list")},getPointList:function(){return m.get(a.a+"/point/list")},getdeliveryAddressList:function(){return m.get(a.a+"/deliveryAddress")},getDemandList:function(){return m.get(a.a+"/demand")},getXzProductList:function(){return m.get(a.a+"/xzProduct")},getXzProductItem:function(t){return m.get(a.a+"/xzProduct/"+t)},createXzProduct:function(t){return m.post(a.a+"/xzProduct/",t)},getXzCategorytList:function(){return m.get(a.a+"/xzCategory")},getXzProductCollect:function(t){var e=t.typeId,n=void 0===e?1:e;return m.get(a.a+"/xzProductCollect?typeId="+n)},createXzProductCollect:function(t){var e=t.itemId,n=t.typeId,i=void 0===n?1:n;return m.post(a.a+"/xzProductCollect?typeId="+i,{itemId:e})},deleteXzProductCollect:function(t){var e=t.recordId,n=t.itemId,i=t.typeId,r=void 0===i?1:i;return m.delete(a.a+"/xzProductCollect/"+e+"?typeId="+r+"&itemId="+n)},getXzProductCollectState:function(t){var e=t.itemId,n=t.typeId,i=void 0===n?1:n;return m.get(a.a+"/user/xzProductCollectState/"+e+"?typeId="+i)},getChatList:function(){return m.get(a.a+"/chat")},getChatItem:function(t){var e=t.partnerId;return m.get(a.a+"/chat/"+e)},getSfCityList:function(){return m.get(a.a+"/sfCity")},addAddress:function(t){var e=t.mobile,n=t.address,i=t.street,r=t.username,o=t.city,s=t.province,c=t.district,u=t.zip;return m.post(a.a+"/deliveryAddress",{mobile:e,address:n,street:i,username:r,city:o,province:s,district:c,zip:u})},removeAddress:function(t){var e=t.id;return m.delete(a.a+"/deliveryAddress/"+e)},register:function(t){var e=t.mobile,n=t.password;return m.post(a.a+"/user/register",{mobile:e,password:n})}}},"T/88":function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a="http://ynowapi.airtlab.com",i="ws://ynowapi.airtlab.com:8001"},hU59:function(t,e){},lbQ3:function(t,e){},nzb2:function(t,e){},pHHS:function(t,e){},q5Jx:function(t,e){},qSXp:function(t,e){},"u/MD":function(t,e){},"wu/g":function(t,e){},x35b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("/xf8"),i=(n("62ux"),n("Y+un")),r=(n("fQ6+"),n("cRJE"));a.default.use(i.a).use(r.a);var o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("van-tabbar",{directives:[{name:"show",rawName:"v-show",value:t.$route.meta.tabbar,expression:"$route.meta.tabbar"}],staticClass:"tabbar",on:{change:t.handleChange},model:{value:t.activeIndex,callback:function(e){t.activeIndex=e},expression:"activeIndex"}},[n("van-tabbar-item",{attrs:{icon:"home-o",to:"/"}},[t._v("闲鸭")]),t._v(" "),n("van-tabbar-item",{attrs:{icon:"apps-o",to:"/category"}},[t._v("分类")]),t._v(" "),n("van-tabbar-item",{attrs:{icon:"fire-o",to:"/auction"}},[t._v("竞拍")]),t._v(" "),n("van-tabbar-item",{attrs:{info:"5",icon:"chat-o",to:"/chat"}},[t._v("消息")]),t._v(" "),n("van-tabbar-item",{attrs:{icon:"manager-o",to:"/account"}},[t._v("我的")])],1),t._v(" "),n("keep-alive",[n("router-view",{staticClass:"view",class:[{"has-tabbar":t.$route.meta.tabbar},t.$route.name]})],1)],1)},staticRenderFns:[]};var s=n("C7Lr")({name:"App",data:function(){return{activeIndex:0}},methods:{handleChange:function(t){this.activeIndex=t}},mounted:function(){this.$store.dispatch("chat/initSocket"),this.$store.dispatch("chat/getChatList")}},o,!1,function(t){n("wu/g")},"data-v-5cec0f07",null).exports,c=n("KGCO"),u=n("MqhK"),l={data:function(){return{userInfo:null,checkinStatus:!0}},mounted:function(){this.doGetUserInfo(),this.doGetCheckInStatus()},methods:{doGetCheckInStatus:function(){var t=this;u.a.getCheckinStatus().then(function(e){t.checkinStatus=1==+e.data.status})},doGetUserInfo:function(){var t=this;u.a.getUserInfo().then(function(e){t.userInfo=e.data})},handleCheckin:function(){var t=this;this.checkinStatus?this.$router.push("/checkin"):u.a.checkin().then(function(e){t.doGetCheckInStatus(),t.$router.push("/checkin")})}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view-account"},[n("div",{staticClass:"card-cover"},[t.userInfo?[n("img",{staticClass:"avatar",attrs:{src:t.userInfo.avatar}}),t._v(" "),n("div",{staticClass:"profile"},[n("div",{staticClass:"nickname"},[t._v(t._s(t.userInfo.nickname))]),t._v(" "),n("div",{staticClass:"mobile"},[t._v(t._s(t.userInfo.mobile))])]),t._v(" "),n("div",{staticClass:"btn-checkin"},[n("span",{on:{click:t.handleCheckin}},[t._v(t._s(t.checkinStatus?"已签到":"签到"))])])]:[n("div",[t._v("加载中...")])]],2),t._v(" "),n("div",{staticClass:"card-menu"},[n("router-link",{attrs:{to:"/follow"}},[t._v("关注")]),t._v(" "),n("router-link",{attrs:{to:"/collect"}},[t._v("收藏")]),t._v(" "),n("router-link",{attrs:{to:"/like"}},[t._v("喜欢")]),t._v(" "),n("router-link",{attrs:{to:"/point"}},[t._v("积分")]),t._v(" "),n("router-link",{attrs:{to:"/order"}},[t._v("订单")])],1),t._v(" "),n("div",{staticClass:"card-link"},[n("van-cell",{attrs:{title:"发布宝贝",to:"/xzProductCreate"}}),t._v(" "),n("van-cell",{attrs:{title:"我的发布",to:"/myProdcust"}}),t._v(" "),n("van-cell",{attrs:{title:"地址管理",to:"/DeliveryAddress"}}),t._v(" "),n("van-cell",{attrs:{title:"账户设置",to:"/userInfo"}}),t._v(" "),n("van-cell",{attrs:{title:"立即登录",to:"/login"}})],1),t._v(" "),n("div",{staticClass:"join-us"},[t._v("\n    本站属于EggJS练习，大部分模块正在建设，欢迎你的加入\n  ")])])},staticRenderFns:[]};var v=n("C7Lr")(l,d,!1,function(t){n("q5Jx")},"data-v-968bde1c",null).exports,f=(n("GHWT"),n("1yQd")),m=(n("ocLK"),n("gFtn")),h=(n("4way"),n("lFAY")),p=(n("pkmQ"),n("p8HH"));a.default.use(h.a).use(p.a);var _={data:function(){return{list:[]}},mounted:function(){this.doGetAddressList()},methods:{onClickLeft:function(){this.$router.go(-1)},doGetAddressList:function(){var t=this;u.a.getdeliveryAddressList().then(function(e){t.list=e.data.list})},handleRemove:function(t){var e=this;m.a.confirm({title:"标题",message:"删除之后不可恢复"}).then(function(){u.a.removeAddress({id:t}).then(function(t){0==+t.errCode?(Object(f.a)("删除成功"),e.doGetAddressList()):Object(f.a)(t.errMsg)})})}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view-deliveryAddress"},[n("van-nav-bar",{attrs:{title:"收货地址","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),n("div",{staticClass:"content"},[n("ul",{staticClass:"list"},t._l(t.list,function(e,a){return n("li",{key:a,staticClass:"item"},[n("div",{staticClass:"item__hd"},[n("span",{staticClass:"username"},[t._v(t._s(e.username))]),t._v(" "),n("span",{staticClass:"mobile"},[t._v(t._s(e.mobile))]),t._v(" "),n("span",{staticClass:"remark"},[t._v("公司")])]),t._v(" "),n("div",{staticClass:"item__bd"},[n("span",[t._v(t._s(e.province))]),t._v(" "),n("span",[t._v(t._s(e.city))]),t._v(" "),n("span",[t._v(t._s(e.district))]),t._v(" "),n("span",[t._v(t._s(e.address))])]),t._v(" "),n("div",{staticClass:"item__ft"},[n("van-button",{staticClass:"btn btn-detail",attrs:{plain:"",type:"primary",size:"small"}},[t._v("修改地址")]),t._v(" "),n("van-button",{staticClass:"btn btn-remove",attrs:{plain:"",type:"primary",size:"small"},on:{click:function(n){t.handleRemove(e.id)}}},[t._v("删除地址")])],1)])}),0)]),t._v(" "),n("div",{staticClass:"bottom-fixed"},[n("button",{staticClass:"btn",on:{click:function(e){t.$router.push("/addAddress")}}},[t._v("\n      新建收货地址\n    ")])])],1)},staticRenderFns:[]};var b=n("C7Lr")(_,g,!1,function(t){n("EYUC")},"data-v-01a6e47e",null).exports,C=n("GEjq"),k=n("ZpOW"),I=n.n(k),y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.list=null,e}return C.b(e,t),e.prototype.mounted=function(){var t=this;u.a.getDemandList().then(function(e){t.list=e.data.list})},e=C.a([I.a],e)}(a.default),L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view"},[t._m(0),t._v(" "),n("ul",{staticClass:"demand-list"},t._l(t.list,function(e,a){return n("li",{key:a,staticClass:"demand-item"},[n("div",{staticClass:"demand-item__hd"},[n("span",{staticClass:"username"},[t._v(t._s(e.title))])]),t._v(" "),n("div",{staticClass:"demand-item__bd"},[t._v(t._s(e.description))]),t._v(" "),n("div",{staticClass:"demand-item__ft"})])}),0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"filter"},[e("ul",[e("li",[this._v("赏金")]),this._v(" "),e("li",[this._v("类别")]),this._v(" "),e("li",[this._v("信用")]),this._v(" "),e("li",[this._v("地区")])])])}]};var x=n("C7Lr")(y,L,!1,function(t){n("pHHS")},"data-v-049cad95",null).exports;a.default.use(c.a);var P=new c.a({mode:"history",routes:[{path:"/",name:"welcome",component:function(){return n.e(1).then(n.bind(null,"Dgg9"))},meta:{tabbar:!0}},{path:"/Welcome",name:"Welcome",component:function(){return n.e(16).then(n.bind(null,"ZO6g"))}},{path:"/Account",name:"Account",component:v,meta:{tabbar:!0}},{path:"/DeliveryAddress",name:"DeliveryAddress",component:b},{path:"/Demand",name:"Demand",component:x},{path:"/Login",name:"Login",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"T+/8"))}},{path:"/Point",name:"Point",component:function(){return n.e(13).then(n.bind(null,"4fZK"))}},{path:"/category",name:"category",component:function(){return n.e(11).then(n.bind(null,"RSVL"))},meta:{tabbar:!0}},{path:"/checkin",name:"checkin",component:function(){return n.e(9).then(n.bind(null,"vEgj"))}},{path:"/xzProduct",name:"xzProduct",component:function(){return n.e(1).then(n.bind(null,"Dgg9"))},meta:{tabbar:!0}},{path:"/xzProductItem/:itemId",name:"xzProductItem",component:function(){return n.e(4).then(n.bind(null,"UmRu"))}},{path:"/auction",name:"auction",component:function(){return n.e(15).then(n.bind(null,"tnjb"))},meta:{tabbar:!0}},{path:"/userInfo",name:"userInfo",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"eSIO"))}},{path:"/collect",name:"collect",component:function(){return n.e(14).then(n.bind(null,"vi7c"))}},{path:"/xzProductCreate",name:"xzProductCreate",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"oW1Z"))}},{path:"/chat",name:"chat",component:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"HVFi"))},meta:{tabbar:!0}},{path:"/chatItem/:partnerId",name:"chatItem",component:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"NQ0Q"))}},{path:"/addAddress",name:"addAddress",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"PLh0"))}},{path:"/register",name:"register",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"bqOp"))}},{path:"*",component:function(){return n.e(8).then(n.bind(null,"51AI"))}}]}),w=n("R4Sj"),z=n("MgeX"),A=n.n(z),S=n("a7o1"),j=n.n(S),$=n("nUeE"),M=n.n($),E=n("T/88"),T=console.log,q=M.a.get("userInfo"),O=null,G={namespaced:!0,state:function(){return{userList:[],msgList:[],msgObj:{}}},getters:{},mutations:{getAllMsg:function(t,e){var n=e.userList,a=e.msgList,i=e.msgObj;t.userList=n,t.msgList=a,t.msgObj=i}},actions:{initSocket:function(t){var e=t.dispatch,n=j()(E.b,{query:{room:"demo",token:q.token||Math.random()},transports:["websocket"]});n.on("res",function(t){console.log("res f_from server: %s!",t)}),n.on("connect",function(){var t=n.id;T("#connect,",t,n),n.on("sendMsg",function(t){console.log(t),e("getChatList"),e("scrollToLast")})}),n.on("receiveAllMsg",function(t){T("#receiveAllMsg,",t)}),n.on("online",function(t){T("#online,",t)}),n.on("disconnect",function(t){T("#disconnect",t)}),n.on("disconnecting",function(){T("#disconnecting")}),n.on("error",function(){T("#error")}),O=n},getChatList:function(t){t.state;var e=t.commit;u.a.getChatList().then(function(t){var n=t.data.msgList,a=t.data.userList,i={};function r(t,e){return e.create_time>t.create_time?1:e.create_time===t.create_time?0:-1}n.forEach(function(t){var e=void 0;e=+t.f_from==+q.id?q.id+"_"+t.f_to:q.id+"_"+t.f_from;var n=t.f_from+"_"+t.f_to,a=t.f_to+"_"+t.f_from;e!==n&&e!==a||(i[e]||(i[e]=[]),i[e]&&i[e].push(t))}),A()(i).forEach(function(t){t.sort(r)}),a.sort(function(t,e){var n=q.id+"_"+t.id,a=q.id+"_"+e.id;return r(i[n][0],i[a][0])}),e("getAllMsg",{msgObj:i,msgList:n,userList:a})})},sendMsg:function(t,e){t.state,t.commit;var n={to:e.to,content:e.content,from:q.id};O.emit("sendMsg",{payload:n})},scrollToLast:function(){var t=document.querySelector(".view.chatItem .content");t.scrollTop=t.scrollHeight+100}}};a.default.use(w.a);var H=new w.a.Store({state:{},getters:{},mutations:{},actions:{},modules:{chat:G}}),D=(n("nzb2"),n("HiBx"),n("lbQ3"),n("0Fdj"));a.default.use(D.a).use(D.e).use(D.b).use(D.i).use(D.j).use(D.c).use(D.h).use(D.d),a.default.config.productionTip=!1,new a.default({el:"#app",store:H,router:P,components:{App:s},template:"<App/>"}).$mount("#app")}},["x35b"]);
//# sourceMappingURL=app.b65f65517e170d7f4235.js.map
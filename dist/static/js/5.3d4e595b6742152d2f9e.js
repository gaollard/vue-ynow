webpackJsonp([5],{A8o8:function(e,n,t){"use strict";var i=t("hU59");t.n(i)},PLh0:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});t("GHWT");var i=t("1yQd"),r=t("4YfN"),o=t.n(r),s=(t("TNZe"),t("o0ft")),a=(t("pkmQ"),t("p8HH")),l=(t("A8o8"),t("qGRE")),c=(t("k5uY"),t("kReC")),u=t("/xf8"),d=t("MqhK"),f=t("3cXf"),m=t.n(f),h=(t("hU59"),t("mQRF"),t("gyQz")),v=(t("MQTf"),t("1CtW"));u.default.use(h.a).use(v.a);var p={data:function(){return{loading:!0,columnNum:3,columns:[]}},props:{visible:!0},mounted:function(){var e=this;d.a.getSfCityList().then(function(n){var t=n.data.list;t=m()(t).replace(/areaId/g,"value").replace(/areaName/g,"name").replace(/children/g,"children").replace(/id/g,"value"),t=JSON.parse(t),e.loading=!1,e.list=t,e.initCityList()})},methods:{onChange:function(e,n,t){this.picker=e,n[t].children&&n[t].children.length&&this.rawIndex(t+1,n[t].children)},initCityList:function(){for(var e=0;e<this.columnNum;e++)this.columns[e]={values:[],defaultIndex:0};this.rawIndex(0,this.list)},rawIndex:function(e,n){e!==this.columnNum&&(this.picker?this.picker.setColumnValues(e,n):this.columns[e].values=n,n.length&&n[0].children&&n[0].children.length?this.rawIndex(e+1,n[0].children):this.rawIndex(e+1,[]))},onCancel:function(e){this.$emit("on-cancel",e)},onConfirm:function(e){this.$emit("on-confirm",e)}}},b={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("van-popup",{attrs:{position:"bottom"},model:{value:e.visible,callback:function(n){e.visible=n},expression:"visible"}},[t("van-picker",{attrs:{columns:e.columns,loading:e.loading,"show-toolbar":"",title:"选择地址","value-key":"name"},on:{change:e.onChange,cancel:e.onCancel,confirm:e.onConfirm}})],1)},staticRenderFns:[]};var k=t("C7Lr")(p,b,!1,function(e){t("uWox")},"data-v-d2886b0c",null).exports;u.default.use(s.a).use(a.a).use(l.a).use(c.a);var C={components:{cityPicker:k},data:function(){return{showCityPicker:!1,form:{username:"",mobile:"",address:"",street:""}}},computed:{disabled:function(){var e=this.form;return!(e.username.length>1&&11===e.mobile.length&&e.street.length>5&&e.address.length)}},methods:{onConfirm:function(e){var n=e.filter(function(e){return e}).map(function(e){return e.name}).join(" ");this.showCityPicker=!1,this.form.address=n,this.form=o()({},this.form)},handleClick:function(){var e=this.form.address.split(" ");d.a.addAddress({username:this.form.username,mobile:this.form.mobile,city:e[1]||"",province:e[0]||"",district:e[2]||"",zip:5e5,address:this.form.address+this.form.street}).then(function(e){0==+e.errCode&&Object(i.a)("添加成功"),console.log(e)}).catch(function(e){console.log(e)})}}},g={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"view"},[t("van-cell-group",[t("van-field",{attrs:{placeholder:"收件人姓名(2位以上字符)"},model:{value:e.form.username,callback:function(n){e.$set(e.form,"username",n)},expression:"form.username"}}),e._v(" "),t("van-field",{attrs:{placeholder:"收件人手机号码(11位)"},model:{value:e.form.mobile,callback:function(n){e.$set(e.form,"mobile",n)},expression:"form.mobile"}}),e._v(" "),t("van-field",{attrs:{placeholder:"详细地址(5位及以上字符)"},model:{value:e.form.street,callback:function(n){e.$set(e.form,"street",n)},expression:"form.street"}}),e._v(" "),t("van-cell",{attrs:{title:"所在城市：","is-link":"",value:e.form.address},on:{click:function(n){e.showCityPicker=!e.showCityPicker}}})],1),e._v(" "),t("cityPicker",{staticClass:"picker-wrap",attrs:{visible:e.showCityPicker},on:{"on-confirm":e.onConfirm,"on-cancel":function(n){e.showCityPicker=!1}}}),e._v(" "),t("van-button",{staticClass:"submit-button",attrs:{disabled:e.disabled,size:"large",type:"primary"},on:{click:e.handleClick}},[e._v("提交")])],1)},staticRenderFns:[]};var y=t("C7Lr")(C,g,!1,function(e){t("Vzga")},"data-v-ef8995f8",null);n.default=y.exports},Vzga:function(e,n){},k5uY:function(e,n,t){"use strict";var i=t("hU59");t.n(i)},mQRF:function(e,n){},uWox:function(e,n){}});
//# sourceMappingURL=5.3d4e595b6742152d2f9e.js.map
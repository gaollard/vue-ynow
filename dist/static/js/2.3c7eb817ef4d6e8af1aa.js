webpackJsonp([2],{"+yCD":function(e,t){},"/ReL":function(e,t,n){"use strict";var r=n("lC5x"),a=n.n(r),i=(n("GHWT"),n("1yQd")),o=n("J0Oq"),c=n.n(o),s=(n("H+w4"),n("Qyky")),l=(n("9lm5"),n("gyQz")),u=(n("FeyD"),n("1CtW")),d=n("/xf8"),f=n("MqhK");d.default.use(s.a).use(l.a).use(u.a);var h={props:{value:{type:Boolean,default:!1}},data:function(){return{list:[],loading:!1,index:1}},watch:{value:function(e){console.log(e)}},mounted:function(){var e=this;return c()(a.a.mark(function t(){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,f.a.getXzCategorytList();case 4:0==+(n=t.sent).retCode?e.list=n.data.list:Object(i.a)(n.errMsg),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:e.loading=!1;case 12:case"end":return t.stop()}},t,e,[[1,8]])}))()},methods:{onCancel:function(){this.$emit("on-cancel")},onConfirm:function(e){this.$emit("on-confirm",e)}}},m={render:function(){var e=this.$createElement,t=this._self._c||e;return this.value?t("div",{staticClass:"popup"},[t("van-picker",{ref:"picker",staticClass:"picker",attrs:{"show-toolbar":"",title:"选择分类",loading:this.loading,columns:this.list,"defualt-index":3,"value-key":"name"},on:{cancel:this.onCancel,confirm:this.onConfirm}})],1):this._e()},staticRenderFns:[]};var p=n("C7Lr")(h,m,!1,function(e){n("wOyF")},"data-v-54b8f486",null);t.a=p.exports},"36TX":function(e,t,n){"use strict";n("H+w4");var r=n("Qyky"),a=(n("9lm5"),n("gyQz")),i=(n("FeyD"),n("1CtW")),o=n("/xf8"),c=n("T/88");o.default.use(r.a).use(a.a).use(i.a);var s={props:{value:{type:Boolean,default:!1},defaultIndex:{type:Number,default:0}},data:function(){return{columns:c.b,loading:!1}},methods:{onCancel:function(){this.$emit("on-cancel")},onConfirm:function(e){this.$emit("on-confirm",e)}}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return this.value?t("div",{staticClass:"popup"},[t("van-picker",{staticClass:"picker",attrs:{"show-toolbar":"",title:"选择分类",loading:this.loading,columns:this.columns,"value-key":"name"},on:{cancel:this.onCancel,confirm:this.onConfirm}})],1):this._e()},staticRenderFns:[]};var u=n("C7Lr")(s,l,!1,function(e){n("+yCD")},"data-v-02b3776e",null);t.a=u.exports},"5p2U":function(e,t){},"98Tg":function(e,t){},BLOL:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA0klEQVR4Xu3bwQ3CQAxE0dla0gY3mkKcuKUqbrThWkAo6WGQeGnAkZXd/D+yV0rPzOxJbmf5fdu2e+NVVqPot6YG+AIcAXeAS9BfwG8QBwChowNIEApzATLEBhtmSocbXZcHCEQkQiIxmaBMUCYoE5QJygRlgjLBeiY4M4+SEF2TXM7aryTPxnusmXk3Cv9KTQ34+yPQ+hTJEBkiQ2SIDJEhMkSG6jIEhEodQIJIEAkiQSSIBJEgEkSCRmXNChuWNi1uXN6+gIUJCxMWJixMVBYmPpG4ParnMh3BAAAAAElFTkSuQmCC"},I8yz:function(e,t,n){"use strict";var r=n("hU59"),a=(n.n(r),n("5p2U"));n.n(a)},OBs8:function(e,t){},oW1Z:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("3cXf"),a=n.n(r),i=n("lC5x"),o=n.n(i),c=(n("GHWT"),n("1yQd")),s=n("J0Oq"),l=n.n(s),u=n("4YfN"),d=n.n(u),f=(n("4way"),n("lFAY")),h=(n("TNZe"),n("o0ft")),m=(n("I8yz"),n("QXwt")),p=(n("A8o8"),n("qGRE")),v=(n("k5uY"),n("kReC")),g=(n("pkmQ"),n("p8HH")),y=(n("7cF9"),n("3UBn")),k=(n("ocLK"),n("gFtn")),C=n("/xf8"),A=n("R4Sj"),x=n("MqhK"),w=n("kqgM"),b=n("xgXK"),I=n("/ReL"),P=n("36TX"),E=n("T/88");C.default.use(f.a).use(h.a).use(m.a).use(p.a).use(v.a).use(g.a).use(y.a).use(k.a);var W={components:{cityPicker:b.a,categoryPicker:I.a,tradeWayPicker:P.a},data:function(){return{checked:"",form:{price:"",title:"",city:"",description:"",depreciation:"",categoryId:"",categoryName:"",tradeWayId:"",tradeWayName:""},pickList:[],token:"",categoryValue:null,showCategoryPicker:!1,tradeWayPickerValue:null,showTradeWayPicker:!1,cityPickerValue:null,showCityPicker:!1,errors:[],showFormError:!1}},computed:d()({},Object(A.b)({categoryList:function(e){return e.xzProduct.category.list}}),{tradeWayName:function(){var e=this,t=E.b.findIndex(function(t){return+t.id==+e.form.tradeWayId});return-1!==t?E.b[t].name:""},categoryName:function(){var e=this,t=this.categoryList.findIndex(function(t){return+t.id==+e.form.categoryId});return-1!==t?this.categoryList[t].name:""}}),mounted:function(){this.doGet7nToken(),this.$route.query.itemId&&this.doGetXzProductItem(),this.categoryList.length||this.$store.dispatch("xzProduct/getCategory")},methods:{onRead:function(e){this.pickList.push(e),this.uploadImg(this.pickList.length-1,e.file)},removeItem:function(e){this.pickList.splice(e,1)},doGet7nToken:function(){var e=this;return l()(o.a.mark(function t(){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.get7nToken();case 3:0==+(n=t.sent).errCode?e.token=n.data.token:Object(c.a)(n.errMsg),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,e,[[0,7]])}))()},doGetXzProductItem:function(){var e=this;return l()(o.a.mark(function t(){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.getXzProductItem(e.$route.query.itemId);case 3:0==+(n=t.sent).retCode?(e.itemInfo=n.data,e.form.price=+e.itemInfo.price/100,e.form.title=e.itemInfo.title,e.form.city=e.itemInfo.city,e.form.description=e.itemInfo.description,e.form.depreciation=e.itemInfo.depreciation,e.form.categoryId=e.itemInfo.category_id,e.form.tradeWayId=e.itemInfo.trade_way_id,e.pickList=e.itemInfo.imgs.map(function(e){return{url:e,content:e,percent:100}})):Object(c.a)(n.errMsg),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,e,[[0,7]])}))()},uploadImg:function(e,t,n){var r=this;w.upload(t,t.name,this.token,{},{}).subscribe({next:function(t){r.pickList[e].percent=t.total.percent,r.pickList=[].concat(r.pickList)},error:function(e){Object(c.a)(e)},complete:function(t){r.pickList[e].url="//c1.airtlab.com/"+t.key,r.pickList=[].concat(r.pickList)}})},doCreateProduct:function(){var e=this;return l()(o.a.mark(function t(){var n,r,i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.pickList.map(function(e){return e.url}),n=a()(n),r=d()({},e.form,{imgs:n,price:100*+e.form.price}),t.next=6,x.a.createXzProduct(r);case 6:0==+(i=t.sent).errCode?c.a.success("发布成功"):Object(c.a)(i.errMsg),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}},t,e,[[0,10]])}))()},doUpdateProduct:function(){var e=this;return l()(o.a.mark(function t(){var n,r,i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.pickList.map(function(e){return e.url}),n=a()(n),r=d()({},e.form,{imgs:n,itemId:e.$route.query.itemId,price:100*+e.form.price}),t.next=6,x.a.updateXzProduct(r);case 6:0==+(i=t.sent).errCode?c.a.success("发布成功"):Object(c.a)(i.errMsg),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}},t,e,[[0,10]])}))()},handleSubmit:function(){var e=this.form,t=[];e.title.length<5&&t.push("标题长度不能小于5"),0===e.price.length&&t.push("价格不能为空"),0===e.city.length&&t.push("宝贝所在城市不能为空"),0===e.depreciation.length&&t.push("宝贝成色不能为空"),0===e.categoryId.length&&t.push("宝贝分类不能为空"),0===e.tradeWayId.length&&t.push("交易方式不能为空"),this.pickList.length<2&&t.push("宝贝图片不能小于2张"),this.errors=t,this.showFormError=!!t.length,this.showFormError||(this.$route.query.itemId?this.doUpdateProduct():this.doCreateProduct())},onCategoryChange:function(e){this.categoryValue=e,this.form.categoryId=e.id,this.form.categoryName=e.name,this.showCategoryPicker=!1},onTradeWayChange:function(e){this.tradeWayPickerValue=e,this.form.tradeWayId=e.id,this.form.tradeWayName=e.name,this.showTradeWayPicker=!1},onCityChange:function(e){this.cityPickerValue=e;var t=[];e.forEach(function(e){t.push(e.name)}),this.form.city=t.join(" ")}}},L={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view"},[r("van-nav-bar",{attrs:{title:"发布闲置","left-text":"返回","left-arrow":""},on:{"click-left":function(t){e.$router.go(-1)}}}),e._v(" "),r("div",{staticClass:"content"},[r("van-field",{attrs:{placeholder:"标题(品牌型号都是买家喜欢搜索的关键词)"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}}),e._v(" "),r("van-field",{attrs:{placeholder:"价格(单位为元)"},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}}),e._v(" "),r("van-field",{attrs:{placeholder:"成色(1-100)",type:"number"},model:{value:e.form.depreciation,callback:function(t){e.$set(e.form,"depreciation",t)},expression:"form.depreciation"}}),e._v(" "),r("van-field",{attrs:{placeholder:"描述(入手渠道使用感受等)",type:"textarea"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}}),e._v(" "),r("van-field",{attrs:{placeholder:"分类(有助于买家快速筛选)",readonly:!0,"is-link":!0},nativeOn:{click:function(t){e.showCategoryPicker=!0}},model:{value:e.categoryName,callback:function(t){e.categoryName=t},expression:"categoryName"}}),e._v(" "),r("van-field",{attrs:{placeholder:"交易方式",readonly:!0,"is-link":!0},nativeOn:{click:function(t){e.showTradeWayPicker=!0}},model:{value:e.tradeWayName,callback:function(t){e.tradeWayName=t},expression:"tradeWayName"}}),e._v(" "),r("van-field",{attrs:{placeholder:"宝贝所在城市",readonly:!0,"is-link":!0},nativeOn:{click:function(t){e.showCityPicker=!0}},model:{value:e.form.city,callback:function(t){e.$set(e.form,"city",t)},expression:"form.city"}}),e._v(" "),r("div",{staticClass:"upload-wrap"},[e._l(e.pickList,function(t,a){return r("div",{key:a,staticClass:"preview-box"},[r("img",{staticClass:"pre-item",attrs:{src:t.content}}),e._v(" "),r("div",{on:{click:function(t){e.removeItem(a)}}},[r("div",[e._v("%"+e._s(t.percent))]),e._v(" "),r("img",{staticClass:"icon-remove",attrs:{src:n("qWKO"),alt:"图片"}})])])}),e._v(" "),r("van-uploader",{staticClass:"touch-area",attrs:{"after-read":e.onRead}},[[r("img",{staticClass:"icon-add",attrs:{src:n("BLOL")}})]],2)],2),e._v(" "),r("van-cell",{staticClass:"ui-flex",attrs:{title:"是否上架"}},[r("van-switch",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}})],1)],1),e._v(" "),r("van-button",{staticClass:"btm-fixed",attrs:{size:"large",type:"primary"},on:{click:e.handleSubmit}},[e._v("提交")]),e._v(" "),r("categoryPicker",{on:{"on-confirm":e.onCategoryChange,"on-cancel":function(t){e.showCategoryPicker=!1}},model:{value:e.showCategoryPicker,callback:function(t){e.showCategoryPicker=t},expression:"showCategoryPicker"}}),e._v(" "),r("tradeWayPicker",{on:{"on-confirm":e.onTradeWayChange,"on-cancel":function(t){e.showTradeWayPicker=!1}},model:{value:e.showTradeWayPicker,callback:function(t){e.showTradeWayPicker=t},expression:"showTradeWayPicker"}}),e._v(" "),r("cityPicker",{on:{"on-confirm":e.onCityChange},model:{value:e.showCityPicker,callback:function(t){e.showCityPicker=t},expression:"showCityPicker"}}),e._v(" "),r("van-dialog",{attrs:{title:"您提交的参数不规范"},model:{value:e.showFormError,callback:function(t){e.showFormError=t},expression:"showFormError"}},[r("ul",{staticClass:"error-list"},e._l(e.errors,function(t,n){return r("li",{key:n},[e._v(e._s(n+1)+". "+e._s(t))])}),0)])],1)},staticRenderFns:[]};var B=n("C7Lr")(W,L,!1,function(e){n("98Tg")},"data-v-7b34a890",null);t.default=B.exports},qWKO:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB10lEQVRYR+2WzUrEMBSF721kfAzb5DVEXerCERyVEXGh7zEb30MQRB38GVBBdOHKx5Amr6GDzZUMrQyhbZKOOgrTZX9yvpyce28RpnzhlPVhBvA3HZBSLhBRL4qiqyRJnibJiZRyiYgOGGNHcRwre61SB9I0PQaAQwAgRNzhnF83gVBKrWZZdo+IcwDQF0Ls+gIsEtEzIrYAIEPEbihELn7rWqMyAxa9gdjknN/5OOErbtaqDaGUsq21vjEWEtFHFEUdF0SIuBPAvGAgiGgAAMxAMMbWkyR5LHPCEvfKj1cZSim3iKifQwwZYxs2hC0OAPtCiDPXkXkB5E5UQjQV9zqC8R3kTlya7BDREADWGGOtLMuKtJPvzot1vR0oPkjTdA8ATvMAvxFRlJdasHiwAxUQ5nYj8f8JMH4ERPQ+2gXifFMXgjJgiY/K0QD8SgjLxIte8ONlWCdeBLMphPMIfMSrIHxGuWsYme731XjKWrDdar9tGPn0/6o+XzLKK/8nSh2QUm4T0UXd8HENmfFRbgoFANpCiAffPyIj3jX93sf2KhgLYiCE6HgBKKVirXUPEU845y+u3dY9V0ota61XAOBcCPHqBTCJYOi3zjIMXTD0/RnA1B34BHm/azB96WW0AAAAAElFTkSuQmCC"},wOyF:function(e,t){},xgXK:function(e,t,n){"use strict";var r=n("3cXf"),a=n.n(r),i=(n("9lm5"),n("gyQz")),o=(n("FeyD"),n("1CtW")),c=n("/xf8"),s=n("MqhK");c.default.use(i.a).use(o.a);var l={props:{value:{type:Boolean,default:!1}},data:function(){return{loading:!0,columnNum:3,columns:[]}},mounted:function(){var e=this;s.a.getSfCityList().then(function(t){var n=t.data.list;n=a()(n).replace(/areaId/g,"value").replace(/areaName/g,"name").replace(/children/g,"children").replace(/id/g,"value"),n=JSON.parse(n),e.loading=!1,e.list=n,e.initCityList()})},methods:{onChange:function(e,t,n){this.picker=e,t[n].children&&t[n].children.length&&this.rawIndex(n+1,t[n].children)},initCityList:function(){for(var e=0;e<this.columnNum;e++)this.columns[e]={values:[],defaultIndex:0};this.rawIndex(0,this.list)},rawIndex:function(e,t){e!==this.columnNum&&(this.picker?this.picker.setColumnValues(e,t):this.columns[e].values=t,t.length&&t[0].children&&t[0].children.length?this.rawIndex(e+1,t[0].children):this.rawIndex(e+1,[]))},onCancel:function(e){this.$emit("input",!1)},onConfirm:function(e){this.$emit("on-confirm",e),this.$emit("input",!1)}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-popup",{attrs:{position:"bottom"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[n("van-picker",{attrs:{columns:e.columns,loading:e.loading,"show-toolbar":"",title:"选择地址","value-key":"name"},on:{change:e.onChange,cancel:e.onCancel,confirm:e.onConfirm}})],1)},staticRenderFns:[]};var d=n("C7Lr")(l,u,!1,function(e){n("OBs8")},"data-v-b651f70c",null);t.a=d.exports}});
//# sourceMappingURL=2.3c7eb817ef4d6e8af1aa.js.map
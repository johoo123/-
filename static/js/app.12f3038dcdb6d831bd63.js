webpackJsonp([8],{"09yM":function(e,t){},"9GaO":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("//Fk"),a=n.n(r),o=n("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var u=n("VU/8")({name:"App",components:{}},s,!1,function(e){n("Yfwx")},null,null).exports,l=n("TcQY"),i=n.n(l),c=(n("09yM"),n("erWL"),n("I29D")),m=n.n(c),p=n("p7sN"),d=n("Xxa5"),f=n.n(d),g=n("exGp"),h=n.n(g),v={data:function(){return{ruleForm:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:5,max:10,message:"长度在 5 到 10 个字符",trigger:"blur"}]}}},methods:{startLogin:function(){var e,t=this;this.$refs.ruleForm.validate((e=h()(f.a.mark(function e(n){var r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(n),n){e.next=3;break}return e.abrupt("return",alert("格式不正确"));case 3:return e.next=5,m.a.post("http://localhost:8888/api/private/v1/login",t.ruleForm);case 5:200===(r=e.sent).data.meta.status?(console.log(r.data),localStorage.setItem("token",r.data.data.token),t.$message({message:r.data.meta.msg,type:"success",duration:800}),t.$router.push("./home")):t.$message({message:r.data.meta.msg,type:"error",duration:800});case 7:case"end":return e.stop()}},e,t)})),function(t){return e.apply(this,arguments)}))},resetForm:function(){this.$refs.ruleForm.resetFields()}}},b={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[n("el-col",{attrs:{span:8}},[n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"用户名",prop:"username"}},[n("el-input",{model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"密码",prop:"password"}},[n("el-input",{model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"success"},on:{click:e.startLogin}},[e._v("登陆")]),e._v(" "),n("el-button",{on:{click:e.resetForm}},[e._v("重置")])],1)],1)],1)],1)},staticRenderFns:[]};var F=n("VU/8")(v,b,!1,function(e){n("W8x1")},"data-v-64fb24fa",null).exports;o.default.use(p.a);var x=new p.a({routes:[{path:"/",redirect:"/login"},{path:"/login",name:"login",component:F},{path:"/home",name:"home",component:function(){return n.e(1).then(n.bind(null,"h6qm"))},children:[{path:"/users/:page?",name:"users",component:function(){return n.e(5).then(n.bind(null,"NhnZ"))}},{path:"/roles",name:"roles",component:function(){return n.e(6).then(n.bind(null,"WMDo"))}},{path:"/rights",name:"rights",component:function(){return n.e(4).then(n.bind(null,"rEcu"))}},{path:"/categories",name:"categories",component:function(){return n.e(3).then(n.bind(null,"MCev"))}},{path:"/goods",name:"goods",component:function(){return n.e(0).then(n.bind(null,"dfnC"))}},{path:"/goods-add",name:"goods-add",component:function(){return n.e(2).then(n.bind(null,"7fYb"))}}]}]});x.beforeEach(function(e,t,n){"/login"==e.path?n():localStorage.getItem("token")?n():n("/login")});var w=x,k=n("aiqZ"),_=n.n(k);n("oTFt"),n("9GaO"),n("v/ij");m.a.defaults.baseURL="http://localhost:8888/api/private/v1/",o.default.prototype.$axios=m.a,m.a.interceptors.request.use(function(e){return e.headers.Authorization=localStorage.getItem("token"),e},function(e){return a.a.reject(e)}),o.default.use(i.a),o.default.use(_.a),o.default.config.productionTip=!1,new o.default({el:"#app",components:{App:u},template:"<App/>",router:w})},W8x1:function(e,t){},Yfwx:function(e,t){},erWL:function(e,t){},oTFt:function(e,t){},"v/ij":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.12f3038dcdb6d831bd63.js.map
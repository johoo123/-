webpackJsonp([5],{NhnZ:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("Xxa5"),r=s.n(a),o=s("exGp"),i=s.n(o),l={data:function(){return{usersData:[{username:"马春春",email:"chun@.com",mobile:"12345645"},{username:"李思思",email:"chun@.com",mobile:"12345645"}],total:0,pagenum:1,queryText:"",dialogAddUserFormVisible:!1,form:"",addUserForm:{username:"",password:"",email:"",mobile:""},rules:{username:[{required:!0,message:"请输入内容",trigger:"blur"},{min:3,max:15,message:"请输入的内容3-5之间的",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:5,max:10,message:"请输入的内容5-10之间的",trigger:"blur"}],email:[{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,message:"格式不正确",trigger:"blur"}],mobile:[{pattern:/^1[3456789]\d{9}$/,message:"格式不正确",trigger:"blur"}]},dialogEditFormVisible:!1,editUserForm:{username:"春初",email:"903437899@qq.com",mobile:"",id:""},dialogAssignRoleVisible:!1,assignRoleForm:{username:"",id:0,rid:""},rolesData:[]}},created:function(){var e=this.$route.params.page;this.loadUsersData(e),this.loadRolesData()},methods:{loadUsersData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return i()(r.a.mark(function a(){var o,i,l;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return o="users",i={params:{query:s,pagenum:t,pagesize:2}},a.next=4,e.$axios.get(o,i);case 4:l=a.sent,console.log(l),console.log(l.data.data.users),e.usersData=l.data.data.users,e.total=l.data.data.total,e.pagenum=l.data.data.pagenum;case 10:case"end":return a.stop()}},a,e)}))()},clickCurrentPage:function(e){console.log(e),this.$router.push("/users/"+e),this.loadUsersData(e,this.queryText)},startQuery:function(){console.log(this.queryText),this.loadUsersData(pagenum=1,this.queryText)},showAddUserDialog:function(){this.dialogAddUserFormVisible=!0},addUser:function(){var e=this;return i()(r.a.mark(function t(){var s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.post("users",e.addUserForm);case 2:s=t.sent,console.log(s),201===s.data.meta.status&&(e.dialogAddUserFormVisible=!1,e.loadUsersData(),e.$message({message:"添加用户成功",type:"success",duration:800}),e.$refs.addUserForm.resetFields());case 5:case"end":return t.stop()}},t,e)}))()},dislogClosed:function(){console.log("关闭了"),this.$refs.addUserForm.resetFields()},delUser:function(e){var t=this;return i()(r.a.mark(function s(){var a;return r.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,t.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});case 3:return console.log("点击了确定"),s.next=6,t.$axios.delete("users/"+e);case 6:a=s.sent,console.log(a),200===a.data.meta.status&&(t.loadUsersData(),t.$message({message:"删除成功",type:"success",duration:800})),s.next=15;break;case 11:s.prev=11,s.t0=s.catch(0),console.log("点击了取消"),t.$message({message:"取消删除",type:"info",duration:800});case 15:case"end":return s.stop()}},s,t,[[0,11]])}))()},stateChange:function(e){var t=this;return i()(r.a.mark(function s(){var a,o;return r.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return a=e.id,o=e.mg_state,s.next=3,t.$axios.put("users/"+a+"/state/"+o,null);case 3:200===s.sent.data.meta.status&&(t.$message({message:"修改状态成功",type:"success",duration:800}),t.loadUsersData(t.pagenum));case 5:case"end":return s.stop()}},s,t)}))()},showEditUserDialog:function(e){console.log(e),this.dialogEditFormVisible=!0;var t=e.username,s=e.email,a=e.mobile,r=e.id;console.log(t),this.editUserForm.username=t,this.editUserForm.email=s,this.editUserForm.mobile=a,this.editUserForm.id=r},editUser:function(){var e=this;return i()(r.a.mark(function t(){var s,a,o,i,l;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.editUserForm,a=s.email,o=s.mobile,i=s.id,t.next=3,e.$axios.put("users/"+i,{email:a,mobile:o});case 3:l=t.sent,console.log(l),e.dialogEditFormVisible=!1,200===l.data.meta.status&&(e.loadUsersData(e.pagenum),e.$message({message:"编辑成功",type:"success",duration:800}));case 7:case"end":return t.stop()}},t,e)}))()},loadRolesData:function(){var e=this;return i()(r.a.mark(function t(){var s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("roles");case 2:s=t.sent,console.log(s),e.rolesData=s.data.data;case 5:case"end":return t.stop()}},t,e)}))()},showAssignRoleDialog:function(e){var t=this;return i()(r.a.mark(function s(){var a,o,i,l;return r.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t.dialogAssignRoleVisible=!0,a=e.username,o=e.id,s.next=4,t.$axios.get("users/"+o);case 4:i=s.sent,console.log(i),l=i.data.data.rid,t.assignRoleForm.username=a,t.assignRoleForm.id=o,t.assignRoleForm.rid=0==l?"":l;case 10:case"end":return s.stop()}},s,t)}))()},assignRole:function(){var e=this;return i()(r.a.mark(function t(){var s,a,o,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.assignRoleForm,a=s.id,o=s.rid,t.next=3,e.$axios.put("users/"+a+"/role",{rid:o});case 3:i=t.sent,console.log(i),200===i.data.meta.status&&(e.dialogAssignRoleVisible=!1,e.$message({message:"分配角色成功",type:"success",duration:800}),e.loadUsersData(e.pagenum));case 6:case"end":return t.stop()}},t,e)}))()}}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("el-breadcrumb",{staticClass:"bread",attrs:{"separator-class":"el-icon-arrow-right"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),s("el-breadcrumb-item",[e._v("用户管理")]),e._v(" "),s("el-breadcrumb-item",[e._v("用户列表")])],1),e._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[s("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容"},model:{value:e.queryText,callback:function(t){e.queryText=t},expression:"queryText"}},[s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.startQuery},slot:"append"})],1)],1),e._v(" "),s("el-col",{attrs:{span:8}},[s("el-button",{on:{click:e.showAddUserDialog}},[e._v("添加用户")])],1)],1),e._v(" "),s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.usersData}},[s("el-table-column",{attrs:{prop:"username",label:"姓名",width:"180"}}),e._v(" "),s("el-table-column",{attrs:{prop:"email",label:"邮箱",width:"180"}}),e._v(" "),s("el-table-column",{attrs:{prop:"mobile",label:"电话"}}),e._v(" "),s("el-table-column",{attrs:{label:"用户状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-switch",{on:{change:function(s){return e.stateChange(t.row)}},model:{value:t.row.mg_state,callback:function(s){e.$set(t.row,"mg_state",s)},expression:"scope.row.mg_state"}})]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{plain:"",type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(s){return e.showEditUserDialog(t.row)}}}),e._v(" "),s("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:"",size:"mini"},on:{click:function(s){return e.delUser(t.row.id)}}}),e._v(" "),s("el-button",{attrs:{icon:"el-icon-check",type:"success",plain:"",size:"mini"},on:{click:function(s){return e.showAssignRoleDialog(t.row)}}},[e._v("分配角色")])]}}])})],1),e._v(" "),s("el-pagination",{attrs:{background:"",layout:"prev, pager, next","current-page":e.pagenum,"page-size":2,total:e.total},on:{"current-change":e.clickCurrentPage}}),e._v(" "),s("el-dialog",{attrs:{title:"添加用户",visible:e.dialogAddUserFormVisible},on:{closed:e.dislogClosed,"update:visible":function(t){e.dialogAddUserFormVisible=t}}},[s("el-form",{ref:"addUserForm",attrs:{rules:e.rules,model:e.addUserForm,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"用户名",prop:"username"}},[s("el-input",{model:{value:e.addUserForm.username,callback:function(t){e.$set(e.addUserForm,"username",t)},expression:"addUserForm.username"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"密码",prop:"password"}},[s("el-input",{model:{value:e.addUserForm.password,callback:function(t){e.$set(e.addUserForm,"password",t)},expression:"addUserForm.password"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[s("el-input",{model:{value:e.addUserForm.email,callback:function(t){e.$set(e.addUserForm,"email",t)},expression:"addUserForm.email"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[s("el-input",{model:{value:e.addUserForm.mobile,callback:function(t){e.$set(e.addUserForm,"mobile",t)},expression:"addUserForm.mobile"}})],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.dialogAddUserFormVisible=!1}}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("确 定")])],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"编辑用户",visible:e.dialogEditFormVisible},on:{"update:visible":function(t){e.dialogEditFormVisible=t}}},[s("el-form",{attrs:{model:e.editUserForm,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"用户名"}},[s("el-tag",[e._v(e._s(e.editUserForm.username))])],1),e._v(" "),s("el-form-item",{attrs:{label:"邮箱"}},[s("el-input",{model:{value:e.editUserForm.email,callback:function(t){e.$set(e.editUserForm,"email",t)},expression:"editUserForm.email"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"电话"}},[s("el-input",{model:{value:e.editUserForm.mobile,callback:function(t){e.$set(e.editUserForm,"mobile",t)},expression:"editUserForm.mobile"}})],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.dialogEditFormVisible=!1}}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.editUser}},[e._v("确 定")])],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"分配角色",visible:e.dialogAssignRoleVisible},on:{"update:visible":function(t){e.dialogAssignRoleVisible=t}}},[s("el-form",{attrs:{model:e.assignRoleForm,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"用户名"}},[s("el-tag",{attrs:{type:"primary"}},[e._v(e._s(e.assignRoleForm.username))])],1),e._v(" "),s("el-form-item",{attrs:{label:"角色列表"}},[s("el-select",{attrs:{placeholder:"请选择角色"},model:{value:e.assignRoleForm.rid,callback:function(t){e.$set(e.assignRoleForm,"rid",t)},expression:"assignRoleForm.rid"}},e._l(e.rolesData,function(e){return s("el-option",{key:e.id,attrs:{label:e.roleName,value:e.id}})}),1)],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.dialogAssignRoleVisible=!1}}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.assignRole}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var u=s("VU/8")(l,n,!1,function(e){s("xX/N")},"data-v-51b1f755",null);t.default=u.exports},"xX/N":function(e,t){}});
//# sourceMappingURL=5.b3d6259ad8ffa8bbb3ae.js.map
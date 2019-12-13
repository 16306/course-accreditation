(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22576b"],{e505:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{ref:"searchForm",attrs:{inline:!0,model:e.queryOptions},nativeOn:{submit:function(t){return t.preventDefault(),e.handleFilter(t)}}},[a("el-form-item",{attrs:{prop:"jno"}},[a("el-autocomplete",{staticClass:"inline-input",attrs:{"fetch-suggestions":e.queryTeacherList,placeholder:"请输入工号"},model:{value:e.queryOptions.jno,callback:function(t){e.$set(e.queryOptions,"jno",t)},expression:"queryOptions.jno"}})],1),a("el-form-item",{attrs:{prop:"title"}},[a("el-input",{attrs:{placeholder:"职称",maxlength:"10"},model:{value:e.queryOptions.title,callback:function(t){e.$set(e.queryOptions,"title",t)},expression:"queryOptions.title"}})],1),a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("\n        搜索\n      ")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.handleCreate}},[e._v("\n        教师\n      ")])],1),a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){e.showCheckbox=!e.showCheckbox}}},[e._v("\n      多选\n    ")]),e.showCheckbox?a("el-button",{attrs:{type:"danger"},on:{click:e.handleBatchDelete}},[e._v("\n      批量删除\n    ")]):e._e(),a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){e.showExcelDialog=!0}}},[e._v("\n      批量导入教师\n    ")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.data,border:"",fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelect}},[e.showCheckbox?a("el-table-column",{attrs:{type:"selection",width:"55"}}):e._e(),a("el-table-column",{attrs:{align:"center",label:"工号",prop:"jno"}}),a("el-table-column",{attrs:{align:"center",label:"姓名",prop:"name"}}),a("el-table-column",{attrs:{align:"center",label:"性别",prop:"sex"},scopedSlots:e._u([{key:"default",fn:function(t){return["男"===t.row.sex?a("el-tag",[e._v("\n          男\n        ")]):"女"===t.row.sex?a("el-tag",{attrs:{type:"danger"}},[e._v("\n          女\n        ")]):a("el-tag",{attrs:{type:"danger"}},[e._v("\n          未知\n        ")])]}}])}),a("el-table-column",{attrs:{align:"center",label:"职称",prop:"title"}}),a("el-table-column",{attrs:{align:"center",prop:"birth",label:"出生日期"}}),a("el-table-column",{attrs:{align:"center",prop:"graduateSchool",label:"毕业学校"}}),a("el-table-column",{attrs:{align:"center",prop:"graduateMajor",label:"毕业专业"}}),a("el-table-column",{attrs:{align:"center",prop:"loginTime",label:"上次登录时间"}}),a("el-table-column",{attrs:{align:"center",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.row)}}},[e._v("\n          编辑\n        ")]),a("el-button",{staticStyle:{marginTop:"3px"},attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("\n          删除\n        ")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryOptions.page,limit:e.queryOptions.pageSize},on:{"update:page":function(t){return e.$set(e.queryOptions,"page",t)},"update:limit":function(t){return e.$set(e.queryOptions,"pageSize",t)},pagination:e.requestData}}),a("el-dialog",{attrs:{title:(e.teacher.id?"编辑":"添加")+"教师",visible:e.showDialog},on:{"update:visible":function(t){e.showDialog=t},close:function(t){e.showDialog=!1}}},[e.showDialog?a("el-form",{ref:"editForm",attrs:{model:e.editForm,rules:e.rules,"label-position":"top"}},[a("el-form-item",{attrs:{prop:"jno",label:"工号"}},[a("el-input",{attrs:{placeholder:"请输入工号",maxlength:"20"},model:{value:e.editForm.jno,callback:function(t){e.$set(e.editForm,"jno",t)},expression:"editForm.jno"}})],1),a("el-form-item",{attrs:{prop:"name",label:"姓名"}},[a("el-input",{attrs:{placeholder:"请输入姓名",maxlength:"10"},model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),a("el-form-item",{attrs:{prop:"sex",label:"性别"}},[a("el-select",{attrs:{placeholder:"请选择教师性别"},model:{value:e.editForm.sex,callback:function(t){e.$set(e.editForm,"sex",t)},expression:"editForm.sex"}},[a("el-option",{attrs:{label:"男",value:"男"}}),a("el-option",{attrs:{label:"女",value:"女"}})],1)],1),a("el-form-item",{attrs:{prop:"title",label:"职称"}},[a("el-select",{attrs:{placeholder:"请选择教师职称"},model:{value:e.editForm.title,callback:function(t){e.$set(e.editForm,"title",t)},expression:"editForm.title"}},[a("el-option",{attrs:{label:"教授",value:"教授"}}),a("el-option",{attrs:{label:"副教授",value:"副教授"}}),a("el-option",{attrs:{label:"讲师",value:"讲师"}}),a("el-option",{attrs:{label:"助教",value:"助教"}})],1)],1),a("el-form-item",{attrs:{prop:"出生日期",label:"birth"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期"},model:{value:e.editForm.birth,callback:function(t){e.$set(e.editForm,"birth",t)},expression:"editForm.birth"}})],1),a("el-form-item",{attrs:{prop:"graduateSchool",label:"毕业学校"}},[a("el-input",{attrs:{placeholder:"请输入毕业学校",maxlength:"10"},model:{value:e.editForm.graduateSchool,callback:function(t){e.$set(e.editForm,"graduateSchool",t)},expression:"editForm.graduateSchool"}})],1),a("el-form-item",{attrs:{prop:"graduateMajor",label:"毕业专业"}},[a("el-input",{attrs:{placeholder:"请输入毕业专业",maxlength:"10"},model:{value:e.editForm.graduateMajor,callback:function(t){e.$set(e.editForm,"graduateMajor",t)},expression:"editForm.graduateMajor"}})],1)],1):e._e(),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.showDialog=!1}}},[e._v("\n        取 消\n      ")]),a("el-button",{attrs:{type:"primary"},on:{click:e.handleSave}},[e._v("\n        确 定\n      ")])],1)],1),a("excel-dialog",{attrs:{action:"/teacher/batchSave",show:e.showExcelDialog},on:{"update:show":function(t){e.showExcelDialog=t},requestData:e.requestData}})],1)},n=[],o=(a("ac6a"),a("7f7f"),a("96cf"),a("3b8d")),l=a("d225"),i=a("b0b4"),s=a("308d"),c=a("6bb5"),u=a("4e2b"),p=a("9ab4"),h=a("60a3"),d=a("de46"),m=function(e){function t(){var e;return Object(l["a"])(this,t),e=Object(s["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.data=[],e.total=0,e.loading=!0,e.teacher={},e.showDialog=!1,e.editForm={},e.showCheckbox=!1,e.selectTeacherId=[],e.showExcelDialog=!1,e.queryOptions={title:"",jno:"",page:1,pageSize:20},e.rules={jno:[{required:!0,message:"教师工号不能为空",trigger:"blur"}],name:[{required:!0,message:"教师姓名不能为空",trigger:"blur"}],title:[{required:!0,message:"教师职称不能为空",trigger:"blur"}]},e}return Object(u["a"])(t,e),Object(i["a"])(t,[{key:"created",value:function(){this.init()}},{key:"init",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.requestData();case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"handleFilter",value:function(){this.queryOptions.page=1,this.requestData()}},{key:"requestData",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,this.api.queryTeacher(this.queryOptions);case 3:t=e.sent,this.data=t.data.list,this.total=t.data.total,this.loading=!1;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"handleCreate",value:function(){this.teacher={},this.resetForm(),this.showDialog=!0}},{key:"resetForm",value:function(){this.editForm={title:"",jno:"",name:"",birth:"",graduateSchool:"",graduateMajor:""}}},{key:"handleEdit",value:function(e){this.teacher=e,this.editForm={name:e.name,title:e.title,jno:e.jno,birth:e.birth,graduateSchool:e.graduateSchool,graduateMajor:e.graduateMajor},this.showDialog=!0}},{key:"handleSave",value:function(){var e=this;this.$refs["editForm"].validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(a){var r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=14;break}if(!e.teacher.id){t.next=8;break}return t.next=4,e.api.putTeacher(e.teacher.id,e.editForm);case 4:r=t.sent,0===r.status&&(e.resetForm(),e.showDialog=!1,e.$message({type:"success",message:"修改成功!"}),e.requestData()),t.next=12;break;case 8:return t.next=10,e.api.createTeacher(e.editForm);case 10:n=t.sent,0===n.status&&(e.$refs["editForm"].resetFields(),e.showDialog=!1,e.$message({type:"success",message:"添加成功!"}),e.requestData());case 12:t.next=15;break;case 14:return t.abrupt("return",!1);case 15:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}},{key:"handleDelete",value:function(e){var t=this;this.$confirm("确定删除".concat(e.name,"吗？"),"提示",{type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark(function a(){var r;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.api.deleteTeacher(e.id);case 2:r=a.sent,0===r.status&&(t.$message({type:"success",message:"删除成功!"}),t.data=t.data.filter(function(t){return t.id!==e.id}),t.total>1?t.total--:t.requestData());case 4:case"end":return a.stop()}},a)})))}},{key:"queryTeacherList",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t,a){var r,n,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r={page:1,pageSize:20,jno:t},e.next=3,d["queryTeacher"](r);case 3:n=e.sent,o=[{}],0===n.status&&n.data.list.length>0&&(o=n.data.list,o.forEach(function(e){e.value=e.jno})),a(o);case 7:case"end":return e.stop()}},e)}));function t(t,a){return e.apply(this,arguments)}return t}()},{key:"handleSelect",value:function(e){this.selectTeacherId=e.map(function(e){return e.id})}},{key:"handleBatchDelete",value:function(){var e=this;this.selectTeacherId.length<1?this.$message({type:"warning",message:"请先选择要删除项"}):this.$confirm("确定要批量删除所选项吗？","提示",{type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.api.batchDeleteTeacher(e.selectTeacherId);case 2:a=t.sent,0===a.status&&(e.$message({type:"success",message:"删除成功!"}),e.requestData());case 4:case"end":return t.stop()}},t)})))}}]),t}(h["d"]);m=Object(p["a"])([Object(h["a"])({})],m);var g=m,b=g,f=a("2877"),v=Object(f["a"])(b,r,n,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d22576b.10a1a42f.js.map
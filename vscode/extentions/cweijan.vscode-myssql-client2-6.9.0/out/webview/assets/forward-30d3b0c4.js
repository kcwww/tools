import{_ as l,a}from"./form-35c30484.js";import{_ as r}from"./dialog-bc8653c9.js";import{_ as c,a as s}from"./table-d84da22f.js";import{s as p}from"./notify-7eab2aea.js";import{n as d,i as m}from"./pinia-d2c8f655.js";import"./checkbox-917a8077.js";import"./scrollbar-eb41de40.js";import"./index-0c4a9f33.js";import"./checkbox-group-d76ce3a9.js";import"./index-3e66c890.js";const u={mixins:[m],data(){return{title:"",config:{},forwardList:[],error:!1,errorMessage:"",panel:{visible:!1,loading:!1,edit:{}}}},mounted(){this.on("forwardList",i=>{this.forwardList=i,this.panel.loading=!1,this.panel.visible=!1}).on("config",i=>{this.title=i.host,this.config=i}).on("success",i=>{this.error=!1,this.emit("load")}).on("error",i=>{this.panel.loading=!1,this.error=!0,this.errorMessage=i}).init()},methods:{createRequest(){this.panel.edit={localHost:"127.0.0.1",remoteHost:"127.0.0.1"},this.panel.visible=!0},load(){this.emit("load")},confirmSave(){this.emit("save",this.panel.edit),this.panel.loading=!0},copyForwardCommand(i){const t=`ssh -qTnN -L ${i.localHost}:${i.localPort}:${i.remoteHost}:${i.remotePort} ${this.config.username}@${this.config.host}`;navigator.clipboard.writeText(t),p("Copied forward command to clipboard!")},start(i){this.emit("start",i)},stop(i){this.emit("stop",i)},remove(i){this.emit("remove",i)},openEdit(i){this.panel.edit=i,this.panel.visible=!0},deleteConfirm(i){this.$confirm("Are you sure to delete this forward?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then(()=>{this.remove(i)})}}};var f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[t.error?e("blockquote",{staticClass:"panel",attrs:{id:"error"}},[e("p",{staticClass:"panel__text"},[t._v(" Connection error! "),e("span",{attrs:{id:"errorMessage"},domProps:{textContent:t._s(t.errorMessage)}}),e("br")])]):t._e(),e(c,{staticStyle:{width:"100%"},attrs:{data:t.forwardList}},[e(s,{attrs:{prop:"name",label:"name"}}),e(s,{attrs:{prop:"localHost",label:"Local Host"}}),e(s,{attrs:{prop:"localPort",label:"Local Port"}}),e(s,{attrs:{prop:"remoteHost",label:"Remote Host"}}),e(s,{attrs:{prop:"remotePort",label:"Remote Port"}}),e(s,{attrs:{prop:"state",label:"State"},scopedSlots:t._u([{key:"default",fn:function(o){return[t._v(" "+t._s(o.row.state==!0?"running":"stop")+" ")]}}])}),e(s,{attrs:{fixed:"right",width:"200"},scopedSlots:t._u([{key:"default",fn:function(o){return[o.row.state?t._e():e("vsc-button",{staticStyle:{color:"var(--vscode-terminal-ansiBrightGreen)"},attrs:{type:"success",size:"small",title:"Start",icon:"el-icon-video-play",circle:""},on:{click:function(n){return t.start(o.row.id)}}}),o.row.state?e("vsc-button",{attrs:{type:"danger",size:"small",title:"Stop",icon:"el-icon-switch-button",circle:""},on:{click:function(n){return t.stop(o.row.id)}}}):t._e(),e("vsc-button",{staticStyle:{color:"var(--vscode-terminal-ansiCyan)"},attrs:{type:"primary",size:"small",title:"Edit",icon:"el-icon-edit",circle:""},on:{click:function(n){return t.openEdit(o.row)}}}),e("vsc-button",{staticStyle:{color:"var(--vscode-charts-yellow)"},attrs:{size:"small",title:"Copy command",icon:"el-icon-document-copy",circle:""},on:{click:function(n){return t.copyForwardCommand(o.row)}}}),e("vsc-button",{staticStyle:{color:"#f56c6c"},attrs:{title:"delete",type:"danger",size:"small",icon:"el-icon-delete",circle:""},on:{click:function(n){return t.deleteConfirm(o.row.id)}}})]}}])},[e("template",{slot:"header"},[e("vsc-button",{attrs:{icon:"el-icon-circle-plus-outline",size:"small",circle:""},on:{click:t.createRequest}}),e("vsc-button",{attrs:{type:"primary",icon:"el-icon-refresh",size:"small",circle:""},on:{click:t.load}})],1)],2)],1),e(r,{ref:"editDialog",attrs:{title:"Foward Port By SSH",visible:t.panel.visible,width:"600px",top:"3vh",closeOnClickModal:!1},on:{"update:visible":function(o){return t.$set(t.panel,"visible",o)}}},[e(l,{ref:"infoForm",attrs:{model:t.panel.edit,"label-width":"120px"}},[e(a,{attrs:{size:"mini",label:"Name"}},[e("vsc-input",{model:{value:t.panel.edit.name,callback:function(o){t.$set(t.panel.edit,"name",o)},expression:"panel.edit.name"}})],1),e("div",{staticClass:"flex flex-row"},[e("div",{staticClass:"basis-1/2"},[e(a,{attrs:{size:"mini",label:"Local Host"}},[e("vsc-input",{model:{value:t.panel.edit.localHost,callback:function(o){t.$set(t.panel.edit,"localHost",o)},expression:"panel.edit.localHost"}})],1)],1),e("div",{staticClass:"basis-1/2"},[e(a,{attrs:{size:"mini",label:"Local Port"}},[e("vsc-input",{model:{value:t.panel.edit.localPort,callback:function(o){t.$set(t.panel.edit,"localPort",o)},expression:"panel.edit.localPort"}})],1)],1)]),e("div",{staticClass:"flex flex-row"},[e("div",{staticClass:"basis-1/2"},[e(a,{attrs:{size:"mini",label:"Remote Host"}},[e("vsc-input",{model:{value:t.panel.edit.remoteHost,callback:function(o){t.$set(t.panel.edit,"remoteHost",o)},expression:"panel.edit.remoteHost"}})],1)],1),e("div",{staticClass:"basis-1/2"},[e(a,{attrs:{size:"mini",label:"Remote Port"}},[e("vsc-input",{nativeOn:{keyup:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.confirmSave.apply(null,arguments)}},model:{value:t.panel.edit.remotePort,callback:function(o){t.$set(t.panel.edit,"remotePort",o)},expression:"panel.edit.remotePort"}})],1)],1)])],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("vsc-button",{attrs:{type:"secondary",size:"mini"},on:{click:function(o){t.panel.visible=!1}}},[t._v(t._s(t.$t("common.cancel")))]),e("vsc-button",{attrs:{loading:t.panel.loading,size:"mini"},on:{click:t.confirmSave}},[t._v("Save")])],1)],1)],1)},v=[],_=d(u,f,v,!1,null,"8294cb59",null,null);const P=_.exports;export{P as default};

import{_ as p,a as l}from"./table-d84da22f.js";import{_ as c,a as o}from"./form-35c30484.js";import{_ as m}from"./dialog-bc8653c9.js";import{D as h,_ as y}from"./DetailDialog-977202d3.js";import{_ as u,a}from"./option-2910fe8d.js";import{c as g,j as f}from"./stringUtil-baf3ca3f.js";import{n as v,i as k,a as _}from"./pinia-d2c8f655.js";import{s as b,e as r,n as w}from"./notify-7eab2aea.js";import"./checkbox-917a8077.js";import"./scrollbar-eb41de40.js";import"./index-0c4a9f33.js";import"./checkbox-group-d76ce3a9.js";import"./index-3e66c890.js";import"./date-picker-c1632161.js";import"./DatabaseType-cafd0a83.js";import"./arrayUtil-01925739.js";import"./viewUtil-705c5718.js";import"./focus-34de79c8.js";var d=(i=>(i.STRING="string",i.REJSON="ReJSON-RL",i.HASH="hash",i.LIST="list",i.ZSET="zset",i.SET="set",i.STREAM="stream",i))(d||{});const x={components:{codemirror:g,DetailDialog:h},mixins:[k],data(){return{cmOptions:{mode:"text/plain",foldGutter:!0,gutters:["CodeMirror-foldgutter"],foldOptions:void 0},itemDetail:{row:{},visible:!1},cmContent:"",language:{current:"Text",supports:["Text","JSON","Yaml"],map:{Text:"text/plain",JSON:"application/json",Yaml:"text/yaml"}},itemModel:{old:null,key:null,score:null,value:null},searchInput:"",pageIndex:1,pageSize:100,dataCount:0,remainHeight:0,keyLoading:!0,isNew:!1,key:{name:"",ttl:-1,content:null,count:null,type:null},edit:{name:"",ttl:-1,content:null},itemDialogVisiable:!1,selectStyle:{float:this.float},textrows:6}},computed:{size(){var i;return((i=this.cmContent)==null?void 0:i.length)||0},codemirror(){var i;return(i=this.$refs.cmEditor)==null?void 0:i.codemirror},isJSON(){var i;return["string","ReJSON-RL"].includes(this.key.type)&&((i=this.edit.content)==null?void 0:i.match(/^\s*[{[]/))!=null},filterData(){this.key.content||(this.key.content=[]);const i=this.searchInput,e=this.key.content.filter(t=>!i||(t.value?t.value.includes(i):t.includes(i)));return this.dataCount=this.key.count??e.length,e},dialogTitle(){const i=this.itemModel.old;switch(this.key.type){case"hash":return i?"Edit Hash":"Add to hash";case"set":return i?"Edit Set":"Add to set";case"zset":return i?"Edit ZSet":"Add to zset";case"list":return i?"Edit List":"Add to list"}return""},dynamicHeight(){return window.innerHeight-100+"px"}},mounted(){const i=()=>{const e=this.$refs.panel,t=this.$refs.stringPanel,s=this.$refs.listPanel,n=((e==null?void 0:e.clientHeight)||0)+((t==null?void 0:t.clientHeight)||0)+((s==null?void 0:s.clientHeight)||0)+16;this.remainHeight=window.innerHeight-n};i(),new ResizeObserver(i).observe(document.body),window.addEventListener("resize",i),this.on("new",({prefix:e})=>{this.isNew=!0,this.keyLoading=!1,this.language.current="Text",this.key={name:e,type:d.STRING,ttl:-1},this.edit=this.deepClone(this.key)}).on("detail",e=>{this.isNew=!1,this.keyLoading=!1,this.language.current="Text",this.pageIndex=e.page.pageNum,this.pageSize=e.page.pageSize,this.itemDialogVisiable=!1,this.key=e.res,this.edit=this.deepClone(e.res),["string","ReJSON-RL"].includes(this.key.type)&&(this.cmContent=this.edit.content),this.autoDetect()}).on("pagination",e=>{this.key.content=e}).on("msg",e=>{b(e)}).on("error",e=>{r(e)}).on("success",e=>{w({showClose:!0,duration:1500,message:e,type:"success"}),this.itemDetail.visible=!1}).on("refresh",()=>{this.refresh()}),this.emit("routed"),window.addEventListener("keydown",e=>{e.key=="Escape"&&(this.itemDetail.visible=!1),_(e)&&e.code=="KeyS"&&["string","ReJSON-RL"].includes(this.key.type)&&this.update()})},methods:{changePage(i,e){this.emit("changePage",e?i:this.pageIndex+i)},autoDetect(){!this.key||!["string","ReJSON-RL"].includes(this.key.type)||this.$nextTick(()=>{this.isJSON?(this.language.current="JSON",this.format("JSON"),this.changeLanguage("JSON")):(this.language.current="Text",this.changeLanguage("Text"))})},format(i){var e;if(i=="JSON")try{const t=this.cmContent;this.cmContent=JSON.stringify(JSON.parse((e=t==null?void 0:t.replace)==null?void 0:e.call(t,/ /g," ")),null,2)}catch(t){console.log(t)}},changeLanguage(i){if(!this.codemirror)return;const e=this.language.map[i];this.codemirror.setOption("mode",e),this.codemirror.setOption("foldOptions",i=="JSON"?f(this.codemirror):void 0)},refresh(){this.itemDialogVisiable=!1,this.emit("refresh",{key:this.key})},saveItem(){if(!this.edit.name)return r("Key name cannot be null!");this.emit("saveItem",{...this.itemModel,keyName:this.edit.name,type:this.key.type})},showOpenDialog(){this.itemModel={},this.itemDialogVisiable=!0},showEditDialog(i){this.itemModel={...i,old:{...i}},this.itemDialogVisiable=!0},showDetailDialog(i){this.itemModel={...i,old:{...i}},this.itemDetail.row=i,this.itemDetail.visible=!0},saveValue(i){this.itemModel.value=i,this.saveItem()},deleteLine(i){this.$confirm("Are you sure to delete this key?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then(()=>{this.emit("deleteLine",i)})},deleteKey(){this.$confirm("Are you sure to delete this key?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then(()=>{this.emit("del",{key:{name:this.key.name}}),this.key={},this.edit={}})},rename(){console.log(this.key.name),this.emit("rename",{key:{name:this.key.name,newName:this.edit.name}})},ttlKey(){this.emit("ttl",{key:{name:this.key.name,ttl:this.edit.ttl}})},update(){if(!this.edit.name)return r("Key name cannot be null!");this.emit("update",{key:{name:this.key.name,newName:this.edit.name,type:this.key.type,ttl:this.edit.ttl,content:this.cmContent}})},deepClone(i){let e=Array.isArray(i)?[]:{};if(i&&typeof i=="object")for(let t in i)i.hasOwnProperty(t)&&(i[t]&&typeof i[t]=="object"?e[t]=this.deepClone(i[t]):e[t]=i[t]);return e}}};var S=function(){var e=this,t=e._self._c;return t("div",{staticClass:"redis-view-container"},[e.keyLoading?t("div",{staticStyle:{"text-align":"center"}},[e._v(" loading ")]):t("div",{staticClass:"key-tab-container"},[t("div",{ref:"panel",staticClass:"flex pt-2 pb-4 justify-between pr-4 flex-wrap gap-3"},[t("div",[t("vsc-input",{ref:"keyNameInput",staticStyle:{width:"500px"},attrs:{size:"mini",placeholder:"Please input key name"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.rename.apply(null,arguments)}},model:{value:e.edit.name,callback:function(s){e.$set(e.edit,"name",s)},expression:"edit.name"}},[e.isNew?t(u,{staticStyle:{width:"100px"},attrs:{slot:"prepend",placeholder:"Forever",size:"small"},slot:"prepend",model:{value:e.key.type,callback:function(s){e.$set(e.key,"type",s)},expression:"key.type"}},[t(a,{attrs:{value:"string",label:"STRING"}}),t(a,{attrs:{value:"list",label:"LIST"}}),t(a,{attrs:{value:"set",label:"SET"}}),t(a,{attrs:{value:"zset",label:"ZSET"}}),t(a,{attrs:{value:"hash",label:"HASH"}}),t(a,{attrs:{value:"stream",label:"STREAM"}})],1):t("span",{staticClass:"key-detail-type",attrs:{slot:"prepend"},slot:"prepend"},[e._v(e._s(e.key.type))])],1),e.isNew?e._e():t("vsc-button",{staticClass:"inline btn-ad",attrs:{size:"medium",icon:"el-icon-check"},on:{click:e.rename}})],1),t("div",[t("vsc-input",{staticStyle:{width:"220px"},attrs:{type:"number",size:"mini"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.ttlKey.apply(null,arguments)}},model:{value:e.edit.ttl,callback:function(s){e.$set(e.edit,"ttl",s)},expression:"edit.ttl"}},[t("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("TTL")])]),t("vsc-button",{staticClass:"inline btn-ad",attrs:{size:"medium",icon:"el-icon-check"},on:{click:e.ttlKey}}),t("vsc-button",{staticClass:"inline btn-ad",attrs:{size:"medium",icon:"el-icon-delete"},on:{click:e.deleteKey}},[e._v("Delete")]),t("vsc-button",{staticClass:"inline btn-ad",attrs:{size:"medium",icon:"el-icon-refresh"},on:{click:e.refresh}},[e._v("Refresh")])],1)]),["string","ReJSON-RL"].includes(e.key.type)?t("div",{ref:"stringPanel",staticClass:"flex pr-4 mb-2 gap-x-7"},[t("div",[e._v(" Size: "+e._s(e.size)+" Bytes ")]),["string","ReJSON-RL"].includes(e.key.type)?t("div",[t(u,{staticClass:"mr-2",staticStyle:{width:"145px"},attrs:{placeholder:"Default",size:"small"},on:{change:e.changeLanguage},model:{value:e.language.current,callback:function(s){e.$set(e.language,"current",s)},expression:"language.current"}},e._l(e.language.supports,function(s){return t(a,{key:s,attrs:{value:s}},[e._v(e._s(s))])}),1),t("vsc-button",{staticClass:"inline btn-ad",staticStyle:{height:"27px"},on:{click:e.update}},[e._v("Save")])],1):e._e()]):e._e(),t(c,{directives:[{name:"show",rawName:"v-show",value:["string","ReJSON-RL"].includes(e.key.type),expression:"['string','ReJSON-RL'].includes(key.type)"}]},[t("div",{staticClass:"value-panel"},[t("codemirror",{ref:"cmEditor",staticClass:"json-panel",style:"height:"+e.remainHeight+"px",attrs:{options:e.cmOptions},model:{value:e.cmContent,callback:function(s){e.cmContent=s},expression:"cmContent"}})],1)]),e.key.type=="list"||e.key.type=="set"||e.key.type=="zset"||e.key.type=="hash"||e.key.type=="stream"?t("div",[t("div",{ref:"listPanel"},[t("vsc-input",{staticClass:"filter-input mb-2",staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:e.$t("result.searchNotice"),clearable:!0},model:{value:e.searchInput,callback:function(s){e.searchInput=s},expression:"searchInput"}}),t("vsc-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Add new key",placement:"bottom-start"}},[t("div",{staticClass:"ml-2 inline-block"},[e.key.type!="stream"?t("vsc-button",{staticStyle:{color:"var(--vscode-terminal-ansiYellow)"},attrs:{type:"icon",icon:"codicon-add text-lg"},on:{click:function(s){return e.showOpenDialog()}}}):e._e()],1)]),t(y,{staticStyle:{display:"inline-block"},attrs:{small:!0,total:e.dataCount,"page-size":e.pageSize,"current-page":e.pageIndex,"page-sizes":[20,50,100,200,300],layout:"prev,pager, next, total",background:""},on:{"update:pageSize":function(s){e.pageSize=s},"update:page-size":function(s){e.pageSize=s},"update:currentPage":function(s){e.pageIndex=s},"update:current-page":function(s){e.pageIndex=s},"current-change":s=>e.changePage(s,!0),"next-click":()=>e.changePage(1),"prev-click":()=>e.changePage(-1)}}),t(m,{attrs:{title:e.dialogTitle,visible:e.itemDialogVisiable,closeOnClickModal:!1,width:"30%","custom-class":"new-item-dialog"},on:{"update:visible":function(s){e.itemDialogVisiable=s}}},[t(c,{attrs:{"label-width":"60px"}},[e.key.type=="hash"?t(o,{attrs:{label:"key"}},[t("vsc-input",{attrs:{size:"mini"},model:{value:e.itemModel.key,callback:function(s){e.$set(e.itemModel,"key",s)},expression:"itemModel.key"}})],1):e._e(),e.key.type=="zset"?t(o,{attrs:{label:"score"}},[t("vsc-input",{attrs:{size:"mini"},model:{value:e.itemModel.score,callback:function(s){e.$set(e.itemModel,"score",s)},expression:"itemModel.score"}})],1):e._e(),t(o,{attrs:{label:"value"}},[t("vsc-input",{attrs:{size:"mini"},model:{value:e.itemModel.value,callback:function(s){e.$set(e.itemModel,"value",s)},expression:"itemModel.value"}})],1)],1),t("div",{staticClass:"dialog-footer text-center",attrs:{slot:"footer"},slot:"footer"},[t("vsc-button",{attrs:{type:"secondary"},on:{click:function(s){e.itemDialogVisiable=!1}}},[e._v(e._s(e.$t("common.cancel")))]),t("vsc-button",{attrs:{type:"primary"},on:{click:e.saveItem}},[e._v("Confirm")])],1)],1)],1),t("div",[t(p,{attrs:{data:e.filterData,height:e.remainHeight,border:"","header-cell-style":{padding:0}}},[t(l,{attrs:{type:"index",label:"Index",sortable:"",width:"60",align:"center"}}),e.key.type=="hash"?t(l,{attrs:{"sort-by":"key",resizable:"",sortable:"",label:"Key",align:"center",width:"200",prop:"key"}}):e._e(),e.key.type=="zset"?t(l,{attrs:{"sort-by":"score",resizable:"",sortable:"",label:"Score",align:"center",width:"200",prop:"score"}}):e._e(),e.key.type=="stream"?t(l,{attrs:{"sort-by":"id",resizable:"",sortable:"",label:"id",align:"center",width:"200",prop:"id"}}):e._e(),t(l,{attrs:{"sort-by":"value",resizable:"",sortable:"",label:"Value",align:"center"},scopedSlots:e._u([{key:"default",fn:function(s){var n;return[t("span",{staticClass:"item-value",attrs:{title:s.row.value},domProps:{textContent:e._s(((n=s.row)==null?void 0:n.value)||s.row)}})]}}],null,!1,2382774844)}),t(l,{attrs:{label:"Operation",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(s){return[["hash","set","zset","stream"].includes(e.key.type)?t("vsc-button",{attrs:{type:"icon",icon:"codicon-zoom-in",title:"View On Dialog"},on:{click:function(n){return e.showDetailDialog(s.row)}}}):e._e(),["hash","set","zset"].includes(e.key.type)?t("vsc-button",{staticStyle:{color:"var(--vscode-terminal-ansiYellow)"},attrs:{type:"icon",icon:"codicon-edit text-base",title:"edit"},on:{click:function(n){return e.showEditDialog(s.row)}}}):e._e(),t("vsc-button",{staticClass:"ml-3",staticStyle:{color:"#f56c6c"},attrs:{type:"icon",icon:"el-icon-delete text-base",title:"delete"},on:{click:function(n){return e.deleteLine(s.row)}}})]}}],null,!1,1228634269)})],1)],1)]):e._e()],1),t("DetailDialog",{attrs:{visible:e.itemDetail.visible,modal:!0,editable:!0,data:e.itemDetail.row.value},on:{"update:visible":function(s){return e.$set(e.itemDetail,"visible",s)},save:e.saveValue}})],1)},C=[],z=v(x,S,C,!1,null,"278011a2",null,null);const Y=z.exports;export{Y as default};

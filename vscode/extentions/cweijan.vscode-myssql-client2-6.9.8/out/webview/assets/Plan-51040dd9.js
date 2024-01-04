import{_ as o}from"./dialog-83e0f55a.js";import{n as a,i as c}from"./pinia-017113cf.js";import{s as l}from"./notify-958598cc.js";const r={methods:{toStore(){}}};var _=function(){var t=this,s=t._self._c;return s("div",{staticClass:"div-block-price"},[s("div",{staticClass:"plan-basic"},[t._v("Basic")]),s("div",{staticClass:"div-block-111"},[s("div",{staticClass:"text-block-26-copy free"},[t._v(t._s(t.$t("plan.free"))),s("span",{staticClass:"text-span-43"})]),s("div",{staticClass:"payment-terms"},[t._v(t._s(t.$t("plan.basicNotice")))])]),s("div",{staticClass:"div-block-87-copy"},[s("a",{staticClass:"button-plan-basic w-button",on:{click:t.toStore}},[t._v(t._s(t.$t("plan.installed")))])]),s("div",{staticClass:"div-block-plan-features"},[s("div",{staticClass:"div-block-182"},[s("img",{staticClass:"image-28-copy",attrs:{src:"icon/checkmark-basic.svg",alt:""}}),s("div",{staticClass:"text-block-12"},[t._v("MySQL, PostgreSQL, Redis, SSH, and More")])]),s("div",{staticClass:"div-block-182"},[s("img",{staticClass:"image-28-copy",attrs:{src:"icon/checkmark-basic.svg",alt:""}}),s("div",{staticClass:"text-block-12",staticStyle:{color:"#f94e4e"}},[t._v(t._s(t.$t("plan.freeLimitConnection")))])]),s("div",{staticClass:"div-block-182"},[s("img",{staticClass:"image-28-copy",attrs:{src:"icon/checkmark-basic.svg",alt:""}}),s("div",{staticClass:"text-block-12"},[t._v(t._s(t.$t("plan.basicSQLCompletion")))])])])])},v=[],d=a(r,_,v,!1,null,"674d1122",null,null);const u=d.exports;const m={props:["isPay"],computed:{planText(){return this.isPay?this.$t("plan.bought"):this.$t("plan.buyNow")}},methods:{buyNow(){this.$emit("buy")}}};var p=function(){var t=this,s=t._self._c;return s("div",{staticClass:"div-block-price"},[s("div",{staticClass:"plan-premium"},[t._v("Premium")]),s("div",{staticClass:"div-block-111"},[t._m(0),s("div",{staticClass:"payment-monthly"},[t._v(t._s(t.$t("plan.perYear")))]),s("div",{staticClass:"payment-montly-price"},[t._v("中国区为68元/年")])]),s("a",{staticClass:"button-plan-premium w-button",on:{click:t.buyNow}},[t._v(t._s(t.planText))]),s("div",{staticClass:"div-block-plan-features"},[s("div",{staticClass:"div-block-182"},[s("img",{staticClass:"image-28-copy",attrs:{src:"icon/checkmark-premium.svg",alt:""}}),s("div",{staticClass:"text-block-12"},[t._v(t._s(t.$t("plan.allFeature")))])]),s("div",{staticClass:"div-block-182"},[s("img",{staticClass:"image-28-copy",attrs:{src:"icon/checkmark-premium.svg",alt:""}}),s("div",{staticClass:"text-block-12"},[t._v(" "+t._s(t.$t("plan.unlimitedConnection"))+" ")])]),s("div",{staticClass:"div-block-182"},[s("img",{staticClass:"image-28-copy",attrs:{src:"icon/checkmark-premium.svg",alt:""}}),s("div",{staticClass:"text-block-12"},[t._v(" "+t._s(t.$t("plan.cloudSync"))+" ")])]),s("div",{staticClass:"div-block-182"},[s("img",{staticClass:"image-28-copy",attrs:{src:"icon/checkmark-premium.svg",alt:""}}),s("div",{staticClass:"text-block-12"},[t._v(" "+t._s(t.$t("plan.workLevelConnection"))+" ")])]),s("div",{staticClass:"div-block-182"},[s("img",{staticClass:"image-28-copy",attrs:{src:"icon/checkmark-premium.svg",alt:""}}),s("div",{staticClass:"text-block-12"},[t._v(t._s(t.$t("plan.otherFeature")))])])])])},f=[function(){var i=this,t=i._self._c;return t("div",{staticClass:"text-block-26-copy free"},[i._v("$20"),t("span",{staticClass:"text-span-43"})])}],b=a(m,p,f,!1,null,null,null,null);const g=b.exports;const y={mixins:[c],data(){return{loading:!1,license:"",email:"",password:""}},mounted(){this.on("email",i=>{this.email=i})},methods:{}};var k=function(){var t=this,s=t._self._c;return s("div",{staticStyle:{"word-break":"break-word"}},[s("div",[s("span",{staticStyle:{color:"var(--vscode-charts-red)"}},[t._v(" Online ")]),t._v(" : "+t._s(t.$t("offline.online"))+" "),s("br"),s("vsc-button",{staticStyle:{display:"inline-block",margin:"15px 0"},attrs:{size:"mini",icon:"codicon-account"},on:{click:function(e){return t.$emit("reqLogin")}}},[t._v(" "+t._s(t.$t("global.login"))+" ")])],1),s("span",{staticStyle:{display:"inline-block","margin-bottom":"5px",color:"var(--vscode-charts-red)"}},[t._v(" Offline: ")]),s("div",[t._v(" "+t._s(t.$t("offline.detail"))+" ")]),s("div",{staticStyle:{"margin-top":"5px"}},[t._v(" License: "),s("vsc-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:5}},model:{value:t.license,callback:function(e){t.license=e},expression:"license"}})],1),s("div",{staticStyle:{"margin-top":"10px"}},[s("vsc-button",{attrs:{size:"mini",icon:"codicon-vm"},on:{click:function(e){return t.$emit("getMachineId")}}},[t._v(" "+t._s(t.$t("offline.getMachineId"))+" ")]),s("vsc-button",{attrs:{size:"mini",type:"primary",icon:"codicon-save"},on:{click:function(e){return t.$emit("activate",t.license)}}},[t._v(" "+t._s(t.$t("offline.activate"))+" ")]),s("vsc-button",{attrs:{type:"secondary",icon:"codicon-discard"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(" "+t._s(t.$t("common.cancel"))),s("span",{staticClass:"codicon-discard",attrs:{slot:"start"},slot:"start"})])],1)])},h=[],$=a(y,k,h,!1,null,"6b574c90",null,null);const C=$.exports;function x(i,t=2){const s=new TextEncoder().encode(i),e=new Uint8Array(s.length);for(let n=0;n<s.length;n++)e[n]=s[n]^t;return new TextDecoder().decode(e)}function P(i){return[...`${i}`].reduce((t,s)=>t+parseInt(s),1)}const w={components:{FreePlan:u,ProPlan:g,Offline:C},mixins:[c],data(){return{user:null,offlineVisible:!1}},computed:{isPay(){return this.user&&this.user.expireTime>new Date().getTime()}},mounted(){this.on("user",i=>{this.user=i}).on("boundLicence",i=>{this.user=i,this.offlineVisible=!1,l("Activation success!")}).init()},methods:{openAbount(){this.$router.push("/center/document")},openDocument(){this.$router.push("/center/document/#/start")},githubLogin(){this.emit("githubLogin")},getMachineId(){this.emit("copyMachineId")},activate(i){this.emit("licence",i)},triggerBuy(){if(this.user){const i=new Date().getTime(),t=P(i);this.emit("openSite",`plan?token=${btoa(x(this.user.token,t))}&t=${i}&ir=${t}`)}else this.$emit("openLogin")}}};var S=function(){var t=this,s=t._self._c;return s("div",{staticClass:"plan-container"},[s("div",{staticClass:"flex flex-col m-auto w-fit"},[s("div",{staticClass:"notice"},[s("div",{domProps:{innerHTML:t._s(t.$t("pay.notice"))}}),s("div",{staticClass:"line"}),t.isPay?s("vsc-button",{staticClass:"relative",staticStyle:{top:"-1px"},attrs:{size:"mini",icon:"el-icon-document"},on:{click:t.openDocument}},[t._v(" "+t._s(t.$t("plan.document"))+" ")]):t._e(),t.user?t._e():s("vsc-button",{attrs:{size:"mini",icon:"codicon-github-inverted"},on:{click:t.githubLogin}},[t._v(" "+t._s(t.$t("plan.freeTier"))+" ")]),t.isPay?t._e():s("vsc-button",{attrs:{size:"mini",icon:"codicon-package"},on:{click:t.triggerBuy}},[t._v(" "+t._s(t.$t("plan.buyNow"))+" ")]),s("vsc-button",{attrs:{size:"mini",icon:"codicon-github-action"},on:{click:function(e){t.offlineVisible=!0}}},[t._v(" "+t._s(t.$t("plan.activation"))+" ")])],1),s("div",{staticClass:"plan-block flex w-fit"},[s("FreePlan"),s("ProPlan",{attrs:{isPay:t.isPay},on:{buy:t.triggerBuy}})],1)]),s(o,{attrs:{visible:t.offlineVisible,width:"600px","custom-class":"activate-dialog","modal-append-to-body":!1,"close-on-click-modal":!1},on:{"update:visible":function(e){t.offlineVisible=e},close:function(e){t.offlineVisible=!1}}},[s("Offline",{on:{cancel:function(e){t.offlineVisible=!1},getMachineId:t.getMachineId,reqLogin:function(e){t.offlineVisible=!1,t.$emit("openLogin")},activate:t.activate}})],1)],1)},L=[],z=a(w,S,L,!1,null,"40431418",null,null);const I=z.exports;export{I as default};

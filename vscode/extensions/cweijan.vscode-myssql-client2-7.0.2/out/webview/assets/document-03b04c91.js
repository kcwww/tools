<<<<<<< HEAD:vscode/extentions/cweijan.vscode-myssql-client2-7.0.4/out/webview/assets/document-c6888978.js
import{n as s,i as o}from"./pinia-953b6140.js";const a={mixins:[o],data(){return{documentUrl:null,hash:""}},created(){this.hash=this.$route.hash??"",this.hash=`?theme=${document.body.getAttribute("data-vscode-theme-kind")=="vscode-light"?"light":"dark"}`},mounted(){this.on("resourceHost",({host:e,language:t})=>{console.log(this.hash),this.documentUrl=t=="zh-cn"?`${e}/docs/#/zh/${this.hash}`:`${e}/docs/${this.hash}`}).init()},methods:{loadDocument(){}}};var i=function(){var t=this,n=t._self._c;return n("div",{staticClass:"document-container"},[n("iframe",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.documentUrl,title:"description"},on:{load:t.loadDocument}})])},c=[],h=s(a,i,c,!1,null,null,null,null);const d=h.exports;export{d as default};
=======
import{n as s,i as o}from"./pinia-23cd74c8.js";const a={mixins:[o],data(){return{documentUrl:null,hash:""}},created(){this.hash=this.$route.hash??"",this.hash=`?theme=${document.body.getAttribute("data-vscode-theme-kind")=="vscode-light"?"light":"dark"}`},mounted(){this.on("resourceHost",({host:e,language:t})=>{console.log(this.hash),this.documentUrl=t=="zh-cn"?`${e}/docs/#/zh/${this.hash}`:`${e}/docs/${this.hash}`}).init()},methods:{loadDocument(){}}};var i=function(){var t=this,n=t._self._c;return n("div",{staticClass:"document-container"},[n("iframe",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.documentUrl,title:"description"},on:{load:t.loadDocument}})])},c=[],h=s(a,i,c,!1,null,null,null,null);const d=h.exports;export{d as default};
>>>>>>> 3f0afcc678d42f2dfecb13b3a135994ebf9157da:vscode/extentions/cweijan.vscode-myssql-client2-7.0.2/out/webview/assets/document-03b04c91.js
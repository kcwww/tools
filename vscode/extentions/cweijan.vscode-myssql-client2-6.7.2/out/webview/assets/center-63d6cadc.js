import{_ as d}from"./dialog-40ae5ddc.js";import{n as s,i as a,_ as p}from"./vueConfig-2816384f.js";import{a as m}from"./axiosReq-00eaa83e.js";import{s as u}from"./notify-57c1c655.js";const v={mixins:[a],props:["user","hidePlan","current"],computed:{expireText(){var e;let n=(e=this.user)==null?void 0:e.expireDate;if(!n)return"Free";const t=this.user.expireTime;return new Date().getTime()>t?`${n} -> Expire`:new Date(t).getFullYear()-new Date().getFullYear()>5?"Premium":n}},methods:{toIndex(){}}};var f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"navbar teams w-nav"},[e("div",{staticClass:"container"},[e("a",{staticClass:"w-nav-brand",on:{click:t.toIndex}},[e("img",{staticClass:"image-3",on:{click:function(i){return t.emit("openSite","/")}}})]),e("nav",{staticClass:"flex justify-end",attrs:{role:"navigation"}},[e("router-link",{staticClass:"nav-link",class:{"w--current":t.current=="changeLog"},attrs:{to:"/center/changeLog"}},[e("i",{staticClass:"mr-1 el-icon-notebook-2",attrs:{type:"icon"}}),t._v(" "+t._s(t.$t("global.changeLog"))+" ")]),e("router-link",{staticClass:"nav-link",class:{"w--current":t.current=="document"},attrs:{to:"/center/document"}},[e("i",{staticClass:"mr-1 el-icon-notebook-2 green",attrs:{type:"icon"}}),t._v(" "+t._s(t.$t("global.document"))+" ")]),e("router-link",{staticClass:"nav-link",class:{"w--current":t.current=="util"},attrs:{to:"/center/util"}},[e("i",{staticClass:"mr-1 codicon-wand purple",attrs:{type:"icon"}}),t._v(" "+t._s(t.$t("global.util"))+" ")]),e("router-link",{staticClass:"nav-link",class:{"w--current":t.current=="console"},attrs:{to:"/center/console"}},[e("i",{staticClass:"mr-1 el-icon-s-tools",attrs:{type:"icon"}}),t._v(" "+t._s(t.$t("global.console"))+" ")]),e("router-link",{staticClass:"nav-link",class:{"w--current":t.current=="plan"},attrs:{to:"/center/plan"}},[e("i",{staticClass:"mr-1 codicon-github-action blue",attrs:{type:"icon"}}),t._v(" "+t._s(t.$t("global.plan"))+" ")]),t.user?t._e():[e("a",{staticClass:"nav-link log-in",on:{click:function(i){return t.$emit("openLogin")}}},[e("i",{staticClass:"mr-1 el-icon-user orange",attrs:{type:"icon"}}),t._v(" "+t._s(t.$t("global.login"))+" ")])],t.user?e(p,{staticClass:"shrink-0",attrs:{placement:"bottom",trigger:"hover",type:"primary"},scopedSlots:t._u([{key:"reference",fn:function(){return[e("div",{staticClass:"nav-link log-in",staticStyle:{color:"var(--vscode-terminal-ansiBlue) !important","font-family":"sans-serif","flex-direction":"column","align-items":"baseline"}},[e("div",[t._v(" "+t._s(t.user.email)),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("div",{domProps:{textContent:t._s(t.expireText)}})])]},proxy:!0}],null,!1,70418892)},[e("vsc-button",{nativeOn:{click:function(i){return t.$emit("logout")}}},[t._v(t._s(t.$t("global.logout")))])],1):t._e()],2)])])},g=[],x=s(v,f,g,!1,null,"9e097276",null,null);const h=x.exports;const b={};var y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"admin-box"},[t._t("default")],2)},$=[],w=s(b,y,$,!1,null,"56886c98",null,null);const C=w.exports;const k={mixins:[a],props:["label","placeholder","value","type","showForgot"],data(){return{context:null,error:null}},computed:{placeholder0(){return this.placeholder||`Enter your ${this.label}`}},watch:{value(n){n&&(this.context=n)}},methods:{noticeInput(n){this.$emit("update:value",this.context),this.$emit("input",this.context)},showError(n){this.error=n}}};var B=function(){var t=this,e=t._self._c;return e("div",{staticClass:"MuiBox-root admin-box-126fypi"},[e("div",{staticClass:"MuiBox-root admin-box-guflfy"},[e("span",{staticClass:"MuiTypography-root MuiTypography-label admin-box-1digilb"},[t._v(t._s(t.label)+" "),t.showForgot?[e("a",{staticStyle:{float:"right"},on:{click:function(i){return t.emit("openSite","reset")}}},[t._v("Forgot Password?")])]:t._e()],2)]),e("div",{staticClass:"MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth admin-box-5jhlpq",attrs:{"data-test-id":"name-box"}},[t.type==="checkbox"?e("input",{directives:[{name:"model",rawName:"v-model",value:t.context,expression:"context"}],staticClass:"MuiOutlinedInput-input MuiInputBase-input admin-box-1puixqu",attrs:{name:t.label,placeholder:t.placeholder0,maxlength:"200",type:"checkbox"},domProps:{checked:Array.isArray(t.context)?t._i(t.context,null)>-1:t.context},on:{input:t.noticeInput,change:function(i){var o=t.context,l=i.target,_=!!l.checked;if(Array.isArray(o)){var c=null,r=t._i(o,c);l.checked?r<0&&(t.context=o.concat([c])):r>-1&&(t.context=o.slice(0,r).concat(o.slice(r+1)))}else t.context=_}}}):t.type==="radio"?e("input",{directives:[{name:"model",rawName:"v-model",value:t.context,expression:"context"}],staticClass:"MuiOutlinedInput-input MuiInputBase-input admin-box-1puixqu",attrs:{name:t.label,placeholder:t.placeholder0,maxlength:"200",type:"radio"},domProps:{checked:t._q(t.context,null)},on:{input:t.noticeInput,change:function(i){t.context=null}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.context,expression:"context"}],staticClass:"MuiOutlinedInput-input MuiInputBase-input admin-box-1puixqu",attrs:{name:t.label,placeholder:t.placeholder0,maxlength:"200",type:t.type},domProps:{value:t.context},on:{input:[function(i){i.target.composing||(t.context=i.target.value)},t.noticeInput]}})]),t.error?e("p",{staticClass:"Mui-error",attrs:{"data-test-id":"name-box_error"}},[t._v(t._s(t.error))]):t._e()])},M=[],I=s(k,B,M,!1,null,"aff6fe5d",null,null);const A=I.exports;const L={props:["rules"],data(){return{isValid:!1}}};var F=function(){var t=this,e=t._self._c;return e("div",[t._t("default"),e("div",{staticStyle:{"margin-bottom":"16px"}})],2)},S=[],O=s(L,F,S,!1,null,null,null,null);const T=O.exports;const P={props:["text","disabled","loading"],data(){return{}},methods:{}};var V=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"MuiBox-root admin-box-mots36"}),e("button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"MuiButton-root MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButtonBase-root admin-box-15gd45s",attrs:{tabindex:"-1",type:"submit","data-test-id":"signupSubmit-btn",disabled:t.disabled}},[t._v(" "+t._s(t.text)+" ")])])},R=[],N=s(P,V,R,!1,null,"49badb77",null,null);const D=N.exports;const z={mixins:[a],methods:{githubLogin(){this.emit("githubLogin")}}};var U=function(){var t=this,e=t._self._c;return e("div",[e("div",[t._m(0),e("div",{staticClass:"d-flex justify-content-center"},[e("button",{staticClass:"ant-btn",attrs:{type:"button"},on:{click:t.githubLogin}},[e("span",{staticClass:"anticon",attrs:{role:"img"}},[e("img",{attrs:{src:"icon/github.svg",alt:"Github"}})]),e("span",[t._v("Github")])])])])])},j=[function(){var n=this,t=n._self._c;return t("div",{staticClass:"ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-center",attrs:{role:"separator"}},[t("span",{staticClass:"ant-divider-inner-text"},[t("span",{staticClass:"text-muted font-size-base font-weight-normal"},[n._v("or connect with")])])])}],q=s(z,U,j,!1,null,null,null,null);const E=q.exports;const G={components:{AdminBox:C,AdminInput:A,AdminForm:T,AdminButton:D,ThridAccount:E},mixins:[a],data(){return{loading:!1,email:"",password:""}},mounted(){this.on("email",n=>{this.email=n})},methods:{toBrowser(){this.emit("loginOnBrowser")},submit(){this.loading=!0,this.emit("login"),m.post("/user/login",{email:this.email,password:this.password}).then(n=>{u("Login success!"),this.$emit("login",n)}).finally(()=>{this.loading=!1})}}};var H=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box-container"},[e("div",[e("AdminBox",{staticStyle:{"max-width":"100%",width:"100%"}},[e("div",{staticClass:"fe-logo-wrapper MuiBox-root admin-box-useecz"},[e("img",{attrs:{alt:"logo",src:"logo_dark.png"},on:{click:function(i){return t.emit("openSite","/")}}})]),e("div",{staticClass:"login-title"},[t._v(" Login ")]),e("div",{staticClass:"MuiBox-root admin-box notice-block"},[e("span",{staticClass:"MuiTypography-root MuiTypography-body1Bold admin-box notice-text"},[t._v("Don't have an account? "),e("a",{on:{click:function(i){return t.emit("openSite","signUp")}}},[t._v("Sign Up.")])])]),e("AdminForm",{on:{submit:t.submit}},[e("AdminInput",{attrs:{label:"Email"},model:{value:t.email,callback:function(i){t.email=i},expression:"email"}}),e("AdminInput",{attrs:{showForgot:!0,type:"password",label:"Password"},nativeOn:{keyup:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.submit.apply(null,arguments)}},model:{value:t.password,callback:function(i){t.password=i},expression:"password"}}),e("div",{staticClass:"inline-flex w-full justify-center gap-x-2"},[e("AdminButton",{attrs:{loading:t.loading,text:"Log In",type:"text"},nativeOn:{click:function(i){return t.submit.apply(null,arguments)}}}),e("AdminButton",{attrs:{loading:t.loading,text:"Log In On Browser",type:"text"},nativeOn:{click:function(i){return t.toBrowser.apply(null,arguments)}}})],1),e("ThridAccount")],1)],1)],1)])},W=[],Y=s(G,H,W,!1,null,"e313ba36",null,null);const J=Y.exports;const K={components:{NavBar:h,Login:J},mixins:[a],beforeRouteUpdate(n,t,e){this.current=n.name,e()},data(){return{user:null,current:"console",dialogVisible:!0,accountVisible:!1}},mounted(){this.current=this.$route.name,this.focusHolder(),this.on("user",n=>{this.user=n,this.accountVisible=!1})},methods:{login(n){this.emit("bindUser",n),this.user=n,this.accountVisible=!1},logout(){this.emit("bindUser",null),this.user=null,u("Log out success!")},focusHolder(){window.onfocus=()=>{this.emit("getUser")}}}};var Q=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{height:"100vh"}},[e("NavBar",{attrs:{user:t.user,hidePlan:!0,current:t.current},on:{openLogin:function(i){t.accountVisible=!0},logout:t.logout}}),e("router-view",{on:{openLogin:function(i){t.accountVisible=!0},closeLogin:function(i){t.accountVisible=!1}}}),e(d,{attrs:{closeOnClickModal:!1,"custom-class":"accountDialog",visible:t.accountVisible,"modal-append-to-body":!1,width:"420px",top:"3vh"},on:{"update:visible":function(i){t.accountVisible=i}}},[e("Login",{on:{login:t.login}})],1)],1)},X=[],Z=s(K,Q,X,!1,null,null,null,null);const st=Z.exports;export{st as default};

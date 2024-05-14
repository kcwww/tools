import{d as Z,r as Y,c as C,X as Q,o as v,l as T,w as _,D as x,b as h,n as y,u as a,C as D,a7 as R,f as w,t as F,a6 as ee,a as V,F as te,E as A,H as oe,e as q,W as ne,J as M,ao as se,a5 as O}from"./app-Bf1EJw8l.js";import{b as ie,d as I,Y as ae,c as j,_ as le,a2 as re,E as B,j as ce,G,av as ue}from"./index-Dpstq9UH.js";import{i as fe,a as W,C as de}from"./icon-CZcOhJQp.js";import{u as pe}from"./use-global-config-0XpG2_0j.js";const U=["success","info","warning","error"],me=ie({customClass:{type:String,default:""},dangerouslyUseHTMLString:{type:Boolean,default:!1},duration:{type:Number,default:4500},icon:{type:fe},id:{type:String,default:""},message:{type:I([String,Object]),default:""},offset:{type:Number,default:0},onClick:{type:I(Function),default:()=>{}},onClose:{type:I(Function),required:!0},position:{type:String,values:["top-right","top-left","bottom-right","bottom-left"],default:"top-right"},showClose:{type:Boolean,default:!0},title:{type:String,default:""},type:{type:String,values:[...U,""],default:""},zIndex:Number}),ve={destroy:()=>!0},ye=["id"],ge=["textContent"],Ce={key:0},he=["innerHTML"],be=Z({name:"ElNotification"}),Ee=Z({...be,props:me,emits:ve,setup(e,{expose:s}){const o=e,{ns:n,zIndex:r}=pe("notification"),{nextZIndex:f,currentZIndex:d}=r,{Close:c}=de,l=Y(!1);let i;const u=C(()=>{const t=o.type;return t&&W[o.type]?n.m(t):""}),p=C(()=>o.type&&W[o.type]||o.icon),k=C(()=>o.position.endsWith("right")?"right":"left"),J=C(()=>o.position.startsWith("top")?"top":"bottom"),K=C(()=>{var t;return{[J.value]:`${o.offset}px`,zIndex:(t=o.zIndex)!=null?t:d.value}});function N(){o.duration>0&&({stop:i}=re(()=>{l.value&&b()},o.duration))}function z(){i==null||i()}function b(){l.value=!1}function X({code:t}){t===B.delete||t===B.backspace?z():t===B.esc?l.value&&b():N()}return Q(()=>{N(),f(),l.value=!0}),ae(document,"keydown",X),s({visible:l,close:b}),(t,E)=>(v(),T(ne,{name:a(n).b("fade"),onBeforeLeave:t.onClose,onAfterLeave:E[1]||(E[1]=P=>t.$emit("destroy")),persisted:""},{default:_(()=>[x(h("div",{id:t.id,class:y([a(n).b(),t.customClass,a(k)]),style:D(a(K)),role:"alert",onMouseenter:z,onMouseleave:N,onClick:E[0]||(E[0]=(...P)=>t.onClick&&t.onClick(...P))},[a(p)?(v(),T(a(j),{key:0,class:y([a(n).e("icon"),a(u)])},{default:_(()=>[(v(),T(R(a(p))))]),_:1},8,["class"])):w("v-if",!0),h("div",{class:y(a(n).e("group"))},[h("h2",{class:y(a(n).e("title")),textContent:F(t.title)},null,10,ge),x(h("div",{class:y(a(n).e("content")),style:D(t.title?void 0:{margin:0})},[ee(t.$slots,"default",{},()=>[t.dangerouslyUseHTMLString?(v(),V(te,{key:1},[w(" Caution here, message could've been compromised, never use user's input as message "),h("p",{innerHTML:t.message},null,8,he)],2112)):(v(),V("p",Ce,F(t.message),1))])],6),[[A,t.message]]),t.showClose?(v(),T(a(j),{key:0,class:y(a(n).e("closeBtn")),onClick:oe(b,["stop"])},{default:_(()=>[q(a(c))]),_:1},8,["class","onClick"])):w("v-if",!0)],2)],46,ye),[[A,l.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Te=le(Ee,[["__file","notification.vue"]]);const S={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[]},$=16;let Se=1;const g=function(e={},s=null){if(!ce)return{close:()=>{}};(typeof e=="string"||M(e))&&(e={message:e});const o=e.position||"top-right";let n=e.offset||0;S[o].forEach(({vm:u})=>{var p;n+=(((p=u.el)==null?void 0:p.offsetHeight)||0)+$}),n+=$;const r=`notification_${Se++}`,f=e.onClose,d={...e,offset:n,id:r,onClose:()=>{ke(r,o,f)}};let c=document.body;G(e.appendTo)?c=e.appendTo:se(e.appendTo)&&(c=document.querySelector(e.appendTo)),G(c)||(c=document.body);const l=document.createElement("div"),i=q(Te,d,M(d.message)?{default:()=>d.message}:null);return i.appContext=s??g._context,i.props.onDestroy=()=>{O(null,l)},O(i,l),S[o].push({vm:i}),c.appendChild(l.firstElementChild),{close:()=>{i.component.exposed.visible.value=!1}}};U.forEach(e=>{g[e]=(s={})=>((typeof s=="string"||M(s))&&(s={message:s}),g({...s,type:e}))});function ke(e,s,o){const n=S[s],r=n.findIndex(({vm:i})=>{var u;return((u=i.component)==null?void 0:u.props.id)===e});if(r===-1)return;const{vm:f}=n[r];if(!f)return;o==null||o(f);const d=f.el.offsetHeight,c=s.split("-")[0];n.splice(r,1);const l=n.length;if(!(l<1))for(let i=r;i<l;i++){const{el:u,component:p}=n[i].vm,k=Number.parseInt(u.style[c],10)-d-$;p.props.offset=k}}function Ne(){for(const e of Object.values(S))e.forEach(({vm:s})=>{s.component.exposed.visible.value=!1})}g.closeAll=Ne;g._context=null;const H=ue(g,"$notify");let m;function L(){m==null||m.close(),m=null}function Me(e){L(),m=H(e)}function $e(e){L(),m=H.success(`${e}`)}function He(e){L(),m=H.error(`${e}`)}export{He as e,Me as n,$e as s};
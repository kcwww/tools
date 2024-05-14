import{an as N,r as V,i as J,c as f,d as S,o as I,a as _,b as y,C as P,aF as w,u as e,ak as A,n as b,H as B,U as k,q as U,t as D,a5 as x,I as Q,a3 as X,p as Y,a2 as Z,ap as ee,N as ae}from"./app-7HI8a4lx.js";import{a as E,m as L,U as C,x as z,n as h,C as oe,ao as F,p as le,F as se,z as T,c as G,_ as $,B as te,h as ne,o as re,ap as ie,q as de,A as ue,V as K}from"./focus-trap-0JUCTGWq.js";const M=E({modelValue:{type:[String,Number,Boolean],default:void 0},size:L,disabled:Boolean,label:{type:[String,Number,Boolean],default:void 0},value:{type:[String,Number,Boolean],default:void 0},name:{type:String,default:void 0}}),pe=E({...M,border:Boolean}),q={[C]:o=>N(o)||z(o)||h(o),[oe]:o=>N(o)||z(o)||h(o)},H=Symbol("radioGroupKey"),j=(o,c)=>{const s=V(),a=J(H,void 0),u=f(()=>!!a),m=f(()=>F(o.value)?o.label:o.value),i=f({get(){return u.value?a.modelValue:o.modelValue},set(t){u.value?a.changeEvent(t):c&&c(C,t),s.value.checked=o.modelValue===m.value}}),p=le(f(()=>a==null?void 0:a.size)),l=se(f(()=>a==null?void 0:a.disabled)),d=V(!1),v=f(()=>l.value||u.value&&i.value!==m.value?-1:0);return T({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-radio",ref:"https://element-plus.org/en-US/component/radio.html"},f(()=>u.value&&F(o.value))),{radioRef:s,isGroup:u,radioGroup:a,focus:d,size:p,disabled:l,tabIndex:v,modelValue:i,actualValue:m}},ce=["value","name","disabled"],me=S({name:"ElRadio"}),fe=S({...me,props:pe,emits:q,setup(o,{emit:c}){const s=o,a=G("radio"),{radioRef:u,radioGroup:m,focus:i,size:p,disabled:l,modelValue:d,actualValue:v}=j(s,c);function t(){x(()=>c("change",d.value))}return(n,r)=>{var g;return I(),_("label",{class:b([e(a).b(),e(a).is("disabled",e(l)),e(a).is("focus",e(i)),e(a).is("bordered",n.border),e(a).is("checked",e(d)===e(v)),e(a).m(e(p))])},[y("span",{class:b([e(a).e("input"),e(a).is("disabled",e(l)),e(a).is("checked",e(d)===e(v))])},[P(y("input",{ref_key:"radioRef",ref:u,"onUpdate:modelValue":r[0]||(r[0]=R=>A(d)?d.value=R:null),class:b(e(a).e("original")),value:e(v),name:n.name||((g=e(m))==null?void 0:g.name),disabled:e(l),type:"radio",onFocus:r[1]||(r[1]=R=>i.value=!0),onBlur:r[2]||(r[2]=R=>i.value=!1),onChange:t,onClick:r[3]||(r[3]=B(()=>{},["stop"]))},null,42,ce),[[w,e(d)]]),y("span",{class:b(e(a).e("inner"))},null,2)],2),y("span",{class:b(e(a).e("label")),onKeydown:r[4]||(r[4]=B(()=>{},["stop"]))},[k(n.$slots,"default",{},()=>[U(D(n.label),1)])],34)],2)}}});var ve=$(fe,[["__file","radio.vue"]]);const be=E({...M}),ge=["value","name","disabled"],ye=S({name:"ElRadioButton"}),Se=S({...ye,props:be,setup(o){const c=o,s=G("radio"),{radioRef:a,focus:u,size:m,disabled:i,modelValue:p,radioGroup:l,actualValue:d}=j(c),v=f(()=>({backgroundColor:(l==null?void 0:l.fill)||"",borderColor:(l==null?void 0:l.fill)||"",boxShadow:l!=null&&l.fill?`-1px 0 0 0 ${l.fill}`:"",color:(l==null?void 0:l.textColor)||""}));return(t,n)=>{var r;return I(),_("label",{class:b([e(s).b("button"),e(s).is("active",e(p)===e(d)),e(s).is("disabled",e(i)),e(s).is("focus",e(u)),e(s).bm("button",e(m))])},[P(y("input",{ref_key:"radioRef",ref:a,"onUpdate:modelValue":n[0]||(n[0]=g=>A(p)?p.value=g:null),class:b(e(s).be("button","original-radio")),value:e(d),type:"radio",name:t.name||((r=e(l))==null?void 0:r.name),disabled:e(i),onFocus:n[1]||(n[1]=g=>u.value=!0),onBlur:n[2]||(n[2]=g=>u.value=!1),onClick:n[3]||(n[3]=B(()=>{},["stop"]))},null,42,ge),[[w,e(p)]]),y("span",{class:b(e(s).be("button","inner")),style:Q(e(p)===e(d)?e(v):{}),onKeydown:n[4]||(n[4]=B(()=>{},["stop"]))},[k(t.$slots,"default",{},()=>[U(D(t.label),1)])],38)],2)}}});var O=$(Se,[["__file","radio-button.vue"]]);const Be=E({id:{type:String,default:void 0},size:L,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:void 0},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0},...te(["ariaLabel"])}),Ee=q,Re=["id","aria-label","aria-labelledby"],Ve=S({name:"ElRadioGroup"}),Ie=S({...Ve,props:Be,emits:Ee,setup(o,{emit:c}){const s=o,a=G("radio"),u=ne(),m=V(),{formItem:i}=re(),{inputId:p,isLabeledByFormItem:l}=ie(s,{formItemContext:i}),d=t=>{c(C,t),x(()=>c("change",t))};X(()=>{const t=m.value.querySelectorAll("[type=radio]"),n=t[0];!Array.from(t).some(r=>r.checked)&&n&&(n.tabIndex=0)});const v=f(()=>s.name||u.value);return Y(H,Z({...ee(s),changeEvent:d,name:v})),ae(()=>s.modelValue,()=>{s.validateEvent&&(i==null||i.validate("change").catch(t=>de()))}),T({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-radio-group",ref:"https://element-plus.org/en-US/component/radio.html"},f(()=>!!s.label)),(t,n)=>(I(),_("div",{id:e(p),ref_key:"radioGroupRef",ref:m,class:b(e(a).b("group")),role:"radiogroup","aria-label":e(l)?void 0:t.label||t.ariaLabel||"radio-group","aria-labelledby":e(l)?e(i).labelId:void 0},[k(t.$slots,"default")],10,Re))}});var W=$(Ie,[["__file","radio-group.vue"]]);const Ce=ue(ve,{RadioButton:O,RadioGroup:W}),Ge=K(W),$e=K(O);export{$e as E,Ge as a,Ce as b};
import{k as y}from"./pinia-d2c8f655.js";var g={exports:{}},C;function G(){return C||(C=1,function(S){S.exports=function(f){var c={};function s(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return f[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}return s.m=f,s.c=c,s.d=function(t,r,l){s.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:l})},s.r=function(t){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,r){if(r&1&&(t=s(t)),r&8||r&4&&typeof t=="object"&&t&&t.__esModule)return t;var l=Object.create(null);if(s.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),r&2&&typeof t!="string")for(var m in t)s.d(l,m,(function(_){return t[_]}).bind(null,m));return l},s.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(r,"a",r),r},s.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},s.p="/dist/",s(s.s=91)}({0:function(f,c,s){s.d(c,"a",function(){return t});function t(r,l,m,_,u,v,x,b){var e=typeof r=="function"?r.options:r;l&&(e.render=l,e.staticRenderFns=m,e._compiled=!0),_&&(e.functional=!0),v&&(e._scopeId="data-v-"+v);var i;if(x?(i=function(n){n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!n&&typeof __VUE_SSR_CONTEXT__<"u"&&(n=__VUE_SSR_CONTEXT__),u&&u.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(x)},e._ssrRegister=i):u&&(i=b?function(){u.call(this,this.$root.$options.shadowRoot)}:u),i)if(e.functional){e._injectStyles=i;var a=e.render;e.render=function(h,p){return i.call(p),a(h,p)}}else{var o=e.beforeCreate;e.beforeCreate=o?[].concat(o,i):[i]}return{exports:r,options:e}}},4:function(f,c){f.exports=y()},91:function(f,c,s){s.r(c);var t=function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("label",{staticClass:"el-checkbox",class:[e.border&&e.checkboxSize?"el-checkbox--"+e.checkboxSize:"",{"is-disabled":e.isDisabled},{"is-bordered":e.border},{"is-checked":e.isChecked}],attrs:{id:e.id}},[a("span",{staticClass:"el-checkbox__input",class:{"is-disabled":e.isDisabled,"is-checked":e.isChecked,"is-indeterminate":e.indeterminate,"is-focus":e.focus},attrs:{tabindex:e.indeterminate?0:!1,role:e.indeterminate?"checkbox":!1,"aria-checked":e.indeterminate?"mixed":!1}},[a("span",{staticClass:"el-checkbox__inner"}),e.trueLabel||e.falseLabel?a("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],staticClass:"el-checkbox__original",attrs:{type:"checkbox","aria-hidden":e.indeterminate?"true":"false",name:e.name,disabled:e.isDisabled,"true-value":e.trueLabel,"false-value":e.falseLabel},domProps:{checked:Array.isArray(e.model)?e._i(e.model,null)>-1:e._q(e.model,e.trueLabel)},on:{change:[function(o){var n=e.model,h=o.target,p=h.checked?e.trueLabel:e.falseLabel;if(Array.isArray(n)){var k=null,d=e._i(n,k);h.checked?d<0&&(e.model=n.concat([k])):d>-1&&(e.model=n.slice(0,d).concat(n.slice(d+1)))}else e.model=p},e.handleChange],focus:function(o){e.focus=!0},blur:function(o){e.focus=!1}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],staticClass:"el-checkbox__original",attrs:{type:"checkbox","aria-hidden":e.indeterminate?"true":"false",disabled:e.isDisabled,name:e.name},domProps:{value:e.label,checked:Array.isArray(e.model)?e._i(e.model,e.label)>-1:e.model},on:{change:[function(o){var n=e.model,h=o.target,p=!!h.checked;if(Array.isArray(n)){var k=e.label,d=e._i(n,k);h.checked?d<0&&(e.model=n.concat([k])):d>-1&&(e.model=n.slice(0,d).concat(n.slice(d+1)))}else e.model=p},e.handleChange],focus:function(o){e.focus=!0},blur:function(o){e.focus=!1}}})]),e.$slots.default||e.label?a("span",{staticClass:"el-checkbox__label"},[e._t("default"),e.$slots.default?e._e():[e._v(e._s(e.label))]],2):e._e()])},r=[];t._withStripped=!0;var l=s(4),m=s.n(l),_={name:"ElCheckbox",mixins:[m.a],inject:{elForm:{default:""},elFormItem:{default:""}},componentName:"ElCheckbox",data:function(){return{selfModel:!1,focus:!1,isLimitExceeded:!1}},computed:{model:{get:function(){return this.isGroup?this.store:this.value!==void 0?this.value:this.selfModel},set:function(i){this.isGroup?(this.isLimitExceeded=!1,this._checkboxGroup.min!==void 0&&i.length<this._checkboxGroup.min&&(this.isLimitExceeded=!0),this._checkboxGroup.max!==void 0&&i.length>this._checkboxGroup.max&&(this.isLimitExceeded=!0),this.isLimitExceeded===!1&&this.dispatch("ElCheckboxGroup","input",[i])):(this.$emit("input",i),this.selfModel=i)}},isChecked:function(){if({}.toString.call(this.model)==="[object Boolean]")return this.model;if(Array.isArray(this.model))return this.model.indexOf(this.label)>-1;if(this.model!==null&&this.model!==void 0)return this.model===this.trueLabel},isGroup:function(){for(var i=this.$parent;i;)if(i.$options.componentName!=="ElCheckboxGroup")i=i.$parent;else return this._checkboxGroup=i,!0;return!1},store:function(){return this._checkboxGroup?this._checkboxGroup.value:this.value},isLimitDisabled:function(){var i=this._checkboxGroup,a=i.max,o=i.min;return!!(a||o)&&this.model.length>=a&&!this.isChecked||this.model.length<=o&&this.isChecked},isDisabled:function(){return this.isGroup?this._checkboxGroup.disabled||this.disabled||(this.elForm||{}).disabled||this.isLimitDisabled:this.disabled||(this.elForm||{}).disabled},_elFormItemSize:function(){return(this.elFormItem||{}).elFormItemSize},checkboxSize:function(){var i=this.size||this._elFormItemSize||(this.$ELEMENT||{}).size;return this.isGroup&&this._checkboxGroup.checkboxGroupSize||i}},props:{value:{},label:{},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:String,trueLabel:[String,Number],falseLabel:[String,Number],id:String,controls:String,border:Boolean,size:String},methods:{addToStore:function(){Array.isArray(this.model)&&this.model.indexOf(this.label)===-1?this.model.push(this.label):this.model=this.trueLabel||!0},handleChange:function(i){var a=this;if(!this.isLimitExceeded){var o=void 0;i.target.checked?o=this.trueLabel===void 0?!0:this.trueLabel:o=this.falseLabel===void 0?!1:this.falseLabel,this.$emit("change",o,i),this.$nextTick(function(){a.isGroup&&a.dispatch("ElCheckboxGroup","change",[a._checkboxGroup.value])})}}},created:function(){this.checked&&this.addToStore()},mounted:function(){this.indeterminate&&this.$el.setAttribute("aria-controls",this.controls)},watch:{value:function(i){this.dispatch("ElFormItem","el.form.change",i)}}},u=_,v=s(0),x=Object(v.a)(u,t,r,!1,null,null,null);x.options.__file="packages/checkbox/src/checkbox.vue";var b=x.exports;b.install=function(e){e.component(b.name,b)},c.default=b}})}(g)),g.exports}export{G as r};

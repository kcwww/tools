import{n as Zt,i as te,a as ee,g as re,b as ne,V as Y,P as ie,c as ae}from"./pinia-1d7b60d7.js";window.process={env:{}};const oe={name:"App",mixins:[te],data(){return{config:{resultTheme:"default"}}},mounted(){this.loadConfig(),window.addEventListener("keydown",t=>{t.code=="F12"?this.emit("developerTool"):ee(t)&&t.code=="KeyV"&&t.preventDefault()}),this.on("route",t=>{document.body.oncontextmenu=e=>{e.preventDefault()},this.$route.name==t?this.emit("routed"):this.$router.push("/"+t)}).on("language",t=>{this.$i18n.locale=t}),this.emit("init")},methods:{loadConfig(){const t=re();t!=null&&t.config&&(this.config=t.config)}}};var se=function(){var e=this,r=e._self._c;return r("div",{class:e.config.resultTheme,attrs:{id:"app"}},[r("router-view")],1)},ue=[],ce=Zt(oe,se,ue,!1,null,null,null,null);const fe=ce.exports;/*!
  * vue-router v3.6.5
  * (c) 2022 Evan You
  * @license MIT
  */function T(t,e){for(var r in e)t[r]=e[r];return t}var pe=/[!'()*]/g,he=function(t){return"%"+t.charCodeAt(0).toString(16)},le=/%2C/g,V=function(t){return encodeURIComponent(t).replace(pe,he).replace(le,",")};function it(t){try{return decodeURIComponent(t)}catch{}return t}function ve(t,e,r){e===void 0&&(e={});var i=r||de,n;try{n=i(t||"")}catch{n={}}for(var a in e){var o=e[a];n[a]=Array.isArray(o)?o.map(yt):yt(o)}return n}var yt=function(t){return t==null||typeof t=="object"?t:String(t)};function de(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t&&t.split("&").forEach(function(r){var i=r.replace(/\+/g," ").split("="),n=it(i.shift()),a=i.length>0?it(i.join("=")):null;e[n]===void 0?e[n]=a:Array.isArray(e[n])?e[n].push(a):e[n]=[e[n],a]}),e}function me(t){var e=t?Object.keys(t).map(function(r){var i=t[r];if(i===void 0)return"";if(i===null)return V(r);if(Array.isArray(i)){var n=[];return i.forEach(function(a){a!==void 0&&(a===null?n.push(V(r)):n.push(V(r)+"="+V(a)))}),n.join("&")}return V(r)+"="+V(i)}).filter(function(r){return r.length>0}).join("&"):null;return e?"?"+e:""}var K=/\/?$/;function G(t,e,r,i){var n=i&&i.options.stringifyQuery,a=e.query||{};try{a=at(a)}catch{}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:a,params:e.params||{},fullPath:gt(e,n),matched:t?ye(t):[]};return r&&(o.redirectedFrom=gt(r,n)),Object.freeze(o)}function at(t){if(Array.isArray(t))return t.map(at);if(t&&typeof t=="object"){var e={};for(var r in t)e[r]=at(t[r]);return e}else return t}var $=G(null,{path:"/"});function ye(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function gt(t,e){var r=t.path,i=t.query;i===void 0&&(i={});var n=t.hash;n===void 0&&(n="");var a=e||me;return(r||"/")+a(i)+n}function It(t,e,r){return e===$?t===e:e?t.path&&e.path?t.path.replace(K,"")===e.path.replace(K,"")&&(r||t.hash===e.hash&&N(t.query,e.query)):t.name&&e.name?t.name===e.name&&(r||t.hash===e.hash&&N(t.query,e.query)&&N(t.params,e.params)):!1:!1}function N(t,e){if(t===void 0&&(t={}),e===void 0&&(e={}),!t||!e)return t===e;var r=Object.keys(t).sort(),i=Object.keys(e).sort();return r.length!==i.length?!1:r.every(function(n,a){var o=t[n],s=i[a];if(s!==n)return!1;var c=e[n];return o==null||c==null?o===c:typeof o=="object"&&typeof c=="object"?N(o,c):String(o)===String(c)})}function ge(t,e){return t.path.replace(K,"/").indexOf(e.path.replace(K,"/"))===0&&(!e.hash||t.hash===e.hash)&&_e(t.query,e.query)}function _e(t,e){for(var r in e)if(!(r in t))return!1;return!0}function Vt(t){for(var e=0;e<t.matched.length;e++){var r=t.matched[e];for(var i in r.instances){var n=r.instances[i],a=r.enteredCbs[i];if(!(!n||!a)){delete r.enteredCbs[i];for(var o=0;o<a.length;o++)n._isBeingDestroyed||a[o](n)}}}}var we={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,r){var i=r.props,n=r.children,a=r.parent,o=r.data;o.routerView=!0;for(var s=a.$createElement,c=i.name,u=a.$route,h=a._routerViewCache||(a._routerViewCache={}),v=0,m=!1;a&&a._routerRoot!==a;){var d=a.$vnode?a.$vnode.data:{};d.routerView&&v++,d.keepAlive&&a._directInactive&&a._inactive&&(m=!0),a=a.$parent}if(o.routerViewDepth=v,m){var l=h[c],f=l&&l.component;return f?(l.configProps&&_t(f,o,l.route,l.configProps),s(f,o,n)):s()}var p=u.matched[v],y=p&&p.components[c];if(!p||!y)return h[c]=null,s();h[c]={component:y},o.registerRouteInstance=function(g,R){var E=p.instances[c];(R&&E!==g||!R&&E===g)&&(p.instances[c]=R)},(o.hook||(o.hook={})).prepatch=function(g,R){p.instances[c]=R.componentInstance},o.hook.init=function(g){g.data.keepAlive&&g.componentInstance&&g.componentInstance!==p.instances[c]&&(p.instances[c]=g.componentInstance),Vt(u)};var w=p.props&&p.props[c];return w&&(T(h[c],{route:u,configProps:w}),_t(y,o,u,w)),s(y,o,n)}};function _t(t,e,r,i){var n=e.props=Re(r,i);if(n){n=e.props=T({},n);var a=e.attrs=e.attrs||{};for(var o in n)(!t.props||!(o in t.props))&&(a[o]=n[o],delete n[o])}}function Re(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0}}function jt(t,e,r){var i=t.charAt(0);if(i==="/")return t;if(i==="?"||i==="#")return e+t;var n=e.split("/");(!r||!n[n.length-1])&&n.pop();for(var a=t.replace(/^\//,"").split("/"),o=0;o<a.length;o++){var s=a[o];s===".."?n.pop():s!=="."&&n.push(s)}return n[0]!==""&&n.unshift(""),n.join("/")}function Ee(t){var e="",r="",i=t.indexOf("#");i>=0&&(e=t.slice(i),t=t.slice(0,i));var n=t.indexOf("?");return n>=0&&(r=t.slice(n+1),t=t.slice(0,n)),{path:t,query:r,hash:e}}function C(t){return t.replace(/\/(?:\s*\/)+/g,"/")}var Q=Array.isArray||function(t){return Object.prototype.toString.call(t)=="[object Array]"},q=kt,be=ft,xe=Le,Pe=qt,Te=Ut,Ae=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function ft(t,e){for(var r=[],i=0,n=0,a="",o=e&&e.delimiter||"/",s;(s=Ae.exec(t))!=null;){var c=s[0],u=s[1],h=s.index;if(a+=t.slice(n,h),n=h+c.length,u){a+=u[1];continue}var v=t[n],m=s[2],d=s[3],l=s[4],f=s[5],p=s[6],y=s[7];a&&(r.push(a),a="");var w=m!=null&&v!=null&&v!==m,g=p==="+"||p==="*",R=p==="?"||p==="*",E=s[2]||o,b=l||f;r.push({name:d||i++,prefix:m||"",delimiter:E,optional:R,repeat:g,partial:w,asterisk:!!y,pattern:b?Se(b):y?".*":"[^"+H(E)+"]+?"})}return n<t.length&&(a+=t.substr(n)),a&&r.push(a),r}function Le(t,e){return qt(ft(t,e),e)}function Ce(t){return encodeURI(t).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function Oe(t){return encodeURI(t).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function qt(t,e){for(var r=new Array(t.length),i=0;i<t.length;i++)typeof t[i]=="object"&&(r[i]=new RegExp("^(?:"+t[i].pattern+")$",ht(e)));return function(n,a){for(var o="",s=n||{},c=a||{},u=c.pretty?Ce:encodeURIComponent,h=0;h<t.length;h++){var v=t[h];if(typeof v=="string"){o+=v;continue}var m=s[v.name],d;if(m==null)if(v.optional){v.partial&&(o+=v.prefix);continue}else throw new TypeError('Expected "'+v.name+'" to be defined');if(Q(m)){if(!v.repeat)throw new TypeError('Expected "'+v.name+'" to not repeat, but received `'+JSON.stringify(m)+"`");if(m.length===0){if(v.optional)continue;throw new TypeError('Expected "'+v.name+'" to not be empty')}for(var l=0;l<m.length;l++){if(d=u(m[l]),!r[h].test(d))throw new TypeError('Expected all "'+v.name+'" to match "'+v.pattern+'", but received `'+JSON.stringify(d)+"`");o+=(l===0?v.prefix:v.delimiter)+d}continue}if(d=v.asterisk?Oe(m):u(m),!r[h].test(d))throw new TypeError('Expected "'+v.name+'" to match "'+v.pattern+'", but received "'+d+'"');o+=v.prefix+d}return o}}function H(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function Se(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function pt(t,e){return t.keys=e,t}function ht(t){return t&&t.sensitive?"":"i"}function $e(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var i=0;i<r.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return pt(t,e)}function Ie(t,e,r){for(var i=[],n=0;n<t.length;n++)i.push(kt(t[n],e,r).source);var a=new RegExp("(?:"+i.join("|")+")",ht(r));return pt(a,e)}function Ve(t,e,r){return Ut(ft(t,r),e,r)}function Ut(t,e,r){Q(e)||(r=e||r,e=[]),r=r||{};for(var i=r.strict,n=r.end!==!1,a="",o=0;o<t.length;o++){var s=t[o];if(typeof s=="string")a+=H(s);else{var c=H(s.prefix),u="(?:"+s.pattern+")";e.push(s),s.repeat&&(u+="(?:"+c+u+")*"),s.optional?s.partial?u=c+"("+u+")?":u="(?:"+c+"("+u+"))?":u=c+"("+u+")",a+=u}}var h=H(r.delimiter||"/"),v=a.slice(-h.length)===h;return i||(a=(v?a.slice(0,-h.length):a)+"(?:"+h+"(?=$))?"),n?a+="$":a+=i&&v?"":"(?="+h+"|$)",pt(new RegExp("^"+a,ht(r)),e)}function kt(t,e,r){return Q(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?$e(t,e):Q(t)?Ie(t,e,r):Ve(t,e,r)}q.parse=be;q.compile=xe;q.tokensToFunction=Pe;q.tokensToRegExp=Te;var wt=Object.create(null);function F(t,e,r){e=e||{};try{var i=wt[t]||(wt[t]=q.compile(t));return typeof e.pathMatch=="string"&&(e[0]=e.pathMatch),i(e,{pretty:!0})}catch{return""}finally{delete e[0]}}function lt(t,e,r,i){var n=typeof t=="string"?{path:t}:t;if(n._normalized)return n;if(n.name){n=T({},t);var a=n.params;return a&&typeof a=="object"&&(n.params=T({},a)),n}if(!n.path&&n.params&&e){n=T({},n),n._normalized=!0;var o=T(T({},e.params),n.params);if(e.name)n.name=e.name,n.params=o;else if(e.matched.length){var s=e.matched[e.matched.length-1].path;n.path=F(s,o,"path "+e.path)}return n}var c=Ee(n.path||""),u=e&&e.path||"/",h=c.path?jt(c.path,u,r||n.append):u,v=ve(c.query,n.query,i&&i.options.parseQuery),m=n.hash||c.hash;return m&&m.charAt(0)!=="#"&&(m="#"+m),{_normalized:!0,path:h,query:v,hash:m}}var je=[String,Object],qe=[String,Array],Rt=function(){},Ue={name:"RouterLink",props:{to:{type:je,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:qe,default:"click"}},render:function(e){var r=this,i=this.$router,n=this.$route,a=i.resolve(this.to,n,this.append),o=a.location,s=a.route,c=a.href,u={},h=i.options.linkActiveClass,v=i.options.linkExactActiveClass,m=h??"router-link-active",d=v??"router-link-exact-active",l=this.activeClass==null?m:this.activeClass,f=this.exactActiveClass==null?d:this.exactActiveClass,p=s.redirectedFrom?G(null,lt(s.redirectedFrom),null,i):s;u[f]=It(n,p,this.exactPath),u[l]=this.exact||this.exactPath?u[f]:ge(n,p);var y=u[f]?this.ariaCurrentValue:null,w=function(nt){Et(nt)&&(r.replace?i.replace(o,Rt):i.push(o,Rt))},g={click:Et};Array.isArray(this.event)?this.event.forEach(function(nt){g[nt]=w}):g[this.event]=w;var R={class:u},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:s,navigate:w,isActive:u[l],isExactActive:u[f]});if(E){if(E.length===1)return E[0];if(E.length>1||!E.length)return E.length===0?e():e("span",{},E)}if(this.tag==="a")R.on=g,R.attrs={href:c,"aria-current":y};else{var b=Mt(this.$slots.default);if(b){b.isStatic=!1;var P=b.data=T({},b.data);P.on=P.on||{};for(var L in P.on){var rt=P.on[L];L in g&&(P.on[L]=Array.isArray(rt)?rt:[rt])}for(var M in g)M in P.on?P.on[M].push(g[M]):P.on[M]=w;var mt=b.data.attrs=T({},b.data.attrs);mt.href=c,mt["aria-current"]=y}else R.on=g}return e(this.tag,R,this.$slots.default)}};function Et(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Mt(t){if(t){for(var e,r=0;r<t.length;r++)if(e=t[r],e.tag==="a"||e.children&&(e=Mt(e.children)))return e}}var W;function ot(t){if(!(ot.installed&&W===t)){ot.installed=!0,W=t;var e=function(n){return n!==void 0},r=function(n,a){var o=n.$options._parentVnode;e(o)&&e(o=o.data)&&e(o=o.registerRouteInstance)&&o(n,a)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",we),t.component("RouterLink",Ue);var i=t.config.optionMergeStrategies;i.beforeRouteEnter=i.beforeRouteLeave=i.beforeRouteUpdate=i.created}}var k=typeof window<"u";function B(t,e,r,i,n){var a=e||[],o=r||Object.create(null),s=i||Object.create(null);t.forEach(function(h){st(a,o,s,h,n)});for(var c=0,u=a.length;c<u;c++)a[c]==="*"&&(a.push(a.splice(c,1)[0]),u--,c--);return{pathList:a,pathMap:o,nameMap:s}}function st(t,e,r,i,n,a){var o=i.path,s=i.name,c=i.pathToRegexpOptions||{},u=Me(o,n,c.strict);typeof i.caseSensitive=="boolean"&&(c.sensitive=i.caseSensitive);var h={path:u,regex:ke(u,c),components:i.components||{default:i.component},alias:i.alias?typeof i.alias=="string"?[i.alias]:i.alias:[],instances:{},enteredCbs:{},name:s,parent:n,matchAs:a,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:i.props==null?{}:i.components?i.props:{default:i.props}};if(i.children&&i.children.forEach(function(f){var p=a?C(a+"/"+f.path):void 0;st(t,e,r,f,h,p)}),e[h.path]||(t.push(h.path),e[h.path]=h),i.alias!==void 0)for(var v=Array.isArray(i.alias)?i.alias:[i.alias],m=0;m<v.length;++m){var d=v[m],l={path:d,children:i.children};st(t,e,r,l,n,h.path||"/")}s&&(r[s]||(r[s]=h))}function ke(t,e){var r=q(t,[],e);return r}function Me(t,e,r){return r||(t=t.replace(/\/$/,"")),t[0]==="/"||e==null?t:C(e.path+"/"+t)}function Be(t,e){var r=B(t),i=r.pathList,n=r.pathMap,a=r.nameMap;function o(d){B(d,i,n,a)}function s(d,l){var f=typeof d!="object"?a[d]:void 0;B([l||d],i,n,a,f),f&&f.alias.length&&B(f.alias.map(function(p){return{path:p,children:[l]}}),i,n,a,f)}function c(){return i.map(function(d){return n[d]})}function u(d,l,f){var p=lt(d,l,!1,e),y=p.name;if(y){var w=a[y];if(!w)return m(null,p);var g=w.regex.keys.filter(function(L){return!L.optional}).map(function(L){return L.name});if(typeof p.params!="object"&&(p.params={}),l&&typeof l.params=="object")for(var R in l.params)!(R in p.params)&&g.indexOf(R)>-1&&(p.params[R]=l.params[R]);return p.path=F(w.path,p.params),m(w,p,f)}else if(p.path){p.params={};for(var E=0;E<i.length;E++){var b=i[E],P=n[b];if(Ne(P.regex,p.path,p.params))return m(P,p,f)}}return m(null,p)}function h(d,l){var f=d.redirect,p=typeof f=="function"?f(G(d,l,null,e)):f;if(typeof p=="string"&&(p={path:p}),!p||typeof p!="object")return m(null,l);var y=p,w=y.name,g=y.path,R=l.query,E=l.hash,b=l.params;if(R=y.hasOwnProperty("query")?y.query:R,E=y.hasOwnProperty("hash")?y.hash:E,b=y.hasOwnProperty("params")?y.params:b,w)return a[w],u({_normalized:!0,name:w,query:R,hash:E,params:b},void 0,l);if(g){var P=He(g,d),L=F(P,b);return u({_normalized:!0,path:L,query:R,hash:E},void 0,l)}else return m(null,l)}function v(d,l,f){var p=F(f,l.params),y=u({_normalized:!0,path:p});if(y){var w=y.matched,g=w[w.length-1];return l.params=y.params,m(g,l)}return m(null,l)}function m(d,l,f){return d&&d.redirect?h(d,f||l):d&&d.matchAs?v(d,l,d.matchAs):G(d,l,f,e)}return{match:u,addRoute:s,getRoutes:c,addRoutes:o}}function Ne(t,e,r){var i=e.match(t);if(i){if(!r)return!0}else return!1;for(var n=1,a=i.length;n<a;++n){var o=t.keys[n-1];o&&(r[o.name||"pathMatch"]=typeof i[n]=="string"?it(i[n]):i[n])}return!0}function He(t,e){return jt(t,e.parent?e.parent.path:"/",!0)}var Fe=k&&window.performance&&window.performance.now?window.performance:Date;function Bt(){return Fe.now().toFixed(3)}var Nt=Bt();function Z(){return Nt}function Ht(t){return Nt=t}var Ft=Object.create(null);function zt(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),r=T({},window.history.state);return r.key=Z(),window.history.replaceState(r,"",e),window.addEventListener("popstate",bt),function(){window.removeEventListener("popstate",bt)}}function O(t,e,r,i){if(t.app){var n=t.options.scrollBehavior;n&&t.app.$nextTick(function(){var a=ze(),o=n.call(t,e,r,i?a:null);o&&(typeof o.then=="function"?o.then(function(s){Tt(s,a)}).catch(function(s){}):Tt(o,a))})}}function Dt(){var t=Z();t&&(Ft[t]={x:window.pageXOffset,y:window.pageYOffset})}function bt(t){Dt(),t.state&&t.state.key&&Ht(t.state.key)}function ze(){var t=Z();if(t)return Ft[t]}function De(t,e){var r=document.documentElement,i=r.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-i.left-e.x,y:n.top-i.top-e.y}}function xt(t){return j(t.x)||j(t.y)}function Pt(t){return{x:j(t.x)?t.x:window.pageXOffset,y:j(t.y)?t.y:window.pageYOffset}}function Ke(t){return{x:j(t.x)?t.x:0,y:j(t.y)?t.y:0}}function j(t){return typeof t=="number"}var Ge=/^#\d/;function Tt(t,e){var r=typeof t=="object";if(r&&typeof t.selector=="string"){var i=Ge.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(i){var n=t.offset&&typeof t.offset=="object"?t.offset:{};n=Ke(n),e=De(i,n)}else xt(t)&&(e=Pt(t))}else r&&xt(t)&&(e=Pt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var S=k&&function(){var t=window.navigator.userAgent;return(t.indexOf("Android 2.")!==-1||t.indexOf("Android 4.0")!==-1)&&t.indexOf("Mobile Safari")!==-1&&t.indexOf("Chrome")===-1&&t.indexOf("Windows Phone")===-1?!1:window.history&&typeof window.history.pushState=="function"}();function J(t,e){Dt();var r=window.history;try{if(e){var i=T({},r.state);i.key=Z(),r.replaceState(i,"",t)}else r.pushState({key:Ht(Bt())},"",t)}catch{window.location[e?"replace":"assign"](t)}}function ut(t){J(t,!0)}var I={redirected:2,aborted:4,cancelled:8,duplicated:16};function Qe(t,e){return tt(t,e,I.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Ye(e)+'" via a navigation guard.')}function We(t,e){var r=tt(t,e,I.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return r.name="NavigationDuplicated",r}function At(t,e){return tt(t,e,I.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Je(t,e){return tt(t,e,I.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function tt(t,e,r,i){var n=new Error(i);return n._isRouter=!0,n.from=t,n.to=e,n.type=r,n}var Xe=["params","query","hash"];function Ye(t){if(typeof t=="string")return t;if("path"in t)return t.path;var e={};return Xe.forEach(function(r){r in t&&(e[r]=t[r])}),JSON.stringify(e,null,2)}function X(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function et(t,e){return X(t)&&t._isRouter&&(e==null||t.type===e)}function Lt(t,e,r){var i=function(n){n>=t.length?r():t[n]?e(t[n],function(){i(n+1)}):i(n+1)};i(0)}function Ze(t){return function(e,r,i){var n=!1,a=0,o=null;Kt(t,function(s,c,u,h){if(typeof s=="function"&&s.cid===void 0){n=!0,a++;var v=Ct(function(f){er(f)&&(f=f.default),s.resolved=typeof f=="function"?f:W.extend(f),u.components[h]=f,a--,a<=0&&i()}),m=Ct(function(f){var p="Failed to resolve async component "+h+": "+f;o||(o=X(f)?f:new Error(p),i(o))}),d;try{d=s(v,m)}catch(f){m(f)}if(d)if(typeof d.then=="function")d.then(v,m);else{var l=d.component;l&&typeof l.then=="function"&&l.then(v,m)}}}),n||i()}}function Kt(t,e){return Gt(t.map(function(r){return Object.keys(r.components).map(function(i){return e(r.components[i],r.instances[i],r,i)})}))}function Gt(t){return Array.prototype.concat.apply([],t)}var tr=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol";function er(t){return t.__esModule||tr&&t[Symbol.toStringTag]==="Module"}function Ct(t){var e=!1;return function(){for(var r=[],i=arguments.length;i--;)r[i]=arguments[i];if(!e)return e=!0,t.apply(this,r)}}var A=function(e,r){this.router=e,this.base=rr(r),this.current=$,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};A.prototype.listen=function(e){this.cb=e};A.prototype.onReady=function(e,r){this.ready?e():(this.readyCbs.push(e),r&&this.readyErrorCbs.push(r))};A.prototype.onError=function(e){this.errorCbs.push(e)};A.prototype.transitionTo=function(e,r,i){var n=this,a;try{a=this.router.match(e,this.current)}catch(s){throw this.errorCbs.forEach(function(c){c(s)}),s}var o=this.current;this.confirmTransition(a,function(){n.updateRoute(a),r&&r(a),n.ensureURL(),n.router.afterHooks.forEach(function(s){s&&s(a,o)}),n.ready||(n.ready=!0,n.readyCbs.forEach(function(s){s(a)}))},function(s){i&&i(s),s&&!n.ready&&(!et(s,I.redirected)||o!==$)&&(n.ready=!0,n.readyErrorCbs.forEach(function(c){c(s)}))})};A.prototype.confirmTransition=function(e,r,i){var n=this,a=this.current;this.pending=e;var o=function(f){!et(f)&&X(f)&&(n.errorCbs.length?n.errorCbs.forEach(function(p){p(f)}):console.error(f)),i&&i(f)},s=e.matched.length-1,c=a.matched.length-1;if(It(e,a)&&s===c&&e.matched[s]===a.matched[c])return this.ensureURL(),e.hash&&O(this.router,a,e,!1),o(We(a,e));var u=nr(this.current.matched,e.matched),h=u.updated,v=u.deactivated,m=u.activated,d=[].concat(ar(v),this.router.beforeHooks,or(h),m.map(function(f){return f.beforeEnter}),Ze(m)),l=function(f,p){if(n.pending!==e)return o(At(a,e));try{f(e,a,function(y){y===!1?(n.ensureURL(!0),o(Je(a,e))):X(y)?(n.ensureURL(!0),o(y)):typeof y=="string"||typeof y=="object"&&(typeof y.path=="string"||typeof y.name=="string")?(o(Qe(a,e)),typeof y=="object"&&y.replace?n.replace(y):n.push(y)):p(y)})}catch(y){o(y)}};Lt(d,l,function(){var f=sr(m),p=f.concat(n.router.resolveHooks);Lt(p,l,function(){if(n.pending!==e)return o(At(a,e));n.pending=null,r(e),n.router.app&&n.router.app.$nextTick(function(){Vt(e)})})})};A.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)};A.prototype.setupListeners=function(){};A.prototype.teardown=function(){this.listeners.forEach(function(e){e()}),this.listeners=[],this.current=$,this.pending=null};function rr(t){if(!t)if(k){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return t.charAt(0)!=="/"&&(t="/"+t),t.replace(/\/$/,"")}function nr(t,e){var r,i=Math.max(t.length,e.length);for(r=0;r<i&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}function vt(t,e,r,i){var n=Kt(t,function(a,o,s,c){var u=ir(a,e);if(u)return Array.isArray(u)?u.map(function(h){return r(h,o,s,c)}):r(u,o,s,c)});return Gt(i?n.reverse():n)}function ir(t,e){return typeof t!="function"&&(t=W.extend(t)),t.options[e]}function ar(t){return vt(t,"beforeRouteLeave",Qt,!0)}function or(t){return vt(t,"beforeRouteUpdate",Qt)}function Qt(t,e){if(e)return function(){return t.apply(e,arguments)}}function sr(t){return vt(t,"beforeRouteEnter",function(e,r,i,n){return ur(e,i,n)})}function ur(t,e,r){return function(n,a,o){return t(n,a,function(s){typeof s=="function"&&(e.enteredCbs[r]||(e.enteredCbs[r]=[]),e.enteredCbs[r].push(s)),o(s)})}}var Wt=function(t){function e(r,i){t.call(this,r,i),this._startLocation=U(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var i=this;if(!(this.listeners.length>0)){var n=this.router,a=n.options.scrollBehavior,o=S&&a;o&&this.listeners.push(zt());var s=function(){var c=i.current,u=U(i.base);i.current===$&&u===i._startLocation||i.transitionTo(u,function(h){o&&O(n,h,c,!0)})};window.addEventListener("popstate",s),this.listeners.push(function(){window.removeEventListener("popstate",s)})}},e.prototype.go=function(i){window.history.go(i)},e.prototype.push=function(i,n,a){var o=this,s=this,c=s.current;this.transitionTo(i,function(u){J(C(o.base+u.fullPath)),O(o.router,u,c,!1),n&&n(u)},a)},e.prototype.replace=function(i,n,a){var o=this,s=this,c=s.current;this.transitionTo(i,function(u){ut(C(o.base+u.fullPath)),O(o.router,u,c,!1),n&&n(u)},a)},e.prototype.ensureURL=function(i){if(U(this.base)!==this.current.fullPath){var n=C(this.base+this.current.fullPath);i?J(n):ut(n)}},e.prototype.getCurrentLocation=function(){return U(this.base)},e}(A);function U(t){var e=window.location.pathname,r=e.toLowerCase(),i=t.toLowerCase();return t&&(r===i||r.indexOf(C(i+"/"))===0)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var Jt=function(t){function e(r,i,n){t.call(this,r,i),!(n&&cr(this.base))&&Ot()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var i=this;if(!(this.listeners.length>0)){var n=this.router,a=n.options.scrollBehavior,o=S&&a;o&&this.listeners.push(zt());var s=function(){var u=i.current;Ot()&&i.transitionTo(z(),function(h){o&&O(i.router,h,u,!0),S||D(h.fullPath)})},c=S?"popstate":"hashchange";window.addEventListener(c,s),this.listeners.push(function(){window.removeEventListener(c,s)})}},e.prototype.push=function(i,n,a){var o=this,s=this,c=s.current;this.transitionTo(i,function(u){St(u.fullPath),O(o.router,u,c,!1),n&&n(u)},a)},e.prototype.replace=function(i,n,a){var o=this,s=this,c=s.current;this.transitionTo(i,function(u){D(u.fullPath),O(o.router,u,c,!1),n&&n(u)},a)},e.prototype.go=function(i){window.history.go(i)},e.prototype.ensureURL=function(i){var n=this.current.fullPath;z()!==n&&(i?St(n):D(n))},e.prototype.getCurrentLocation=function(){return z()},e}(A);function cr(t){var e=U(t);if(!/^\/#/.test(e))return window.location.replace(C(t+"/#"+e)),!0}function Ot(){var t=z();return t.charAt(0)==="/"?!0:(D("/"+t),!1)}function z(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function ct(t){var e=window.location.href,r=e.indexOf("#"),i=r>=0?e.slice(0,r):e;return i+"#"+t}function St(t){S?J(ct(t)):window.location.hash=t}function D(t){S?ut(ct(t)):window.location.replace(ct(t))}var fr=function(t){function e(r,i){t.call(this,r,i),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(i,n,a){var o=this;this.transitionTo(i,function(s){o.stack=o.stack.slice(0,o.index+1).concat(s),o.index++,n&&n(s)},a)},e.prototype.replace=function(i,n,a){var o=this;this.transitionTo(i,function(s){o.stack=o.stack.slice(0,o.index).concat(s),n&&n(s)},a)},e.prototype.go=function(i){var n=this,a=this.index+i;if(!(a<0||a>=this.stack.length)){var o=this.stack[a];this.confirmTransition(o,function(){var s=n.current;n.index=a,n.updateRoute(o),n.router.afterHooks.forEach(function(c){c&&c(o,s)})},function(s){et(s,I.duplicated)&&(n.index=a)})}},e.prototype.getCurrentLocation=function(){var i=this.stack[this.stack.length-1];return i?i.fullPath:"/"},e.prototype.ensureURL=function(){},e}(A),_=function(e){e===void 0&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=Be(e.routes||[],this);var r=e.mode||"hash";switch(this.fallback=r==="history"&&!S&&e.fallback!==!1,this.fallback&&(r="hash"),k||(r="abstract"),this.mode=r,r){case"history":this.history=new Wt(this,e.base);break;case"hash":this.history=new Jt(this,e.base,this.fallback);break;case"abstract":this.history=new fr(this,e.base);break}},Xt={currentRoute:{configurable:!0}};_.prototype.match=function(e,r,i){return this.matcher.match(e,r,i)};Xt.currentRoute.get=function(){return this.history&&this.history.current};_.prototype.init=function(e){var r=this;if(this.apps.push(e),e.$once("hook:destroyed",function(){var o=r.apps.indexOf(e);o>-1&&r.apps.splice(o,1),r.app===e&&(r.app=r.apps[0]||null),r.app||r.history.teardown()}),!this.app){this.app=e;var i=this.history;if(i instanceof Wt||i instanceof Jt){var n=function(o){var s=i.current,c=r.options.scrollBehavior,u=S&&c;u&&"fullPath"in o&&O(r,o,s,!1)},a=function(o){i.setupListeners(),n(o)};i.transitionTo(i.getCurrentLocation(),a,a)}i.listen(function(o){r.apps.forEach(function(s){s._route=o})})}};_.prototype.beforeEach=function(e){return dt(this.beforeHooks,e)};_.prototype.beforeResolve=function(e){return dt(this.resolveHooks,e)};_.prototype.afterEach=function(e){return dt(this.afterHooks,e)};_.prototype.onReady=function(e,r){this.history.onReady(e,r)};_.prototype.onError=function(e){this.history.onError(e)};_.prototype.push=function(e,r,i){var n=this;if(!r&&!i&&typeof Promise<"u")return new Promise(function(a,o){n.history.push(e,a,o)});this.history.push(e,r,i)};_.prototype.replace=function(e,r,i){var n=this;if(!r&&!i&&typeof Promise<"u")return new Promise(function(a,o){n.history.replace(e,a,o)});this.history.replace(e,r,i)};_.prototype.go=function(e){this.history.go(e)};_.prototype.back=function(){this.go(-1)};_.prototype.forward=function(){this.go(1)};_.prototype.getMatchedComponents=function(e){var r=e?e.matched?e:this.resolve(e).route:this.currentRoute;return r?[].concat.apply([],r.matched.map(function(i){return Object.keys(i.components).map(function(n){return i.components[n]})})):[]};_.prototype.resolve=function(e,r,i){r=r||this.history.current;var n=lt(e,r,i,this),a=this.match(n,r),o=a.redirectedFrom||a.fullPath,s=this.history.base,c=pr(s,o,this.mode);return{location:n,route:a,href:c,normalizedTo:n,resolved:a}};_.prototype.getRoutes=function(){return this.matcher.getRoutes()};_.prototype.addRoute=function(e,r){this.matcher.addRoute(e,r),this.history.current!==$&&this.history.transitionTo(this.history.getCurrentLocation())};_.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==$&&this.history.transitionTo(this.history.getCurrentLocation())};Object.defineProperties(_.prototype,Xt);var Yt=_;function dt(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function pr(t,e,r){var i=r==="hash"?"#"+e:e;return t?C(t+"/"+i):i}_.install=ot;_.version="3.6.5";_.isNavigationFailure=et;_.NavigationFailureType=I;_.START_LOCATION=$;k&&window.Vue&&window.Vue.use(_);const hr="modulepreload",lr=function(t,e){return new URL(t,e).href},$t={},x=function(e,r,i){if(!r||r.length===0)return e();const n=document.getElementsByTagName("link");return Promise.all(r.map(a=>{if(a=lr(a,i),a in $t)return;$t[a]=!0;const o=a.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!i)for(let h=n.length-1;h>=0;h--){const v=n[h];if(v.href===a&&(!o||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${s}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":hr,o||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),o)return new Promise((h,v)=>{u.addEventListener("load",h),u.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e()).catch(a=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a})},vr=new Yt({routes:[{path:"/connect",component:()=>x(()=>import("./connect-fe84d5c4.js"),["./connect-fe84d5c4.js","./pinia-1d7b60d7.js","./pinia-46ca8342.css","./focus-34de79c8.js","./switch-07af8403.js","./dialog-a62448ca.js","./option-2b881d86.js","./scrollbar-489068f6.js","./index-c9993d94.js","./DatabaseType-6e1dece4.js","./checkbox-afe2fab5.js","./checkbox-52e6312f.js","./storeUtil-f1fb66dd.js","./checkbox-group-565bcbfb.js","./index-f37b6d04.js","./arrayUtil-924944e9.js","./viewUtil-96a12b22.js","./connect-b16212db.css"],import.meta.url),name:"connect"},{path:"/status",component:()=>x(()=>import("./status-760f056e.js"),["./status-760f056e.js","./g2-d9096052.js","./pinia-1d7b60d7.js","./pinia-46ca8342.css","./arrayUtil-924944e9.js","./viewUtil-96a12b22.js","./umy-table.common-95562b87.js","./index-c9993d94.js","./index-f37b6d04.js","./index-3e66c890.js","./umy-table-378d9881.css","./status-ab806b98.css"],import.meta.url),name:"status"},{path:"/design",component:()=>x(()=>import("./design-4597d090.js"),["./design-4597d090.js","./pinia-1d7b60d7.js","./pinia-46ca8342.css","./option-2b881d86.js","./scrollbar-489068f6.js","./index-c9993d94.js","./focus-34de79c8.js","./form-cc198819.js","./dialog-a62448ca.js","./checkbox-afe2fab5.js","./checkbox-52e6312f.js","./umy-table.common-95562b87.js","./index-f37b6d04.js","./index-3e66c890.js","./umy-table-378d9881.css","./DatabaseType-6e1dece4.js","./stringUtil-f88f3441.js","./stringUtil-fcc7fa69.css","./viewUtil-96a12b22.js","./notify-9e6ef7eb.js","./arrayUtil-924944e9.js","./design-999c75d3.css"],import.meta.url),name:"design"},{path:"/structDiff",component:()=>x(()=>import("./structDiff-8c5e3025.js"),["./structDiff-8c5e3025.js","./option-2b881d86.js","./pinia-1d7b60d7.js","./pinia-46ca8342.css","./scrollbar-489068f6.js","./index-c9993d94.js","./focus-34de79c8.js","./form-cc198819.js","./notify-9e6ef7eb.js","./umy-table.common-95562b87.js","./index-f37b6d04.js","./index-3e66c890.js","./umy-table-378d9881.css","./structDiff-00970bda.css"],import.meta.url),name:"structDiff"},{path:"/keyView",component:()=>x(()=>import("./keyView-b8d15521.js"),["./keyView-b8d15521.js","./table-88eb2705.js","./pinia-1d7b60d7.js","./pinia-46ca8342.css","./checkbox-52e6312f.js","./scrollbar-489068f6.js","./index-c9993d94.js","./checkbox-group-565bcbfb.js","./index-3e66c890.js","./form-cc198819.js","./dialog-a62448ca.js","./DetailDialog-02360e51.js","./option-2b881d86.js","./focus-34de79c8.js","./date-picker-4fc905f5.js","./stringUtil-f88f3441.js","./DatabaseType-6e1dece4.js","./stringUtil-fcc7fa69.css","./arrayUtil-924944e9.js","./viewUtil-96a12b22.js","./notify-9e6ef7eb.js","./DetailDialog-7716dec5.css","./keyView-53e02d59.css"],import.meta.url),name:"keyView"},{path:"/redisStatus",component:()=>x(()=>import("./redisStatus-0917ca26.js"),["./redisStatus-0917ca26.js","./table-88eb2705.js","./pinia-1d7b60d7.js","./pinia-46ca8342.css","./checkbox-52e6312f.js","./scrollbar-489068f6.js","./index-c9993d94.js","./checkbox-group-565bcbfb.js","./index-3e66c890.js","./switch-07af8403.js","./focus-34de79c8.js","./redisStatus-b34df481.css"],import.meta.url),name:"redisStatus"},{path:"/forward",component:()=>x(()=>import("./forward-606a09b2.js"),["./forward-606a09b2.js","./form-cc198819.js","./pinia-1d7b60d7.js","./pinia-46ca8342.css","./dialog-a62448ca.js","./table-88eb2705.js","./checkbox-52e6312f.js","./scrollbar-489068f6.js","./index-c9993d94.js","./checkbox-group-565bcbfb.js","./index-3e66c890.js","./notify-9e6ef7eb.js","./forward-e3cff113.css"],import.meta.url),name:"forward"},{path:"/xterm",component:()=>x(()=>import("./xterm-173890ba.js"),["./xterm-173890ba.js","./pinia-1d7b60d7.js","./pinia-46ca8342.css","./switch-07af8403.js","./focus-34de79c8.js","./option-2b881d86.js","./scrollbar-489068f6.js","./index-c9993d94.js","./DatabaseType-6e1dece4.js","./xterm-0ba1d322.css"],import.meta.url),name:"xterm"},{path:"/sshStatus",component:()=>x(()=>import("./sshStatus-f58d45d9.js"),["./sshStatus-f58d45d9.js","./g2-d9096052.js","./pinia-1d7b60d7.js","./pinia-46ca8342.css","./notify-9e6ef7eb.js","./sshStatus-b8d9d401.css"],import.meta.url),name:"sshStatus"},{path:"/center",component:()=>x(()=>import("./center-6e934c22.js"),["./center-6e934c22.js","./dialog-a62448ca.js","./pinia-1d7b60d7.js","./pinia-46ca8342.css","./notify-9e6ef7eb.js","./center-69894bf3.css"],import.meta.url),name:"center",children:[{path:"document",component:()=>x(()=>import("./document-5d51fa26.js"),["./document-5d51fa26.js","./pinia-1d7b60d7.js","./pinia-46ca8342.css","./document-10d6a35c.css"],import.meta.url),name:"document"},{path:"plan",component:()=>x(()=>import("./Plan-2381080b.js"),["./Plan-2381080b.js","./dialog-a62448ca.js","./pinia-1d7b60d7.js","./pinia-46ca8342.css","./notify-9e6ef7eb.js","./Plan-93d82aed.css"],import.meta.url),name:"plan"},{path:"console",component:()=>x(()=>import("./console-3ed978bf.js"),["./console-3ed978bf.js","./checkbox-afe2fab5.js","./pinia-1d7b60d7.js","./pinia-46ca8342.css","./checkbox-52e6312f.js","./notify-9e6ef7eb.js","./console-789fd009.css"],import.meta.url),name:"console"},{path:"util",component:()=>x(()=>import("./util-80dd54fd.js"),["./util-80dd54fd.js","./pinia-1d7b60d7.js","./pinia-46ca8342.css","./date-picker-4fc905f5.js","./scrollbar-489068f6.js","./index-c9993d94.js","./viewUtil-96a12b22.js","./notify-9e6ef7eb.js","./option-2b881d86.js","./focus-34de79c8.js","./util-a2109aa3.css"],import.meta.url),name:"util"},{path:"changeLog",component:()=>x(()=>import("./updates-23339b4b.js"),["./updates-23339b4b.js","./pinia-1d7b60d7.js","./pinia-46ca8342.css","./document-10d6a35c.css"],import.meta.url),name:"changeLog"}]}]}),dr=ne();Y.use(Yt);Y.use(ie);const mr=ae();new Y({el:"#app",i18n:dr,components:{App:fe},router:vr,pinia:mr,template:"<App/>"});Y.config.devtools=!1;

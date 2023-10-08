import{L as D}from"./vueConfig-2816384f.js";var p,y;function E(){return y||(y=1,p=function(t,e,n,r){var i,o=0;typeof e!="boolean"&&(r=n,n=e,e=void 0);function s(){var u=this,a=Number(new Date)-o,h=arguments;function c(){o=Number(new Date),n.apply(u,h)}function z(){i=void 0}r&&!i&&c(),i&&clearTimeout(i),r===void 0&&a>t?c():e!==!0&&(i=setTimeout(r?z:c,r===void 0?t-a:t))}return s}),p}var b,g;function S(){if(g)return b;g=1;var t=E();return b=function(e,n,r){return r===void 0?t(e,n,!1):t(e,r,n!==!1)},b}var R=function(){if(typeof Map<"u")return Map;function t(e,n){var r=-1;return e.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(n){var r=t(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},e.prototype.set=function(n,r){var i=t(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},e.prototype.delete=function(n){var r=this.__entries__,i=t(r,n);~i&&r.splice(i,1)},e.prototype.has=function(n){return!!~t(this.__entries__,n)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var s=o[i];n.call(r,s[1],s[0])}},e}()}(),m=typeof window<"u"&&typeof document<"u"&&window.document===document,d=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),C=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(d):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),q=2;function L(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&u()}function s(){C(o)}function u(){var a=Date.now();if(n){if(a-i<q)return;r=!0}else n=!0,r=!1,setTimeout(s,e);i=a}return u}var P=20,j=["top","right","bottom","left","width","height","size","weight"],G=typeof MutationObserver<"u",W=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=L(this.refresh.bind(this),P)}return t.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},t.prototype.removeObserver=function(e){var n=this.observers_,r=n.indexOf(e);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},t.prototype.updateObservers_=function(){var e=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return e.forEach(function(n){return n.broadcastActive()}),e.length>0},t.prototype.connect_=function(){!m||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),G?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!m||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(e){var n=e.propertyName,r=n===void 0?"":n,i=j.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),x=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},f=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||d},M=l(0,0,0,0);function v(t){return parseFloat(t)||0}function w(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(r,i){var o=t["border-"+i+"-width"];return r+v(o)},0)}function F(t){for(var e=["top","right","bottom","left"],n={},r=0,i=e;r<i.length;r++){var o=i[r],s=t["padding-"+o];n[o]=v(s)}return n}function H(t){var e=t.getBBox();return l(0,0,e.width,e.height)}function I(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return M;var r=f(t).getComputedStyle(t),i=F(r),o=i.left+i.right,s=i.top+i.bottom,u=v(r.width),a=v(r.height);if(r.boxSizing==="border-box"&&(Math.round(u+o)!==e&&(u-=w(r,"left","right")+o),Math.round(a+s)!==n&&(a-=w(r,"top","bottom")+s)),!B(t)){var h=Math.round(u+o)-e,c=Math.round(a+s)-n;Math.abs(h)!==1&&(u-=h),Math.abs(c)!==1&&(a-=c)}return l(i.left,i.top,u,a)}var V=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof f(t).SVGGraphicsElement}:function(t){return t instanceof f(t).SVGElement&&typeof t.getBBox=="function"}}();function B(t){return t===f(t).document.documentElement}function N(t){return m?V(t)?H(t):I(t):M}function $(t){var e=t.x,n=t.y,r=t.width,i=t.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(o.prototype);return x(s,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),s}function l(t,e,n,r){return{x:t,y:e,width:n,height:r}}var k=function(){function t(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=l(0,0,0,0),this.target=e}return t.prototype.isActive=function(){var e=N(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},t}(),K=function(){function t(e,n){var r=$(n);x(this,{target:e,contentRect:r})}return t}(),Y=function(){function t(e,n,r){if(this.activeObservations_=[],this.observations_=new R,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=r}return t.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof f(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new k(e)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof f(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)&&(n.delete(e),n.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&e.activeObservations_.push(n)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new K(r.target,r.broadcastRect())});this.callback_.call(e,n,e),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),A=typeof WeakMap<"u"?new WeakMap:new R,T=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=W.getInstance(),r=new Y(e,n,this);A.set(this,r)}return t}();["observe","unobserve","disconnect"].forEach(function(t){T.prototype[t]=function(){var e;return(e=A.get(this))[t].apply(e,arguments)}});var J=function(){return typeof d.ResizeObserver<"u"?d.ResizeObserver:T}();const Q=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),X=D(Q);var _,O;function Z(){if(O)return _;O=1;var t=E(),e=S();return _={throttle:t,debounce:e},_}export{X as a,Z as b,S as r};
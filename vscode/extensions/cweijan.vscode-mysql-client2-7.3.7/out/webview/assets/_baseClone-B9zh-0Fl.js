import{k as F,g as C,b as _,e as N,f as l,n as u,h as E,j as v,l as K,m as R}from"./index-BnH3xz_z.js";import{W,X as S,Y as B,Z as Y,$ as X,a0 as Z}from"./focus-trap-0JUCTGWq.js";import{c as y,k as j,g as q,a as x,b as H,d as J,e as Q,i as V}from"./_initCloneObject-BPdR5qB5.js";function z(e,r){for(var n=-1,s=e==null?0:e.length;++n<s&&r(e[n],n,e)!==!1;);return e}function k(e,r){return e&&y(r,F(r),e)}function ee(e,r){return e&&y(r,j(r),e)}function re(e,r){return y(e,C(e),r)}var te=Object.getOwnPropertySymbols,L=te?function(e){for(var r=[];e;)W(r,C(e)),e=q(e);return r}:_;function ne(e,r){return y(e,L(e),r)}function ae(e){return N(e,j,L)}var oe=Object.prototype,se=oe.hasOwnProperty;function ce(e){var r=e.length,n=new e.constructor(r);return r&&typeof e[0]=="string"&&se.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function ie(e,r){var n=r?x(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var be=/\w*$/;function fe(e){var r=new e.constructor(e.source,be.exec(e));return r.lastIndex=e.lastIndex,r}var O=S?S.prototype:void 0,w=O?O.valueOf:void 0;function ge(e){return w?Object(w.call(e)):{}}var ue="[object Boolean]",ye="[object Date]",Te="[object Map]",le="[object Number]",je="[object RegExp]",pe="[object Set]",Ae="[object String]",de="[object Symbol]",me="[object ArrayBuffer]",$e="[object DataView]",Se="[object Float32Array]",Oe="[object Float64Array]",we="[object Int8Array]",Ie="[object Int16Array]",he="[object Int32Array]",Fe="[object Uint8Array]",Ce="[object Uint8ClampedArray]",Ee="[object Uint16Array]",Be="[object Uint32Array]";function xe(e,r,n){var s=e.constructor;switch(r){case me:return x(e);case ue:case ye:return new s(+e);case $e:return ie(e,n);case Se:case Oe:case we:case Ie:case he:case Fe:case Ce:case Ee:case Be:return H(e,n);case Te:return new s;case le:case Ae:return new s(e);case je:return fe(e);case pe:return new s;case de:return ge(e)}}var Le="[object Map]";function Me(e){return B(e)&&l(e)==Le}var I=u&&u.isMap,Ue=I?E(I):Me,Pe="[object Set]";function De(e){return B(e)&&l(e)==Pe}var h=u&&u.isSet,Ge=h?E(h):De,_e=1,Ne=2,ve=4,M="[object Arguments]",Ke="[object Array]",Re="[object Boolean]",We="[object Date]",Ye="[object Error]",U="[object Function]",Xe="[object GeneratorFunction]",Ze="[object Map]",qe="[object Number]",P="[object Object]",He="[object RegExp]",Je="[object Set]",Qe="[object String]",Ve="[object Symbol]",ze="[object WeakMap]",ke="[object ArrayBuffer]",er="[object DataView]",rr="[object Float32Array]",tr="[object Float64Array]",nr="[object Int8Array]",ar="[object Int16Array]",or="[object Int32Array]",sr="[object Uint8Array]",cr="[object Uint8ClampedArray]",ir="[object Uint16Array]",br="[object Uint32Array]",t={};t[M]=t[Ke]=t[ke]=t[er]=t[Re]=t[We]=t[rr]=t[tr]=t[nr]=t[ar]=t[or]=t[Ze]=t[qe]=t[P]=t[He]=t[Je]=t[Qe]=t[Ve]=t[sr]=t[cr]=t[ir]=t[br]=!0;t[Ye]=t[U]=t[ze]=!1;function T(e,r,n,s,p,c){var a,f=r&_e,g=r&Ne,D=r&ve;if(a!==void 0)return a;if(!Y(e))return e;var A=X(e);if(A){if(a=ce(e),!f)return J(e,a)}else{var b=l(e),d=b==U||b==Xe;if(v(e))return Q(e,f);if(b==P||b==M||d&&!p){if(a=g||d?{}:V(e),!f)return g?ne(e,ee(a,e)):re(e,k(a,e))}else{if(!t[b])return p?e:{};a=xe(e,b,f)}}c||(c=new K);var m=c.get(e);if(m)return m;c.set(e,a),Ge(e)?e.forEach(function(o){a.add(T(o,r,n,o,e,c))}):Ue(e)&&e.forEach(function(o,i){a.set(i,T(o,r,n,i,e,c))});var G=D?g?ae:R:g?j:F,$=A?void 0:G(e);return z($||e,function(o,i){$&&(i=o,o=e[i]),Z(a,i,T(o,r,n,i,e,c))}),a}export{T as b};
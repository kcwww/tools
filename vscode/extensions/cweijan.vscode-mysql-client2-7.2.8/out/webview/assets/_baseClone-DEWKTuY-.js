import{l as F,m as C,n as _,o as N,p as K,g as j,q as u,r as E,a as R,t as v,u as q}from"./index-CFJCZjdX.js";import{S as $,K as B,L as W,i as Y,M as H}from"./index-Dpstq9UH.js";import{c as T,k as p,g as J,a as L,b as Q,d as V,e as X,i as Z}from"./_initCloneObject-DbrZpPYH.js";function z(r,e){for(var n=-1,o=r==null?0:r.length;++n<o&&e(r[n],n,r)!==!1;);return r}function k(r,e){return r&&T(e,F(e),r)}function rr(r,e){return r&&T(e,p(e),r)}function er(r,e){return T(r,C(r),e)}var tr=Object.getOwnPropertySymbols,M=tr?function(r){for(var e=[];r;)N(e,C(r)),r=J(r);return e}:_;function nr(r,e){return T(r,M(r),e)}function ar(r){return K(r,p,M)}var or=Object.prototype,sr=or.hasOwnProperty;function cr(r){var e=r.length,n=new r.constructor(e);return e&&typeof r[0]=="string"&&sr.call(r,"index")&&(n.index=r.index,n.input=r.input),n}function ir(r,e){var n=e?L(r.buffer):r.buffer;return new r.constructor(n,r.byteOffset,r.byteLength)}var fr=/\w*$/;function gr(r){var e=new r.constructor(r.source,fr.exec(r));return e.lastIndex=r.lastIndex,e}var O=$?$.prototype:void 0,w=O?O.valueOf:void 0;function br(r){return w?Object(w.call(r)):{}}var yr="[object Boolean]",ur="[object Date]",Tr="[object Map]",lr="[object Number]",jr="[object RegExp]",pr="[object Set]",Ar="[object String]",dr="[object Symbol]",mr="[object ArrayBuffer]",Sr="[object DataView]",$r="[object Float32Array]",Or="[object Float64Array]",wr="[object Int8Array]",Ir="[object Int16Array]",hr="[object Int32Array]",Fr="[object Uint8Array]",Cr="[object Uint8ClampedArray]",Er="[object Uint16Array]",Br="[object Uint32Array]";function Lr(r,e,n){var o=r.constructor;switch(e){case mr:return L(r);case yr:case ur:return new o(+r);case Sr:return ir(r,n);case $r:case Or:case wr:case Ir:case hr:case Fr:case Cr:case Er:case Br:return Q(r,n);case Tr:return new o;case lr:case Ar:return new o(r);case jr:return gr(r);case pr:return new o;case dr:return br(r)}}var Mr="[object Map]";function xr(r){return B(r)&&j(r)==Mr}var I=u&&u.isMap,Ur=I?E(I):xr,Pr="[object Set]";function Dr(r){return B(r)&&j(r)==Pr}var h=u&&u.isSet,Gr=h?E(h):Dr,_r=1,Nr=2,Kr=4,x="[object Arguments]",Rr="[object Array]",vr="[object Boolean]",qr="[object Date]",Wr="[object Error]",U="[object Function]",Yr="[object GeneratorFunction]",Hr="[object Map]",Jr="[object Number]",P="[object Object]",Qr="[object RegExp]",Vr="[object Set]",Xr="[object String]",Zr="[object Symbol]",zr="[object WeakMap]",kr="[object ArrayBuffer]",re="[object DataView]",ee="[object Float32Array]",te="[object Float64Array]",ne="[object Int8Array]",ae="[object Int16Array]",oe="[object Int32Array]",se="[object Uint8Array]",ce="[object Uint8ClampedArray]",ie="[object Uint16Array]",fe="[object Uint32Array]",t={};t[x]=t[Rr]=t[kr]=t[re]=t[vr]=t[qr]=t[ee]=t[te]=t[ne]=t[ae]=t[oe]=t[Hr]=t[Jr]=t[P]=t[Qr]=t[Vr]=t[Xr]=t[Zr]=t[se]=t[ce]=t[ie]=t[fe]=!0;t[Wr]=t[U]=t[zr]=!1;function l(r,e,n,o,g,s){var a,b=e&_r,y=e&Nr,D=e&Kr;if(n&&(a=g?n(r,o,g,s):n(r)),a!==void 0)return a;if(!W(r))return r;var A=Y(r);if(A){if(a=cr(r),!b)return V(r,a)}else{var f=j(r),d=f==U||f==Yr;if(R(r))return X(r,b);if(f==P||f==x||d&&!g){if(a=y||d?{}:Z(r),!b)return y?nr(r,rr(a,r)):er(r,k(a,r))}else{if(!t[f])return g?r:{};a=Lr(r,f,b)}}s||(s=new v);var m=s.get(r);if(m)return m;s.set(r,a),Gr(r)?r.forEach(function(c){a.add(l(c,e,n,c,r,s))}):Ur(r)&&r.forEach(function(c,i){a.set(i,l(c,e,n,i,r,s))});var G=D?y?ar:q:y?p:F,S=A?void 0:G(r);return z(S||r,function(c,i){S&&(i=c,c=r[i]),H(a,i,l(c,e,n,i,r,s))}),a}export{l as b};
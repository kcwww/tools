import{t as h}from"./viewUtil-96a12b22.js";class g{static distinct(r,e,o){const n={};return r.filter(t=>{let s=t;return e instanceof Function?s=e(t):e!=null&&(s=t[e]),n[s]?(o==null||o(n[s],t),!1):(s!=null&&(n[s]=t),!0)})}static arrayToObj(r,e,o){return Array.isArray(r)?r.reduce((n,t)=>{const s=e instanceof Function?e(t):t[e];return n[s]=o?t[o]:t,n},{}):r}static chunkArray(r,e=1e3){const o=[];let n=[];for(let t=0;t<r.length;t++)n.push(r[t]),(t+1)%e==0&&(o.push(n),n=[]);return n.length>0&&o.push(n),o}static clone(r){return r.map(e=>({...e}))}static cloneWithProps(r,...e){return!r||!Array.isArray(r)?r:r.map(o=>{const n={};for(const t of e)n[t]=o[t];return n})}static sum(r,...e){return r.reduce((n,t)=>{let s=0;for(const i of e)s+=o(t,i);return n+s},0);function o(n,t){let s=n;if(s&&t)for(const i of t.split("."))s=s==null?void 0:s[i];return h(s)}}static grouping(r,e){const{keyGenerator:o,groupGenerator:n,keepSingle:t,valueGenerator:s}=e,i=[],p={};for(const u of r){const l=o(u);let c=u;if(s&&(c=s(u)),l){const a=p[l];if(a)Array.isArray(a)?a.push(c):a.addChild(c);else{const f=n(l,u);Array.isArray(f)?f.push(c):f.addChild(c),i.push(f),p[l]=f}}else i.push(u)}if(t)return i;for(let u=0;u<i.length;u++){const c=i[u].children;c&&c.length==1&&i.splice(u,1,c[0])}return i}static isMultipleResult(r){if(!Array.isArray(r))return!1;for(const e of r)if(Array.isArray(e)&&e.length>0)return!0}}export{g as A};

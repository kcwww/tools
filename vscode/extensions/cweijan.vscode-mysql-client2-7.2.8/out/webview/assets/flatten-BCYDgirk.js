import{c as l,o as r}from"./index-CFJCZjdX.js";import{S as b,i as h}from"./index-Dpstq9UH.js";var e=b?b.isConcatSpreadable:void 0;function S(n){return h(n)||l(n)||!!(e&&n&&n[e])}function m(n,f,i,t,o){var a=-1,g=n.length;for(i||(i=S),o||(o=[]);++a<g;){var s=n[a];f>0&&i(s)?f>1?m(s,f-1,i,t,o):r(o,s):t||(o[o.length]=s)}return o}function F(n){var f=n==null?0:n.length;return f?m(n,1):[]}export{m as b,F as f};
function S(){}function C(t,n){for(const e in n)t[e]=n[e];return t}function L(t){return t()}function K(){return Object.create(null)}function M(t){t.forEach(L)}function Q(t){return typeof t=="function"}function R(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function U(t){return Object.keys(t).length===0}function P(t,...n){if(t==null){for(const i of n)i(void 0);return S}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function V(t,n,e){t.$$.on_destroy.push(P(n,e))}function X(t,n,e,i){if(t){const l=w(t,n,e,i);return t[0](l)}}function w(t,n,e,i){return t[1]&&i?C(e.ctx.slice(),t[1](i(n))):e.ctx}function Y(t,n,e,i){if(t[2]&&i){const l=t[2](i(e));if(n.dirty===void 0)return l;if(typeof l=="object"){const s=[],r=Math.max(n.dirty.length,l.length);for(let u=0;u<r;u+=1)s[u]=n.dirty[u]|l[u];return s}return n.dirty|l}return n.dirty}function Z(t,n,e,i,l,s){if(l){const r=w(n,e,i,s);t.p(r,l)}}function $(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function tt(t,n,e){return t.set(e),n}let m=!1;function nt(){m=!0}function et(){m=!1}function B(t,n,e,i){for(;t<n;){const l=t+(n-t>>1);e(l)<=i?t=l+1:n=l}return t}function D(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<n.length;a++){const o=n[a];o.claim_order!==void 0&&c.push(o)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let l=0;for(let c=0;c<n.length;c++){const a=n[c].claim_order,o=(l>0&&n[e[l]].claim_order<=a?l+1:B(1,l,j=>n[e[j]].claim_order,a))-1;i[c]=e[o]+1;const k=o+1;e[k]=c,l=Math.max(k,l)}const s=[],r=[];let u=n.length-1;for(let c=e[l]+1;c!=0;c=i[c-1]){for(s.push(n[c-1]);u>=c;u--)r.push(n[u]);u--}for(;u>=0;u--)r.push(n[u]);s.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<s.length&&r[c].claim_order>=s[a].claim_order;)a++;const o=a<s.length?s[a]:null;t.insertBefore(r[c],o)}}function O(t,n){if(m){for(D(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function it(t,n,e){m&&!e?O(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function rt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function T(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function ct(){return x(" ")}function ut(){return x("")}function st(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function at(t){return function(n){return n.preventDefault(),t.call(this,n)}}function ot(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function ft(t){return t.dataset.svelteH}function _t(t){return t===""?null:+t}function dt(t){return Array.from(t.childNodes)}function q(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function N(t,n,e,i,l=!1){q(t);const s=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const u=t[r];if(n(u)){const c=e(u);return c===void 0?t.splice(r,1):t[r]=c,l||(t.claim_info.last_index=r),u}}for(let r=t.claim_info.last_index-1;r>=0;r--){const u=t[r];if(n(u)){const c=e(u);return c===void 0?t.splice(r,1):t[r]=c,l?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,u}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function H(t,n,e,i){return N(t,l=>l.nodeName===n,l=>{const s=[];for(let r=0;r<l.attributes.length;r++){const u=l.attributes[r];e[u.name]||s.push(u.name)}s.forEach(r=>l.removeAttribute(r))},()=>i(n))}function ht(t,n,e){return H(t,n,e,T)}function z(t,n){return N(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>x(n),!0)}function mt(t){return z(t," ")}function pt(t,n){n=""+n,t.data!==n&&(t.data=n)}function bt(t,n){t.value=n??""}function yt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function gt(t,n,e){t.classList.toggle(n,!!e)}function F(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function xt(t,n){return new t(n)}let h;function p(t){h=t}function v(){if(!h)throw new Error("Function called outside component initialization");return h}function vt(t){v().$$.on_mount.push(t)}function kt(t){v().$$.after_update.push(t)}function Et(){const t=v();return(n,e,{cancelable:i=!1}={})=>{const l=t.$$.callbacks[n];if(l){const s=F(n,e,{cancelable:i});return l.slice().forEach(r=>{r.call(t,s)}),!s.defaultPrevented}return!0}}const d=[],E=[];let _=[];const y=[],A=Promise.resolve();let g=!1;function I(){g||(g=!0,A.then(G))}function wt(){return I(),A}function W(t){_.push(t)}function Nt(t){y.push(t)}const b=new Set;let f=0;function G(){if(f!==0)return;const t=h;do{try{for(;f<d.length;){const n=d[f];f++,p(n),J(n.$$)}}catch(n){throw d.length=0,f=0,n}for(p(null),d.length=0,f=0;E.length;)E.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];b.has(e)||(b.add(e),e())}_.length=0}while(d.length);for(;y.length;)y.pop()();g=!1,b.clear(),p(t)}function J(t){if(t.fragment!==null){t.update(),M(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(W)}}function At(t){const n=[],e=[];_.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),_=n}export{st as A,M as B,at as C,gt as D,tt as E,rt as F,ft as G,Nt as H,Et as I,bt as J,_t as K,P as L,Q as M,K as N,G as O,U as P,W as Q,At as R,h as S,p as T,L as U,d as V,I as W,nt as X,et as Y,ct as a,kt as b,mt as c,lt as d,ut as e,T as f,ht as g,dt as h,it as i,ot as j,yt as k,x as l,z as m,pt as n,vt as o,E as p,xt as q,X as r,R as s,wt as t,Z as u,$ as v,Y as w,O as x,S as y,V as z};

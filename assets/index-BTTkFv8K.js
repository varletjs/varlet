import{X as f,ap as x,aj as g,ai as T}from"./index-XHkyQ4jX.js";import{c as $}from"./components-YVs3wueX.js";const y={locks:{},zIndex:2e3,enableRipple:!0};f(y);const R=f(y),{n:_}=$("ripple"),v=250;function A(e){const{zIndex:t,position:r}=g(e);e.style.overflow="hidden",e.style.overflowX="hidden",e.style.overflowY="hidden",r==="static"&&(e.style.position="relative"),t==="auto"&&(e.style.zIndex="1")}function m(e){return"touches"in e}function I(e,t){const{top:r,left:p}=T(e),{clientWidth:n,clientHeight:o}=e,s=Math.sqrt(n**2+o**2)/2,a=s*2,i=m(t)?t.touches[0].clientX-p:n/2,c=m(t)?t.touches[0].clientY-r:o/2,k=(n-s*2)/2,E=(o-s*2)/2,b=i-s,L=c-s;return{x:b,y:L,centerX:k,centerY:E,size:a}}function u(e){const t=this._ripple;if(t.removeRipple(),t.disabled||t.tasker||!R.enableRipple)return;const r=()=>{t.tasker=null;const{x:p,y:n,centerX:o,centerY:s,size:a}=I(this,e),i=document.createElement("div");i.classList.add(_()),i.style.opacity="0",i.style.transform=`translate(${p}px, ${n}px) scale3d(.3, .3, .3)`,i.style.width=`${a}px`,i.style.height=`${a}px`,t.color&&(i.style.backgroundColor=t.color),i.dataset.createdAt=String(performance.now()),A(this),this.appendChild(i),window.setTimeout(()=>{i.style.transform=`translate(${o}px, ${s}px) scale3d(1, 1, 1)`,i.style.opacity=".25"},20)};t.tasker=window.setTimeout(r,30)}function l(){const e=this._ripple,t=()=>{const r=this.querySelectorAll(`.${_()}`);if(!r.length)return;const p=r[r.length-1],n=v-performance.now()+Number(p.dataset.createdAt);window.setTimeout(()=>{p.style.opacity="0",window.setTimeout(()=>{var o;return(o=p.parentNode)==null?void 0:o.removeChild(p)},v)},n)};e.tasker?window.setTimeout(t,30):t()}function w(){if(!x()||!R.enableRipple)return;const e=this._ripple;e.tasker&&window.clearTimeout(e.tasker),e.tasker=null}let d=!1;function N(e){d||!(e.key===" "||e.key==="Enter")||(u.call(this,e),d=!0)}function h(){d&&(l.call(this),d=!1)}function X(e,t){e._ripple={tasker:null,...t.value??{},removeRipple:l.bind(e)},e.addEventListener("touchstart",u,{passive:!0}),e.addEventListener("touchmove",w,{passive:!0}),e.addEventListener("dragstart",l,{passive:!0}),e.addEventListener("keydown",N),e.addEventListener("keyup",h),e.addEventListener("blur",h),document.addEventListener("touchend",e._ripple.removeRipple,{passive:!0}),document.addEventListener("touchcancel",e._ripple.removeRipple,{passive:!0}),document.addEventListener("dragend",e._ripple.removeRipple,{passive:!0})}function z(e){e.removeEventListener("touchstart",u),e.removeEventListener("touchmove",w),e.removeEventListener("dragstart",l),!(!e._ripple||!e._ripple.removeRipple)&&(document.removeEventListener("touchend",e._ripple.removeRipple),document.removeEventListener("touchcancel",e._ripple.removeRipple),document.removeEventListener("dragend",e._ripple.removeRipple))}function S(e,t){var n,o,s,a,i,c;const r={color:(n=t.value)==null?void 0:n.color,disabled:(o=t.value)==null?void 0:o.disabled};(r.color!==((s=e._ripple)==null?void 0:s.color)||r.disabled!==((a=e._ripple)==null?void 0:a.disabled))&&(e._ripple={tasker:r.disabled?null:(i=e._ripple)==null?void 0:i.tasker,removeRipple:(c=e._ripple)==null?void 0:c.removeRipple,...r})}const K={mounted:X,unmounted:z,updated:S,install(e){e.directive("ripple",this)}};export{K as R};
document.documentElement.classList.remove("no-js");document.documentElement.classList.add("js");console.log(document.URL);document.querySelectorAll("a").forEach(e=>{e.href===document.URL&&e.classList.add("underline")});const z="astro:before-preparation",J="astro:after-preparation",Q="astro:before-swap",Z="astro:after-swap",ee=e=>document.dispatchEvent(new Event(e));class $ extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;constructor(t,o,n,r,a,l,h,f,s){super(t,o),this.from=n,this.to=r,this.direction=a,this.navigationType=l,this.sourceElement=h,this.info=f,this.newDocument=s,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0}})}}class te extends ${formData;loader;constructor(t,o,n,r,a,l,h,f,s){super(z,{cancelable:!0},t,o,n,r,a,l,h),this.formData=f,this.loader=s.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class ne extends ${direction;viewTransition;swap;constructor(t,o,n){super(Q,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument),this.direction=t.direction,this.viewTransition=o,this.swap=n.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function oe(e,t,o,n,r,a,l,h){const f=new te(e,t,o,n,r,a,window.document,l,h);return document.dispatchEvent(f)&&(await f.loader(),f.defaultPrevented||(ee(J),f.navigationType!=="traverse"&&R({scrollX,scrollY}))),f}async function re(e,t,o){const n=new ne(e,t,o);return document.dispatchEvent(n),n.swap(),n}const R=e=>{history.state&&(history.scrollRestoration="manual",history.replaceState({...history.state,...e},""))},x=!!document.startViewTransition,k=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),L=(e,t)=>e.origin===t.origin&&e.pathname===t.pathname&&e.search===t.search;let A,g,T=!1,q;const _=e=>document.dispatchEvent(new Event(e)),C=()=>_("astro:page-load"),ie=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},y="data-astro-transition-persist",U="data-astro-transition",V="data-astro-transition-fallback";let I,b=0;history.state?(b=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):k()&&(history.replaceState({index:b,scrollX,scrollY},""),history.scrollRestoration="manual");const se=(e,t)=>{let o=!1,n=!1;return(...r)=>{if(o){n=!0;return}e(...r),o=!0,setTimeout(()=>{n&&(n=!1,e(...r)),o=!1},t)}};async function ae(e,t){try{const o=await fetch(e,t),n=o.headers.get("content-type")?.replace(/;.*$/,"");return n!=="text/html"&&n!=="application/xhtml+xml"?null:{html:await o.text(),redirected:o.redirected?o.url:void 0,mediaType:n}}catch{return null}}function W(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function ce(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const n of t.attributes){if(n.name==="src"){const r=new Promise(a=>{o.onload=a});e=e.then(()=>r)}o.setAttribute(n.name,n.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const X=(e,t,o,n)=>{const r=L(t,e);let a=!1;if(e.href!==location.href&&!n)if(o.history==="replace"){const l=history.state;history.replaceState({...o.state,index:l.index,scrollX:l.scrollX,scrollY:l.scrollY},"",e.href)}else history.pushState({...o.state,index:++b,scrollX:0,scrollY:0},"",e.href);A=e,r||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),n?scrollTo(n.scrollX,n.scrollY):(e.hash?(history.scrollRestoration="auto",location.href=e.href):a||scrollTo({left:0,top:0,behavior:"instant"}),history.scrollRestoration="manual")};function le(e){const t=[];for(const o of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${y}="${o.getAttribute(y)}"], link[rel=stylesheet][href="${o.getAttribute("href")}"]`)){const n=document.createElement("link");n.setAttribute("rel","preload"),n.setAttribute("as","style"),n.setAttribute("href",o.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(a=>n.addEventListener(a,r)),document.head.append(n)}))}return t}async function O(e,t,o,n){const r=(i,d)=>{const m=i.getAttribute(y),w=m&&d.head.querySelector(`[${y}="${m}"]`);if(w)return w;if(i.matches("link[rel=stylesheet]")){const p=i.getAttribute("href");return d.head.querySelector(`link[rel=stylesheet][href="${p}"]`)}return null},a=()=>{const i=document.activeElement;if(i?.closest(`[${y}]`)){if(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement){const d=i.selectionStart,m=i.selectionEnd;return{activeElement:i,start:d,end:m}}return{activeElement:i}}else return{activeElement:null}},l=({activeElement:i,start:d,end:m})=>{i&&(i.focus(),(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement)&&(i.selectionStart=d,i.selectionEnd=m))},h=i=>{const d=document.documentElement,m=[...d.attributes].filter(({name:c})=>(d.removeAttribute(c),c.startsWith("data-astro-")));[...i.newDocument.documentElement.attributes,...m].forEach(({name:c,value:u})=>d.setAttribute(c,u));for(const c of document.scripts)for(const u of i.newDocument.scripts)if(!c.src&&c.textContent===u.textContent||c.src&&c.type===u.type&&c.src===u.src){u.dataset.astroExec="";break}for(const c of Array.from(document.head.children)){const u=r(c,i.newDocument);u?u.remove():c.remove()}document.head.append(...i.newDocument.head.children);const w=document.body,p=a();document.body.replaceWith(i.newDocument.body);for(const c of w.querySelectorAll(`[${y}]`)){const u=c.getAttribute(y),S=document.querySelector(`[${y}="${u}"]`);S&&S.replaceWith(c)}l(p)};async function f(i){function d(c){const u=c.effect;return!u||!(u instanceof KeyframeEffect)||!u.target?!1:window.getComputedStyle(u.target,u.pseudoElement).animationIterationCount==="infinite"}const m=document.getAnimations();document.documentElement.setAttribute(V,i);const p=document.getAnimations().filter(c=>!m.includes(c)&&!d(c));return Promise.all(p.map(c=>c.finished))}if(!T)document.documentElement.setAttribute(U,e.direction),n==="animate"&&await f("old");else throw new DOMException("Transition was skipped");const s=await re(e,g,h);X(s.to,s.from,t,o),_(Z),n==="animate"&&!T&&f("new").then(()=>q())}async function Y(e,t,o,n,r){const a=r?"traverse":n.history==="replace"?"replace":"push";if(L(t,o)&&!n.formData){a!=="traverse"&&R({scrollX,scrollY}),X(o,t,n,r);return}const l=await oe(t,o,e,a,n.sourceElement,n.info,n.formData,f);if(l.defaultPrevented){location.href=o.href;return}function h(s){return s.to.hash===""||!L(s.from,s.to)||s.sourceElement instanceof HTMLFormElement}async function f(s){if(h(s)){const i=s.to.href,d={};s.formData&&(d.method="POST",d.body=s.formData);const m=await ae(i,d);if(m===null){s.preventDefault();return}if(m.redirected&&(s.to=new URL(m.redirected)),I??=new DOMParser,s.newDocument=I.parseFromString(m.html,m.mediaType),s.newDocument.querySelectorAll("noscript").forEach(p=>p.remove()),!s.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!s.formData){s.preventDefault();return}const w=le(s.newDocument);w.length&&await Promise.all(w)}else{s.newDocument=document;return}}if(T=!1,x)g=document.startViewTransition(async()=>await O(l,n,r));else{const s=(async()=>{await new Promise(i=>setTimeout(i)),await O(l,n,r,W())})();g={updateCallbackDone:s,ready:s,finished:new Promise(i=>q=i),skipTransition:()=>{T=!0}}}g.ready.then(async()=>{await ce(),C(),ie()}),g.finished.then(()=>{document.documentElement.removeAttribute(U),document.documentElement.removeAttribute(V)}),await g.ready}async function M(e,t){if(!k()){location.href=e;return}await Y("forward",A,new URL(e,location.href),t??{})}function ue(e){if(!k()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,o=t.index,n=o>b?"forward":"back";b=o,Y(n,A,new URL(location.href),{},t)}const H=()=>{R({scrollX,scrollY})};{(x||W()!=="none")&&(A=new URL(location.href),addEventListener("popstate",ue),addEventListener("load",C),"onscrollend"in window?addEventListener("scrollend",H):addEventListener("scroll",se(H,350),{passive:!0}));for(const e of document.scripts)e.dataset.astroExec=""}const B=new Set,v=new WeakSet;let D,j,N=!1;function fe(e){N||(N=!0,D??=e?.prefetchAll??!1,j??=e?.defaultStrategy??"hover",de(),me(),he())}function de(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{E(t.target,"tap")&&P(t.target.href,{with:"fetch",ignoreSlowConnection:!0})},{passive:!0})}function me(){let e;document.body.addEventListener("focusin",n=>{E(n.target,"hover")&&t(n)},{passive:!0}),document.body.addEventListener("focusout",o,{passive:!0}),G(()=>{for(const n of document.getElementsByTagName("a"))v.has(n)||E(n,"hover")&&(v.add(n),n.addEventListener("mouseenter",t,{passive:!0}),n.addEventListener("mouseleave",o,{passive:!0}))});function t(n){const r=n.target.href;e&&clearTimeout(e),e=setTimeout(()=>{P(r,{with:"fetch"})},80)}function o(){e&&(clearTimeout(e),e=0)}}function he(){let e;G(()=>{for(const t of document.getElementsByTagName("a"))v.has(t)||E(t,"viewport")&&(v.add(t),e??=we(),e.observe(t))})}function we(){const e=new WeakMap;return new IntersectionObserver((t,o)=>{for(const n of t){const r=n.target,a=e.get(r);n.isIntersecting?(a&&clearTimeout(a),e.set(r,setTimeout(()=>{o.unobserve(r),e.delete(r),P(r.href,{with:"link"})},300))):a&&(clearTimeout(a),e.delete(r))}})}function P(e,t){const o=t?.ignoreSlowConnection??!1;if(!ye(e,o))return;if(B.add(e),(t?.with??"link")==="link"){const r=document.createElement("link");r.rel="prefetch",r.setAttribute("href",e),document.head.append(r)}else fetch(e).catch(r=>{console.log(`[astro] Failed to prefetch ${e}`),console.error(r)})}function ye(e,t){if(!navigator.onLine||!t&&K())return!1;try{const o=new URL(e,location.href);return location.origin===o.origin&&location.pathname!==o.pathname&&!B.has(e)}catch{}return!1}function E(e,t){if(e?.tagName!=="A")return!1;const o=e.dataset.astroPrefetch;return o==="false"?!1:t==="tap"&&(o!=null||D)&&K()?!0:o==null&&D||o===""?t===j:o===t}function K(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/(2|3)g/.test(e.effectiveType)}return!1}function G(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function pe(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function F(e){return e.dataset.astroReload!==void 0}(x||pe()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const o=t instanceof HTMLElement?t.target:t.target.baseVal,n=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(n,location.href).origin;F(t)||t.hasAttribute("download")||!t.href||o&&o!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),M(n,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.querySelector('[name="astro-view-transitions-forms"]')&&document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||F(t))return;const o=t,n=e.submitter,r=new FormData(o);let a=n?.getAttribute("formaction")??o.action??location.pathname;const l=n?.getAttribute("formmethod")??o.method,h={sourceElement:n??o};if(l==="get"){const f=new URLSearchParams(r),s=new URL(a);s.search=f.toString(),a=s.toString()}else h.formData=r;e.preventDefault(),M(a,h)}),fe({prefetchAll:!0}));

import{Portal as e}from"@reach/portal";import n,{useRef as r,useDebugValue as t,useEffect as o,useLayoutEffect as i,useState as a,useCallback as c,useMemo as u,useImperativeHandle as s,forwardRef as l}from"react";import{useMachine as d}from"@xstate/react";import{useSpring as f,to as v,animated as m,config as p}from"@react-spring/web";import{useDrag as y,rubberbandIfOutOfBounds as h}from"@use-gesture/react";import{createFocusTrap as g}from"focus-trap";import{disableBodyScroll as S,enableBodyScroll as E}from"body-scroll-lock";import{ResizeObserver as P}from"@juggle/resize-observer";import{createMachine as b,assign as R}from"xstate";function x(){return x=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},x.apply(this,arguments)}function O(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n.indexOf(r=i[t])>=0||(o[r]=e[r]);return o}var C="undefined"!=typeof window?i:o;function N(e,n,r){return n=(n=+n)==n?n:0,r=(r=+r)==r?r:0,(e=+e)==e&&(e=(e=e<=r?e:r)>=n?e:n),e}function w(e){var n=Math.round(e);return Number.isNaN(n)?null:n}var H={box:"border-box"};function D(e,n){var r=n.label,o=n.enabled,i=n.resizeSourceRef,u=a(0),s=u[0],l=u[1];t(r+": "+s);var d=c(function(e){l(e[0].borderBoxSize[0].blockSize),i.current="element"},[i]);return C(function(){if(e.current&&o){var n=new P(d);return n.observe(e.current,H),function(){n.disconnect()}}},[e,d,o]),o?s:0}function k(e){return void 0===e&&(e=1e3),new Promise(function(n){return setTimeout(n,e)})}var z={DRAG:{target:"#overlay.dragging",actions:"onOpenEnd"}},j={RESIZE:{target:"#overlay.resizing",actions:"onOpenEnd"}},A=b({id:"overlay",initial:"closed",context:{initialState:"CLOSED",snapSource:void 0},states:{closed:{on:{OPEN:"opening",CLOSE:void 0}},opening:{initial:"start",states:{start:{invoke:{src:"onOpenStart",onDone:"transition"}},transition:{always:[{target:"immediately",cond:"initiallyOpen"},{target:"smoothly",cond:"initiallyClosed"}]},immediately:{initial:"open",states:{open:{invoke:{src:"openImmediately",onDone:"activating"}},activating:{invoke:{src:"activate",onDone:"#overlay.opening.end"},on:x({},z,j)}}},smoothly:{initial:"visuallyHidden",states:{visuallyHidden:{invoke:{src:"renderVisuallyHidden",onDone:"activating"}},activating:{invoke:{src:"activate",onDone:"open"}},open:{invoke:{src:"openSmoothly",onDone:"#overlay.opening.end"},on:x({},z,j)}}},end:{invoke:{src:"onOpenEnd",onDone:"done"},on:{CLOSE:"#overlay.closing",DRAG:"#overlay.dragging"}},done:{type:"final"}},on:x({},{CLOSE:{target:"#overlay.closing",actions:"onOpenCancel"}}),onDone:"open"},open:{on:{DRAG:"#overlay.dragging",SNAP:"snapping",RESIZE:"resizing"}},dragging:{on:{SNAP:"snapping"}},snapping:{initial:"start",states:{start:{invoke:{src:"onSnapStart",onDone:"snappingSmoothly"},entry:[R({y:function(e,n){return n.payload.y},velocity:function(e,n){if("SNAP"===n.type)return n.payload.velocity},snapSource:function(e,n){if("SNAP"===n.type)return n.payload.source||"custom"}})]},snappingSmoothly:{invoke:{src:"snapSmoothly",onDone:"end"}},end:{invoke:{src:"onSnapEnd",onDone:"done"},on:{RESIZE:"#overlay.resizing",SNAP:"#overlay.snapping",CLOSE:"#overlay.closing",DRAG:"#overlay.dragging"}},done:{type:"final"}},on:{SNAP:{target:"snapping",actions:"onSnapEnd"},RESIZE:{target:"#overlay.resizing",actions:"onSnapCancel"},DRAG:{target:"#overlay.dragging",actions:"onSnapCancel"},CLOSE:{target:"#overlay.closing",actions:"onSnapCancel"}},onDone:"open"},resizing:{initial:"start",states:{start:{invoke:{src:"onResizeStart",onDone:"resizingSmoothly"}},resizingSmoothly:{invoke:{src:"resizeSmoothly",onDone:"end"}},end:{invoke:{src:"onResizeEnd",onDone:"done"},on:{SNAP:"#overlay.snapping",CLOSE:"#overlay.closing",DRAG:"#overlay.dragging"}},done:{type:"final"}},on:{RESIZE:{target:"resizing",actions:"onResizeEnd"},SNAP:{target:"snapping",actions:"onResizeCancel"},DRAG:{target:"#overlay.dragging",actions:"onResizeCancel"},CLOSE:{target:"#overlay.closing",actions:"onResizeCancel"}},onDone:"open"},closing:{initial:"start",states:{start:{invoke:{src:"onCloseStart",onDone:"deactivating"},on:{OPEN:{target:"#overlay.open",actions:"onCloseCancel"}}},deactivating:{invoke:{src:"deactivate",onDone:"closingSmoothly"}},closingSmoothly:{invoke:{src:"closeSmoothly",onDone:"end"}},end:{invoke:{src:"onCloseEnd",onDone:"done"},on:{OPEN:{target:"#overlay.opening",actions:"onCloseCancel"}}},done:{type:"final"}},on:{CLOSE:void 0,OPEN:{target:"#overlay.opening",actions:"onCloseCancel"}},onDone:"closed"}},on:{CLOSE:"closing"}},{actions:{onOpenCancel:function(e,n){},onSnapCancel:function(e,n){},onResizeCancel:function(e,n){},onCloseCancel:function(e,n){},onOpenEnd:function(e,n){},onSnapEnd:function(e,n){},onRezizeEnd:function(e,n){}},services:{onSnapStart:function(){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},onOpenStart:function(){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},onCloseStart:function(){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},onResizeStart:function(){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},onSnapEnd:function(){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},onOpenEnd:function(){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},onCloseEnd:function(){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},onResizeEnd:function(){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},renderVisuallyHidden:function(e,n){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},activate:function(e,n){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},deactivate:function(e,n){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},openSmoothly:function(e,n){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},openImmediately:function(e,n){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},snapSmoothly:function(e,n){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},resizeSmoothly:function(e,n){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}},closeSmoothly:function(e,n){try{return Promise.resolve(k()).then(function(){})}catch(e){return Promise.reject(e)}}},guards:{initiallyClosed:function(e){return"CLOSED"===e.initialState},initiallyOpen:function(e){return"OPEN"===e.initialState}}}),L=["children","sibling","className","footer","header","open","initialState","lastSnapRef","initialFocusRef","onDismiss","maxHeight","defaultSnap","snapPoints","blocking","scrollLocking","style","onSpringStart","onSpringCancel","onSpringEnd","reserveScrollBarGap","expandOnContentDrag"],T=["velocity"],M=["onRest","config"],I=p.default,G=I.tension,F=I.friction,Z=n.forwardRef(function(e,i){var l=e.children,p=e.sibling,P=e.className,b=e.footer,R=e.header,H=e.open,k=e.initialState,z=e.lastSnapRef,j=e.initialFocusRef,I=e.onDismiss,Z=e.maxHeight,K=e.defaultSnap,J=void 0===K?q:K,Q=e.snapPoints,U=void 0===Q?V:Q,W=e.blocking,X=void 0===W||W,Y=e.scrollLocking,$=void 0===Y||Y,_=e.style,ee=e.onSpringStart,ne=e.onSpringCancel,re=e.onSpringEnd,te=e.reserveScrollBarGap,oe=void 0===te?X:te,ie=e.expandOnContentDrag,ae=void 0!==ie&&ie,ce=O(e,L),ue=function(){var e=a(!1),n=e[0],r=e[1],t=a({}),i=t[0],u=t[1],s=c(function(e){return u(function(n){var r;return x({},n,((r={})[e]=!1,r))}),function(){u(function(n){var r;return x({},n,((r={})[e]=!0,r))})}},[]);return o(function(){var e=Object.values(i);0!==e.length&&e.every(Boolean)&&r(!0)},[i]),{ready:n,registerReady:s}}(),se=ue.ready,le=ue.registerReady,de=r(!1),fe=r(ee),ve=r(ne),me=r(re);o(function(){fe.current=ee,ve.current=ne,me.current=re},[ne,ee,re]);var pe,ye,he=f(function(){return{y:0,ready:0,maxHeight:0,minSnap:0,maxSnap:0}}),ge=he[0],Se=he[1],Ee=r(null),Pe=r(null),be=r(null),Re=r(null),xe=r(null),Oe=r(null),Ce=r(0),Ne=r(),we=r(!1),He=(pe=u(function(){return"undefined"!=typeof window?window.matchMedia("(prefers-reduced-motion: reduce)"):null},[]),ye=r(null==pe?void 0:pe.matches),t(ye.current?"reduce":"no-preference"),o(function(){var e=function(e){ye.current=e.matches};return null==pe||pe.addListener(e),function(){return null==pe?void 0:pe.removeListener(e)}},[pe]),ye),De=function(e){var n=e.targetRef,i=e.enabled,a=e.reserveScrollBarGap,c=r({activate:function(){throw new TypeError("Tried to activate scroll lock too early")},deactivate:function(){}});return t(i?"Enabled":"Disabled"),o(function(){if(!i)return c.current.deactivate(),void(c.current={activate:function(){},deactivate:function(){}});var e=n.current,r=!1;c.current={activate:function(){r||(r=!0,S(e,{allowTouchMove:function(e){return e.closest("[data-body-scroll-lock-ignore]")},reserveScrollBarGap:a}))},deactivate:function(){r&&(r=!1,E(e))}}},[i,n,a]),c}({targetRef:Pe,enabled:se&&$,reserveScrollBarGap:oe}),ke=function(e){var n=e.targetRef,i=e.enabled,a=r({activate:function(){throw new TypeError("Tried to activate aria hider too early")},deactivate:function(){}});return t(i?"Enabled":"Disabled"),o(function(){if(!i)return a.current.deactivate(),void(a.current={activate:function(){},deactivate:function(){}});var e=n.current,r=!1,t=[],o=[];a.current={activate:function(){if(!r){r=!0;var n=e.parentNode;document.querySelectorAll("body > *").forEach(function(e){if(e!==n){var r=e.getAttribute("aria-hidden");null!==r&&"false"!==r||(t.push(r),o.push(e),e.setAttribute("aria-hidden","true"))}})}},deactivate:function(){r&&(r=!1,o.forEach(function(e,n){var r=t[n];null===r?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",r)}),t=[],o=[])}}},[n,i]),a}({targetRef:Ee,enabled:se&&X}),ze=function(e){var n=e.targetRef,i=e.fallbackRef,a=e.initialFocusRef,c=e.enabled,u=r({activate:function(){throw new TypeError("Tried to activate focus trap too early")},deactivate:function(){}});return t(c?"Enabled":"Disabled"),o(function(){if(!c)return u.current.deactivate(),void(u.current={activate:function(){},deactivate:function(){}});var e=i.current,r=g(n.current,{onActivate:void 0,initialFocus:a?function(){return(null==a?void 0:a.current)||e}:void 0,fallbackFocus:e,escapeDeactivates:!1,clickOutsideDeactivates:!1}),t=!1;u.current={activate:function(){try{return t?Promise.resolve():(t=!0,Promise.resolve(r.activate()).then(function(){return Promise.resolve(new Promise(function(e){return setTimeout(function(){return e(void 0)},0)})).then(function(){})}))}catch(e){return Promise.reject(e)}},deactivate:function(){t&&(t=!1,r.deactivate())}}},[c,i,a,n]),u}({targetRef:Ee,fallbackRef:Oe,initialFocusRef:j||void 0,enabled:se&&X&&!1!==j}),je=function(e){var n=e.getSnapPoints,i=e.heightRef,c=e.lastSnapRef,s=e.ready,l=function(e){var n=e.contentRef,i=e.controlledMaxHeight,c=e.footerEnabled,s=e.footerRef,l=e.headerEnabled,d=e.headerRef,f=e.registerReady,v=e.resizeSourceRef,m=u(function(){return f("contentHeight")},[f]),p=function(e,n,i){var c=u(function(){return n("maxHeight")},[n]),s=a(function(){return w(e)||"undefined"!=typeof window?window.innerHeight:0}),l=s[0],d=s[1],f=l>0,v=r(0);return t(e?"controlled":"auto"),o(function(){f&&c()},[f,c]),C(function(){if(e)return d(w(e)),void(i.current="maxheightprop");var n=function(){v.current||(v.current=requestAnimationFrame(function(){d(window.innerHeight),i.current="window",v.current=0}))};return window.addEventListener("resize",n),d(window.innerHeight),i.current="window",c(),function(){window.removeEventListener("resize",n),cancelAnimationFrame(v.current)}},[e,c,i]),l}(i,f,v),y=D(d,{label:"headerHeight",enabled:l,resizeSourceRef:v}),h=D(n,{label:"contentHeight",enabled:!0,resizeSourceRef:v}),g=D(s,{label:"footerHeight",enabled:c,resizeSourceRef:v}),S=Math.min(p-y-g,h)+y+g;t("minHeight: "+S);var E=h>0;return o(function(){E&&m()},[E,m]),{maxHeight:p,minHeight:S,headerHeight:y,footerHeight:g}}({contentRef:e.contentRef,controlledMaxHeight:e.controlledMaxHeight,footerEnabled:e.footerEnabled,footerRef:e.footerRef,headerEnabled:e.headerEnabled,headerRef:e.headerRef,registerReady:e.registerReady,resizeSourceRef:e.resizeSourceRef}),d=l.maxHeight,f=l.minHeight,v=l.headerHeight,m=l.footerHeight,p=function(e,n){var r=[].concat(e).map(w).reduce(function(e,r){return e.add(N(r,0,n)),e},new Set),t=Array.from(r),o=Math.min.apply(Math,t);if(Number.isNaN(o))throw new TypeError("minSnap is NaN");var i=Math.max.apply(Math,t);if(Number.isNaN(i))throw new TypeError("maxSnap is NaN");return{snapPoints:t,minSnap:o,maxSnap:i}}(s?n({height:i.current,footerHeight:m,headerHeight:v,minHeight:f,maxHeight:d}):[0],d),y=p.snapPoints,h=p.minSnap,g=p.maxSnap;return t("minSnap: "+h+", maxSnap:"+g),{minSnap:h,maxSnap:g,findSnap:function(e){var n=w("function"==typeof e?e({footerHeight:m,headerHeight:v,height:i.current,minHeight:f,maxHeight:d,snapPoints:y,lastSnap:c.current}):e);return y.reduce(function(e,r){return Math.abs(r-n)<Math.abs(e-n)?r:e},h)},maxHeight:d}}({contentRef:be,controlledMaxHeight:Z,footerEnabled:!!b,footerRef:xe,getSnapPoints:U,headerEnabled:!1!==R,headerRef:Re,heightRef:Ce,lastSnapRef:z,ready:se,registerReady:le,resizeSourceRef:Ne}),Ae=je.minSnap,Le=je.maxSnap,Te=je.maxHeight,Me=je.findSnap,Ie=r(Te),Ge=r(Ae),Fe=r(Le),Ze=r(Me),Be=r(0);C(function(){Ie.current=Te,Fe.current=Le,Ge.current=Ae,Ze.current=Me,Be.current=Me(J)},[Me,J,Te,Le,Ae]);var qe=c(function(e){var n=e.onRest,r=e.config,t=void 0===r?{}:r,o=t.velocity,i=void 0===o?1:o,a=O(t,T),c=O(e,M);return new Promise(function(e){return Se(x({},c,{config:x({velocity:i},a,{mass:1,tension:G,friction:Math.max(F,F+(F-F*i))}),onRest:function(){var r=[].slice.call(arguments);e(r),null==n||n.apply(void 0,r)}}))})},[Se]),Ve=d(A,{devTools:!1,actions:{onOpenCancel:c(function(){return null==ve.current?void 0:ve.current({type:"OPEN"})},[]),onSnapCancel:c(function(e){return null==ve.current?void 0:ve.current({type:"SNAP",source:e.snapSource})},[]),onCloseCancel:c(function(){return null==ve.current?void 0:ve.current({type:"CLOSE"})},[]),onResizeCancel:c(function(){return null==ve.current?void 0:ve.current({type:"RESIZE",source:Ne.current})},[]),onOpenEnd:c(function(){return null==me.current?void 0:me.current({type:"OPEN"})},[]),onSnapEnd:c(function(e,n){return null==me.current?void 0:me.current({type:"SNAP",source:e.snapSource})},[]),onResizeEnd:c(function(){return null==me.current?void 0:me.current({type:"RESIZE",source:Ne.current})},[])},context:{initialState:k},services:{onSnapStart:c(function(e,n){try{return Promise.resolve(null==fe.current?void 0:fe.current({type:"SNAP",source:n.payload.source||"custom"}))}catch(e){return Promise.reject(e)}},[]),onOpenStart:c(function(){try{return Promise.resolve(null==fe.current?void 0:fe.current({type:"OPEN"}))}catch(e){return Promise.reject(e)}},[]),onCloseStart:c(function(){try{return Promise.resolve(null==fe.current?void 0:fe.current({type:"CLOSE"}))}catch(e){return Promise.reject(e)}},[]),onResizeStart:c(function(){try{return Promise.resolve(null==fe.current?void 0:fe.current({type:"RESIZE",source:Ne.current}))}catch(e){return Promise.reject(e)}},[]),onSnapEnd:c(function(e,n){try{return Promise.resolve(null==me.current?void 0:me.current({type:"SNAP",source:e.snapSource}))}catch(e){return Promise.reject(e)}},[]),onOpenEnd:c(function(){try{return Promise.resolve(null==me.current?void 0:me.current({type:"OPEN"}))}catch(e){return Promise.reject(e)}},[]),onCloseEnd:c(function(){try{return Promise.resolve(null==me.current?void 0:me.current({type:"CLOSE"}))}catch(e){return Promise.reject(e)}},[]),onResizeEnd:c(function(){try{return Promise.resolve(null==me.current?void 0:me.current({type:"RESIZE",source:Ne.current}))}catch(e){return Promise.reject(e)}},[]),renderVisuallyHidden:c(function(e,n){try{return Promise.resolve(qe({y:Be.current,ready:0,maxHeight:Ie.current,maxSnap:Fe.current,minSnap:Be.current,immediate:!0})).then(function(){})}catch(e){return Promise.reject(e)}},[qe]),activate:c(function(e,n){try{return de.current=!0,Promise.resolve(Promise.all([De.current.activate(),ze.current.activate(),ke.current.activate()])).then(function(){})}catch(e){return Promise.reject(e)}},[ke,ze,De]),deactivate:c(function(){try{return De.current.deactivate(),ze.current.deactivate(),ke.current.deactivate(),de.current=!1,Promise.resolve()}catch(e){return Promise.reject(e)}},[ke,ze,De]),openImmediately:c(function(){try{return Ce.current=Be.current,Promise.resolve(qe({y:Be.current,ready:1,maxHeight:Ie.current,maxSnap:Fe.current,minSnap:Be.current,immediate:!0})).then(function(){})}catch(e){return Promise.reject(e)}},[qe]),openSmoothly:c(function(){try{return Promise.resolve(qe({y:0,ready:1,maxHeight:Ie.current,maxSnap:Fe.current,minSnap:Be.current,immediate:!0})).then(function(){return Ce.current=Be.current,Promise.resolve(qe({y:Be.current,ready:1,maxHeight:Ie.current,maxSnap:Fe.current,minSnap:Be.current,immediate:He.current})).then(function(){})})}catch(e){return Promise.reject(e)}},[qe,He]),snapSmoothly:c(function(e,n){try{var r=Ze.current(e.y);return Ce.current=r,z.current=r,Promise.resolve(qe({y:r,ready:1,maxHeight:Ie.current,maxSnap:Fe.current,minSnap:Ge.current,immediate:He.current,config:{velocity:e.velocity}})).then(function(){})}catch(e){return Promise.reject(e)}},[qe,z,He]),resizeSmoothly:c(function(){try{var e=Ze.current(Ce.current);return Ce.current=e,z.current=e,Promise.resolve(qe({y:e,ready:1,maxHeight:Ie.current,maxSnap:Fe.current,minSnap:Ge.current,immediate:"element"!==Ne.current||He.current})).then(function(){})}catch(e){return Promise.reject(e)}},[qe,z,He]),closeSmoothly:c(function(e,n){try{return qe({minSnap:Ce.current,immediate:!0}),Ce.current=0,Promise.resolve(qe({y:0,maxHeight:Ie.current,maxSnap:Fe.current,immediate:He.current})).then(function(){return Promise.resolve(qe({ready:0,immediate:!0})).then(function(){})})}catch(e){return Promise.reject(e)}},[qe,He])}}),Ke=Ve[0],Je=Ve[1];o(function(){se&&Je(H?"OPEN":"CLOSE")},[H,Je,se]),C(function(){(Te||Le||Ae)&&Je("RESIZE")},[Te,Le,Ae,Je]),o(function(){return function(){De.current.deactivate(),ze.current.deactivate(),ke.current.deactivate()}},[ke,ze,De]),s(i,function(){return{snapTo:function(e,n){var r=void 0===n?{}:n,t=r.velocity,o=void 0===t?1:t,i=r.source,a=void 0===i?"custom":i;Je("SNAP",{payload:{y:Ze.current(e),velocity:o,source:a}})},get height(){return Ce.current}}},[Je]),o(function(){var e=Pe.current,n=function(e){we.current&&e.preventDefault()},r=function(n){e.scrollTop<0&&(requestAnimationFrame(function(){e.style.overflow="hidden",e.scrollTop=0,e.style.removeProperty("overflow")}),n.preventDefault())};return ae&&(e.addEventListener("scroll",n),e.addEventListener("touchmove",n),e.addEventListener("touchstart",r)),function(){e.removeEventListener("scroll",n),e.removeEventListener("touchmove",n),e.removeEventListener("touchstart",r)}},[ae,Pe]);var Qe=y(function(e){var n=e.args,r=(void 0===n?[]:n)[0],t=void 0===r?{}:r,o=t.closeOnTap,i=void 0!==o&&o,a=t.isContentDragging,c=void 0!==a&&a,u=e.cancel,s=e.direction[1],l=e.down,d=e.first,f=e.last,v=e.memo,m=void 0===v?ge.y.get():v,p=e.tap,y=e.velocity,g=-1*e.movement[1];if(!de.current)return u(),m;if(I&&i&&p)return u(),setTimeout(function(){return I()},0),m;if(p)return m;var S=m+g,E=g*y,P=Math.max(Ge.current,Math.min(Fe.current,S+2*E));if(!l&&I&&s>0&&S+E<Ge.current/2)return u(),I(),m;var b=l?I||Ge.current!==Fe.current?h(S,I?0:Ge.current,Fe.current,.55):S<Ge.current?h(S,Ge.current,2*Fe.current,.55):h(S,Ge.current/2,Fe.current,.55):P;return ae&&c?(b>=Fe.current&&(b=Fe.current),m===Fe.current&&Pe.current.scrollTop>0&&(b=Fe.current),we.current=b<Fe.current):we.current=!1,d&&Je("DRAG"),f?(Je("SNAP",{payload:{y:b,velocity:y>.05?y:1,source:"dragging"}}),m):(Se({y:b,ready:1,maxHeight:Ie.current,maxSnap:Fe.current,minSnap:Ge.current,immediate:!0,config:{velocity:y}}),m)},{filterTaps:!0});if(Number.isNaN(Fe.current))throw new TypeError("maxSnapRef is NaN!!");if(Number.isNaN(Ge.current))throw new TypeError("minSnapRef is NaN!!");var Ue=function(e){var n,r=e.spring,t=v([r.y,r.maxHeight],function(e,n){return Math.round(N(n-e,0,16))+"px"}),o=v([r.y,r.minSnap,r.maxSnap],function(e,n,r){return N(e,n,r)+"px"}),i=v([r.y,r.minSnap,r.maxSnap],function(e,n,r){return e<n?n-e+"px":e>r?r-e+"px":"0px"}),a=v([r.y,r.maxSnap],function(e,n){return e>=n?Math.ceil(e-n):0}),c=v([r.y,r.minSnap],function(e,n){if(!n)return 0;var r=Math.max(n/2-45,0);return N((e-r)*(1/(Math.min(n/2+45,n)-r)+0),0,1)}),u=v([r.y,r.minSnap],function(e,n){return n?N(e/n,0,1):0});return(n={})["--rsbs-content-opacity"]=c,n["--rsbs-backdrop-opacity"]=u,n["--rsbs-antigap-scale-y"]=a,n["--rsbs-overlay-translate-y"]=i,n["--rsbs-overlay-rounded"]=t,n["--rsbs-overlay-h"]=o,n}({spring:ge});/*#__PURE__*/return n.createElement(m.div,x({},ce,{"data-rsbs-root":!0,"data-rsbs-state":B.find(Ke.matches),"data-rsbs-is-blocking":X,"data-rsbs-is-dismissable":!!I,"data-rsbs-has-header":!!R,"data-rsbs-has-footer":!!b,className:P,ref:Ee,style:x({},Ue,_,{opacity:ge.ready})}),p,X&&/*#__PURE__*/n.createElement("div",x({key:"backdrop","data-rsbs-backdrop":!0},Qe({closeOnTap:!0}))),/*#__PURE__*/n.createElement("div",{key:"overlay","aria-modal":"true",role:"dialog","data-rsbs-overlay":!0,tabIndex:-1,ref:Oe,onKeyDown:function(e){"Escape"===e.key&&(e.stopPropagation(),I&&I())}},!1!==R&&/*#__PURE__*/n.createElement("div",x({key:"header","data-rsbs-header":!0,ref:Re},Qe()),R),/*#__PURE__*/n.createElement("div",x({key:"scroll","data-rsbs-scroll":!0,ref:Pe},ae?Qe({isContentDragging:!0}):{}),/*#__PURE__*/n.createElement("div",{"data-rsbs-content":!0,ref:be},l)),b&&/*#__PURE__*/n.createElement("div",x({key:"footer",ref:xe,"data-rsbs-footer":!0},Qe()),b)))}),B=["closed","opening","open","closing","dragging","snapping","resizing"];function q(e){var n=e.lastSnap;return null!=n?n:Math.min.apply(Math,e.snapPoints)}function V(e){return e.minHeight}var K=["onSpringStart","onSpringEnd","skipInitialTransition"],J=l(function(t,o){var i=t.onSpringStart,u=t.onSpringEnd,s=t.skipInitialTransition,l=O(t,K),d=a(!1),f=d[0],v=d[1],m=r(),p=r(null),y=r(s&&l.open?"OPEN":"CLOSED");C(function(){if(l.open)return cancelAnimationFrame(m.current),v(!0),function(){y.current="CLOSED"}},[l.open]);var h=c(function(e){return Promise.resolve(null==i?void 0:i(e)).then(function(){"OPEN"===e.type&&cancelAnimationFrame(m.current)})},[i]),g=c(function(e){return Promise.resolve(null==u?void 0:u(e)).then(function(){"CLOSE"===e.type&&(m.current=requestAnimationFrame(function(){return v(!1)}))})},[u]);return f?/*#__PURE__*/n.createElement(e,{"data-rsbs-portal":!0},/*#__PURE__*/n.createElement(Z,x({},l,{lastSnapRef:p,ref:o,initialState:y.current,onSpringStart:h,onSpringEnd:g}))):null});export{J as BottomSheet};
//# sourceMappingURL=index.es.js.map
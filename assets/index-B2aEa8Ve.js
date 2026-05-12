(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Uf={exports:{}},mo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function Cx(){if(Fg)return mo;Fg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return mo.Fragment=e,mo.jsx=i,mo.jsxs=i,mo}var Hg;function wx(){return Hg||(Hg=1,Uf.exports=Cx()),Uf.exports}var Mt=wx(),Lf={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function Dx(){if(Gg)return ae;Gg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,C={};function y(U,$,vt){this.props=U,this.context=$,this.refs=C,this.updater=vt||M}y.prototype.isReactComponent={},y.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=y.prototype;function B(U,$,vt){this.props=U,this.context=$,this.refs=C,this.updater=vt||M}var N=B.prototype=new _;N.constructor=B,b(N,y.prototype),N.isPureReactComponent=!0;var w=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function I(U,$,vt,St,Q,pt){return vt=pt.ref,{$$typeof:o,type:U,key:$,ref:vt!==void 0?vt:null,props:pt}}function Z(U,$){return I(U.type,$,void 0,void 0,void 0,U.props)}function D(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function R(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(vt){return $[vt]})}var z=/\/+/g;function et(U,$){return typeof U=="object"&&U!==null&&U.key!=null?R(""+U.key):$.toString(36)}function tt(){}function ut(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(tt,tt):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function lt(U,$,vt,St,Q){var pt=typeof U;(pt==="undefined"||pt==="boolean")&&(U=null);var xt=!1;if(U===null)xt=!0;else switch(pt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(U.$$typeof){case o:case e:xt=!0;break;case g:return xt=U._init,lt(xt(U._payload),$,vt,St,Q)}}if(xt)return Q=Q(U),xt=St===""?"."+et(U,0):St,w(Q)?(vt="",xt!=null&&(vt=xt.replace(z,"$&/")+"/"),lt(Q,$,vt,"",function(se){return se})):Q!=null&&(D(Q)&&(Q=Z(Q,vt+(Q.key==null||U&&U.key===Q.key?"":(""+Q.key).replace(z,"$&/")+"/")+xt)),$.push(Q)),1;xt=0;var At=St===""?".":St+":";if(w(U))for(var Ut=0;Ut<U.length;Ut++)St=U[Ut],pt=At+et(St,Ut),xt+=lt(St,$,vt,pt,Q);else if(Ut=x(U),typeof Ut=="function")for(U=Ut.call(U),Ut=0;!(St=U.next()).done;)St=St.value,pt=At+et(St,Ut++),xt+=lt(St,$,vt,pt,Q);else if(pt==="object"){if(typeof U.then=="function")return lt(ut(U),$,vt,St,Q);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return xt}function O(U,$,vt){if(U==null)return U;var St=[],Q=0;return lt(U,St,"","",function(pt){return $.call(vt,pt,Q++)}),St}function Y(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(vt){(U._status===0||U._status===-1)&&(U._status=1,U._result=vt)},function(vt){(U._status===0||U._status===-1)&&(U._status=2,U._result=vt)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var W=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function yt(){}return ae.Children={map:O,forEach:function(U,$,vt){O(U,function(){$.apply(this,arguments)},vt)},count:function(U){var $=0;return O(U,function(){$++}),$},toArray:function(U){return O(U,function($){return $})||[]},only:function(U){if(!D(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ae.Component=y,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=B,ae.StrictMode=r,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ae.__COMPILER_RUNTIME={__proto__:null,c:function(U){return F.H.useMemoCache(U)}},ae.cache=function(U){return function(){return U.apply(null,arguments)}},ae.cloneElement=function(U,$,vt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var St=b({},U.props),Q=U.key,pt=void 0;if($!=null)for(xt in $.ref!==void 0&&(pt=void 0),$.key!==void 0&&(Q=""+$.key),$)!G.call($,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&$.ref===void 0||(St[xt]=$[xt]);var xt=arguments.length-2;if(xt===1)St.children=vt;else if(1<xt){for(var At=Array(xt),Ut=0;Ut<xt;Ut++)At[Ut]=arguments[Ut+2];St.children=At}return I(U.type,Q,void 0,void 0,pt,St)},ae.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},ae.createElement=function(U,$,vt){var St,Q={},pt=null;if($!=null)for(St in $.key!==void 0&&(pt=""+$.key),$)G.call($,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(Q[St]=$[St]);var xt=arguments.length-2;if(xt===1)Q.children=vt;else if(1<xt){for(var At=Array(xt),Ut=0;Ut<xt;Ut++)At[Ut]=arguments[Ut+2];Q.children=At}if(U&&U.defaultProps)for(St in xt=U.defaultProps,xt)Q[St]===void 0&&(Q[St]=xt[St]);return I(U,pt,void 0,void 0,null,Q)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(U){return{$$typeof:d,render:U}},ae.isValidElement=D,ae.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:Y}},ae.memo=function(U,$){return{$$typeof:p,type:U,compare:$===void 0?null:$}},ae.startTransition=function(U){var $=F.T,vt={};F.T=vt;try{var St=U(),Q=F.S;Q!==null&&Q(vt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(yt,W)}catch(pt){W(pt)}finally{F.T=$}},ae.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ae.use=function(U){return F.H.use(U)},ae.useActionState=function(U,$,vt){return F.H.useActionState(U,$,vt)},ae.useCallback=function(U,$){return F.H.useCallback(U,$)},ae.useContext=function(U){return F.H.useContext(U)},ae.useDebugValue=function(){},ae.useDeferredValue=function(U,$){return F.H.useDeferredValue(U,$)},ae.useEffect=function(U,$,vt){var St=F.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(U,$)},ae.useId=function(){return F.H.useId()},ae.useImperativeHandle=function(U,$,vt){return F.H.useImperativeHandle(U,$,vt)},ae.useInsertionEffect=function(U,$){return F.H.useInsertionEffect(U,$)},ae.useLayoutEffect=function(U,$){return F.H.useLayoutEffect(U,$)},ae.useMemo=function(U,$){return F.H.useMemo(U,$)},ae.useOptimistic=function(U,$){return F.H.useOptimistic(U,$)},ae.useReducer=function(U,$,vt){return F.H.useReducer(U,$,vt)},ae.useRef=function(U){return F.H.useRef(U)},ae.useState=function(U){return F.H.useState(U)},ae.useSyncExternalStore=function(U,$,vt){return F.H.useSyncExternalStore(U,$,vt)},ae.useTransition=function(){return F.H.useTransition()},ae.version="19.1.0",ae}var Vg;function id(){return Vg||(Vg=1,Lf.exports=Dx()),Lf.exports}var Xe=id(),Nf={exports:{}},go={},Of={exports:{}},Pf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function Ux(){return kg||(kg=1,function(o){function e(O,Y){var W=O.length;O.push(Y);t:for(;0<W;){var yt=W-1>>>1,U=O[yt];if(0<l(U,Y))O[yt]=Y,O[W]=U,W=yt;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var Y=O[0],W=O.pop();if(W!==Y){O[0]=W;t:for(var yt=0,U=O.length,$=U>>>1;yt<$;){var vt=2*(yt+1)-1,St=O[vt],Q=vt+1,pt=O[Q];if(0>l(St,W))Q<U&&0>l(pt,St)?(O[yt]=pt,O[Q]=W,yt=Q):(O[yt]=St,O[vt]=W,yt=vt);else if(Q<U&&0>l(pt,W))O[yt]=pt,O[Q]=W,yt=Q;else break t}}return Y}function l(O,Y){var W=O.sortIndex-Y.sortIndex;return W!==0?W:O.id-Y.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,x=3,M=!1,b=!1,C=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function w(O){for(var Y=i(p);Y!==null;){if(Y.callback===null)r(p);else if(Y.startTime<=O)r(p),Y.sortIndex=Y.expirationTime,e(m,Y);else break;Y=i(p)}}function F(O){if(C=!1,w(O),!b)if(i(m)!==null)b=!0,G||(G=!0,et());else{var Y=i(p);Y!==null&&lt(F,Y.startTime-O)}}var G=!1,I=-1,Z=5,D=-1;function R(){return y?!0:!(o.unstable_now()-D<Z)}function z(){if(y=!1,G){var O=o.unstable_now();D=O;var Y=!0;try{t:{b=!1,C&&(C=!1,B(I),I=-1),M=!0;var W=x;try{e:{for(w(O),v=i(m);v!==null&&!(v.expirationTime>O&&R());){var yt=v.callback;if(typeof yt=="function"){v.callback=null,x=v.priorityLevel;var U=yt(v.expirationTime<=O);if(O=o.unstable_now(),typeof U=="function"){v.callback=U,w(O),Y=!0;break e}v===i(m)&&r(m),w(O)}else r(m);v=i(m)}if(v!==null)Y=!0;else{var $=i(p);$!==null&&lt(F,$.startTime-O),Y=!1}}break t}finally{v=null,x=W,M=!1}Y=void 0}}finally{Y?et():G=!1}}}var et;if(typeof N=="function")et=function(){N(z)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,ut=tt.port2;tt.port1.onmessage=z,et=function(){ut.postMessage(null)}}else et=function(){_(z,0)};function lt(O,Y){I=_(function(){O(o.unstable_now())},Y)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(O){switch(x){case 1:case 2:case 3:var Y=3;break;default:Y=x}var W=x;x=Y;try{return O()}finally{x=W}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(O,Y){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var W=x;x=O;try{return Y()}finally{x=W}},o.unstable_scheduleCallback=function(O,Y,W){var yt=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?yt+W:yt):W=yt,O){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=W+U,O={id:g++,callback:Y,priorityLevel:O,startTime:W,expirationTime:U,sortIndex:-1},W>yt?(O.sortIndex=W,e(p,O),i(m)===null&&O===i(p)&&(C?(B(I),I=-1):C=!0,lt(F,W-yt))):(O.sortIndex=U,e(m,O),b||M||(b=!0,G||(G=!0,et()))),O},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(O){var Y=x;return function(){var W=x;x=Y;try{return O.apply(this,arguments)}finally{x=W}}}}(Pf)),Pf}var Xg;function Lx(){return Xg||(Xg=1,Of.exports=Ux()),Of.exports}var Bf={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function Nx(){if(Wg)return An;Wg=1;var o=id();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},An.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},An.requestFormReset=function(m){r.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},An.useFormStatus=function(){return h.H.useHostTransitionStatus()},An.version="19.1.0",An}var qg;function Ox(){if(qg)return Bf.exports;qg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Bf.exports=Nx(),Bf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function Px(){if(Yg)return go;Yg=1;var o=Lx(),e=id(),i=Ox();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),t;if(f===s)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,E=c.child;E;){if(E===a){S=!0,a=c,s=f;break}if(E===s){S=!0,s=c,a=f;break}E=E.sibling}if(!S){for(E=f.child;E;){if(E===a){S=!0,a=f,s=c;break}if(E===s){S=!0,s=f,a=c;break}E=E.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),N=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function et(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var tt=Symbol.for("react.client.reference");function ut(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===tt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case y:return"Profiler";case C:return"StrictMode";case F:return"Suspense";case G:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case N:return(t.displayName||"Context")+".Provider";case B:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:ut(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return ut(t(n))}catch{}}return null}var lt=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},yt=[],U=-1;function $(t){return{current:t}}function vt(t){0>U||(t.current=yt[U],yt[U]=null,U--)}function St(t,n){U++,yt[U]=t.current,t.current=n}var Q=$(null),pt=$(null),xt=$(null),At=$(null);function Ut(t,n){switch(St(xt,n),St(pt,t),St(Q,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?dg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=dg(n),t=pg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}vt(Q),St(Q,t)}function se(){vt(Q),vt(pt),vt(xt)}function Zt(t){t.memoizedState!==null&&St(At,t);var n=Q.current,a=pg(n,t.type);n!==a&&(St(pt,t),St(Q,a))}function Fe(t){pt.current===t&&(vt(Q),vt(pt)),At.current===t&&(vt(At),co._currentValue=W)}var Pe=Object.prototype.hasOwnProperty,ue=o.unstable_scheduleCallback,H=o.unstable_cancelCallback,Un=o.unstable_shouldYield,me=o.unstable_requestPaint,ne=o.unstable_now,Xt=o.unstable_getCurrentPriorityLevel,we=o.unstable_ImmediatePriority,Gt=o.unstable_UserBlockingPriority,L=o.unstable_NormalPriority,T=o.unstable_LowPriority,nt=o.unstable_IdlePriority,mt=o.log,Et=o.unstable_setDisableYieldValue,ht=null,Ot=null;function Rt(t){if(typeof mt=="function"&&Et(t),Ot&&typeof Ot.setStrictMode=="function")try{Ot.setStrictMode(ht,t)}catch{}}var Ht=Math.clz32?Math.clz32:It,Jt=Math.log,bt=Math.LN2;function It(t){return t>>>=0,t===0?32:31-(Jt(t)/bt|0)|0}var Yt=256,Kt=4194304;function Pt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function le(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?c=Pt(s):(S&=E,S!==0?c=Pt(S):a||(a=E&~t,a!==0&&(c=Pt(a))))):(E=s&~f,E!==0?c=Pt(E):S!==0?c=Pt(S):a||(a=s&~t,a!==0&&(c=Pt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function ee(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function De(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var t=Yt;return Yt<<=1,(Yt&4194048)===0&&(Yt=256),t}function Lt(){var t=Kt;return Kt<<=1,(Kt&62914560)===0&&(Kt=4194304),t}function ct(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function gt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Bt(t,n,a,s,c,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,P=t.expirationTimes,J=t.hiddenUpdates;for(a=S&~a;0<a;){var ft=31-Ht(a),_t=1<<ft;E[ft]=0,P[ft]=-1;var it=J[ft];if(it!==null)for(J[ft]=null,ft=0;ft<it.length;ft++){var at=it[ft];at!==null&&(at.lane&=-536870913)}a&=~_t}s!==0&&Nt(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function Nt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Ht(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function ie(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Ht(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function He(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function tn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ye(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:Ng(t.type))}function Gn(t,n){var a=Y.p;try{return Y.p=t,n()}finally{Y.p=a}}var hn=Math.random().toString(36).slice(2),sn="__reactFiber$"+hn,vn="__reactProps$"+hn,Ln="__reactContainer$"+hn,Va="__reactEvents$"+hn,Oo="__reactListeners$"+hn,Po="__reactHandles$"+hn,ka="__reactResources$"+hn,ra="__reactMarker$"+hn;function sa(t){delete t[sn],delete t[vn],delete t[Va],delete t[Oo],delete t[Po]}function Ai(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ln]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=vg(t);t!==null;){if(a=t[sn])return a;t=vg(t)}return n}t=a,a=t.parentNode}return null}function Ri(t){if(t=t[sn]||t[Ln]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Xa(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function oa(t){var n=t[ka];return n||(n=t[ka]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(t){t[ra]=!0}var Bo=new Set,zo={};function Ci(t,n){A(t,n),A(t+"Capture",n)}function A(t,n){for(zo[t]=n,t=0;t<n.length;t++)Bo.add(n[t])}var q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},st={};function j(t){return Pe.call(st,t)?!0:Pe.call(rt,t)?!1:q.test(t)?st[t]=!0:(rt[t]=!0,!1)}function Tt(t,n,a){if(j(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ct(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function wt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var zt,$t;function Wt(t){if(zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);zt=n&&n[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zt+t+$t}var kt=!1;function he(t,n){if(!t||kt)return"";kt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(at){var it=at}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(at){it=at}t.call(_t.prototype)}}else{try{throw Error()}catch(at){it=at}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(at){if(at&&it&&typeof at.stack=="string")return[at.stack,it.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],E=f[1];if(S&&E){var P=S.split(`
`),J=E.split(`
`);for(c=s=0;s<P.length&&!P[s].includes("DetermineComponentFrameRoot");)s++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(s===P.length||c===J.length)for(s=P.length-1,c=J.length-1;1<=s&&0<=c&&P[s]!==J[c];)c--;for(;1<=s&&0<=c;s--,c--)if(P[s]!==J[c]){if(s!==1||c!==1)do if(s--,c--,0>c||P[s]!==J[c]){var ft=`
`+P[s].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=s&&0<=c);break}}}finally{kt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Wt(a):""}function Me(t){switch(t.tag){case 26:case 27:case 5:return Wt(t.type);case 16:return Wt("Lazy");case 13:return Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return he(t.type,!1);case 11:return he(t.type.render,!1);case 1:return he(t.type,!0);case 31:return Wt("Activity");default:return""}}function We(t){try{var n="";do n+=Me(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ge(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _e(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qt(t){var n=_e(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ye(t){t._valueTracker||(t._valueTracker=qt(t))}function Se(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=_e(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function En(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var la=/[\n"\\]/g;function Ge(t){return t.replace(la,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function wi(t,n,a,s,c,f,S,E){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ge(n)):t.value!==""+ge(n)&&(t.value=""+ge(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?Tn(t,S,ge(n)):a!=null?Tn(t,S,ge(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ge(E):t.removeAttribute("name")}function Be(t,n,a,s,c,f,S,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ge(a):"",n=n!=null?""+ge(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function Tn(t,n,a){n==="number"&&En(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function on(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ge(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function dn(t,n,a){if(n!=null&&(n=""+ge(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ge(a):""}function xn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(lt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ge(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function gi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Di=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function dd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Di.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function pd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&dd(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&dd(t,f,n[f])}function wc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var A0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),R0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Io(t){return R0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Dc=null;function Uc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yr=null,Mr=null;function md(t){var n=Ri(t);if(n&&(t=n.stateNode)){var a=t[vn]||null;t:switch(t=n.stateNode,n.type){case"input":if(wi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ge(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[vn]||null;if(!c)throw Error(r(90));wi(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Se(s)}break t;case"textarea":dn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&on(t,!!a.multiple,n,!1)}}}var Lc=!1;function gd(t,n,a){if(Lc)return t(n,a);Lc=!0;try{var s=t(n);return s}finally{if(Lc=!1,(yr!==null||Mr!==null)&&(El(),yr&&(n=yr,t=Mr,Mr=yr=null,md(n),t)))for(n=0;n<t.length;n++)md(t[n])}}function Ms(t,n){var a=t.stateNode;if(a===null)return null;var s=a[vn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nc=!1;if(Ui)try{var Es={};Object.defineProperty(Es,"passive",{get:function(){Nc=!0}}),window.addEventListener("test",Es,Es),window.removeEventListener("test",Es,Es)}catch{Nc=!1}var ca=null,Oc=null,Fo=null;function _d(){if(Fo)return Fo;var t,n=Oc,a=n.length,s,c="value"in ca?ca.value:ca.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var S=a-t;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return Fo=c.slice(t,1<s?1-s:void 0)}function Ho(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Go(){return!0}function vd(){return!1}function Nn(t){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Go:vd,this.isPropagationStopped=vd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vo=Nn(Wa),Ts=g({},Wa,{view:0,detail:0}),C0=Nn(Ts),Pc,Bc,bs,ko=g({},Ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bs&&(bs&&t.type==="mousemove"?(Pc=t.screenX-bs.screenX,Bc=t.screenY-bs.screenY):Bc=Pc=0,bs=t),Pc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),xd=Nn(ko),w0=g({},ko,{dataTransfer:0}),D0=Nn(w0),U0=g({},Ts,{relatedTarget:0}),zc=Nn(U0),L0=g({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),N0=Nn(L0),O0=g({},Wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),P0=Nn(O0),B0=g({},Wa,{data:0}),Sd=Nn(B0),z0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},F0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=F0[t])?!!n[t]:!1}function Ic(){return H0}var G0=g({},Ts,{key:function(t){if(t.key){var n=z0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ho(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?I0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(t){return t.type==="keypress"?Ho(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ho(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),V0=Nn(G0),k0=g({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yd=Nn(k0),X0=g({},Ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),W0=Nn(X0),q0=g({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y0=Nn(q0),j0=g({},ko,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Z0=Nn(j0),K0=g({},Wa,{newState:0,oldState:0}),Q0=Nn(K0),J0=[9,13,27,32],Fc=Ui&&"CompositionEvent"in window,As=null;Ui&&"documentMode"in document&&(As=document.documentMode);var $0=Ui&&"TextEvent"in window&&!As,Md=Ui&&(!Fc||As&&8<As&&11>=As),Ed=" ",Td=!1;function bd(t,n){switch(t){case"keyup":return J0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ad(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Er=!1;function tv(t,n){switch(t){case"compositionend":return Ad(n);case"keypress":return n.which!==32?null:(Td=!0,Ed);case"textInput":return t=n.data,t===Ed&&Td?null:t;default:return null}}function ev(t,n){if(Er)return t==="compositionend"||!Fc&&bd(t,n)?(t=_d(),Fo=Oc=ca=null,Er=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Md&&n.locale!=="ko"?null:n.data;default:return null}}var nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!nv[t.type]:n==="textarea"}function Cd(t,n,a,s){yr?Mr?Mr.push(s):Mr=[s]:yr=s,n=wl(n,"onChange"),0<n.length&&(a=new Vo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Rs=null,Cs=null;function iv(t){lg(t,0)}function Xo(t){var n=Xa(t);if(Se(n))return t}function wd(t,n){if(t==="change")return n}var Dd=!1;if(Ui){var Hc;if(Ui){var Gc="oninput"in document;if(!Gc){var Ud=document.createElement("div");Ud.setAttribute("oninput","return;"),Gc=typeof Ud.oninput=="function"}Hc=Gc}else Hc=!1;Dd=Hc&&(!document.documentMode||9<document.documentMode)}function Ld(){Rs&&(Rs.detachEvent("onpropertychange",Nd),Cs=Rs=null)}function Nd(t){if(t.propertyName==="value"&&Xo(Cs)){var n=[];Cd(n,Cs,t,Uc(t)),gd(iv,n)}}function av(t,n,a){t==="focusin"?(Ld(),Rs=n,Cs=a,Rs.attachEvent("onpropertychange",Nd)):t==="focusout"&&Ld()}function rv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xo(Cs)}function sv(t,n){if(t==="click")return Xo(n)}function ov(t,n){if(t==="input"||t==="change")return Xo(n)}function lv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Vn=typeof Object.is=="function"?Object.is:lv;function ws(t,n){if(Vn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Pe.call(n,c)||!Vn(t[c],n[c]))return!1}return!0}function Od(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pd(t,n){var a=Od(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Od(a)}}function Bd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Bd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function zd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=En(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=En(t.document)}return n}function Vc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var cv=Ui&&"documentMode"in document&&11>=document.documentMode,Tr=null,kc=null,Ds=null,Xc=!1;function Id(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xc||Tr==null||Tr!==En(s)||(s=Tr,"selectionStart"in s&&Vc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ds&&ws(Ds,s)||(Ds=s,s=wl(kc,"onSelect"),0<s.length&&(n=new Vo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Tr)))}function qa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var br={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},Wc={},Fd={};Ui&&(Fd=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function Ya(t){if(Wc[t])return Wc[t];if(!br[t])return t;var n=br[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Fd)return Wc[t]=n[a];return t}var Hd=Ya("animationend"),Gd=Ya("animationiteration"),Vd=Ya("animationstart"),uv=Ya("transitionrun"),fv=Ya("transitionstart"),hv=Ya("transitioncancel"),kd=Ya("transitionend"),Xd=new Map,qc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qc.push("scrollEnd");function oi(t,n){Xd.set(t,n),Ci(n,[t])}var Wd=new WeakMap;function Qn(t,n){if(typeof t=="object"&&t!==null){var a=Wd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:We(n)},Wd.set(t,n),n)}return{value:t,source:n,stack:We(n)}}var Jn=[],Ar=0,Yc=0;function Wo(){for(var t=Ar,n=Yc=Ar=0;n<t;){var a=Jn[n];Jn[n++]=null;var s=Jn[n];Jn[n++]=null;var c=Jn[n];Jn[n++]=null;var f=Jn[n];if(Jn[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&qd(a,c,f)}}function qo(t,n,a,s){Jn[Ar++]=t,Jn[Ar++]=n,Jn[Ar++]=a,Jn[Ar++]=s,Yc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function jc(t,n,a,s){return qo(t,n,a,s),Yo(t)}function Rr(t,n){return qo(t,null,null,n),Yo(t)}function qd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Ht(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Yo(t){if(50<eo)throw eo=0,tf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Cr={};function dv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,n,a,s){return new dv(t,n,a,s)}function Zc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Li(t,n){var a=t.alternate;return a===null?(a=kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Yd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function jo(t,n,a,s,c,f){var S=0;if(s=t,typeof t=="function")Zc(t)&&(S=1);else if(typeof t=="string")S=mx(t,a,Q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=kn(31,a,n,c),t.elementType=D,t.lanes=f,t;case b:return ja(a.children,c,f,n);case C:S=8,c|=24;break;case y:return t=kn(12,a,n,c|2),t.elementType=y,t.lanes=f,t;case F:return t=kn(13,a,n,c),t.elementType=F,t.lanes=f,t;case G:return t=kn(19,a,n,c),t.elementType=G,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case N:S=10;break t;case B:S=9;break t;case w:S=11;break t;case I:S=14;break t;case Z:S=16,s=null;break t}S=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=kn(S,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function ja(t,n,a,s){return t=kn(7,t,s,n),t.lanes=a,t}function Kc(t,n,a){return t=kn(6,t,null,n),t.lanes=a,t}function Qc(t,n,a){return n=kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var wr=[],Dr=0,Zo=null,Ko=0,$n=[],ti=0,Za=null,Ni=1,Oi="";function Ka(t,n){wr[Dr++]=Ko,wr[Dr++]=Zo,Zo=t,Ko=n}function jd(t,n,a){$n[ti++]=Ni,$n[ti++]=Oi,$n[ti++]=Za,Za=t;var s=Ni;t=Oi;var c=32-Ht(s)-1;s&=~(1<<c),a+=1;var f=32-Ht(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,Ni=1<<32-Ht(n)+c|a<<c|s,Oi=f+t}else Ni=1<<f|a<<c|s,Oi=t}function Jc(t){t.return!==null&&(Ka(t,1),jd(t,1,0))}function $c(t){for(;t===Zo;)Zo=wr[--Dr],wr[Dr]=null,Ko=wr[--Dr],wr[Dr]=null;for(;t===Za;)Za=$n[--ti],$n[ti]=null,Oi=$n[--ti],$n[ti]=null,Ni=$n[--ti],$n[ti]=null}var wn=null,je=null,be=!1,Qa=null,_i=!1,tu=Error(r(519));function Ja(t){var n=Error(r(418,""));throw Ns(Qn(n,t)),tu}function Zd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[sn]=t,n[vn]=s,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<io.length;a++)pe(io[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),Be(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Ye(n);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),xn(n,s.value,s.defaultValue,s.children),Ye(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||hg(n.textContent,a)?(s.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),s.onScroll!=null&&pe("scroll",n),s.onScrollEnd!=null&&pe("scrollend",n),s.onClick!=null&&(n.onclick=Dl),n=!0):n=!1,n||Ja(t)}function Kd(t){for(wn=t.return;wn;)switch(wn.tag){case 5:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:wn=wn.return}}function Us(t){if(t!==wn)return!1;if(!be)return Kd(t),be=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||_f(t.type,t.memoizedProps)),a=!a),a&&je&&Ja(t),Kd(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){je=ci(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}je=null}}else n===27?(n=je,ba(t.type)?(t=yf,yf=null,je=t):je=n):je=wn?ci(t.stateNode.nextSibling):null;return!0}function Ls(){je=wn=null,be=!1}function Qd(){var t=Qa;return t!==null&&(Bn===null?Bn=t:Bn.push.apply(Bn,t),Qa=null),t}function Ns(t){Qa===null?Qa=[t]:Qa.push(t)}var eu=$(null),$a=null,Pi=null;function ua(t,n,a){St(eu,n._currentValue),n._currentValue=a}function Bi(t){t._currentValue=eu.current,vt(eu)}function nu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function iu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var P=0;P<n.length;P++)if(E.context===n[P]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),nu(f.return,a,t),s||(S=null);break t}f=E.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),nu(S,a,t),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===t){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Os(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var E=c.type;Vn(c.pendingProps.value,S.value)||(t!==null?t.push(E):t=[E])}}else if(c===At.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(co):t=[co])}c=c.return}t!==null&&iu(n,t,a,s),n.flags|=262144}function Qo(t){for(t=t.firstContext;t!==null;){if(!Vn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function tr(t){$a=t,Pi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bn(t){return Jd($a,t)}function Jo(t,n){return $a===null&&tr(t),Jd(t,n)}function Jd(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Pi===null){if(t===null)throw Error(r(308));Pi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Pi=Pi.next=n;return a}var pv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},mv=o.unstable_scheduleCallback,gv=o.unstable_NormalPriority,ln={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function au(){return{controller:new pv,data:new Map,refCount:0}}function Ps(t){t.refCount--,t.refCount===0&&mv(gv,function(){t.controller.abort()})}var Bs=null,ru=0,Ur=0,Lr=null;function _v(t,n){if(Bs===null){var a=Bs=[];ru=0,Ur=lf(),Lr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return ru++,n.then($d,$d),n}function $d(){if(--ru===0&&Bs!==null){Lr!==null&&(Lr.status="fulfilled");var t=Bs;Bs=null,Ur=0,Lr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function vv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var tp=O.S;O.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&_v(t,n),tp!==null&&tp(t,n)};var er=$(null);function su(){var t=er.current;return t!==null?t:Ve.pooledCache}function $o(t,n){n===null?St(er,er.current):St(er,n.pool)}function ep(){var t=su();return t===null?null:{parent:ln._currentValue,pool:t}}var zs=Error(r(460)),np=Error(r(474)),tl=Error(r(542)),ou={then:function(){}};function ip(t){return t=t.status,t==="fulfilled"||t==="rejected"}function el(){}function ap(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(el,el),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,sp(t),t;default:if(typeof n.status=="string")n.then(el,el);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,sp(t),t}throw Is=n,zs}}var Is=null;function rp(){if(Is===null)throw Error(r(459));var t=Is;return Is=null,t}function sp(t){if(t===zs||t===tl)throw Error(r(483))}var fa=!1;function lu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ha(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function da(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ae&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Yo(t),qd(t,null,a),n}return qo(t,s,n,a),Yo(t)}function Fs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ie(t,a)}}function uu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var fu=!1;function Hs(){if(fu){var t=Lr;if(t!==null)throw t}}function Gs(t,n,a,s){fu=!1;var c=t.updateQueue;fa=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var P=E,J=P.next;P.next=null,S===null?f=J:S.next=J,S=P;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,E=ft.lastBaseUpdate,E!==S&&(E===null?ft.firstBaseUpdate=J:E.next=J,ft.lastBaseUpdate=P))}if(f!==null){var _t=c.baseState;S=0,ft=J=P=null,E=f;do{var it=E.lane&-536870913,at=it!==E.lane;if(at?(xe&it)===it:(s&it)===it){it!==0&&it===Ur&&(fu=!0),ft!==null&&(ft=ft.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var te=t,jt=E;it=n;var Ne=a;switch(jt.tag){case 1:if(te=jt.payload,typeof te=="function"){_t=te.call(Ne,_t,it);break t}_t=te;break t;case 3:te.flags=te.flags&-65537|128;case 0:if(te=jt.payload,it=typeof te=="function"?te.call(Ne,_t,it):te,it==null)break t;_t=g({},_t,it);break t;case 2:fa=!0}}it=E.callback,it!==null&&(t.flags|=64,at&&(t.flags|=8192),at=c.callbacks,at===null?c.callbacks=[it]:at.push(it))}else at={lane:it,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ft===null?(J=ft=at,P=_t):ft=ft.next=at,S|=it;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;at=E,E=at.next,at.next=null,c.lastBaseUpdate=at,c.shared.pending=null}}while(!0);ft===null&&(P=_t),c.baseState=P,c.firstBaseUpdate=J,c.lastBaseUpdate=ft,f===null&&(c.shared.lanes=0),ya|=S,t.lanes=S,t.memoizedState=_t}}function op(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function lp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)op(a[t],n)}var Nr=$(null),nl=$(0);function cp(t,n){t=ki,St(nl,t),St(Nr,n),ki=t|n.baseLanes}function hu(){St(nl,ki),St(Nr,Nr.current)}function du(){ki=nl.current,vt(Nr),vt(nl)}var pa=0,ce=null,Ue=null,nn=null,il=!1,Or=!1,nr=!1,al=0,Vs=0,Pr=null,xv=0;function Ke(){throw Error(r(321))}function pu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Vn(t[a],n[a]))return!1;return!0}function mu(t,n,a,s,c,f){return pa=f,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?qp:Yp,nr=!1,f=a(s,c),nr=!1,Or&&(f=fp(n,a,s,c)),up(t),f}function up(t){O.H=ul;var n=Ue!==null&&Ue.next!==null;if(pa=0,nn=Ue=ce=null,il=!1,Vs=0,Pr=null,n)throw Error(r(300));t===null||pn||(t=t.dependencies,t!==null&&Qo(t)&&(pn=!0))}function fp(t,n,a,s){ce=t;var c=0;do{if(Or&&(Pr=null),Vs=0,Or=!1,25<=c)throw Error(r(301));if(c+=1,nn=Ue=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Av,f=n(a,s)}while(Or);return f}function Sv(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?ks(n):n,t=t.useState()[0],(Ue!==null?Ue.memoizedState:null)!==t&&(ce.flags|=1024),n}function gu(){var t=al!==0;return al=0,t}function _u(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function vu(t){if(il){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}il=!1}pa=0,nn=Ue=ce=null,Or=!1,Vs=al=0,Pr=null}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?ce.memoizedState=nn=t:nn=nn.next=t,nn}function an(){if(Ue===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var n=nn===null?ce.memoizedState:nn.next;if(n!==null)nn=n,Ue=t;else{if(t===null)throw ce.alternate===null?Error(r(467)):Error(r(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},nn===null?ce.memoizedState=nn=t:nn=nn.next=t}return nn}function xu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ks(t){var n=Vs;return Vs+=1,Pr===null&&(Pr=[]),t=ap(Pr,t,n),n=ce,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?qp:Yp),t}function rl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ks(t);if(t.$$typeof===N)return bn(t)}throw Error(r(438,String(t)))}function Su(t){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ce.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=xu(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=R;return n.index++,a}function zi(t,n){return typeof n=="function"?n(t):n}function sl(t){var n=an();return yu(n,Ue,t)}function yu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=S=null,P=null,J=n,ft=!1;do{var _t=J.lane&-536870913;if(_t!==J.lane?(xe&_t)===_t:(pa&_t)===_t){var it=J.revertLane;if(it===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),_t===Ur&&(ft=!0);else if((pa&it)===it){J=J.next,it===Ur&&(ft=!0);continue}else _t={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(E=P=_t,S=f):P=P.next=_t,ce.lanes|=it,ya|=it;_t=J.action,nr&&a(f,_t),f=J.hasEagerState?J.eagerState:a(f,_t)}else it={lane:_t,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(E=P=it,S=f):P=P.next=it,ce.lanes|=_t,ya|=_t;J=J.next}while(J!==null&&J!==n);if(P===null?S=f:P.next=E,!Vn(f,t.memoizedState)&&(pn=!0,ft&&(a=Lr,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=P,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Mu(t){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=t(f,S.action),S=S.next;while(S!==c);Vn(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function hp(t,n,a){var s=ce,c=an(),f=be;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Vn((Ue||c).memoizedState,a);S&&(c.memoizedState=a,pn=!0),c=c.queue;var E=mp.bind(null,s,c,t);if(Xs(2048,8,E,[t]),c.getSnapshot!==n||S||nn!==null&&nn.memoizedState.tag&1){if(s.flags|=2048,Br(9,ol(),pp.bind(null,s,c,a,n),null),Ve===null)throw Error(r(349));f||(pa&124)!==0||dp(s,n,a)}return a}function dp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=xu(),ce.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function pp(t,n,a,s){n.value=a,n.getSnapshot=s,gp(n)&&_p(t)}function mp(t,n,a){return a(function(){gp(n)&&_p(t)})}function gp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Vn(t,a)}catch{return!0}}function _p(t){var n=Rr(t,2);n!==null&&jn(n,t,2)}function Eu(t){var n=On();if(typeof t=="function"){var a=t;if(t=a(),nr){Rt(!0);try{a()}finally{Rt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:t},n}function vp(t,n,a,s){return t.baseState=a,yu(t,Ue,typeof s=="function"?s:zi)}function yv(t,n,a,s,c){if(cl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};O.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,xp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function xp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=O.T,S={};O.T=S;try{var E=a(c,s),P=O.S;P!==null&&P(S,E),Sp(t,n,E)}catch(J){Tu(t,n,J)}finally{O.T=f}}else try{f=a(c,s),Sp(t,n,f)}catch(J){Tu(t,n,J)}}function Sp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){yp(t,n,s)},function(s){return Tu(t,n,s)}):yp(t,n,a)}function yp(t,n,a){n.status="fulfilled",n.value=a,Mp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,xp(t,a)))}function Tu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Mp(n),n=n.next;while(n!==s)}t.action=null}function Mp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Ep(t,n){return n}function Tp(t,n){if(be){var a=Ve.formState;if(a!==null){t:{var s=ce;if(be){if(je){e:{for(var c=je,f=_i;c.nodeType!==8;){if(!f){c=null;break e}if(c=ci(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){je=ci(c.nextSibling),s=c.data==="F!";break t}}Ja(s)}s=!1}s&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ep,lastRenderedState:n},a.queue=s,a=kp.bind(null,ce,s),s.dispatch=a,s=Eu(!1),f=wu.bind(null,ce,!1,s.queue),s=On(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=yv.bind(null,ce,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function bp(t){var n=an();return Ap(n,Ue,t)}function Ap(t,n,a){if(n=yu(t,n,Ep)[0],t=sl(zi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=ks(n)}catch(S){throw S===zs?tl:S}else s=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,Br(9,ol(),Mv.bind(null,c,a),null)),[s,f,t]}function Mv(t,n){t.action=n}function Rp(t){var n=an(),a=Ue;if(a!==null)return Ap(n,a,t);an(),n=n.memoizedState,a=an();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Br(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ce.updateQueue,n===null&&(n=xu(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function ol(){return{destroy:void 0,resource:void 0}}function Cp(){return an().memoizedState}function ll(t,n,a,s){var c=On();s=s===void 0?null:s,ce.flags|=t,c.memoizedState=Br(1|n,ol(),a,s)}function Xs(t,n,a,s){var c=an();s=s===void 0?null:s;var f=c.memoizedState.inst;Ue!==null&&s!==null&&pu(s,Ue.memoizedState.deps)?c.memoizedState=Br(n,f,a,s):(ce.flags|=t,c.memoizedState=Br(1|n,f,a,s))}function wp(t,n){ll(8390656,8,t,n)}function Dp(t,n){Xs(2048,8,t,n)}function Up(t,n){return Xs(4,2,t,n)}function Lp(t,n){return Xs(4,4,t,n)}function Np(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Op(t,n,a){a=a!=null?a.concat([t]):null,Xs(4,4,Np.bind(null,n,t),a)}function bu(){}function Pp(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&pu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Bp(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&pu(n,s[1]))return s[0];if(s=t(),nr){Rt(!0);try{t()}finally{Rt(!1)}}return a.memoizedState=[s,n],s}function Au(t,n,a){return a===void 0||(pa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Fm(),ce.lanes|=t,ya|=t,a)}function zp(t,n,a,s){return Vn(a,n)?a:Nr.current!==null?(t=Au(t,a,s),Vn(t,n)||(pn=!0),t):(pa&42)===0?(pn=!0,t.memoizedState=a):(t=Fm(),ce.lanes|=t,ya|=t,n)}function Ip(t,n,a,s,c){var f=Y.p;Y.p=f!==0&&8>f?f:8;var S=O.T,E={};O.T=E,wu(t,!1,n,a);try{var P=c(),J=O.S;if(J!==null&&J(E,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ft=vv(P,s);Ws(t,n,ft,Yn(t))}else Ws(t,n,s,Yn(t))}catch(_t){Ws(t,n,{then:function(){},status:"rejected",reason:_t},Yn())}finally{Y.p=f,O.T=S}}function Ev(){}function Ru(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Fp(t).queue;Ip(t,c,n,W,a===null?Ev:function(){return Hp(t),a(s)})}function Fp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Hp(t){var n=Fp(t).next.queue;Ws(t,n,{},Yn())}function Cu(){return bn(co)}function Gp(){return an().memoizedState}function Vp(){return an().memoizedState}function Tv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Yn();t=ha(a);var s=da(n,t,a);s!==null&&(jn(s,n,a),Fs(s,n,a)),n={cache:au()},t.payload=n;return}n=n.return}}function bv(t,n,a){var s=Yn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},cl(t)?Xp(n,a):(a=jc(t,n,a,s),a!==null&&(jn(a,t,s),Wp(a,n,s)))}function kp(t,n,a){var s=Yn();Ws(t,n,a,s)}function Ws(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(cl(t))Xp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,E=f(S,a);if(c.hasEagerState=!0,c.eagerState=E,Vn(E,S))return qo(t,n,c,0),Ve===null&&Wo(),!1}catch{}finally{}if(a=jc(t,n,c,s),a!==null)return jn(a,t,s),Wp(a,n,s),!0}return!1}function wu(t,n,a,s){if(s={lane:2,revertLane:lf(),action:s,hasEagerState:!1,eagerState:null,next:null},cl(t)){if(n)throw Error(r(479))}else n=jc(t,a,s,2),n!==null&&jn(n,t,2)}function cl(t){var n=t.alternate;return t===ce||n!==null&&n===ce}function Xp(t,n){Or=il=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Wp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ie(t,a)}}var ul={readContext:bn,use:rl,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke},qp={readContext:bn,use:rl,useCallback:function(t,n){return On().memoizedState=[t,n===void 0?null:n],t},useContext:bn,useEffect:wp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ll(4194308,4,Np.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ll(4194308,4,t,n)},useInsertionEffect:function(t,n){ll(4,2,t,n)},useMemo:function(t,n){var a=On();n=n===void 0?null:n;var s=t();if(nr){Rt(!0);try{t()}finally{Rt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=On();if(a!==void 0){var c=a(n);if(nr){Rt(!0);try{a(n)}finally{Rt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=bv.bind(null,ce,t),[s.memoizedState,t]},useRef:function(t){var n=On();return t={current:t},n.memoizedState=t},useState:function(t){t=Eu(t);var n=t.queue,a=kp.bind(null,ce,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:bu,useDeferredValue:function(t,n){var a=On();return Au(a,t,n)},useTransition:function(){var t=Eu(!1);return t=Ip.bind(null,ce,t.queue,!0,!1),On().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ce,c=On();if(be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ve===null)throw Error(r(349));(xe&124)!==0||dp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,wp(mp.bind(null,s,f,t),[t]),s.flags|=2048,Br(9,ol(),pp.bind(null,s,f,a,n),null),a},useId:function(){var t=On(),n=Ve.identifierPrefix;if(be){var a=Oi,s=Ni;a=(s&~(1<<32-Ht(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=al++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=xv++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Cu,useFormState:Tp,useActionState:Tp,useOptimistic:function(t){var n=On();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=wu.bind(null,ce,!0,a),a.dispatch=n,[t,n]},useMemoCache:Su,useCacheRefresh:function(){return On().memoizedState=Tv.bind(null,ce)}},Yp={readContext:bn,use:rl,useCallback:Pp,useContext:bn,useEffect:Dp,useImperativeHandle:Op,useInsertionEffect:Up,useLayoutEffect:Lp,useMemo:Bp,useReducer:sl,useRef:Cp,useState:function(){return sl(zi)},useDebugValue:bu,useDeferredValue:function(t,n){var a=an();return zp(a,Ue.memoizedState,t,n)},useTransition:function(){var t=sl(zi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:ks(t),n]},useSyncExternalStore:hp,useId:Gp,useHostTransitionStatus:Cu,useFormState:bp,useActionState:bp,useOptimistic:function(t,n){var a=an();return vp(a,Ue,t,n)},useMemoCache:Su,useCacheRefresh:Vp},Av={readContext:bn,use:rl,useCallback:Pp,useContext:bn,useEffect:Dp,useImperativeHandle:Op,useInsertionEffect:Up,useLayoutEffect:Lp,useMemo:Bp,useReducer:Mu,useRef:Cp,useState:function(){return Mu(zi)},useDebugValue:bu,useDeferredValue:function(t,n){var a=an();return Ue===null?Au(a,t,n):zp(a,Ue.memoizedState,t,n)},useTransition:function(){var t=Mu(zi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:ks(t),n]},useSyncExternalStore:hp,useId:Gp,useHostTransitionStatus:Cu,useFormState:Rp,useActionState:Rp,useOptimistic:function(t,n){var a=an();return Ue!==null?vp(a,Ue,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Su,useCacheRefresh:Vp},zr=null,qs=0;function fl(t){var n=qs;return qs+=1,zr===null&&(zr=[]),ap(zr,t,n)}function Ys(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function hl(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function jp(t){var n=t._init;return n(t._payload)}function Zp(t){function n(X,V){if(t){var K=X.deletions;K===null?(X.deletions=[V],X.flags|=16):K.push(V)}}function a(X,V){if(!t)return null;for(;V!==null;)n(X,V),V=V.sibling;return null}function s(X){for(var V=new Map;X!==null;)X.key!==null?V.set(X.key,X):V.set(X.index,X),X=X.sibling;return V}function c(X,V){return X=Li(X,V),X.index=0,X.sibling=null,X}function f(X,V,K){return X.index=K,t?(K=X.alternate,K!==null?(K=K.index,K<V?(X.flags|=67108866,V):K):(X.flags|=67108866,V)):(X.flags|=1048576,V)}function S(X){return t&&X.alternate===null&&(X.flags|=67108866),X}function E(X,V,K,dt){return V===null||V.tag!==6?(V=Kc(K,X.mode,dt),V.return=X,V):(V=c(V,K),V.return=X,V)}function P(X,V,K,dt){var Ft=K.type;return Ft===b?ft(X,V,K.props.children,dt,K.key):V!==null&&(V.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===Z&&jp(Ft)===V.type)?(V=c(V,K.props),Ys(V,K),V.return=X,V):(V=jo(K.type,K.key,K.props,null,X.mode,dt),Ys(V,K),V.return=X,V)}function J(X,V,K,dt){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=Qc(K,X.mode,dt),V.return=X,V):(V=c(V,K.children||[]),V.return=X,V)}function ft(X,V,K,dt,Ft){return V===null||V.tag!==7?(V=ja(K,X.mode,dt,Ft),V.return=X,V):(V=c(V,K),V.return=X,V)}function _t(X,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Kc(""+V,X.mode,K),V.return=X,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return K=jo(V.type,V.key,V.props,null,X.mode,K),Ys(K,V),K.return=X,K;case M:return V=Qc(V,X.mode,K),V.return=X,V;case Z:var dt=V._init;return V=dt(V._payload),_t(X,V,K)}if(lt(V)||et(V))return V=ja(V,X.mode,K,null),V.return=X,V;if(typeof V.then=="function")return _t(X,fl(V),K);if(V.$$typeof===N)return _t(X,Jo(X,V),K);hl(X,V)}return null}function it(X,V,K,dt){var Ft=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ft!==null?null:E(X,V,""+K,dt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case x:return K.key===Ft?P(X,V,K,dt):null;case M:return K.key===Ft?J(X,V,K,dt):null;case Z:return Ft=K._init,K=Ft(K._payload),it(X,V,K,dt)}if(lt(K)||et(K))return Ft!==null?null:ft(X,V,K,dt,null);if(typeof K.then=="function")return it(X,V,fl(K),dt);if(K.$$typeof===N)return it(X,V,Jo(X,K),dt);hl(X,K)}return null}function at(X,V,K,dt,Ft){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return X=X.get(K)||null,E(V,X,""+dt,Ft);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case x:return X=X.get(dt.key===null?K:dt.key)||null,P(V,X,dt,Ft);case M:return X=X.get(dt.key===null?K:dt.key)||null,J(V,X,dt,Ft);case Z:var fe=dt._init;return dt=fe(dt._payload),at(X,V,K,dt,Ft)}if(lt(dt)||et(dt))return X=X.get(K)||null,ft(V,X,dt,Ft,null);if(typeof dt.then=="function")return at(X,V,K,fl(dt),Ft);if(dt.$$typeof===N)return at(X,V,K,Jo(V,dt),Ft);hl(V,dt)}return null}function te(X,V,K,dt){for(var Ft=null,fe=null,Vt=V,Qt=V=0,gn=null;Vt!==null&&Qt<K.length;Qt++){Vt.index>Qt?(gn=Vt,Vt=null):gn=Vt.sibling;var Ee=it(X,Vt,K[Qt],dt);if(Ee===null){Vt===null&&(Vt=gn);break}t&&Vt&&Ee.alternate===null&&n(X,Vt),V=f(Ee,V,Qt),fe===null?Ft=Ee:fe.sibling=Ee,fe=Ee,Vt=gn}if(Qt===K.length)return a(X,Vt),be&&Ka(X,Qt),Ft;if(Vt===null){for(;Qt<K.length;Qt++)Vt=_t(X,K[Qt],dt),Vt!==null&&(V=f(Vt,V,Qt),fe===null?Ft=Vt:fe.sibling=Vt,fe=Vt);return be&&Ka(X,Qt),Ft}for(Vt=s(Vt);Qt<K.length;Qt++)gn=at(Vt,X,Qt,K[Qt],dt),gn!==null&&(t&&gn.alternate!==null&&Vt.delete(gn.key===null?Qt:gn.key),V=f(gn,V,Qt),fe===null?Ft=gn:fe.sibling=gn,fe=gn);return t&&Vt.forEach(function(Da){return n(X,Da)}),be&&Ka(X,Qt),Ft}function jt(X,V,K,dt){if(K==null)throw Error(r(151));for(var Ft=null,fe=null,Vt=V,Qt=V=0,gn=null,Ee=K.next();Vt!==null&&!Ee.done;Qt++,Ee=K.next()){Vt.index>Qt?(gn=Vt,Vt=null):gn=Vt.sibling;var Da=it(X,Vt,Ee.value,dt);if(Da===null){Vt===null&&(Vt=gn);break}t&&Vt&&Da.alternate===null&&n(X,Vt),V=f(Da,V,Qt),fe===null?Ft=Da:fe.sibling=Da,fe=Da,Vt=gn}if(Ee.done)return a(X,Vt),be&&Ka(X,Qt),Ft;if(Vt===null){for(;!Ee.done;Qt++,Ee=K.next())Ee=_t(X,Ee.value,dt),Ee!==null&&(V=f(Ee,V,Qt),fe===null?Ft=Ee:fe.sibling=Ee,fe=Ee);return be&&Ka(X,Qt),Ft}for(Vt=s(Vt);!Ee.done;Qt++,Ee=K.next())Ee=at(Vt,X,Qt,Ee.value,dt),Ee!==null&&(t&&Ee.alternate!==null&&Vt.delete(Ee.key===null?Qt:Ee.key),V=f(Ee,V,Qt),fe===null?Ft=Ee:fe.sibling=Ee,fe=Ee);return t&&Vt.forEach(function(Rx){return n(X,Rx)}),be&&Ka(X,Qt),Ft}function Ne(X,V,K,dt){if(typeof K=="object"&&K!==null&&K.type===b&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case x:t:{for(var Ft=K.key;V!==null;){if(V.key===Ft){if(Ft=K.type,Ft===b){if(V.tag===7){a(X,V.sibling),dt=c(V,K.props.children),dt.return=X,X=dt;break t}}else if(V.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===Z&&jp(Ft)===V.type){a(X,V.sibling),dt=c(V,K.props),Ys(dt,K),dt.return=X,X=dt;break t}a(X,V);break}else n(X,V);V=V.sibling}K.type===b?(dt=ja(K.props.children,X.mode,dt,K.key),dt.return=X,X=dt):(dt=jo(K.type,K.key,K.props,null,X.mode,dt),Ys(dt,K),dt.return=X,X=dt)}return S(X);case M:t:{for(Ft=K.key;V!==null;){if(V.key===Ft)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(X,V.sibling),dt=c(V,K.children||[]),dt.return=X,X=dt;break t}else{a(X,V);break}else n(X,V);V=V.sibling}dt=Qc(K,X.mode,dt),dt.return=X,X=dt}return S(X);case Z:return Ft=K._init,K=Ft(K._payload),Ne(X,V,K,dt)}if(lt(K))return te(X,V,K,dt);if(et(K)){if(Ft=et(K),typeof Ft!="function")throw Error(r(150));return K=Ft.call(K),jt(X,V,K,dt)}if(typeof K.then=="function")return Ne(X,V,fl(K),dt);if(K.$$typeof===N)return Ne(X,V,Jo(X,K),dt);hl(X,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(X,V.sibling),dt=c(V,K),dt.return=X,X=dt):(a(X,V),dt=Kc(K,X.mode,dt),dt.return=X,X=dt),S(X)):a(X,V)}return function(X,V,K,dt){try{qs=0;var Ft=Ne(X,V,K,dt);return zr=null,Ft}catch(Vt){if(Vt===zs||Vt===tl)throw Vt;var fe=kn(29,Vt,null,X.mode);return fe.lanes=dt,fe.return=X,fe}finally{}}}var Ir=Zp(!0),Kp=Zp(!1),ei=$(null),vi=null;function ma(t){var n=t.alternate;St(cn,cn.current&1),St(ei,t),vi===null&&(n===null||Nr.current!==null||n.memoizedState!==null)&&(vi=t)}function Qp(t){if(t.tag===22){if(St(cn,cn.current),St(ei,t),vi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(vi=t)}}else ga()}function ga(){St(cn,cn.current),St(ei,ei.current)}function Ii(t){vt(ei),vi===t&&(vi=null),vt(cn)}var cn=$(0);function dl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Sf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Du(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Uu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Yn(),c=ha(s);c.payload=n,a!=null&&(c.callback=a),n=da(t,c,s),n!==null&&(jn(n,t,s),Fs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Yn(),c=ha(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=da(t,c,s),n!==null&&(jn(n,t,s),Fs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Yn(),s=ha(a);s.tag=2,n!=null&&(s.callback=n),n=da(t,s,a),n!==null&&(jn(n,t,a),Fs(n,t,a))}};function Jp(t,n,a,s,c,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!ws(a,s)||!ws(c,f):!0}function $p(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Uu.enqueueReplaceState(n,n.state,null)}function ir(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var pl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function tm(t){pl(t)}function em(t){console.error(t)}function nm(t){pl(t)}function ml(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function im(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Lu(t,n,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){ml(t,n)},a}function am(t){return t=ha(t),t.tag=3,t}function rm(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){im(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){im(n,a,s),typeof c!="function"&&(Ma===null?Ma=new Set([this]):Ma.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function Rv(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Os(n,a,c,!0),a=ei.current,a!==null){switch(a.tag){case 13:return vi===null?nf():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===ou?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),rf(t,s,c)),!1;case 22:return a.flags|=65536,s===ou?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),rf(t,s,c)),!1}throw Error(r(435,a.tag))}return rf(t,s,c),nf(),!1}if(be)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==tu&&(t=Error(r(422),{cause:s}),Ns(Qn(t,a)))):(s!==tu&&(n=Error(r(423),{cause:s}),Ns(Qn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Qn(s,a),c=Lu(t.stateNode,s,c),uu(t,c),Ze!==4&&(Ze=2)),!1;var f=Error(r(520),{cause:s});if(f=Qn(f,a),to===null?to=[f]:to.push(f),Ze!==4&&(Ze=2),n===null)return!0;s=Qn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Lu(a.stateNode,s,t),uu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ma===null||!Ma.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=am(c),rm(c,t,a,s),uu(a,c),!1}a=a.return}while(a!==null);return!1}var sm=Error(r(461)),pn=!1;function Sn(t,n,a,s){n.child=t===null?Kp(n,null,a,s):Ir(n,t.child,a,s)}function om(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var E in s)E!=="ref"&&(S[E]=s[E])}else S=s;return tr(n),s=mu(t,n,a,S,f,c),E=gu(),t!==null&&!pn?(_u(t,n,c),Fi(t,n,c)):(be&&E&&Jc(n),n.flags|=1,Sn(t,n,s,c),n.child)}function lm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Zc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,cm(t,n,f,s,c)):(t=jo(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Hu(t,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:ws,a(S,s)&&t.ref===n.ref)return Fi(t,n,c)}return n.flags|=1,t=Li(f,s),t.ref=n.ref,t.return=n,n.child=t}function cm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(ws(f,s)&&t.ref===n.ref)if(pn=!1,n.pendingProps=s=f,Hu(t,c))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,Fi(t,n,c)}return Nu(t,n,a,s,c)}function um(t,n,a){var s=n.pendingProps,c=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return fm(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&$o(n,f!==null?f.cachePool:null),f!==null?cp(n,f):hu(),Qp(n);else return n.lanes=n.childLanes=536870912,fm(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?($o(n,f.cachePool),cp(n,f),ga(),n.memoizedState=null):(t!==null&&$o(n,null),hu(),ga());return Sn(t,n,c,a),n.child}function fm(t,n,a,s){var c=su();return c=c===null?null:{parent:ln._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&$o(n,null),hu(),Qp(n),t!==null&&Os(t,n,s,!0),null}function gl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Nu(t,n,a,s,c){return tr(n),a=mu(t,n,a,s,void 0,c),s=gu(),t!==null&&!pn?(_u(t,n,c),Fi(t,n,c)):(be&&s&&Jc(n),n.flags|=1,Sn(t,n,a,c),n.child)}function hm(t,n,a,s,c,f){return tr(n),n.updateQueue=null,a=fp(n,s,a,c),up(t),s=gu(),t!==null&&!pn?(_u(t,n,f),Fi(t,n,f)):(be&&s&&Jc(n),n.flags|=1,Sn(t,n,a,f),n.child)}function dm(t,n,a,s,c){if(tr(n),n.stateNode===null){var f=Cr,S=a.contextType;typeof S=="object"&&S!==null&&(f=bn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Uu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},lu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?bn(S):Cr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Du(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Uu.enqueueReplaceState(f,f.state,null),Gs(n,s,f,c),Hs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,P=ir(a,E);f.props=P;var J=f.context,ft=a.contextType;S=Cr,typeof ft=="object"&&ft!==null&&(S=bn(ft));var _t=a.getDerivedStateFromProps;ft=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||J!==S)&&$p(n,f,s,S),fa=!1;var it=n.memoizedState;f.state=it,Gs(n,s,f,c),Hs(),J=n.memoizedState,E||it!==J||fa?(typeof _t=="function"&&(Du(n,a,_t,s),J=n.memoizedState),(P=fa||Jp(n,a,P,s,it,J,S))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),f.props=s,f.state=J,f.context=S,s=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,cu(t,n),S=n.memoizedProps,ft=ir(a,S),f.props=ft,_t=n.pendingProps,it=f.context,J=a.contextType,P=Cr,typeof J=="object"&&J!==null&&(P=bn(J)),E=a.getDerivedStateFromProps,(J=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==_t||it!==P)&&$p(n,f,s,P),fa=!1,it=n.memoizedState,f.state=it,Gs(n,s,f,c),Hs();var at=n.memoizedState;S!==_t||it!==at||fa||t!==null&&t.dependencies!==null&&Qo(t.dependencies)?(typeof E=="function"&&(Du(n,a,E,s),at=n.memoizedState),(ft=fa||Jp(n,a,ft,s,it,at,P)||t!==null&&t.dependencies!==null&&Qo(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,at,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,at,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=at),f.props=s,f.state=at,f.context=P,s=ft):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,gl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Ir(n,t.child,null,c),n.child=Ir(n,null,a,c)):Sn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Fi(t,n,c),t}function pm(t,n,a,s){return Ls(),n.flags|=256,Sn(t,n,a,s),n.child}var Ou={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Pu(t){return{baseLanes:t,cachePool:ep()}}function Bu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ni),t}function mm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(be){if(c?ma(n):ga(),be){var E=je,P;if(P=E){t:{for(P=E,E=_i;P.nodeType!==8;){if(!E){E=null;break t}if(P=ci(P.nextSibling),P===null){E=null;break t}}E=P}E!==null?(n.memoizedState={dehydrated:E,treeContext:Za!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},P=kn(18,null,null,0),P.stateNode=E,P.return=n,n.child=P,wn=n,je=null,P=!0):P=!1}P||Ja(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Sf(E)?n.lanes=32:n.lanes=536870912,null;Ii(n)}return E=s.children,s=s.fallback,c?(ga(),c=n.mode,E=_l({mode:"hidden",children:E},c),s=ja(s,c,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,c=n.child,c.memoizedState=Pu(a),c.childLanes=Bu(t,S,a),n.memoizedState=Ou,s):(ma(n),zu(n,E))}if(P=t.memoizedState,P!==null&&(E=P.dehydrated,E!==null)){if(f)n.flags&256?(ma(n),n.flags&=-257,n=Iu(t,n,a)):n.memoizedState!==null?(ga(),n.child=t.child,n.flags|=128,n=null):(ga(),c=s.fallback,E=n.mode,s=_l({mode:"visible",children:s.children},E),c=ja(c,E,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Ir(n,t.child,null,a),s=n.child,s.memoizedState=Pu(a),s.childLanes=Bu(t,S,a),n.memoizedState=Ou,n=c);else if(ma(n),Sf(E)){if(S=E.nextSibling&&E.nextSibling.dataset,S)var J=S.dgst;S=J,s=Error(r(419)),s.stack="",s.digest=S,Ns({value:s,source:null,stack:null}),n=Iu(t,n,a)}else if(pn||Os(t,n,a,!1),S=(a&t.childLanes)!==0,pn||S){if(S=Ve,S!==null&&(s=a&-a,s=(s&42)!==0?1:He(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==P.retryLane))throw P.retryLane=s,Rr(t,s),jn(S,t,s),sm;E.data==="$?"||nf(),n=Iu(t,n,a)}else E.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=P.treeContext,je=ci(E.nextSibling),wn=n,be=!0,Qa=null,_i=!1,t!==null&&($n[ti++]=Ni,$n[ti++]=Oi,$n[ti++]=Za,Ni=t.id,Oi=t.overflow,Za=n),n=zu(n,s.children),n.flags|=4096);return n}return c?(ga(),c=s.fallback,E=n.mode,P=t.child,J=P.sibling,s=Li(P,{mode:"hidden",children:s.children}),s.subtreeFlags=P.subtreeFlags&65011712,J!==null?c=Li(J,c):(c=ja(c,E,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,E=t.child.memoizedState,E===null?E=Pu(a):(P=E.cachePool,P!==null?(J=ln._currentValue,P=P.parent!==J?{parent:J,pool:J}:P):P=ep(),E={baseLanes:E.baseLanes|a,cachePool:P}),c.memoizedState=E,c.childLanes=Bu(t,S,a),n.memoizedState=Ou,s):(ma(n),a=t.child,t=a.sibling,a=Li(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function zu(t,n){return n=_l({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function _l(t,n){return t=kn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Iu(t,n,a){return Ir(n,t.child,null,a),t=zu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function gm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),nu(t.return,n,a)}function Fu(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function _m(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(Sn(t,n,s.children,a),s=cn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gm(t,a,n);else if(t.tag===19)gm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(St(cn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&dl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Fu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&dl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Fu(n,!0,a,null,f);break;case"together":Fu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Fi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ya|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Os(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Li(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Li(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Hu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Qo(t)))}function Cv(t,n,a){switch(n.tag){case 3:Ut(n,n.stateNode.containerInfo),ua(n,ln,t.memoizedState.cache),Ls();break;case 27:case 5:Zt(n);break;case 4:Ut(n,n.stateNode.containerInfo);break;case 10:ua(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?mm(t,n,a):(ma(n),t=Fi(t,n,a),t!==null?t.sibling:null);ma(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Os(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return _m(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(cn,cn.current),s)break;return null;case 22:case 23:return n.lanes=0,um(t,n,a);case 24:ua(n,ln,t.memoizedState.cache)}return Fi(t,n,a)}function vm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!Hu(t,a)&&(n.flags&128)===0)return pn=!1,Cv(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,be&&(n.flags&1048576)!==0&&jd(n,Ko,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Zc(s)?(t=ir(s,t),n.tag=1,n=dm(null,n,s,t,a)):(n.tag=0,n=Nu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===w){n.tag=11,n=om(null,n,s,t,a);break t}else if(c===I){n.tag=14,n=lm(null,n,s,t,a);break t}}throw n=ut(s)||s,Error(r(306,n,""))}}return n;case 0:return Nu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=ir(s,n.pendingProps),dm(t,n,s,c,a);case 3:t:{if(Ut(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,cu(t,n),Gs(n,s,null,a);var S=n.memoizedState;if(s=S.cache,ua(n,ln,s),s!==f.cache&&iu(n,[ln],a,!0),Hs(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=pm(t,n,s,a);break t}else if(s!==c){c=Qn(Error(r(424)),n),Ns(c),n=pm(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(je=ci(t.firstChild),wn=n,be=!0,Qa=null,_i=!0,a=Kp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ls(),s===c){n=Fi(t,n,a);break t}Sn(t,n,s,a)}n=n.child}return n;case 26:return gl(t,n),t===null?(a=Mg(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,t=n.pendingProps,s=Ul(xt.current).createElement(a),s[sn]=n,s[vn]=t,Mn(s,a,t),en(s),n.stateNode=s):n.memoizedState=Mg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Zt(n),t===null&&be&&(s=n.stateNode=xg(n.type,n.pendingProps,xt.current),wn=n,_i=!0,c=je,ba(n.type)?(yf=c,je=ci(s.firstChild)):je=c),Sn(t,n,n.pendingProps.children,a),gl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&be&&((c=s=je)&&(s=nx(s,n.type,n.pendingProps,_i),s!==null?(n.stateNode=s,wn=n,je=ci(s.firstChild),_i=!1,c=!0):c=!1),c||Ja(n)),Zt(n),c=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,s=f.children,_f(c,f)?s=null:S!==null&&_f(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=mu(t,n,Sv,null,null,a),co._currentValue=c),gl(t,n),Sn(t,n,s,a),n.child;case 6:return t===null&&be&&((t=a=je)&&(a=ix(a,n.pendingProps,_i),a!==null?(n.stateNode=a,wn=n,je=null,t=!0):t=!1),t||Ja(n)),null;case 13:return mm(t,n,a);case 4:return Ut(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Ir(n,null,s,a):Sn(t,n,s,a),n.child;case 11:return om(t,n,n.type,n.pendingProps,a);case 7:return Sn(t,n,n.pendingProps,a),n.child;case 8:return Sn(t,n,n.pendingProps.children,a),n.child;case 12:return Sn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ua(n,n.type,s.value),Sn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,tr(n),c=bn(c),s=s(c),n.flags|=1,Sn(t,n,s,a),n.child;case 14:return lm(t,n,n.type,n.pendingProps,a);case 15:return cm(t,n,n.type,n.pendingProps,a);case 19:return _m(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=_l(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Li(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return um(t,n,a);case 24:return tr(n),s=bn(ln),t===null?(c=su(),c===null&&(c=Ve,f=au(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},lu(n),ua(n,ln,c)):((t.lanes&a)!==0&&(cu(t,n),Gs(n,null,null,a),Hs()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ua(n,ln,s)):(s=f.cache,ua(n,ln,s),s!==c.cache&&iu(n,[ln],a,!0))),Sn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Hi(t){t.flags|=4}function xm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Rg(n)){if(n=ei.current,n!==null&&((xe&4194048)===xe?vi!==null:(xe&62914560)!==xe&&(xe&536870912)===0||n!==vi))throw Is=ou,np;t.flags|=8192}}function vl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Lt():536870912,t.lanes|=n,Vr|=n)}function js(t,n){if(!be)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function wv(t,n,a){var s=n.pendingProps;switch($c(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Bi(ln),se(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Us(n)?Hi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Qd())),qe(n),null;case 26:return a=n.memoizedState,t===null?(Hi(n),a!==null?(qe(n),xm(n,a)):(qe(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Hi(n),qe(n),xm(n,a)):(qe(n),n.flags&=-16777217):(t.memoizedProps!==s&&Hi(n),qe(n),n.flags&=-16777217),null;case 27:Fe(n),a=xt.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}t=Q.current,Us(n)?Zd(n):(t=xg(c,s,a),n.stateNode=t,Hi(n))}return qe(n),null;case 5:if(Fe(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(t=Q.current,Us(n))Zd(n);else{switch(c=Ul(xt.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[sn]=n,t[vn]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(Mn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Hi(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=xt.current,Us(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=wn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||hg(t.nodeValue,a)),t||Ja(n)}else t=Ul(t).createTextNode(s),t[sn]=n,n.stateNode=t}return qe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Us(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[sn]=n}else Ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=Qd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Ii(n),n):(Ii(n),null)}if(Ii(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),vl(n,n.updateQueue),qe(n),null;case 4:return se(),t===null&&hf(n.stateNode.containerInfo),qe(n),null;case 10:return Bi(n.type),qe(n),null;case 19:if(vt(cn),c=n.memoizedState,c===null)return qe(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)js(c,!1);else{if(Ze!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=dl(t),f!==null){for(n.flags|=128,js(c,!1),t=f.updateQueue,n.updateQueue=t,vl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Yd(a,t),a=a.sibling;return St(cn,cn.current&1|2),n.child}t=t.sibling}c.tail!==null&&ne()>yl&&(n.flags|=128,s=!0,js(c,!1),n.lanes=4194304)}else{if(!s)if(t=dl(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,vl(n,t),js(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!be)return qe(n),null}else 2*ne()-c.renderingStartTime>yl&&a!==536870912&&(n.flags|=128,s=!0,js(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ne(),n.sibling=null,t=cn.current,St(cn,s?t&1|2:t&1),n):(qe(n),null);case 22:case 23:return Ii(n),du(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&vl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&vt(er),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Bi(ln),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Dv(t,n){switch($c(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Bi(ln),se(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Fe(n),null;case 13:if(Ii(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ls()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return vt(cn),null;case 4:return se(),null;case 10:return Bi(n.type),null;case 22:case 23:return Ii(n),du(),t!==null&&vt(er),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Bi(ln),null;case 25:return null;default:return null}}function Sm(t,n){switch($c(n),n.tag){case 3:Bi(ln),se();break;case 26:case 27:case 5:Fe(n);break;case 4:se();break;case 13:Ii(n);break;case 19:vt(cn);break;case 10:Bi(n.type);break;case 22:case 23:Ii(n),du(),t!==null&&vt(er);break;case 24:Bi(ln)}}function Zs(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(E){ze(n,n.return,E)}}function _a(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var S=s.inst,E=S.destroy;if(E!==void 0){S.destroy=void 0,c=n;var P=a,J=E;try{J()}catch(ft){ze(c,P,ft)}}}s=s.next}while(s!==f)}}catch(ft){ze(n,n.return,ft)}}function ym(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{lp(n,a)}catch(s){ze(t,t.return,s)}}}function Mm(t,n,a){a.props=ir(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){ze(t,n,s)}}function Ks(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){ze(t,n,c)}}function xi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){ze(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){ze(t,n,c)}else a.current=null}function Em(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){ze(t,t.return,c)}}function Gu(t,n,a){try{var s=t.stateNode;Qv(s,t.type,a,n),s[vn]=n}catch(c){ze(t,t.return,c)}}function Tm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ba(t.type)||t.tag===4}function Vu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Tm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ba(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ku(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Dl));else if(s!==4&&(s===27&&ba(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(ku(t,n,a),t=t.sibling;t!==null;)ku(t,n,a),t=t.sibling}function xl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&ba(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(xl(t,n,a),t=t.sibling;t!==null;)xl(t,n,a),t=t.sibling}function bm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Mn(n,s,a),n[sn]=t,n[vn]=a}catch(f){ze(t,t.return,f)}}var Gi=!1,Qe=!1,Xu=!1,Am=typeof WeakSet=="function"?WeakSet:Set,mn=null;function Uv(t,n){if(t=t.containerInfo,mf=zl,t=zd(t),Vc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,E=-1,P=-1,J=0,ft=0,_t=t,it=null;e:for(;;){for(var at;_t!==a||c!==0&&_t.nodeType!==3||(E=S+c),_t!==f||s!==0&&_t.nodeType!==3||(P=S+s),_t.nodeType===3&&(S+=_t.nodeValue.length),(at=_t.firstChild)!==null;)it=_t,_t=at;for(;;){if(_t===t)break e;if(it===a&&++J===c&&(E=S),it===f&&++ft===s&&(P=S),(at=_t.nextSibling)!==null)break;_t=it,it=_t.parentNode}_t=at}a=E===-1||P===-1?null:{start:E,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(gf={focusedElem:t,selectionRange:a},zl=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var te=ir(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(te,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(jt){ze(a,a.return,jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)xf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":xf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function Rm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:va(t,a),s&4&&Zs(5,a);break;case 1:if(va(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){ze(a,a.return,S)}else{var c=ir(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){ze(a,a.return,S)}}s&64&&ym(a),s&512&&Ks(a,a.return);break;case 3:if(va(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{lp(t,n)}catch(S){ze(a,a.return,S)}}break;case 27:n===null&&s&4&&bm(a);case 26:case 5:va(t,a),n===null&&s&4&&Em(a),s&512&&Ks(a,a.return);break;case 12:va(t,a);break;case 13:va(t,a),s&4&&Dm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Hv.bind(null,a),ax(t,a))));break;case 22:if(s=a.memoizedState!==null||Gi,!s){n=n!==null&&n.memoizedState!==null||Qe,c=Gi;var f=Qe;Gi=s,(Qe=n)&&!f?xa(t,a,(a.subtreeFlags&8772)!==0):va(t,a),Gi=c,Qe=f}break;case 30:break;default:va(t,a)}}function Cm(t){var n=t.alternate;n!==null&&(t.alternate=null,Cm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&sa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ke=null,Pn=!1;function Vi(t,n,a){for(a=a.child;a!==null;)wm(t,n,a),a=a.sibling}function wm(t,n,a){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(ht,a)}catch{}switch(a.tag){case 26:Qe||xi(a,n),Vi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||xi(a,n);var s=ke,c=Pn;ba(a.type)&&(ke=a.stateNode,Pn=!1),Vi(t,n,a),ro(a.stateNode),ke=s,Pn=c;break;case 5:Qe||xi(a,n);case 6:if(s=ke,c=Pn,ke=null,Vi(t,n,a),ke=s,Pn=c,ke!==null)if(Pn)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(a.stateNode)}catch(f){ze(a,n,f)}else try{ke.removeChild(a.stateNode)}catch(f){ze(a,n,f)}break;case 18:ke!==null&&(Pn?(t=ke,_g(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),po(t)):_g(ke,a.stateNode));break;case 4:s=ke,c=Pn,ke=a.stateNode.containerInfo,Pn=!0,Vi(t,n,a),ke=s,Pn=c;break;case 0:case 11:case 14:case 15:Qe||_a(2,a,n),Qe||_a(4,a,n),Vi(t,n,a);break;case 1:Qe||(xi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Mm(a,n,s)),Vi(t,n,a);break;case 21:Vi(t,n,a);break;case 22:Qe=(s=Qe)||a.memoizedState!==null,Vi(t,n,a),Qe=s;break;default:Vi(t,n,a)}}function Dm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{po(t)}catch(a){ze(n,n.return,a)}}function Lv(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Am),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Am),n;default:throw Error(r(435,t.tag))}}function Wu(t,n){var a=Lv(t);n.forEach(function(s){var c=Gv.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,S=n,E=S;t:for(;E!==null;){switch(E.tag){case 27:if(ba(E.type)){ke=E.stateNode,Pn=!1;break t}break;case 5:ke=E.stateNode,Pn=!1;break t;case 3:case 4:ke=E.stateNode.containerInfo,Pn=!0;break t}E=E.return}if(ke===null)throw Error(r(160));wm(f,S,c),ke=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Um(n,t),n=n.sibling}var li=null;function Um(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),s&4&&(_a(3,t,t.return),Zs(3,t),_a(5,t,t.return));break;case 1:Xn(n,t),Wn(t),s&512&&(Qe||a===null||xi(a,a.return)),s&64&&Gi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=li;if(Xn(n,t),Wn(t),s&512&&(Qe||a===null||xi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ra]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Mn(f,s,a),f[sn]=t,en(f),s=f;break t;case"link":var S=bg("link","href",c).get(s+(a.href||""));if(S){for(var E=0;E<S.length;E++)if(f=S[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(E,1);break e}}f=c.createElement(s),Mn(f,s,a),c.head.appendChild(f);break;case"meta":if(S=bg("meta","content",c).get(s+(a.content||""))){for(E=0;E<S.length;E++)if(f=S[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(E,1);break e}}f=c.createElement(s),Mn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[sn]=t,en(f),s=f}t.stateNode=s}else Ag(c,t.type,t.stateNode);else t.stateNode=Tg(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Ag(c,t.type,t.stateNode):Tg(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Gu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),Wn(t),s&512&&(Qe||a===null||xi(a,a.return)),a!==null&&s&4&&Gu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),s&512&&(Qe||a===null||xi(a,a.return)),t.flags&32){c=t.stateNode;try{gi(c,"")}catch(at){ze(t,t.return,at)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Gu(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Xu=!0);break;case 6:if(Xn(n,t),Wn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(at){ze(t,t.return,at)}}break;case 3:if(Ol=null,c=li,li=Ll(n.containerInfo),Xn(n,t),li=c,Wn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{po(n.containerInfo)}catch(at){ze(t,t.return,at)}Xu&&(Xu=!1,Lm(t));break;case 4:s=li,li=Ll(t.stateNode.containerInfo),Xn(n,t),Wn(t),li=s;break;case 12:Xn(n,t),Wn(t);break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Qu=ne()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Wu(t,s)));break;case 22:c=t.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,J=Gi,ft=Qe;if(Gi=J||c,Qe=ft||P,Xn(n,t),Qe=ft,Gi=J,Wn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Gi||Qe||ar(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{E=P.stateNode;var _t=P.memoizedProps.style,it=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;E.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(at){ze(P,P.return,at)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(at){ze(P,P.return,at)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Wu(t,a))));break;case 19:Xn(n,t),Wn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Wu(t,s)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Tm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Vu(t);xl(t,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(gi(S,""),a.flags&=-33);var E=Vu(t);xl(t,E,S);break;case 3:case 4:var P=a.stateNode.containerInfo,J=Vu(t);ku(t,J,P);break;default:throw Error(r(161))}}catch(ft){ze(t,t.return,ft)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Lm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Lm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function va(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Rm(t,n.alternate,n),n=n.sibling}function ar(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:_a(4,n,n.return),ar(n);break;case 1:xi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Mm(n,n.return,a),ar(n);break;case 27:ro(n.stateNode);case 26:case 5:xi(n,n.return),ar(n);break;case 22:n.memoizedState===null&&ar(n);break;case 30:ar(n);break;default:ar(n)}t=t.sibling}}function xa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:xa(c,f,a),Zs(4,f);break;case 1:if(xa(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){ze(s,s.return,J)}if(s=f,c=s.updateQueue,c!==null){var E=s.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)op(P[c],E)}catch(J){ze(s,s.return,J)}}a&&S&64&&ym(f),Ks(f,f.return);break;case 27:bm(f);case 26:case 5:xa(c,f,a),a&&s===null&&S&4&&Em(f),Ks(f,f.return);break;case 12:xa(c,f,a);break;case 13:xa(c,f,a),a&&S&4&&Dm(c,f);break;case 22:f.memoizedState===null&&xa(c,f,a),Ks(f,f.return);break;case 30:break;default:xa(c,f,a)}n=n.sibling}}function qu(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ps(a))}function Yu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ps(t))}function Si(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Nm(t,n,a,s),n=n.sibling}function Nm(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Si(t,n,a,s),c&2048&&Zs(9,n);break;case 1:Si(t,n,a,s);break;case 3:Si(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ps(t)));break;case 12:if(c&2048){Si(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,E=f.onPostCommit;typeof E=="function"&&E(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){ze(n,n.return,P)}}else Si(t,n,a,s);break;case 13:Si(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Si(t,n,a,s):Qs(t,n):f._visibility&2?Si(t,n,a,s):(f._visibility|=2,Fr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&qu(S,n);break;case 24:Si(t,n,a,s),c&2048&&Yu(n.alternate,n);break;default:Si(t,n,a,s)}}function Fr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,S=n,E=a,P=s,J=S.flags;switch(S.tag){case 0:case 11:case 15:Fr(f,S,E,P,c),Zs(8,S);break;case 23:break;case 22:var ft=S.stateNode;S.memoizedState!==null?ft._visibility&2?Fr(f,S,E,P,c):Qs(f,S):(ft._visibility|=2,Fr(f,S,E,P,c)),c&&J&2048&&qu(S.alternate,S);break;case 24:Fr(f,S,E,P,c),c&&J&2048&&Yu(S.alternate,S);break;default:Fr(f,S,E,P,c)}n=n.sibling}}function Qs(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:Qs(a,s),c&2048&&qu(s.alternate,s);break;case 24:Qs(a,s),c&2048&&Yu(s.alternate,s);break;default:Qs(a,s)}n=n.sibling}}var Js=8192;function Hr(t){if(t.subtreeFlags&Js)for(t=t.child;t!==null;)Om(t),t=t.sibling}function Om(t){switch(t.tag){case 26:Hr(t),t.flags&Js&&t.memoizedState!==null&&_x(li,t.memoizedState,t.memoizedProps);break;case 5:Hr(t);break;case 3:case 4:var n=li;li=Ll(t.stateNode.containerInfo),Hr(t),li=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Js,Js=16777216,Hr(t),Js=n):Hr(t));break;default:Hr(t)}}function Pm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function $s(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,zm(s,t)}Pm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bm(t),t=t.sibling}function Bm(t){switch(t.tag){case 0:case 11:case 15:$s(t),t.flags&2048&&_a(9,t,t.return);break;case 3:$s(t);break;case 12:$s(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Sl(t)):$s(t);break;default:$s(t)}}function Sl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,zm(s,t)}Pm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:_a(8,n,n.return),Sl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Sl(n));break;default:Sl(n)}t=t.sibling}}function zm(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:_a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ps(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,mn=s;else t:for(a=t;mn!==null;){s=mn;var c=s.sibling,f=s.return;if(Cm(s),s===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var Nv={getCacheForType:function(t){var n=bn(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Ov=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Ve=null,de=null,xe=0,Re=0,qn=null,Sa=!1,Gr=!1,ju=!1,ki=0,Ze=0,ya=0,rr=0,Zu=0,ni=0,Vr=0,to=null,Bn=null,Ku=!1,Qu=0,yl=1/0,Ml=null,Ma=null,yn=0,Ea=null,kr=null,Xr=0,Ju=0,$u=null,Im=null,eo=0,tf=null;function Yn(){if((Ae&2)!==0&&xe!==0)return xe&-xe;if(O.T!==null){var t=Ur;return t!==0?t:lf()}return ye()}function Fm(){ni===0&&(ni=(xe&536870912)===0||be?k():536870912);var t=ei.current;return t!==null&&(t.flags|=32),ni}function jn(t,n,a){(t===Ve&&(Re===2||Re===9)||t.cancelPendingCommit!==null)&&(Wr(t,0),Ta(t,xe,ni,!1)),gt(t,a),((Ae&2)===0||t!==Ve)&&(t===Ve&&((Ae&2)===0&&(rr|=a),Ze===4&&Ta(t,xe,ni,!1)),yi(t))}function Hm(t,n,a){if((Ae&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||ee(t,n),c=s?zv(t,n):af(t,n,!0),f=s;do{if(c===0){Gr&&!s&&Ta(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Pv(a)){c=af(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var E=t;c=to;var P=E.current.memoizedState.isDehydrated;if(P&&(Wr(E,S).flags|=256),S=af(E,S,!1),S!==2){if(ju&&!P){E.errorRecoveryDisabledLanes|=f,rr|=f,c=4;break t}f=Bn,Bn=c,f!==null&&(Bn===null?Bn=f:Bn.push.apply(Bn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){Wr(t,0),Ta(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ta(s,n,ni,!Sa);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Qu+300-ne(),10<c)){if(Ta(s,n,ni,!Sa),le(s,0,!0)!==0)break t;s.timeoutHandle=mg(Gm.bind(null,s,a,Bn,Ml,Ku,n,ni,rr,Vr,Sa,f,2,-0,0),c);break t}Gm(s,a,Bn,Ml,Ku,n,ni,rr,Vr,Sa,f,0,-0,0)}}break}while(!0);yi(t)}function Gm(t,n,a,s,c,f,S,E,P,J,ft,_t,it,at){if(t.timeoutHandle=-1,_t=n.subtreeFlags,(_t&8192||(_t&16785408)===16785408)&&(lo={stylesheets:null,count:0,unsuspend:gx},Om(n),_t=vx(),_t!==null)){t.cancelPendingCommit=_t(jm.bind(null,t,n,f,a,s,c,S,E,P,ft,1,it,at)),Ta(t,f,S,!J);return}jm(t,n,f,a,s,c,S,E,P)}function Pv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Vn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(t,n,a,s){n&=~Zu,n&=~rr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Ht(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&Nt(t,a,n)}function El(){return(Ae&6)===0?(no(0),!1):!0}function ef(){if(de!==null){if(Re===0)var t=de.return;else t=de,Pi=$a=null,vu(t),zr=null,qs=0,t=de;for(;t!==null;)Sm(t.alternate,t),t=t.return;de=null}}function Wr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,$v(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ef(),Ve=t,de=a=Li(t.current,null),xe=n,Re=0,qn=null,Sa=!1,Gr=ee(t,n),ju=!1,Vr=ni=Zu=rr=ya=Ze=0,Bn=to=null,Ku=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Ht(s),f=1<<c;n|=t[c],s&=~f}return ki=n,Wo(),a}function Vm(t,n){ce=null,O.H=ul,n===zs||n===tl?(n=rp(),Re=3):n===np?(n=rp(),Re=4):Re=n===sm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,de===null&&(Ze=1,ml(t,Qn(n,t.current)))}function km(){var t=O.H;return O.H=ul,t===null?ul:t}function Xm(){var t=O.A;return O.A=Nv,t}function nf(){Ze=4,Sa||(xe&4194048)!==xe&&ei.current!==null||(Gr=!0),(ya&134217727)===0&&(rr&134217727)===0||Ve===null||Ta(Ve,xe,ni,!1)}function af(t,n,a){var s=Ae;Ae|=2;var c=km(),f=Xm();(Ve!==t||xe!==n)&&(Ml=null,Wr(t,n)),n=!1;var S=Ze;t:do try{if(Re!==0&&de!==null){var E=de,P=qn;switch(Re){case 8:ef(),S=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var J=Re;if(Re=0,qn=null,qr(t,E,P,J),a&&Gr){S=0;break t}break;default:J=Re,Re=0,qn=null,qr(t,E,P,J)}}Bv(),S=Ze;break}catch(ft){Vm(t,ft)}while(!0);return n&&t.shellSuspendCounter++,Pi=$a=null,Ae=s,O.H=c,O.A=f,de===null&&(Ve=null,xe=0,Wo()),S}function Bv(){for(;de!==null;)Wm(de)}function zv(t,n){var a=Ae;Ae|=2;var s=km(),c=Xm();Ve!==t||xe!==n?(Ml=null,yl=ne()+500,Wr(t,n)):Gr=ee(t,n);t:do try{if(Re!==0&&de!==null){n=de;var f=qn;e:switch(Re){case 1:Re=0,qn=null,qr(t,n,f,1);break;case 2:case 9:if(ip(f)){Re=0,qn=null,qm(n);break}n=function(){Re!==2&&Re!==9||Ve!==t||(Re=7),yi(t)},f.then(n,n);break t;case 3:Re=7;break t;case 4:Re=5;break t;case 7:ip(f)?(Re=0,qn=null,qm(n)):(Re=0,qn=null,qr(t,n,f,7));break;case 5:var S=null;switch(de.tag){case 26:S=de.memoizedState;case 5:case 27:var E=de;if(!S||Rg(S)){Re=0,qn=null;var P=E.sibling;if(P!==null)de=P;else{var J=E.return;J!==null?(de=J,Tl(J)):de=null}break e}}Re=0,qn=null,qr(t,n,f,5);break;case 6:Re=0,qn=null,qr(t,n,f,6);break;case 8:ef(),Ze=6;break t;default:throw Error(r(462))}}Iv();break}catch(ft){Vm(t,ft)}while(!0);return Pi=$a=null,O.H=s,O.A=c,Ae=a,de!==null?0:(Ve=null,xe=0,Wo(),Ze)}function Iv(){for(;de!==null&&!Un();)Wm(de)}function Wm(t){var n=vm(t.alternate,t,ki);t.memoizedProps=t.pendingProps,n===null?Tl(t):de=n}function qm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=hm(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=hm(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:vu(n);default:Sm(a,n),n=de=Yd(n,ki),n=vm(a,n,ki)}t.memoizedProps=t.pendingProps,n===null?Tl(t):de=n}function qr(t,n,a,s){Pi=$a=null,vu(n),zr=null,qs=0;var c=n.return;try{if(Rv(t,c,n,a,xe)){Ze=1,ml(t,Qn(a,t.current)),de=null;return}}catch(f){if(c!==null)throw de=c,f;Ze=1,ml(t,Qn(a,t.current)),de=null;return}n.flags&32768?(be||s===1?t=!0:Gr||(xe&536870912)!==0?t=!1:(Sa=t=!0,(s===2||s===9||s===3||s===6)&&(s=ei.current,s!==null&&s.tag===13&&(s.flags|=16384))),Ym(n,t)):Tl(n)}function Tl(t){var n=t;do{if((n.flags&32768)!==0){Ym(n,Sa);return}t=n.return;var a=wv(n.alternate,n,ki);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=t}while(n!==null);Ze===0&&(Ze=5)}function Ym(t,n){do{var a=Dv(t.alternate,t);if(a!==null){a.flags&=32767,de=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){de=t;return}de=t=a}while(t!==null);Ze=6,de=null}function jm(t,n,a,s,c,f,S,E,P){t.cancelPendingCommit=null;do bl();while(yn!==0);if((Ae&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Yc,Bt(t,a,f,S,E,P),t===Ve&&(de=Ve=null,xe=0),kr=n,Ea=t,Xr=a,Ju=f,$u=c,Im=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Vv(L,function(){return $m(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,c=Y.p,Y.p=2,S=Ae,Ae|=4;try{Uv(t,n,a)}finally{Ae=S,Y.p=c,O.T=s}}yn=1,Zm(),Km(),Qm()}}function Zm(){if(yn===1){yn=0;var t=Ea,n=kr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=Y.p;Y.p=2;var c=Ae;Ae|=4;try{Um(n,t);var f=gf,S=zd(t.containerInfo),E=f.focusedElem,P=f.selectionRange;if(S!==E&&E&&E.ownerDocument&&Bd(E.ownerDocument.documentElement,E)){if(P!==null&&Vc(E)){var J=P.start,ft=P.end;if(ft===void 0&&(ft=J),"selectionStart"in E)E.selectionStart=J,E.selectionEnd=Math.min(ft,E.value.length);else{var _t=E.ownerDocument||document,it=_t&&_t.defaultView||window;if(it.getSelection){var at=it.getSelection(),te=E.textContent.length,jt=Math.min(P.start,te),Ne=P.end===void 0?jt:Math.min(P.end,te);!at.extend&&jt>Ne&&(S=Ne,Ne=jt,jt=S);var X=Pd(E,jt),V=Pd(E,Ne);if(X&&V&&(at.rangeCount!==1||at.anchorNode!==X.node||at.anchorOffset!==X.offset||at.focusNode!==V.node||at.focusOffset!==V.offset)){var K=_t.createRange();K.setStart(X.node,X.offset),at.removeAllRanges(),jt>Ne?(at.addRange(K),at.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),at.addRange(K))}}}}for(_t=[],at=E;at=at.parentNode;)at.nodeType===1&&_t.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<_t.length;E++){var dt=_t[E];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}zl=!!mf,gf=mf=null}finally{Ae=c,Y.p=s,O.T=a}}t.current=n,yn=2}}function Km(){if(yn===2){yn=0;var t=Ea,n=kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=Y.p;Y.p=2;var c=Ae;Ae|=4;try{Rm(t,n.alternate,n)}finally{Ae=c,Y.p=s,O.T=a}}yn=3}}function Qm(){if(yn===4||yn===3){yn=0,me();var t=Ea,n=kr,a=Xr,s=Im;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?yn=5:(yn=0,kr=Ea=null,Jm(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ma=null),tn(a),n=n.stateNode,Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(ht,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,c=Y.p,Y.p=2,O.T=null;try{for(var f=t.onRecoverableError,S=0;S<s.length;S++){var E=s[S];f(E.value,{componentStack:E.stack})}}finally{O.T=n,Y.p=c}}(Xr&3)!==0&&bl(),yi(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===tf?eo++:(eo=0,tf=t):eo=0,no(0)}}function Jm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ps(n)))}function bl(t){return Zm(),Km(),Qm(),$m()}function $m(){if(yn!==5)return!1;var t=Ea,n=Ju;Ju=0;var a=tn(Xr),s=O.T,c=Y.p;try{Y.p=32>a?32:a,O.T=null,a=$u,$u=null;var f=Ea,S=Xr;if(yn=0,kr=Ea=null,Xr=0,(Ae&6)!==0)throw Error(r(331));var E=Ae;if(Ae|=4,Bm(f.current),Nm(f,f.current,S,a),Ae=E,no(0,!1),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(ht,f)}catch{}return!0}finally{Y.p=c,O.T=s,Jm(t,n)}}function tg(t,n,a){n=Qn(a,n),n=Lu(t.stateNode,n,2),t=da(t,n,2),t!==null&&(gt(t,2),yi(t))}function ze(t,n,a){if(t.tag===3)tg(t,t,a);else for(;n!==null;){if(n.tag===3){tg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ma===null||!Ma.has(s))){t=Qn(a,t),a=am(2),s=da(n,a,2),s!==null&&(rm(a,s,n,t),gt(s,2),yi(s));break}}n=n.return}}function rf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Ov;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(ju=!0,c.add(a),t=Fv.bind(null,t,n,a),n.then(t,t))}function Fv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ve===t&&(xe&a)===a&&(Ze===4||Ze===3&&(xe&62914560)===xe&&300>ne()-Qu?(Ae&2)===0&&Wr(t,0):Zu|=a,Vr===xe&&(Vr=0)),yi(t)}function eg(t,n){n===0&&(n=Lt()),t=Rr(t,n),t!==null&&(gt(t,n),yi(t))}function Hv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),eg(t,a)}function Gv(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),eg(t,a)}function Vv(t,n){return ue(t,n)}var Al=null,Yr=null,sf=!1,Rl=!1,of=!1,sr=0;function yi(t){t!==Yr&&t.next===null&&(Yr===null?Al=Yr=t:Yr=Yr.next=t),Rl=!0,sf||(sf=!0,Xv())}function no(t,n){if(!of&&Rl){of=!0;do for(var a=!1,s=Al;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Ht(42|t)+1)-1,f&=c&~(S&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,rg(s,f))}else f=xe,f=le(s,s===Ve?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||ee(s,f)||(a=!0,rg(s,f));s=s.next}while(a);of=!1}}function kv(){ng()}function ng(){Rl=sf=!1;var t=0;sr!==0&&(Jv()&&(t=sr),sr=0);for(var n=ne(),a=null,s=Al;s!==null;){var c=s.next,f=ig(s,n);f===0?(s.next=null,a===null?Al=c:a.next=c,c===null&&(Yr=a)):(a=s,(t!==0||(f&3)!==0)&&(Rl=!0)),s=c}no(t)}function ig(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-Ht(f),E=1<<S,P=c[S];P===-1?((E&a)===0||(E&s)!==0)&&(c[S]=De(E,n)):P<=n&&(t.expiredLanes|=E),f&=~E}if(n=Ve,a=xe,a=le(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Re===2||Re===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&H(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||ee(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&H(s),tn(a)){case 2:case 8:a=Gt;break;case 32:a=L;break;case 268435456:a=nt;break;default:a=L}return s=ag.bind(null,t),a=ue(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&H(s),t.callbackPriority=2,t.callbackNode=null,2}function ag(t,n){if(yn!==0&&yn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(bl()&&t.callbackNode!==a)return null;var s=xe;return s=le(t,t===Ve?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Hm(t,s,n),ig(t,ne()),t.callbackNode!=null&&t.callbackNode===a?ag.bind(null,t):null)}function rg(t,n){if(bl())return null;Hm(t,n,!0)}function Xv(){tx(function(){(Ae&6)!==0?ue(we,kv):ng()})}function lf(){return sr===0&&(sr=k()),sr}function sg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Io(""+t)}function og(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Wv(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=sg((c[vn]||null).action),S=s.submitter;S&&(n=(n=S[vn]||null)?sg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var E=new Vo("action","action",null,s,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(sr!==0){var P=S?og(c,S):new FormData(c);Ru(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(E.preventDefault(),P=S?og(c,S):new FormData(c),Ru(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var cf=0;cf<qc.length;cf++){var uf=qc[cf],qv=uf.toLowerCase(),Yv=uf[0].toUpperCase()+uf.slice(1);oi(qv,"on"+Yv)}oi(Hd,"onAnimationEnd"),oi(Gd,"onAnimationIteration"),oi(Vd,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(uv,"onTransitionRun"),oi(fv,"onTransitionStart"),oi(hv,"onTransitionCancel"),oi(kd,"onTransitionEnd"),A("onMouseEnter",["mouseout","mouseover"]),A("onMouseLeave",["mouseout","mouseover"]),A("onPointerEnter",["pointerout","pointerover"]),A("onPointerLeave",["pointerout","pointerover"]),Ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ci("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(io));function lg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var E=s[S],P=E.instance,J=E.currentTarget;if(E=E.listener,P!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=J;try{f(c)}catch(ft){pl(ft)}c.currentTarget=null,f=P}else for(S=0;S<s.length;S++){if(E=s[S],P=E.instance,J=E.currentTarget,E=E.listener,P!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=J;try{f(c)}catch(ft){pl(ft)}c.currentTarget=null,f=P}}}}function pe(t,n){var a=n[Va];a===void 0&&(a=n[Va]=new Set);var s=t+"__bubble";a.has(s)||(cg(n,t,2,!1),a.add(s))}function ff(t,n,a){var s=0;n&&(s|=4),cg(a,t,s,n)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function hf(t){if(!t[Cl]){t[Cl]=!0,Bo.forEach(function(a){a!=="selectionchange"&&(jv.has(a)||ff(a,!1,t),ff(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Cl]||(n[Cl]=!0,ff("selectionchange",!1,n))}}function cg(t,n,a,s){switch(Ng(n)){case 2:var c=yx;break;case 8:c=Mx;break;default:c=Af}a=c.bind(null,n,a,t),c=void 0,!Nc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function df(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var E=s.stateNode.containerInfo;if(E===c)break;if(S===4)for(S=s.return;S!==null;){var P=S.tag;if((P===3||P===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;E!==null;){if(S=Ai(E),S===null)return;if(P=S.tag,P===5||P===6||P===26||P===27){s=f=S;continue t}E=E.parentNode}}s=s.return}gd(function(){var J=f,ft=Uc(a),_t=[];t:{var it=Xd.get(t);if(it!==void 0){var at=Vo,te=t;switch(t){case"keypress":if(Ho(a)===0)break t;case"keydown":case"keyup":at=V0;break;case"focusin":te="focus",at=zc;break;case"focusout":te="blur",at=zc;break;case"beforeblur":case"afterblur":at=zc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=D0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=W0;break;case Hd:case Gd:case Vd:at=N0;break;case kd:at=Y0;break;case"scroll":case"scrollend":at=C0;break;case"wheel":at=Z0;break;case"copy":case"cut":case"paste":at=P0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=yd;break;case"toggle":case"beforetoggle":at=Q0}var jt=(n&4)!==0,Ne=!jt&&(t==="scroll"||t==="scrollend"),X=jt?it!==null?it+"Capture":null:it;jt=[];for(var V=J,K;V!==null;){var dt=V;if(K=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||K===null||X===null||(dt=Ms(V,X),dt!=null&&jt.push(ao(V,dt,K))),Ne)break;V=V.return}0<jt.length&&(it=new at(it,te,null,a,ft),_t.push({event:it,listeners:jt}))}}if((n&7)===0){t:{if(it=t==="mouseover"||t==="pointerover",at=t==="mouseout"||t==="pointerout",it&&a!==Dc&&(te=a.relatedTarget||a.fromElement)&&(Ai(te)||te[Ln]))break t;if((at||it)&&(it=ft.window===ft?ft:(it=ft.ownerDocument)?it.defaultView||it.parentWindow:window,at?(te=a.relatedTarget||a.toElement,at=J,te=te?Ai(te):null,te!==null&&(Ne=u(te),jt=te.tag,te!==Ne||jt!==5&&jt!==27&&jt!==6)&&(te=null)):(at=null,te=J),at!==te)){if(jt=xd,dt="onMouseLeave",X="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(jt=yd,dt="onPointerLeave",X="onPointerEnter",V="pointer"),Ne=at==null?it:Xa(at),K=te==null?it:Xa(te),it=new jt(dt,V+"leave",at,a,ft),it.target=Ne,it.relatedTarget=K,dt=null,Ai(ft)===J&&(jt=new jt(X,V+"enter",te,a,ft),jt.target=K,jt.relatedTarget=Ne,dt=jt),Ne=dt,at&&te)e:{for(jt=at,X=te,V=0,K=jt;K;K=jr(K))V++;for(K=0,dt=X;dt;dt=jr(dt))K++;for(;0<V-K;)jt=jr(jt),V--;for(;0<K-V;)X=jr(X),K--;for(;V--;){if(jt===X||X!==null&&jt===X.alternate)break e;jt=jr(jt),X=jr(X)}jt=null}else jt=null;at!==null&&ug(_t,it,at,jt,!1),te!==null&&Ne!==null&&ug(_t,Ne,te,jt,!0)}}t:{if(it=J?Xa(J):window,at=it.nodeName&&it.nodeName.toLowerCase(),at==="select"||at==="input"&&it.type==="file")var Ft=wd;else if(Rd(it))if(Dd)Ft=ov;else{Ft=rv;var fe=av}else at=it.nodeName,!at||at.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?J&&wc(J.elementType)&&(Ft=wd):Ft=sv;if(Ft&&(Ft=Ft(t,J))){Cd(_t,Ft,a,ft);break t}fe&&fe(t,it,J),t==="focusout"&&J&&it.type==="number"&&J.memoizedProps.value!=null&&Tn(it,"number",it.value)}switch(fe=J?Xa(J):window,t){case"focusin":(Rd(fe)||fe.contentEditable==="true")&&(Tr=fe,kc=J,Ds=null);break;case"focusout":Ds=kc=Tr=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,Id(_t,a,ft);break;case"selectionchange":if(cv)break;case"keydown":case"keyup":Id(_t,a,ft)}var Vt;if(Fc)t:{switch(t){case"compositionstart":var Qt="onCompositionStart";break t;case"compositionend":Qt="onCompositionEnd";break t;case"compositionupdate":Qt="onCompositionUpdate";break t}Qt=void 0}else Er?bd(t,a)&&(Qt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Qt="onCompositionStart");Qt&&(Md&&a.locale!=="ko"&&(Er||Qt!=="onCompositionStart"?Qt==="onCompositionEnd"&&Er&&(Vt=_d()):(ca=ft,Oc="value"in ca?ca.value:ca.textContent,Er=!0)),fe=wl(J,Qt),0<fe.length&&(Qt=new Sd(Qt,t,null,a,ft),_t.push({event:Qt,listeners:fe}),Vt?Qt.data=Vt:(Vt=Ad(a),Vt!==null&&(Qt.data=Vt)))),(Vt=$0?tv(t,a):ev(t,a))&&(Qt=wl(J,"onBeforeInput"),0<Qt.length&&(fe=new Sd("onBeforeInput","beforeinput",null,a,ft),_t.push({event:fe,listeners:Qt}),fe.data=Vt)),Wv(_t,t,J,a,ft)}lg(_t,n)})}function ao(t,n,a){return{instance:t,listener:n,currentTarget:a}}function wl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ms(t,a),c!=null&&s.unshift(ao(t,c,f)),c=Ms(t,n),c!=null&&s.push(ao(t,c,f))),t.tag===3)return s;t=t.return}return[]}function jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ug(t,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var E=a,P=E.alternate,J=E.stateNode;if(E=E.tag,P!==null&&P===s)break;E!==5&&E!==26&&E!==27||J===null||(P=J,c?(J=Ms(a,f),J!=null&&S.unshift(ao(a,J,P))):c||(J=Ms(a,f),J!=null&&S.push(ao(a,J,P)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var Zv=/\r\n?/g,Kv=/\u0000|\uFFFD/g;function fg(t){return(typeof t=="string"?t:""+t).replace(Zv,`
`).replace(Kv,"")}function hg(t,n){return n=fg(n),fg(t)===n}function Dl(){}function Le(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||gi(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&gi(t,""+s);break;case"className":Ct(t,"class",s);break;case"tabIndex":Ct(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ct(t,a,s);break;case"style":pd(t,s,f);break;case"data":if(n!=="object"){Ct(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Io(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Le(t,n,"name",c.name,c,null),Le(t,n,"formEncType",c.formEncType,c,null),Le(t,n,"formMethod",c.formMethod,c,null),Le(t,n,"formTarget",c.formTarget,c,null)):(Le(t,n,"encType",c.encType,c,null),Le(t,n,"method",c.method,c,null),Le(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Io(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Dl);break;case"onScroll":s!=null&&pe("scroll",t);break;case"onScrollEnd":s!=null&&pe("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Io(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":pe("beforetoggle",t),pe("toggle",t),Tt(t,"popover",s);break;case"xlinkActuate":wt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":wt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":wt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":wt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":wt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":wt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":wt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":wt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":wt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Tt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=A0.get(a)||a,Tt(t,a,s))}}function pf(t,n,a,s,c,f){switch(a){case"style":pd(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?gi(t,s):(typeof s=="number"||typeof s=="bigint")&&gi(t,""+s);break;case"onScroll":s!=null&&pe("scroll",t);break;case"onScrollEnd":s!=null&&pe("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Dl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Tt(t,a,s)}}}function Mn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",t),pe("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Le(t,n,f,S,a,null)}}c&&Le(t,n,"srcSet",a.srcSet,a,null),s&&Le(t,n,"src",a.src,a,null);return;case"input":pe("invalid",t);var E=f=S=c=null,P=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var ft=a[s];if(ft!=null)switch(s){case"name":c=ft;break;case"type":S=ft;break;case"checked":P=ft;break;case"defaultChecked":J=ft;break;case"value":f=ft;break;case"defaultValue":E=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Le(t,n,s,ft,a,null)}}Be(t,f,E,P,J,S,c,!1),Ye(t);return;case"select":pe("invalid",t),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":S=E;break;case"multiple":s=E;default:Le(t,n,c,E,a,null)}n=f,a=S,t.multiple=!!s,n!=null?on(t,!!s,n,!1):a!=null&&on(t,!!s,a,!0);return;case"textarea":pe("invalid",t),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(E=a[S],E!=null))switch(S){case"value":s=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Le(t,n,S,E,a,null)}xn(t,s,c,f),Ye(t);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(s=a[P],s!=null))switch(P){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Le(t,n,P,s,a,null)}return;case"dialog":pe("beforetoggle",t),pe("toggle",t),pe("cancel",t),pe("close",t);break;case"iframe":case"object":pe("load",t);break;case"video":case"audio":for(s=0;s<io.length;s++)pe(io[s],t);break;case"image":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"embed":case"source":case"link":pe("error",t),pe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Le(t,n,J,s,a,null)}return;default:if(wc(n)){for(ft in a)a.hasOwnProperty(ft)&&(s=a[ft],s!==void 0&&pf(t,n,ft,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Le(t,n,E,s,a,null))}function Qv(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,E=null,P=null,J=null,ft=null;for(at in a){var _t=a[at];if(a.hasOwnProperty(at)&&_t!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":P=_t;default:s.hasOwnProperty(at)||Le(t,n,at,null,s,_t)}}for(var it in s){var at=s[it];if(_t=a[it],s.hasOwnProperty(it)&&(at!=null||_t!=null))switch(it){case"type":f=at;break;case"name":c=at;break;case"checked":J=at;break;case"defaultChecked":ft=at;break;case"value":S=at;break;case"defaultValue":E=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:at!==_t&&Le(t,n,it,at,s,_t)}}wi(t,S,E,P,J,ft,f,c);return;case"select":at=S=E=it=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":at=P;default:s.hasOwnProperty(f)||Le(t,n,f,null,s,P)}for(c in s)if(f=s[c],P=a[c],s.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":it=f;break;case"defaultValue":E=f;break;case"multiple":S=f;default:f!==P&&Le(t,n,c,f,s,P)}n=E,a=S,s=at,it!=null?on(t,!!a,it,!1):!!s!=!!a&&(n!=null?on(t,!!a,n,!0):on(t,!!a,a?[]:"",!1));return;case"textarea":at=it=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Le(t,n,E,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":it=c;break;case"defaultValue":at=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Le(t,n,S,c,s,f)}dn(t,it,at);return;case"option":for(var te in a)if(it=a[te],a.hasOwnProperty(te)&&it!=null&&!s.hasOwnProperty(te))switch(te){case"selected":t.selected=!1;break;default:Le(t,n,te,null,s,it)}for(P in s)if(it=s[P],at=a[P],s.hasOwnProperty(P)&&it!==at&&(it!=null||at!=null))switch(P){case"selected":t.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Le(t,n,P,it,s,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var jt in a)it=a[jt],a.hasOwnProperty(jt)&&it!=null&&!s.hasOwnProperty(jt)&&Le(t,n,jt,null,s,it);for(J in s)if(it=s[J],at=a[J],s.hasOwnProperty(J)&&it!==at&&(it!=null||at!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Le(t,n,J,it,s,at)}return;default:if(wc(n)){for(var Ne in a)it=a[Ne],a.hasOwnProperty(Ne)&&it!==void 0&&!s.hasOwnProperty(Ne)&&pf(t,n,Ne,void 0,s,it);for(ft in s)it=s[ft],at=a[ft],!s.hasOwnProperty(ft)||it===at||it===void 0&&at===void 0||pf(t,n,ft,it,s,at);return}}for(var X in a)it=a[X],a.hasOwnProperty(X)&&it!=null&&!s.hasOwnProperty(X)&&Le(t,n,X,null,s,it);for(_t in s)it=s[_t],at=a[_t],!s.hasOwnProperty(_t)||it===at||it==null&&at==null||Le(t,n,_t,it,s,at)}var mf=null,gf=null;function Ul(t){return t.nodeType===9?t:t.ownerDocument}function dg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function pg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function _f(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var vf=null;function Jv(){var t=window.event;return t&&t.type==="popstate"?t===vf?!1:(vf=t,!0):(vf=null,!1)}var mg=typeof setTimeout=="function"?setTimeout:void 0,$v=typeof clearTimeout=="function"?clearTimeout:void 0,gg=typeof Promise=="function"?Promise:void 0,tx=typeof queueMicrotask=="function"?queueMicrotask:typeof gg<"u"?function(t){return gg.resolve(null).then(t).catch(ex)}:mg;function ex(t){setTimeout(function(){throw t})}function ba(t){return t==="head"}function _g(t,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var S=t.ownerDocument;if(a&1&&ro(S.documentElement),a&2&&ro(S.body),a&4)for(a=S.head,ro(a),S=a.firstChild;S;){var E=S.nextSibling,P=S.nodeName;S[ra]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=E}}if(c===0){t.removeChild(f),po(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);po(n)}function xf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":xf(a),sa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function nx(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ra])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ci(t.nextSibling),t===null)break}return null}function ix(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ci(t.nextSibling),t===null))return null;return t}function Sf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function ax(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var yf=null;function vg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function xg(t,n,a){switch(n=Ul(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function ro(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);sa(t)}var ii=new Map,Sg=new Set;function Ll(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Xi=Y.d;Y.d={f:rx,r:sx,D:ox,C:lx,L:cx,m:ux,X:hx,S:fx,M:dx};function rx(){var t=Xi.f(),n=El();return t||n}function sx(t){var n=Ri(t);n!==null&&n.tag===5&&n.type==="form"?Hp(n):Xi.r(t)}var Zr=typeof document>"u"?null:document;function yg(t,n,a){var s=Zr;if(s&&typeof n=="string"&&n){var c=Ge(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Sg.has(c)||(Sg.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Mn(n,"link",t),en(n),s.head.appendChild(n)))}}function ox(t){Xi.D(t),yg("dns-prefetch",t,null)}function lx(t,n){Xi.C(t,n),yg("preconnect",t,n)}function cx(t,n,a){Xi.L(t,n,a);var s=Zr;if(s&&t&&n){var c='link[rel="preload"][as="'+Ge(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ge(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ge(a.imageSizes)+'"]')):c+='[href="'+Ge(t)+'"]';var f=c;switch(n){case"style":f=Kr(t);break;case"script":f=Qr(t)}ii.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ii.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(so(f))||n==="script"&&s.querySelector(oo(f))||(n=s.createElement("link"),Mn(n,"link",t),en(n),s.head.appendChild(n)))}}function ux(t,n){Xi.m(t,n);var a=Zr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ge(s)+'"][href="'+Ge(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Qr(t)}if(!ii.has(f)&&(t=g({rel:"modulepreload",href:t},n),ii.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(oo(f)))return}s=a.createElement("link"),Mn(s,"link",t),en(s),a.head.appendChild(s)}}}function fx(t,n,a){Xi.S(t,n,a);var s=Zr;if(s&&t){var c=oa(s).hoistableStyles,f=Kr(t);n=n||"default";var S=c.get(f);if(!S){var E={loading:0,preload:null};if(S=s.querySelector(so(f)))E.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ii.get(f))&&Mf(t,a);var P=S=s.createElement("link");en(P),Mn(P,"link",t),P._p=new Promise(function(J,ft){P.onload=J,P.onerror=ft}),P.addEventListener("load",function(){E.loading|=1}),P.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Nl(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:E},c.set(f,S)}}}function hx(t,n){Xi.X(t,n);var a=Zr;if(a&&t){var s=oa(a).hoistableScripts,c=Qr(t),f=s.get(c);f||(f=a.querySelector(oo(c)),f||(t=g({src:t,async:!0},n),(n=ii.get(c))&&Ef(t,n),f=a.createElement("script"),en(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function dx(t,n){Xi.M(t,n);var a=Zr;if(a&&t){var s=oa(a).hoistableScripts,c=Qr(t),f=s.get(c);f||(f=a.querySelector(oo(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ii.get(c))&&Ef(t,n),f=a.createElement("script"),en(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Mg(t,n,a,s){var c=(c=xt.current)?Ll(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Kr(a.href),a=oa(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Kr(a.href);var f=oa(c).hoistableStyles,S=f.get(t);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=c.querySelector(so(t)))&&!f._p&&(S.instance=f,S.state.loading=5),ii.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ii.set(t,a),f||px(c,t,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Qr(a),a=oa(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Kr(t){return'href="'+Ge(t)+'"'}function so(t){return'link[rel="stylesheet"]['+t+"]"}function Eg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function px(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Mn(n,"link",a),en(n),t.head.appendChild(n))}function Qr(t){return'[src="'+Ge(t)+'"]'}function oo(t){return"script[async]"+t}function Tg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Ge(a.href)+'"]');if(s)return n.instance=s,en(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),en(s),Mn(s,"style",c),Nl(s,a.precedence,t),n.instance=s;case"stylesheet":c=Kr(a.href);var f=t.querySelector(so(c));if(f)return n.state.loading|=4,n.instance=f,en(f),f;s=Eg(a),(c=ii.get(c))&&Mf(s,c),f=(t.ownerDocument||t).createElement("link"),en(f);var S=f;return S._p=new Promise(function(E,P){S.onload=E,S.onerror=P}),Mn(f,"link",s),n.state.loading|=4,Nl(f,a.precedence,t),n.instance=f;case"script":return f=Qr(a.src),(c=t.querySelector(oo(f)))?(n.instance=c,en(c),c):(s=a,(c=ii.get(f))&&(s=g({},a),Ef(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),en(c),Mn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Nl(s,a.precedence,t));return n.instance}function Nl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var E=s[S];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Mf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ef(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ol=null;function bg(t,n,a){if(Ol===null){var s=new Map,c=Ol=new Map;c.set(a,s)}else c=Ol,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[ra]||f[sn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var E=s.get(S);E?E.push(f):s.set(S,[f])}}return s}function Ag(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function mx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Rg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var lo=null;function gx(){}function _x(t,n,a){if(lo===null)throw Error(r(475));var s=lo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Kr(a.href),f=t.querySelector(so(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Pl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,en(f);return}f=t.ownerDocument||t,a=Eg(a),(c=ii.get(c))&&Mf(a,c),f=f.createElement("link"),en(f);var S=f;S._p=new Promise(function(E,P){S.onload=E,S.onerror=P}),Mn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Pl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function vx(){if(lo===null)throw Error(r(475));var t=lo;return t.stylesheets&&t.count===0&&Tf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Tf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Pl(){if(this.count--,this.count===0){if(this.stylesheets)Tf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Bl=null;function Tf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Bl=new Map,n.forEach(xx,t),Bl=null,Pl.call(t))}function xx(t,n){if(!(n.state.loading&4)){var a=Bl.get(t);if(a)var s=a.get(null);else{a=new Map,Bl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=Pl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var co={$$typeof:N,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Sx(t,n,a,s,c,f,S,E){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ct(0),this.hiddenUpdates=ct(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Cg(t,n,a,s,c,f,S,E,P,J,ft,_t){return t=new Sx(t,n,a,S,E,P,J,_t),n=1,f===!0&&(n|=24),f=kn(3,null,null,n),t.current=f,f.stateNode=t,n=au(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},lu(f),t}function wg(t){return t?(t=Cr,t):Cr}function Dg(t,n,a,s,c,f){c=wg(c),s.context===null?s.context=c:s.pendingContext=c,s=ha(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=da(t,s,n),a!==null&&(jn(a,t,n),Fs(a,t,n))}function Ug(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function bf(t,n){Ug(t,n),(t=t.alternate)&&Ug(t,n)}function Lg(t){if(t.tag===13){var n=Rr(t,67108864);n!==null&&jn(n,t,67108864),bf(t,67108864)}}var zl=!0;function yx(t,n,a,s){var c=O.T;O.T=null;var f=Y.p;try{Y.p=2,Af(t,n,a,s)}finally{Y.p=f,O.T=c}}function Mx(t,n,a,s){var c=O.T;O.T=null;var f=Y.p;try{Y.p=8,Af(t,n,a,s)}finally{Y.p=f,O.T=c}}function Af(t,n,a,s){if(zl){var c=Rf(s);if(c===null)df(t,n,s,Il,a),Og(t,s);else if(Tx(c,t,n,a,s))s.stopPropagation();else if(Og(t,s),n&4&&-1<Ex.indexOf(t)){for(;c!==null;){var f=Ri(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Pt(f.pendingLanes);if(S!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;S;){var P=1<<31-Ht(S);E.entanglements[1]|=P,S&=~P}yi(f),(Ae&6)===0&&(yl=ne()+500,no(0))}}break;case 13:E=Rr(f,2),E!==null&&jn(E,f,2),El(),bf(f,2)}if(f=Rf(s),f===null&&df(t,n,s,Il,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else df(t,n,s,null,a)}}function Rf(t){return t=Uc(t),Cf(t)}var Il=null;function Cf(t){if(Il=null,t=Ai(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Il=t,null}function Ng(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xt()){case we:return 2;case Gt:return 8;case L:case T:return 32;case nt:return 268435456;default:return 32}default:return 32}}var wf=!1,Aa=null,Ra=null,Ca=null,uo=new Map,fo=new Map,wa=[],Ex="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Og(t,n){switch(t){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(n.pointerId)}}function ho(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ri(n),n!==null&&Lg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Tx(t,n,a,s,c){switch(n){case"focusin":return Aa=ho(Aa,t,n,a,s,c),!0;case"dragenter":return Ra=ho(Ra,t,n,a,s,c),!0;case"mouseover":return Ca=ho(Ca,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return uo.set(f,ho(uo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,fo.set(f,ho(fo.get(f)||null,t,n,a,s,c)),!0}return!1}function Pg(t){var n=Ai(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Gn(t.priority,function(){if(a.tag===13){var s=Yn();s=He(s);var c=Rr(a,s);c!==null&&jn(c,a,s),bf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Rf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Dc=s,a.target.dispatchEvent(s),Dc=null}else return n=Ri(a),n!==null&&Lg(n),t.blockedOn=a,!1;n.shift()}return!0}function Bg(t,n,a){Fl(t)&&a.delete(n)}function bx(){wf=!1,Aa!==null&&Fl(Aa)&&(Aa=null),Ra!==null&&Fl(Ra)&&(Ra=null),Ca!==null&&Fl(Ca)&&(Ca=null),uo.forEach(Bg),fo.forEach(Bg)}function Hl(t,n){t.blockedOn===n&&(t.blockedOn=null,wf||(wf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,bx)))}var Gl=null;function zg(t){Gl!==t&&(Gl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Gl===t&&(Gl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Cf(s||a)===null)continue;break}var f=Ri(a);f!==null&&(t.splice(n,3),n-=3,Ru(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function po(t){function n(P){return Hl(P,t)}Aa!==null&&Hl(Aa,t),Ra!==null&&Hl(Ra,t),Ca!==null&&Hl(Ca,t),uo.forEach(n),fo.forEach(n);for(var a=0;a<wa.length;a++){var s=wa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<wa.length&&(a=wa[0],a.blockedOn===null);)Pg(a),a.blockedOn===null&&wa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[vn]||null;if(typeof f=="function")S||zg(a);else if(S){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[vn]||null)E=S.formAction;else if(Cf(c)!==null)continue}else E=S.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),zg(a)}}}function Df(t){this._internalRoot=t}Vl.prototype.render=Df.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Yn();Dg(a,s,t,n,null,null)},Vl.prototype.unmount=Df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Dg(t.current,2,null,t,null,null),El(),n[Ln]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var n=ye();t={blockedOn:null,target:t,priority:n};for(var a=0;a<wa.length&&n!==0&&n<wa[a].priority;a++);wa.splice(a,0,t),a===0&&Pg(t)}};var Ig=e.version;if(Ig!=="19.1.0")throw Error(r(527,Ig,"19.1.0"));Y.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var Ax={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{ht=kl.inject(Ax),Ot=kl}catch{}}return go.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=tm,f=em,S=nm,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=Cg(t,1,!1,null,null,a,s,c,f,S,E,null),t[Ln]=n.current,hf(t),new Df(n)},go.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=tm,S=em,E=nm,P=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=Cg(t,1,!0,n,a??null,s,c,f,S,E,P,J),n.context=wg(null),a=n.current,s=Yn(),s=He(s),c=ha(s),c.callback=null,da(a,c,s),a=s,n.current.lanes=a,gt(n,a),yi(n),t[Ln]=n.current,hf(t),new Vl(n)},go.version="19.1.0",go}var jg;function Bx(){if(jg)return Nf.exports;jg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Nf.exports=Px(),Nf.exports}var zx=Bx();const Zg="/assets/profile_picture_1-CBe_eFT8.jpg";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ad="176",Ix=0,Kg=1,Fx=2,Z_=1,Hx=2,Ki=3,Ha=0,In=1,Qi=2,Ia=0,ds=1,Qg=2,Jg=3,$g=4,Gx=5,mr=100,Vx=101,kx=102,Xx=103,Wx=104,qx=200,Yx=201,jx=202,Zx=203,ph=204,mh=205,Kx=206,Qx=207,Jx=208,$x=209,tS=210,eS=211,nS=212,iS=213,aS=214,gh=0,_h=1,vh=2,ms=3,xh=4,Sh=5,yh=6,Mh=7,K_=0,rS=1,sS=2,Fa=0,oS=1,lS=2,cS=3,uS=4,fS=5,hS=6,dS=7,Q_=300,gs=301,_s=302,Eh=303,Th=304,bc=306,bh=1e3,_r=1001,Ah=1002,mi=1003,pS=1004,Xl=1005,Ei=1006,zf=1007,vr=1008,na=1009,J_=1010,$_=1011,To=1012,rd=1013,xr=1014,Ji=1015,Co=1016,sd=1017,od=1018,bo=1020,t0=35902,e0=1021,n0=1022,pi=1023,Ao=1026,Ro=1027,i0=1028,ld=1029,a0=1030,cd=1031,ud=1033,pc=33776,mc=33777,gc=33778,_c=33779,Rh=35840,Ch=35841,wh=35842,Dh=35843,Uh=36196,Lh=37492,Nh=37496,Oh=37808,Ph=37809,Bh=37810,zh=37811,Ih=37812,Fh=37813,Hh=37814,Gh=37815,Vh=37816,kh=37817,Xh=37818,Wh=37819,qh=37820,Yh=37821,vc=36492,jh=36494,Zh=36495,r0=36283,Kh=36284,Qh=36285,Jh=36286,mS=3200,gS=3201,_S=0,vS=1,za="",ri="srgb",vs="srgb-linear",yc="linear",Oe="srgb",Jr=7680,t_=519,xS=512,SS=513,yS=514,s0=515,MS=516,ES=517,TS=518,bS=519,e_=35044,n_="300 es",$i=2e3,Mc=2001;class Ss{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],If=Math.PI/180,$h=180/Math.PI;function wo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function ve(o,e,i){return Math.max(e,Math.min(i,o))}function AS(o,e){return(o%e+e)%e}function Ff(o,e,i){return(1-i)*o+i*e}function _o(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function zn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ie{constructor(e=0,i=0){Ie.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class re{constructor(e,i,r,l,u,h,d,m,p){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p)}set(e,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],M=r[5],b=r[8],C=l[0],y=l[3],_=l[6],B=l[1],N=l[4],w=l[7],F=l[2],G=l[5],I=l[8];return u[0]=h*C+d*B+m*F,u[3]=h*y+d*N+m*G,u[6]=h*_+d*w+m*I,u[1]=p*C+g*B+v*F,u[4]=p*y+g*N+v*G,u[7]=p*_+g*w+v*I,u[2]=x*C+M*B+b*F,u[5]=x*y+M*N+b*G,u[8]=x*_+M*w+b*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=g*h-d*p,x=d*m-g*u,M=p*u-h*m,b=i*v+r*x+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=v*C,e[1]=(l*p-g*r)*C,e[2]=(d*r-l*h)*C,e[3]=x*C,e[4]=(g*i-l*m)*C,e[5]=(l*u-d*i)*C,e[6]=M*C,e[7]=(r*m-p*i)*C,e[8]=(h*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Hf.makeScale(e,i)),this}rotate(e){return this.premultiply(Hf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Hf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hf=new re;function o0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ec(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function RS(){const o=Ec("canvas");return o.style.display="block",o}const i_={};function xc(o){o in i_||(i_[o]=!0,console.warn(o))}function CS(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function wS(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function DS(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const a_=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),r_=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function US(){const o={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Oe&&(l.r=ea(l.r),l.g=ea(l.g),l.b=ea(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Oe&&(l.r=ps(l.r),l.g=ps(l.g),l.b=ps(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===za?yc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[vs]:{primaries:e,whitePoint:r,transfer:yc,toXYZ:a_,fromXYZ:r_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:r,transfer:Oe,toXYZ:a_,fromXYZ:r_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),o}const Te=US();function ea(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ps(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let $r;class LS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{$r===void 0&&($r=Ec("canvas")),$r.width=e.width,$r.height=e.height;const l=$r.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=$r}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ec("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ea(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ea(i[r]/255)*255):i[r]=ea(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NS=0;class fd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=wo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Gf(l[h].image)):u.push(Gf(l[h]))}else u=Gf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Gf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?LS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let OS=0;class Fn extends Ss{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=_r,l=_r,u=Ei,h=vr,d=pi,m=na,p=Fn.DEFAULT_ANISOTROPY,g=za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=wo(),this.name="",this.source=new fd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Q_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bh:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case Ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bh:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case Ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Q_;Fn.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,i=0,r=0,l=1){Je.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],v=m[8],x=m[1],M=m[5],b=m[9],C=m[2],y=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-C)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+C)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,w=(M+1)/2,F=(_+1)/2,G=(g+x)/4,I=(v+C)/4,Z=(b+y)/4;return N>w&&N>F?N<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(N),l=G/r,u=I/r):w>F?w<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(w),r=G/l,u=Z/l):F<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(F),r=I/u,l=Z/u),this.set(r,l,u,i),this}let B=Math.sqrt((y-b)*(y-b)+(v-C)*(v-C)+(x-g)*(x-g));return Math.abs(B)<.001&&(B=1),this.x=(y-b)/B,this.y=(v-C)/B,this.z=(x-g)/B,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this.w=ve(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this.w=ve(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PS extends Ss{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth?r.depth:1,this.scissor=new Je(0,0,e,i),this.scissorTest=!1,this.viewport=new Je(0,0,e,i);const l={width:e,height:i,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const u=new Fn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new fd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends PS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class l0 extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=mi,this.minFilter=mi,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class BS extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=mi,this.minFilter=mi,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Do{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=u[h+0],M=u[h+1],b=u[h+2],C=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=x,e[i+1]=M,e[i+2]=b,e[i+3]=C;return}if(v!==C||m!==x||p!==M||g!==b){let y=1-d;const _=m*x+p*M+g*b+v*C,B=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const F=Math.sqrt(N),G=Math.atan2(F,_*B);y=Math.sin(y*G)/F,d=Math.sin(d*G)/F}const w=d*B;if(m=m*y+x*w,p=p*y+M*w,g=g*y+b*w,v=v*y+C*w,y===1-d){const F=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=F,p*=F,g*=F,v*=F}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[h],x=u[h+1],M=u[h+2],b=u[h+3];return e[i]=d*b+g*v+m*M-p*x,e[i+1]=m*b+g*x+p*v-d*M,e[i+2]=p*b+g*M+d*x-m*v,e[i+3]=g*b-d*v-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(u/2),x=m(r/2),M=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=x*g*v+p*M*b,this._y=p*M*v-x*g*b,this._z=p*g*b+x*M*v,this._w=p*g*v-x*M*b;break;case"YXZ":this._x=x*g*v+p*M*b,this._y=p*M*v-x*g*b,this._z=p*g*b-x*M*v,this._w=p*g*v+x*M*b;break;case"ZXY":this._x=x*g*v-p*M*b,this._y=p*M*v+x*g*b,this._z=p*g*b+x*M*v,this._w=p*g*v-x*M*b;break;case"ZYX":this._x=x*g*v-p*M*b,this._y=p*M*v+x*g*b,this._z=p*g*b-x*M*v,this._w=p*g*v+x*M*b;break;case"YZX":this._x=x*g*v+p*M*b,this._y=p*M*v+x*g*b,this._z=p*g*b-x*M*v,this._w=p*g*v-x*M*b;break;case"XZY":this._x=x*g*v-p*M*b,this._y=p*M*v-x*g*b,this._z=p*g*b+x*M*v,this._w=p*g*v+x*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=r+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ve(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ot{constructor(e=0,i=0,r=0){ot.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(s_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(s_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),g=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+m*p+h*v-d*g,this.y=r+m*g+d*p-u*v,this.z=l+m*v+u*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Vf.copy(this).projectOnVector(e),this.sub(Vf)}reflect(e){return this.sub(Vf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vf=new ot,s_=new Do;class Uo{constructor(e=new ot(1/0,1/0,1/0),i=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,ui):ui.fromBufferAttribute(u,h),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Wl.copy(r.boundingBox)),Wl.applyMatrix4(e.matrixWorld),this.union(Wl)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vo),ql.subVectors(this.max,vo),ts.subVectors(e.a,vo),es.subVectors(e.b,vo),ns.subVectors(e.c,vo),Ua.subVectors(es,ts),La.subVectors(ns,es),or.subVectors(ts,ns);let i=[0,-Ua.z,Ua.y,0,-La.z,La.y,0,-or.z,or.y,Ua.z,0,-Ua.x,La.z,0,-La.x,or.z,0,-or.x,-Ua.y,Ua.x,0,-La.y,La.x,0,-or.y,or.x,0];return!kf(i,ts,es,ns,ql)||(i=[1,0,0,0,1,0,0,0,1],!kf(i,ts,es,ns,ql))?!1:(Yl.crossVectors(Ua,La),i=[Yl.x,Yl.y,Yl.z],kf(i,ts,es,ns,ql))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wi=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],ui=new ot,Wl=new Uo,ts=new ot,es=new ot,ns=new ot,Ua=new ot,La=new ot,or=new ot,vo=new ot,ql=new ot,Yl=new ot,lr=new ot;function kf(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){lr.fromArray(o,u);const d=l.x*Math.abs(lr.x)+l.y*Math.abs(lr.y)+l.z*Math.abs(lr.z),m=e.dot(lr),p=i.dot(lr),g=r.dot(lr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const zS=new Uo,xo=new ot,Xf=new ot;class Ac{constructor(e=new ot,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):zS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xo.subVectors(e,this.center);const i=xo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(xo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xo.copy(e.center).add(Xf)),this.expandByPoint(xo.copy(e.center).sub(Xf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qi=new ot,Wf=new ot,jl=new ot,Na=new ot,qf=new ot,Zl=new ot,Yf=new ot;class c0{constructor(e=new ot,i=new ot(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=qi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,i),qi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Wf.copy(e).add(i).multiplyScalar(.5),jl.copy(i).sub(e).normalize(),Na.copy(this.origin).sub(Wf);const u=e.distanceTo(i)*.5,h=-this.direction.dot(jl),d=Na.dot(this.direction),m=-Na.dot(jl),p=Na.lengthSq(),g=Math.abs(1-h*h);let v,x,M,b;if(g>0)if(v=h*m-d,x=h*d-m,b=u*g,v>=0)if(x>=-b)if(x<=b){const C=1/g;v*=C,x*=C,M=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x<=-b?(v=Math.max(0,-(-h*u+d)),x=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p):x<=b?(v=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(v=Math.max(0,-(h*u+d)),x=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p);else x=h>0?-u:u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Wf).addScaledVector(jl,x),M}intersectSphere(e,i){qi.subVectors(e.center,this.origin);const r=qi.dot(this.direction),l=qi.dot(qi)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(u=(e.min.y-x.y)*g,h=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,h=(e.min.y-x.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,i,r,l,u){qf.subVectors(i,e),Zl.subVectors(r,e),Yf.crossVectors(qf,Zl);let h=this.direction.dot(Yf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Na.subVectors(this.origin,e);const m=d*this.direction.dot(Zl.crossVectors(Na,Zl));if(m<0)return null;const p=d*this.direction.dot(qf.cross(Na));if(p<0||m+p>h)return null;const g=-d*Na.dot(Yf);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,i,r,l,u,h,d,m,p,g,v,x,M,b,C,y){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p,g,v,x,M,b,C,y)}set(e,i,r,l,u,h,d,m,p,g,v,x,M,b,C,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=M,_[7]=b,_[11]=C,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/is.setFromMatrixColumn(e,0).length(),u=1/is.setFromMatrixColumn(e,1).length(),h=1/is.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=h*g,M=h*v,b=d*g,C=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+b*p,i[5]=x-C*p,i[9]=-d*m,i[2]=C-x*p,i[6]=b+M*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*g,M=m*v,b=p*g,C=p*v;i[0]=x+C*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=M*d-b,i[6]=C+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*g,M=m*v,b=p*g,C=p*v;i[0]=x-C*d,i[4]=-h*v,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*g,i[9]=C-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*g,M=h*v,b=d*g,C=d*v;i[0]=m*g,i[4]=b*p-M,i[8]=x*p+C,i[1]=m*v,i[5]=C*p+x,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,M=h*p,b=d*m,C=d*p;i[0]=m*g,i[4]=C-x*v,i[8]=b*v+M,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*v+b,i[10]=x-C*v}else if(e.order==="XZY"){const x=h*m,M=h*p,b=d*m,C=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+C,i[5]=h*g,i[9]=M*v-b,i[2]=b*v-M,i[6]=d*g,i[10]=C*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(IS,e,FS)}lookAt(e,i,r){const l=this.elements;return Zn.subVectors(e,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Oa.crossVectors(r,Zn),Oa.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Oa.crossVectors(r,Zn)),Oa.normalize(),Kl.crossVectors(Zn,Oa),l[0]=Oa.x,l[4]=Kl.x,l[8]=Zn.x,l[1]=Oa.y,l[5]=Kl.y,l[9]=Zn.y,l[2]=Oa.z,l[6]=Kl.z,l[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],M=r[13],b=r[2],C=r[6],y=r[10],_=r[14],B=r[3],N=r[7],w=r[11],F=r[15],G=l[0],I=l[4],Z=l[8],D=l[12],R=l[1],z=l[5],et=l[9],tt=l[13],ut=l[2],lt=l[6],O=l[10],Y=l[14],W=l[3],yt=l[7],U=l[11],$=l[15];return u[0]=h*G+d*R+m*ut+p*W,u[4]=h*I+d*z+m*lt+p*yt,u[8]=h*Z+d*et+m*O+p*U,u[12]=h*D+d*tt+m*Y+p*$,u[1]=g*G+v*R+x*ut+M*W,u[5]=g*I+v*z+x*lt+M*yt,u[9]=g*Z+v*et+x*O+M*U,u[13]=g*D+v*tt+x*Y+M*$,u[2]=b*G+C*R+y*ut+_*W,u[6]=b*I+C*z+y*lt+_*yt,u[10]=b*Z+C*et+y*O+_*U,u[14]=b*D+C*tt+y*Y+_*$,u[3]=B*G+N*R+w*ut+F*W,u[7]=B*I+N*z+w*lt+F*yt,u[11]=B*Z+N*et+w*O+F*U,u[15]=B*D+N*tt+w*Y+F*$,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],v=e[6],x=e[10],M=e[14],b=e[3],C=e[7],y=e[11],_=e[15];return b*(+u*m*v-l*p*v-u*d*x+r*p*x+l*d*M-r*m*M)+C*(+i*m*M-i*p*x+u*h*x-l*h*M+l*p*g-u*m*g)+y*(+i*p*v-i*d*M-u*h*v+r*h*M+u*d*g-r*p*g)+_*(-l*d*g-i*m*v+i*d*x+l*h*v-r*h*x+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=e[9],x=e[10],M=e[11],b=e[12],C=e[13],y=e[14],_=e[15],B=v*y*p-C*x*p+C*m*M-d*y*M-v*m*_+d*x*_,N=b*x*p-g*y*p-b*m*M+h*y*M+g*m*_-h*x*_,w=g*C*p-b*v*p+b*d*M-h*C*M-g*d*_+h*v*_,F=b*v*m-g*C*m-b*d*x+h*C*x+g*d*y-h*v*y,G=i*B+r*N+l*w+u*F;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/G;return e[0]=B*I,e[1]=(C*x*u-v*y*u-C*l*M+r*y*M+v*l*_-r*x*_)*I,e[2]=(d*y*u-C*m*u+C*l*p-r*y*p-d*l*_+r*m*_)*I,e[3]=(v*m*u-d*x*u-v*l*p+r*x*p+d*l*M-r*m*M)*I,e[4]=N*I,e[5]=(g*y*u-b*x*u+b*l*M-i*y*M-g*l*_+i*x*_)*I,e[6]=(b*m*u-h*y*u-b*l*p+i*y*p+h*l*_-i*m*_)*I,e[7]=(h*x*u-g*m*u+g*l*p-i*x*p-h*l*M+i*m*M)*I,e[8]=w*I,e[9]=(b*v*u-g*C*u-b*r*M+i*C*M+g*r*_-i*v*_)*I,e[10]=(h*C*u-b*d*u+b*r*p-i*C*p-h*r*_+i*d*_)*I,e[11]=(g*d*u-h*v*u-g*r*p+i*v*p+h*r*M-i*d*M)*I,e[12]=F*I,e[13]=(g*C*l-b*v*l+b*r*x-i*C*x-g*r*y+i*v*y)*I,e[14]=(b*d*l-h*C*l-b*r*m+i*C*m+h*r*y-i*d*y)*I,e[15]=(h*v*l-g*d*l+g*r*m-i*v*m-h*r*x+i*d*x)*I,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,m=e.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,v=d+d,x=u*p,M=u*g,b=u*v,C=h*g,y=h*v,_=d*v,B=m*p,N=m*g,w=m*v,F=r.x,G=r.y,I=r.z;return l[0]=(1-(C+_))*F,l[1]=(M+w)*F,l[2]=(b-N)*F,l[3]=0,l[4]=(M-w)*G,l[5]=(1-(x+_))*G,l[6]=(y+B)*G,l[7]=0,l[8]=(b+N)*I,l[9]=(y-B)*I,l[10]=(1-(x+C))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=is.set(l[0],l[1],l[2]).length();const h=is.set(l[4],l[5],l[6]).length(),d=is.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],fi.copy(this);const p=1/u,g=1/h,v=1/d;return fi.elements[0]*=p,fi.elements[1]*=p,fi.elements[2]*=p,fi.elements[4]*=g,fi.elements[5]*=g,fi.elements[6]*=g,fi.elements[8]*=v,fi.elements[9]*=v,fi.elements[10]*=v,i.setFromRotationMatrix(fi),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=$i){const m=this.elements,p=2*u/(i-e),g=2*u/(r-l),v=(i+e)/(i-e),x=(r+l)/(r-l);let M,b;if(d===$i)M=-(h+u)/(h-u),b=-2*h*u/(h-u);else if(d===Mc)M=-h/(h-u),b=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=$i){const m=this.elements,p=1/(i-e),g=1/(r-l),v=1/(h-u),x=(i+e)*p,M=(r+l)*g;let b,C;if(d===$i)b=(h+u)*v,C=-2*v;else if(d===Mc)b=u*v,C=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=C,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const is=new ot,fi=new $e,IS=new ot(0,0,0),FS=new ot(1,1,1),Oa=new ot,Kl=new ot,Zn=new ot,o_=new $e,l_=new Do;class ia{constructor(e=0,i=0,r=0,l=ia.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(ve(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ve(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return o_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(o_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return l_.setFromEuler(this),this.setFromQuaternion(l_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ia.DEFAULT_ORDER="XYZ";class u0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HS=0;const c_=new ot,as=new Do,Yi=new $e,Ql=new ot,So=new ot,GS=new ot,VS=new Do,u_=new ot(1,0,0),f_=new ot(0,1,0),h_=new ot(0,0,1),d_={type:"added"},kS={type:"removed"},rs={type:"childadded",child:null},jf={type:"childremoved",child:null};class Hn extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new ot,i=new ia,r=new Do,l=new ot(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new re}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new u0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return as.setFromAxisAngle(e,i),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,i){return as.setFromAxisAngle(e,i),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(u_,e)}rotateY(e){return this.rotateOnAxis(f_,e)}rotateZ(e){return this.rotateOnAxis(h_,e)}translateOnAxis(e,i){return c_.copy(e).applyQuaternion(this.quaternion),this.position.add(c_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(u_,e)}translateY(e){return this.translateOnAxis(f_,e)}translateZ(e){return this.translateOnAxis(h_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ql.copy(e):Ql.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(So,Ql,this.up):Yi.lookAt(Ql,So,this.up),this.quaternion.setFromRotationMatrix(Yi),l&&(Yi.extractRotation(l.matrixWorld),as.setFromRotationMatrix(Yi),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(d_),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(kS),jf.child=e,this.dispatchEvent(jf),jf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(d_),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,e,GS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,VS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),v=h(e.shapes),x=h(e.skeletons),M=h(e.animations),b=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Hn.DEFAULT_UP=new ot(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new ot,ji=new ot,Zf=new ot,Zi=new ot,ss=new ot,os=new ot,p_=new ot,Kf=new ot,Qf=new ot,Jf=new ot,$f=new Je,th=new Je,eh=new Je;class di{constructor(e=new ot,i=new ot,r=new ot){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),hi.subVectors(e,i),l.cross(hi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){hi.subVectors(l,i),ji.subVectors(r,i),Zf.subVectors(e,i);const h=hi.dot(hi),d=hi.dot(ji),m=hi.dot(Zf),p=ji.dot(ji),g=ji.dot(Zf),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,M=(p*m-d*g)*x,b=(h*g-d*m)*x;return u.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,i,r,l,u,h,d,m){return this.getBarycoord(e,i,r,l,Zi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Zi.x),m.addScaledVector(h,Zi.y),m.addScaledVector(d,Zi.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return $f.setScalar(0),th.setScalar(0),eh.setScalar(0),$f.fromBufferAttribute(e,i),th.fromBufferAttribute(e,r),eh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector($f,u.x),h.addScaledVector(th,u.y),h.addScaledVector(eh,u.z),h}static isFrontFacing(e,i,r,l){return hi.subVectors(r,i),ji.subVectors(e,i),hi.cross(ji).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),hi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return di.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return di.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;ss.subVectors(l,r),os.subVectors(u,r),Kf.subVectors(e,r);const m=ss.dot(Kf),p=os.dot(Kf);if(m<=0&&p<=0)return i.copy(r);Qf.subVectors(e,l);const g=ss.dot(Qf),v=os.dot(Qf);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(ss,h);Jf.subVectors(e,u);const M=ss.dot(Jf),b=os.dot(Jf);if(b>=0&&M<=b)return i.copy(u);const C=M*p-m*b;if(C<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(os,d);const y=g*b-M*v;if(y<=0&&v-g>=0&&M-b>=0)return p_.subVectors(u,l),d=(v-g)/(v-g+(M-b)),i.copy(l).addScaledVector(p_,d);const _=1/(y+C+x);return h=C*_,d=x*_,i.copy(r).addScaledVector(ss,h).addScaledVector(os,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const f0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pa={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function nh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ce{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Te.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Te.workingColorSpace){return this.r=e,this.g=i,this.b=r,Te.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Te.workingColorSpace){if(e=AS(e,1),i=ve(i,0,1),r=ve(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=nh(h,u,e+1/3),this.g=nh(h,u,e),this.b=nh(h,u,e-1/3)}return Te.toWorkingColorSpace(this,l),this}setStyle(e,i=ri){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ri){const r=f0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Te.fromWorkingColorSpace(Cn.copy(this),e),Math.round(ve(Cn.r*255,0,255))*65536+Math.round(ve(Cn.g*255,0,255))*256+Math.round(ve(Cn.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Te.workingColorSpace){Te.fromWorkingColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,u=Cn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Te.workingColorSpace){return Te.fromWorkingColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=ri){Te.fromWorkingColorSpace(Cn.copy(this),e);const i=Cn.r,r=Cn.g,l=Cn.b;return e!==ri?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Pa),this.setHSL(Pa.h+e,Pa.s+i,Pa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Pa),e.getHSL(Jl);const r=Ff(Pa.h,Jl.h,i),l=Ff(Pa.s,Jl.s,i),u=Ff(Pa.l,Jl.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Ce;Ce.NAMES=f0;let XS=0;class Lo extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=wo(),this.name="",this.type="Material",this.blending=ds,this.side=Ha,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=t_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(r.blending=this.blending),this.side!==Ha&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ph&&(r.blendSrc=this.blendSrc),this.blendDst!==mh&&(r.blendDst=this.blendDst),this.blendEquation!==mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==t_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class h0 extends Lo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ia,this.combine=K_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new ot,$l=new Ie;let WS=0;class Ti{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=e_,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)$l.fromBufferAttribute(this,i),$l.applyMatrix3(e),this.setXY(i,$l.x,$l.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=_o(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=zn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=_o(i,this.array)),i}setX(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=_o(i,this.array)),i}setY(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=_o(i,this.array)),i}setZ(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=_o(i,this.array)),i}setW(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array),u=zn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==e_&&(e.usage=this.usage),e}}class d0 extends Ti{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class p0 extends Ti{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class bi extends Ti{constructor(e,i,r){super(new Float32Array(e),i,r)}}let qS=0;const ai=new $e,ih=new Hn,ls=new ot,Kn=new Uo,yo=new Uo,_n=new ot;class aa extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(o0(e)?p0:d0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new re().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,i,r){return ai.makeTranslation(e,i,r),this.applyMatrix4(ai),this}scale(e,i,r){return ai.makeScale(e,i,r),this.applyMatrix4(ai),this}lookAt(e){return ih.lookAt(e),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new bi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Uo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Kn.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ac);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(e){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];yo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(Kn.min,yo.min),Kn.expandByPoint(_n),_n.addVectors(Kn.max,yo.max),Kn.expandByPoint(_n)):(Kn.expandByPoint(yo.min),Kn.expandByPoint(yo.max))}Kn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)_n.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)_n.fromBufferAttribute(d,p),m&&(ls.fromBufferAttribute(e,p),_n.add(ls)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<r.count;Z++)d[Z]=new ot,m[Z]=new ot;const p=new ot,g=new ot,v=new ot,x=new Ie,M=new Ie,b=new Ie,C=new ot,y=new ot;function _(Z,D,R){p.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,D),v.fromBufferAttribute(r,R),x.fromBufferAttribute(u,Z),M.fromBufferAttribute(u,D),b.fromBufferAttribute(u,R),g.sub(p),v.sub(p),M.sub(x),b.sub(x);const z=1/(M.x*b.y-b.x*M.y);isFinite(z)&&(C.copy(g).multiplyScalar(b.y).addScaledVector(v,-M.y).multiplyScalar(z),y.copy(v).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(z),d[Z].add(C),d[D].add(C),d[R].add(C),m[Z].add(y),m[D].add(y),m[R].add(y))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let Z=0,D=B.length;Z<D;++Z){const R=B[Z],z=R.start,et=R.count;for(let tt=z,ut=z+et;tt<ut;tt+=3)_(e.getX(tt+0),e.getX(tt+1),e.getX(tt+2))}const N=new ot,w=new ot,F=new ot,G=new ot;function I(Z){F.fromBufferAttribute(l,Z),G.copy(F);const D=d[Z];N.copy(D),N.sub(F.multiplyScalar(F.dot(D))).normalize(),w.crossVectors(G,D);const z=w.dot(m[Z])<0?-1:1;h.setXYZW(Z,N.x,N.y,N.z,z)}for(let Z=0,D=B.length;Z<D;++Z){const R=B[Z],z=R.start,et=R.count;for(let tt=z,ut=z+et;tt<ut;tt+=3)I(e.getX(tt+0)),I(e.getX(tt+1)),I(e.getX(tt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ti(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new ot,u=new ot,h=new ot,d=new ot,m=new ot,p=new ot,g=new ot,v=new ot;if(e)for(let x=0,M=e.count;x<M;x+=3){const b=e.getX(x+0),C=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),d.add(g),m.add(g),p.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,v=d.normalized,x=new p.constructor(m.length*g);let M=0,b=0;for(let C=0,y=m.length;C<y;C++){d.isInterleavedBufferAttribute?M=m[C]*d.data.stride+d.offset:M=m[C]*g;for(let _=0;_<g;_++)x[b++]=p[M++]}return new Ti(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new aa,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,v=p.length;g<v;g++){const x=p[g],M=e(x,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],v=u[p];for(let x=0,M=v.length;x<M;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const m_=new $e,cr=new c0,tc=new Ac,g_=new ot,ec=new ot,nc=new ot,ic=new ot,ah=new ot,ac=new ot,__=new ot,rc=new ot;class ta extends Hn{constructor(e=new aa,i=new h0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){ac.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],v=u[m];g!==0&&(ah.fromBufferAttribute(v,e),h?ac.addScaledVector(ah,g):ac.addScaledVector(ah.sub(i),g))}i.add(ac)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),tc.copy(r.boundingSphere),tc.applyMatrix4(u),cr.copy(e.ray).recast(e.near),!(tc.containsPoint(cr.origin)===!1&&(cr.intersectSphere(tc,g_)===null||cr.origin.distanceToSquared(g_)>(e.far-e.near)**2))&&(m_.copy(u).invert(),cr.copy(e.ray).applyMatrix4(m_),!(r.boundingBox!==null&&cr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,cr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=x.length;b<C;b++){const y=x[b],_=h[y.materialIndex],B=Math.max(y.start,M.start),N=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let w=B,F=N;w<F;w+=3){const G=d.getX(w),I=d.getX(w+1),Z=d.getX(w+2);l=sc(this,_,e,r,p,g,v,G,I,Z),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let y=b,_=C;y<_;y+=3){const B=d.getX(y),N=d.getX(y+1),w=d.getX(y+2);l=sc(this,h,e,r,p,g,v,B,N,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,C=x.length;b<C;b++){const y=x[b],_=h[y.materialIndex],B=Math.max(y.start,M.start),N=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let w=B,F=N;w<F;w+=3){const G=w,I=w+1,Z=w+2;l=sc(this,_,e,r,p,g,v,G,I,Z),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=b,_=C;y<_;y+=3){const B=y,N=y+1,w=y+2;l=sc(this,h,e,r,p,g,v,B,N,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function YS(o,e,i,r,l,u,h,d){let m;if(e.side===In?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,e.side===Ha,d),m===null)return null;rc.copy(d),rc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(rc);return p<i.near||p>i.far?null:{distance:p,point:rc.clone(),object:o}}function sc(o,e,i,r,l,u,h,d,m,p){o.getVertexPosition(d,ec),o.getVertexPosition(m,nc),o.getVertexPosition(p,ic);const g=YS(o,e,i,r,ec,nc,ic,__);if(g){const v=new ot;di.getBarycoord(__,ec,nc,ic,v),l&&(g.uv=di.getInterpolatedAttribute(l,d,m,p,v,new Ie)),u&&(g.uv1=di.getInterpolatedAttribute(u,d,m,p,v,new Ie)),h&&(g.normal=di.getInterpolatedAttribute(h,d,m,p,v,new ot),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new ot,materialIndex:0};di.getNormal(ec,nc,ic,x.normal),g.face=x,g.barycoord=v}return g}class No extends aa{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],v=[];let x=0,M=0;b("z","y","x",-1,-1,r,i,e,h,u,0),b("z","y","x",1,-1,r,i,-e,h,u,1),b("x","z","y",1,1,e,r,i,l,h,2),b("x","z","y",1,-1,e,r,-i,l,h,3),b("x","y","z",1,-1,e,i,r,l,u,4),b("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new bi(p,3)),this.setAttribute("normal",new bi(g,3)),this.setAttribute("uv",new bi(v,2));function b(C,y,_,B,N,w,F,G,I,Z,D){const R=w/I,z=F/Z,et=w/2,tt=F/2,ut=G/2,lt=I+1,O=Z+1;let Y=0,W=0;const yt=new ot;for(let U=0;U<O;U++){const $=U*z-tt;for(let vt=0;vt<lt;vt++){const St=vt*R-et;yt[C]=St*B,yt[y]=$*N,yt[_]=ut,p.push(yt.x,yt.y,yt.z),yt[C]=0,yt[y]=0,yt[_]=G>0?1:-1,g.push(yt.x,yt.y,yt.z),v.push(vt/I),v.push(1-U/Z),Y+=1}}for(let U=0;U<Z;U++)for(let $=0;$<I;$++){const vt=x+$+lt*U,St=x+$+lt*(U+1),Q=x+($+1)+lt*(U+1),pt=x+($+1)+lt*U;m.push(vt,St,pt),m.push(St,Q,pt),W+=6}d.addGroup(M,W,D),M+=W,x+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Dn(o){const e={};for(let i=0;i<o.length;i++){const r=xs(o[i]);for(const l in r)e[l]=r[l]}return e}function jS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function m0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Te.workingColorSpace}const ZS={clone:xs,merge:Dn};var KS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ga extends Lo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KS,this.fragmentShader=QS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=jS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class g0 extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=$i}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new ot,v_=new Ie,x_=new Ie;class si extends g0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=$h*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(If*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $h*2*Math.atan(Math.tan(If*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z)}getViewSize(e,i){return this.getViewBounds(e,v_,x_),i.subVectors(x_,v_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(If*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const cs=-90,us=1;class JS extends Hn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(cs,us,e,i);l.layers=this.layers,this.add(l);const u=new si(cs,us,e,i);u.layers=this.layers,this.add(u);const h=new si(cs,us,e,i);h.layers=this.layers,this.add(h);const d=new si(cs,us,e,i);d.layers=this.layers,this.add(d);const m=new si(cs,us,e,i);m.layers=this.layers,this.add(m);const p=new si(cs,us,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===$i)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Mc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,x,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class _0 extends Fn{constructor(e=[],i=gs,r,l,u,h,d,m,p,g){super(e,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $S extends Sr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new _0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ei}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new No(5,5,5),u=new Ga({name:"CubemapFromEquirect",uniforms:xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:Ia});u.uniforms.tEquirect.value=i;const h=new ta(l,u),d=i.minFilter;return i.minFilter===vr&&(i.minFilter=Ei),new JS(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class oc extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ty={type:"move"};class rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,r),_=this._getHandJoint(p,C);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),M=.02,b=.005;p.inputState.pinching&&x>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ty)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new oc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class ey extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ia,this.environmentIntensity=1,this.environmentRotation=new ia,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const sh=new ot,ny=new ot,iy=new re;class dr{constructor(e=new ot(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=sh.subVectors(r,i).cross(ny.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(sh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||iy.getNormalMatrix(e),l=this.coplanarPoint(sh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new Ac,lc=new ot;class v0{constructor(e=new dr,i=new dr,r=new dr,l=new dr,u=new dr,h=new dr){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=$i){const r=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],v=l[6],x=l[7],M=l[8],b=l[9],C=l[10],y=l[11],_=l[12],B=l[13],N=l[14],w=l[15];if(r[0].setComponents(m-u,x-p,y-M,w-_).normalize(),r[1].setComponents(m+u,x+p,y+M,w+_).normalize(),r[2].setComponents(m+h,x+g,y+b,w+B).normalize(),r[3].setComponents(m-h,x-g,y-b,w-B).normalize(),r[4].setComponents(m-d,x-v,y-C,w-N).normalize(),i===$i)r[5].setComponents(m+d,x+v,y+C,w+N).normalize();else if(i===Mc)r[5].setComponents(d,v,C,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(lc.x=l.normal.x>0?e.max.x:e.min.x,lc.y=l.normal.y>0?e.max.y:e.min.y,lc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(lc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class x0 extends Lo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const S_=new $e,td=new c0,cc=new Ac,uc=new ot;class ay extends Hn{constructor(e=new aa,i=new x0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),cc.copy(r.boundingSphere),cc.applyMatrix4(l),cc.radius+=u,e.ray.intersectsSphere(cc)===!1)return;S_.copy(l).invert(),td.copy(e.ray).applyMatrix4(S_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,v=r.attributes.position;if(p!==null){const x=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let b=x,C=M;b<C;b++){const y=p.getX(b);uc.fromBufferAttribute(v,y),y_(uc,y,m,l,e,i,this)}}else{const x=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let b=x,C=M;b<C;b++)uc.fromBufferAttribute(v,b),y_(uc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function y_(o,e,i,r,l,u,h){const d=td.distanceSqToPoint(o);if(d<i){const m=new ot;td.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class S0 extends Fn{constructor(e,i,r=xr,l,u,h,d=mi,m=mi,p,g=Ao){if(g!==Ao&&g!==Ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Rc extends aa{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=e/d,x=i/m,M=[],b=[],C=[],y=[];for(let _=0;_<g;_++){const B=_*x-h;for(let N=0;N<p;N++){const w=N*v-u;b.push(w,-B,0),C.push(0,0,1),y.push(N/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let B=0;B<d;B++){const N=B+p*_,w=B+p*(_+1),F=B+1+p*(_+1),G=B+1+p*_;M.push(N,w,G),M.push(w,F,G)}this.setIndex(M),this.setAttribute("position",new bi(b,3)),this.setAttribute("normal",new bi(C,3)),this.setAttribute("uv",new bi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tc extends aa{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+d,Math.PI);let p=0;const g=[],v=new ot,x=new ot,M=[],b=[],C=[],y=[];for(let _=0;_<=r;_++){const B=[],N=_/r;let w=0;_===0&&h===0?w=.5/i:_===r&&m===Math.PI&&(w=-.5/i);for(let F=0;F<=i;F++){const G=F/i;v.x=-e*Math.cos(l+G*u)*Math.sin(h+N*d),v.y=e*Math.cos(h+N*d),v.z=e*Math.sin(l+G*u)*Math.sin(h+N*d),b.push(v.x,v.y,v.z),x.copy(v).normalize(),C.push(x.x,x.y,x.z),y.push(G+w,1-N),B.push(p++)}g.push(B)}for(let _=0;_<r;_++)for(let B=0;B<i;B++){const N=g[_][B+1],w=g[_][B],F=g[_+1][B],G=g[_+1][B+1];(_!==0||h>0)&&M.push(N,w,G),(_!==r-1||m<Math.PI)&&M.push(w,F,G)}this.setIndex(M),this.setAttribute("position",new bi(b,3)),this.setAttribute("normal",new bi(C,3)),this.setAttribute("uv",new bi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ry extends Lo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sy extends Lo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class oy extends g0{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ly extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function M_(o,e,i,r){const l=cy(r);switch(i){case e0:return o*e;case i0:return o*e/l.components*l.byteLength;case ld:return o*e/l.components*l.byteLength;case a0:return o*e*2/l.components*l.byteLength;case cd:return o*e*2/l.components*l.byteLength;case n0:return o*e*3/l.components*l.byteLength;case pi:return o*e*4/l.components*l.byteLength;case ud:return o*e*4/l.components*l.byteLength;case pc:case mc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case gc:case _c:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ch:case Dh:return Math.max(o,16)*Math.max(e,8)/4;case Rh:case wh:return Math.max(o,8)*Math.max(e,8)/2;case Uh:case Lh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Nh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case zh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case kh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case qh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case vc:case jh:case Zh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case r0:case Kh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Qh:case Jh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function cy(o){switch(o){case na:case J_:return{byteLength:1,components:1};case To:case $_:case Co:return{byteLength:2,components:1};case sd:case od:return{byteLength:2,components:4};case xr:case rd:case Ji:return{byteLength:4,components:1};case t0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ad}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ad);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function y0(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function uy(o){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,g);else{v.sort((M,b)=>M.start-b.start);let x=0;for(let M=1;M<v.length;M++){const b=v[x],C=v[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++x,v[x]=C)}v.length=x+1;for(let M=0,b=v.length;M<b;M++){const C=v[M];o.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var fy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,py=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,my=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_y=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,My=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ey=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ty=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,by=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ly=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ny=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Oy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Py=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,By=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Iy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ky=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ky=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,aM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_M=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,SM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,RM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,DM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,HM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ZM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$M=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_E=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,UE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,VE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:fy,alphahash_pars_fragment:hy,alphamap_fragment:dy,alphamap_pars_fragment:py,alphatest_fragment:my,alphatest_pars_fragment:gy,aomap_fragment:_y,aomap_pars_fragment:vy,batching_pars_vertex:xy,batching_vertex:Sy,begin_vertex:yy,beginnormal_vertex:My,bsdfs:Ey,iridescence_fragment:Ty,bumpmap_pars_fragment:by,clipping_planes_fragment:Ay,clipping_planes_pars_fragment:Ry,clipping_planes_pars_vertex:Cy,clipping_planes_vertex:wy,color_fragment:Dy,color_pars_fragment:Uy,color_pars_vertex:Ly,color_vertex:Ny,common:Oy,cube_uv_reflection_fragment:Py,defaultnormal_vertex:By,displacementmap_pars_vertex:zy,displacementmap_vertex:Iy,emissivemap_fragment:Fy,emissivemap_pars_fragment:Hy,colorspace_fragment:Gy,colorspace_pars_fragment:Vy,envmap_fragment:ky,envmap_common_pars_fragment:Xy,envmap_pars_fragment:Wy,envmap_pars_vertex:qy,envmap_physical_pars_fragment:iM,envmap_vertex:Yy,fog_vertex:jy,fog_pars_vertex:Zy,fog_fragment:Ky,fog_pars_fragment:Qy,gradientmap_pars_fragment:Jy,lightmap_pars_fragment:$y,lights_lambert_fragment:tM,lights_lambert_pars_fragment:eM,lights_pars_begin:nM,lights_toon_fragment:aM,lights_toon_pars_fragment:rM,lights_phong_fragment:sM,lights_phong_pars_fragment:oM,lights_physical_fragment:lM,lights_physical_pars_fragment:cM,lights_fragment_begin:uM,lights_fragment_maps:fM,lights_fragment_end:hM,logdepthbuf_fragment:dM,logdepthbuf_pars_fragment:pM,logdepthbuf_pars_vertex:mM,logdepthbuf_vertex:gM,map_fragment:_M,map_pars_fragment:vM,map_particle_fragment:xM,map_particle_pars_fragment:SM,metalnessmap_fragment:yM,metalnessmap_pars_fragment:MM,morphinstance_vertex:EM,morphcolor_vertex:TM,morphnormal_vertex:bM,morphtarget_pars_vertex:AM,morphtarget_vertex:RM,normal_fragment_begin:CM,normal_fragment_maps:wM,normal_pars_fragment:DM,normal_pars_vertex:UM,normal_vertex:LM,normalmap_pars_fragment:NM,clearcoat_normal_fragment_begin:OM,clearcoat_normal_fragment_maps:PM,clearcoat_pars_fragment:BM,iridescence_pars_fragment:zM,opaque_fragment:IM,packing:FM,premultiplied_alpha_fragment:HM,project_vertex:GM,dithering_fragment:VM,dithering_pars_fragment:kM,roughnessmap_fragment:XM,roughnessmap_pars_fragment:WM,shadowmap_pars_fragment:qM,shadowmap_pars_vertex:YM,shadowmap_vertex:jM,shadowmask_pars_fragment:ZM,skinbase_vertex:KM,skinning_pars_vertex:QM,skinning_vertex:JM,skinnormal_vertex:$M,specularmap_fragment:tE,specularmap_pars_fragment:eE,tonemapping_fragment:nE,tonemapping_pars_fragment:iE,transmission_fragment:aE,transmission_pars_fragment:rE,uv_pars_fragment:sE,uv_pars_vertex:oE,uv_vertex:lE,worldpos_vertex:cE,background_vert:uE,background_frag:fE,backgroundCube_vert:hE,backgroundCube_frag:dE,cube_vert:pE,cube_frag:mE,depth_vert:gE,depth_frag:_E,distanceRGBA_vert:vE,distanceRGBA_frag:xE,equirect_vert:SE,equirect_frag:yE,linedashed_vert:ME,linedashed_frag:EE,meshbasic_vert:TE,meshbasic_frag:bE,meshlambert_vert:AE,meshlambert_frag:RE,meshmatcap_vert:CE,meshmatcap_frag:wE,meshnormal_vert:DE,meshnormal_frag:UE,meshphong_vert:LE,meshphong_frag:NE,meshphysical_vert:OE,meshphysical_frag:PE,meshtoon_vert:BE,meshtoon_frag:zE,points_vert:IE,points_frag:FE,shadow_vert:HE,shadow_frag:GE,sprite_vert:VE,sprite_frag:kE},Dt={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Mi={basic:{uniforms:Dn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Dn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Dn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Dn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Dn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Dn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Dn([Dt.points,Dt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Dn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Dn([Dt.common,Dt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Dn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Dn([Dt.sprite,Dt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:Dn([Dt.common,Dt.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:Dn([Dt.lights,Dt.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Mi.physical={uniforms:Dn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const fc={r:0,b:0,g:0},fr=new ia,XE=new $e;function WE(o,e,i,r,l,u,h){const d=new Ce(0);let m=u===!0?0:1,p,g,v=null,x=0,M=null;function b(N){let w=N.isScene===!0?N.background:null;return w&&w.isTexture&&(w=(N.backgroundBlurriness>0?i:e).get(w)),w}function C(N){let w=!1;const F=b(N);F===null?_(d,m):F&&F.isColor&&(_(F,1),w=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(N,w){const F=b(w);F&&(F.isCubeTexture||F.mapping===bc)?(g===void 0&&(g=new ta(new No(1,1,1),new Ga({name:"BackgroundCubeMaterial",uniforms:xs(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,I,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),fr.copy(w.backgroundRotation),fr.x*=-1,fr.y*=-1,fr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(XE.makeRotationFromEuler(fr)),g.material.toneMapped=Te.getTransfer(F.colorSpace)!==Oe,(v!==F||x!==F.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,v=F,x=F.version,M=o.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new ta(new Rc(2,2),new Ga({name:"BackgroundMaterial",uniforms:xs(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Ha,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Te.getTransfer(F.colorSpace)!==Oe,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(v!==F||x!==F.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=F,x=F.version,M=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,w){N.getRGB(fc,m0(o)),r.buffers.color.setClear(fc.r,fc.g,fc.b,w,h)}function B(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,w=1){d.set(N),m=w,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(d,m)},render:C,addToRenderList:y,dispose:B}}function qE(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,h=!1;function d(R,z,et,tt,ut){let lt=!1;const O=v(tt,et,z);u!==O&&(u=O,p(u.object)),lt=M(R,tt,et,ut),lt&&b(R,tt,et,ut),ut!==null&&e.update(ut,o.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,w(R,z,et,tt),ut!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ut).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function g(R){return o.deleteVertexArray(R)}function v(R,z,et){const tt=et.wireframe===!0;let ut=r[R.id];ut===void 0&&(ut={},r[R.id]=ut);let lt=ut[z.id];lt===void 0&&(lt={},ut[z.id]=lt);let O=lt[tt];return O===void 0&&(O=x(m()),lt[tt]=O),O}function x(R){const z=[],et=[],tt=[];for(let ut=0;ut<i;ut++)z[ut]=0,et[ut]=0,tt[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:et,attributeDivisors:tt,object:R,attributes:{},index:null}}function M(R,z,et,tt){const ut=u.attributes,lt=z.attributes;let O=0;const Y=et.getAttributes();for(const W in Y)if(Y[W].location>=0){const U=ut[W];let $=lt[W];if($===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&($=R.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;O++}return u.attributesNum!==O||u.index!==tt}function b(R,z,et,tt){const ut={},lt=z.attributes;let O=0;const Y=et.getAttributes();for(const W in Y)if(Y[W].location>=0){let U=lt[W];U===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(U=R.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),ut[W]=$,O++}u.attributes=ut,u.attributesNum=O,u.index=tt}function C(){const R=u.newAttributes;for(let z=0,et=R.length;z<et;z++)R[z]=0}function y(R){_(R,0)}function _(R,z){const et=u.newAttributes,tt=u.enabledAttributes,ut=u.attributeDivisors;et[R]=1,tt[R]===0&&(o.enableVertexAttribArray(R),tt[R]=1),ut[R]!==z&&(o.vertexAttribDivisor(R,z),ut[R]=z)}function B(){const R=u.newAttributes,z=u.enabledAttributes;for(let et=0,tt=z.length;et<tt;et++)z[et]!==R[et]&&(o.disableVertexAttribArray(et),z[et]=0)}function N(R,z,et,tt,ut,lt,O){O===!0?o.vertexAttribIPointer(R,z,et,ut,lt):o.vertexAttribPointer(R,z,et,tt,ut,lt)}function w(R,z,et,tt){C();const ut=tt.attributes,lt=et.getAttributes(),O=z.defaultAttributeValues;for(const Y in lt){const W=lt[Y];if(W.location>=0){let yt=ut[Y];if(yt===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(yt=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(yt=R.instanceColor)),yt!==void 0){const U=yt.normalized,$=yt.itemSize,vt=e.get(yt);if(vt===void 0)continue;const St=vt.buffer,Q=vt.type,pt=vt.bytesPerElement,xt=Q===o.INT||Q===o.UNSIGNED_INT||yt.gpuType===rd;if(yt.isInterleavedBufferAttribute){const At=yt.data,Ut=At.stride,se=yt.offset;if(At.isInstancedInterleavedBuffer){for(let Zt=0;Zt<W.locationSize;Zt++)_(W.location+Zt,At.meshPerAttribute);R.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Zt=0;Zt<W.locationSize;Zt++)y(W.location+Zt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Zt=0;Zt<W.locationSize;Zt++)N(W.location+Zt,$/W.locationSize,Q,U,Ut*pt,(se+$/W.locationSize*Zt)*pt,xt)}else{if(yt.isInstancedBufferAttribute){for(let At=0;At<W.locationSize;At++)_(W.location+At,yt.meshPerAttribute);R.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let At=0;At<W.locationSize;At++)y(W.location+At);o.bindBuffer(o.ARRAY_BUFFER,St);for(let At=0;At<W.locationSize;At++)N(W.location+At,$/W.locationSize,Q,U,$*pt,$/W.locationSize*At*pt,xt)}}else if(O!==void 0){const U=O[Y];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(W.location,U);break;case 3:o.vertexAttrib3fv(W.location,U);break;case 4:o.vertexAttrib4fv(W.location,U);break;default:o.vertexAttrib1fv(W.location,U)}}}}B()}function F(){Z();for(const R in r){const z=r[R];for(const et in z){const tt=z[et];for(const ut in tt)g(tt[ut].object),delete tt[ut];delete z[et]}delete r[R]}}function G(R){if(r[R.id]===void 0)return;const z=r[R.id];for(const et in z){const tt=z[et];for(const ut in tt)g(tt[ut].object),delete tt[ut];delete z[et]}delete r[R.id]}function I(R){for(const z in r){const et=r[z];if(et[R.id]===void 0)continue;const tt=et[R.id];for(const ut in tt)g(tt[ut].object),delete tt[ut];delete et[R.id]}}function Z(){D(),h=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:D,dispose:F,releaseStatesOfGeometry:G,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:y,disableUnusedAttributes:B}}function YE(o,e,i){let r;function l(p){r=p}function u(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,v){v!==0&&(o.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let M=0;for(let b=0;b<v;b++)M+=g[b];i.update(M,r,1)}function m(p,g,v,x){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],g[b],x[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let b=0;for(let C=0;C<v;C++)b+=g[C]*x[C];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function jE(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==pi&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const Z=I===Co&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==na&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ji&&!Z)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=b>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:B,maxVaryings:N,maxFragmentUniforms:w,vertexTextures:F,maxSamples:G}}function ZE(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new dr,d=new re,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||l;return l=x,r=v.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,M){const b=v.clippingPlanes,C=v.clipIntersection,y=v.clipShadows,_=o.get(v);if(!l||b===null||b.length===0||u&&!y)u?g(null):p();else{const B=u?0:r,N=B*4;let w=_.clippingState||null;m.value=w,w=g(b,x,N,M);for(let F=0;F!==N;++F)w[F]=i[F];_.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,M,b){const C=v!==null?v.length:0;let y=null;if(C!==0){if(y=m.value,b!==!0||y===null){const _=M+C*4,B=x.matrixWorldInverse;d.getNormalMatrix(B),(y===null||y.length<_)&&(y=new Float32Array(_));for(let N=0,w=M;N!==C;++N,w+=4)h.copy(v[N]).applyMatrix4(B,d),h.normal.toArray(y,w),y[w+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function KE(o){let e=new WeakMap;function i(h,d){return d===Eh?h.mapping=gs:d===Th&&(h.mapping=_s),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Eh||d===Th)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new $S(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const hs=4,E_=[.125,.215,.35,.446,.526,.582],gr=20,oh=new oy,T_=new Ce;let lh=null,ch=0,uh=0,fh=!1;const pr=(1+Math.sqrt(5))/2,fs=1/pr,b_=[new ot(-pr,fs,0),new ot(pr,fs,0),new ot(-fs,0,pr),new ot(fs,0,pr),new ot(0,pr,-fs),new ot(0,pr,fs),new ot(-1,1,-1),new ot(1,1,-1),new ot(-1,1,1),new ot(1,1,1)],QE=new ot;class A_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=QE}=u;lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=w_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lh,ch,uh),this._renderer.xr.enabled=fh,e.scissorTest=!1,hc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===gs||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:Co,format:pi,colorSpace:vs,depthBuffer:!1},l=R_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=R_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JE(u)),this._blurMaterial=$E(u,e,i)}return l}_compileMaterial(e){const i=new ta(this._lodPlanes[0],e);this._renderer.compile(i,oh)}_sceneToCubeUV(e,i,r,l,u){const m=new si(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(T_),v.toneMapping=Fa,v.autoClear=!1;const b=new h0({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),C=new ta(new No,b);let y=!1;const _=e.background;_?_.isColor&&(b.color.copy(_),e.background=null,y=!0):(b.color.copy(T_),y=!0);for(let B=0;B<6;B++){const N=B%3;N===0?(m.up.set(0,p[B],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[B],u.y,u.z)):N===1?(m.up.set(0,0,p[B]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[B],u.z)):(m.up.set(0,p[B],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[B]));const w=this._cubeSize;hc(l,N*w,B>2?w:0,w,w),v.setRenderTarget(l),y&&v.render(C,m),v.render(e,m)}C.geometry.dispose(),C.material.dispose(),v.toneMapping=M,v.autoClear=x,e.background=_}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===gs||e.mapping===_s;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=w_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new ta(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;hc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,oh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=b_[(l-u-1)%b_.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new ta(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*gr-1),C=u/b,y=isFinite(u)?1+Math.floor(g*C):gr;y>gr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${gr}`);const _=[];let B=0;for(let I=0;I<gr;++I){const Z=I/C,D=Math.exp(-Z*Z/2);_.push(D),I===0?B+=D:I<y&&(B+=2*D)}for(let I=0;I<_.length;I++)_[I]=_[I]/B;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=b,x.mipInt.value=N-r;const w=this._sizeLods[l],F=3*w*(l>N-hs?l-N+hs:0),G=4*(this._cubeSize-w);hc(i,F,G,3*w,2*w),m.setRenderTarget(i),m.render(v,oh)}}function JE(o){const e=[],i=[],r=[];let l=o;const u=o-hs+1+E_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-hs?m=E_[h-o+hs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,b=6,C=3,y=2,_=1,B=new Float32Array(C*b*M),N=new Float32Array(y*b*M),w=new Float32Array(_*b*M);for(let G=0;G<M;G++){const I=G%3*2/3-1,Z=G>2?0:-1,D=[I,Z,0,I+2/3,Z,0,I+2/3,Z+1,0,I,Z,0,I+2/3,Z+1,0,I,Z+1,0];B.set(D,C*b*G),N.set(x,y*b*G);const R=[G,G,G,G,G,G];w.set(R,_*b*G)}const F=new aa;F.setAttribute("position",new Ti(B,C)),F.setAttribute("uv",new Ti(N,y)),F.setAttribute("faceIndex",new Ti(w,_)),e.push(F),l>hs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function R_(o,e,i){const r=new Sr(o,e,i);return r.texture.mapping=bc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function hc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function $E(o,e,i){const r=new Float32Array(gr),l=new ot(0,1,0);return new Ga({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function C_(){return new Ga({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function w_(){return new Ga({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function hd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function t1(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Eh||m===Th,g=m===gs||m===_s;if(p||g){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new A_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new A_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function e1(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&xc("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function n1(o,e,i,r){const l={},u=new WeakMap;function h(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete l[x.id];const M=u.get(x);M&&(e.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)e.update(x[M],o.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,b=v.attributes.position;let C=0;if(M!==null){const B=M.array;C=M.version;for(let N=0,w=B.length;N<w;N+=3){const F=B[N+0],G=B[N+1],I=B[N+2];x.push(F,G,G,I,I,F)}}else if(b!==void 0){const B=b.array;C=b.version;for(let N=0,w=B.length/3-1;N<w;N+=3){const F=N+0,G=N+1,I=N+2;x.push(F,G,G,I,I,F)}}else return;const y=new(o0(x)?p0:d0)(x,1);y.version=C;const _=u.get(v);_&&e.remove(_),u.set(v,y)}function g(v){const x=u.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function i1(o,e,i){let r;function l(x){r=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,M){o.drawElements(r,M,u,x*h),i.update(M,r,1)}function p(x,M,b){b!==0&&(o.drawElementsInstanced(r,M,u,x*h,b),i.update(M,r,b))}function g(x,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,x,0,b);let y=0;for(let _=0;_<b;_++)y+=M[_];i.update(y,r,1)}function v(x,M,b,C){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/h,M[_],C[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,x,0,C,0,b);let _=0;for(let B=0;B<b;B++)_+=M[B]*C[B];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function a1(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function r1(o,e,i){const r=new WeakMap,l=new Je;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let R=function(){Z.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var M=R;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let w=0;b===!0&&(w=1),C===!0&&(w=2),y===!0&&(w=3);let F=d.attributes.position.count*w,G=1;F>e.maxTextureSize&&(G=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const I=new Float32Array(F*G*4*v),Z=new l0(I,F,G,v);Z.type=Ji,Z.needsUpdate=!0;const D=w*4;for(let z=0;z<v;z++){const et=_[z],tt=B[z],ut=N[z],lt=F*G*4*z;for(let O=0;O<et.count;O++){const Y=O*D;b===!0&&(l.fromBufferAttribute(et,O),I[lt+Y+0]=l.x,I[lt+Y+1]=l.y,I[lt+Y+2]=l.z,I[lt+Y+3]=0),C===!0&&(l.fromBufferAttribute(tt,O),I[lt+Y+4]=l.x,I[lt+Y+5]=l.y,I[lt+Y+6]=l.z,I[lt+Y+7]=0),y===!0&&(l.fromBufferAttribute(ut,O),I[lt+Y+8]=l.x,I[lt+Y+9]=l.y,I[lt+Y+10]=l.z,I[lt+Y+11]=ut.itemSize===4?l.w:1)}}x={count:v,texture:Z,size:new Ie(F,G)},r.set(d,x),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const C=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function s1(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const M0=new Fn,D_=new S0(1,1),E0=new l0,T0=new BS,b0=new _0,U_=[],L_=[],N_=new Float32Array(16),O_=new Float32Array(9),P_=new Float32Array(4);function ys(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=U_[l];if(u===void 0&&(u=new Float32Array(l),U_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function un(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function fn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Cc(o,e){let i=L_[e];i===void 0&&(i=new Int32Array(e),L_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function o1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function l1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2fv(this.addr,e),fn(i,e)}}function c1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(un(i,e))return;o.uniform3fv(this.addr,e),fn(i,e)}}function u1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4fv(this.addr,e),fn(i,e)}}function f1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),fn(i,e)}else{if(un(i,r))return;P_.set(r),o.uniformMatrix2fv(this.addr,!1,P_),fn(i,r)}}function h1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),fn(i,e)}else{if(un(i,r))return;O_.set(r),o.uniformMatrix3fv(this.addr,!1,O_),fn(i,r)}}function d1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),fn(i,e)}else{if(un(i,r))return;N_.set(r),o.uniformMatrix4fv(this.addr,!1,N_),fn(i,r)}}function p1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function m1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2iv(this.addr,e),fn(i,e)}}function g1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;o.uniform3iv(this.addr,e),fn(i,e)}}function _1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4iv(this.addr,e),fn(i,e)}}function v1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function x1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2uiv(this.addr,e),fn(i,e)}}function S1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;o.uniform3uiv(this.addr,e),fn(i,e)}}function y1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4uiv(this.addr,e),fn(i,e)}}function M1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(D_.compareFunction=s0,u=D_):u=M0,i.setTexture2D(e||u,l)}function E1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||T0,l)}function T1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||b0,l)}function b1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||E0,l)}function A1(o){switch(o){case 5126:return o1;case 35664:return l1;case 35665:return c1;case 35666:return u1;case 35674:return f1;case 35675:return h1;case 35676:return d1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return g1;case 35669:case 35673:return _1;case 5125:return v1;case 36294:return x1;case 36295:return S1;case 36296:return y1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return b1}}function R1(o,e){o.uniform1fv(this.addr,e)}function C1(o,e){const i=ys(e,this.size,2);o.uniform2fv(this.addr,i)}function w1(o,e){const i=ys(e,this.size,3);o.uniform3fv(this.addr,i)}function D1(o,e){const i=ys(e,this.size,4);o.uniform4fv(this.addr,i)}function U1(o,e){const i=ys(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function L1(o,e){const i=ys(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function N1(o,e){const i=ys(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function O1(o,e){o.uniform1iv(this.addr,e)}function P1(o,e){o.uniform2iv(this.addr,e)}function B1(o,e){o.uniform3iv(this.addr,e)}function z1(o,e){o.uniform4iv(this.addr,e)}function I1(o,e){o.uniform1uiv(this.addr,e)}function F1(o,e){o.uniform2uiv(this.addr,e)}function H1(o,e){o.uniform3uiv(this.addr,e)}function G1(o,e){o.uniform4uiv(this.addr,e)}function V1(o,e,i){const r=this.cache,l=e.length,u=Cc(i,l);un(r,u)||(o.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||M0,u[h])}function k1(o,e,i){const r=this.cache,l=e.length,u=Cc(i,l);un(r,u)||(o.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||T0,u[h])}function X1(o,e,i){const r=this.cache,l=e.length,u=Cc(i,l);un(r,u)||(o.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||b0,u[h])}function W1(o,e,i){const r=this.cache,l=e.length,u=Cc(i,l);un(r,u)||(o.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||E0,u[h])}function q1(o){switch(o){case 5126:return R1;case 35664:return C1;case 35665:return w1;case 35666:return D1;case 35674:return U1;case 35675:return L1;case 35676:return N1;case 5124:case 35670:return O1;case 35667:case 35671:return P1;case 35668:case 35672:return B1;case 35669:case 35673:return z1;case 5125:return I1;case 36294:return F1;case 36295:return H1;case 36296:return G1;case 35678:case 36198:case 36298:case 36306:case 35682:return V1;case 35679:case 36299:case 36307:return k1;case 35680:case 36300:case 36308:case 36293:return X1;case 36289:case 36303:case 36311:case 36292:return W1}}class Y1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=A1(i.type)}}class j1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=q1(i.type)}}class Z1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const hh=/(\w+)(\])?(\[|\.)?/g;function B_(o,e){o.seq.push(e),o.map[e.id]=e}function K1(o,e,i){const r=o.name,l=r.length;for(hh.lastIndex=0;;){const u=hh.exec(r),h=hh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){B_(i,p===void 0?new Y1(d,o,e):new j1(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new Z1(d),B_(i,v)),i=v}}}class Sc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);K1(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function z_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const Q1=37297;let J1=0;function $1(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const I_=new re;function tT(o){Te._getMatrix(I_,Te.workingColorSpace,o);const e=`mat3( ${I_.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(o)){case yc:return[e,"LinearTransferOETF"];case Oe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function F_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+$1(o.getShaderSource(e),h)}else return l}function eT(o,e){const i=tT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function nT(o,e){let i;switch(e){case oS:i="Linear";break;case lS:i="Reinhard";break;case cS:i="Cineon";break;case uS:i="ACESFilmic";break;case hS:i="AgX";break;case dS:i="Neutral";break;case fS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const dc=new ot;function iT(){Te.getLuminanceCoefficients(dc);const o=dc.x.toFixed(4),e=dc.y.toFixed(4),i=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function rT(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function sT(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Eo(o){return o!==""}function H_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function G_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ed(o){return o.replace(oT,cT)}const lT=new Map;function cT(o,e){let i=oe[e];if(i===void 0){const r=lT.get(e);if(r!==void 0)i=oe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ed(i)}const uT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V_(o){return o.replace(uT,fT)}function fT(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function k_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hT(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Z_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Hx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function dT(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case gs:case _s:e="ENVMAP_TYPE_CUBE";break;case bc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pT(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case _s:e="ENVMAP_MODE_REFRACTION";break}return e}function mT(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case K_:e="ENVMAP_BLENDING_MULTIPLY";break;case rS:e="ENVMAP_BLENDING_MIX";break;case sS:e="ENVMAP_BLENDING_ADD";break}return e}function gT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function _T(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=hT(i),p=dT(i),g=pT(i),v=mT(i),x=gT(i),M=aT(i),b=rT(u),C=l.createProgram();let y,_,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Eo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Eo).join(`
`),_.length>0&&(_+=`
`)):(y=[k_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),_=[k_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fa?"#define TONE_MAPPING":"",i.toneMapping!==Fa?oe.tonemapping_pars_fragment:"",i.toneMapping!==Fa?nT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,eT("linearToOutputTexel",i.outputColorSpace),iT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Eo).join(`
`)),h=ed(h),h=H_(h,i),h=G_(h,i),d=ed(d),d=H_(d,i),d=G_(d,i),h=V_(h),d=V_(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===n_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===n_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=B+y+h,w=B+_+d,F=z_(l,l.VERTEX_SHADER,N),G=z_(l,l.FRAGMENT_SHADER,w);l.attachShader(C,F),l.attachShader(C,G),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function I(z){if(o.debug.checkShaderErrors){const et=l.getProgramInfoLog(C).trim(),tt=l.getShaderInfoLog(F).trim(),ut=l.getShaderInfoLog(G).trim();let lt=!0,O=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(lt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,F,G);else{const Y=F_(l,F,"vertex"),W=F_(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+et+`
`+Y+`
`+W)}else et!==""?console.warn("THREE.WebGLProgram: Program Info Log:",et):(tt===""||ut==="")&&(O=!1);O&&(z.diagnostics={runnable:lt,programLog:et,vertexShader:{log:tt,prefix:y},fragmentShader:{log:ut,prefix:_}})}l.deleteShader(F),l.deleteShader(G),Z=new Sc(l,C),D=sT(l,C)}let Z;this.getUniforms=function(){return Z===void 0&&I(this),Z};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,Q1)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=J1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=G,this}let vT=0;class xT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new ST(e),i.set(e,r)),r}}class ST{constructor(e){this.id=vT++,this.code=e,this.usedTimes=0}}function yT(o,e,i,r,l,u,h){const d=new u0,m=new xT,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return p.add(D),D===0?"uv":`uv${D}`}function y(D,R,z,et,tt){const ut=et.fog,lt=tt.geometry,O=D.isMeshStandardMaterial?et.environment:null,Y=(D.isMeshStandardMaterial?i:e).get(D.envMap||O),W=Y&&Y.mapping===bc?Y.image.height:null,yt=b[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const U=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,$=U!==void 0?U.length:0;let vt=0;lt.morphAttributes.position!==void 0&&(vt=1),lt.morphAttributes.normal!==void 0&&(vt=2),lt.morphAttributes.color!==void 0&&(vt=3);let St,Q,pt,xt;if(yt){const ye=Mi[yt];St=ye.vertexShader,Q=ye.fragmentShader}else St=D.vertexShader,Q=D.fragmentShader,m.update(D),pt=m.getVertexShaderID(D),xt=m.getFragmentShaderID(D);const At=o.getRenderTarget(),Ut=o.state.buffers.depth.getReversed(),se=tt.isInstancedMesh===!0,Zt=tt.isBatchedMesh===!0,Fe=!!D.map,Pe=!!D.matcap,ue=!!Y,H=!!D.aoMap,Un=!!D.lightMap,me=!!D.bumpMap,ne=!!D.normalMap,Xt=!!D.displacementMap,we=!!D.emissiveMap,Gt=!!D.metalnessMap,L=!!D.roughnessMap,T=D.anisotropy>0,nt=D.clearcoat>0,mt=D.dispersion>0,Et=D.iridescence>0,ht=D.sheen>0,Ot=D.transmission>0,Rt=T&&!!D.anisotropyMap,Ht=nt&&!!D.clearcoatMap,Jt=nt&&!!D.clearcoatNormalMap,bt=nt&&!!D.clearcoatRoughnessMap,It=Et&&!!D.iridescenceMap,Yt=Et&&!!D.iridescenceThicknessMap,Kt=ht&&!!D.sheenColorMap,Pt=ht&&!!D.sheenRoughnessMap,le=!!D.specularMap,ee=!!D.specularColorMap,De=!!D.specularIntensityMap,k=Ot&&!!D.transmissionMap,Lt=Ot&&!!D.thicknessMap,ct=!!D.gradientMap,gt=!!D.alphaMap,Bt=D.alphaTest>0,Nt=!!D.alphaHash,ie=!!D.extensions;let He=Fa;D.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(He=o.toneMapping);const tn={shaderID:yt,shaderType:D.type,shaderName:D.name,vertexShader:St,fragmentShader:Q,defines:D.defines,customVertexShaderID:pt,customFragmentShaderID:xt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Zt,batchingColor:Zt&&tt._colorsTexture!==null,instancing:se,instancingColor:se&&tt.instanceColor!==null,instancingMorph:se&&tt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:At===null?o.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:vs,alphaToCoverage:!!D.alphaToCoverage,map:Fe,matcap:Pe,envMap:ue,envMapMode:ue&&Y.mapping,envMapCubeUVHeight:W,aoMap:H,lightMap:Un,bumpMap:me,normalMap:ne,displacementMap:x&&Xt,emissiveMap:we,normalMapObjectSpace:ne&&D.normalMapType===vS,normalMapTangentSpace:ne&&D.normalMapType===_S,metalnessMap:Gt,roughnessMap:L,anisotropy:T,anisotropyMap:Rt,clearcoat:nt,clearcoatMap:Ht,clearcoatNormalMap:Jt,clearcoatRoughnessMap:bt,dispersion:mt,iridescence:Et,iridescenceMap:It,iridescenceThicknessMap:Yt,sheen:ht,sheenColorMap:Kt,sheenRoughnessMap:Pt,specularMap:le,specularColorMap:ee,specularIntensityMap:De,transmission:Ot,transmissionMap:k,thicknessMap:Lt,gradientMap:ct,opaque:D.transparent===!1&&D.blending===ds&&D.alphaToCoverage===!1,alphaMap:gt,alphaTest:Bt,alphaHash:Nt,combine:D.combine,mapUv:Fe&&C(D.map.channel),aoMapUv:H&&C(D.aoMap.channel),lightMapUv:Un&&C(D.lightMap.channel),bumpMapUv:me&&C(D.bumpMap.channel),normalMapUv:ne&&C(D.normalMap.channel),displacementMapUv:Xt&&C(D.displacementMap.channel),emissiveMapUv:we&&C(D.emissiveMap.channel),metalnessMapUv:Gt&&C(D.metalnessMap.channel),roughnessMapUv:L&&C(D.roughnessMap.channel),anisotropyMapUv:Rt&&C(D.anisotropyMap.channel),clearcoatMapUv:Ht&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&C(D.sheenRoughnessMap.channel),specularMapUv:le&&C(D.specularMap.channel),specularColorMapUv:ee&&C(D.specularColorMap.channel),specularIntensityMapUv:De&&C(D.specularIntensityMap.channel),transmissionMapUv:k&&C(D.transmissionMap.channel),thicknessMapUv:Lt&&C(D.thicknessMap.channel),alphaMapUv:gt&&C(D.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(ne||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!lt.attributes.uv&&(Fe||gt),fog:!!ut,useFog:D.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ut,skinning:tt.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:vt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:He,decodeVideoTexture:Fe&&D.map.isVideoTexture===!0&&Te.getTransfer(D.map.colorSpace)===Oe,decodeVideoTextureEmissive:we&&D.emissiveMap.isVideoTexture===!0&&Te.getTransfer(D.emissiveMap.colorSpace)===Oe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Qi,flipSided:D.side===In,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ie&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&D.extensions.multiDraw===!0||Zt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return tn.vertexUv1s=p.has(1),tn.vertexUv2s=p.has(2),tn.vertexUv3s=p.has(3),p.clear(),tn}function _(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const z in D.defines)R.push(z),R.push(D.defines[z]);return D.isRawShaderMaterial===!1&&(B(R,D),N(R,D),R.push(o.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function B(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function N(D,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const R=b[D.type];let z;if(R){const et=Mi[R];z=ZS.clone(et.uniforms)}else z=D.uniforms;return z}function F(D,R){let z;for(let et=0,tt=g.length;et<tt;et++){const ut=g[et];if(ut.cacheKey===R){z=ut,++z.usedTimes;break}}return z===void 0&&(z=new _T(o,R,D,u),g.push(z)),z}function G(D){if(--D.usedTimes===0){const R=g.indexOf(D);g[R]=g[g.length-1],g.pop(),D.destroy()}}function I(D){m.remove(D)}function Z(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:w,acquireProgram:F,releaseProgram:G,releaseShaderCache:I,programs:g,dispose:Z}}function MT(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function ET(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function X_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function W_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(v,x,M,b,C,y){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:M,groupOrder:b,renderOrder:v.renderOrder,z:C,group:y},o[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=M,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=C,_.group=y),e++,_}function d(v,x,M,b,C,y){const _=h(v,x,M,b,C,y);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,x,M,b,C,y){const _=h(v,x,M,b,C,y);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||ET),r.length>1&&r.sort(x||X_),l.length>1&&l.sort(x||X_)}function g(){for(let v=e,x=o.length;v<x;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function TT(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new W_,o.set(r,[h])):l>=u.length?(h=new W_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function bT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ot,color:new Ce};break;case"SpotLight":i={position:new ot,direction:new ot,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ot,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ot,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return o[e.id]=i,i}}}function AT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let RT=0;function CT(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function wT(o){const e=new bT,i=AT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ot);const l=new ot,u=new $e,h=new $e;function d(p){let g=0,v=0,x=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,b=0,C=0,y=0,_=0,B=0,N=0,w=0,F=0,G=0,I=0;p.sort(CT);for(let D=0,R=p.length;D<R;D++){const z=p[D],et=z.color,tt=z.intensity,ut=z.distance,lt=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=et.r*tt,v+=et.g*tt,x+=et.b*tt;else if(z.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(z.sh.coefficients[O],tt);I++}else if(z.isDirectionalLight){const O=e.get(z);if(O.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Y=z.shadow,W=i.get(z);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,r.directionalShadow[M]=W,r.directionalShadowMap[M]=lt,r.directionalShadowMatrix[M]=z.shadow.matrix,B++}r.directional[M]=O,M++}else if(z.isSpotLight){const O=e.get(z);O.position.setFromMatrixPosition(z.matrixWorld),O.color.copy(et).multiplyScalar(tt),O.distance=ut,O.coneCos=Math.cos(z.angle),O.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),O.decay=z.decay,r.spot[C]=O;const Y=z.shadow;if(z.map&&(r.spotLightMap[F]=z.map,F++,Y.updateMatrices(z),z.castShadow&&G++),r.spotLightMatrix[C]=Y.matrix,z.castShadow){const W=i.get(z);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,r.spotShadow[C]=W,r.spotShadowMap[C]=lt,w++}C++}else if(z.isRectAreaLight){const O=e.get(z);O.color.copy(et).multiplyScalar(tt),O.halfWidth.set(z.width*.5,0,0),O.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=O,y++}else if(z.isPointLight){const O=e.get(z);if(O.color.copy(z.color).multiplyScalar(z.intensity),O.distance=z.distance,O.decay=z.decay,z.castShadow){const Y=z.shadow,W=i.get(z);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,r.pointShadow[b]=W,r.pointShadowMap[b]=lt,r.pointShadowMatrix[b]=z.shadow.matrix,N++}r.point[b]=O,b++}else if(z.isHemisphereLight){const O=e.get(z);O.skyColor.copy(z.color).multiplyScalar(tt),O.groundColor.copy(z.groundColor).multiplyScalar(tt),r.hemi[_]=O,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Dt.LTC_FLOAT_1,r.rectAreaLTC2=Dt.LTC_FLOAT_2):(r.rectAreaLTC1=Dt.LTC_HALF_1,r.rectAreaLTC2=Dt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const Z=r.hash;(Z.directionalLength!==M||Z.pointLength!==b||Z.spotLength!==C||Z.rectAreaLength!==y||Z.hemiLength!==_||Z.numDirectionalShadows!==B||Z.numPointShadows!==N||Z.numSpotShadows!==w||Z.numSpotMaps!==F||Z.numLightProbes!==I)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=y,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=w+F-G,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=I,Z.directionalLength=M,Z.pointLength=b,Z.spotLength=C,Z.rectAreaLength=y,Z.hemiLength=_,Z.numDirectionalShadows=B,Z.numPointShadows=N,Z.numSpotShadows=w,Z.numSpotMaps=F,Z.numLightProbes=I,r.version=RT++)}function m(p,g){let v=0,x=0,M=0,b=0,C=0;const y=g.matrixWorldInverse;for(let _=0,B=p.length;_<B;_++){const N=p[_];if(N.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),v++}else if(N.isSpotLight){const w=r.spot[M];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const w=r.rectArea[b];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(y),h.identity(),u.copy(N.matrixWorld),u.premultiply(y),h.extractRotation(u),w.halfWidth.set(N.width*.5,0,0),w.halfHeight.set(0,N.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),b++}else if(N.isPointLight){const w=r.point[x];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(y),x++}else if(N.isHemisphereLight){const w=r.hemi[C];w.direction.setFromMatrixPosition(N.matrixWorld),w.direction.transformDirection(y),C++}}}return{setup:d,setupView:m,state:r}}function q_(o){const e=new wT(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function DT(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new q_(o),e.set(l,[d])):u>=h.length?(d=new q_(o),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const UT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function NT(o,e,i){let r=new v0;const l=new Ie,u=new Ie,h=new Je,d=new ry({depthPacking:gS}),m=new sy,p={},g=i.maxTextureSize,v={[Ha]:In,[In]:Ha,[Qi]:Qi},x=new Ga({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:UT,fragmentShader:LT}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new aa;b.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ta(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Z_;let _=this.type;this.render=function(G,I,Z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||G.length===0)return;const D=o.getRenderTarget(),R=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),et=o.state;et.setBlending(Ia),et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const tt=_!==Ki&&this.type===Ki,ut=_===Ki&&this.type!==Ki;for(let lt=0,O=G.length;lt<O;lt++){const Y=G[lt],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const yt=W.getFrameExtents();if(l.multiply(yt),u.copy(W.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/yt.x),l.x=u.x*yt.x,W.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/yt.y),l.y=u.y*yt.y,W.mapSize.y=u.y)),W.map===null||tt===!0||ut===!0){const $=this.type!==Ki?{minFilter:mi,magFilter:mi}:{};W.map!==null&&W.map.dispose(),W.map=new Sr(l.x,l.y,$),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const U=W.getViewportCount();for(let $=0;$<U;$++){const vt=W.getViewport($);h.set(u.x*vt.x,u.y*vt.y,u.x*vt.z,u.y*vt.w),et.viewport(h),W.updateMatrices(Y,$),r=W.getFrustum(),w(I,Z,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Ki&&B(W,Z),W.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(D,R,z)};function B(G,I){const Z=e.update(C);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Sr(l.x,l.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(I,null,Z,x,C,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(I,null,Z,M,C,null)}function N(G,I,Z,D){let R=null;const z=Z.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(z!==void 0)R=z;else if(R=Z.isPointLight===!0?m:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const et=R.uuid,tt=I.uuid;let ut=p[et];ut===void 0&&(ut={},p[et]=ut);let lt=ut[tt];lt===void 0&&(lt=R.clone(),ut[tt]=lt,I.addEventListener("dispose",F)),R=lt}if(R.visible=I.visible,R.wireframe=I.wireframe,D===Ki?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:v[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,Z.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const et=o.properties.get(R);et.light=Z}return R}function w(G,I,Z,D,R){if(G.visible===!1)return;if(G.layers.test(I.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&R===Ki)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,G.matrixWorld);const tt=e.update(G),ut=G.material;if(Array.isArray(ut)){const lt=tt.groups;for(let O=0,Y=lt.length;O<Y;O++){const W=lt[O],yt=ut[W.materialIndex];if(yt&&yt.visible){const U=N(G,yt,D,R);G.onBeforeShadow(o,G,I,Z,tt,U,W),o.renderBufferDirect(Z,null,tt,U,G,W),G.onAfterShadow(o,G,I,Z,tt,U,W)}}}else if(ut.visible){const lt=N(G,ut,D,R);G.onBeforeShadow(o,G,I,Z,tt,lt,null),o.renderBufferDirect(Z,null,tt,lt,G,null),G.onAfterShadow(o,G,I,Z,tt,lt,null)}}const et=G.children;for(let tt=0,ut=et.length;tt<ut;tt++)w(et[tt],I,Z,D,R)}function F(G){G.target.removeEventListener("dispose",F);for(const Z in p){const D=p[Z],R=G.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const OT={[gh]:_h,[vh]:yh,[xh]:Mh,[ms]:Sh,[_h]:gh,[yh]:vh,[Mh]:xh,[Sh]:ms};function PT(o,e){function i(){let k=!1;const Lt=new Je;let ct=null;const gt=new Je(0,0,0,0);return{setMask:function(Bt){ct!==Bt&&!k&&(o.colorMask(Bt,Bt,Bt,Bt),ct=Bt)},setLocked:function(Bt){k=Bt},setClear:function(Bt,Nt,ie,He,tn){tn===!0&&(Bt*=He,Nt*=He,ie*=He),Lt.set(Bt,Nt,ie,He),gt.equals(Lt)===!1&&(o.clearColor(Bt,Nt,ie,He),gt.copy(Lt))},reset:function(){k=!1,ct=null,gt.set(-1,0,0,0)}}}function r(){let k=!1,Lt=!1,ct=null,gt=null,Bt=null;return{setReversed:function(Nt){if(Lt!==Nt){const ie=e.get("EXT_clip_control");Nt?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),Lt=Nt;const He=Bt;Bt=null,this.setClear(He)}},getReversed:function(){return Lt},setTest:function(Nt){Nt?At(o.DEPTH_TEST):Ut(o.DEPTH_TEST)},setMask:function(Nt){ct!==Nt&&!k&&(o.depthMask(Nt),ct=Nt)},setFunc:function(Nt){if(Lt&&(Nt=OT[Nt]),gt!==Nt){switch(Nt){case gh:o.depthFunc(o.NEVER);break;case _h:o.depthFunc(o.ALWAYS);break;case vh:o.depthFunc(o.LESS);break;case ms:o.depthFunc(o.LEQUAL);break;case xh:o.depthFunc(o.EQUAL);break;case Sh:o.depthFunc(o.GEQUAL);break;case yh:o.depthFunc(o.GREATER);break;case Mh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}gt=Nt}},setLocked:function(Nt){k=Nt},setClear:function(Nt){Bt!==Nt&&(Lt&&(Nt=1-Nt),o.clearDepth(Nt),Bt=Nt)},reset:function(){k=!1,ct=null,gt=null,Bt=null,Lt=!1}}}function l(){let k=!1,Lt=null,ct=null,gt=null,Bt=null,Nt=null,ie=null,He=null,tn=null;return{setTest:function(ye){k||(ye?At(o.STENCIL_TEST):Ut(o.STENCIL_TEST))},setMask:function(ye){Lt!==ye&&!k&&(o.stencilMask(ye),Lt=ye)},setFunc:function(ye,Gn,hn){(ct!==ye||gt!==Gn||Bt!==hn)&&(o.stencilFunc(ye,Gn,hn),ct=ye,gt=Gn,Bt=hn)},setOp:function(ye,Gn,hn){(Nt!==ye||ie!==Gn||He!==hn)&&(o.stencilOp(ye,Gn,hn),Nt=ye,ie=Gn,He=hn)},setLocked:function(ye){k=ye},setClear:function(ye){tn!==ye&&(o.clearStencil(ye),tn=ye)},reset:function(){k=!1,Lt=null,ct=null,gt=null,Bt=null,Nt=null,ie=null,He=null,tn=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,M=[],b=null,C=!1,y=null,_=null,B=null,N=null,w=null,F=null,G=null,I=new Ce(0,0,0),Z=0,D=!1,R=null,z=null,et=null,tt=null,ut=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Y=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=Y>=2);let yt=null,U={};const $=o.getParameter(o.SCISSOR_BOX),vt=o.getParameter(o.VIEWPORT),St=new Je().fromArray($),Q=new Je().fromArray(vt);function pt(k,Lt,ct,gt){const Bt=new Uint8Array(4),Nt=o.createTexture();o.bindTexture(k,Nt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ie=0;ie<ct;ie++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,gt,0,o.RGBA,o.UNSIGNED_BYTE,Bt):o.texImage2D(Lt+ie,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Bt);return Nt}const xt={};xt[o.TEXTURE_2D]=pt(o.TEXTURE_2D,o.TEXTURE_2D,1),xt[o.TEXTURE_CUBE_MAP]=pt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[o.TEXTURE_2D_ARRAY]=pt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),xt[o.TEXTURE_3D]=pt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),At(o.DEPTH_TEST),h.setFunc(ms),me(!1),ne(Kg),At(o.CULL_FACE),H(Ia);function At(k){g[k]!==!0&&(o.enable(k),g[k]=!0)}function Ut(k){g[k]!==!1&&(o.disable(k),g[k]=!1)}function se(k,Lt){return v[k]!==Lt?(o.bindFramebuffer(k,Lt),v[k]=Lt,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Lt),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Zt(k,Lt){let ct=M,gt=!1;if(k){ct=x.get(Lt),ct===void 0&&(ct=[],x.set(Lt,ct));const Bt=k.textures;if(ct.length!==Bt.length||ct[0]!==o.COLOR_ATTACHMENT0){for(let Nt=0,ie=Bt.length;Nt<ie;Nt++)ct[Nt]=o.COLOR_ATTACHMENT0+Nt;ct.length=Bt.length,gt=!0}}else ct[0]!==o.BACK&&(ct[0]=o.BACK,gt=!0);gt&&o.drawBuffers(ct)}function Fe(k){return b!==k?(o.useProgram(k),b=k,!0):!1}const Pe={[mr]:o.FUNC_ADD,[Vx]:o.FUNC_SUBTRACT,[kx]:o.FUNC_REVERSE_SUBTRACT};Pe[Xx]=o.MIN,Pe[Wx]=o.MAX;const ue={[qx]:o.ZERO,[Yx]:o.ONE,[jx]:o.SRC_COLOR,[ph]:o.SRC_ALPHA,[tS]:o.SRC_ALPHA_SATURATE,[Jx]:o.DST_COLOR,[Kx]:o.DST_ALPHA,[Zx]:o.ONE_MINUS_SRC_COLOR,[mh]:o.ONE_MINUS_SRC_ALPHA,[$x]:o.ONE_MINUS_DST_COLOR,[Qx]:o.ONE_MINUS_DST_ALPHA,[eS]:o.CONSTANT_COLOR,[nS]:o.ONE_MINUS_CONSTANT_COLOR,[iS]:o.CONSTANT_ALPHA,[aS]:o.ONE_MINUS_CONSTANT_ALPHA};function H(k,Lt,ct,gt,Bt,Nt,ie,He,tn,ye){if(k===Ia){C===!0&&(Ut(o.BLEND),C=!1);return}if(C===!1&&(At(o.BLEND),C=!0),k!==Gx){if(k!==y||ye!==D){if((_!==mr||w!==mr)&&(o.blendEquation(o.FUNC_ADD),_=mr,w=mr),ye)switch(k){case ds:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Qg:o.blendFunc(o.ONE,o.ONE);break;case Jg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case $g:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ds:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Qg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Jg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case $g:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}B=null,N=null,F=null,G=null,I.set(0,0,0),Z=0,y=k,D=ye}return}Bt=Bt||Lt,Nt=Nt||ct,ie=ie||gt,(Lt!==_||Bt!==w)&&(o.blendEquationSeparate(Pe[Lt],Pe[Bt]),_=Lt,w=Bt),(ct!==B||gt!==N||Nt!==F||ie!==G)&&(o.blendFuncSeparate(ue[ct],ue[gt],ue[Nt],ue[ie]),B=ct,N=gt,F=Nt,G=ie),(He.equals(I)===!1||tn!==Z)&&(o.blendColor(He.r,He.g,He.b,tn),I.copy(He),Z=tn),y=k,D=!1}function Un(k,Lt){k.side===Qi?Ut(o.CULL_FACE):At(o.CULL_FACE);let ct=k.side===In;Lt&&(ct=!ct),me(ct),k.blending===ds&&k.transparent===!1?H(Ia):H(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const gt=k.stencilWrite;d.setTest(gt),gt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),we(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?At(o.SAMPLE_ALPHA_TO_COVERAGE):Ut(o.SAMPLE_ALPHA_TO_COVERAGE)}function me(k){R!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),R=k)}function ne(k){k!==Ix?(At(o.CULL_FACE),k!==z&&(k===Kg?o.cullFace(o.BACK):k===Fx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ut(o.CULL_FACE),z=k}function Xt(k){k!==et&&(O&&o.lineWidth(k),et=k)}function we(k,Lt,ct){k?(At(o.POLYGON_OFFSET_FILL),(tt!==Lt||ut!==ct)&&(o.polygonOffset(Lt,ct),tt=Lt,ut=ct)):Ut(o.POLYGON_OFFSET_FILL)}function Gt(k){k?At(o.SCISSOR_TEST):Ut(o.SCISSOR_TEST)}function L(k){k===void 0&&(k=o.TEXTURE0+lt-1),yt!==k&&(o.activeTexture(k),yt=k)}function T(k,Lt,ct){ct===void 0&&(yt===null?ct=o.TEXTURE0+lt-1:ct=yt);let gt=U[ct];gt===void 0&&(gt={type:void 0,texture:void 0},U[ct]=gt),(gt.type!==k||gt.texture!==Lt)&&(yt!==ct&&(o.activeTexture(ct),yt=ct),o.bindTexture(k,Lt||xt[k]),gt.type=k,gt.texture=Lt)}function nt(){const k=U[yt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function mt(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ht(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Jt(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Yt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Kt(k){St.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),St.copy(k))}function Pt(k){Q.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Q.copy(k))}function le(k,Lt){let ct=p.get(Lt);ct===void 0&&(ct=new WeakMap,p.set(Lt,ct));let gt=ct.get(k);gt===void 0&&(gt=o.getUniformBlockIndex(Lt,k.name),ct.set(k,gt))}function ee(k,Lt){const gt=p.get(Lt).get(k);m.get(Lt)!==gt&&(o.uniformBlockBinding(Lt,gt,k.__bindingPointIndex),m.set(Lt,gt))}function De(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},yt=null,U={},v={},x=new WeakMap,M=[],b=null,C=!1,y=null,_=null,B=null,N=null,w=null,F=null,G=null,I=new Ce(0,0,0),Z=0,D=!1,R=null,z=null,et=null,tt=null,ut=null,St.set(0,0,o.canvas.width,o.canvas.height),Q.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:At,disable:Ut,bindFramebuffer:se,drawBuffers:Zt,useProgram:Fe,setBlending:H,setMaterial:Un,setFlipSided:me,setCullFace:ne,setLineWidth:Xt,setPolygonOffset:we,setScissorTest:Gt,activeTexture:L,bindTexture:T,unbindTexture:nt,compressedTexImage2D:mt,compressedTexImage3D:Et,texImage2D:It,texImage3D:Yt,updateUBOMapping:le,uniformBlockBinding:ee,texStorage2D:Jt,texStorage3D:bt,texSubImage2D:ht,texSubImage3D:Ot,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Ht,scissor:Kt,viewport:Pt,reset:De}}function BT(o,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ie,g=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,T){return M?new OffscreenCanvas(L,T):Ec("canvas")}function C(L,T,nt){let mt=1;const Et=Gt(L);if((Et.width>nt||Et.height>nt)&&(mt=nt/Math.max(Et.width,Et.height)),mt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ht=Math.floor(mt*Et.width),Ot=Math.floor(mt*Et.height);v===void 0&&(v=b(ht,Ot));const Rt=T?b(ht,Ot):v;return Rt.width=ht,Rt.height=Ot,Rt.getContext("2d").drawImage(L,0,0,ht,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+ht+"x"+Ot+")."),Rt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),L;return L}function y(L){return L.generateMipmaps}function _(L){o.generateMipmap(L)}function B(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(L,T,nt,mt,Et=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ht=T;if(T===o.RED&&(nt===o.FLOAT&&(ht=o.R32F),nt===o.HALF_FLOAT&&(ht=o.R16F),nt===o.UNSIGNED_BYTE&&(ht=o.R8)),T===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ht=o.R8UI),nt===o.UNSIGNED_SHORT&&(ht=o.R16UI),nt===o.UNSIGNED_INT&&(ht=o.R32UI),nt===o.BYTE&&(ht=o.R8I),nt===o.SHORT&&(ht=o.R16I),nt===o.INT&&(ht=o.R32I)),T===o.RG&&(nt===o.FLOAT&&(ht=o.RG32F),nt===o.HALF_FLOAT&&(ht=o.RG16F),nt===o.UNSIGNED_BYTE&&(ht=o.RG8)),T===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ht=o.RG8UI),nt===o.UNSIGNED_SHORT&&(ht=o.RG16UI),nt===o.UNSIGNED_INT&&(ht=o.RG32UI),nt===o.BYTE&&(ht=o.RG8I),nt===o.SHORT&&(ht=o.RG16I),nt===o.INT&&(ht=o.RG32I)),T===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ht=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(ht=o.RGB16UI),nt===o.UNSIGNED_INT&&(ht=o.RGB32UI),nt===o.BYTE&&(ht=o.RGB8I),nt===o.SHORT&&(ht=o.RGB16I),nt===o.INT&&(ht=o.RGB32I)),T===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ht=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(ht=o.RGBA16UI),nt===o.UNSIGNED_INT&&(ht=o.RGBA32UI),nt===o.BYTE&&(ht=o.RGBA8I),nt===o.SHORT&&(ht=o.RGBA16I),nt===o.INT&&(ht=o.RGBA32I)),T===o.RGB&&nt===o.UNSIGNED_INT_5_9_9_9_REV&&(ht=o.RGB9_E5),T===o.RGBA){const Ot=Et?yc:Te.getTransfer(mt);nt===o.FLOAT&&(ht=o.RGBA32F),nt===o.HALF_FLOAT&&(ht=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(ht=Ot===Oe?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(ht=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(ht=o.RGB5_A1)}return(ht===o.R16F||ht===o.R32F||ht===o.RG16F||ht===o.RG32F||ht===o.RGBA16F||ht===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ht}function w(L,T){let nt;return L?T===null||T===xr||T===bo?nt=o.DEPTH24_STENCIL8:T===Ji?nt=o.DEPTH32F_STENCIL8:T===To&&(nt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===xr||T===bo?nt=o.DEPTH_COMPONENT24:T===Ji?nt=o.DEPTH_COMPONENT32F:T===To&&(nt=o.DEPTH_COMPONENT16),nt}function F(L,T){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==mi&&L.minFilter!==Ei?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function G(L){const T=L.target;T.removeEventListener("dispose",G),Z(T),T.isVideoTexture&&g.delete(T)}function I(L){const T=L.target;T.removeEventListener("dispose",I),R(T)}function Z(L){const T=r.get(L);if(T.__webglInit===void 0)return;const nt=L.source,mt=x.get(nt);if(mt){const Et=mt[T.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&D(L),Object.keys(mt).length===0&&x.delete(nt)}r.remove(L)}function D(L){const T=r.get(L);o.deleteTexture(T.__webglTexture);const nt=L.source,mt=x.get(nt);delete mt[T.__cacheKey],h.memory.textures--}function R(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(T.__webglFramebuffer[mt]))for(let Et=0;Et<T.__webglFramebuffer[mt].length;Et++)o.deleteFramebuffer(T.__webglFramebuffer[mt][Et]);else o.deleteFramebuffer(T.__webglFramebuffer[mt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[mt])}else{if(Array.isArray(T.__webglFramebuffer))for(let mt=0;mt<T.__webglFramebuffer.length;mt++)o.deleteFramebuffer(T.__webglFramebuffer[mt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let mt=0;mt<T.__webglColorRenderbuffer.length;mt++)T.__webglColorRenderbuffer[mt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[mt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const nt=L.textures;for(let mt=0,Et=nt.length;mt<Et;mt++){const ht=r.get(nt[mt]);ht.__webglTexture&&(o.deleteTexture(ht.__webglTexture),h.memory.textures--),r.remove(nt[mt])}r.remove(L)}let z=0;function et(){z=0}function tt(){const L=z;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),z+=1,L}function ut(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function lt(L,T){const nt=r.get(L);if(L.isVideoTexture&&Xt(L),L.isRenderTargetTexture===!1&&L.version>0&&nt.__version!==L.version){const mt=L.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(nt,L,T);return}}i.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+T)}function O(L,T){const nt=r.get(L);if(L.version>0&&nt.__version!==L.version){Q(nt,L,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+T)}function Y(L,T){const nt=r.get(L);if(L.version>0&&nt.__version!==L.version){Q(nt,L,T);return}i.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+T)}function W(L,T){const nt=r.get(L);if(L.version>0&&nt.__version!==L.version){pt(nt,L,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+T)}const yt={[bh]:o.REPEAT,[_r]:o.CLAMP_TO_EDGE,[Ah]:o.MIRRORED_REPEAT},U={[mi]:o.NEAREST,[pS]:o.NEAREST_MIPMAP_NEAREST,[Xl]:o.NEAREST_MIPMAP_LINEAR,[Ei]:o.LINEAR,[zf]:o.LINEAR_MIPMAP_NEAREST,[vr]:o.LINEAR_MIPMAP_LINEAR},$={[xS]:o.NEVER,[bS]:o.ALWAYS,[SS]:o.LESS,[s0]:o.LEQUAL,[yS]:o.EQUAL,[TS]:o.GEQUAL,[MS]:o.GREATER,[ES]:o.NOTEQUAL};function vt(L,T){if(T.type===Ji&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ei||T.magFilter===zf||T.magFilter===Xl||T.magFilter===vr||T.minFilter===Ei||T.minFilter===zf||T.minFilter===Xl||T.minFilter===vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,yt[T.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,yt[T.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,yt[T.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,U[T.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,U[T.minFilter]),T.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,$[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===mi||T.minFilter!==Xl&&T.minFilter!==vr||T.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const nt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function St(L,T){let nt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",G));const mt=T.source;let Et=x.get(mt);Et===void 0&&(Et={},x.set(mt,Et));const ht=ut(T);if(ht!==L.__cacheKey){Et[ht]===void 0&&(Et[ht]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,nt=!0),Et[ht].usedTimes++;const Ot=Et[L.__cacheKey];Ot!==void 0&&(Et[L.__cacheKey].usedTimes--,Ot.usedTimes===0&&D(T)),L.__cacheKey=ht,L.__webglTexture=Et[ht].texture}return nt}function Q(L,T,nt){let mt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(mt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(mt=o.TEXTURE_3D);const Et=St(L,T),ht=T.source;i.bindTexture(mt,L.__webglTexture,o.TEXTURE0+nt);const Ot=r.get(ht);if(ht.version!==Ot.__version||Et===!0){i.activeTexture(o.TEXTURE0+nt);const Rt=Te.getPrimaries(Te.workingColorSpace),Ht=T.colorSpace===za?null:Te.getPrimaries(T.colorSpace),Jt=T.colorSpace===za||Rt===Ht?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let bt=C(T.image,!1,l.maxTextureSize);bt=we(T,bt);const It=u.convert(T.format,T.colorSpace),Yt=u.convert(T.type);let Kt=N(T.internalFormat,It,Yt,T.colorSpace,T.isVideoTexture);vt(mt,T);let Pt;const le=T.mipmaps,ee=T.isVideoTexture!==!0,De=Ot.__version===void 0||Et===!0,k=ht.dataReady,Lt=F(T,bt);if(T.isDepthTexture)Kt=w(T.format===Ro,T.type),De&&(ee?i.texStorage2D(o.TEXTURE_2D,1,Kt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Kt,bt.width,bt.height,0,It,Yt,null));else if(T.isDataTexture)if(le.length>0){ee&&De&&i.texStorage2D(o.TEXTURE_2D,Lt,Kt,le[0].width,le[0].height);for(let ct=0,gt=le.length;ct<gt;ct++)Pt=le[ct],ee?k&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,Pt.width,Pt.height,It,Yt,Pt.data):i.texImage2D(o.TEXTURE_2D,ct,Kt,Pt.width,Pt.height,0,It,Yt,Pt.data);T.generateMipmaps=!1}else ee?(De&&i.texStorage2D(o.TEXTURE_2D,Lt,Kt,bt.width,bt.height),k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt.width,bt.height,It,Yt,bt.data)):i.texImage2D(o.TEXTURE_2D,0,Kt,bt.width,bt.height,0,It,Yt,bt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ee&&De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Kt,le[0].width,le[0].height,bt.depth);for(let ct=0,gt=le.length;ct<gt;ct++)if(Pt=le[ct],T.format!==pi)if(It!==null)if(ee){if(k)if(T.layerUpdates.size>0){const Bt=M_(Pt.width,Pt.height,T.format,T.type);for(const Nt of T.layerUpdates){const ie=Pt.data.subarray(Nt*Bt/Pt.data.BYTES_PER_ELEMENT,(Nt+1)*Bt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,Nt,Pt.width,Pt.height,1,It,ie)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,Pt.width,Pt.height,bt.depth,It,Pt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ct,Kt,Pt.width,Pt.height,bt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,Pt.width,Pt.height,bt.depth,It,Yt,Pt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ct,Kt,Pt.width,Pt.height,bt.depth,0,It,Yt,Pt.data)}else{ee&&De&&i.texStorage2D(o.TEXTURE_2D,Lt,Kt,le[0].width,le[0].height);for(let ct=0,gt=le.length;ct<gt;ct++)Pt=le[ct],T.format!==pi?It!==null?ee?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,ct,0,0,Pt.width,Pt.height,It,Pt.data):i.compressedTexImage2D(o.TEXTURE_2D,ct,Kt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?k&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,Pt.width,Pt.height,It,Yt,Pt.data):i.texImage2D(o.TEXTURE_2D,ct,Kt,Pt.width,Pt.height,0,It,Yt,Pt.data)}else if(T.isDataArrayTexture)if(ee){if(De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Kt,bt.width,bt.height,bt.depth),k)if(T.layerUpdates.size>0){const ct=M_(bt.width,bt.height,T.format,T.type);for(const gt of T.layerUpdates){const Bt=bt.data.subarray(gt*ct/bt.data.BYTES_PER_ELEMENT,(gt+1)*ct/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,bt.width,bt.height,1,It,Yt,Bt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,It,Yt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Kt,bt.width,bt.height,bt.depth,0,It,Yt,bt.data);else if(T.isData3DTexture)ee?(De&&i.texStorage3D(o.TEXTURE_3D,Lt,Kt,bt.width,bt.height,bt.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,It,Yt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Kt,bt.width,bt.height,bt.depth,0,It,Yt,bt.data);else if(T.isFramebufferTexture){if(De)if(ee)i.texStorage2D(o.TEXTURE_2D,Lt,Kt,bt.width,bt.height);else{let ct=bt.width,gt=bt.height;for(let Bt=0;Bt<Lt;Bt++)i.texImage2D(o.TEXTURE_2D,Bt,Kt,ct,gt,0,It,Yt,null),ct>>=1,gt>>=1}}else if(le.length>0){if(ee&&De){const ct=Gt(le[0]);i.texStorage2D(o.TEXTURE_2D,Lt,Kt,ct.width,ct.height)}for(let ct=0,gt=le.length;ct<gt;ct++)Pt=le[ct],ee?k&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,It,Yt,Pt):i.texImage2D(o.TEXTURE_2D,ct,Kt,It,Yt,Pt);T.generateMipmaps=!1}else if(ee){if(De){const ct=Gt(bt);i.texStorage2D(o.TEXTURE_2D,Lt,Kt,ct.width,ct.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,It,Yt,bt)}else i.texImage2D(o.TEXTURE_2D,0,Kt,It,Yt,bt);y(T)&&_(mt),Ot.__version=ht.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function pt(L,T,nt){if(T.image.length!==6)return;const mt=St(L,T),Et=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+nt);const ht=r.get(Et);if(Et.version!==ht.__version||mt===!0){i.activeTexture(o.TEXTURE0+nt);const Ot=Te.getPrimaries(Te.workingColorSpace),Rt=T.colorSpace===za?null:Te.getPrimaries(T.colorSpace),Ht=T.colorSpace===za||Ot===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);const Jt=T.isCompressedTexture||T.image[0].isCompressedTexture,bt=T.image[0]&&T.image[0].isDataTexture,It=[];for(let gt=0;gt<6;gt++)!Jt&&!bt?It[gt]=C(T.image[gt],!0,l.maxCubemapSize):It[gt]=bt?T.image[gt].image:T.image[gt],It[gt]=we(T,It[gt]);const Yt=It[0],Kt=u.convert(T.format,T.colorSpace),Pt=u.convert(T.type),le=N(T.internalFormat,Kt,Pt,T.colorSpace),ee=T.isVideoTexture!==!0,De=ht.__version===void 0||mt===!0,k=Et.dataReady;let Lt=F(T,Yt);vt(o.TEXTURE_CUBE_MAP,T);let ct;if(Jt){ee&&De&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,le,Yt.width,Yt.height);for(let gt=0;gt<6;gt++){ct=It[gt].mipmaps;for(let Bt=0;Bt<ct.length;Bt++){const Nt=ct[Bt];T.format!==pi?Kt!==null?ee?k&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,0,0,Nt.width,Nt.height,Kt,Nt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,le,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,0,0,Nt.width,Nt.height,Kt,Pt,Nt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,le,Nt.width,Nt.height,0,Kt,Pt,Nt.data)}}}else{if(ct=T.mipmaps,ee&&De){ct.length>0&&Lt++;const gt=Gt(It[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,le,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(bt){ee?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,It[gt].width,It[gt].height,Kt,Pt,It[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,le,It[gt].width,It[gt].height,0,Kt,Pt,It[gt].data);for(let Bt=0;Bt<ct.length;Bt++){const ie=ct[Bt].image[gt].image;ee?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,0,0,ie.width,ie.height,Kt,Pt,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,le,ie.width,ie.height,0,Kt,Pt,ie.data)}}else{ee?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Kt,Pt,It[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,le,Kt,Pt,It[gt]);for(let Bt=0;Bt<ct.length;Bt++){const Nt=ct[Bt];ee?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,0,0,Kt,Pt,Nt.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,le,Kt,Pt,Nt.image[gt])}}}y(T)&&_(o.TEXTURE_CUBE_MAP),ht.__version=Et.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function xt(L,T,nt,mt,Et,ht){const Ot=u.convert(nt.format,nt.colorSpace),Rt=u.convert(nt.type),Ht=N(nt.internalFormat,Ot,Rt,nt.colorSpace),Jt=r.get(T),bt=r.get(nt);if(bt.__renderTarget=T,!Jt.__hasExternalTextures){const It=Math.max(1,T.width>>ht),Yt=Math.max(1,T.height>>ht);Et===o.TEXTURE_3D||Et===o.TEXTURE_2D_ARRAY?i.texImage3D(Et,ht,Ht,It,Yt,T.depth,0,Ot,Rt,null):i.texImage2D(Et,ht,Ht,It,Yt,0,Ot,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),ne(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,mt,Et,bt.__webglTexture,0,me(T)):(Et===o.TEXTURE_2D||Et>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,mt,Et,bt.__webglTexture,ht),i.bindFramebuffer(o.FRAMEBUFFER,null)}function At(L,T,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,L),T.depthBuffer){const mt=T.depthTexture,Et=mt&&mt.isDepthTexture?mt.type:null,ht=w(T.stencilBuffer,Et),Ot=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=me(T);ne(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,ht,T.width,T.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,ht,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ht,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ot,o.RENDERBUFFER,L)}else{const mt=T.textures;for(let Et=0;Et<mt.length;Et++){const ht=mt[Et],Ot=u.convert(ht.format,ht.colorSpace),Rt=u.convert(ht.type),Ht=N(ht.internalFormat,Ot,Rt,ht.colorSpace),Jt=me(T);nt&&ne(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Jt,Ht,T.width,T.height):ne(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Jt,Ht,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ht,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ut(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=r.get(T.depthTexture);mt.__renderTarget=T,(!mt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),lt(T.depthTexture,0);const Et=mt.__webglTexture,ht=me(T);if(T.depthTexture.format===Ao)ne(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0);else if(T.depthTexture.format===Ro)ne(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function se(L){const T=r.get(L),nt=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const mt=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),mt){const Et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,mt.removeEventListener("dispose",Et)};mt.addEventListener("dispose",Et),T.__depthDisposeCallback=Et}T.__boundDepthTexture=mt}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const mt=L.texture.mipmaps;mt&&mt.length>0?Ut(T.__webglFramebuffer[0],L):Ut(T.__webglFramebuffer,L)}else if(nt){T.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[mt]),T.__webglDepthbuffer[mt]===void 0)T.__webglDepthbuffer[mt]=o.createRenderbuffer(),At(T.__webglDepthbuffer[mt],L,!1);else{const Et=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer[mt];o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,ht)}}else{const mt=L.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),At(T.__webglDepthbuffer,L,!1);else{const Et=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,ht)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Zt(L,T,nt){const mt=r.get(L);T!==void 0&&xt(mt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&se(L)}function Fe(L){const T=L.texture,nt=r.get(L),mt=r.get(T);L.addEventListener("dispose",I);const Et=L.textures,ht=L.isWebGLCubeRenderTarget===!0,Ot=Et.length>1;if(Ot||(mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture()),mt.__version=T.version,h.memory.textures++),ht){nt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer[Rt]=[];for(let Ht=0;Ht<T.mipmaps.length;Ht++)nt.__webglFramebuffer[Rt][Ht]=o.createFramebuffer()}else nt.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Rt=0;Rt<T.mipmaps.length;Rt++)nt.__webglFramebuffer[Rt]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(Ot)for(let Rt=0,Ht=Et.length;Rt<Ht;Rt++){const Jt=r.get(Et[Rt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&ne(L)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<Et.length;Rt++){const Ht=Et[Rt];nt.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt]);const Jt=u.convert(Ht.format,Ht.colorSpace),bt=u.convert(Ht.type),It=N(Ht.internalFormat,Jt,bt,Ht.colorSpace,L.isXRRenderTarget===!0),Yt=me(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,It,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),At(nt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ht){i.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),vt(o.TEXTURE_CUBE_MAP,T);for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ht=0;Ht<T.mipmaps.length;Ht++)xt(nt.__webglFramebuffer[Rt][Ht],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ht);else xt(nt.__webglFramebuffer[Rt],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let Rt=0,Ht=Et.length;Rt<Ht;Rt++){const Jt=Et[Rt],bt=r.get(Jt);i.bindTexture(o.TEXTURE_2D,bt.__webglTexture),vt(o.TEXTURE_2D,Jt),xt(nt.__webglFramebuffer,L,Jt,o.COLOR_ATTACHMENT0+Rt,o.TEXTURE_2D,0),y(Jt)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Rt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,mt.__webglTexture),vt(Rt,T),T.mipmaps&&T.mipmaps.length>0)for(let Ht=0;Ht<T.mipmaps.length;Ht++)xt(nt.__webglFramebuffer[Ht],L,T,o.COLOR_ATTACHMENT0,Rt,Ht);else xt(nt.__webglFramebuffer,L,T,o.COLOR_ATTACHMENT0,Rt,0);y(T)&&_(Rt),i.unbindTexture()}L.depthBuffer&&se(L)}function Pe(L){const T=L.textures;for(let nt=0,mt=T.length;nt<mt;nt++){const Et=T[nt];if(y(Et)){const ht=B(L),Ot=r.get(Et).__webglTexture;i.bindTexture(ht,Ot),_(ht),i.unbindTexture()}}}const ue=[],H=[];function Un(L){if(L.samples>0){if(ne(L)===!1){const T=L.textures,nt=L.width,mt=L.height;let Et=o.COLOR_BUFFER_BIT;const ht=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=r.get(L),Rt=T.length>1;if(Rt)for(let Jt=0;Jt<T.length;Jt++)i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const Ht=L.texture.mipmaps;Ht&&Ht.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Jt=0;Jt<T.length;Jt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Et|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Et|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Jt]);const bt=r.get(T[Jt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,nt,mt,0,0,nt,mt,Et,o.NEAREST),m===!0&&(ue.length=0,H.length=0,ue.push(o.COLOR_ATTACHMENT0+Jt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ue.push(ht),H.push(ht),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,H)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ue))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Jt=0;Jt<T.length;Jt++){i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Jt]);const bt=r.get(T[Jt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const T=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function me(L){return Math.min(l.maxSamples,L.samples)}function ne(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Xt(L){const T=h.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function we(L,T){const nt=L.colorSpace,mt=L.format,Et=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||nt!==vs&&nt!==za&&(Te.getTransfer(nt)===Oe?(mt!==pi||Et!==na)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),T}function Gt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=tt,this.resetTextureUnits=et,this.setTexture2D=lt,this.setTexture2DArray=O,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=Zt,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Un,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=ne}function zT(o,e){function i(r,l=za){let u;const h=Te.getTransfer(l);if(r===na)return o.UNSIGNED_BYTE;if(r===sd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===od)return o.UNSIGNED_SHORT_5_5_5_1;if(r===t0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===J_)return o.BYTE;if(r===$_)return o.SHORT;if(r===To)return o.UNSIGNED_SHORT;if(r===rd)return o.INT;if(r===xr)return o.UNSIGNED_INT;if(r===Ji)return o.FLOAT;if(r===Co)return o.HALF_FLOAT;if(r===e0)return o.ALPHA;if(r===n0)return o.RGB;if(r===pi)return o.RGBA;if(r===Ao)return o.DEPTH_COMPONENT;if(r===Ro)return o.DEPTH_STENCIL;if(r===i0)return o.RED;if(r===ld)return o.RED_INTEGER;if(r===a0)return o.RG;if(r===cd)return o.RG_INTEGER;if(r===ud)return o.RGBA_INTEGER;if(r===pc||r===mc||r===gc||r===_c)if(h===Oe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===pc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===gc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_c)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===pc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===gc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_c)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rh||r===Ch||r===wh||r===Dh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Rh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ch)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Uh||r===Lh||r===Nh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Uh||r===Lh)return h===Oe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Nh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Oh||r===Ph||r===Bh||r===zh||r===Ih||r===Fh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Oh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ph)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ih)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Hh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vc||r===jh||r===Zh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===vc)return h===Oe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===r0||r===Kh||r===Qh||r===Jh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===vc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Kh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Qh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Jh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const IT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Fn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ga({vertexShader:IT,fragmentShader:FT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ta(new Rc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GT extends Ss{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,x=null,M=null,b=null;const C=new HT,y=i.getContextAttributes();let _=null,B=null;const N=[],w=[],F=new Ie;let G=null;const I=new si;I.viewport=new Je;const Z=new si;Z.viewport=new Je;const D=[I,Z],R=new ly;let z=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pt=N[Q];return pt===void 0&&(pt=new rh,N[Q]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(Q){let pt=N[Q];return pt===void 0&&(pt=new rh,N[Q]=pt),pt.getGripSpace()},this.getHand=function(Q){let pt=N[Q];return pt===void 0&&(pt=new rh,N[Q]=pt),pt.getHandSpace()};function tt(Q){const pt=w.indexOf(Q.inputSource);if(pt===-1)return;const xt=N[pt];xt!==void 0&&(xt.update(Q.inputSource,Q.frame,p||h),xt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ut(){l.removeEventListener("select",tt),l.removeEventListener("selectstart",tt),l.removeEventListener("selectend",tt),l.removeEventListener("squeeze",tt),l.removeEventListener("squeezestart",tt),l.removeEventListener("squeezeend",tt),l.removeEventListener("end",ut),l.removeEventListener("inputsourceschange",lt);for(let Q=0;Q<N.length;Q++){const pt=w[Q];pt!==null&&(w[Q]=null,N[Q].disconnect(pt))}z=null,et=null,C.reset(),e.setRenderTarget(_),M=null,x=null,v=null,l=null,B=null,St.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",tt),l.addEventListener("selectstart",tt),l.addEventListener("selectend",tt),l.addEventListener("squeeze",tt),l.addEventListener("squeezestart",tt),l.addEventListener("squeezeend",tt),l.addEventListener("end",ut),l.addEventListener("inputsourceschange",lt),y.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,At=null,Ut=null;y.depth&&(Ut=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=y.stencil?Ro:Ao,At=y.stencil?bo:xr);const se={colorFormat:i.RGBA8,depthFormat:Ut,scaleFactor:u};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(se),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),B=new Sr(x.textureWidth,x.textureHeight,{format:pi,type:na,depthTexture:new S0(x.textureWidth,x.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const xt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),B=new Sr(M.framebufferWidth,M.framebufferHeight,{format:pi,type:na,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),St.setContext(l),St.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function lt(Q){for(let pt=0;pt<Q.removed.length;pt++){const xt=Q.removed[pt],At=w.indexOf(xt);At>=0&&(w[At]=null,N[At].disconnect(xt))}for(let pt=0;pt<Q.added.length;pt++){const xt=Q.added[pt];let At=w.indexOf(xt);if(At===-1){for(let se=0;se<N.length;se++)if(se>=w.length){w.push(xt),At=se;break}else if(w[se]===null){w[se]=xt,At=se;break}if(At===-1)break}const Ut=N[At];Ut&&Ut.connect(xt)}}const O=new ot,Y=new ot;function W(Q,pt,xt){O.setFromMatrixPosition(pt.matrixWorld),Y.setFromMatrixPosition(xt.matrixWorld);const At=O.distanceTo(Y),Ut=pt.projectionMatrix.elements,se=xt.projectionMatrix.elements,Zt=Ut[14]/(Ut[10]-1),Fe=Ut[14]/(Ut[10]+1),Pe=(Ut[9]+1)/Ut[5],ue=(Ut[9]-1)/Ut[5],H=(Ut[8]-1)/Ut[0],Un=(se[8]+1)/se[0],me=Zt*H,ne=Zt*Un,Xt=At/(-H+Un),we=Xt*-H;if(pt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(we),Q.translateZ(Xt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ut[10]===-1)Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Gt=Zt+Xt,L=Fe+Xt,T=me-we,nt=ne+(At-we),mt=Pe*Fe/L*Gt,Et=ue*Fe/L*Gt;Q.projectionMatrix.makePerspective(T,nt,mt,Et,Gt,L),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function yt(Q,pt){pt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let pt=Q.near,xt=Q.far;C.texture!==null&&(C.depthNear>0&&(pt=C.depthNear),C.depthFar>0&&(xt=C.depthFar)),R.near=Z.near=I.near=pt,R.far=Z.far=I.far=xt,(z!==R.near||et!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,et=R.far),I.layers.mask=Q.layers.mask|2,Z.layers.mask=Q.layers.mask|4,R.layers.mask=I.layers.mask|Z.layers.mask;const At=Q.parent,Ut=R.cameras;yt(R,At);for(let se=0;se<Ut.length;se++)yt(Ut[se],At);Ut.length===2?W(R,I,Z):R.projectionMatrix.copy(I.projectionMatrix),U(Q,R,At)};function U(Q,pt,xt){xt===null?Q.matrix.copy(pt.matrixWorld):(Q.matrix.copy(xt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=$h*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(R)};let $=null;function vt(Q,pt){if(g=pt.getViewerPose(p||h),b=pt,g!==null){const xt=g.views;M!==null&&(e.setRenderTargetFramebuffer(B,M.framebuffer),e.setRenderTarget(B));let At=!1;xt.length!==R.cameras.length&&(R.cameras.length=0,At=!0);for(let Zt=0;Zt<xt.length;Zt++){const Fe=xt[Zt];let Pe=null;if(M!==null)Pe=M.getViewport(Fe);else{const H=v.getViewSubImage(x,Fe);Pe=H.viewport,Zt===0&&(e.setRenderTargetTextures(B,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(B))}let ue=D[Zt];ue===void 0&&(ue=new si,ue.layers.enable(Zt),ue.viewport=new Je,D[Zt]=ue),ue.matrix.fromArray(Fe.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(Fe.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),Zt===0&&(R.matrix.copy(ue.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),At===!0&&R.cameras.push(ue)}const Ut=l.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Zt=v.getDepthInformation(xt[0]);Zt&&Zt.isValid&&Zt.texture&&C.init(e,Zt,l.renderState)}}for(let xt=0;xt<N.length;xt++){const At=w[xt],Ut=N[xt];At!==null&&Ut!==void 0&&Ut.update(At,pt,p||h)}$&&$(Q,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),b=null}const St=new y0;St.setAnimationLoop(vt),this.setAnimationLoop=function(Q){$=Q},this.dispose=function(){}}}const hr=new ia,VT=new $e;function kT(o,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,m0(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,B,N,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),v(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,w)):_.isMeshMatcapMaterial?(u(y,_),b(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),C(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,B,N):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===In&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===In&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const B=e.get(_),N=B.envMap,w=B.envMapRotation;N&&(y.envMap.value=N,hr.copy(w),hr.x*=-1,hr.y*=-1,hr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),y.envMapRotation.value.setFromMatrix4(VT.makeRotationFromEuler(hr)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,B,N){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*B,y.scale.value=N*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,B){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===In&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=B.texture,y.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,_){_.matcap&&(y.matcap.value=_.matcap)}function C(y,_){const B=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(B.matrixWorld),y.nearDistance.value=B.shadow.camera.near,y.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function XT(o,e,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,N){const w=N.program;r.uniformBlockBinding(B,w)}function p(B,N){let w=l[B.id];w===void 0&&(b(B),w=g(B),l[B.id]=w,B.addEventListener("dispose",y));const F=N.program;r.updateUBOMapping(B,F);const G=e.render.frame;u[B.id]!==G&&(x(B),u[B.id]=G)}function g(B){const N=v();B.__bindingPointIndex=N;const w=o.createBuffer(),F=B.__size,G=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,F,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,w),w}function v(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(B){const N=l[B.id],w=B.uniforms,F=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let G=0,I=w.length;G<I;G++){const Z=Array.isArray(w[G])?w[G]:[w[G]];for(let D=0,R=Z.length;D<R;D++){const z=Z[D];if(M(z,G,D,F)===!0){const et=z.__offset,tt=Array.isArray(z.value)?z.value:[z.value];let ut=0;for(let lt=0;lt<tt.length;lt++){const O=tt[lt],Y=C(O);typeof O=="number"||typeof O=="boolean"?(z.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,et+ut,z.__data)):O.isMatrix3?(z.__data[0]=O.elements[0],z.__data[1]=O.elements[1],z.__data[2]=O.elements[2],z.__data[3]=0,z.__data[4]=O.elements[3],z.__data[5]=O.elements[4],z.__data[6]=O.elements[5],z.__data[7]=0,z.__data[8]=O.elements[6],z.__data[9]=O.elements[7],z.__data[10]=O.elements[8],z.__data[11]=0):(O.toArray(z.__data,ut),ut+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,et,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(B,N,w,F){const G=B.value,I=N+"_"+w;if(F[I]===void 0)return typeof G=="number"||typeof G=="boolean"?F[I]=G:F[I]=G.clone(),!0;{const Z=F[I];if(typeof G=="number"||typeof G=="boolean"){if(Z!==G)return F[I]=G,!0}else if(Z.equals(G)===!1)return Z.copy(G),!0}return!1}function b(B){const N=B.uniforms;let w=0;const F=16;for(let I=0,Z=N.length;I<Z;I++){const D=Array.isArray(N[I])?N[I]:[N[I]];for(let R=0,z=D.length;R<z;R++){const et=D[R],tt=Array.isArray(et.value)?et.value:[et.value];for(let ut=0,lt=tt.length;ut<lt;ut++){const O=tt[ut],Y=C(O),W=w%F,yt=W%Y.boundary,U=W+yt;w+=yt,U!==0&&F-U<Y.storage&&(w+=F-U),et.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=w,w+=Y.storage}}}const G=w%F;return G>0&&(w+=F-G),B.__size=w,B.__cache={},this}function C(B){const N={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(N.boundary=4,N.storage=4):B.isVector2?(N.boundary=8,N.storage=8):B.isVector3||B.isColor?(N.boundary=16,N.storage=12):B.isVector4?(N.boundary=16,N.storage=16):B.isMatrix3?(N.boundary=48,N.storage=48):B.isMatrix4?(N.boundary=64,N.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),N}function y(B){const N=B.target;N.removeEventListener("dispose",y);const w=h.indexOf(N.__bindingPointIndex);h.splice(w,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function _(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class WT{constructor(e={}){const{canvas:i=RS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),C=new Int32Array(4);let y=null,_=null;const B=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let F=!1;this._outputColorSpace=ri;let G=0,I=0,Z=null,D=-1,R=null;const z=new Je,et=new Je;let tt=null;const ut=new Ce(0);let lt=0,O=i.width,Y=i.height,W=1,yt=null,U=null;const $=new Je(0,0,O,Y),vt=new Je(0,0,O,Y);let St=!1;const Q=new v0;let pt=!1,xt=!1;const At=new $e,Ut=new $e,se=new ot,Zt=new Je,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function ue(){return Z===null?W:1}let H=r;function Un(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ad}`),i.addEventListener("webglcontextlost",gt,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",Nt,!1),H===null){const q="webgl2";if(H=Un(q,A),H===null)throw Un(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let me,ne,Xt,we,Gt,L,T,nt,mt,Et,ht,Ot,Rt,Ht,Jt,bt,It,Yt,Kt,Pt,le,ee,De,k;function Lt(){me=new e1(H),me.init(),ee=new zT(H,me),ne=new jE(H,me,e,ee),Xt=new PT(H,me),ne.reverseDepthBuffer&&x&&Xt.buffers.depth.setReversed(!0),we=new a1(H),Gt=new MT,L=new BT(H,me,Xt,Gt,ne,ee,we),T=new KE(w),nt=new t1(w),mt=new uy(H),De=new qE(H,mt),Et=new n1(H,mt,we,De),ht=new s1(H,Et,mt,we),Kt=new r1(H,ne,L),bt=new ZE(Gt),Ot=new yT(w,T,nt,me,ne,De,bt),Rt=new kT(w,Gt),Ht=new TT,Jt=new DT(me),Yt=new WE(w,T,nt,Xt,ht,M,m),It=new NT(w,ht,ne),k=new XT(H,we,ne,Xt),Pt=new YE(H,me,we),le=new i1(H,me,we),we.programs=Ot.programs,w.capabilities=ne,w.extensions=me,w.properties=Gt,w.renderLists=Ht,w.shadowMap=It,w.state=Xt,w.info=we}Lt();const ct=new GT(w,H);this.xr=ct,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(O,Y,!1))},this.getSize=function(A){return A.set(O,Y)},this.setSize=function(A,q,rt=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,Y=q,i.width=Math.floor(A*W),i.height=Math.floor(q*W),rt===!0&&(i.style.width=A+"px",i.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(O*W,Y*W).floor()},this.setDrawingBufferSize=function(A,q,rt){O=A,Y=q,W=rt,i.width=Math.floor(A*rt),i.height=Math.floor(q*rt),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,q,rt,st){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,q,rt,st),Xt.viewport(z.copy($).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(vt)},this.setScissor=function(A,q,rt,st){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,q,rt,st),Xt.scissor(et.copy(vt).multiplyScalar(W).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){Xt.setScissorTest(St=A)},this.setOpaqueSort=function(A){yt=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,rt=!0){let st=0;if(A){let j=!1;if(Z!==null){const Tt=Z.texture.format;j=Tt===ud||Tt===cd||Tt===ld}if(j){const Tt=Z.texture.type,Ct=Tt===na||Tt===xr||Tt===To||Tt===bo||Tt===sd||Tt===od,wt=Yt.getClearColor(),zt=Yt.getClearAlpha(),$t=wt.r,Wt=wt.g,kt=wt.b;Ct?(b[0]=$t,b[1]=Wt,b[2]=kt,b[3]=zt,H.clearBufferuiv(H.COLOR,0,b)):(C[0]=$t,C[1]=Wt,C[2]=kt,C[3]=zt,H.clearBufferiv(H.COLOR,0,C))}else st|=H.COLOR_BUFFER_BIT}q&&(st|=H.DEPTH_BUFFER_BIT),rt&&(st|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",gt,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",Nt,!1),Yt.dispose(),Ht.dispose(),Jt.dispose(),Gt.dispose(),T.dispose(),nt.dispose(),ht.dispose(),De.dispose(),k.dispose(),Ot.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",sn),ct.removeEventListener("sessionend",vn),Ln.stop()};function gt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const A=we.autoReset,q=It.enabled,rt=It.autoUpdate,st=It.needsUpdate,j=It.type;Lt(),we.autoReset=A,It.enabled=q,It.autoUpdate=rt,It.needsUpdate=st,It.type=j}function Nt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ie(A){const q=A.target;q.removeEventListener("dispose",ie),He(q)}function He(A){tn(A),Gt.remove(A)}function tn(A){const q=Gt.get(A).programs;q!==void 0&&(q.forEach(function(rt){Ot.releaseProgram(rt)}),A.isShaderMaterial&&Ot.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,rt,st,j,Tt){q===null&&(q=Fe);const Ct=j.isMesh&&j.matrixWorld.determinant()<0,wt=Xa(A,q,rt,st,j);Xt.setMaterial(st,Ct);let zt=rt.index,$t=1;if(st.wireframe===!0){if(zt=Et.getWireframeAttribute(rt),zt===void 0)return;$t=2}const Wt=rt.drawRange,kt=rt.attributes.position;let he=Wt.start*$t,Me=(Wt.start+Wt.count)*$t;Tt!==null&&(he=Math.max(he,Tt.start*$t),Me=Math.min(Me,(Tt.start+Tt.count)*$t)),zt!==null?(he=Math.max(he,0),Me=Math.min(Me,zt.count)):kt!=null&&(he=Math.max(he,0),Me=Math.min(Me,kt.count));const We=Me-he;if(We<0||We===1/0)return;De.setup(j,st,wt,rt,zt);let ge,_e=Pt;if(zt!==null&&(ge=mt.get(zt),_e=le,_e.setIndex(ge)),j.isMesh)st.wireframe===!0?(Xt.setLineWidth(st.wireframeLinewidth*ue()),_e.setMode(H.LINES)):_e.setMode(H.TRIANGLES);else if(j.isLine){let qt=st.linewidth;qt===void 0&&(qt=1),Xt.setLineWidth(qt*ue()),j.isLineSegments?_e.setMode(H.LINES):j.isLineLoop?_e.setMode(H.LINE_LOOP):_e.setMode(H.LINE_STRIP)}else j.isPoints?_e.setMode(H.POINTS):j.isSprite&&_e.setMode(H.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)xc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))_e.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const qt=j._multiDrawStarts,Ye=j._multiDrawCounts,Se=j._multiDrawCount,En=zt?mt.get(zt).bytesPerElement:1,la=Gt.get(st).currentProgram.getUniforms();for(let Ge=0;Ge<Se;Ge++)la.setValue(H,"_gl_DrawID",Ge),_e.render(qt[Ge]/En,Ye[Ge])}else if(j.isInstancedMesh)_e.renderInstances(he,We,j.count);else if(rt.isInstancedBufferGeometry){const qt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ye=Math.min(rt.instanceCount,qt);_e.renderInstances(he,We,Ye)}else _e.render(he,We)};function ye(A,q,rt){A.transparent===!0&&A.side===Qi&&A.forceSinglePass===!1?(A.side=In,A.needsUpdate=!0,sa(A,q,rt),A.side=Ha,A.needsUpdate=!0,sa(A,q,rt),A.side=Qi):sa(A,q,rt)}this.compile=function(A,q,rt=null){rt===null&&(rt=A),_=Jt.get(rt),_.init(q),N.push(_),rt.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),A!==rt&&A.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const st=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let Ct=0;Ct<Tt.length;Ct++){const wt=Tt[Ct];ye(wt,rt,j),st.add(wt)}else ye(Tt,rt,j),st.add(Tt)}),_=N.pop(),st},this.compileAsync=function(A,q,rt=null){const st=this.compile(A,q,rt);return new Promise(j=>{function Tt(){if(st.forEach(function(Ct){Gt.get(Ct).currentProgram.isReady()&&st.delete(Ct)}),st.size===0){j(A);return}setTimeout(Tt,10)}me.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Gn=null;function hn(A){Gn&&Gn(A)}function sn(){Ln.stop()}function vn(){Ln.start()}const Ln=new y0;Ln.setAnimationLoop(hn),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(A){Gn=A,ct.setAnimationLoop(A),A===null?Ln.stop():Ln.start()},ct.addEventListener("sessionstart",sn),ct.addEventListener("sessionend",vn),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(q),q=ct.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,q,Z),_=Jt.get(A,N.length),_.init(q),N.push(_),Ut.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Q.setFromProjectionMatrix(Ut),xt=this.localClippingEnabled,pt=bt.init(this.clippingPlanes,xt),y=Ht.get(A,B.length),y.init(),B.push(y),ct.enabled===!0&&ct.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&Va(Tt,q,-1/0,w.sortObjects)}Va(A,q,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(yt,U),Pe=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Pe&&Yt.addToRenderList(y,A),this.info.render.frame++,pt===!0&&bt.beginShadows();const rt=_.state.shadowsArray;It.render(rt,A,q),pt===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=y.opaque,j=y.transmissive;if(_.setupLights(),q.isArrayCamera){const Tt=q.cameras;if(j.length>0)for(let Ct=0,wt=Tt.length;Ct<wt;Ct++){const zt=Tt[Ct];Po(st,j,A,zt)}Pe&&Yt.render(A);for(let Ct=0,wt=Tt.length;Ct<wt;Ct++){const zt=Tt[Ct];Oo(y,A,zt,zt.viewport)}}else j.length>0&&Po(st,j,A,q),Pe&&Yt.render(A),Oo(y,A,q);Z!==null&&I===0&&(L.updateMultisampleRenderTarget(Z),L.updateRenderTargetMipmap(Z)),A.isScene===!0&&A.onAfterRender(w,A,q),De.resetDefaultState(),D=-1,R=null,N.pop(),N.length>0?(_=N[N.length-1],pt===!0&&bt.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,B.pop(),B.length>0?y=B[B.length-1]:y=null};function Va(A,q,rt,st){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){st&&Zt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ut);const Ct=ht.update(A),wt=A.material;wt.visible&&y.push(A,Ct,wt,rt,Zt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const Ct=ht.update(A),wt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Zt.copy(A.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Zt.copy(Ct.boundingSphere.center)),Zt.applyMatrix4(A.matrixWorld).applyMatrix4(Ut)),Array.isArray(wt)){const zt=Ct.groups;for(let $t=0,Wt=zt.length;$t<Wt;$t++){const kt=zt[$t],he=wt[kt.materialIndex];he&&he.visible&&y.push(A,Ct,he,rt,Zt.z,kt)}}else wt.visible&&y.push(A,Ct,wt,rt,Zt.z,null)}}const Tt=A.children;for(let Ct=0,wt=Tt.length;Ct<wt;Ct++)Va(Tt[Ct],q,rt,st)}function Oo(A,q,rt,st){const j=A.opaque,Tt=A.transmissive,Ct=A.transparent;_.setupLightsView(rt),pt===!0&&bt.setGlobalState(w.clippingPlanes,rt),st&&Xt.viewport(z.copy(st)),j.length>0&&ka(j,q,rt),Tt.length>0&&ka(Tt,q,rt),Ct.length>0&&ka(Ct,q,rt),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Po(A,q,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[st.id]===void 0&&(_.state.transmissionRenderTarget[st.id]=new Sr(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?Co:na,minFilter:vr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[st.id],Ct=st.viewport||z;Tt.setSize(Ct.z*w.transmissionResolutionScale,Ct.w*w.transmissionResolutionScale);const wt=w.getRenderTarget();w.setRenderTarget(Tt),w.getClearColor(ut),lt=w.getClearAlpha(),lt<1&&w.setClearColor(16777215,.5),w.clear(),Pe&&Yt.render(rt);const zt=w.toneMapping;w.toneMapping=Fa;const $t=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),_.setupLightsView(st),pt===!0&&bt.setGlobalState(w.clippingPlanes,st),ka(A,rt,st),L.updateMultisampleRenderTarget(Tt),L.updateRenderTargetMipmap(Tt),me.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let kt=0,he=q.length;kt<he;kt++){const Me=q[kt],We=Me.object,ge=Me.geometry,_e=Me.material,qt=Me.group;if(_e.side===Qi&&We.layers.test(st.layers)){const Ye=_e.side;_e.side=In,_e.needsUpdate=!0,ra(We,rt,st,ge,_e,qt),_e.side=Ye,_e.needsUpdate=!0,Wt=!0}}Wt===!0&&(L.updateMultisampleRenderTarget(Tt),L.updateRenderTargetMipmap(Tt))}w.setRenderTarget(wt),w.setClearColor(ut,lt),$t!==void 0&&(st.viewport=$t),w.toneMapping=zt}function ka(A,q,rt){const st=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Tt=A.length;j<Tt;j++){const Ct=A[j],wt=Ct.object,zt=Ct.geometry,$t=Ct.group;let Wt=Ct.material;Wt.allowOverride===!0&&st!==null&&(Wt=st),wt.layers.test(rt.layers)&&ra(wt,q,rt,zt,Wt,$t)}}function ra(A,q,rt,st,j,Tt){A.onBeforeRender(w,q,rt,st,j,Tt),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(w,q,rt,st,A,Tt),j.transparent===!0&&j.side===Qi&&j.forceSinglePass===!1?(j.side=In,j.needsUpdate=!0,w.renderBufferDirect(rt,q,st,j,A,Tt),j.side=Ha,j.needsUpdate=!0,w.renderBufferDirect(rt,q,st,j,A,Tt),j.side=Qi):w.renderBufferDirect(rt,q,st,j,A,Tt),A.onAfterRender(w,q,rt,st,j,Tt)}function sa(A,q,rt){q.isScene!==!0&&(q=Fe);const st=Gt.get(A),j=_.state.lights,Tt=_.state.shadowsArray,Ct=j.state.version,wt=Ot.getParameters(A,j.state,Tt,q,rt),zt=Ot.getProgramCacheKey(wt);let $t=st.programs;st.environment=A.isMeshStandardMaterial?q.environment:null,st.fog=q.fog,st.envMap=(A.isMeshStandardMaterial?nt:T).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",ie),$t=new Map,st.programs=$t);let Wt=$t.get(zt);if(Wt!==void 0){if(st.currentProgram===Wt&&st.lightsStateVersion===Ct)return Ri(A,wt),Wt}else wt.uniforms=Ot.getUniforms(A),A.onBeforeCompile(wt,w),Wt=Ot.acquireProgram(wt,zt),$t.set(zt,Wt),st.uniforms=wt.uniforms;const kt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=bt.uniform),Ri(A,wt),st.needsLights=en(A),st.lightsStateVersion=Ct,st.needsLights&&(kt.ambientLightColor.value=j.state.ambient,kt.lightProbe.value=j.state.probe,kt.directionalLights.value=j.state.directional,kt.directionalLightShadows.value=j.state.directionalShadow,kt.spotLights.value=j.state.spot,kt.spotLightShadows.value=j.state.spotShadow,kt.rectAreaLights.value=j.state.rectArea,kt.ltc_1.value=j.state.rectAreaLTC1,kt.ltc_2.value=j.state.rectAreaLTC2,kt.pointLights.value=j.state.point,kt.pointLightShadows.value=j.state.pointShadow,kt.hemisphereLights.value=j.state.hemi,kt.directionalShadowMap.value=j.state.directionalShadowMap,kt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,kt.spotShadowMap.value=j.state.spotShadowMap,kt.spotLightMatrix.value=j.state.spotLightMatrix,kt.spotLightMap.value=j.state.spotLightMap,kt.pointShadowMap.value=j.state.pointShadowMap,kt.pointShadowMatrix.value=j.state.pointShadowMatrix),st.currentProgram=Wt,st.uniformsList=null,Wt}function Ai(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Sc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Ri(A,q){const rt=Gt.get(A);rt.outputColorSpace=q.outputColorSpace,rt.batching=q.batching,rt.batchingColor=q.batchingColor,rt.instancing=q.instancing,rt.instancingColor=q.instancingColor,rt.instancingMorph=q.instancingMorph,rt.skinning=q.skinning,rt.morphTargets=q.morphTargets,rt.morphNormals=q.morphNormals,rt.morphColors=q.morphColors,rt.morphTargetsCount=q.morphTargetsCount,rt.numClippingPlanes=q.numClippingPlanes,rt.numIntersection=q.numClipIntersection,rt.vertexAlphas=q.vertexAlphas,rt.vertexTangents=q.vertexTangents,rt.toneMapping=q.toneMapping}function Xa(A,q,rt,st,j){q.isScene!==!0&&(q=Fe),L.resetTextureUnits();const Tt=q.fog,Ct=st.isMeshStandardMaterial?q.environment:null,wt=Z===null?w.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:vs,zt=(st.isMeshStandardMaterial?nt:T).get(st.envMap||Ct),$t=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Wt=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),kt=!!rt.morphAttributes.position,he=!!rt.morphAttributes.normal,Me=!!rt.morphAttributes.color;let We=Fa;st.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(We=w.toneMapping);const ge=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,_e=ge!==void 0?ge.length:0,qt=Gt.get(st),Ye=_.state.lights;if(pt===!0&&(xt===!0||A!==R)){const dn=A===R&&st.id===D;bt.setState(st,A,dn)}let Se=!1;st.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Ye.state.version||qt.outputColorSpace!==wt||j.isBatchedMesh&&qt.batching===!1||!j.isBatchedMesh&&qt.batching===!0||j.isBatchedMesh&&qt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&qt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&qt.instancing===!1||!j.isInstancedMesh&&qt.instancing===!0||j.isSkinnedMesh&&qt.skinning===!1||!j.isSkinnedMesh&&qt.skinning===!0||j.isInstancedMesh&&qt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&qt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&qt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&qt.instancingMorph===!1&&j.morphTexture!==null||qt.envMap!==zt||st.fog===!0&&qt.fog!==Tt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==bt.numPlanes||qt.numIntersection!==bt.numIntersection)||qt.vertexAlphas!==$t||qt.vertexTangents!==Wt||qt.morphTargets!==kt||qt.morphNormals!==he||qt.morphColors!==Me||qt.toneMapping!==We||qt.morphTargetsCount!==_e)&&(Se=!0):(Se=!0,qt.__version=st.version);let En=qt.currentProgram;Se===!0&&(En=sa(st,q,j));let la=!1,Ge=!1,wi=!1;const Be=En.getUniforms(),Tn=qt.uniforms;if(Xt.useProgram(En.program)&&(la=!0,Ge=!0,wi=!0),st.id!==D&&(D=st.id,Ge=!0),la||R!==A){Xt.buffers.depth.getReversed()?(At.copy(A.projectionMatrix),wS(At),DS(At),Be.setValue(H,"projectionMatrix",At)):Be.setValue(H,"projectionMatrix",A.projectionMatrix),Be.setValue(H,"viewMatrix",A.matrixWorldInverse);const xn=Be.map.cameraPosition;xn!==void 0&&xn.setValue(H,se.setFromMatrixPosition(A.matrixWorld)),ne.logarithmicDepthBuffer&&Be.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Be.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Ge=!0,wi=!0)}if(j.isSkinnedMesh){Be.setOptional(H,j,"bindMatrix"),Be.setOptional(H,j,"bindMatrixInverse");const dn=j.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Be.setValue(H,"boneTexture",dn.boneTexture,L))}j.isBatchedMesh&&(Be.setOptional(H,j,"batchingTexture"),Be.setValue(H,"batchingTexture",j._matricesTexture,L),Be.setOptional(H,j,"batchingIdTexture"),Be.setValue(H,"batchingIdTexture",j._indirectTexture,L),Be.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null&&Be.setValue(H,"batchingColorTexture",j._colorsTexture,L));const on=rt.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Kt.update(j,rt,En),(Ge||qt.receiveShadow!==j.receiveShadow)&&(qt.receiveShadow=j.receiveShadow,Be.setValue(H,"receiveShadow",j.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Tn.envMap.value=zt,Tn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&q.environment!==null&&(Tn.envMapIntensity.value=q.environmentIntensity),Ge&&(Be.setValue(H,"toneMappingExposure",w.toneMappingExposure),qt.needsLights&&oa(Tn,wi),Tt&&st.fog===!0&&Rt.refreshFogUniforms(Tn,Tt),Rt.refreshMaterialUniforms(Tn,st,W,Y,_.state.transmissionRenderTarget[A.id]),Sc.upload(H,Ai(qt),Tn,L)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Sc.upload(H,Ai(qt),Tn,L),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Be.setValue(H,"center",j.center),Be.setValue(H,"modelViewMatrix",j.modelViewMatrix),Be.setValue(H,"normalMatrix",j.normalMatrix),Be.setValue(H,"modelMatrix",j.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const dn=st.uniformsGroups;for(let xn=0,gi=dn.length;xn<gi;xn++){const Di=dn[xn];k.update(Di,En),k.bind(Di,En)}}return En}function oa(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function en(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,q,rt){const st=Gt.get(A);st.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Gt.get(A.texture).__webglTexture=q,Gt.get(A.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:rt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const rt=Gt.get(A);rt.__webglFramebuffer=q,rt.__useDefaultFramebuffer=q===void 0};const Bo=H.createFramebuffer();this.setRenderTarget=function(A,q=0,rt=0){Z=A,G=q,I=rt;let st=!0,j=null,Tt=!1,Ct=!1;if(A){const zt=Gt.get(A);if(zt.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(H.FRAMEBUFFER,null),st=!1;else if(zt.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(zt.__hasExternalTextures)L.rebindTextures(A,Gt.get(A.texture).__webglTexture,Gt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const kt=A.depthTexture;if(zt.__boundDepthTexture!==kt){if(kt!==null&&Gt.has(kt)&&(A.width!==kt.image.width||A.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ct=!0);const Wt=Gt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[q])?j=Wt[q][rt]:j=Wt[q],Tt=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?j=Gt.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?j=Wt[rt]:j=Wt,z.copy(A.viewport),et.copy(A.scissor),tt=A.scissorTest}else z.copy($).multiplyScalar(W).floor(),et.copy(vt).multiplyScalar(W).floor(),tt=St;if(rt!==0&&(j=Bo),Xt.bindFramebuffer(H.FRAMEBUFFER,j)&&st&&Xt.drawBuffers(A,j),Xt.viewport(z),Xt.scissor(et),Xt.setScissorTest(tt),Tt){const zt=Gt.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,zt.__webglTexture,rt)}else if(Ct){const zt=Gt.get(A.texture),$t=q;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,zt.__webglTexture,rt,$t)}else if(A!==null&&rt!==0){const zt=Gt.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,zt.__webglTexture,rt)}D=-1},this.readRenderTargetPixels=function(A,q,rt,st,j,Tt,Ct){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct]),wt){Xt.bindFramebuffer(H.FRAMEBUFFER,wt);try{const zt=A.texture,$t=zt.format,Wt=zt.type;if(!ne.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-st&&rt>=0&&rt<=A.height-j&&H.readPixels(q,rt,st,j,ee.convert($t),ee.convert(Wt),Tt)}finally{const zt=Z!==null?Gt.get(Z).__webglFramebuffer:null;Xt.bindFramebuffer(H.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(A,q,rt,st,j,Tt,Ct){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct]),wt)if(q>=0&&q<=A.width-st&&rt>=0&&rt<=A.height-j){Xt.bindFramebuffer(H.FRAMEBUFFER,wt);const zt=A.texture,$t=zt.format,Wt=zt.type;if(!ne.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const kt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,kt),H.bufferData(H.PIXEL_PACK_BUFFER,Tt.byteLength,H.STREAM_READ),H.readPixels(q,rt,st,j,ee.convert($t),ee.convert(Wt),0);const he=Z!==null?Gt.get(Z).__webglFramebuffer:null;Xt.bindFramebuffer(H.FRAMEBUFFER,he);const Me=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await CS(H,Me,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,kt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Tt),H.deleteBuffer(kt),H.deleteSync(Me),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,rt=0){const st=Math.pow(2,-rt),j=Math.floor(A.image.width*st),Tt=Math.floor(A.image.height*st),Ct=q!==null?q.x:0,wt=q!==null?q.y:0;L.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,Ct,wt,j,Tt),Xt.unbindTexture()};const zo=H.createFramebuffer(),Ci=H.createFramebuffer();this.copyTextureToTexture=function(A,q,rt=null,st=null,j=0,Tt=null){Tt===null&&(j!==0?(xc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=j,j=0):Tt=0);let Ct,wt,zt,$t,Wt,kt,he,Me,We;const ge=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(rt!==null)Ct=rt.max.x-rt.min.x,wt=rt.max.y-rt.min.y,zt=rt.isBox3?rt.max.z-rt.min.z:1,$t=rt.min.x,Wt=rt.min.y,kt=rt.isBox3?rt.min.z:0;else{const on=Math.pow(2,-j);Ct=Math.floor(ge.width*on),wt=Math.floor(ge.height*on),A.isDataArrayTexture?zt=ge.depth:A.isData3DTexture?zt=Math.floor(ge.depth*on):zt=1,$t=0,Wt=0,kt=0}st!==null?(he=st.x,Me=st.y,We=st.z):(he=0,Me=0,We=0);const _e=ee.convert(q.format),qt=ee.convert(q.type);let Ye;q.isData3DTexture?(L.setTexture3D(q,0),Ye=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(L.setTexture2DArray(q,0),Ye=H.TEXTURE_2D_ARRAY):(L.setTexture2D(q,0),Ye=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const Se=H.getParameter(H.UNPACK_ROW_LENGTH),En=H.getParameter(H.UNPACK_IMAGE_HEIGHT),la=H.getParameter(H.UNPACK_SKIP_PIXELS),Ge=H.getParameter(H.UNPACK_SKIP_ROWS),wi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,ge.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ge.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$t),H.pixelStorei(H.UNPACK_SKIP_ROWS,Wt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,kt);const Be=A.isDataArrayTexture||A.isData3DTexture,Tn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const on=Gt.get(A),dn=Gt.get(q),xn=Gt.get(on.__renderTarget),gi=Gt.get(dn.__renderTarget);Xt.bindFramebuffer(H.READ_FRAMEBUFFER,xn.__webglFramebuffer),Xt.bindFramebuffer(H.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let Di=0;Di<zt;Di++)Be&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Gt.get(A).__webglTexture,j,kt+Di),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Gt.get(q).__webglTexture,Tt,We+Di)),H.blitFramebuffer($t,Wt,Ct,wt,he,Me,Ct,wt,H.DEPTH_BUFFER_BIT,H.NEAREST);Xt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||Gt.has(A)){const on=Gt.get(A),dn=Gt.get(q);Xt.bindFramebuffer(H.READ_FRAMEBUFFER,zo),Xt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ci);for(let xn=0;xn<zt;xn++)Be?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,on.__webglTexture,j,kt+xn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,on.__webglTexture,j),Tn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,dn.__webglTexture,Tt,We+xn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,dn.__webglTexture,Tt),j!==0?H.blitFramebuffer($t,Wt,Ct,wt,he,Me,Ct,wt,H.COLOR_BUFFER_BIT,H.NEAREST):Tn?H.copyTexSubImage3D(Ye,Tt,he,Me,We+xn,$t,Wt,Ct,wt):H.copyTexSubImage2D(Ye,Tt,he,Me,$t,Wt,Ct,wt);Xt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Tn?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Ye,Tt,he,Me,We,Ct,wt,zt,_e,qt,ge.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(Ye,Tt,he,Me,We,Ct,wt,zt,_e,ge.data):H.texSubImage3D(Ye,Tt,he,Me,We,Ct,wt,zt,_e,qt,ge):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Tt,he,Me,Ct,wt,_e,qt,ge.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Tt,he,Me,ge.width,ge.height,_e,ge.data):H.texSubImage2D(H.TEXTURE_2D,Tt,he,Me,Ct,wt,_e,qt,ge);H.pixelStorei(H.UNPACK_ROW_LENGTH,Se),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,En),H.pixelStorei(H.UNPACK_SKIP_PIXELS,la),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ge),H.pixelStorei(H.UNPACK_SKIP_IMAGES,wi),Tt===0&&q.generateMipmaps&&H.generateMipmap(Ye),Xt.unbindTexture()},this.copyTextureToTexture3D=function(A,q,rt=null,st=null,j=0){return xc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,q,rt,st,j)},this.initRenderTarget=function(A){Gt.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Xt.unbindTexture()},this.resetState=function(){G=0,I=0,Z=null,Xt.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(e),i.unpackColorSpace=Te._getUnpackColorSpace()}}const qT=()=>{const o=Xe.useRef(null);return Xe.useEffect(()=>{if(!o.current)return;const e=new ey,i=new si(45,window.innerWidth/window.innerHeight,.1,1e3),r=new WT({alpha:!0,antialias:!0});r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(window.devicePixelRatio),r.domElement.style.position="fixed",r.domElement.style.zIndex=1,o.current.appendChild(r.domElement),i.lookAt(0,0,0),i.position.z=0;const l=new Tc(5,48,48),u=new x0({color:7316190,size:.04,transparent:!0}),h=new ay(l,u);h.rotation.x=2.7,e.add(i),e.add(h);const d=1,m=1.5,p=1,g=3,v=5,x=(_,B,N)=>{let w=new ot;return w.x=_/window.innerWidth*2-1,w.y=-(B/window.innerHeight*2)+1,w.z=0,w.unproject(N),w},M=(_,B,N,w)=>(1-_)**2*B+2*(1-_)*_*N+_**2*w;let b=0;const C=(_,B,N)=>{const w=document.getElementById("profile-picture-container"),F=w?w.getBoundingClientRect().left+55:0,G=w?w.getBoundingClientRect().top+55:0,I=-55;b+=1;const D=document.querySelector(".profile-picture-container").matches(":hover")?10:5,R=h.geometry.parameters.radius,z=R+(D-R)*.1;h.geometry.dispose(),h.geometry=new Tc(z,48,48),u.opacity=Math.min(.6,b/500),u.color.set(document.body.classList.contains("dark-mode")?5736633:4886754);const et=x(F,G,i),tt=et.x*v*55,ut=et.y*v*55,lt=i.fov*Math.PI/180,O=Math.tan(lt/2)*-h.position.z/N,Y=-(B*d*O/2),W=-(N*m*O/2),yt=0,U=B*p*O/2,$=-(N*g*O/2),vt=Math.sin(b*.002)-10;if(_>.3&&_<.7){const St=(_-.3)/.4;u.opacity=(1-St)*.6-St*.04}return _>.7&&(u.opacity=.04),{x:.9*h.position.x+.1*M(_,tt,Y,U),y:.9*h.position.y+.1*M(_,ut,W,$),z:.9*h.position.z+.1*M(_,I,yt,vt)}};function y(){h.rotation.y+=5e-4,h.rotation.x+=2e-4;const _=window.innerWidth,B=window.innerHeight,N=_/B;i.aspect=N,i.updateProjectionMatrix(),r.setSize(_,B);const w=window.scrollY/500,F=2/Math.PI*Math.atan(4*w),G=C(F,_,B);h.position.set(G.x,G.y,G.z),r.render(e,i),requestAnimationFrame(y)}return requestAnimationFrame(y),()=>{var _;(_=o.current)==null||_.removeChild(r.domElement),l.dispose(),u.dispose(),r.dispose()}},[]),Mt.jsx("div",{ref:o,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0,overflow:"hidden"}})},YT="/assets/AnkiDroid-BE17vLvw.png",jT="/assets/LifeLink-AxzcZN9r.png",ZT="/assets/Seedpod-BzZidz3N.png",KT="/assets/ChroniclerCloudy-DUwVGGIy.png",QT="/assets/MidSun-DXKcaTj9.png",JT="/assets/Spontaneity-53JdqBDS.png",$T="/assets/Asna-CvkL0zrH.png",tb="/assets/Python-CNqJkq16.png",Y_=[{title:"🏆 LifeLink: 1st Place Hackathon Winner",description:"[b:React Native] and [b:NativeWind (TailwindCSS)] mobile app to help first responders in developing countries. Integrated the [b:Nominatim API] for reverse geocoding, a [b:Google Firebase] chat system, native notifications, and the [b:Google Maps API]. Beat 450+ other contestants at a hackathon and received a $2000 award.",image:jT,link:"https://devpost.com/software/lifelink-24fd3g",year:"2024",color:"ff9991"},{title:"🏆 Seedpod: 1st Place Hackathon Winner",description:"[b:NextJS] and [b:TailwindCSS] app with a [b:Python Flask] backend that communicates with modular plant pots over an ESP32. Utilized the [b:Google Maps API] and [b:Google Firebase]. Received an award of $5000 at one of the [b:University of Calgary]'s largest hackathons.",image:ZT,link:"https://devpost.com/software/seedpod-empowering-individual-agriculture",year:"2023",color:"d7ffbf"},{title:"Chronicler",description:"[b:Java Android] mobile app built in Android Studio for creating and managing history flashcards. Features an interactive history trivia game. Stores data using the Google GSON library.",image:KT,link:"https://github.com/ericli3690/chronicler",year:"2024",color:"ffecab"},{title:"MidSun Solar Car Design Team",description:"Member of the University of Waterloo solar car design team, specifically the strategy subteam. Used [b:AWS], [b:PostgreSQL], and [b:Python] to design an irradiance database and driving optimization model.",image:QT,link:"https://www.uwmidsun.com/",year:"2025",color:"ffd891"},{title:"Spontaneity",description:"[b:Java Android] mobile app built in Android Studio which allows users to create spontaneous reminders delivered at random time intervals. Beneficial for habit building.",image:JT,link:"https://github.com/ericli3690/spontaneity",year:"2023",color:"abffd7"},{title:"🏆 Top 3 Finalist at ASNA Case Competition / Hackathon",description:"In a group that placed as finalists by using [b:Python] and [i:pandas] to train multiple machine learning models, ex. [b:XGBoost] decision tree models. Achieved 93.6% accuracy at predicting insurance claim data.",image:$T,link:"https://anea-asna.ca/hackathon/",year:"2024",color:"f3bdff"},{title:"Assorted Python Projects",description:"A published [link:significant figures|https://pypi.org/project/esoteric-sigdigs/] [i:pip] package, [link:automatic poll generators|https://github.com/ericli3690/PollProject2], a Discord [link:soccer betting bot|https://github.com/pranavUl/Soccer-Betting-Bot]...",image:tb,link:"https://github.com/ericli3690",year:"2022",color:"a8ffc0"}],eb="/assets/TomaPortfolio-DQwGykXh.png",nb="/assets/FordPortfolio-CEcIuJ2r.png",Mo=[{title:"Toma",description:"Lead engineer for the company's outbound product: spearheaded a full-stack redesign of the [b:PostgreSQL] schema, data structures, and end-to-end [b:Temporal] workflows. Also lead engineer for an in-app dashboard project, designing new metrics and cutting worst-case load times by [b:4x].",image:eb,link:"https://www.toma.com/",year:"2026",color:"8cd18e"},{title:"Google Summer of Code 2025: AnkiDroid",description:"One of the [b:8%] of applicants admitted for the [b:Google]-sponsored [link:Summer of Code|https://summerofcode.withgoogle.com/] open-source software development program's 2025 iteration. Used [b:Kotlin] to completely re-architect the notifications system for the open-source AnkiDroid [b:Android] mobile app ([b:10M+] downloads) from the ground up.",image:YT,link:"https://github.com/ericli3690/gsoc-ankidroid-report/blob/main/README.md",year:"2025",color:"94d6ff"},{title:"Ford",description:"Integrated Apple CarPlay into Ford and Lincoln in-vehicle infotainment systems via [b:Kotlin, Android]. Implemented next-generation digital experience features including device status displays, the SQLite backend for an app discovery feature, and backend navigation data APIs.",image:nb,link:"https://www.ford.com/",year:"2025",color:"4359e5"}],dh="/assets/SongEricYuLiResumeApr2026-Cs4KxhK8.pdf",nd=o=>{if(!o)return null;const e=[];let i=o,r=0;for(;i.length>0;){const l=i.match(/\[b:(.*?)\]/),u=i.match(/\[i:(.*?)\]/),h=i.match(/\[link:(.*?)\|(.*?)\]/),d=i.match(/\[n\]/),m=i.match(/\[t\]/);let p=null,g=null,v=null;if(l&&(p=l,g="bold",v={text:l[1]}),u&&(!p||i.indexOf(u[0])<i.indexOf(p[0]))&&(p=u,g="italic",v={text:u[1]}),h&&(!p||i.indexOf(h[0])<i.indexOf(p[0]))&&(p=h,g="link",v={text:h[1],url:h[2]}),d&&(!p||i.indexOf(d[0])<i.indexOf(p[0]))&&(p=d,g="newline"),m&&(!p||i.indexOf(m[0])<i.indexOf(p[0]))&&(p=m,g="tab"),p){const x=i.substring(0,i.indexOf(p[0]));switch(x&&e.push(Mt.jsx("span",{children:x},r++)),g){case"bold":e.push(Mt.jsx("strong",{className:"intense-bold",children:v.text},r++));break;case"italic":e.push(Mt.jsx("em",{children:v.text},r++));break;case"link":e.push(Mt.jsx("a",{href:v.url,target:"_blank",rel:"noopener noreferrer",className:"inline hover-offset",children:v.text},r++));break;case"newline":e.push(Mt.jsx("br",{},r++));break;case"tab":e.push(Mt.jsx("span",{children:"    "},r++));break}i=i.substring(i.indexOf(p[0])+p[0].length)}else{e.push(Mt.jsx("span",{children:i},r++));break}}return e},j_=({project:o,index:e})=>{const[i,r]=Xe.useState(!1),l=h=>{h=h.replace("#",""),h.length===3&&(h=h.split("").map(g=>g+g).join(""));const d=parseInt(h.substring(0,2),16),m=parseInt(h.substring(2,4),16),p=parseInt(h.substring(4,6),16);return`${d}, ${m}, ${p}`},u=o.color?l(o.color):"187, 187, 187";return Mt.jsxs("div",{className:"project-tile",children:[Mt.jsxs("div",{className:"tile-section",style:{"--project-border-color":`rgb(${u})`},children:[Mt.jsx("div",{className:`image-slice ${i?"squeeze":""}`,children:Mt.jsx("img",{src:o.image,alt:o.title})}),Mt.jsx("a",{href:o.link,target:"_blank",rel:"noopener noreferrer",className:"button-slice-link",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:Mt.jsx("div",{className:"button-slice",style:{"--project-color-rgb":u},children:Mt.jsx("div",{className:"arrow-text",children:"→"})})})]}),Mt.jsxs("div",{className:"text-section",children:[Mt.jsxs("div",{className:"project-title-container",children:[Mt.jsx("h4",{className:"project-title",children:o.title}),Mt.jsx("div",{className:"project-title-bar"}),Mt.jsx("h5",{className:"project-year",children:o.year})]}),Mt.jsx("p",{className:"project-description",children:nd(o.description)})]})]})},ib=`
[b:To Monik and Anthony,]
[n][n]
[t][t]Hi, I’m Eric! I’m entering my second year in Computer Science at the University of Waterloo this fall and am extremely interested in an internship at Toma. I learned about your company through Gautham and became intrigued after he showed me a demo of your product. To cut to the chase:
[n][n]
[t][t][b:1.] I have experience delivering [b:high-quality work]. I’m currently interning at Ford, working on developing reliable new features for the SYNC5 infotainment system. In my spare time, I’m designing the notifications system for the multi-million-download open-source [i:Anki] Android mobile app through the Google Summer of Code program.
[n][n]
[t][t][b:2.] I have experience delivering [b:high-speed work]. Gautham and I have won four hackathons together. Project descriptions attached below.
[n][n]
[t][t][b:3.] I have experience delivering [b:high-variability work]. I’m adaptable and have strong coordination skills. Gautham and I once co-founded a hackathon that garnered $2000+ in corporate prize sponsorships from companies like Wolfram Alpha and Postman, drawing over 100 participants.
[n][n]
[t][t][b:4.] But most of all, I’m ready to deliver [b:high-dedication work]. I believe my greatest weakness right now is that my resume doesn't have enough machine learning experiences on it. Luckily, the next time I’m free for an internship is January or May 2026, and I haven’t decided what side project to devote myself to for this fall yet…
[n][n]
[t][t]In short: I’d love to hop on a brief call and figure out what things I should learn between now and next year to better position myself for an opportunity at Toma. Or, if you’re not hiring interns right now, I’d even just love to ask for advice, chat, and learn what makes Toma tick!
[n][n]
[t][t]My full portfolio, resume, and contact info are below. Looking forward to hearing from you,
[n][n]
[b:~ Eric]
`,ab=`
[b:To Sentry's Hiring Manager,]
[n][n]
[t][t]Hello! My name is Eric. I'm currently wrapping up an internship at Toma, an a16z-funded Series A startup where I've been the project lead for multiple initiatives, from re-inventing a core outbound messaging product to modernizing their inbound product's dashboards and reporting. Toma uses Sentry... a bit. I asked the CTO why we don't use it more, and he answered that Toma isn't at the scale where it's necessary yet.
[n][n]
[t][t]That got me thinking: how exactly does Sentry's application monitoring handle the deluge of logs, spans, and session replays from sources all around the world? What kind of engineering goes into making that work? Building that kind of load-bearing software is the reason I became interested in working at Toma; it's the reason that I got into open source development at AnkiDroid; heck, it's the reason I started coding in the first place: to build smart tools that make other people's lives easier and more fun.
[n][n]
[t][t]Having the privilege of responsibility at Toma has been a fantastic experience so far, and I would love to explore how I can contribute to Sentry, too.
[n][n]
[t][t]My full portfolio, resume, and contact info are below. Looking forward to hearing from you!
[n][n]
[b:~ Eric]
`;function rb(){const[o,e]=Xe.useState(!0),[i,r]=Xe.useState("0px"),[l,u]=Xe.useState(!1),[h,d]=Xe.useState(!1),[m,p]=Xe.useState(null),[g,v]=Xe.useState(!window.location.search.substring(1).split("&").includes("light")),[x,M]=Xe.useState(!1),b=Xe.useRef(null),C=Xe.useRef(null),y=Xe.useRef(null),_=Xe.useRef(null),B=Xe.useRef(null),N=Xe.useRef(null),w=[...Mo,...Y_],F=Xe.useRef(w.map(()=>Xe.createRef())),G=()=>{u(!0),setTimeout(()=>{u(!1)},2e3)},I=()=>{d(!0),setTimeout(()=>{d(!1)},2e3)},Z=()=>{const z=N.current.querySelector(".signature-stroke");z&&(z.style.transition="opacity 0.25s ease-out",z.style.opacity="0",setTimeout(()=>{z.style.transition="none",z.style.animation="none",z.style.opacity="0",z.style.strokeDashoffset="1081",z.offsetHeight,z.style.opacity="1",setTimeout(()=>{z.style.animation="drawSignature 7s ease-out forwards"},10)},250))};Xe.useEffect(()=>{const z=()=>{const et=document.getElementById("root");if(!et)return;const tt=et.getBoundingClientRect(),ut=window.innerWidth;if(tt.right<ut-140){const lt=(ut-tt.right)/3+"px";r(lt),e(!0)}else e(!1)};return z(),window.addEventListener("resize",z),()=>window.removeEventListener("resize",z)},[]),Xe.useEffect(()=>{const z={root:null,rootMargin:"0px",threshold:.5},et=new IntersectionObserver(tt=>{tt.forEach(ut=>{const lt=F.current.findIndex(O=>O.current===ut.target);lt!==-1&&ut.isIntersecting?p(lt):lt===m&&!ut.isIntersecting&&(tt.some(Y=>Y.isIntersecting&&Y.target!==ut.target)||p(null))})},z);return F.current.forEach(tt=>{tt.current&&et.observe(tt.current)}),()=>{F.current.forEach(tt=>{tt.current&&et.unobserve(tt.current)})}},[m]),Xe.useEffect(()=>{if(!N.current||x)return;const z=new IntersectionObserver(et=>{et.forEach(tt=>{if(tt.isIntersecting&&!x){const ut=N.current.querySelector(".signature-stroke");ut&&(ut.style.animation="drawSignature 7s ease-out forwards",M(!0))}})},{threshold:.5,rootMargin:"0px"});return z.observe(N.current),()=>{N.current&&z.unobserve(N.current)}},[x]);const D=z=>{F.current[z]&&F.current[z].current&&F.current[z].current.scrollIntoView({behavior:"smooth",block:"center"})},R=()=>{v(!g)};return Xe.useEffect(()=>{g?document.documentElement.classList.add("dark-mode"):document.documentElement.classList.remove("dark-mode")},[g]),Xe.useEffect(()=>{const z=()=>{const et=[C,b,B,y],tt=window.innerHeight*.4,ut=window.innerHeight*.7;if(et.forEach(lt=>{if(lt.current){const{top:O}=lt.current.getBoundingClientRect();O<tt?lt.current.classList.add("scrolled-past"):lt.current.classList.remove("scrolled-past")}}),_.current){const{top:lt}=_.current.getBoundingClientRect();lt<ut?_.current.classList.add("scrolled-past"):_.current.classList.remove("scrolled-past")}};return window.addEventListener("scroll",z,{passive:!0}),z(),()=>{window.removeEventListener("scroll",z)}},[]),Mt.jsxs(Mt.Fragment,{children:[Mt.jsxs("div",{id:"app-container",className:g?"dark-mode":"",children:[Mt.jsx("div",{className:`dark-mode-hint ${g?"dark-mode":""}`,children:"Try me!"}),Mt.jsx(qT,{}),Mt.jsxs("div",{className:"header-container",children:[Mt.jsxs("div",{className:"profile-picture-container",id:"profile-picture-container",children:[Mt.jsx("img",{src:Zg,alt:"Eric Li",className:"profile-picture"}),Mt.jsx("img",{src:Zg,alt:"Eric Li Back",className:"profile-picture-back"})]}),Mt.jsxs("div",{className:"header-text",children:[Mt.jsxs("h1",{children:["Hi, I'm ",Mt.jsx("div",{onClick:G,className:`inline hover-offset bolded name-clickable ${l?"show-chinese":""}`,children:"Song Yu Li."})]}),Mt.jsxs("h2",{children:["But you can call me ",Mt.jsx("div",{onClick:I,className:`inline hover-offset blue-name bolded nickname-clickable ${h?"show-emoji":""}`,children:"Eric"}),"."]})]})]}),Mt.jsxs("div",{className:"by-lines",children:[Mt.jsxs("p",{className:"by-line right-pulse-dot dark-yellow",children:["→  Computer Science student at ",Mt.jsx("a",{href:"https://uwaterloo.ca/",target:"_blank",rel:"noopener noreferrer",className:"inline hover-offset yellow-text bolded",children:"UWaterloo"}),"."]}),Mt.jsxs("p",{className:"by-line right-pulse-dot dark-red",children:["→ Award winner at ",Mt.jsx("a",{href:"https://devpost.com/ericli3690",target:"_blank",rel:"noopener noreferrer",className:"inline red-text hover-offset bolded",children:"six hackathons"}),"."]}),Mt.jsxs("p",{className:"by-line right-pulse-dot dark-blue",children:["→  Previously at ",Mt.jsx("a",{href:"https://www.ford.com/",target:"_blank",rel:"noopener noreferrer",className:"inline hover-offset blue-text bolded",children:"Ford"}),", ",Mt.jsx("a",{href:"https://summerofcode.withgoogle.com/",target:"_blank",rel:"noopener noreferrer",className:"inline hover-offset blue-text bolded",children:"GSoC"}),", and ",Mt.jsx("a",{href:"https://toma.com/",target:"_blank",rel:"noopener noreferrer",className:"inline hover-offset blue-text bolded",children:"Toma"}),"."]})]}),Mt.jsxs("div",{className:"cover-letter-container",children:[Mt.jsx("p",{className:"cover-letter",children:nd(window.location.search.substring(1).split("&")[0]==="toma"?ib:"")}),Mt.jsx("p",{className:"cover-letter",children:nd(window.location.search.substring(1).split("&")[0]==="sentry"?ab:"")})]}),Mt.jsxs("div",{className:"content-container",children:[Mt.jsx("h3",{className:"fade-in-2",ref:C,children:"Experience"}),Mt.jsx("div",{className:"projects-container fade-in-3",children:Mo.map((z,et)=>Mt.jsx("div",{ref:F.current[et],children:Mt.jsx(j_,{project:z,index:et})},et))}),Mt.jsx("h3",{className:"fade-in-2",ref:b,children:"Projects"}),Mt.jsx("div",{className:"projects-container fade-in-3",children:Y_.map((z,et)=>Mt.jsx("div",{ref:F.current[et+Mo.length],children:Mt.jsx(j_,{project:z,index:et+Mo.length})},et+Mo.length))})]}),Mt.jsxs("div",{className:"resume-container",children:[Mt.jsx("h3",{className:"fade-in-2",ref:y,children:"Resume"}),Mt.jsx("div",{className:"resume",children:Mt.jsxs("object",{className:"pdf",data:dh,children:[Mt.jsx("embed",{src:dh}),Mt.jsxs("p",{className:"pdf-warning",children:["This browser does not support PDFs. Please ",Mt.jsx("a",{href:dh,download:!0,children:"download the PDF"})," to view it."]})]})})]}),Mt.jsxs("div",{className:"contact-container",id:"contact-container",children:[Mt.jsx("h3",{className:"fade-in-2",ref:_,children:"Contact"}),Mt.jsxs("p",{children:["Open to work and actively searching for opportunities.",Mt.jsx("br",{}),"Feel free to reach out."]}),Mt.jsxs("div",{className:"contact-links",children:[Mt.jsx("a",{href:"mailto:ericli3690@gmail.com",className:"contact-link right-pulse-dot fade-in-3",children:"→  ericli3690@gmail.com"}),Mt.jsx("a",{href:"tel:+14035616028",className:"contact-link right-pulse-dot fade-in-3",children:"→  +1 (403) 561-6028"}),Mt.jsx("a",{href:"https://github.com/ericli3690",target:"_blank",rel:"noopener noreferrer",className:"contact-link right-pulse-dot fade-in-3",children:"→  github.com/ericli3690"}),Mt.jsx("a",{href:"https://www.linkedin.com/in/song-eric-li/",target:"_blank",rel:"noopener noreferrer",className:"contact-link right-pulse-dot fade-in-3",children:"→  linkedin.com/in/song-eric-li"})]}),Mt.jsx("svg",{ref:N,className:"signature",viewBox:"-10 -10 75 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:Z,style:{cursor:"pointer"},children:Mt.jsx("path",{className:"signature-stroke",strokeLinecap:"round",d:"M5.07648 8.81062C5.06782 8.81927 7.39094 8.72573 10.9226 8.37647C12.1467 8.25542 12.1368 7.72365 12.0378 7.03122C11.7983 5.35651 11.4637 2.79546 11.2981 0.55353C11.2622 0.0684358 9.96332 2.91816 8.3121 8.11497C7.45263 10.8199 6.85077 13.7537 5.85575 17.1316C4.86074 20.5096 3.56784 24.266 2.83794 26.3288C2.10805 28.3917 1.98033 28.6471 1.91183 28.5475C1.84332 28.4479 1.83789 27.9857 2.24782 26.1609C2.65776 24.3362 3.48324 21.163 4.42992 18.1856C5.3766 15.2083 6.41947 12.5229 5.90929 12.4373C2.34168 11.8387 0.843677 17.8475 0.70211 17.7656C-0.512028 17.0635 4.02093 13.7195 6.89433 10.7919C7.84258 9.8258 7.96623 10.133 7.9226 10.9731C7.71074 15.0521 7.64337 15.951 7.86356 16.2191C8.16966 16.5918 9.30154 15.2996 10.7453 13.0992C11.6255 11.7577 12.4932 9.76715 13.594 7.82156C14.6948 5.87597 15.9224 3.98644 16.5329 3.13518C17.1434 2.28392 17.0994 2.52818 16.8713 3.00073C15.4237 5.99976 13.5856 7.92742 13.9813 7.49187C15.7251 5.57262 17.0342 3.67383 17.6055 3.33454C18.0356 3.07916 18.1553 4.9534 18.4657 6.8824C18.5262 7.25864 19.2871 7.07035 19.9166 6.76562C21.3405 6.07635 22.7345 4.12668 23.7526 2.25952C24.0816 1.65617 23.7677 1.6261 23.3981 1.83041C22.4799 2.33802 21.1319 3.92014 19.5696 5.84046C18.4359 7.23397 17.9887 8.52098 17.3298 9.84918C16.3845 11.7545 15.3466 13.4547 14.7136 14.7976C14.0745 16.1537 13.2134 17.7721 12.1199 20.0781C9.48833 25.6277 7.56497 27.0045 7.24161 27.4397C7.08263 27.6537 8.36342 25.6559 10.3555 23.1666C12.5526 20.421 14.4194 19.1615 14.7592 19.274C17.2819 20.1089 13.1917 24.3499 13.2919 25.1876C13.7743 29.2194 20.2667 18.7317 20.5806 18.6589C20.9384 18.576 19.2419 22.0392 16.78 26.3893C15.9063 27.933 15.8162 28.1407 15.8651 28.1562C16.7633 28.4409 17.8035 25.3143 20.1285 21.3354C21.5695 18.8691 23.9115 15.721 25.6238 13.5269C27.3362 11.3327 28.4426 10.2456 29.469 9.36387C30.4954 8.48212 31.4082 7.83864 32.9699 6.98219C36.654 4.96172 39.3686 3.88617 39.8538 3.94353C40.0362 3.96508 39.6762 4.55061 36.7985 5.61233C33.9207 6.67406 28.4307 8.34232 23.9123 9.40175C19.394 10.4612 16.0136 10.8612 19.9638 10.5033C23.914 10.1454 35.2971 9.01741 41.9727 8.46575C48.6483 7.91409 50.2713 7.97291 43.4166 9.49556C36.5619 11.0182 21.1802 14.0029 13.1261 15.5932C5.07196 17.1834 4.81148 17.2889 9.4153 16.6552C14.0191 16.0215 23.4951 14.6455 30.1608 13.937C36.8266 13.2285 40.3948 13.2291 42.6169 13.2817C44.8389 13.3342 45.6065 13.4385 46.1043 13.5292C46.6021 13.6198 46.8068 13.6937 46.1166 13.9568C45.4265 14.22 43.8353 14.6702 39.5297 15.3818C35.2241 16.0933 28.2523 17.0525 22.8517 18.0121C17.4511 18.9716 13.833 19.9024 12.8275 20.1338C11.822 20.3653 13.5388 19.8692 17.5099 19.2185C21.481 18.5677 27.6545 17.7773 31.382 17.4442C36.1883 17.0148 37.6204 17.4923 37.9144 17.7066C38.0229 17.7857 37.6323 18.0264 35.0917 19.0425C32.5511 20.0585 27.7658 21.8994 24.5572 23.256C21.3485 24.6126 19.8615 25.4292 19.3803 25.7959C19.1629 25.9616 21.4525 25.2949 24.4096 24.0263C27.585 22.664 30.8867 22.0831 33.7304 22.0129C36.2482 21.9507 38.0461 23.4507 39.6224 24.5706C41.4086 25.8397 43.5562 25.584 45.3974 25.3893C48.1731 25.0957 51.2681 23.7409 54.7523 22.3674C56.7407 21.7356 59.1763 21.2364 60.6456 20.9631C62.1148 20.6898 62.5439 20.6575 62.9859 20.6242"})})]}),Mt.jsx("div",{className:"footer-container",children:Mt.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",justifyContent:"center"},children:[Mt.jsx("a",{href:"https://cs.uwatering.com/#https://ericli3690.github.io/?nav=prev",children:"←"}),Mt.jsx("a",{href:"https://cs.uwatering.com/#https://ericli3690.github.io/",target:"_blank",children:Mt.jsx("img",{src:g?"https://cs.uwatering.com/icon.white.svg":"https://cs.uwatering.com/icon.black.svg",alt:"CS Webring",style:{width:"24px",height:"auto",opacity:.8}})}),Mt.jsx("a",{href:"https://cs.uwatering.com/#https://ericli3690.github.io/?nav=next",children:"→"})]})})]}),o&&Mt.jsxs("div",{className:"left-links-bar",style:{left:i},children:[Mt.jsx("a",{className:"icon-link",href:"#contact-container","aria-label":"Email",children:Mt.jsx("svg",{className:"icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Mt.jsx("path",{d:"M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,8l-8,5L4,8V6l8,5l8-5V8z"})})}),Mt.jsx("a",{className:"icon-link",href:"#contact-container","aria-label":"Phone",children:Mt.jsx("svg",{className:"icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Mt.jsx("path",{d:"M6.62,10.79C8.06,13.62,10.38,15.94,13.21,17.38L15.41,15.18C15.69,14.9,16.08,14.82,16.43,14.93C17.55,15.3,18.75,15.5,20,15.5A1,1,0,0,1,21,16.5V20A1,1,0,0,1,20,21A17,17,0,0,1,3,4A1,1,0,0,1,4,3H7.5A1,1,0,0,1,8.5,4C8.5,5.25,8.7,6.45,9.07,7.57C9.18,7.92,9.1,8.31,8.82,8.59L6.62,10.79Z"})})}),Mt.jsx("a",{className:"icon-link",href:"https://github.com/ericli3690",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:Mt.jsx("svg",{className:"icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Mt.jsx("path",{d:"M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"})})}),Mt.jsx("a",{className:"icon-link",href:"https://www.linkedin.com/in/song-eric-li/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:Mt.jsx("svg",{className:"icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Mt.jsx("path",{d:"M19,3A2,2,0,0,1,21,5V19a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3H19M18.5,18.5V13.2A3.26,3.26,0,0,0,15.24,9.9a3.17,3.17,0,0,0-2.32.95V10.13H9.5V18.5h3.4V13.57c0-.9.18-1.56,1.3-1.56s1.3.86,1.3,1.56V18.5Z M6.88,8.56A1.68,1.68,0,0,0,8.56,6.88,1.69,1.69,0,0,0,6.88,5.19,1.69,1.69,0,0,0,5.19,6.88,1.68,1.68,0,0,0,6.88,8.56M8.27,18.5V10.13H5.21V18.5Z"})})})]}),Mt.jsx("button",{className:`dark-mode-toggle ${g?"dark-mode":""}`,onClick:R,"aria-label":"Toggle dark mode",children:Mt.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"moon-icon",children:Mt.jsx("path",{d:"M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"})})}),o&&Mt.jsx("div",{className:"right-scroll-indicator",style:{right:i},children:w.map((z,et)=>Mt.jsx("div",{className:`right-scroll-dot ${m===et?"active":""}`,onClick:()=>D(et)},et))})]})}zx.createRoot(document.getElementById("root")).render(Mt.jsx(Xe.StrictMode,{children:Mt.jsx(rb,{})}));

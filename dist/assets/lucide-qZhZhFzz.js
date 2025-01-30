var R={exports:{}},n={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=Symbol.for("react.element"),T=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),H=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),G=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),S=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=S&&e[S]||e["@@iterator"],typeof e=="function"?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,j={};function y(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||g}y.prototype.isReactComponent={};y.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function L(){}L.prototype=y.prototype;function w(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||g}var $=w.prototype=new L;$.constructor=w;M($,y.prototype);$.isPureReactComponent=!0;var C=Array.isArray,N=Object.prototype.hasOwnProperty,x={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,r){var o,u={},c=null,a=null;if(t!=null)for(o in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(c=""+t.key),t)N.call(t,o)&&!O.hasOwnProperty(o)&&(u[o]=t[o]);var s=arguments.length-2;if(s===1)u.children=r;else if(1<s){for(var i=Array(s),f=0;f<s;f++)i[f]=arguments[f+2];u.children=i}if(e&&e.defaultProps)for(o in s=e.defaultProps,s)u[o]===void 0&&(u[o]=s[o]);return{$$typeof:h,type:e,key:c,ref:a,props:u,_owner:x.current}}function K(e,t){return{$$typeof:h,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function b(e){return typeof e=="object"&&e!==null&&e.$$typeof===h}function Z(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var E=/\/+/g;function k(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Z(""+e.key):t.toString(36)}function v(e,t,r,o,u){var c=typeof e;(c==="undefined"||c==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case h:case T:a=!0}}if(a)return a=e,u=u(a),e=o===""?"."+k(a,0):o,C(u)?(r="",e!=null&&(r=e.replace(E,"$&/")+"/"),v(u,t,r,"",function(f){return f})):u!=null&&(b(u)&&(u=K(u,r+(!u.key||a&&a.key===u.key?"":(""+u.key).replace(E,"$&/")+"/")+e)),t.push(u)),1;if(a=0,o=o===""?".":o+":",C(e))for(var s=0;s<e.length;s++){c=e[s];var i=o+k(c,s);a+=v(c,t,r,i,u)}else if(i=X(e),typeof i=="function")for(e=i.call(e),s=0;!(c=e.next()).done;)c=c.value,i=o+k(c,s++),a+=v(c,t,r,i,u);else if(c==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function _(e,t,r){if(e==null)return e;var o=[],u=0;return v(e,o,"","",function(c){return t.call(r,c,u++)}),o}function J(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var l={current:null},m={transition:null},Q={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:m,ReactCurrentOwner:x};function I(){throw Error("act(...) is not supported in production builds of React.")}n.Children={map:_,forEach:function(e,t,r){_(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return _(e,function(){t++}),t},toArray:function(e){return _(e,function(t){return t})||[]},only:function(e){if(!b(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};n.Component=y;n.Fragment=V;n.Profiler=F;n.PureComponent=w;n.StrictMode=D;n.Suspense=B;n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q;n.act=I;n.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=M({},e.props),u=e.key,c=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(c=t.ref,a=x.current),t.key!==void 0&&(u=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(i in t)N.call(t,i)&&!O.hasOwnProperty(i)&&(o[i]=t[i]===void 0&&s!==void 0?s[i]:t[i])}var i=arguments.length-2;if(i===1)o.children=r;else if(1<i){s=Array(i);for(var f=0;f<i;f++)s[f]=arguments[f+2];o.children=s}return{$$typeof:h,type:e.type,key:u,ref:c,props:o,_owner:a}};n.createContext=function(e){return e={$$typeof:H,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:U,_context:e},e.Consumer=e};n.createElement=q;n.createFactory=function(e){var t=q.bind(null,e);return t.type=e,t};n.createRef=function(){return{current:null}};n.forwardRef=function(e){return{$$typeof:z,render:e}};n.isValidElement=b;n.lazy=function(e){return{$$typeof:W,_payload:{_status:-1,_result:e},_init:J}};n.memo=function(e,t){return{$$typeof:G,type:e,compare:t===void 0?null:t}};n.startTransition=function(e){var t=m.transition;m.transition={};try{e()}finally{m.transition=t}};n.unstable_act=I;n.useCallback=function(e,t){return l.current.useCallback(e,t)};n.useContext=function(e){return l.current.useContext(e)};n.useDebugValue=function(){};n.useDeferredValue=function(e){return l.current.useDeferredValue(e)};n.useEffect=function(e,t){return l.current.useEffect(e,t)};n.useId=function(){return l.current.useId()};n.useImperativeHandle=function(e,t,r){return l.current.useImperativeHandle(e,t,r)};n.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)};n.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)};n.useMemo=function(e,t){return l.current.useMemo(e,t)};n.useReducer=function(e,t,r){return l.current.useReducer(e,t,r)};n.useRef=function(e){return l.current.useRef(e)};n.useState=function(e){return l.current.useState(e)};n.useSyncExternalStore=function(e,t,r){return l.current.useSyncExternalStore(e,t,r)};n.useTransition=function(){return l.current.useTransition()};n.version="18.3.1";R.exports=n;var d=R.exports;/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),P=(...e)=>e.filter((t,r,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ee={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=d.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:u="",children:c,iconNode:a,...s},i)=>d.createElement("svg",{ref:i,...ee,width:t,height:t,stroke:e,strokeWidth:o?Number(r)*24/Number(t):r,className:P("lucide",u),...s},[...a.map(([f,A])=>d.createElement(f,A)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(e,t)=>{const r=d.forwardRef(({className:o,...u},c)=>d.createElement(te,{ref:c,iconNode:t,className:P(`lucide-${Y(e)}`,o),...u}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],fe=p("ChevronDown",re);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],pe=p("ChevronUp",ne);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],ye=p("ExternalLink",oe);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],de=p("FileText",ue);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],he=p("Github",ce);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],_e=p("Linkedin",ie);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],ve=p("Mail",se);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],me=p("Menu",ae);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ke=p("X",le);export{pe as C,ye as E,de as F,he as G,_e as L,me as M,ke as X,ve as a,fe as b,d as r};

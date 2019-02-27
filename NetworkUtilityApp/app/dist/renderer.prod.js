module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="./dist/",r(r.s="./app/index.js")}({"./app/app.global.css":function(e,t,r){},"./app/components/Counter.css":function(e,t,r){e.exports={backButton:"Counter__backButton__4lvfc",counter:"Counter__counter__2BpKs",btnGroup:"Counter__btnGroup__1f4Se",btn:"Counter__btn__2T2tb"}},"./app/components/Home.css":function(e,t,r){},"./app/constants/routes.json":function(e){e.exports={HOME:"/home",COUNTER:"/counter",SCRIPTSB:"/scriptsb"}},"./app/containers/PythonModules sync recursive ^\\.\\/.*$":function(e,t,r){var n={"./BasePythonModule":"./app/containers/PythonModules/BasePythonModule.js","./BasePythonModule.js":"./app/containers/PythonModules/BasePythonModule.js","./PingModule":"./app/containers/PythonModules/PingModule.js","./PingModule.js":"./app/containers/PythonModules/PingModule.js"};function o(e){var t=i(e);return r(t)}function i(e){var t=n[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id="./app/containers/PythonModules sync recursive ^\\.\\/.*$"},"./app/containers/PythonModules/BasePythonModule.js":function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return n});r("react");class n{constructor(e,t){this.name=e,this.description=t}}},"./app/containers/PythonModules/PingModule.js":function(e,t,r){"use strict";r.r(t),r.d(t,"PingModule",function(){return o});r("react");var n=r("./app/containers/PythonModules/BasePythonModule.js");class o extends n.default{constructor(){super("Ping","Allows to ping remote servers")}}},"./app/index.js":function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"INCREMENT_COUNTER",function(){return D}),r.d(n,"DECREMENT_COUNTER",function(){return T}),r.d(n,"increment",function(){return R}),r.d(n,"decrement",function(){return $}),r.d(n,"incrementIfOdd",function(){return B}),r.d(n,"incrementAsync",function(){return q});var o,i=r("react"),a=r("react-dom"),c=r("react-hot-loader"),u=r("react-redux"),l=r("connected-react-router"),s=r("react-router"),f=r("./app/constants/routes.json");class d extends i.Component{constructor(...e){super(...e),this.props=void 0}render(){const{children:e}=this.props;return function(e,t,r,n){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&i)for(var c in i)void 0===t[c]&&(t[c]=i[c]);else t||(t=i||{});if(1===a)t.children=n;else if(a>1){for(var u=new Array(a),l=0;l<a;l++)u[l]=arguments[l+3];t.children=u}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}(i.Fragment,{},void 0,e)}}var p,h=r("react-router-dom"),v=r("./app/components/Home.css"),y=r.n(v);function g(e,t,r,n){p||(p="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=n;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:p,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var m,b=g("h1",{},void 0,"Modules dashboard"),x=g("thead",{},void 0,g("tr",{},void 0,g("th",{scope:"col"},void 0,"Name"),g("th",{scope:"col"},void 0,"Description")));class S extends i.Component{constructor(){super(),this.props=void 0;var e=["PingModule"].map(e=>{var t=new(r("./app/containers/PythonModules sync recursive ^\\.\\/.*$")("./"+e)[e]);return{name:t.name,description:t.description}});this.state={supportedModules:e}}render(){return g("div",{},void 0,b,g("table",{className:"table"},void 0,x,g("tbody",{},void 0,this.state.supportedModules.map((e,t)=>g("tr",{},t,g("td",{},void 0,e.name),g("td",{},void 0,e.description))))))}}function w(e,t,r,n){m||(m="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=n;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:m,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var j=w(S,{});class P extends i.Component{constructor(...e){super(...e),this.props=void 0}render(){return j}}var E,O=r("redux"),k=r("./app/components/Counter.css"),C=r.n(k);function M(e,t,r,n){E||(E="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=n;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:E,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var _=M("i",{className:"fa fa-arrow-left fa-3x"}),N=M("i",{className:"fa fa-plus"}),A=M("i",{className:"fa fa-minus"});const D="INCREMENT_COUNTER",T="DECREMENT_COUNTER";function R(){return{type:D}}function $(){return{type:T}}function B(){return(e,t)=>{const{counter:r}=t();r%2!=0&&e(R())}}function q(e=1e3){return t=>{setTimeout(()=>{t(R())},e)}}var F,H=Object(u.connect)(function(e){return{counter:e.counter}},function(e){return Object(O.bindActionCreators)(n,e)})(class extends i.Component{constructor(...e){super(...e),this.props=void 0}render(){const{increment:e,incrementIfOdd:t,incrementAsync:r,decrement:n,counter:o}=this.props;return M("div",{},void 0,M("div",{className:C.a.backButton,"data-tid":"backButton"},void 0,M(h.Link,{to:f.HOME},void 0,_)),M("div",{className:`counter ${C.a.counter}`,"data-tid":"counter"},void 0,o),M("div",{className:C.a.btnGroup},void 0,M("button",{className:C.a.btn,onClick:e,"data-tclass":"btn",type:"button"},void 0,N),M("button",{className:C.a.btn,onClick:n,"data-tclass":"btn",type:"button"},void 0,A),M("button",{className:C.a.btn,onClick:t,"data-tclass":"btn",type:"button"},void 0,"odd"),M("button",{className:C.a.btn,onClick:()=>r(),"data-tclass":"btn",type:"button"},void 0,"async")))}});r("electron-log");function L(e,t,r,n){F||(F="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=n;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:F,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var U,I=r("./app/services/PythonService.js"),G=L("h2",{},void 0,"New mega page");class z extends i.Component{constructor(...e){super(...e),this.props=void 0}render(){return I.ExecuteScript("test.py",e=>{}),L("div",{className:y.a.container,"data-tid":"container"},void 0,G,L(h.Link,{to:f.COUNTER},void 0,"to Counter"))}}function K(e,t,r,n){U||(U="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=n;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:U,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var Y,J=K(z,{});class Q extends i.Component{constructor(...e){super(...e),this.props=void 0}render(){return J}}function V(e,t,r,n){Y||(Y="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=n;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:Y,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var W,X=V(s.Route,{path:"/",component:P});function Z(e,t,r,n){W||(W="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=n;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:W,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var ee=Z(()=>V(d,{},void 0,V(s.Switch,{},void 0,V(s.Route,{path:f.COUNTER,exact:!0,component:H}),V(s.Route,{path:f.SCRIPTSB,exact:!0,component:Q}),V(s.Route,{path:f.HOME,exact:!0,component:P}),X)),{});var te=r("redux-thunk"),re=r.n(te),ne=r("history");r("./node_modules/redux-logger/dist/redux-logger.js");function oe(e=0,t){switch(t.type){case D:return e+1;case T:return e-1;default:return e}}function ie(e){return Object(O.combineReducers)({router:Object(l.connectRouter)(e),counter:oe})}const ae=Object(ne.createHashHistory)();ie(ae);const ce=Object(ne.createHashHistory)(),ue=ie(ce),le=Object(l.routerMiddleware)(ce),se=Object(O.applyMiddleware)(re.a,le);const fe={configureStore:function(e){return Object(O.createStore)(ue,e,se)},history:ce},{configureStore:de}=fe,{history:pe}=fe;var he;r("./app/app.global.css");function ve(e,t,r,n){he||(he="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=n;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:he,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}const ye=de();Object(a.render)(ve(c.AppContainer,{},void 0,ve(class extends i.Component{render(){const{store:e,history:t}=this.props;return Z(u.Provider,{store:e},void 0,Z(l.ConnectedRouter,{history:t},void 0,ee))}},{store:ye,history:pe})),document.getElementById("root"))},"./app/services/PythonService.js":function(e,t,r){"use strict";r.r(t),r.d(t,"ExecuteScript",function(){return o});var n=r("python-shell"),o=function(e,t){let r=new n.PythonShell("./python/"+e);r.send(""),r.on("message",function(e){console.log(e),t(e)})}},"./node_modules/redux-logger/dist/redux-logger.js":function(e,t,r){!function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function c(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t=void 0===e?"undefined":S(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,s,f,d,p){p=p||[];var h=(f=f||[]).slice(0);if(void 0!==d){if(s){if("function"==typeof s&&s(h,d))return;if("object"===(void 0===s?"undefined":S(s))){if(s.prefilter&&s.prefilter(h,d))return;if(s.normalize){var v=s.normalize(h,d,e,t);v&&(e=v[0],t=v[1])}}}h.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y=void 0===e?"undefined":S(e),g=void 0===t?"undefined":S(t),m="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),b="undefined"!==g||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!m&&b)r(new o(h,t));else if(!b&&m)r(new i(h,e));else if(u(e)!==u(t))r(new n(h,e,t));else if("date"===u(e)&&e-t!=0)r(new n(h,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(h,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var x;for(e.length,x=0;x<e.length;x++)x>=t.length?r(new a(h,x,new i(void 0,e[x]))):l(e[x],t[x],r,s,h,x,p);for(;x<t.length;)r(new a(h,x,new o(void 0,t[x++])))}else{var w=Object.keys(e),j=Object.keys(t);w.forEach(function(n,o){var i=j.indexOf(n);i>=0?(l(e[n],t[n],r,s,h,n,p),j=c(j,i)):l(e[n],void 0,r,s,h,n,p)}),j.forEach(function(e){l(void 0,t[e],r,s,h,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(h,e,t)))}function s(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function f(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)void 0===n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":!function e(t,r,n){if(n.path&&n.path.length){var o,i=t[r],a=n.path.length-1;for(o=0;o<a;o++)i=i[n.path[o]];switch(n.kind){case"A":e(i[n.path[o]],n.index,n.item);break;case"D":delete i[n.path[o]];break;case"E":case"N":i[n.path[o]]=n.rhs}}else switch(n.kind){case"A":e(t[r],n.index,n.item);break;case"D":t=c(t,r);break;case"E":case"N":t[r]=n.rhs}return t}(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function d(e,t,r,n){var o=s(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=function(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}(e);r.log.apply(r,["%c "+P[t].text,function(e){return"color: "+P[e].color+"; font-weight: bold"}(t)].concat(w(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function p(e,t,r,n){switch(void 0===e?"undefined":S(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,w(r)):e[n];case"function":return e(t);default:return e}}function h(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?function(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}(t):o,a=t.collapsed,c=t.colors,u=t.level,l=t.diff,s=void 0===t.titleFormatter;e.forEach(function(o,f){var h=o.started,v=o.startedTime,y=o.action,g=o.prevState,m=o.error,x=o.took,S=o.nextState,w=e[f+1];w&&(S=w.prevState,x=w.started-h);var j=n(y),P="function"==typeof a?a(function(){return S},y,o):a,E=b(v),O=c.title?"color: "+c.title(j)+";":"",k=["color: gray; font-weight: lighter;"];k.push(O),t.timestamp&&k.push("color: gray; font-weight: lighter;"),t.duration&&k.push("color: gray; font-weight: lighter;");var C=i(j,E,x);try{P?c.title&&s?r.groupCollapsed.apply(r,["%c "+C].concat(k)):r.groupCollapsed(C):c.title&&s?r.group.apply(r,["%c "+C].concat(k)):r.group(C)}catch(e){r.log(C)}var M=p(u,j,[g],"prevState"),_=p(u,j,[j],"action"),N=p(u,j,[m,g],"error"),A=p(u,j,[S],"nextState");if(M)if(c.prevState){var D="color: "+c.prevState(g)+"; font-weight: bold";r[M]("%c prev state",D,g)}else r[M]("prev state",g);if(_)if(c.action){var T="color: "+c.action(j)+"; font-weight: bold";r[_]("%c action    ",T,j)}else r[_]("action    ",j);if(m&&N)if(c.error){var R="color: "+c.error(m,g)+"; font-weight: bold;";r[N]("%c error     ",R,m)}else r[N]("error     ",m);if(A)if(c.nextState){var $="color: "+c.nextState(S)+"; font-weight: bold";r[A]("%c next state",$,S)}else r[A]("next state",S);l&&d(g,S,r,P);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},E,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,c=t.diffPredicate;if(void 0===r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var s={};u.push(s),s.started=x.now(),s.startedTime=new Date,s.prevState=n(r()),s.action=l;var f=void 0;if(a)try{f=e(l)}catch(e){s.error=o(e)}else f=e(l);s.took=x.now()-s.started,s.nextState=n(r());var d=t.diff&&"function"==typeof c?c(r,l):t.diff;if(h(u,Object.assign({},t,{diff:d})),u.length=0,s.error)throw s.error;return f}}}}var y,g,m=function(e,t){return function(e,t){return new Array(t+1).join(e)}("0",t-e.toString().length)+e},b=function(e){return m(e.getHours(),2)+":"+m(e.getMinutes(),2)+":"+m(e.getSeconds(),2)+"."+m(e.getMilliseconds(),3)},x="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},j=[];y="object"===("undefined"==typeof global?"undefined":S(global))&&global?global:"undefined"!=typeof window?window:{},(g=y.DeepDiff)&&j.push(function(){void 0!==g&&y.DeepDiff===s&&(y.DeepDiff=g,g=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(s,{diff:{value:s,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:function(e,t,r){e&&t&&l(e,t,function(n){r&&!r(e,t,n)||f(e,t,n)})},enumerable:!0},applyChange:{value:f,enumerable:!0},revertChange:{value:function(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)void 0===i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":!function e(t,r,n){if(n.path&&n.path.length){var o,i=t[r],a=n.path.length-1;for(o=0;o<a;o++)i=i[n.path[o]];switch(n.kind){case"A":e(i[n.path[o]],n.index,n.item);break;case"D":case"E":i[n.path[o]]=n.lhs;break;case"N":delete i[n.path[o]]}}else switch(n.kind){case"A":e(t[r],n.index,n.item);break;case"D":case"E":t[r]=n.lhs;break;case"N":t=c(t,r)}return t}(i[r.path[n]],r.index,r.item);break;case"D":case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}},enumerable:!0},isConflict:{value:function(){return void 0!==g},enumerable:!0},noConflict:{value:function(){return j&&(j.forEach(function(e){e()}),j=null),s},enumerable:!0}});var P={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},E={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?v()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=E,e.createLogger=v,e.logger=O,e.default=O,Object.defineProperty(e,"__esModule",{value:!0})}(t)},"connected-react-router":function(e,t){e.exports=require("connected-react-router")},"electron-log":function(e,t){e.exports=require("electron-log")},history:function(e,t){e.exports=require("history")},"python-shell":function(e,t){e.exports=require("python-shell")},react:function(e,t){e.exports=require("react")},"react-dom":function(e,t){e.exports=require("react-dom")},"react-hot-loader":function(e,t){e.exports=require("react-hot-loader")},"react-redux":function(e,t){e.exports=require("react-redux")},"react-router":function(e,t){e.exports=require("react-router")},"react-router-dom":function(e,t){e.exports=require("react-router-dom")},redux:function(e,t){e.exports=require("redux")},"redux-thunk":function(e,t){e.exports=require("redux-thunk")}});
//# sourceMappingURL=renderer.prod.js.map
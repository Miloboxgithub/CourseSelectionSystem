function e(e,t){return function(){return e.apply(t,arguments)}}const{toString:t}=Object.prototype,{getPrototypeOf:r}=Object,n=(e=>r=>{const n=t.call(r);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),o=e=>(e=e.toLowerCase(),t=>n(t)===e),s=e=>t=>typeof t===e,{isArray:a}=Array,i=s("undefined");const c=o("ArrayBuffer");const l=s("string"),u=s("function"),d=s("number"),f=e=>null!==e&&"object"==typeof e,p=e=>{if("object"!==n(e))return!1;const t=r(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},h=o("Date"),m=o("File"),g=o("Blob"),y=o("FileList"),b=o("URLSearchParams"),[w,E,S,R]=["ReadableStream","Request","Response","Headers"].map(o);function O(e,t,{allOwnKeys:r=!1}={}){if(null==e)return;let n,o;if("object"!=typeof e&&(e=[e]),a(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let a;for(n=0;n<s;n++)a=o[n],t.call(null,e[a],a,e)}}function T(e,t){t=t.toLowerCase();const r=Object.keys(e);let n,o=r.length;for(;o-- >0;)if(n=r[o],t===n.toLowerCase())return n;return null}const A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,v=e=>!i(e)&&e!==A;const j=(e=>t=>e&&t instanceof e)("undefined"!=typeof Uint8Array&&r(Uint8Array)),_=o("HTMLFormElement"),x=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),C=o("RegExp"),N=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};O(r,((r,o)=>{let s;!1!==(s=t(r,o,e))&&(n[o]=s||r)})),Object.defineProperties(e,n)},P="abcdefghijklmnopqrstuvwxyz",k={DIGIT:"0123456789",ALPHA:P,ALPHA_DIGIT:P+P.toUpperCase()+"0123456789"};const L=o("AsyncFunction"),U=(F="function"==typeof setImmediate,B=u(A.postMessage),F?setImmediate:B?(D=`axios@${Math.random()}`,I=[],A.addEventListener("message",(({source:e,data:t})=>{e===A&&t===D&&I.length&&I.shift()()}),!1),e=>{I.push(e),A.postMessage(D,"*")}):e=>setTimeout(e));var F,B,D,I;const q="undefined"!=typeof queueMicrotask?queueMicrotask.bind(A):"undefined"!=typeof process&&process.nextTick||U,z={isArray:a,isArrayBuffer:c,isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&u(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||u(e.append)&&("formdata"===(t=n(e))||"object"===t&&u(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&c(e.buffer),t},isString:l,isNumber:d,isBoolean:e=>!0===e||!1===e,isObject:f,isPlainObject:p,isReadableStream:w,isRequest:E,isResponse:S,isHeaders:R,isUndefined:i,isDate:h,isFile:m,isBlob:g,isRegExp:C,isFunction:u,isStream:e=>f(e)&&u(e.pipe),isURLSearchParams:b,isTypedArray:j,isFileList:y,forEach:O,merge:function e(){const{caseless:t}=v(this)&&this||{},r={},n=(n,o)=>{const s=t&&T(r,o)||o;p(r[s])&&p(n)?r[s]=e(r[s],n):p(n)?r[s]=e({},n):a(n)?r[s]=n.slice():r[s]=n};for(let o=0,s=arguments.length;o<s;o++)arguments[o]&&O(arguments[o],n);return r},extend:(t,r,n,{allOwnKeys:o}={})=>(O(r,((r,o)=>{n&&u(r)?t[o]=e(r,n):t[o]=r}),{allOwnKeys:o}),t),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,n,o)=>{let s,a,i;const c={};if(t=t||{},null==e)return t;do{for(s=Object.getOwnPropertyNames(e),a=s.length;a-- >0;)i=s[a],o&&!o(i,e,t)||c[i]||(t[i]=e[i],c[i]=!0);e=!1!==n&&r(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:n,kindOfTest:o,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return-1!==n&&n===r},toArray:e=>{if(!e)return null;if(a(e))return e;let t=e.length;if(!d(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let n;for(;(n=r.next())&&!n.done;){const r=n.value;t.call(e,r[0],r[1])}},matchAll:(e,t)=>{let r;const n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:_,hasOwnProperty:x,hasOwnProp:x,reduceDescriptors:N,freezeMethods:e=>{N(e,((t,r)=>{if(u(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const n=e[r];u(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))}))},toObjectSet:(e,t)=>{const r={},n=e=>{e.forEach((e=>{r[e]=!0}))};return a(e)?n(e):n(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:T,global:A,isContextDefined:v,ALPHABET:k,generateString:(e=16,t=k.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:function(e){return!!(e&&u(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),r=(e,n)=>{if(f(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;const o=a(e)?[]:{};return O(e,((e,t)=>{const s=r(e,n+1);!i(s)&&(o[t]=s)})),t[n]=void 0,o}}return e};return r(e,0)},isAsyncFn:L,isThenable:e=>e&&(f(e)||u(e))&&u(e.then)&&u(e.catch),setImmediate:U,asap:q};function M(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o,this.status=o.status?o.status:null)}z.inherits(M,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:z.toJSONObject(this.config),code:this.code,status:this.status}}});const H=M.prototype,J={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{J[e]={value:e}})),Object.defineProperties(M,J),Object.defineProperty(H,"isAxiosError",{value:!0}),M.from=(e,t,r,n,o,s)=>{const a=Object.create(H);return z.toFlatObject(e,a,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),M.call(a,e.message,t,r,n,o),a.cause=e,a.name=e.name,s&&Object.assign(a,s),a};function W(e){return z.isPlainObject(e)||z.isArray(e)}function K(e){return z.endsWith(e,"[]")?e.slice(0,-2):e}function V(e,t,r){return e?e.concat(t).map((function(e,t){return e=K(e),!r&&t?"["+e+"]":e})).join(r?".":""):t}const $=z.toFlatObject(z,{},null,(function(e){return/^is[A-Z]/.test(e)}));function G(e,t,r){if(!z.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const n=(r=z.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!z.isUndefined(t[e])}))).metaTokens,o=r.visitor||l,s=r.dots,a=r.indexes,i=(r.Blob||"undefined"!=typeof Blob&&Blob)&&z.isSpecCompliantForm(t);if(!z.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(z.isDate(e))return e.toISOString();if(!i&&z.isBlob(e))throw new M("Blob is not supported. Use a Buffer instead.");return z.isArrayBuffer(e)||z.isTypedArray(e)?i&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,r,o){let i=e;if(e&&!o&&"object"==typeof e)if(z.endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else if(z.isArray(e)&&function(e){return z.isArray(e)&&!e.some(W)}(e)||(z.isFileList(e)||z.endsWith(r,"[]"))&&(i=z.toArray(e)))return r=K(r),i.forEach((function(e,n){!z.isUndefined(e)&&null!==e&&t.append(!0===a?V([r],n,s):null===a?r:r+"[]",c(e))})),!1;return!!W(e)||(t.append(V(o,r,s),c(e)),!1)}const u=[],d=Object.assign($,{defaultVisitor:l,convertValue:c,isVisitable:W});if(!z.isObject(e))throw new TypeError("data must be an object");return function e(r,n){if(!z.isUndefined(r)){if(-1!==u.indexOf(r))throw Error("Circular reference detected in "+n.join("."));u.push(r),z.forEach(r,(function(r,s){!0===(!(z.isUndefined(r)||null===r)&&o.call(t,r,z.isString(s)?s.trim():s,n,d))&&e(r,n?n.concat(s):[s])})),u.pop()}}(e),t}function X(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Q(e,t){this._pairs=[],e&&G(e,this,t)}const Z=Q.prototype;function Y(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ee(e,t,r){if(!t)return e;const n=r&&r.encode||Y;z.isFunction(r)&&(r={serialize:r});const o=r&&r.serialize;let s;if(s=o?o(t,r):z.isURLSearchParams(t)?t.toString():new Q(t,r).toString(n),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}Z.append=function(e,t){this._pairs.push([e,t])},Z.toString=function(e){const t=e?function(t){return e.call(this,t,X)}:X;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};class te{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){z.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}const re={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ne={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Q,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},oe="undefined"!=typeof window&&"undefined"!=typeof document,se="object"==typeof navigator&&navigator||void 0,ae=oe&&(!se||["ReactNative","NativeScript","NS"].indexOf(se.product)<0),ie="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,ce=oe&&window.location.href||"http://localhost",le={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:oe,hasStandardBrowserEnv:ae,hasStandardBrowserWebWorkerEnv:ie,navigator:se,origin:ce},Symbol.toStringTag,{value:"Module"})),...ne};function ue(e){function t(e,r,n,o){let s=e[o++];if("__proto__"===s)return!0;const a=Number.isFinite(+s),i=o>=e.length;if(s=!s&&z.isArray(n)?n.length:s,i)return z.hasOwnProp(n,s)?n[s]=[n[s],r]:n[s]=r,!a;n[s]&&z.isObject(n[s])||(n[s]=[]);return t(e,r,n[s],o)&&z.isArray(n[s])&&(n[s]=function(e){const t={},r=Object.keys(e);let n;const o=r.length;let s;for(n=0;n<o;n++)s=r[n],t[s]=e[s];return t}(n[s])),!a}if(z.isFormData(e)&&z.isFunction(e.entries)){const r={};return z.forEachEntry(e,((e,n)=>{t(function(e){return z.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),n,r,0)})),r}return null}const de={transitional:re,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",n=r.indexOf("application/json")>-1,o=z.isObject(e);o&&z.isHTMLForm(e)&&(e=new FormData(e));if(z.isFormData(e))return n?JSON.stringify(ue(e)):e;if(z.isArrayBuffer(e)||z.isBuffer(e)||z.isStream(e)||z.isFile(e)||z.isBlob(e)||z.isReadableStream(e))return e;if(z.isArrayBufferView(e))return e.buffer;if(z.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return G(e,new le.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return le.isNode&&z.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=z.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return G(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||n?(t.setContentType("application/json",!1),function(e,t,r){if(z.isString(e))try{return(t||JSON.parse)(e),z.trim(e)}catch(n){if("SyntaxError"!==n.name)throw n}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||de.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(z.isResponse(e)||z.isReadableStream(e))return e;if(e&&z.isString(e)&&(r&&!this.responseType||n)){const r=!(t&&t.silentJSONParsing)&&n;try{return JSON.parse(e)}catch(o){if(r){if("SyntaxError"===o.name)throw M.from(o,M.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:le.classes.FormData,Blob:le.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};z.forEach(["delete","get","head","post","put","patch"],(e=>{de.headers[e]={}}));const fe=de,pe=z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),he=Symbol("internals");function me(e){return e&&String(e).trim().toLowerCase()}function ge(e){return!1===e||null==e?e:z.isArray(e)?e.map(ge):String(e)}function ye(e,t,r,n,o){return z.isFunction(n)?n.call(this,t,r):(o&&(t=r),z.isString(t)?z.isString(n)?-1!==t.indexOf(n):z.isRegExp(n)?n.test(t):void 0:void 0)}class be{constructor(e){e&&this.set(e)}set(e,t,r){const n=this;function o(e,t,r){const o=me(t);if(!o)throw new Error("header name must be a non-empty string");const s=z.findKey(n,o);(!s||void 0===n[s]||!0===r||void 0===r&&!1!==n[s])&&(n[s||t]=ge(e))}const s=(e,t)=>z.forEach(e,((e,r)=>o(e,r,t)));if(z.isPlainObject(e)||e instanceof this.constructor)s(e,t);else if(z.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))s((e=>{const t={};let r,n,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),r=e.substring(0,o).trim().toLowerCase(),n=e.substring(o+1).trim(),!r||t[r]&&pe[r]||("set-cookie"===r?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)})),t})(e),t);else if(z.isHeaders(e))for(const[a,i]of e.entries())o(i,a,r);else null!=e&&o(t,e,r);return this}get(e,t){if(e=me(e)){const r=z.findKey(this,e);if(r){const e=this[r];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}(e);if(z.isFunction(t))return t.call(this,e,r);if(z.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=me(e)){const r=z.findKey(this,e);return!(!r||void 0===this[r]||t&&!ye(0,this[r],r,t))}return!1}delete(e,t){const r=this;let n=!1;function o(e){if(e=me(e)){const o=z.findKey(r,e);!o||t&&!ye(0,r[o],o,t)||(delete r[o],n=!0)}}return z.isArray(e)?e.forEach(o):o(e),n}clear(e){const t=Object.keys(this);let r=t.length,n=!1;for(;r--;){const o=t[r];e&&!ye(0,this[o],o,e,!0)||(delete this[o],n=!0)}return n}normalize(e){const t=this,r={};return z.forEach(this,((n,o)=>{const s=z.findKey(r,o);if(s)return t[s]=ge(n),void delete t[o];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,r)=>t.toUpperCase()+r))}(o):String(o).trim();a!==o&&delete t[o],t[a]=ge(n),r[a]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return z.forEach(this,((r,n)=>{null!=r&&!1!==r&&(t[n]=e&&z.isArray(r)?r.join(", "):r)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach((e=>r.set(e))),r}static accessor(e){const t=(this[he]=this[he]={accessors:{}}).accessors,r=this.prototype;function n(e){const n=me(e);t[n]||(!function(e,t){const r=z.toCamelCase(" "+t);["get","set","has"].forEach((n=>{Object.defineProperty(e,n+r,{value:function(e,r,o){return this[n].call(this,t,e,r,o)},configurable:!0})}))}(r,e),t[n]=!0)}return z.isArray(e)?e.forEach(n):n(e),this}}be.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),z.reduceDescriptors(be.prototype,(({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[r]=e}}})),z.freezeMethods(be);const we=be;function Ee(e,t){const r=this||fe,n=t||r,o=we.from(n.headers);let s=n.data;return z.forEach(e,(function(e){s=e.call(r,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function Se(e){return!(!e||!e.__CANCEL__)}function Re(e,t,r){M.call(this,null==e?"canceled":e,M.ERR_CANCELED,t,r),this.name="CanceledError"}function Oe(e,t,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new M("Request failed with status code "+r.status,[M.ERR_BAD_REQUEST,M.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}z.inherits(Re,M,{__CANCEL__:!0});const Te=(e,t,r=3)=>{let n=0;const o=function(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o,s=0,a=0;return t=void 0!==t?t:1e3,function(i){const c=Date.now(),l=n[a];o||(o=c),r[s]=i,n[s]=c;let u=a,d=0;for(;u!==s;)d+=r[u++],u%=e;if(s=(s+1)%e,s===a&&(a=(a+1)%e),c-o<t)return;const f=l&&c-l;return f?Math.round(1e3*d/f):void 0}}(50,250);return function(e,t){let r,n,o=0,s=1e3/t;const a=(t,s=Date.now())=>{o=s,r=null,n&&(clearTimeout(n),n=null),e.apply(null,t)};return[(...e)=>{const t=Date.now(),i=t-o;i>=s?a(e,t):(r=e,n||(n=setTimeout((()=>{n=null,a(r)}),s-i)))},()=>r&&a(r)]}((r=>{const s=r.loaded,a=r.lengthComputable?r.total:void 0,i=s-n,c=o(i);n=s;e({loaded:s,total:a,progress:a?s/a:void 0,bytes:i,rate:c||void 0,estimated:c&&a&&s<=a?(a-s)/c:void 0,event:r,lengthComputable:null!=a,[t?"download":"upload"]:!0})}),r)},Ae=(e,t)=>{const r=null!=e;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},ve=e=>(...t)=>z.asap((()=>e(...t))),je=le.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,le.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(le.origin),le.navigator&&/(msie|trident)/i.test(le.navigator.userAgent)):()=>!0,_e=le.hasStandardBrowserEnv?{write(e,t,r,n,o,s){const a=[e+"="+encodeURIComponent(t)];z.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),z.isString(n)&&a.push("path="+n),z.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function xe(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Ce=e=>e instanceof we?{...e}:e;function Ne(e,t){t=t||{};const r={};function n(e,t,r,n){return z.isPlainObject(e)&&z.isPlainObject(t)?z.merge.call({caseless:n},e,t):z.isPlainObject(t)?z.merge({},t):z.isArray(t)?t.slice():t}function o(e,t,r,o){return z.isUndefined(t)?z.isUndefined(e)?void 0:n(void 0,e,0,o):n(e,t,0,o)}function s(e,t){if(!z.isUndefined(t))return n(void 0,t)}function a(e,t){return z.isUndefined(t)?z.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function i(r,o,s){return s in t?n(r,o):s in e?n(void 0,r):void 0}const c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:i,headers:(e,t,r)=>o(Ce(e),Ce(t),0,!0)};return z.forEach(Object.keys(Object.assign({},e,t)),(function(n){const s=c[n]||o,a=s(e[n],t[n],n);z.isUndefined(a)&&s!==i||(r[n]=a)})),r}const Pe=e=>{const t=Ne({},e);let r,{data:n,withXSRFToken:o,xsrfHeaderName:s,xsrfCookieName:a,headers:i,auth:c}=t;if(t.headers=i=we.from(i),t.url=ee(xe(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),z.isFormData(n))if(le.hasStandardBrowserEnv||le.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if(!1!==(r=i.getContentType())){const[e,...t]=r?r.split(";").map((e=>e.trim())).filter(Boolean):[];i.setContentType([e||"multipart/form-data",...t].join("; "))}if(le.hasStandardBrowserEnv&&(o&&z.isFunction(o)&&(o=o(t)),o||!1!==o&&je(t.url))){const e=s&&a&&_e.read(a);e&&i.set(s,e)}return t},ke="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,r){const n=Pe(e);let o=n.data;const s=we.from(n.headers).normalize();let a,i,c,l,u,{responseType:d,onUploadProgress:f,onDownloadProgress:p}=n;function h(){l&&l(),u&&u(),n.cancelToken&&n.cancelToken.unsubscribe(a),n.signal&&n.signal.removeEventListener("abort",a)}let m=new XMLHttpRequest;function g(){if(!m)return;const n=we.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());Oe((function(e){t(e),h()}),(function(e){r(e),h()}),{data:d&&"text"!==d&&"json"!==d?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:n,config:e,request:m}),m=null}m.open(n.method.toUpperCase(),n.url,!0),m.timeout=n.timeout,"onloadend"in m?m.onloadend=g:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(g)},m.onabort=function(){m&&(r(new M("Request aborted",M.ECONNABORTED,e,m)),m=null)},m.onerror=function(){r(new M("Network Error",M.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const o=n.transitional||re;n.timeoutErrorMessage&&(t=n.timeoutErrorMessage),r(new M(t,o.clarifyTimeoutError?M.ETIMEDOUT:M.ECONNABORTED,e,m)),m=null},void 0===o&&s.setContentType(null),"setRequestHeader"in m&&z.forEach(s.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),z.isUndefined(n.withCredentials)||(m.withCredentials=!!n.withCredentials),d&&"json"!==d&&(m.responseType=n.responseType),p&&([c,u]=Te(p,!0),m.addEventListener("progress",c)),f&&m.upload&&([i,l]=Te(f),m.upload.addEventListener("progress",i),m.upload.addEventListener("loadend",l)),(n.cancelToken||n.signal)&&(a=t=>{m&&(r(!t||t.type?new Re(null,e,m):t),m.abort(),m=null)},n.cancelToken&&n.cancelToken.subscribe(a),n.signal&&(n.signal.aborted?a():n.signal.addEventListener("abort",a)));const y=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(n.url);y&&-1===le.protocols.indexOf(y)?r(new M("Unsupported protocol "+y+":",M.ERR_BAD_REQUEST,e)):m.send(o||null)}))},Le=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let r,n=new AbortController;const o=function(e){if(!r){r=!0,a();const t=e instanceof Error?e:this.reason;n.abort(t instanceof M?t:new Re(t instanceof Error?t.message:t))}};let s=t&&setTimeout((()=>{s=null,o(new M(`timeout ${t} of ms exceeded`,M.ETIMEDOUT))}),t);const a=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:i}=n;return i.unsubscribe=()=>z.asap(a),i}},Ue=function*(e,t){let r=e.byteLength;if(!t||r<t)return void(yield e);let n,o=0;for(;o<r;)n=o+t,yield e.slice(o,n),o=n},Fe=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:r}=await t.read();if(e)break;yield r}}finally{await t.cancel()}},Be=(e,t,r,n)=>{const o=async function*(e,t){for await(const r of Fe(e))yield*Ue(r,t)}(e,t);let s,a=0,i=e=>{s||(s=!0,n&&n(e))};return new ReadableStream({async pull(e){try{const{done:t,value:n}=await o.next();if(t)return i(),void e.close();let s=n.byteLength;if(r){let e=a+=s;r(e)}e.enqueue(new Uint8Array(n))}catch(t){throw i(t),t}},cancel:e=>(i(e),o.return())},{highWaterMark:2})},De="function"==typeof fetch&&"function"==typeof Request&&"function"==typeof Response,Ie=De&&"function"==typeof ReadableStream,qe=De&&("function"==typeof TextEncoder?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),ze=(e,...t)=>{try{return!!e(...t)}catch(r){return!1}},Me=Ie&&ze((()=>{let e=!1;const t=new Request(le.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),He=Ie&&ze((()=>z.isReadableStream(new Response("").body))),Je={stream:He&&(e=>e.body)};var We;De&&(We=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!Je[e]&&(Je[e]=z.isFunction(We[e])?t=>t[e]():(t,r)=>{throw new M(`Response type '${e}' is not supported`,M.ERR_NOT_SUPPORT,r)})})));const Ke=async(e,t)=>{const r=z.toFiniteNumber(e.getContentLength());return null==r?(async e=>{if(null==e)return 0;if(z.isBlob(e))return e.size;if(z.isSpecCompliantForm(e)){const t=new Request(le.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return z.isArrayBufferView(e)||z.isArrayBuffer(e)?e.byteLength:(z.isURLSearchParams(e)&&(e+=""),z.isString(e)?(await qe(e)).byteLength:void 0)})(t):r},Ve={http:null,xhr:ke,fetch:De&&(async e=>{let{url:t,method:r,data:n,signal:o,cancelToken:s,timeout:a,onDownloadProgress:i,onUploadProgress:c,responseType:l,headers:u,withCredentials:d="same-origin",fetchOptions:f}=Pe(e);l=l?(l+"").toLowerCase():"text";let p,h=Le([o,s&&s.toAbortSignal()],a);const m=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let g;try{if(c&&Me&&"get"!==r&&"head"!==r&&0!==(g=await Ke(u,n))){let e,r=new Request(t,{method:"POST",body:n,duplex:"half"});if(z.isFormData(n)&&(e=r.headers.get("content-type"))&&u.setContentType(e),r.body){const[e,t]=Ae(g,Te(ve(c)));n=Be(r.body,65536,e,t)}}z.isString(d)||(d=d?"include":"omit");const o="credentials"in Request.prototype;p=new Request(t,{...f,signal:h,method:r.toUpperCase(),headers:u.normalize().toJSON(),body:n,duplex:"half",credentials:o?d:void 0});let s=await fetch(p);const a=He&&("stream"===l||"response"===l);if(He&&(i||a&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=s[t]}));const t=z.toFiniteNumber(s.headers.get("content-length")),[r,n]=i&&Ae(t,Te(ve(i),!0))||[];s=new Response(Be(s.body,65536,r,(()=>{n&&n(),m&&m()})),e)}l=l||"text";let y=await Je[z.findKey(Je,l)||"text"](s,e);return!a&&m&&m(),await new Promise(((t,r)=>{Oe(t,r,{data:y,headers:we.from(s.headers),status:s.status,statusText:s.statusText,config:e,request:p})}))}catch(y){if(m&&m(),y&&"TypeError"===y.name&&/fetch/i.test(y.message))throw Object.assign(new M("Network Error",M.ERR_NETWORK,e,p),{cause:y.cause||y});throw M.from(y,y&&y.code,e,p)}})};z.forEach(Ve,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(r){}Object.defineProperty(e,"adapterName",{value:t})}}));const $e=e=>`- ${e}`,Ge=e=>z.isFunction(e)||null===e||!1===e,Xe=e=>{e=z.isArray(e)?e:[e];const{length:t}=e;let r,n;const o={};for(let s=0;s<t;s++){let t;if(r=e[s],n=r,!Ge(r)&&(n=Ve[(t=String(r)).toLowerCase()],void 0===n))throw new M(`Unknown adapter '${t}'`);if(n)break;o[t||"#"+s]=n}if(!n){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));throw new M("There is no suitable adapter to dispatch the request "+(t?e.length>1?"since :\n"+e.map($e).join("\n"):" "+$e(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return n};function Qe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Re(null,e)}function Ze(e){Qe(e),e.headers=we.from(e.headers),e.data=Ee.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Xe(e.adapter||fe.adapter)(e).then((function(t){return Qe(e),t.data=Ee.call(e,e.transformResponse,t),t.headers=we.from(t.headers),t}),(function(t){return Se(t)||(Qe(e),t&&t.response&&(t.response.data=Ee.call(e,e.transformResponse,t.response),t.response.headers=we.from(t.response.headers))),Promise.reject(t)}))}const Ye={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Ye[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));const et={};Ye.transitional=function(e,t,r){function n(e,t){return"[Axios v1.7.9] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,o,s)=>{if(!1===e)throw new M(n(o," has been removed"+(t?" in "+t:"")),M.ERR_DEPRECATED);return t&&!et[o]&&(et[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,s)}},Ye.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};const tt={assertOptions:function(e,t,r){if("object"!=typeof e)throw new M("options must be an object",M.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const s=n[o],a=t[s];if(a){const t=e[s],r=void 0===t||a(t,s,e);if(!0!==r)throw new M("option "+s+" must be "+r,M.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new M("Unknown option "+s,M.ERR_BAD_OPTION)}},validators:Ye},rt=tt.validators;class nt{constructor(e){this.defaults=e,this.interceptors={request:new te,response:new te}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{r.stack?t&&!String(r.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(r.stack+="\n"+t):r.stack=t}catch(n){}}throw r}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Ne(this.defaults,t);const{transitional:r,paramsSerializer:n,headers:o}=t;void 0!==r&&tt.assertOptions(r,{silentJSONParsing:rt.transitional(rt.boolean),forcedJSONParsing:rt.transitional(rt.boolean),clarifyTimeoutError:rt.transitional(rt.boolean)},!1),null!=n&&(z.isFunction(n)?t.paramsSerializer={serialize:n}:tt.assertOptions(n,{encode:rt.function,serialize:rt.function},!0)),tt.assertOptions(t,{baseUrl:rt.spelling("baseURL"),withXsrfToken:rt.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&z.merge(o.common,o[t.method]);o&&z.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=we.concat(s,o);const a=[];let i=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,a.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,d=0;if(!i){const e=[Ze.bind(this),void 0];for(e.unshift.apply(e,a),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);d<u;)l=l.then(e[d++],e[d++]);return l}u=a.length;let f=t;for(d=0;d<u;){const e=a[d++],t=a[d++];try{f=e(f)}catch(p){t.call(this,p);break}}try{l=Ze.call(this,f)}catch(p){return Promise.reject(p)}for(d=0,u=c.length;d<u;)l=l.then(c[d++],c[d++]);return l}getUri(e){return ee(xe((e=Ne(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}z.forEach(["delete","get","head","options"],(function(e){nt.prototype[e]=function(t,r){return this.request(Ne(r||{},{method:e,url:t,data:(r||{}).data}))}})),z.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,o){return this.request(Ne(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}nt.prototype[e]=t(),nt.prototype[e+"Form"]=t(!0)}));const ot=nt;class st{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const r=this;this.promise.then((e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null})),this.promise.then=e=>{let t;const n=new Promise((e=>{r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e,n,o){r.reason||(r.reason=new Re(e,n,o),t(r.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new st((function(t){e=t})),cancel:e}}}const at=st;const it={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(it).forEach((([e,t])=>{it[t]=e}));const ct=it;const lt=function t(r){const n=new ot(r),o=e(ot.prototype.request,n);return z.extend(o,ot.prototype,n,{allOwnKeys:!0}),z.extend(o,n,null,{allOwnKeys:!0}),o.create=function(e){return t(Ne(r,e))},o}(fe);lt.Axios=ot,lt.CanceledError=Re,lt.CancelToken=at,lt.isCancel=Se,lt.VERSION="1.7.9",lt.toFormData=G,lt.AxiosError=M,lt.Cancel=lt.CanceledError,lt.all=function(e){return Promise.all(e)},lt.spread=function(e){return function(t){return e.apply(null,t)}},lt.isAxiosError=function(e){return z.isObject(e)&&!0===e.isAxiosError},lt.mergeConfig=Ne,lt.AxiosHeaders=we,lt.formToJSON=e=>ue(z.isHTMLForm(e)?new FormData(e):e),lt.getAdapter=Xe,lt.HttpStatusCode=ct,lt.default=lt,lt.defaults.baseURL="http://10.108.7.66/baseurl";const ut=async(e,t)=>{try{let r=await lt.post("/login/userlogin",{name:e,sno:t});return console.log(r.data,"res"),"success"==r.data.data.message&&localStorage.setItem("v_token",r.data.data.token),"student"==r.data.data.role?1:"teacher"==r.data.data.role?2:0}catch(r){return console.error("Error fetching user data:",r.message),0}},dt=async()=>{try{return(await lt.get("/student/getmyinfo",{headers:{Authorization:localStorage.getItem("v_token")}})).data}catch(e){return console.error("Error fetching user data:",e.message),e.message}},ft=async()=>{try{return(await lt.get("/student/getoptionalcourses",{headers:{Authorization:localStorage.getItem("v_token")}})).data}catch(e){return console.error("Error fetching user data:",e.message),e.message}},pt=async()=>{try{return(await lt.get("/student/getmycourse",{headers:{Authorization:localStorage.getItem("v_token")}})).data}catch(e){return console.error("Error fetching user data:",e.message),e.message}},ht=async()=>{try{return(await lt.post("/student/getcoursecontent",{headers:{Authorization:localStorage.getItem("v_token")}})).data}catch(e){return console.error("Error fetching user data:",e.message),e.message}},mt=async()=>{try{return(await lt.post("/student/submitselectcourse",{headers:{Authorization:localStorage.getItem("v_token")}})).data}catch(e){return console.error("Error fetching user data:",e.message),e.message}},gt=async e=>{console.log(e,"Data to send");try{return(await lt.post("/teacher/createnewtopic",e,{headers:{Authorization:localStorage.getItem("v_token"),"Content-Type":"application/json"}})).data}catch(t){throw console.error("Error creating new project:",t.message),t}},yt=async(e,t,r,n)=>{let o={projectpractice_name:e,projectpractice_code:r,title:t,code:n};try{return(await lt.post("/teacher/createtopiccopy",o,{headers:{Authorization:localStorage.getItem("v_token"),"Content-Type":"application/json"}})).data}catch(s){return console.error("Error fetching user data:",s.message),s.message}},bt=async()=>{try{return(await lt.get("/teacher/getallpropractice",{headers:{Authorization:localStorage.getItem("v_token")}})).data}catch(e){return console.error("Error fetching user data:",e.message),e.message}},wt=async(e,t)=>{try{return(await lt.get("/teacher/getseppropractice",{params:{projectpractice_name:e,projectpractice_code:t},headers:{Authorization:localStorage.getItem("v_token")}})).data}catch(r){return console.error("Error fetching user data:",r.message),r.message}},Et=async(e,t,r,n,o)=>{console.log(e,t,r,n);try{return(await lt.get("/teacher/gettopicdetails",{params:{projectpractice_name:e,projectpractice_code:r,title:t,code:n,releasestatus:o},headers:{Authorization:localStorage.getItem("v_token")}})).data}catch(s){return console.error("Error fetching user data:",s.message),s.message}},St=async(e,t,r,n)=>{try{return(await lt.get("/teacher/gettopicresults",{params:{projectpractice_name:e,projectpractice_code:r,title:t,code:n},headers:{Authorization:localStorage.getItem("v_token")}})).data}catch(o){return console.error("Error fetching user data:",o.message),o.message}},Rt=async e=>{try{return(await lt.get("/teacher/getsepstudents",{params:{name:e},headers:{Authorization:localStorage.getItem("v_token")}})).data}catch(t){return console.error("Error fetching user data:",t.message),t.message}},Ot=async(e,t,r,n)=>{try{return(await lt.delete("/teacher/deletetopics",{params:{projectpractice_name:e,projectpractice_code:r,title:t,code:n},headers:{Authorization:localStorage.getItem("v_token")}})).data}catch(o){return console.error("Error fetching user data:",o.message),o.message}},Tt=async(e,t,r,n)=>{try{let o=await lt.get("/teacher/exporttopicresults",{params:{projectpractice_name:e,projectpractice_code:r,title:t,code:n},headers:{Authorization:localStorage.getItem("v_token"),Accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},responseType:"blob"});const s=window.URL.createObjectURL(new Blob([o.data])),a=document.createElement("a");return a.href=s,a.setAttribute("download",e+"-"+t+"-"+n+".xlsx"),document.body.appendChild(a),a.click(),a.remove(),window.URL.revokeObjectURL(s),"File downloaded successfully"}catch(o){return console.error("Error fetching Excel file:",o.message),o.message}};export{ut as L,bt as a,St as b,wt as c,Et as d,Ot as e,gt as f,Rt as g,Tt as h,ft as i,ht as j,pt as k,mt as l,dt as m,yt as s};
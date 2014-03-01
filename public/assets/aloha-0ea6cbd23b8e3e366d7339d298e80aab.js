window.Aloha.settings.baseUrl="/assets/aloha/lib/";/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.0.5 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
var requirejs,require,define;!function(global){function isFunction(e){return"[object Function]"===ostring.call(e)}function isArray(e){return"[object Array]"===ostring.call(e)}function each(e,t){if(e){var r;for(r=0;r<e.length&&(!e[r]||!t(e[r],r,e));r+=1);}}function eachReverse(e,t){if(e){var r;for(r=e.length-1;r>-1&&(!e[r]||!t(e[r],r,e));r-=1);}}function hasProp(e,t){return hasOwn.call(e,t)}function eachProp(e,t){var r;for(r in e)if(e.hasOwnProperty(r)&&t(e[r],r))break}function mixin(e,t,r,i){return t&&eachProp(t,function(t,n){(r||!hasProp(e,n))&&(i&&"string"!=typeof t?(e[n]||(e[n]={}),mixin(e[n],t,r,i)):e[n]=t)}),e}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function getGlobal(e){if(!e)return e;var t=global;return each(e.split("."),function(e){t=t[e]}),t}function makeContextModuleFunc(e,t,r){return function(){var i,n=aps.call(arguments,0);return r&&isFunction(i=n[n.length-1])&&(i.__requireJsBuild=!0),n.push(t),e.apply(null,n)}}function addRequireMethods(e,t,r){each([["toUrl"],["undef"],["defined","requireDefined"],["specified","requireSpecified"]],function(i){var n=i[1]||i[0];e[i[0]]=t?makeContextModuleFunc(t[n],r):function(){var e=contexts[defContextName];return e[n].apply(e,arguments)}})}function makeError(e,t,r,i){var n=new Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e);return n.requireType=e,n.requireModules=i,r&&(n.originalError=r),n}function newContext(e){function t(e){var t,r;for(t=0;e[t];t+=1)if(r=e[t],"."===r)e.splice(t,1),t-=1;else if(".."===r){if(1===t&&(".."===e[2]||".."===e[0]))break;t>0&&(e.splice(t-1,2),t-=2)}}function r(e,r,i){var n,a,o,s,u,l,c,d,h,p,f,g=r&&r.split("/"),m=g,v=E.map,y=v&&v["*"];if(e&&"."===e.charAt(0)&&(r?(m=E.pkgs[r]?g=[r]:g.slice(0,g.length-1),e=m.concat(e.split("/")),t(e),a=E.pkgs[n=e[0]],e=e.join("/"),a&&e===n+"/"+a.main&&(e=n)):0===e.indexOf("./")&&(e=e.substring(2))),i&&(g||y)&&v){for(s=e.split("/"),u=s.length;u>0;u-=1){if(c=s.slice(0,u).join("/"),g)for(l=g.length;l>0;l-=1)if(o=v[g.slice(0,l).join("/")],o&&(o=o[c])){d=o,h=u;break}if(d)break;!p&&y&&y[c]&&(p=y[c],f=u)}!d&&p&&(d=p,h=f),d&&(s.splice(0,h,d),e=s.join("/"))}return e}function i(e){isBrowser&&each(scripts(),function(t){return t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===x.contextName?(t.parentNode.removeChild(t),!0):void 0})}function n(e){var t=E.paths[e];return t&&isArray(t)&&t.length>1?(i(e),t.shift(),x.undef(e),x.require([e]),!0):void 0}function a(e,t,i,n){var a,o,s,u=e?e.indexOf("!"):-1,l=null,c=t?t.name:null,d=e,h=!0,p="";return e||(h=!1,e="_@r"+(B+=1)),-1!==u&&(l=e.substring(0,u),e=e.substring(u+1,e.length)),l&&(l=r(l,c,n),o=k[l]),e&&(l?p=o&&o.normalize?o.normalize(e,function(e){return r(e,c,n)}):r(e,c,n):(p=r(e,c,n),a=x.nameToUrl(p))),s=!l||o||i?"":"_unnormalized"+(C+=1),{prefix:l,name:p,parentMap:t,unnormalized:!!s,url:a,originalName:d,isDefine:h,id:(l?l+"!"+p:p)+s}}function o(e){var t=e.id,r=w[t];return r||(r=w[t]=new x.Module(e)),r}function s(e,t,r){var i=e.id,n=w[i];!hasProp(k,i)||n&&!n.defineEmitComplete?o(e).on(t,r):"defined"===t&&r(k[i])}function u(e,t){var r=e.requireModules,i=!1;t?t(e):(each(r,function(t){var r=w[t];r&&(r.error=e,r.events.error&&(i=!0,r.emit("error",e)))}),i||req.onError(e))}function l(){globalDefQueue.length&&(apsp.apply(M,[M.length-1,0].concat(globalDefQueue)),globalDefQueue=[])}function c(e,t,r){var i=e&&e.map,n=makeContextModuleFunc(r||x.require,i,t);return addRequireMethods(n,x,i),n.isBrowser=isBrowser,n}function d(e){delete w[e],each(R,function(t,r){return t.map.id===e?(R.splice(r,1),t.defined||(x.waitCount-=1),!0):void 0})}function h(e,t){var r,i=e.map.id,n=e.depMaps;if(e.inited)return t[i]?e:(t[i]=!0,each(n,function(e){var n=e.id,a=w[n];if(a)return a.inited&&a.enabled?r=h(a,mixin({},t)):(r=null,delete t[i],!0)}),r)}function p(e,t,r){var i=e.map.id,n=e.depMaps;if(e.inited&&e.map.isDefine)return t[i]?k[i]:(t[i]=e,each(n,function(n){var a,o=n.id,s=w[o];if(!j[o]&&s){if(!s.inited||!s.enabled)return r[i]=!0,void 0;a=p(s,t,r),r[o]||e.defineDepById(o,a)}}),e.check(!0),k[i])}function f(e){e.check()}function g(){var e,t,r,a,o=1e3*E.waitSeconds,s=o&&x.startTime+o<(new Date).getTime(),l=[],c=!1,d=!0;if(!b){if(b=!0,eachProp(w,function(r){if(e=r.map,t=e.id,r.enabled&&!r.error)if(!r.inited&&s)n(t)?(a=!0,c=!0):(l.push(t),i(t));else if(!r.inited&&r.fetched&&e.isDefine&&(c=!0,!e.prefix))return d=!1}),s&&l.length)return r=makeError("timeout","Load timeout for modules: "+l,null,l),r.contextName=x.contextName,u(r);d&&(each(R,function(e){if(!e.defined){var t=h(e,{}),r={};t&&(p(t,r,{}),eachProp(r,f))}}),eachProp(w,f)),s&&!a||!c||!isBrowser&&!isWebWorker||A||(A=setTimeout(function(){A=0,g()},50)),b=!1}}function m(e){o(a(e[0],null,!0)).init(e[1],e[2])}function v(e,t,r,i){e.detachEvent&&!isOpera?i&&e.detachEvent(i,t):e.removeEventListener(r,t,!1)}function y(e){var t=e.currentTarget||e.srcElement;return v(t,x.onScriptLoad,"load","onreadystatechange"),v(t,x.onScriptError,"error"),{node:t,id:t&&t.getAttribute("data-requiremodule")}}var b,q,x,j,A,E={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{}},w={},S={},M=[],k={},P={},B=1,C=1,R=[];return j={require:function(e){return c(e)},exports:function(e){return e.usingExports=!0,e.map.isDefine?e.exports=k[e.map.id]={}:void 0},module:function(e){return e.module={id:e.map.id,uri:e.map.url,config:function(){return E.config&&E.config[e.map.id]||{}},exports:k[e.map.id]}}},q=function(e){this.events=S[e.id]||{},this.map=e,this.shim=E.shim[e.id],this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},q.prototype={init:function(e,t,r,i){i=i||{},this.inited||(this.factory=t,r?this.on("error",r):this.events.error&&(r=bind(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.depMaps.rjsSkipMap=e.rjsSkipMap,this.errback=r,this.inited=!0,this.ignore=i.ignore,i.enabled||this.enabled?this.enable():this.check())},defineDepById:function(e,t){var r;return each(this.depMaps,function(t,i){return t.id===e?(r=i,!0):void 0}),this.defineDep(r,t)},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,x.startTime=(new Date).getTime();var e=this.map;return this.shim?(c(this,!0)(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()})),void 0):e.prefix?this.callPlugin():this.load()}},load:function(){var e=this.map.url;P[e]||(P[e]=!0,x.load(this.map.id,e))},check:function(e){if(this.enabled&&!this.enabling){var t,r,i=this.map.id,n=this.depExports,a=this.exports,o=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(o)){if(this.events.error)try{a=x.execCb(i,o,n,a)}catch(s){t=s}else a=x.execCb(i,o,n,a);if(this.map.isDefine&&(r=this.module,r&&void 0!==r.exports&&r.exports!==this.exports?a=r.exports:void 0===a&&this.usingExports&&(a=this.exports)),t)return t.requireMap=this.map,t.requireModules=[this.map.id],t.requireType="define",u(this.error=t)}else a=o;this.exports=a,this.map.isDefine&&!this.ignore&&(k[i]=a,req.onResourceLoad&&req.onResourceLoad(x,this.map,this.depMaps)),delete w[i],this.defined=!0,x.waitCount-=1,0===x.waitCount&&(R=[])}this.defining=!1,e||this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var e=this.map,t=e.id,i=a(e.prefix,null,!1,!0);s(i,"defined",bind(this,function(i){var n,l,h,p=this.map.name,f=this.map.parentMap?this.map.parentMap.name:null;return this.map.unnormalized?(i.normalize&&(p=i.normalize(p,function(e){return r(e,f,!0)})||""),l=a(e.prefix+"!"+p,this.map.parentMap,!1,!0),s(l,"defined",bind(this,function(e){this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),h=w[l.id],h&&(this.events.error&&h.on("error",bind(this,function(e){this.emit("error",e)})),h.enable()),void 0):(n=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})}),n.error=bind(this,function(e){this.inited=!0,this.error=e,e.requireModules=[t],eachProp(w,function(e){0===e.map.id.indexOf(t+"_unnormalized")&&d(e.map.id)}),u(e)}),n.fromText=function(e,t){var r=useInteractive;r&&(useInteractive=!1),o(a(e)),req.exec(t),r&&(useInteractive=!0),x.completeLoad(e)},i.load(e.name,c(e.parentMap,!0,function(e,t,r){return e.rjsSkipMap=!0,x.require(e,t,r)}),n,E),void 0)})),x.enable(i,this),this.pluginMaps[i.id]=i},enable:function(){this.enabled=!0,this.waitPushed||(R.push(this),x.waitCount+=1,this.waitPushed=!0),this.enabling=!0,each(this.depMaps,bind(this,function(e,t){var r,i,n;if("string"==typeof e){if(e=a(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.depMaps.rjsSkipMap),this.depMaps[t]=e,n=j[e.id])return this.depExports[t]=n(this),void 0;this.depCount+=1,s(e,"defined",bind(this,function(e){this.defineDep(t,e),this.check()})),this.errback&&s(e,"error",this.errback)}r=e.id,i=w[r],j[r]||!i||i.enabled||x.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var t=w[e.id];t&&!t.enabled&&x.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var r=this.events[e];r||(r=this.events[e]=[]),r.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)}),"error"===e&&delete this.events[e]}},x={config:E,contextName:e,registry:w,defined:k,urlFetched:P,waitCount:0,defQueue:M,Module:q,makeModuleMap:a,configure:function(e){e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/");var t=E.pkgs,r=E.shim,i=E.paths,n=E.map;mixin(E,e,!0),E.paths=mixin(i,e.paths,!0),e.map&&(E.map=mixin(n||{},e.map,!0,!0)),e.shim&&(eachProp(e.shim,function(e,t){isArray(e)&&(e={deps:e}),e.exports&&!e.exports.__buildReady&&(e.exports=x.makeShimExports(e.exports)),r[t]=e}),E.shim=r),e.packages&&(each(e.packages,function(e){var r;e="string"==typeof e?{name:e}:e,r=e.location,t[e.name]={name:e.name,location:r||e.name,main:(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}}),E.pkgs=t),eachProp(w,function(e,t){e.inited||e.map.unnormalized||(e.map=a(t))}),(e.deps||e.callback)&&x.require(e.deps||[],e.callback)},makeShimExports:function(e){var t;return"string"==typeof e?(t=function(){return getGlobal(e)},t.exports=e,t):function(){return e.apply(global,arguments)}},requireDefined:function(e,t){return hasProp(k,a(e,t,!1,!0).id)},requireSpecified:function(e,t){return e=a(e,t,!1,!0).id,hasProp(k,e)||hasProp(w,e)},require:function(t,r,i,n){var s,c,d,h,p;if("string"==typeof t)return isFunction(r)?u(makeError("requireargs","Invalid require call"),i):req.get?req.get(x,t,r):(s=t,n=r,d=a(s,n,!1,!0),c=d.id,hasProp(k,c)?k[c]:u(makeError("notloaded",'Module name "'+c+'" has not been loaded yet for context: '+e)));for(i&&!isFunction(i)&&(n=i,i=void 0),r&&!isFunction(r)&&(n=r,r=void 0),l();M.length;){if(p=M.shift(),null===p[0])return u(makeError("mismatch","Mismatched anonymous define() module: "+p[p.length-1]));m(p)}return h=o(a(null,n)),h.init(t,r,i,{enabled:!0}),g(),x.require},undef:function(e){l();var t=a(e,null,!0),r=w[e];delete k[e],delete P[t.url],delete S[e],r&&(r.events.defined&&(S[e]=r.events),d(e))},enable:function(e){var t=w[e.id];t&&o(e).enable()},completeLoad:function(e){var t,r,i,a=E.shim[e]||{},o=a.exports&&a.exports.exports;for(l();M.length;){if(r=M.shift(),null===r[0]){if(r[0]=e,t)break;t=!0}else r[0]===e&&(t=!0);m(r)}if(i=w[e],!t&&!k[e]&&i&&!i.inited){if(!(!E.enforceDefine||o&&getGlobal(o)))return n(e)?void 0:u(makeError("nodefine","No define call for "+e,null,[e]));m([e,a.deps||[],a.exports])}g()},toUrl:function(e,t){var i=e.lastIndexOf("."),n=null;return-1!==i&&(n=e.substring(i,e.length),e=e.substring(0,i)),x.nameToUrl(r(e,t&&t.id,!0),n)},nameToUrl:function(e,t){var r,i,n,a,o,s,u,l,c;if(req.jsExtRegExp.test(e))l=e+(t||"");else{for(r=E.paths,i=E.pkgs,o=e.split("/"),s=o.length;s>0;s-=1){if(u=o.slice(0,s).join("/"),n=i[u],c=r[u]){isArray(c)&&(c=c[0]),o.splice(0,s,c);break}if(n){a=e===n.name?n.location+"/"+n.main:n.location,o.splice(0,s,a);break}}l=o.join("/"),l+=t||(/\?/.test(l)?"":".js"),l=("/"===l.charAt(0)||l.match(/^[\w\+\.\-]+:/)?"":E.baseUrl)+l}return E.urlArgs?l+((-1===l.indexOf("?")?"?":"&")+E.urlArgs):l},load:function(e,t){req.load(x,e,t)},execCb:function(e,t,r,i){return t.apply(i,r)},onScriptLoad:function(e){if("load"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=y(e);x.completeLoad(t.id)}},onScriptError:function(e){var t=y(e);return n(t.id)?void 0:u(makeError("scripterror","Script error",e,[t.id]))}}}function getInteractiveScript(){return interactiveScript&&"interactive"===interactiveScript.readyState?interactiveScript:(eachReverse(scripts(),function(e){return"interactive"===e.readyState?interactiveScript=e:void 0}),interactiveScript)}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.0.5",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,ap=Array.prototype,aps=ap.slice,apsp=ap.splice,isBrowser=!("undefined"==typeof window||!navigator||!document),isWebWorker=!isBrowser&&"undefined"!=typeof importScripts,readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;if("undefined"==typeof define){if("undefined"!=typeof requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}"undefined"==typeof require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(e,t,r,i){var n,a,o=defContextName;return isArray(e)||"string"==typeof e||(a=e,isArray(t)?(e=t,t=r,r=i):e=[]),a&&a.context&&(o=a.context),n=contexts[o],n||(n=contexts[o]=req.s.newContext(o)),a&&n.configure(a),n.require(e,t,r)},req.config=function(e){return req(e)},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),addRequireMethods(req),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=function(e){throw e},req.load=function(e,t,r){var i,n=e&&e.config||{};return isBrowser?(i=n.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script"),i.type=n.scriptType||"text/javascript",i.charset="utf-8",i.async=!0,i.setAttribute("data-requirecontext",e.contextName),i.setAttribute("data-requiremodule",t),!i.attachEvent||i.attachEvent.toString&&i.attachEvent.toString().indexOf("[native code")<0||isOpera?(i.addEventListener("load",e.onScriptLoad,!1),i.addEventListener("error",e.onScriptError,!1)):(useInteractive=!0,i.attachEvent("onreadystatechange",e.onScriptLoad)),i.src=r,currentlyAddingScript=i,baseElement?head.insertBefore(i,baseElement):head.appendChild(i),currentlyAddingScript=null,i):(isWebWorker&&(importScripts(r),e.completeLoad(t)),void 0)},isBrowser&&eachReverse(scripts(),function(e){return head||(head=e.parentNode),dataMain=e.getAttribute("data-main"),dataMain?(cfg.baseUrl||(src=dataMain.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath,dataMain=mainScript),dataMain=dataMain.replace(jsSuffixRegExp,""),cfg.deps=cfg.deps?cfg.deps.concat(dataMain):[dataMain],!0):void 0}),define=function(e,t,r){var i,n;"string"!=typeof e&&(r=t,t=e,e=null),isArray(t)||(r=t,t=[]),!t.length&&isFunction(r)&&r.length&&(r.toString().replace(commentRegExp,"").replace(cjsRequireRegExp,function(e,r){t.push(r)}),t=(1===r.length?["require"]:["require","exports","module"]).concat(t)),useInteractive&&(i=currentlyAddingScript||getInteractiveScript(),i&&(e||(e=i.getAttribute("data-requiremodule")),n=contexts[i.getAttribute("data-requirecontext")])),(n?n.defQueue:globalDefQueue).push([e,t,r])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}}(this),/* aloha.js is part of Aloha Editor project http://aloha-editor.org
 *
 * Aloha Editor is a WYSIWYG HTML5 inline editing library and editor. 
 * Copyright (c) 2010-2012 Gentics Software GmbH, Vienna, Austria.
 * Contributors http://aloha-editor.org/contribution.php 
 * 
 * Aloha Editor is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or any later version.
 *
 * Aloha Editor is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
 * 
 * As an additional permission to the GNU GPL version 2, you may distribute
 * non-source (e.g., minimized or compacted) forms of the Aloha-Editor
 * source code without the copy of the GNU GPL normally required,
 * provided you include this license notice and a URL through which
 * recipients can access the Corresponding Source.
 */
function(e){"use strict";function t(){var e,t,r,i,n=Aloha.settings.plugins&&Aloha.settings.plugins.load,a=Aloha.settings.baseUrl,o=/\/aloha.js(\?\S*)?$/,s=/\/[^\/]*\.js$/;if(!n||!a)for(e=document.getElementsByTagName("script"),i=0;i<e.length;i++){if(t=e[i],r=t.getAttribute("data-aloha-plugins"),null!=r){n||(n=r),a||(a=t.src.replace(s,""));break}!a&&o.test(t.src)&&(a=t.src.replace(o,""))}return"string"==typeof n&&""!==n&&(n=n.replace(/\s+/g,"").split(",")),{baseUrl:a,plugins:n||[]}}function r(){for(var e=document.getElementsByTagName("script"),t=0;t<e.length;t++){var r=e[t].getAttribute("data-aloha-defer-init");if("true"===r)return!0}return!1}function i(e,t,r){var i,n,a=["nls","css","vendor","res"];for(e[r]=t+"/"+r+"/lib",n=0;n<a.length;n++){var i=a[n];e[r+"/"+i]=t+"/"+r+"/"+i}}function n(e){var t,r,n,a,o,s={},u=[],l=[],c={},d={},h=Aloha.settings.basePath||"",p=Aloha.settings.bundles||{};for(o=0;o<e.length;o++)t=e[o].split("/"),r=t[0],n=t[1],a=p[r]?h+p[r]:h+"../plugins/"+r,i(s,a,n),c[n]=a+"/"+n,u.push(n+"/"+n+"-plugin"),d[n]={jquery:"aloha/jquery"};return{paths:s,entryPoints:u,baseUrlByName:c,names:l,map:d}}function a(){var e,t,r,i={},n=Array.prototype.slice.call(arguments);for(t=0;t<n.length;t++){r=n[t];for(e in r)r.hasOwnProperty(e)&&(i[e]=n[t][e])}return i}function o(e,t){define(e,function(){return t})}function s(){Aloha.features={},Aloha.defaults={},Aloha.settings=Aloha.settings||{},Aloha.initialize=u.start;var r=t(),i=n(r.plugins);Aloha.settings.baseUrl=r.baseUrl,Aloha.settings.loadedPlugins=i.names,Aloha.settings._pluginBaseUrlByName=i.baseUrlByName;var s={aloha:{jquery:"aloha/jquery"},"aloha/jquery":{jquery:"jquery"},jqueryui:{jquery:"aloha/jquery"},vendor:{jquery:"aloha/jquery"},util:{jquery:"aloha/jquery"},RepositoryBrowser:{jquery:"aloha/jquery"},jstree:{jquery:"aloha/jquery"},jqgrid:{jquery:"aloha/jquery"},"jqgrid-locale-en":{jquery:"aloha/jquery"},"jqgrid-locale-de":{jquery:"aloha/jquery"},"jquery-layout":{jquery:"aloha/jquery"}},l=a(s,i.map),c={context:"aloha",config:{i18n:{locale:Aloha.settings.locale||"en"}},baseUrl:Aloha.settings.baseUrl,map:l},d=e.__DEPS__||(e.__DEPS__={});d.lang=c.locale;var h={jquery:"vendor/jquery-1.7.2",jqueryui:"vendor/jquery-ui-1.9.0.custom-aloha"},p={PubSub:"vendor/pubsub/js/pubsub-unminified",Class:"vendor/class",RepositoryBrowser:"vendor/repository-browser/js/repository-browser-unminified",jstree:"vendor/jquery.jstree",jqgrid:"vendor/jquery.jqgrid","jquery-layout":"vendor/jquery.layout-1.3.0-rc30.7","jqgrid-locale-en":"vendor/grid.locale.en","jqgrid-locale-de":"vendor/grid.locale.de","repository-browser-i18n-de":"vendor/repository-browser/js/repository-browser-unminified","repository-browser-i18n-en":"vendor/repository-browser/js/repository-browser-unminified"},f=a(c,Aloha.settings.requireConfig);f.paths=a(h,p,i.paths,f.paths);var g=Aloha.settings.predefinedModules||{};Aloha.settings.jQuery&&(g.jquery=Aloha.settings.jQuery);var m;for(m in g)g.hasOwnProperty(m)&&(o(m,g[m]),delete f.paths[m]);var v=require.config(f);Aloha.require=function(e){return 1===arguments.length&&"function"==typeof e?v(["aloha"],e):v.apply(this,arguments)},Aloha.bind=function(e,t){return Aloha.require(["aloha/jquery"],function(r){Aloha.bind=function(e,t){switch(u.getReadiness(e)){case"deferred":var i=u.getPhaseByEvent(e);i.deferred||(i.deferred=r.Deferred()),i.deferred.done(t);break;case"immediate":t();break;case"normal":r(Aloha,"body").bind(e,t);break;default:throw"Unknown readiness"}return this},Aloha.bind(e,t)}),this},Aloha.trigger=function(e,t){return Aloha.require(["aloha/jquery"],function(r){Aloha.trigger=function(e,t){var i=u.getPhaseByEvent(e);return i&&i.deferred&&(r(i.deferred.resolve),i.deferred=null),r(Aloha,"body").trigger(e,t),this},Aloha.trigger(e,t)}),this},Aloha.unbind=function(e){Aloha.require(["aloha/jquery"],function(t){Aloha.unbind=function(e){t(Aloha,"body").unbind(e)},Aloha.unbind(e)})},Aloha.ready=function(e){return this.bind("aloha-ready",e),this};var y=Aloha.settings.jQuery;define("aloha/jquery",["jquery"],function(e){return y||e}),Aloha.jQuery=y,define("aloha",["aloha/jquery","util/json2","aloha/rangy-core","util/class","util/lang","util/range","util/dom","aloha/core","aloha/editable","aloha/console","aloha/markup","aloha/plugin","aloha/selection","aloha/command","aloha/jquery.aloha","aloha/sidebar","util/position","aloha/repositorymanager","aloha/repository","aloha/repositoryobjects","aloha/contenthandlermanager"],function(e){return Aloha.features.jquery=!0,Aloha.jQuery=e,Aloha.settings=e.extendObjects(!0,{},Aloha.defaults,Aloha.settings),Aloha}),require(f,["aloha","aloha/jquery"],function(e,t){require(f,i.entryPoints,function(){t(function(){window.rangy.init(),e.init()})})})}var u={phases:[],completed:[],start:function(e,t){u.phases=u.phases.concat(e),u.proceed(0,e,t)},proceed:function(e,t,r){if(e<t.length){var i=t[e],n=function(){u.proceed(++e,t,r)},a=function(){u.completed.push(i),i.event&&Aloha.trigger(i.event)};i.fn?i.fn(a,n):(a(),n())}else r&&r()},getPhaseByEvent:function(e){var t;for(t=0;t<u.phases.length;t++)if(e===u.phases[t].event)return u.phases[t];return null},getReadiness:function(e){var t;for(t=0;t<u.completed.length;t++)if(e===u.completed[t].event)return"immediate";return u.getPhaseByEvent(e)?"deferred":"normal"}};e.Aloha=e.Aloha||{},e.Aloha.deferInit||r()?e.Aloha.deferInit=s:(Aloha._load=s,s())}(window);
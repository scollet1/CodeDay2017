
/*
*   Animation
*/

!function(t){function n(r){if(e[r])return e[r].exports;var i=e[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){function r(t,n,e){var r=n.from||s(t,n.property);return AFRAME.utils.extend({},e,{targets:{aframeProperty:r},aframeProperty:n.to,update:function(e){f(t,n.property,e.animatables[0].target.aframeProperty)}})}function i(t,n,e){var r=s(t,n.property);n.from&&(r=AFRAME.utils.coordinates.parse(n.from));var i=AFRAME.utils.coordinates.parse(n.to);return AFRAME.utils.extend({},e,{targets:[r],update:function(e){f(t,n.property,e.animatables[0].target)}},i)}function a(t,n){var e=n.split("."),r=e[0],i=e[1],a=t.components[r]||AFRAME.components[r];return a?i?a.schema[i].type:a.schema.type:null}var o=e(1);if("undefined"==typeof AFRAME)throw new Error("Component attempted to register before AFRAME was available.");var u=AFRAME.utils,s=u.entity.getComponentProperty,f=u.entity.setComponentProperty;u.styleParser.parse;AFRAME.registerComponent("animation",{schema:{delay:{default:0},dir:{default:""},dur:{default:1e3},easing:{default:"easeInQuad"},elasticity:{default:400},from:{default:""},loop:{default:0,parse:function(t){return"true"===t||"false"!==t&&parseInt(t,10)}},property:{default:""},startEvents:{type:"array"},pauseEvents:{type:"array"},resumeEvents:{type:"array"},restartEvents:{type:"array"},to:{default:""}},multiple:!0,init:function(){this.animation=null,this.animationIsPlaying=!1,this.config=null,this.pauseAnimationBound=this.pauseAnimation.bind(this),this.beginAnimationBound=this.beginAnimation.bind(this),this.restartAnimationBound=this.restartAnimation.bind(this),this.resumeAnimationBound=this.resumeAnimation.bind(this)},update:function(){var t,n,e=this.attrName,o=this.data,u=this.el,s=a(u,o.property);this.animationIsPlaying=!1,o.property&&(t={autoplay:!1,complete:function(){console.log("HO"),u.emit("animationcomplete",t),u.emit(e+"-complete",t)},direction:o.dir,duration:o.dur,easing:o.easing,elasticity:o.elasticity,loop:o.loop},n=r,"vec2"!==s&&"vec3"!==s&&"vec4"!==s||(n=i),this.config=n(u,o,t),this.pauseAnimation(),this.startAnimation())},tick:function(t){this.animationIsPlaying&&this.animation.tick(t)},remove:function(){this.pauseAnimation(),this.removeEventListeners()},pause:function(){this.paused=!0,this.pausedWasPlaying=!0,this.pauseAnimation(),this.removeEventListeners()},play:function(){this.paused&&(this.paused=!1,this.addEventListeners(),this.pausedWasPlaying&&(this.resumeAnimation(),this.pausedWasPlaying=!1))},startAnimation:function(){var t=this.data;this.el;return this.animationIsPlaying=!1,this.animation=o(this.config),this.removeEventListeners(),this.addEventListeners(),t.delay?void setTimeout(this.beginAnimationBound,t.delay):void(t.startEvents&&t.startEvents.length||this.beginAnimation())},pauseAnimation:function(){this.animationIsPlaying=!1},beginAnimation:function(){var t=this.el;this.animationIsPlaying=!0,t.emit("animationbegin"),t.emit(this.attrName+"-begin")},restartAnimation:function(){this.animation.restart()},resumeAnimation:function(){this.animationIsPlaying=!0},addEventListeners:function(){var t=this.data,n=this.el,e=this;t.startEvents.map(function(t){n.addEventListener(t,e.beginAnimationBound)}),t.pauseEvents.map(function(t){n.addEventListener(t,e.pauseAnimationBound)}),t.resumeEvents.map(function(t){n.addEventListener(t,e.resumeAnimationBound)}),t.restartEvents.map(function(t){n.addEventListener(t,e.restartAnimationBound)})},removeEventListeners:function(){var t=this.data,n=this.el,e=this;t.startEvents.map(function(t){n.removeEventListener(t,e.beginAnimationBound)}),t.pauseEvents.map(function(t){n.removeEventListener(t,e.pauseAnimationBound)}),t.resumeEvents.map(function(t){n.removeEventListener(t,e.resumeAnimationBound)}),t.restartEvents.map(function(t){n.removeEventListener(t,e.restartAnimationBound)})}})},function(t,n,e){var r,i,a,o=this;!function(e,o){i=[],r=o,a="function"==typeof r?r.apply(n,i):r,!(void 0!==a&&(t.exports=a))}(this,function(){function t(t){if(!R.col(t))try{return document.querySelectorAll(t)}catch(t){}}function n(t){return t.reduce(function(t,e){return t.concat(R.arr(e)?n(e):e)},[])}function e(n){return R.arr(n)?n:(R.str(n)&&(n=t(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function r(t,n){return t.some(function(t){return t===n})}function i(t){var n,e={};for(n in t)e[n]=t[n];return e}function a(t,n){var e,r=i(t);for(e in t)r[e]=n.hasOwnProperty(e)?n[e]:t[e];return r}function u(t,n){var e,r=i(t);for(e in n)r[e]=R.und(t[e])?n[e]:t[e];return r}function s(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,n,e,r){return n+n+e+e+r+r});var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);t=parseInt(n[1],16);var e=parseInt(n[2],16),n=parseInt(n[3],16);return"rgb("+t+","+e+","+n+")"}function f(t){function n(t,n,e){return 0>e&&(e+=1),1<e&&--e,e<1/6?t+6*(n-t)*e:.5>e?n:e<2/3?t+(n-t)*(2/3-e)*6:t}var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t);t=parseInt(e[1])/360;var r=parseInt(e[2])/100,e=parseInt(e[3])/100;if(0==r)r=e=t=e;else{var i=.5>e?e*(1+r):e+r-e*r,a=2*e-i,r=n(a,i,t+1/3),e=n(a,i,t);t=n(a,i,t-1/3)}return"rgb("+255*r+","+255*e+","+255*t+")"}function c(t){if(t=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg|rad|turn)?/.exec(t))return t[2]}function l(t){return-1<t.indexOf("translate")?"px":-1<t.indexOf("rotate")||-1<t.indexOf("skew")?"deg":void 0}function d(t,n){return R.fnc(t)?t(n.target,n.id,n.total):t}function p(t,n){if(n in t.style)return getComputedStyle(t).getPropertyValue(n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function m(t,n){return R.dom(t)&&r(C,n)?"transform":R.dom(t)&&(t.getAttribute(n)||R.svg(t)&&t[n])?"attribute":R.dom(t)&&"transform"!==n&&p(t,n)?"css":null!=t[n]?"object":void 0}function h(t,n){var e=l(n),e=-1<n.indexOf("scale")?1:0+e;if(t=t.style.transform,!t)return e;for(var r=[],i=[],a=[],o=/(\w+)\((.+?)\)/g;r=o.exec(t);)i.push(r[1]),a.push(r[2]);return t=a.filter(function(t,e){return i[e]===n}),t.length?t[0]:e}function v(t,n){switch(m(t,n)){case"transform":return h(t,n);case"css":return p(t,n);case"attribute":return t.getAttribute(n)}return t[n]||0}function g(t,n){var e=/^(\*=|\+=|-=)/.exec(t);if(!e)return t;switch(n=parseFloat(n),t=parseFloat(t.replace(e[0],"")),e[0][0]){case"+":return n+t;case"-":return n-t;case"*":return n*t}}function y(t){return R.obj(t)&&t.hasOwnProperty("totalLength")}function b(t,n){function e(e){return e=void 0===e?0:e,t.el.getPointAtLength(1<=n+e?n+e:0)}var r=e(),i=e(-1),a=e(1);switch(t.property){case"x":return r.x;case"y":return r.y;case"angle":return 180*Math.atan2(a.y-i.y,a.x-i.x)/Math.PI}}function A(t,n){var e=/-?\d*\.?\d+/g;if(t=y(t)?t.totalLength:t,R.col(t))n=R.rgb(t)?t:R.hex(t)?s(t):R.hsl(t)?f(t):void 0;else{var r=c(t);t=r?t.substr(0,t.length-r.length):t,n=n?t+n:t}return n+="",{original:n,numbers:n.match(e)?n.match(e).map(Number):[0],strings:n.split(e)}}function E(t,n){return n.reduce(function(n,e,r){return n+t[r-1]+e})}function w(t){return(t?n(R.arr(t)?t.map(e):e(t)):[]).filter(function(t,n,e){return e.indexOf(t)===n})}function x(t){var n=w(t);return n.map(function(t,e){return{target:t,id:e,total:n.length}})}function P(t,n){var r=i(n);if(R.arr(t)){var a=t.length;2!==a||R.obj(t[0])?R.fnc(n.duration)||(r.duration=n.duration/a):t={value:t}}return e(t).map(function(t,e){return e=e?0:n.delay,t=R.obj(t)&&!y(t)?t:{value:t},R.und(t.delay)&&(t.delay=e),t}).map(function(t){return u(t,r)})}function M(t,n){var e,r={};for(e in t){var i=d(t[e],n);R.arr(i)&&(i=i.map(function(t){return d(t,n)}),1===i.length&&(i=i[0])),r[e]=i}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}function L(t){return R.arr(t)?S.apply(this,t):N[t]}function I(t,n){var e;return t.tweens.map(function(r){r=M(r,n);var i=r.value,a=v(n.target,t.name),o=e?e.to.original:a,o=R.arr(i)?i[0]:o,u=g(R.arr(i)?i[1]:i,o),a=c(u)||c(o)||c(a);return r.isPath=y(i),r.from=A(o,a),r.to=A(u,a),r.start=e?e.end:t.offset,r.end=r.start+r.delay+r.duration,r.easing=L(r.easing),r.elasticity=(1e3-Math.min(Math.max(r.elasticity,1),999))/1e3,R.col(r.from.original)&&(r.round=1),e=r})}function F(t,e){return n(t.map(function(t){return e.map(function(n){var e=m(t.target,n.name);if(e){var r=I(n,t);n={type:e,property:n.name,animatable:t,tweens:r,duration:r[r.length-1].end,delay:r[0].delay}}else n=void 0;return n})})).filter(function(t){return!R.und(t)})}function k(t,n,e){var r="delay"===t?Math.min:Math.max;return n.length?r.apply(Math,n.map(function(n){return n[t]})):e[t]}function O(t){var n,e=a($,t),r=a(j,t),i=x(t.targets),o=[],s=u(e,r);for(n in t)s.hasOwnProperty(n)||"targets"===n||o.push({name:n,offset:s.offset,tweens:P(t[n],r)});return t=F(i,o),u(e,{children:[],animatables:i,animations:t,duration:k("duration",t,r),delay:k("delay",t,r)})}function B(t){function n(){return window.Promise&&new Promise(function(t){return c=t})}function e(t){return d.reversed?d.duration-t:t}function r(t){for(var n=0,e={},r=d.animations,i={};n<r.length;){var a=r[n],o=a.animatable,u=a.tweens;i.tween=u.filter(function(n){return t<n.end})[0]||u[u.length-1],i.isPath$1=i.tween.isPath,i.round=i.tween.round,i.eased=i.tween.easing(Math.min(Math.max(t-i.tween.start-i.tween.delay,0),i.tween.duration)/i.tween.duration,i.tween.elasticity),u=E(i.tween.to.numbers.map(function(t){return function(n,e){return e=t.isPath$1?0:t.tween.from.numbers[e],n=e+t.eased*(n-e),t.isPath$1&&(n=b(t.tween.value,n)),t.round&&(n=Math.round(n*t.round)/t.round),n}}(i)),i.tween.to.strings),Q[a.type](o.target,a.property,u,e,o.id),a.currentValue=u,n++,i={isPath$1:i.isPath$1,tween:i.tween,eased:i.eased,round:i.round}}if(e)for(var s in e)T||(T=p(document.body,"transform")?"transform":"-webkit-transform"),d.animatables[s].target.style[T]=e[s].join(" ");d.currentTime=t,d.progress=t/d.duration*100}function i(t){d[t]&&d[t](d)}function a(){d.remaining&&!0!==d.remaining&&d.remaining--}function o(t){var o=d.duration,p=d.offset,m=d.delay,h=d.currentTime,v=d.reversed,g=e(t),g=Math.min(Math.max(g,0),o);if(d.children){var y=d.children;if(g>=d.currentTime)for(var b=0;b<y.length;b++)y[b].seek(g);else for(b=y.length;b--;)y[b].seek(g)}g>p&&g<o?(r(g),!d.began&&g>=m&&(d.began=!0,i("begin")),i("run")):(g<=p&&0!==h&&(r(0),v&&a()),g>=o&&h!==o&&(r(o),v||a())),t>=o&&(d.remaining?(s=u,"alternate"===d.direction&&(d.reversed=!d.reversed)):(d.pause(),"Promise"in window&&(c(),l=n()),d.completed||(d.completed=!0,i("complete"))),f=0),i("update")}t=void 0===t?{}:t;var u,s,f=0,c=null,l=n(),d=O(t);return d.reset=function(){var t=d.direction,n=d.loop;for(d.currentTime=0,d.progress=0,d.paused=!0,d.began=!1,d.completed=!1,d.reversed="reverse"===t,d.remaining="alternate"===t&&1===n?2:n,t=d.children.length;t--;)n=d.children[t],n.seek(n.offset),n.reset()},d.tick=function(t){u=t,s||(s=u),o((f+u-s)*B.speed)},d.seek=function(t){o(e(t))},d.pause=function(){var t=V.indexOf(d);-1<t&&V.splice(t,1),d.paused=!0},d.play=function(){d.paused&&(d.paused=!1,s=0,f=e(d.currentTime),V.push(d),X||Y())},d.reverse=function(){d.reversed=!d.reversed,s=0,f=e(d.currentTime)},d.restart=function(){d.pause(),d.reset(),d.play()},d.finished=l,d.reset(),d.autoplay&&d.play(),d}var T,$={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},j={duration:1e3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},C="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),R={arr:function(t){return Array.isArray(t)},obj:function(t){return-1<Object.prototype.toString.call(t).indexOf("Object")},svg:function(t){return t instanceof SVGElement},dom:function(t){return t.nodeType||R.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return"undefined"==typeof t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return R.hex(t)||R.rgb(t)||R.hsl(t)}},S=function(){function t(t,n,e){return(((1-3*e+3*n)*t+(3*e-6*n))*t+3*n)*t}return function(n,e,r,i){if(0<=n&&1>=n&&0<=r&&1>=r){var a=new Float32Array(11);if(n!==e||r!==i)for(var o=0;11>o;++o)a[o]=t(.1*o,n,r);return function(o){if(n===e&&r===i)return o;if(0===o)return 0;if(1===o)return 1;for(var u=0,s=1;10!==s&&a[s]<=o;++s)u+=.1;--s;var s=u+(o-a[s])/(a[s+1]-a[s])*.1,f=3*(1-3*r+3*n)*s*s+2*(3*r-6*n)*s+3*n;if(.001<=f){for(u=0;4>u&&(f=3*(1-3*r+3*n)*s*s+2*(3*r-6*n)*s+3*n,0!==f);++u)var c=t(s,n,r)-o,s=s-c/f;o=s}else if(0===f)o=s;else{var s=u,u=u+.1,l=0;do c=s+(u-s)/2,f=t(c,n,r)-o,0<f?u=c:s=c;while(1e-7<Math.abs(f)&&10>++l);o=c}return t(o,e,i)}}}}(),N=function(){function t(t,n){return 0===t||1===t?t:-Math.pow(2,10*(t-1))*Math.sin(2*(t-1-n/(2*Math.PI)*Math.asin(1))*Math.PI/n)}var n,e="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),r={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],t],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(n,e){return 1-t(1-n,e)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(n,e){return.5>n?t(2*n,e)/2:1-t(-2*n+2,e)/2}]},i={linear:S(.25,.25,.75,.75)},a={};for(n in r)a.type=n,r[a.type].forEach(function(t){return function(n,r){i["ease"+t.type+e[r]]=R.fnc(n)?n:S.apply(o,n)}}(a)),a={type:a.type};return i}(),Q={css:function(t,n,e){return t.style[n]=e},attribute:function(t,n,e){return t.setAttribute(n,e)},object:function(t,n,e){return t[n]=e},transform:function(t,n,e,r,i){r[i]||(r[i]=[]),r[i].push(n+"("+e+")")}},V=[],X=0,Y=function(){function t(){X=requestAnimationFrame(n)}function n(n){var e=V.length;if(e){for(var r=0;r<e;)V[r]&&V[r].tick(n),r++;t()}else cancelAnimationFrame(X),X=0}return t}();return B.version="2.0.2",B.speed=1,B.running=V,B.remove=function(t){t=w(t);for(var n=V.length;n--;)for(var e=V[n],i=e.animations,a=i.length;a--;)r(t,i[a].animatable.target)&&(i.splice(a,1),i.length||e.pause())},B.getValue=v,B.path=function(n,e){var r=R.str(n)?t(n)[0]:n,i=e||100;return function(t){return{el:r,property:t,totalLength:r.getTotalLength()*(i/100)}}},B.setDashoffset=function(t){var n=t.getTotalLength();return t.setAttribute("stroke-dasharray",n),n},B.bezier=S,B.easings=N,B.timeline=function(t){var n=B(t);return n.pause(),n.duration=0,n.add=function(t){return n.children.forEach(function(t){t.began=!0,t.completed=!0}),e(t).forEach(function(t){var e=n.duration,r=t.offset;t.autoplay=!1,t.offset=R.und(r)?e:g(r,e),n.seek(t.offset),t=B(t),t.duration>e&&(n.duration=t.duration),t.began=!0,n.children.push(t)}),n.reset(),n.seek(0),n.autoplay&&n.restart(),n},n},B.random=function(t,n){return Math.floor(Math.random()*(n-t+1))+t},B})}]);

/*
*   Layout
*/

!function(e){function i(n){if(t[n])return t[n].exports;var r=t[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}var t={};return i.m=e,i.c=t,i.p="",i(0)}([function(e,i){function t(e,i,t){for(var n,r=[],a=Math.ceil(i/e.columns),o=0;o<a;o++)for(var s=0;s<e.columns;s++)n=[0,0,0],0===e.plane.indexOf("x")&&(n[0]=s*e.margin),0===e.plane.indexOf("y")&&(n[1]=s*e.margin),1===e.plane.indexOf("y")&&(n[1]=o*e.margin),1===e.plane.indexOf("z")&&(n[2]=o*e.margin),r.push(n);return r}function n(e,i,t){for(var n=[],r=0;r<i;r++){var a=r*(2*Math.PI)/i,o=[t.x,t.y,t.z];0===e.plane.indexOf("x")&&(o[0]+=e.radius*Math.cos(a)),0===e.plane.indexOf("y")&&(o[1]+=e.radius*Math.cos(a)),1===e.plane.indexOf("y")&&(o[1]+=e.radius*Math.sin(a)),1===e.plane.indexOf("z")&&(o[2]+=e.radius*Math.sin(a)),n.push(o)}return n}function r(e,i,n){return e.columns=i,t(e,i,n)}function a(e,i,t){return d([[1,0,0],[0,1,0],[0,0,1],[-1,0,0],[0,-1,0],[0,0,-1]],t,e.radius/2)}function o(e,i,t){var n=(1+Math.sqrt(5))/2,r=1/n,a=2-n,o=-1*r,s=-1*a;return d([[-1,a,0],[-1,s,0],[0,-1,a],[0,-1,s],[0,1,a],[0,1,s],[1,a,0],[1,s,0],[r,r,r],[r,r,o],[r,o,r],[r,o,o],[a,0,1],[a,0,-1],[o,r,r],[o,r,o],[o,o,r],[o,o,o],[s,0,1],[s,0,-1]],t,e.radius/2)}function s(e,i,t){var n=Math.sqrt(3),r=-1/Math.sqrt(3),a=2*Math.sqrt(2/3);return d([[0,0,n+r],[-1,0,r],[1,0,r],[0,a,0]],t,e.radius/2)}function d(e,i,t){return i=[i.x,i.y,i.z],e.map(function(e){return e.map(function(e,n){return e*t+i[n]})})}function c(e,i){e.forEach(function(e,t){var n=i[t];e.setAttribute("position",{x:n[0],y:n[1],z:n[2]})})}AFRAME.registerComponent("layout",{schema:{columns:{default:1,min:0,if:{type:["box"]}},margin:{default:1,min:0,if:{type:["box","line"]}},plane:{default:"xy"},radius:{default:1,min:0,if:{type:["circle","cube","dodecahedron","pyramid"]}},reverse:{default:!1},type:{default:"line",oneOf:["box","circle","cube","dodecahedron","line","pyramid"]}},init:function(){var e=this,i=this.el;this.children=i.getChildEntities(),this.initialPositions=[],this.children.forEach(function(i){function t(){var t=i.getAttribute("position");e.initialPositions.push([t.x,t.y,t.z])}return i.hasLoaded?t():void i.addEventListener("loaded",t)}),i.addEventListener("child-attached",function(t){t.detail.el.parentNode===i&&(e.children.push(t.detail.el),e.update())}),i.addEventListener("child-detached",function(i){e.children.indexOf(i.detail.el)!==-1&&(e.children.splice(e.children.indexOf(i.detail.el),1),e.initialPositions.splice(e.children.indexOf(i.detail.el),1),e.update())})},update:function(e){var i,d,l=this.children,u=this.data,h=this.el,f=l.length,p=h.getAttribute("position");switch(u.type){case"box":i=t;break;case"circle":i=n;break;case"cube":i=a;break;case"dodecahedron":i=o;break;case"pyramid":i=s;break;default:i=r}d=i(u,f,p),u.reverse&&d.reverse(),c(l,d)},remove:function(){this.el.removeEventListener("child-attached",this.childAttachedCallback),c(this.children,this.initialPositions)}}),e.exports.getBoxPositions=t,e.exports.getCirclePositions=n,e.exports.getLinePositions=r,e.exports.getCubePositions=a,e.exports.getDodecahedronPositions=o,e.exports.getPyramidPositions=s}]);

/*
*   Audio Analyser
*/

!function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t){if("undefined"==typeof AFRAME)throw new Error("Component attempted to register before AFRAME was available.");var a;AFRAME.registerSystem("audioanalyser",{init:function(){this.analysers={}},getOrCreateAnalyser:function(e){a||(a=new AudioContext);var t=this.analysers,n=a.createAnalyser(),i=e.src,s=i.getAttribute("src");if(t[s])return t[s];var l=a.createMediaElementSource(i);return l.connect(n),n.connect(a.destination),n.smoothingTimeConstant=e.smoothingTimeConstant,n.fftSize=e.fftSize,t[s]=n,t[s]}}),AFRAME.registerComponent("audioanalyser",{schema:{enableBeatDetection:{default:!0},enableLevels:{default:!0},enableWaveform:{default:!0},enableVolume:{default:!0},fftSize:{default:2048},smoothingTimeConstant:{default:.8},src:{type:"selector"},unique:{default:!1}},init:function(){this.analyser=null,this.levels=null,this.waveform=null,this.volume=0},update:function(){function e(e){a.analyser=e,a.levels=new Uint8Array(a.analyser.frequencyBinCount),a.waveform=new Uint8Array(a.analyser.fftSize),a.el.emit("audioanalyser-ready",{analyser:e})}var t=this.data,a=this,n=this.system;t.src&&e(t.unique?n.createAnalyser(t):n.getOrCreateAnalyser(t))},tick:function(){var e=this.data;if(this.analyser){if((e.enableLevels||e.enableVolume)&&this.analyser.getByteFrequencyData(this.levels),e.enableWaveform&&this.analyser.getByteTimeDomainData(this.waveform),e.enableVolume||e.enableBeatDetection){for(var t=0,a=0;a<this.levels.length;a++)t+=this.levels[a];this.volume=t/this.levels.length}if(e.enableBeatDetection){var n=.99,i=60,s=.15;volume=this.volume,this.beatCutOff||(this.beatCutOff=volume),volume>this.beatCutOff&&volume>s?(console.log("[audioanalyser] Beat detected."),this.el.emit("audioanalyser-beat"),this.beatCutOff=1.5*volume,this.beatTime=0):this.beatTime<=i?this.beatTime++:(this.beatCutOff*=n,this.beatCutOff=Math.max(this.beatCutOff,s))}}}})}]);

/*
*   Randomizer
*/

!function(t){function a(n){if(e[n])return e[n].exports;var r=e[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}var e={};return a.m=t,a.c=e,a.p="",a(0)}([function(t,a){if("undefined"==typeof AFRAME)throw new Error("Component attempted to register before AFRAME was available.");AFRAME.registerComponent("random-color",{schema:{min:{"default":{x:0,y:0,z:0},type:"vec3"},max:{"default":{x:1,y:1,z:1},type:"vec3"}},update:function(){var t=this.data,a=t.max,e=t.min;this.el.setAttribute("material","color","#"+new THREE.Color(Math.random()*a.x+e.x,Math.random()*a.y+e.y,Math.random()*a.z+e.z).getHexString())}}),AFRAME.registerComponent("random-position",{schema:{min:{"default":{x:-10,y:-10,z:-10},type:"vec3"},max:{"default":{x:10,y:10,z:10},type:"vec3"}},update:function(){var t=this.data,a=t.max,e=t.min;this.el.setAttribute("position",{x:Math.random()*(a.x-e.x)+e.x,y:Math.random()*(a.y-e.y)+e.y,z:Math.random()*(a.z-e.z)+e.z})}}),AFRAME.registerComponent("random-spherical-position",{schema:{radius:{"default":10},startX:{"default":0},lengthX:{"default":360},startY:{"default":0},lengthY:{"default":360}},update:function(){var t=this.data,a=THREE.Math.degToRad(Math.random()*t.lengthX+t.startX),e=THREE.Math.degToRad(Math.random()*t.lengthY+t.startY);this.el.setAttribute("position",{x:t.radius*Math.cos(a)*Math.sin(e),y:t.radius*Math.sin(a)*Math.sin(e),z:t.radius*Math.cos(e)})}}),AFRAME.registerComponent("random-rotation",{schema:{min:{"default":{x:0,y:0,z:0},type:"vec3"},max:{"default":{x:360,y:360,z:360},type:"vec3"}},update:function(){var t=this.data,a=t.max,e=t.min;this.el.setAttribute("rotation",{x:Math.random()*a.x+e.x,y:Math.random()*a.y+e.y,z:Math.random()*a.z+e.z})}}),AFRAME.registerComponent("random-scale",{schema:{min:{"default":{x:0,y:0,z:0},type:"vec3"},max:{"default":{x:2,y:2,z:2},type:"vec3"}},update:function(){var t=this.data,a=t.max,e=t.min;this.el.setAttribute("scale",{x:Math.random()*a.x+e.x,y:Math.random()*a.y+e.y,z:Math.random()*a.z+e.z})}})}]);

/*
*   Entity Spawner
*/

!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){if("undefined"==typeof AFRAME)throw new Error("Component attempted to register before AFRAME was available.");AFRAME.registerComponent("entity-generator",{schema:{mixin:{"default":""},num:{"default":10}},init:function(){for(var e=this.data,t=0;t<e.num;t++){var n=document.createElement("a-entity");n.setAttribute("mixin",e.mixin),this.el.appendChild(n)}}})}]);

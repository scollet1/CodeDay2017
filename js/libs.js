
/* Randomizer Components */

!function(t){function a(n){if(e[n])return e[n].exports;var r=e[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}var e={};return a.m=t,a.c=e,a.p="",a(0)}([function(t,a){if("undefined"==typeof AFRAME)throw new Error("Component attempted to register before AFRAME was available.");AFRAME.registerComponent("random-color",{schema:{min:{"default":{x:0,y:0,z:0},type:"vec3"},max:{"default":{x:1,y:1,z:1},type:"vec3"}},update:function(){var t=this.data,a=t.max,e=t.min;this.el.setAttribute("material","color","#"+new THREE.Color(Math.random()*a.x+e.x,Math.random()*a.y+e.y,Math.random()*a.z+e.z).getHexString())}}),AFRAME.registerComponent("random-position",{schema:{min:{"default":{x:-10,y:-10,z:-10},type:"vec3"},max:{"default":{x:10,y:10,z:10},type:"vec3"}},update:function(){var t=this.data,a=t.max,e=t.min;this.el.setAttribute("position",{x:Math.random()*(a.x-e.x)+e.x,y:Math.random()*(a.y-e.y)+e.y,z:Math.random()*(a.z-e.z)+e.z})}}),AFRAME.registerComponent("random-spherical-position",{schema:{radius:{"default":10},startX:{"default":0},lengthX:{"default":360},startY:{"default":0},lengthY:{"default":360}},update:function(){var t=this.data,a=THREE.Math.degToRad(Math.random()*t.lengthX+t.startX),e=THREE.Math.degToRad(Math.random()*t.lengthY+t.startY);this.el.setAttribute("position",{x:t.radius*Math.cos(a)*Math.sin(e),y:t.radius*Math.sin(a)*Math.sin(e),z:t.radius*Math.cos(e)})}}),AFRAME.registerComponent("random-rotation",{schema:{min:{"default":{x:0,y:0,z:0},type:"vec3"},max:{"default":{x:360,y:360,z:360},type:"vec3"}},update:function(){var t=this.data,a=t.max,e=t.min;this.el.setAttribute("rotation",{x:Math.random()*a.x+e.x,y:Math.random()*a.y+e.y,z:Math.random()*a.z+e.z})}}),AFRAME.registerComponent("random-scale",{schema:{min:{"default":{x:0,y:0,z:0},type:"vec3"},max:{"default":{x:2,y:2,z:2},type:"vec3"}},update:function(){var t=this.data,a=t.max,e=t.min;this.el.setAttribute("scale",{x:Math.random()*a.x+e.x,y:Math.random()*a.y+e.y,z:Math.random()*a.z+e.z})}})}]);

/* Entity Generator */

!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){if("undefined"==typeof AFRAME)throw new Error("Component attempted to register before AFRAME was available.");AFRAME.registerComponent("entity-generator",{schema:{mixin:{"default":""},num:{"default":10}},init:function(){for(var e=this.data,t=0;t<e.num;t++){var n=document.createElement("a-entity");n.setAttribute("mixin",e.mixin),this.el.appendChild(n)}}})}]);

/* Look-at Component */

!function(t){function e(o){if(r[o])return r[o].exports;var a=r[o]={exports:{},id:o,loaded:!1};return t[o].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e){var r=AFRAME.utils.debug,o=AFRAME.utils.coordinates,a=r("components:look-at:warn"),n=o.isCoordinate;delete AFRAME.components["look-at"],AFRAME.registerComponent("look-at",{schema:{src:{"default":"",parse:function(t){return n(t)||"object"==typeof t?o.parse(t):t},stringify:function(t){return"object"==typeof t?o.stringify(t):t}},checkSrcEveryFrame:{"default":!1},updateWorldTransform:{"default":!1}},init:function(){this.target3D=null,this.vector=new THREE.Vector3},update:function(){var t=this,e=t.data.src,r=t.el.object3D;return!e||"object"==typeof e&&!Object.keys(e).length?t.remove():"object"==typeof e?r.lookAt(new THREE.Vector3(e.x,e.y,e.z)):this.updateTarget(e)},updateTarget:function(t){var e=this;return targetEl=this.el.sceneEl.querySelector(t),targetEl?targetEl.hasLoaded?e.beginTracking(targetEl):targetEl.addEventListener("loaded",function(){e.beginTracking(targetEl)}):void a('"'+t+'" does not point to a valid entity to look-at')},tick:function(t){var e,r=this,o=r.data.target,n=r.el.object3D;if("string"==typeof r.data.target&&r.data.checkSrcEveryFrame){if(e=r.el.sceneEl.querySelector(o),!e)return a('"'+o+'" does not point to a valid entity to look-at'),void(this.target3D=null);if(!e.hasLoaded)return e.addEventListener("loaded",function(){r.beginTracking(e)});r.beginTracking(e)}if(this.target3D)return this.vector.setFromMatrixPosition(this.target3D.matrixWorld),n.parent&&(this.data.updateWorldTransform&&n.parent.updateMatrixWorld(),n.parent.worldToLocal(this.vector)),n.lookAt(this.vector)},beginTracking:function(t){this.target3D=t.object3D}}),AFRAME.registerComponent("billboard",{init:function(){this.vector=new THREE.Vector3},tick:function(t){var e=this,r=e.el.sceneEl.camera,o=e.el.object3D;if(r)return r.updateMatrixWorld(),this.vector.setFromMatrixPosition(r.matrixWorld),o.parent&&(o.parent.updateMatrixWorld(),o.parent.worldToLocal(this.vector)),o.lookAt(this.vector)}})}]);

/* Animation Component */

!function(t){function n(r){if(e[r])return e[r].exports;var a=e[r]={exports:{},id:r,loaded:!1};return t[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){function r(t,n,e){var r=n.from||s(t,n.property);return AFRAME.utils.extend({},e,{targets:[{aframeProperty:r}],aframeProperty:n.to,update:function(){c(t,n.property,this.targets[0].aframeProperty)}})}function a(t,n,e){var r=s(t,n.property);n.from&&(r=AFRAME.utils.coordinates.parse(n.from));var a=AFRAME.utils.coordinates.parse(n.to);return AFRAME.utils.extend({},e,{targets:[r],update:function(){c(t,n.property,this.targets[0])}},a)}function i(t,n){var e=n.split("."),r=e[0],a=e[1],i=t.components[r]||AFRAME.components[r];return i?a?i.schema[a].type:i.schema.type:null}var o=e(1);if("undefined"==typeof AFRAME)throw new Error("Component attempted to register before AFRAME was available.");var u=AFRAME.utils,s=u.entity.getComponentProperty,c=u.entity.setComponentProperty;u.styleParser.parse;AFRAME.registerComponent("animation",{schema:{delay:{"default":0},dir:{"default":""},dur:{"default":1e3},easing:{"default":"easeInQuad"},elasticity:{"default":400},from:{"default":""},loop:{"default":!1},property:{"default":""},repeat:{"default":0},startEvents:{type:"array"},pauseEvents:{type:"array"},to:{"default":""}},multiple:!0,init:function(){this.animation=null,this.animationIsPlaying=!1,this.config=null,this.playAnimationBound=this.playAnimation.bind(this),this.pauseAnimationBound=this.pauseAnimation.bind(this),this.repeat=0},update:function(){var t=this.attrName,n=this.data,e=this.el,u=i(e,n.property),s=this;this.repeat=n.repeat;var c={autoplay:!1,begin:function(){e.emit("animation-begin"),e.emit(t+"-begin")},complete:function(){e.emit("animation-complete"),e.emit(t+"-complete"),--s.repeat>0&&s.animation.play()},direction:n.dir,duration:n.dur,easing:n.easing,elasticity:n.elasticity,loop:n.loop},f=r;"vec2"!==u&&"vec3"!==u&&"vec4"!==u||(f=a),this.pauseAnimation(),this.config=f(e,n,c),this.animation=o(this.config),this.data.startEvents.length||(this.animationIsPlaying=!0),this.removeEventListeners(),this.addEventListeners()},remove:function(){this.pauseAnimation(),this.removeEventListeners()},pause:function(){this.pauseAnimation(),this.removeEventListeners()},play:function(){this.animation&&this.animationIsPlaying&&(this.playAnimation(),this.addEventListeners())},addEventListeners:function(){var t=this,n=this.data,e=this.el;n.startEvents.map(function(n){e.addEventListener(n,t.playAnimationBound)}),n.pauseEvents.map(function(n){e.addEventListener(n,t.pauseAnimationBound)})},removeEventListeners:function(){var t=this,n=this.data,e=this.el;n.startEvents.map(function(n){e.removeEventListener(n,t.playAnimationBound)}),n.pauseEvents.map(function(n){e.removeEventListener(n,t.pauseAnimationBound)})},playAnimation:function(){this.animation&&(this.animation.restart(),this.animationIsPlaying=!0)},pauseAnimation:function(){this.animation&&(this.animation.pause(),this.animationIsPlaying=!1)}})},function(t,n,e){var r,a,i;!function(e,o){a=[],r=o,i="function"==typeof r?r.apply(n,a):r,!(void 0!==i&&(t.exports=i))}(this,function(){var t,n="1.1.0",e={duration:1e3,delay:0,loop:!1,autoplay:!0,direction:"normal",easing:"easeOutElastic",elasticity:400,round:!1,begin:void 0,update:void 0,complete:void 0},r=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skewX","skewY"],a="transform",i=function(){return{array:function(t){return Array.isArray(t)},object:function(t){return Object.prototype.toString.call(t).indexOf("Object")>-1},svg:function(t){return t instanceof SVGElement},dom:function(t){return t.nodeType||i.svg(t)},number:function(t){return!isNaN(parseInt(t))},string:function(t){return"string"==typeof t},func:function(t){return"function"==typeof t},undef:function(t){return"undefined"==typeof t},"null":function(t){return"null"==typeof t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},rgba:function(t){return/^rgba/.test(t)},hsl:function(t){return/^hsl/.test(t)},color:function(t){return i.hex(t)||i.rgb(t)||i.rgba(t)||i.hsl(t)}}}(),o=function(){var t={},n=["Quad","Cubic","Quart","Quint","Expo"],e={Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t,n){if(0===t||1===t)return t;var e=1-Math.min(n,998)/1e3,r=t/1,a=r-1,i=e/(2*Math.PI)*Math.asin(1);return-(Math.pow(2,10*a)*Math.sin((a-i)*(2*Math.PI)/e))},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var n,e=4;t<((n=Math.pow(2,--e))-1)/11;);return 1/Math.pow(4,3-e)-7.5625*Math.pow((3*n-2)/22-t,2)}};return n.forEach(function(t,n){e[t]=function(t){return Math.pow(t,n+2)}}),Object.keys(e).forEach(function(n){var r=e[n];t["easeIn"+n]=r,t["easeOut"+n]=function(t,n){return 1-r(1-t,n)},t["easeInOut"+n]=function(t,n){return t<.5?r(2*t,n)/2:1-r(t*-2+2,n)/2}}),t.linear=function(t){return t},t}(),u=function(t){return i.string(t)?t:t+""},s=function(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},c=function(t){if(i.color(t))return!1;try{var n=document.querySelectorAll(t);return n}catch(e){return!1}},f=function(t,n){return Math.floor(Math.random()*(n-t+1))+t},l=function(t){return t.reduce(function(t,n){return t.concat(i.array(n)?l(n):n)},[])},p=function(t){return i.array(t)?t:(i.string(t)&&(t=c(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])},m=function(t,n){return t.some(function(t){return t===n})},d=function(t,n){var e={};return t.forEach(function(t){var r=JSON.stringify(n.map(function(n){return t[n]}));e[r]=e[r]||[],e[r].push(t)}),Object.keys(e).map(function(t){return e[t]})},h=function(t){return t.filter(function(t,n,e){return e.indexOf(t)===n})},v=function(t){var n={};for(var e in t)n[e]=t[e];return n},g=function(t,n){for(var e in n)t[e]=i.undef(t[e])?n[e]:t[e];return t},y=function(t){var n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=t.replace(n,function(t,n,e,r){return n+n+e+e+r+r}),e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),r=parseInt(e[1],16),a=parseInt(e[2],16),i=parseInt(e[3],16);return"rgb("+r+","+a+","+i+")"},b=function(t){var n,e,r,t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t),a=parseInt(t[1])/360,i=parseInt(t[2])/100,o=parseInt(t[3])/100,u=function(t,n,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?t+6*(n-t)*e:e<.5?n:e<2/3?t+(n-t)*(2/3-e)*6:t};if(0==i)n=e=r=o;else{var s=o<.5?o*(1+i):o+i-o*i,c=2*o-s;n=u(c,s,a+1/3),e=u(c,s,a),r=u(c,s,a-1/3)}return"rgb("+255*n+","+255*e+","+255*r+")"},A=function(t){return i.rgb(t)||i.rgba(t)?t:i.hex(t)?y(t):i.hsl(t)?b(t):void 0},E=function(t){return/([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(t)[2]},M=function(t,n,e){return E(n)?n:t.indexOf("translate")>-1?E(e)?n+E(e):n+"px":t.indexOf("rotate")>-1||t.indexOf("skew")>-1?n+"deg":n},x=function(t,n){if(n in t.style)return getComputedStyle(t).getPropertyValue(s(n))||"0"},w=function(t,n){var e=n.indexOf("scale")>-1?1:0,r=t.style.transform;if(!r)return e;for(var a=/(\w+)\((.+?)\)/g,i=[],o=[],u=[];i=a.exec(r);)o.push(i[1]),u.push(i[2]);var s=u.filter(function(t,e){return o[e]===n});return s.length?s[0]:e},I=function(t,n){return i.dom(t)&&m(r,n)?"transform":i.dom(t)&&"transform"!==n&&x(t,n)?"css":i.dom(t)&&(t.getAttribute(n)||i.svg(t)&&t[n])?"attribute":i["null"](t[n])||i.undef(t[n])?void 0:"object"},P=function(t,n){switch(I(t,n)){case"transform":return w(t,n);case"css":return x(t,n);case"attribute":return t.getAttribute(n)}return t[n]||0},L=function(t,n,e){if(i.color(n))return A(n);if(E(n))return n;var r=E(E(t.to)?t.to:t.from);return!r&&e&&(r=E(e)),r?n+r:n},O=function(t){var n=/-?\d*\.?\d+/g;return{original:t,numbers:u(t).match(n)?u(t).match(n).map(Number):[0],strings:u(t).split(n)}},k=function(t,n,e){return n.reduce(function(n,r,a){var r=r?r:e[a-1];return n+t[a-1]+r})},F=function(t){var t=t?l(i.array(t)?t.map(p):p(t)):[];return t.map(function(t,n){return{target:t,id:n}})},j=function(t,n){var r=[];for(var a in t)if(!e.hasOwnProperty(a)&&"targets"!==a){var o=i.object(t[a])?v(t[a]):{value:t[a]};o.name=a,r.push(g(o,n))}return r},C=function(t,n,e,r){var a=p(i.func(e)?e(t,r):e);return{from:a.length>1?a[0]:P(t,n),to:a.length>1?a[1]:a[0]}},R=function(t,n,e,r){var a={};if("transform"===e)a.from=t+"("+M(t,n.from,n.to)+")",a.to=t+"("+M(t,n.to)+")";else{var i="css"===e?x(r,t):void 0;a.from=L(n,n.from,i),a.to=L(n,n.to,i)}return{from:O(a.from),to:O(a.to)}},B=function(t,n){var e=[];return t.forEach(function(r,a){var o=r.target;return n.forEach(function(n){var u=I(o,n.name);if(u){var s=C(o,n.name,n.value,a),c=v(n);c.animatables=r,c.type=u,c.from=R(n.name,s,c.type,o).from,c.to=R(n.name,s,c.type,o).to,c.round=i.color(s.from)||c.round?1:0,c.delay=(i.func(c.delay)?c.delay(o,a,t.length):c.delay)/J.speed,c.duration=(i.func(c.duration)?c.duration(o,a,t.length):c.duration)/J.speed,e.push(c)}})}),e},N=function(t,n){var e=B(t,n),r=d(e,["name","from","to","delay","duration"]);return r.map(function(t){var n=v(t[0]);return n.animatables=t.map(function(t){return t.animatables}),n.totalDuration=n.delay+n.duration,n})},S=function(t,n){t.tweens.forEach(function(e){var r=e.to,a=e.from,i=t.duration-(e.delay+e.duration);e.from=r,e.to=a,n&&(e.delay=i)}),t.reversed=!t.reversed},T=function(t){if(t.length)return Math.max.apply(Math,t.map(function(t){return t.totalDuration}))},$=function(t){var n=[],e=[];return t.tweens.forEach(function(t){"css"!==t.type&&"transform"!==t.type||(n.push("css"===t.type?s(t.name):"transform"),t.animatables.forEach(function(t){e.push(t.target)}))}),{properties:h(n).join(", "),elements:h(e)}},V=function(t){var n=$(t);n.elements.forEach(function(t){t.style.willChange=n.properties})},X=function(t){var n=$(t);n.elements.forEach(function(t){t.style.removeProperty("will-change")})},Y=function(t){var n=i.string(t)?c(t)[0]:t;return{path:n,value:n.getTotalLength()}},Q=function(t,n){var e=t.path,r=t.value*n,a=function(a){var i=a||0,o=n>1?t.value+i:r+i;return e.getPointAtLength(o)},
i=a(),o=a(-1),u=a(1);switch(t.name){case"translateX":return i.x;case"translateY":return i.y;case"rotate":return 180*Math.atan2(u.y-o.y,u.x-o.x)/Math.PI}},Z=function(t,n){var e=Math.min(Math.max(n-t.delay,0),t.duration),r=e/t.duration,a=t.to.numbers.map(function(n,e){var a=t.from.numbers[e],i=o[t.easing](r,t.elasticity),u=t.path?Q(t,i):a+i*(n-a);return u=t.round?Math.round(u*t.round)/t.round:u});return k(a,t.to.strings,t.from.strings)},q=function(n,e){var r;n.currentTime=e,n.progress=e/n.duration*100;for(var i=0;i<n.tweens.length;i++){var o=n.tweens[i];o.currentValue=Z(o,e);for(var u=o.currentValue,s=0;s<o.animatables.length;s++){var c=o.animatables[s],f=c.id,l=c.target,p=o.name;switch(o.type){case"css":l.style[p]=u;break;case"attribute":l.setAttribute(p,u);break;case"object":l[p]=u;break;case"transform":r||(r={}),r[f]||(r[f]=[]),r[f].push(u)}}}if(r){t||(t=(x(document.body,a)?"":"-webkit-")+a);for(var i in r)n.animatables[i].target.style[t]=r[i].join(" ")}n.settings.update&&n.settings.update(n)},D=function(t){var n={};return n.animatables=F(t.targets),n.settings=g(t,e),n.properties=j(t,n.settings),n.tweens=N(n.animatables,n.properties),n.duration=T(n.tweens)||t.duration,n.currentTime=0,n.progress=0,n.ended=!1,n},z=[],G=0,H=function(){var t=function(){G=requestAnimationFrame(n)},n=function(n){if(z.length){for(var e=0;e<z.length;e++)z[e].tick(n);t()}else cancelAnimationFrame(G),G=0};return t}(),J=function(t){var n=D(t),e={};return n.tick=function(t){n.ended=!1,e.start||(e.start=t),e.current=Math.min(Math.max(e.last+t-e.start,0),n.duration),q(n,e.current);var r=n.settings;r.begin&&e.current>=r.delay&&(r.begin(n),r.begin=void 0),e.current>=n.duration&&(r.loop?(e.start=t,"alternate"===r.direction&&S(n,!0),i.number(r.loop)&&r.loop--):(n.ended=!0,n.pause(),r.complete&&r.complete(n)),e.last=0)},n.seek=function(t){q(n,t/100*n.duration)},n.pause=function(){X(n);var t=z.indexOf(n);t>-1&&z.splice(t,1)},n.play=function(t){n.pause(),t&&(n=g(D(g(t,n.settings)),n)),e.start=0,e.last=n.ended?0:n.currentTime;var r=n.settings;"reverse"===r.direction&&S(n),"alternate"!==r.direction||r.loop||(r.loop=1),V(n),z.push(n),G||H()},n.restart=function(){n.reversed&&S(n),n.pause(),n.seek(0),n.play()},n.settings.autoplay&&n.play(),n},K=function(t){for(var n=l(i.array(t)?t.map(p):p(t)),e=z.length-1;e>=0;e--)for(var r=z[e],a=r.tweens,o=a.length-1;o>=0;o--)for(var u=a[o].animatables,s=u.length-1;s>=0;s--)m(n,u[s].target)&&(u.splice(s,1),u.length||a.splice(o,1),a.length||r.pause())};return J.version=n,J.speed=1,J.list=z,J.remove=K,J.easings=o,J.getValue=P,J.path=Y,J.random=f,J})}]);

/* Audio Analyser */

!function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t){if("undefined"==typeof AFRAME)throw new Error("Component attempted to register before AFRAME was available.");var a;AFRAME.registerSystem("audioanalyser",{init:function(){this.analysers={}},getOrCreateAnalyser:function(e){a||(a=new AudioContext);var t=this.analysers,n=a.createAnalyser(),i=e.src,s=i.getAttribute("src");if(t[s])return t[s];var l=a.createMediaElementSource(i);return l.connect(n),n.connect(a.destination),n.smoothingTimeConstant=e.smoothingTimeConstant,n.fftSize=e.fftSize,t[s]=n,t[s]}}),AFRAME.registerComponent("audioanalyser",{schema:{enableBeatDetection:{default:!0},enableLevels:{default:!0},enableWaveform:{default:!0},enableVolume:{default:!0},fftSize:{default:2048},smoothingTimeConstant:{default:.8},src:{type:"selector"},unique:{default:!1}},init:function(){this.analyser=null,this.levels=null,this.waveform=null,this.volume=0},update:function(){function e(e){a.analyser=e,a.levels=new Uint8Array(a.analyser.frequencyBinCount),a.waveform=new Uint8Array(a.analyser.fftSize),a.el.emit("audioanalyser-ready",{analyser:e})}var t=this.data,a=this,n=this.system;t.src&&e(t.unique?n.createAnalyser(t):n.getOrCreateAnalyser(t))},tick:function(){var e=this.data;if(this.analyser){if((e.enableLevels||e.enableVolume)&&this.analyser.getByteFrequencyData(this.levels),e.enableWaveform&&this.analyser.getByteTimeDomainData(this.waveform),e.enableVolume||e.enableBeatDetection){for(var t=0,a=0;a<this.levels.length;a++)t+=this.levels[a];this.volume=t/this.levels.length}if(e.enableBeatDetection){var n=.99,i=60,s=.15;volume=this.volume,this.beatCutOff||(this.beatCutOff=volume),volume>this.beatCutOff&&volume>s?(console.log("[audioanalyser] Beat detected."),this.el.emit("audioanalyser-beat"),this.beatCutOff=1.5*volume,this.beatTime=0):this.beatTime<=i?this.beatTime++:(this.beatCutOff*=n,this.beatCutOff=Math.max(this.beatCutOff,s))}}}})}]);

/* Continued */

/**
 * Scale children based on audio frequency levels.
 */
AFRAME.registerComponent('audioanalyser-levels-scale', {
  schema: {
    analyserEl: {type: 'selector'},
    max: {default: 20},
    multiplier: {default: 100}
  },

  tick: function (time) {
    var analyserEl;
    var children;
    var data = this.data;
    var levels;

    analyserEl = data.analyserEl || this.el;
    levels = analyserEl.components.audioanalyser.levels;
    if (!levels) { return; }

    children = this.el.children;
    for (var i = 0; i < children.length; i++) {
      children[i].setAttribute('scale', {
        x: 1,
        y: Math.min(data.max, Math.max(levels[i] * data.multiplier, 0.05)),
        z: 1
      });
    }
  }
});

/**
 *
 */
AFRAME.registerComponent('audioanalyser-volume-bind', {
  schema: {
    analyserEl: {type: 'selector'},
    component: {type: 'string'},
    property: {type: 'string'},
    max: {type: 'number'},
    multiplier: {type: 'number'},
  },

  tick: function () {
    var analyserComponent;
    var data = this.data;
    var el = this.el;
    var value;

    analyserComponent = data.analyserEl.components.audioanalyser;
    if (!analyserComponent.analyser) { return; }

    value = Math.min(data.max, analyserComponent.volume * data.multiplier);
    el.setAttribute(data.component, data.property, value);
  }
});

AFRAME.registerComponent('audioanalyser-volume-scale', {
  schema: {
    analyserEl: {type: 'selector'},
    multiplier: {type: 'number', default: 1}
  },

  tick: function () {
    var analyserEl = this.data.analyserEl || this.el;
    var analyserComponent;
    var el = this.el;
    var volume;

    analyserComponent = analyserEl.components.audioanalyser;
    if (!analyserComponent.analyser) { return; }

    volume = analyserComponent.volume * this.data.multiplier;
    el.setAttribute('scale', {
      x: volume,
      y: volume,
      z: volume
    });
  }
});

var perlin = new ImprovedNoise();

var RINGCOUNT = 160;
var SEGMENTS = 512;

/**
 * Generate rings (THREE.Line) and transform them using audioanalyser waveform data.
 * Adapted from https://www.airtightinteractive.com/2013/10/making-audio-reactive-visuals/
 */
AFRAME.registerComponent('audioanalyser-waveform', {
  dependencies: ['audioanalyser'],

  schema: {
    maxHeight: {default: 0.2},
    multiplier: {default: .01},
    radius: {default: 1},
  },

  init: function () {
    this.colors = [];
    this.geometry;
    this.levels = [];
    this.noisePos = 0;
    this.rings = [];
  },

  update: function () {
    var data = this.data;
    var el = this.el;
    var i;
    var lineMesh;
    var loopShape;
    var material;
    var scale;

    // Create ring geometries.
    loopShape = new THREE.Shape();
    loopShape.absarc(0, 0, data.radius, 0, Math.PI * 2, false);
    this.geometry = loopShape.createPointsGeometry(SEGMENTS / 2);
    this.geometry.dynamic = true;

    // Create container object.
    el.setObject3D('waveformContainer', new THREE.Object3D());

    // Create rings.
    scale = 1;
    for (i = 0; i < RINGCOUNT; i++) {
      material = new THREE.LineBasicMaterial({
        color: 0xffffff,
        linewidth: 1 ,
        opacity : 0.7,
        blending : THREE.AdditiveBlending,
        depthTest : true,
        transparent : true
      });
      lineMesh = new THREE.Line(this.geometry, material);

      scale *= 1.05;
      lineMesh.scale.x = scale;
      lineMesh.scale.y = scale;
      el.getObject3D('waveformContainer').add(lineMesh);

      this.rings.push(lineMesh);
      this.levels.push(0);
      this.colors.push(0);
    }
  },

  tick: function () {
    var VOL_SENS;
    var analyserComponent;
    var colors = this.colors;
    var data = this.data;
    var el = this.el;
    var levels = this.levels;
    var rings = this.rings;

    analyserComponent = el.components.audioanalyser;
    if (!analyserComponent.analyser) { return; }

    VOL_SENS = 2;
    levels.push(analyserComponent.volume / 256 * VOL_SENS);  // 256 is max level.
    levels.shift(1);

    // Add a new color onto the list.
    this.noisePos += 0.005;
    colors.push(Math.abs(perlin.noise(this.noisePos, 0, 0)));
    colors.shift(1);

    // Write current waveform into all rings.
    this.geometry.vertices.forEach(function (vertex, index) {
      vertex.z = Math.min(analyserComponent.waveform[index] * data.multiplier,
                          data.maxHeight);
    });

    // Link up last segment.
    this.geometry.vertices[this.geometry.vertices.length - 1].z = this.geometry.vertices[0].z;
    this.geometry.verticesNeedUpdate = true;

    rings.forEach(function transformRing (ring, index) {
      var normLevel;
      normLevel = levels[RINGCOUNT - index - 1] + 0.01;  // Avoid scaling by 0.
      ring.material.color.setHSL(colors[index], 1, normLevel);
      ring.material.linewidth = normLevel * 3;
      ring.material.opacity = normLevel;
      ring.scale.z = normLevel;
    });
  },

  remove: function () {
    this.el.removeObject3D('waveformContainer');
  }
});

/**
 * http://mrl.nyu.edu/~perlin/noise/
 */
function ImprovedNoise () {
  var p = [
    151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,
    23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,
    174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,
    133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,
    89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,
    202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,
    248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,
    178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,
    14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,
    93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180
  ];
  for (var i = 0; i < 256 ; i++) {
    p[256 + i] = p[i];
  }
  function fade (t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }
  function lerp (t, a, b) {
    return a + t * (b - a);
  }
  function grad (hash, x, y, z) {
    var h = hash & 15;
    var u = h < 8 ? x : y, v = h < 4 ? y : h == 12 || h == 14 ? x : z;
    return ((h&1) == 0 ? u : -u) + ((h&2) == 0 ? v : -v);
  }
  return {
    noise: function (x, y, z) {
      var floorX = ~~x, floorY = ~~y, floorZ = ~~z;
      var X = floorX & 255, Y = floorY & 255, Z = floorZ & 255;
      x -= floorX;
      y -= floorY;
      z -= floorZ;
      var xMinus1 = x -1, yMinus1 = y - 1, zMinus1 = z - 1;
      var u = fade(x), v = fade(y), w = fade(z);
      var A = p[X]+Y, AA = p[A]+Z, AB = p[A+1]+Z, B = p[X+1]+Y, BA = p[B]+Z, BB = p[B+1]+Z;
      return lerp(w, lerp(v, lerp(u, grad(p[AA], x, y, z),
              grad(p[BA], xMinus1, y, z)),
            lerp(u, grad(p[AB], x, yMinus1, z),
              grad(p[BB], xMinus1, yMinus1, z))),
          lerp(v, lerp(u, grad(p[AA+1], x, y, zMinus1),
              grad(p[BA+1], xMinus1, y, z-1)),
            lerp(u, grad(p[AB+1], x, yMinus1, zMinus1),
              grad(p[BB+1], xMinus1, yMinus1, zMinus1))));
    }
  }
}

AFRAME.registerComponent('color-on-beat', {
  schema: {
    analyserEl: {type: 'selector'}
  },

  init: function () {
    var analyserEl = this.data.analyserEl || this.el;
    var el = this.el;

    analyserEl.addEventListener('audioanalyser-beat', function () {
      el.setAttribute('material', 'color', '#' + new THREE.Color(
        Math.random(), Math.random(), Math.random()
      ).getHexString());
    });
  }
});

AFRAME.registerComponent('remove-on-event', {
  schema: {
    el: {type: 'selector'},
    event: {type: 'string'}
  },

  init: function () {
    this._removeEntity = this._removeEntity.bind(this);
  },

  update: function () {
    var data = this.data;
    var el = data.el || this.el;
    this.removeEventListener();
    el.addEventListener(data.event, this._removeEntity);
  },

  remove: function () {
    this.removeEventListener();
  },

  removeEventListener: function () {
    var data = this.data;
    var el = this.el;
    el.removeEventListener(data.event, this._removeEntity);
  },

  _removeEntity: function () {
    var el = this.el;
    if (el.parentEl) {
      el.parentEl.removeChild(el);
    }
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  },
});

/*
 * Change color at different levels of scale.
 */
AFRAME.registerComponent('scale-y-color', {
  schema: {
    from: {type: 'vec3', default: {x: 0, y: 0, z: 0}},
    to: {type: 'vec3', default: {x: 255, y: 255, z: 255}},
    maxScale: {default: 20}
  },

  tick: function (time) {
    var data = this.data;
    var el = this.el;

    if (time - this.time < 50) { return; }
    this.time = time;

    var scaleY = el.getAttribute('scale').y;
    var percentage = scaleY / data.maxScale;
    el.setAttribute('material', 'color', '#' + rgbToHex(
      (data.to.x - data.from.x) * percentage,
      (data.to.y - data.from.y) * percentage,
      (data.to.z - data.from.z) * percentage
    ));
  }
});

function rgbToHex (r, g, b) {
  var bin = r << 16 | g << 8 | b;
  return (function (h) {
    return new Array(7 - h.length).join('0') + h
  })(bin.toString(16).toUpperCase());
}



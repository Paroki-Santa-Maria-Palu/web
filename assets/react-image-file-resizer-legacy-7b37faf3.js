System.register(["./bootstrap-legacy-f9ff4e59.js"],(function(e,t){"use strict";var a;return{setters:[e=>{a=e.g}],execute:function(){var t={exports:{}};(()=>{var e={d:(t,a)=>{for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},a={};e.r(a),e.d(a,{default:()=>n});var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t;return t=[{key:"changeHeightWidth",value:function(e,t,a,r,n,i){return a>r&&(e=Math.round(e*r/a),a=r),e>t&&(a=Math.round(a*t/e),e=t),n&&a<n&&(e=Math.round(e*n/a),a=n),i&&e<i&&(a=Math.round(a*i/e),e=i),{height:e,width:a}}},{key:"resizeAndRotateImage",value:function(e,t,a,r,n){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"jpeg",o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,l=(arguments.length>6&&void 0!==arguments[6]?arguments[6]:100)/100,h=document.createElement("canvas"),g=e.width,u=e.height,c=this.changeHeightWidth(u,a,g,t,r,n);!o||90!==o&&270!==o?(h.width=c.width,h.height=c.height):(h.width=c.height,h.height=c.width),g=c.width,u=c.height;var d=h.getContext("2d");return d.fillStyle="rgba(0, 0, 0, 0)",d.fillRect(0,0,g,u),d.imageSmoothingEnabled&&d.imageSmoothingQuality&&(d.imageSmoothingQuality="high"),o&&(d.rotate(o*Math.PI/180),90===o?d.translate(0,-h.width):180===o?d.translate(-h.width,-h.height):270===o?d.translate(-h.height,0):0!==o&&360!==o||d.translate(0,0)),d.drawImage(e,0,0,g,u),h.toDataURL("image/".concat(i),l)}},{key:"b64toByteArrays",value:function(e,t){for(var a=atob(e.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/,"")),r=[],n=0;n<a.length;n+=512){for(var i=a.slice(n,n+512),o=new Array(i.length),l=0;l<i.length;l++)o[l]=i.charCodeAt(l);var h=new Uint8Array(o);r.push(h)}return r}},{key:"b64toBlob",value:function(e,t){var a=this.b64toByteArrays(e,t);return new Blob(a,{type:t,lastModified:new Date})}},{key:"b64toFile",value:function(e,t,a){var r=this.b64toByteArrays(e,a);return new File(r,t,{type:a,lastModified:new Date})}},{key:"createResizedImage",value:function(t,a,r,n,i,o,l){var h=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"base64",g=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:null,c=new FileReader;if(!t)throw Error("File Not Found!");if(t.type&&!t.type.includes("image"))throw Error("File Is NOT Image!");c.readAsDataURL(t),c.onload=function(){var d=new Image;d.src=c.result,d.onload=function(){var c=e.resizeAndRotateImage(d,a,r,g,u,n,i,o),s="image/".concat(n);switch(h){case"blob":var f=e.b64toBlob(c,s);l(f);break;case"base64":default:l(c);break;case"file":var v=t.name.toString().replace(/(png|jpeg|jpg|webp)$/i,"").concat(n.toString()),b=e.b64toFile(c,v,s);l(b)}}},c.onerror=function(e){throw Error(e)}}}],t&&function(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e,t),e}();const n={imageFileResizer:function(e,t,a,n,i,o,l,h,g,u){return r.createResizedImage(e,t,a,n,i,o,l,h,g,u)}};t.exports=a})();var r=t.exports;e("R",a(r))}}}));

(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.d({},{j:()=>m});var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.task=t,this.id=(new Date).getTime(),this.complete=!1,this.create=new Date}var n,r,o;return n=e,o=[{key:"fromJson",value:function(t){var n=t.id,r=t.task,o=t.complete,a=t.create,i=new e(r);return i.id=n,i.complete=o,i.create=a,i}}],(r=null)&&t(n.prototype,r),o&&t(n,o),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=document.querySelector(".todo-list"),i=document.querySelector(".new-todo"),l=document.querySelector(".clear-completed"),c=document.querySelector(".filters"),u=document.querySelectorAll(".filtro"),s=function(e){var t='\n    <li class="'.concat(e.complete?"completed":"",'" data-id="').concat(e.id,'">\n        <div class="view">\n            <input class="toggle" type="checkbox" ').concat(e.complete?"checked":""," >\n            <label>").concat(e.task,'</label>\n            <button class="destroy"></button>\n        </div>\n        <input class="edit" value="Create a TodoMVC template">\n    </li>'),n=document.createElement("div");return n.innerHTML=t,a.append(n.firstElementChild),n.firstElementChild};function f(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}i.addEventListener("keyup",(function(e){if(13===e.keyCode&&i.value.length>0){var t=new n(i.value);m.newToDo(t),s(t),i.value=""}})),a.addEventListener("click",(function(e){var t=e.target.localName,n=e.target.parentElement.parentElement,r=n.getAttribute("data-id");t.includes("input")?(m.checkComplete(r),n.classList.toggle("completed")):t.includes("button")&&(m.deleteToDo(r),a.removeChild(n))})),l.addEventListener("click",(function(e){m.deleteComplete();for(var t=a.children.length-1;t>=0;t--){var n=a.children[t];n.classList.contains("completed")&&a.removeChild(n)}})),c.addEventListener("click",(function(e){var t=e.target.text;if(t){u.forEach((function(e){return e.classList.remove("selected")})),e.target.classList.add("selected");var n,o=r(a.children);try{for(o.s();!(n=o.n()).done;){var i=n.value;i.classList.remove("hidden");var l=i.classList.contains("completed");switch(t){case"Pendientes":l&&i.classList.add("hidden");break;case"Completados":l||i.classList.add("hidden")}}}catch(e){o.e(e)}finally{o.f()}}}));var m=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.loadLocalStorage()}var t,r,o;return t=e,(r=[{key:"newToDo",value:function(e){this.toDo.push(e),this.saveLocalStorage()}},{key:"deleteToDo",value:function(e){this.toDo=this.toDo.filter((function(t){return t.id!=e})),this.saveLocalStorage()}},{key:"checkComplete",value:function(e){var t,n=f(this.toDo);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.id===e&&(r.complete=!r.complete)}}catch(e){n.e(e)}finally{n.f()}this.saveLocalStorage()}},{key:"deleteComplete",value:function(){this.toDo=this.toDo.filter((function(e){return!e.complete})),this.saveLocalStorage()}},{key:"saveLocalStorage",value:function(){localStorage.setItem("toDo",JSON.stringify(this.toDo))}},{key:"loadLocalStorage",value:function(){this.toDo=localStorage.getItem("toDo")?JSON.parse(localStorage.getItem("toDo")):[],this.toDo=this.toDo.map(n.fromJson)}}])&&v(t.prototype,r),o&&v(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}());m.toDo.forEach(s),console.log({toDoList:m})})();
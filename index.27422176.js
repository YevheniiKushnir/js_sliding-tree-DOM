function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var e,r=document.querySelector(".tree");((function(e){if(Array.isArray(e))return t(e)})(e=document.querySelectorAll("li"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach(function(t){var e=t.firstChild;if(e&&e.nodeType===Node.TEXT_NODE&&t.querySelector("ul")){var r=document.createElement("span");r.textContent=e.textContent.trim(),e.replaceWith(r)}}),r.addEventListener("click",function(t){var e=t.target.closest("span");if(e){var r=e.parentElement.querySelector("ul");r&&(r.hidden=!r.hidden)}});
//# sourceMappingURL=index.27422176.js.map

function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const n=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error(e)}},o=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error(e)}},r=e=>{try{localStorage.removeItem(e)}catch(e){console.error(e)}};var i,a,u,f=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,d=parseInt,v="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,p=v||m||Function("return this")(),g=Object.prototype.toString,y=Math.max,b=Math.min,h=function(){return p.Date.now()};function j(e,t,n){var o,r,i,a,u,f,c=0,l=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function m(e){return c=e,u=setTimeout(g,t),l?v(e):a}function p(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function g(){var e=h();if(p(e))return j(e);u=setTimeout(g,function(e){var n=t-(e-f);return s?b(n,i-(e-c)):n}(e))}function j(e){return u=void 0,d&&o?v(e):(o=r=void 0,a)}function O(){var e=h(),n=p(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return m(f);if(s)return u=setTimeout(g,t),v(f)}return void 0===u&&(u=setTimeout(g,t)),a}return t=w(t)||0,S(n)&&(l=!!n.leading,i=(s="maxWait"in n)?y(w(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},O.flush=function(){return void 0===u?a:j(h())},O}function S(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==g.call(e)}(e))return NaN;if(S(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=S(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=l.test(e);return n||s.test(e)?d(e.slice(2),n?2:8):c.test(e)?NaN:+e}i=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return S(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),j(e,t,{leading:o,maxWait:t,trailing:r})};const O=document.querySelector(".feedback-form"),T=(null===(a=o("feedback-form-state"))||void 0===a?void 0:a.email)||"",x=(null===(u=o("feedback-form-state"))||void 0===u?void 0:u.message)||"";let E={message:x,email:T};const k=document.querySelector("input");k.value=T,k.addEventListener("input",e(i)((e=>{E={...E,email:e.target.value},n("feedback-form-state",E)}),500));const N=document.querySelector("textarea");N.value=x,N.addEventListener("input",e(i)((e=>{E={...E,message:e.target.value},n("feedback-form-state",E)}),500)),O.addEventListener("submit",(e=>{console.log("Current object: ",E),e.preventDefault(),r("feedback-form-state"),O.reset()}));
//# sourceMappingURL=03-feedback.88281816.js.map

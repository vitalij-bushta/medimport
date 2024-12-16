(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m=function(c){let s=0;const i=50,o=document.querySelector(c);if(o){const e=()=>window.scrollY||document.documentElement.scrollTop,t=()=>o.classList.contains("header--scroll");window.addEventListener("scroll",()=>{e()>s&&!t()&&e()>i&&o.classList.add("header--scroll"),e()>s&&t()&&e()>i*2&&o.classList.add("header--out"),e()<s&&t()&&o.classList.remove("header--out"),e()<50&&t()&&o.classList.remove("header--scroll"),s=e()})}},h=function(c){const s=document.querySelectorAll(c);s&&s.forEach(t=>{const n=t.querySelectorAll(".select__header"),d=t.querySelectorAll(".select__item");document.addEventListener("click",l=>{l.composedPath().includes(t)||t.classList.remove("is-active")}),n.forEach(l=>{l.addEventListener("click",i)}),d.forEach(l=>{l.addEventListener("click",e)})});function i(){this.parentElement.classList.toggle("is-active")}function o(){const t=document.querySelectorAll(".reset");if(t){let l=function(){d.forEach(r=>{r.textContent=r.dataset.text,r.dataset.value=r.dataset.default,r.classList.remove("active")})};var n=l;const d=document.querySelectorAll(".input__current");t.forEach(r=>{r.addEventListener("click",l)})}}function e(){const t=this.innerText,n=this.closest(c),d=n.querySelector(".select__current");d.innerText=t,d.classList.contains("input__current")&&(o(),d.dataset.value=this.dataset.value,d.classList.add("active")),n.classList.remove("is-active")}},g=function(){const c=document.querySelector(".menu-btn"),s=document.querySelectorAll(".close-menu"),i=document.querySelector(".nav"),o=document.body;c.addEventListener("click",()=>{i.classList.add("open"),o.classList.add("locked")}),s.forEach(e=>{e.addEventListener("click",()=>{i.classList.remove("open"),o.classList.remove("locked"),i.classList.add("anim"),setTimeout(()=>{i.classList.remove("anim")},400)})})},p=(c,s,i,o)=>new Swiper(c,{loop:!0,speed:700,observer:!0,observeParents:!0,observeSlideChildren:!0,slidesPerView:1,pagination:{el:s,clickable:!0},navigation:{nextEl:i,prevEl:o},breakpoints:{320:{spaceBetween:10,slidesPerView:1},425:{spaceBetween:10,slidesPerView:1.5},599:{slidesPerView:2,spaceBetween:20},678:{slidesPerView:2.5,spaceBetween:20},992:{slidesPerView:3,spaceBetween:24}}}),y=()=>new SimpleLightbox(".certificates-slide a",{captions:!1,showCounter:!0,overlayOpacity:.7,loop:!0}),v=function(c,s,i){const o=document.querySelectorAll(c),e=document.querySelector(s),t=document.querySelector(".overlay"),n=t.querySelector(i),d=document.body;function l(){u("show"),d.classList.remove("locked"),e.classList.add("fade-down"),setTimeout(()=>{e.classList.remove("active"),t.classList.remove("active"),e.classList.remove("fade-down")},290)}function r(){e.classList.add("active"),t.classList.add("active"),u("hide"),d.classList.add("locked")}o&&e&&n&&(o.forEach(a=>{a.addEventListener("click",f=>{f.preventDefault(),r()})}),t.addEventListener("click",a=>{a.target===t&&l()}),n.addEventListener("click",l))};function L(){let c=0,s=document.createElement("div");return s.classList.add("sl-scrollbar-measure"),document.body.appendChild(s),c=s.offsetWidth-s.clientWidth,document.body.removeChild(s),c}function u(c){let s=0,i=[].slice.call(document.querySelectorAll(".fixed"));if(c==="hide"){let o=window.innerWidth;if(!o){let e=document.documentElement.getBoundingClientRect();o=e.right-Math.abs(e.left)}if(document.body.clientWidth<o){let e=parseInt(window.getComputedStyle(document.body).paddingRight||0,10);s=L(),document.body.dataset.originalPaddingRight=e,(s>0||s==0)&&(document.body.classList.add("hidden-scroll"),document.body.style.paddingRight=e+s+"px"),i.forEach(t=>{const n=t.style.paddingRight,d=window.getComputedStyle(t)["padding-right"];t.dataset.originalPaddingRight=n,t.style.paddingRight=`${parseFloat(d)+s}px`})}}else document.body.classList.remove("hidden-scroll"),document.body.style.paddingRight=document.body.dataset.originalPaddingRight+"px",i.forEach(o=>{const e=o.dataset.originalPaddingRight;typeof e<"u"&&(o.style.paddingRight=e)});return s}m(".header");h(".select-lang");g();y();p(".certificates-slider",".certificates-pagination",".certificates-button-next",".certificates-button-prev");v("[data-modal]",".modal",".close-btn");window.addEventListener("load",()=>{document.body.classList.remove("preload")});

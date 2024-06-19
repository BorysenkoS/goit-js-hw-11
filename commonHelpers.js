(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function i(s){const r="https://pixabay.com/api/",l=new URLSearchParams({key:"44427919-32b813221576803201dca5eed",q:s,image_type:"photo",orientation:"horisontal",safesearch:"true"}),o=`${r}?${l}`;return console.log(o),fetch(o).then(e=>e.json()).catch(e=>console.log())}function u(s){const{webformatURL:r,largeImageURL:l,tags:o,likes:e,views:t,comments:n,downloads:a}=s;return`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img class="gallery-image" src="${l}" alt="${o}" width="360" height="200";/>
            <div class="gallery-describe">
              <p class="gallery-text">Likes${e}</p>
              <p class="gallery-text">Views${t}</p>
              <p class="gallery-text">Comments${n}</p>
              <p class="gallery-text">Downloads${a}</p>
            </div>
          </a>
        </li>`}function m(s){return s.hits.map(u).join("")}const c={galleryElem:document.querySelector(".gallery"),searchBtn:document.querySelector(".search-btn"),formElem:document.querySelector(".search-form"),inputElem:document.querySelector(".search-input")};c.formElem.addEventListener("submit",s=>{s.preventDefault();const r=c.inputElem.value;i(r).then(l=>{const o=m(l);c.galleryElem.innerHTML=o}).catch(l=>console.log("error")),c.formElem.reset()});
//# sourceMappingURL=commonHelpers.js.map

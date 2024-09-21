import{S as f,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const m="46037450-a04b7b74a12a46e49ae394c24",p="https://pixabay.com/api/";function h(i){return fetch(`${p}?key=${m}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return t.json()})}const c=document.querySelector(".js-gallery");function d(i){c.innerHTML="";const t=i.hits.map(({webformatURL:n,largeImageURL:o,tags:e,likes:r,views:s,comments:l,downloads:u})=>`
      <a href="${o}" class="gallery-item">
        <img src="${n}" alt="${e}" loading="lazy" />
        <div class="info">
          <p><b>Likes</b>: ${r}</p>
          <p><b>Views</b>: ${s}</p>
          <p><b>Comments</b>: ${l}</p>
          <p><b>Downloads</b>: ${u}</p>
        </div>
      </a>
    `).join("");c.insertAdjacentHTML("beforeend",t)}const g=document.querySelector(".js-search-form");new f(".gallery-item",{captionsData:"alt",captionDelay:250});g.addEventListener("submit",y);function y(i){i.preventDefault();const t=i.currentTarget,{query:n}=t.elements;if(n.value.trim()===""){a.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}h(n.value).then(o=>{if(o.hits.length===0){a.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}d(o)}).catch(o=>{a.error({title:"",message:o.message,position:"topRight"})}).finally(()=>{t.reset()})}
//# sourceMappingURL=index.js.map

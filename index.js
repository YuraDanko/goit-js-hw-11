import{S as f,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m="46037450-a04b7b74a12a46e49ae394c24",p="https://pixabay.com/api/";function h(i){return fetch(`${p}?key=${m}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return t.json()})}const c=document.querySelector(".js-gallery");function g(i){c.innerHTML="";const t=i.hits.map(({webformatURL:s,largeImageURL:o,tags:e,likes:r,views:n,comments:l,downloads:u})=>`
      <a href="${o}" class="gallery-item">
        <img src="${s}" alt="${e}" loading="lazy" />
        <div class="info">
          <p><b>Likes</b> ${r}</p>
          <p><b>Views</b> ${n}</p>
          <p><b>Comments</b> ${l}</p>
          <p><b>Downloads</b> ${u}</p>
        </div>
      </a>
    `).join("");c.insertAdjacentHTML("beforeend",t)}const d=document.querySelector(".js-search-form");let y=new f(".gallery-item",{captionsData:"alt",captionDelay:250});d.addEventListener("submit",b);function b(i){i.preventDefault();const t=i.currentTarget,{query:s}=t.elements;if(s.value.trim()===""){a.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}h(s.value).then(o=>{if(o.hits.length===0){a.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(o),y.refresh()}).catch(o=>{a.error({title:"",message:o.message,position:"topRight"})}).finally(()=>{t.reset()})}
//# sourceMappingURL=index.js.map

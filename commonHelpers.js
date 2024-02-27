import{i as l,S as c}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const m="42476870-3a5632db826cc102513b658b4",f="https://pixabay.com",u="/api/";async function d(t){const r=`?key=${m}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`,a=`${f}${u}${r}`;try{const s=await fetch(a);if(!s.ok)throw new Error(s.status);const e=await s.json();if(e.hits&&e.hits.length>0)return e;throw new Error("No images found")}catch{throw new Error("Failed to fetch images from Pixabay API")}}function g(t){return`<div class="image-box">
    <div class="image-container">
      <a href="${t.largeImageURL}" data-lightbox="gallery">
        <img src="${t.webformatURL}" alt="${t.tags}" class="my-image">
      </a>
    </div>
    <div class="image-body">
      <ul>
        <li class="image-like">Likes ${t.likes}</li>
        <li class="image-views">Views ${t.views}</li>
        <li class="image-Comments">Comments ${t.comments}</li>
        <li class="image-Downloads">Downloads ${t.downloads}</li>
      </ul>
    </div>
  </div>`}function h(t,r){t.infoEl.innerHTML="",!r||r.length===0?iziToast.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center",transitionIn:"fadeInLeft"}):r.forEach(a=>{const s=g(a);t.infoEl.insertAdjacentHTML("beforeend",s)})}const n={formEl:document.querySelector(".search-form"),infoEl:document.querySelector(".img-container"),allForm:document.querySelector(".block")};n.formEl.addEventListener("submit",async t=>{t.preventDefault();const r=t.target.elements.query.value.trim();if(r===""){l.error({message:"Please enter a search query",position:"center",transitionIn:"fadeInLeft"});return}try{const a=await d(r);h(n,a.hits)}catch(a){console.error(a),l.error({message:"Failed to fetch images. Please try again later.",position:"center",transitionIn:"fadeInLeft"})}t.target.reset(),n.allForm.scrollIntoView({behavior:"smooth",block:"start"})});const y=new c(".image-box",{overlay:!0,overlayOpacity:.9,animationSpeed:1e3,scrollZoomFactor:.1,navText:["←","→"],captionsData:"alt",captionDelay:250});y.refresh();
//# sourceMappingURL=commonHelpers.js.map

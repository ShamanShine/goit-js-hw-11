import{S as c,i}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const m="42476870-3a5632db826cc102513b658b4",f="https://pixabay.com",d="/api/";async function u(t){const r=`?key=${m}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`,o=`${f}${d}${r}`;try{const n=await fetch(o);if(!n.ok)throw new Error(n.status);const e=await n.json();if(e.hits&&e.hits.length>0)return e;throw new Error("No images found")}catch{throw new Error("Failed to fetch images from Pixabay API")}}const g=new c(".img-container a",{overlay:!0,overlayOpacity:.9,animationSpeed:1e3,scrollZoomFactor:.1,navText:["←","→"],captionsData:"alt",captionDelay:250});function y(t,r,o=9){t.infoEl.innerHTML="",!r||r.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center",transitionIn:"fadeInLeft"}):(r.slice(0,o).forEach(n=>{const e=h(n);t.infoEl.insertAdjacentHTML("beforeend",e)}),g.refresh())}function h(t){return`<div class="image-box">
    <div class="general-frame">

        <div class="image-container">
            <a href="${t.largeImageURL}" data-lightbox="gallery">
            <img src="${t.webformatURL}" alt="${t.tags}" class="my-image">
            </a>
        </div>
        <div class="image-body">
            <ul class="ul-item">
                <li class="image-li">Likes <span style="font-weight: normal;">${t.likes}</span></li>
                <li class="image-li">Views <span style="font-weight: normal;">${t.views}</span></li>
                <li class="image-li">Comments <span style="font-weight: normal;">${t.comments}</span></li>
                <li class="image-li">Downloads <span style="font-weight: normal;">${t.downloads}</span></li>
            </ul>
        </div>
  </div>
    </div>`}const l={formEl:document.querySelector(".search-form"),infoEl:document.querySelector(".img-container"),loader:document.getElementById(".block")};l.formEl.addEventListener("submit",async t=>{t.preventDefault();const r=t.target.elements.query.value.trim();if(r===""){i.error({message:"Please enter a search query",position:"center",transitionIn:"fadeInLeft"});return}try{const o=await u(r);o.hits&&o.hits.length>0?y(l,o.hits,9):i.error({message:"No images found for the given query",position:"center",transitionIn:"fadeInLeft"})}catch(o){console.error(o),i.error({message:"Failed to fetch images. Please try again later.",position:"center",transitionIn:"fadeInLeft"})}t.target.reset()});new c(".img-container",{overlay:!0,overlayOpacity:.9,animationSpeed:1e3,scrollZoomFactor:.1,navText:["←","→"],captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map

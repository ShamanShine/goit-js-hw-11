import{S as c,i}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const m="42476870-3a5632db826cc102513b658b4",f="https://pixabay.com",u="/api/";async function d(t){const r=`?key=${m}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`,o=`${f}${u}${r}`;try{const s=await fetch(o);if(!s.ok)throw new Error(s.status);const e=await s.json();if(e.hits&&e.hits.length>0)return e;throw new Error("No images found")}catch{throw new Error("Failed to fetch images from Pixabay API")}}const g=new c(".image-box",{overlay:!0,overlayOpacity:.9,animationSpeed:1e3,scrollZoomFactor:.1,navText:["←","→"],captionsData:"alt",captionDelay:250});function h(t,r,o=10){t.infoEl.innerHTML="",!r||r.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center",transitionIn:"fadeInLeft"}):(r.slice(0,o).forEach(s=>{const e=y(s);t.infoEl.insertAdjacentHTML("beforeend",e)}),g.refresh())}function y(t){return`<div class="image-box">
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
    </div>`}const l={formEl:document.querySelector(".search-form"),infoEl:document.querySelector(".img-container")};l.formEl.addEventListener("submit",async t=>{t.preventDefault();const r=t.target.elements.query.value.trim();if(r===""){i.error({message:"Please enter a search query",position:"center",transitionIn:"fadeInLeft"});return}try{const o=await d(r);o.hits&&o.hits.length>0?h(l,o.hits,9):i.error({message:"No images found for the given query",position:"center",transitionIn:"fadeInLeft"})}catch(o){console.error(o),i.error({message:"Failed to fetch images. Please try again later.",position:"center",transitionIn:"fadeInLeft"})}t.target.reset(),l.infoEl.scrollIntoView({behavior:"smooth",block:"start"})});const p=new c(".my-image",{overlay:!0,overlayOpacity:.9,animationSpeed:1e3,scrollZoomFactor:.1,navText:["←","→"],captionsData:"alt",captionDelay:250});p.refresh();
//# sourceMappingURL=commonHelpers.js.map

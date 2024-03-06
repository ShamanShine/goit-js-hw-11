import{S as c,i as s}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();const m="42476870-3a5632db826cc102513b658b4",f="https://pixabay.com",u="/api/";function d(t){const o=`?key=${m}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`,n=`${f}${u}${o}`;return fetch(n).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(r.hits&&r.hits.length>0)return r;throw new Error("No images found")}).catch(r=>{throw new Error(`Failed to fetch images from Pixabay API: ${r.message}`)})}const g=new c(".img-container a",{overlay:!0,overlayOpacity:.9,animationSpeed:1e3,scrollZoomFactor:.1,navText:["←","→"],captionsData:"alt",captionDelay:250});function h(t,o,n=18){t.infoEl.innerHTML="",!o||o.length===0?s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center",transitionIn:"fadeInLeft"}):(o.slice(0,n).forEach(r=>{const e=y(r);t.infoEl.insertAdjacentHTML("beforeend",e)}),g.refresh())}function y(t){return`<div class="image-box">
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
    </div>`}const a={formEl:document.querySelector(".search-form"),infoEl:document.querySelector(".img-container"),loader:document.querySelector(".loader")};a.formEl.addEventListener("submit",t=>{t.preventDefault(),a.infoEl.innerHTML="",a.loader.classList.remove("is-hidden");const o=t.currentTarget.elements.query.value.trim();if(o===""){s.error({message:"Please enter a search query",position:"center",transitionIn:"fadeInLeft"});return}d(o).then(n=>{n.hits&&n.hits.length>0?h(a,n.hits,18):s.error({message:"No images found for the given query",position:"center",transitionIn:"fadeInLeft"})}).catch(n=>{console.error(n),s.error({message:"Failed to fetch images. Please try again later.",position:"center",transitionIn:"fadeInLeft"})}).finally(()=>{a.loader.classList.add("is-hidden")})});new c(".img-container",{overlay:!0,overlayOpacity:.9,animationSpeed:1e3,scrollZoomFactor:.1,navText:["←","→"],captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map

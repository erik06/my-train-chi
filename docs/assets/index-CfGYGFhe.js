(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const n={home:"RAVENSWOOD",work:"OTC"},l="UP-N",d=({orig:r,dest:o})=>{const s=Math.floor(Date.now()/1e3);return`https://metra.com/schedules?${new URLSearchParams({line:l,orig:r,dest:o,time:String(s),allstops:"0",redirect:String(s)}).toString()}#schedule-table`},u=r=>{const o=r==="inbound",s=d({orig:o?n.home:n.work,dest:o?n.work:n.home});window.open(s,"_blank","noopener")},i=document.querySelector("#app");i.innerHTML=`
  <main class="screen">
    <header class="title-block">
      <p class="eyebrow">Metra Quick Launch</p>
      <h1>Commute</h1>
      <p class="subtitle">One tap to load the right schedule.</p>
    </header>

    <section class="card">
      <button class="btn inbound" data-direction="inbound">
        <span class="primary">Go to work</span>
        <span class="secondary">Inbound</span>
        <span class="meta">${n.home} → ${n.work}</span>
      </button>
      <button class="btn outbound" data-direction="outbound">
        <span class="primary">Go home</span>
        <span class="secondary">Outbound</span>
        <span class="meta">${n.work} → ${n.home}</span>
      </button>
    </section>
  </main>
`;i.querySelectorAll("button[data-direction]").forEach(r=>{r.addEventListener("click",()=>{u(r.dataset.direction)})});

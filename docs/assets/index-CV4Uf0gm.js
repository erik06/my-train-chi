(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const r={home:"RAVENSWOOD",work:"OTC"},l="UP-N",u=({orig:n,dest:o})=>{const s=Math.floor(Date.now()/1e3);return`https://metra.com/schedules?${new URLSearchParams({line:l,orig:n,dest:o,time:String(s),allstops:"0",redirect:String(s)}).toString()}#schedule-table`},d=n=>{const o=n==="inbound",s=u({orig:o?r.home:r.work,dest:o?r.work:r.home});window.open(s,"_blank","noopener")},a=document.querySelector("#app");a.innerHTML=`
  <main class="screen">
    <header class="title-block">
      <p class="eyebrow">Metra Quick Launch</p>
      <h1>Commute</h1>
      <p class="subtitle">One tap to load the right schedule.</p>
    </header>

    <section class="card">
      <button class="btn inbound" data-direction="inbound">
        Inbound (Go to work)
        <span class="meta">${r.home} → ${r.work}</span>
      </button>
      <button class="btn outbound" data-direction="outbound">
        Outbound (Go home)
        <span class="meta">${r.work} → ${r.home}</span>
      </button>
    </section>
  </main>
`;a.querySelectorAll("button[data-direction]").forEach(n=>{n.addEventListener("click",()=>{d(n.dataset.direction)})});

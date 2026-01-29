import "./style.css";

const STATIONS = {
  home: "RAVENSWOOD",
  work: "OTC",
};

const LINE = "UP-N";

const buildMetraUrl = ({ orig, dest }) => {
  const now = Math.floor(Date.now() / 1000);
  const params = new URLSearchParams({
    line: LINE,
    orig,
    dest,
    time: String(now),
    allstops: "0",
    redirect: String(now),
  });

  return `https://metra.com/schedules?${params.toString()}#schedule-table`;
};

const handleNavigate = (direction) => {
  const isInbound = direction === "inbound";
  const url = buildMetraUrl({
    orig: isInbound ? STATIONS.home : STATIONS.work,
    dest: isInbound ? STATIONS.work : STATIONS.home,
  });

  window.open(url, "_blank", "noopener");
};

const app = document.querySelector("#app");

app.innerHTML = `
  <main class="screen">
    <header class="title-block">
      <p class="eyebrow">Metra Quick Launch</p>
      <h1>Commute</h1>
      <p class="subtitle">One tap to load the right schedule.</p>
    </header>

    <section class="card">
      <button class="btn inbound" data-direction="inbound">
        Inbound (Go to work)
        <span class="meta">${STATIONS.home} → ${STATIONS.work}</span>
      </button>
      <button class="btn outbound" data-direction="outbound">
        Outbound (Go home)
        <span class="meta">${STATIONS.work} → ${STATIONS.home}</span>
      </button>
    </section>
  </main>
`;

app.querySelectorAll("button[data-direction]").forEach((button) => {
  button.addEventListener("click", () => {
    handleNavigate(button.dataset.direction);
  });
});

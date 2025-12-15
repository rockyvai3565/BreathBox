export function bootBreatheUI({ root, onReadyText }) {
  root.innerHTML = `
    <div class="wrap">
      <div class="top">
        <div class="title">
          <div class="name">Breathe Box</div>
          <div class="sub">inhale • exhale • repeat</div>
        </div>
        <div class="pill" id="envPill">WEB</div>
      </div>

      <div class="card">
        <div class="stage" aria-label="Breathing guide">
          <div class="box" id="box"></div>
          <div class="label" id="label">INHALE</div>
        </div>
        <div class="foot">
          <div class="minihelp">
            <span class="dot"></span>
            <span id="readyText">ready</span>
          </div>
          <div class="meta">4s in • 4s out</div>
        </div>
      </div>
    </div>
  `;

  const env = root.querySelector("#envPill");
  const label = root.querySelector("#label");
  const readyText = root.querySelector("#readyText");

  function setEnv(isMini) {
    env.textContent = isMini ? "MINI" : "WEB";
    env.classList.toggle("mini", !!isMini);
  }

  // Simple phase label synced to 8s cycle
  let inhale = true;
  label.textContent = "INHALE";
  setInterval(() => {
    inhale = !inhale;
    label.textContent = inhale ? "INHALE" : "EXHALE";
  }, 4000);

  readyText.textContent = onReadyText || "ready ✓";

  return { setEnv };
}
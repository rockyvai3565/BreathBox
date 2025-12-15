import { sdk } from "https://esm.sh/@farcaster/miniapp-sdk";

window.addEventListener("load", async () => {
  const root = document.getElementById("app");
  const { bootBreatheUI } = await import("./Breathebox-ui.js");

  let isMini = false;
  try {
    isMini = await sdk.isInMiniApp();
  } catch {
    isMini = false;
  }

  const ui = bootBreatheUI({
    root,
    onReadyText: isMini ? "mini app detected ✓" : "web mode ✓"
  });
  ui.setEnv(isMini);

  // Always call ready()
  try {
    await sdk.actions.ready();
  } catch {}
});
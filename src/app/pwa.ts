// Platen PWA Installation & Offline Manager

let deferredInstallPrompt: any = null;
const listeners = new Set<(canInstall: boolean) => void>();

if (typeof window !== "undefined") {
  window.addEventListener("beforeinstallprompt", (e: any) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    listeners.forEach((fn) => fn(true));
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    listeners.forEach((fn) => fn(false));
  });
}

export function subscribeToInstallPrompt(callback: (canInstall: boolean) => void) {
  listeners.add(callback);
  callback(Boolean(deferredInstallPrompt));
  return () => {
    listeners.delete(callback);
  };
}

export async function promptInstallApp(): Promise<boolean> {
  if (deferredInstallPrompt) {
    try {
      deferredInstallPrompt.prompt();
      const choice = await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
      listeners.forEach((fn) => fn(false));
      return choice.outcome === "accepted";
    } catch {
      return false;
    }
  } else {
    // If not triggered yet or standalone mode
    if (window.matchMedia("(display-mode: standalone)").matches) {
      alert("Platen is already running as an installed standalone application.");
      return true;
    }
    alert(
      "To install Platen as an offline desktop/mobile app:\n\n• Chrome/Edge: Click the 'Install' icon (computer with down-arrow) in your browser address bar.\n• iOS Safari: Tap 'Share' → 'Add to Home Screen'.\n• Android: Tap the three dots menu → 'Install app' or 'Add to Home screen'."
    );
    return false;
  }
}

export function isAppInstalled(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(display-mode: standalone)").matches || (navigator as any).standalone === true;
}

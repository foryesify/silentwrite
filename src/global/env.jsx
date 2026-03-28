import { getCurrentWindow } from "@tauri-apps/api/window";

export function isTauri() {
    return !!(window?.__TAURI_INTERNALS__)
}

export const tauriAppWindow = isTauri() ? getCurrentWindow() : {}

export function tauriWindowClose() {
    if (isTauri()) {
        tauriAppWindow.close()
    }
}

export function tauriWindowToggleMinMax() {
    if (isTauri()) {
        tauriAppWindow.toggleMaximize()
    }
}

export function tauriWindowMinimize() {
    if (isTauri()) {
        tauriAppWindow.minimize()
    }
}

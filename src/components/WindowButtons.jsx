import { signal } from "@preact/signals"
import { getCurrentWindow as getWindow } from "@tauri-apps/api/window";

export default function WindowButtons() {
    const maximized = signal(false);
    w.onResized(async () => maximized.value = await w.isMaximized());
    return (
        <div className="window-controls">
            <MinimizeIcon />
            {maximized ? <MaximizeIcon /> : <RestoreIcon />}
            <CloseIcon />
        </div>
    )
}

function MinimizeIcon() {
    return (
        <div className="minimize-icon" onClick={getWindow().minimize}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
        </div>
    )
}

function RestoreIcon() {
    return (
        <div className="restore-icon" onClick={getWindow().toggleMaximize}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 8H4v12h12v-4" />
                <path d="M12 4h8v8h-8z" />
            </svg>
        </div>
    )
}

function MaximizeIcon() {
    return (
        <div className="maximize-icon" onClick={getWindow().toggleMaximize}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2"
                strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="5" width="14" height="14" rx="2" ry="2" />
            </svg>
        </div>
    )
}

function CloseIcon() {
    return (
        <div className="close-icon" onClick={getWindow().close}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
        </div>
    )
}

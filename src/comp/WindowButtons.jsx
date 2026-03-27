import "../assets/WindowButtons.css"
import { useState } from "preact/hooks"
import { tauriWindowToggleMinMax, isTauri, tauriAppWindow } from "./Tauri"
import { tauriWindowMinimize, tauriWindowClose } from "./Tauri"

export default function WindowButtons() {
    const [maximized, setMaximized] = useState(false)
    if (isTauri()) {
        tauriAppWindow.onResized(async () => {
            setMaximized(await tauriAppWindow.isMaximized())
        });
    }
    return (
        <>
            <SettingsIcon />
            <MinimizeIcon />
            {maximized ? <MaximizeIcon /> : <RestoreIcon />}
            <CloseIcon />
        </>
    )
}

function MinimizeIcon() {
    return (
        <div className="minimize-icon" onClick={tauriWindowMinimize}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
        </div>
    )
}

function RestoreIcon() {
    return (
        <div className="restore-icon" onClick={tauriWindowToggleMinMax}>
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
        <div className="maximize-icon" onClick={tauriWindowToggleMinMax}>
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
        <div className="close-icon" onClick={tauriWindowClose}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
        </div>
    )
}

function SettingsIcon() {
    return (
        <div className="settings-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">
                <circle cx="12" cy="12" r="3" />
                <g transform="translate(12,12)">
                    <rect x="-1" y="-10" width="2" height="3"
                        rx="1" transform="rotate(0)" />
                    <rect x="-1" y="-10" width="2" height="3"
                        rx="1" transform="rotate(45)" />
                    <rect x="-1" y="-10" width="2" height="3"
                        rx="1" transform="rotate(90)" />
                    <rect x="-1" y="-10" width="2" height="3"
                        rx="1" transform="rotate(135)" />
                    <rect x="-1" y="-10" width="2" height="3"
                        rx="1" transform="rotate(180)" />
                    <rect x="-1" y="-10" width="2" height="3"
                        rx="1" transform="rotate(225)" />
                    <rect x="-1" y="-10" width="2" height="3"
                        rx="1" transform="rotate(270)" />
                    <rect x="-1" y="-10" width="2" height="3"
                        rx="1" transform="rotate(315)" />
                </g>
                <circle cx="12" cy="12" r="7" />
            </svg>
        </div>
    )
}

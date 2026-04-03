import "@/assets/Titlebar.css"
import WindowButtons from "./Titlebar/WindowButtons"
import { gAppName, gTitle } from "@/global/public"

export default function Titlebar() {
    return (
        <div className="titlebar">
            <div className="left">
                <div className="app-title">{gAppName}</div>
                <div className="menubar"></div>
            </div>
            <div className="placeholder" data-tauri-drag-region></div>
            <div className="center" data-tauri-drag-region>
                <div className="page-title" data-tauri-drag-region>
                    {gTitle}
                </div>
            </div>
            <div className="placeholder" data-tauri-drag-region></div>
            <div className="right">
                <div className="window-buttons">
                    <WindowButtons />
                </div>
            </div>
        </div>
    )
}

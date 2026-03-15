import * as icons from "../icons/window-buttons"
import { useState } from "preact/hooks"
import "./Titlebar.css"

function Titlebar() {
    const windowMaximized = useState(true);
    return (
        <div className="titlebar">
            <div className="left">
                <div className="app-title" data-tauri-drag-region></div>
                <div className="menubar"></div>
            </div>
            <div className="center" data-tauri-drag-region>
                <div className="page-title"></div>
            </div>
            <div className="right">
                <div className="settings"></div>
                <div className="window-buttons">
                    <icons.MinimizeIcon />
                    <icons.MaximizeRestoreIcon />
                    <icons.CloseIcon />
                </div>
            </div>
        </div>
    )
}

export default Titlebar

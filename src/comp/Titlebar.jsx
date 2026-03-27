import "./Titlebar.css"
import WindowButtons from "./WindowButtons"

function Titlebar() {
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
                    <WindowButtons/>
                </div>
            </div>
        </div>
    )
}

export default Titlebar

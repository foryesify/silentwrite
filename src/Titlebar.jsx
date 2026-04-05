import WindowButtons from "@/components/Titlebar/WindowButtons"

export default function Titlebar() {
    return (
        <div className="titlebar">
            <div className="left">
                <div className="app-title">
                    {}
                </div>
                <div className="menubar"></div>
            </div>
            <div className="placeholder" data-tauri-drag-region></div>
            <div className="center" data-tauri-drag-region>
                <div className="page-title" data-tauri-drag-region>
                    {}
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

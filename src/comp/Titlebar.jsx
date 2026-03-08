function Titlebar() {
    return (
        <div className="titlebar">
            <div className="left">
                <div className="app-title" data-tauri-drag-region></div>
                <div className="menubar"></div>
            </div>
            <div className="center">
                <div className="page-title" data-tauri-drag-region></div>
            </div>
            <div className="right">
                <div className="settings"></div>
                <div className="window-buttons"></div>
            </div>
        </div>
    )
}

export default Titlebar

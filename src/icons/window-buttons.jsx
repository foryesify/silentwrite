import { useState, useEffect } from "preact/hooks"
import "./window-buttons.css"
import { getCurrentWindow } from '@tauri-apps/api/window';

const appWindow = getCurrentWindow();
const minimizeWindow = () => {
    appWindow.minimize();
};

const toggleMaximizeWindow = () => {
    appWindow.toggleMaximize();
};

const closeWindow = () => {
    appWindow.close();
};


export const MinimizeIcon = ({ color = 'currentColor', size = 18 }) => (
    <div className="minimize-icon" onClick={minimizeWindow}>
        <svg width={size} height={size}
            viewBox="0 0 24 24" fill="none"
            stroke={color} stroke-width="2"
            stroke-linecap="round">
            <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
    </div>
);

export const MaximizeRestoreIcon = ({ color = 'currentColor', size = 18 }) => {
    const [isMaximized, setIsMaximized] = useState(false);
    useEffect(() => {
        const updateState = async () => {
            const maximized = await appWindow.isMaximized();
            setIsMaximized(maximized);
        };
        updateState();
        const unlisten = appWindow.onResized(() => {
            updateState();
        });
        return () => {
            unlisten.then((f) => f());
        };
    }, []);
    return (
        <>
            {isMaximized ? (
                <div className="restore-icon" onClick={toggleMaximizeWindow}>
                    <svg width={size} height={size}
                        viewBox="0 0 24 24" fill="none"
                        stroke={color} stroke-width="2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 8H4v12h12v-4" />
                        <path d="M12 4h8v8h-8z" />
                    </svg>
                </div>
            ) : (
                <div className="maximize-icon" onClick={toggleMaximizeWindow}>
                    <svg width={size} height={size}
                        viewBox="0 0 24 24" fill="none"
                        stroke={color} stroke-width="2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="5"
                            width="14" height="14" rx="2" ry="2" />
                    </svg>
                </div>
            )}
        </>
    );
};

export const CloseIcon = ({ color = 'currentColor', size = 18 }) => (
    <div className="close-icon" onClick={closeWindow}>
        <svg width={size} height={size}
            viewBox="0 0 24 24" fill="none"
            stroke={color} stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    </div>
);

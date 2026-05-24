import { getCurrentWindow } from '@tauri-apps/api/window'

export default function WindowControls() {
  if (window?.__TAURI_EVENT_PLUGIN_INTERNALS__) {
    return (
      <div className="window-controls">
        <MinimizeIcon />
        <MaximizeIcon />
        <CloseIcon />
      </div>
    )
  }
  return <></>
}

const minimize = async () => (await getCurrentWindow()).minimize()
const toggleMaximize = async () => await getCurrentWindow().toggleMaximize()
const close = async () => await getCurrentWindow().close()

function MinimizeIcon() {
  return (
    <div className="minimize-icon" onClick={minimize}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </div>
  )
}

function MaximizeIcon() {
  return (
    <div className="maximize-icon" onClick={toggleMaximize}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="5" width="14" height="14" rx="2" ry="2" />
      </svg>
    </div>
  )
}

function CloseIcon() {
  return (
    <div className="close-icon" onClick={close}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </div>
  )
}

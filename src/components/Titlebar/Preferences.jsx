import "./Preferences.css"

export default function Preferences() {
  return (
    <div className="preferences wrapper" data-tauri-drag-region>
      <div className="preference-icon">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="5" cy="12" r="1.5" fill="currentColor" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        <circle cx="19" cy="12" r="1.5" fill="currentColor" />
      </svg></div>
    </div>
  )
}

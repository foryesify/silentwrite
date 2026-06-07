import './Preferences.css'

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
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="6" y1="7" x2="18" y2="7" />
          <line x1="6" y1="12" x2="18" y2="12" />
          <line x1="6" y1="17" x2="18" y2="17" />
        </svg>
      </div>
    </div>
  )
}

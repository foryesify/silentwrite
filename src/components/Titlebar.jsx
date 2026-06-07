import './Titlebar.css'
import Preferences from './Titlebar/Preferences'
import Title from './Titlebar/Title'
import WindowControls from './Titlebar/WindowControls'

export default function Titlebar() {
  return (
    <div className="titlebar">
      <div className="preferences">
        <Preferences />
      </div>
      <div className="title">
        <Title />
      </div>
      <div className="window-controls">
        <WindowControls />
      </div>
    </div>
  )
}

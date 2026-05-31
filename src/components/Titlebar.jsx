import Preferences from './Preferences'
import Title from './Title'
import WindowControls from './WindowControls'

export default function Titlebar() {
  return (
    <div className="titlebar">
      <div className="window-controls">
        <WindowControls />
      </div>
      <div className="flex-1">
        <Title />
      </div>
      <div className="flex-0">
        <Preferences />
      </div>
    </div>
  )
}

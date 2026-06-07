import './Title.css'
import {title} from '@/global'
export default function Title() {
  return (
    <div className="title wrapper" data-tauri-drag-region>
      <div className="text" data-tauri-drag-region>
        {title.value}
      </div>
    </div>
  )
}

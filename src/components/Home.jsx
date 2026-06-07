import './Home.css'
import i18n from '@/assets/i18n.json'
import { lang } from '@/global'

export default function Home() {
  return (
    <div className="home">
      <div className="main">
        <div className="title-welcome">
          {i18n[lang.value]['home']['title-welcome']}
        </div>
        <div className="brief-intro">
          {i18n[lang.value]['home']['brief-intro']}
        </div>
        <div className="buttons">
          <div className="new-essay button">
            {i18n[lang.value]['home']['new-essay']}
          </div>
          <div className="open-library button">
            {i18n[lang.value]['home']['open-library']}
          </div>
        </div>
      </div>
    </div>
  )
}

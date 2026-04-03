import "@/assets/HomeView.css"
import { gText } from "@/global/public"

export default function HomeView() {
    return (
        <div className="homeview">
            <div className="main-card">
                <div className="title">{gText.value.homeTitle}</div>
                <div className="function-area">
                    <div className="button new-essay">
                        {gText.value.homeNewEssay}
                    </div>
                </div>
            </div>
        </div>
    )
}

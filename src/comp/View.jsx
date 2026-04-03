import HomeView from "./View/HomeView"
import EditorView from "./View/EditorView"
import { gRoute } from "@/global/public"

export default function View() {
    if (gRoute.value == "/") {
        return <HomeView />
    } else if (gRoute.value == "/#editor") {
        return <EditorView />
    }
}

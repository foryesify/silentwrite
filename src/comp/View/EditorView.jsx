import "@/assets/EditorView.css"

export default function EditorView() {
    return (
        <div className="editorview">
            <div className="editor"  contentEditable="true"></div>
            <div className="corner-button"></div>
        </div>
    )
}

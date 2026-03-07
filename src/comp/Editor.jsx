import { useEffect, useRef } from 'preact/hooks';
import { EditorView, basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { tags as t } from "@lezer/highlight";

const myHighlightStyle = HighlightStyle.define([
    { tag: t.heading1, fontSize: "1.5em", fontWeight: "bold", color: "#2c3e50" },
    { tag: t.heading2, fontSize: "1.3em", fontWeight: "bold", color: "#2c3e50" },
    { tag: t.meta, color: "#95a5a6" },             // YAML Frontmatter 标记 (---)
    { tag: t.keyword, color: "#e74c3c" },          // YAML 键名
    { tag: t.atom, color: "#2980b9" },             // YAML 布尔值/常数
    { tag: t.string, color: "#27ae60" },           // 文本字符串
    { tag: t.link, color: "#3498db", textDecoration: "underline" },
    { tag: t.emphasis, fontStyle: "italic" },
    { tag: t.strong, fontWeight: "bold" },
    { tag: t.strikethrough, textDecoration: "line-through" },
]);

const myEditorTheme = EditorView.theme({
    "&": {
        height: "100%",
        background: "transparent",
        border: "1px solid #ddd",
        borderRadius: "8px"
    },
    "&.cm-focused": {
        outline: "none",
        borderColor: "#3498db"
    },
    ".cm-content": {
        fontFamily: "'Fira Code', monospace",
        padding: "20px"
    },
    ".cm-gutters": {
        backgroundColor: "#f8f9fa",
        color: "#adb5bd",
        borderRight: "1px solid #eee"
    },
    ".cm-activeLine": {
        backgroundColor: "#f0f7ff"
    },
    ".cm-activeLineGutter": {
        backgroundColor: "#e0efff",
        color: "#3498db",
    },
});

// --- 3. Preact 组件 ---
export const MarkdownEditor = ({ value, onChange }) => {
    const editorRef = useRef(null);
    const viewRef = useRef(null);

    useEffect(() => {
        // 确保只初始化一次
        if (!editorRef.current) return;

        const state = EditorState.create({
            doc: value || "",
            extensions: [
                basicSetup,
                // Markdown 混合 YAML 解析
                markdown({
                    base: markdownLanguage,
                    codeLanguages: languages,
                }),
                // 注入自定义 UI 样式
                myEditorTheme,
                // 注入自定义高亮颜色
                syntaxHighlighting(myHighlightStyle),
                // 监听变化
                EditorView.updateListener.of((v) => {
                    if (v.docChanged && onChange) {
                        onChange(v.state.doc.toString());
                    }
                }),
            ],
        });

        const view = new EditorView({
            state,
            parent: editorRef.current,
        });

        viewRef.current = view;

        return () => view.destroy(); // 卸载时销毁
    }, []);

    return <div ref={editorRef} style={{ height: "500px" }} />;
};

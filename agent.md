---
name: SilentWrite instructions
applyTo: 'src/**/*'
---

# Purpose
Provide project context and coding guidelines that AI assistants should follow when generating code, answering questions, or reviewing changes for the SilentWrite repository.

# Project context
SilentWrite is a minimal Markdown writing tool (preact + codemirror6) focused on a quiet, focused UX. Key components: main.jsx, global.jsx (preact signals), Editor.jsx (CodeMirror6), UI pieces (Titlebar, WindowControls, Menu, Library, Settings).

# When to load
Load these instructions for any change that touches UI, editor, global state, or build/config files.

# Coding guidelines
- Prefer small, surgical changes; avoid unrelated edits.
- Follow existing patterns: Preact + JSX, preact signals for global state, CodeMirror6 for editor.
- Use Windows-style paths in scripts and documentation examples when applicable.
- Keep component APIs minimal and testable; place shared utilities in src/lib or src/utils.
- Add tests only when repo already contains tests; don't introduce new test frameworks.
- Do not commit secrets or credentials.

# Commits & PRs
- Commit messages should be concise and include the required trailer:
  Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>

# Agent behavior
- When asked about identity: state "I am an AI assistant using Copilot CLI runtime in VS Code." and the model: "I'm powered by GPT-5 mini (model ID: gpt-5-mini)."
- Use these instructions to prioritize minimal-invasive edits and maintain the repo's current style.

# Notes
Refer to README.md for high-level TODOs and UI component list. If in doubt about scope, ask for clarification before implementing.

# Introduction
- main.jsx 渲染整个页面，可能再附加一点运行时环境变量在window上
- global.jsx 用preact signals存储全局变量，供各种组件调取，相当于简易的全局状态管理
  - lang 选项zh-CN, zh-TW, en-US，全局语言
- Menu.jsx 菜单基础组件，用于右键菜单、首选项菜单
- Msgbox.jsx 信息框基础组件
- Titlebar.jsx 实现窗口的标题栏区域，一个flex布局的东西，position fixed top 0
  附带自动隐藏显示功能，hover立即显示，移走鼠标之后1s就隐藏
  width 100% height 32px background var(--bg-color)
  - WindowControls.jsx 分别实现Windows和MacOS的窗口控制按钮
    如果Windows风格就位于右侧，MaxOS就位于左侧
  - Title.jsx 实现拖动窗口功能，以及显示标题
    位于中间
  - Prefernces.jsx 首选项菜单按钮，图标为三条横杠，点击后弹出首选项菜单
    与WindowControls位于相反的位置
- Editor.jsx 编辑器核心组件，用codemirror6写的，位于页面中心
- Library.jsx 文章库，增删查改各种功能
- Home.jsx 起始页
- Rightclick.jsx 右键菜单
- Settings.jsx 设置


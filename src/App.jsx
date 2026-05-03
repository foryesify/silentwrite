import { useEffect } from "react";
import WindowButtons from "./components/WindowButtons";

export default function App() {
  const style = {
    transition: 'opacity 0.1s ease-in',
    opacity: '0',
    width: '100dvw',
    height: '100dvh',
  }
  useEffect(() => {
      document.getElementById('app').style.opacity = '1'
      document.getElementById('app').style.background = 'var(--bg-color)'
  }, [])
  return (
    <div id="app" style={style}>
      <WindowButtons />
    </div>
  );
}

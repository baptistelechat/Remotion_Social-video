import { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import "./App.css";
import Control from "./components/Control";

function App() {
  const [title, setTitle] = useState("World");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#3C2945");
  const [accentColor, setAccentColor] = useState("#9820D1");

  return (
    <div className="app">
      <Control
        title={title}
        setTitle={setTitle}
        bgColor={bgColor}
        setBgColor={setBgColor}
        textColor={textColor}
        setTextColor={setTextColor}
        accentColor={accentColor}
        setAccentColor={setAccentColor}
      />
      <VideoPlayer
        title={title}
        theme={{
          bgColor,
          textColor,
          accentColor,
        }}
      />
    </div>
  );
}

export default App;

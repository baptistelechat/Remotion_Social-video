import { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import "./App.css";
import Control from "./components/Control";

function App() {
  const [title, setTitle] = useState("World");
  const [bgColor, setBgColor] = useState("aliceblue");

  return (
    <div className="app">
      <Control
        title={title}
        setTitle={setTitle}
        bgColor={bgColor}
        setBgColor={setBgColor}
      />
      <VideoPlayer title={title} bgColor={bgColor}/>
    </div>
  );
}

export default App;

import { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import "./App.css";
import Control from "./components/Control";

function App() {
  const [bookType, setBookType] = useState("Mangas");
  const [userName, setUserName] = useState("JohnDoe");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#3C2945");
  const [accentColor, setAccentColor] = useState("#9820D1");
  const [safeZone, setSafeZone] = useState(true);

  return (
    <div className="app">
      <Control
        bookType={bookType}
        setBookType={setBookType}
        userName={userName}
        setUserName={setUserName}
        bgColor={bgColor}
        setBgColor={setBgColor}
        textColor={textColor}
        setTextColor={setTextColor}
        accentColor={accentColor}
        setAccentColor={setAccentColor}
        safeZone={safeZone}
        setSafeZone={setSafeZone}
      />
      <VideoPlayer
        userName={userName}
        bookType={bookType}
        theme={{
          bgColor,
          textColor,
          accentColor,
        }}
        safeZone={safeZone}
      />
    </div>
  );
}

export default App;

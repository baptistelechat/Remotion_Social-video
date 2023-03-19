import { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import "./App.css";
import Control from "./components/Control";
import { BookHashtags } from "./data/constants/BookHashtags";
import Prompt from "./components/Prompt";

function App() {
  const [bookType, setBookType] = useState("Mangas");
  const [hashtagsList, setHashtagsList] = useState(BookHashtags);
  const [hashtags, setHashtags] = useState<string[]>([]);
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
        hashtagsList={hashtagsList}
        setHashtagsList={setHashtagsList}
        hashtags={hashtags}
        setHashtags={setHashtags}
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
        hashtags={hashtags}
        theme={{
          bgColor,
          textColor,
          accentColor,
        }}
        safeZone={safeZone}
      />
      <Prompt
        bookType={bookType}
        hashtags={hashtags}
        userName={userName}
        bgColor={bgColor}
        textColor={textColor}
        accentColor={accentColor}
      />
    </div>
  );
}

export default App;

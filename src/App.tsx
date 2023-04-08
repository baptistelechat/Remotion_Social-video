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
  const [gif1, setGif1] = useState(
    "https://media2.giphy.com/media/Qyml5wziJeHreuOdzu/giphy.gif?cid=101f51ddtlww235h46itahp398pqkrg0prcyyyez9w3qjuej&rid=giphy.gif&ct=s"
  );
  const [gif2, setGif2] = useState(
    "https://media3.giphy.com/media/Q7pDtp0bIvJFgRsHHN/giphy.gif?cid=101f51ddtlww235h46itahp398pqkrg0prcyyyez9w3qjuej&rid=giphy.gif&ct=s"
  );
  const [gif3, setGif3] = useState(
    "https://media4.giphy.com/media/ge9Ep3RJLGlNEn0UfC/giphy.gif?cid=101f51ddtlww235h46itahp398pqkrg0prcyyyez9w3qjuej&rid=giphy.gif&ct=s"
  );

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
        setGif1={setGif1}
        setGif2={setGif2}
        setGif3={setGif3}
      />
      <VideoPlayer
        userName={userName}
        bookType={bookType}
        hashtags={hashtags}
        gifs={[gif1, gif2, gif3]}
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
        gif1={gif1}
        gif2={gif2}
        gif3={gif3}
      />
    </div>
  );
}

export default App;

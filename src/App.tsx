import { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import "./App.css";
import Control from "./components/Control";
import { BookHashtags } from "./data/constants/BookHashtags";
import Prompt from "./components/Prompt";
import { useDisclosure } from "@mantine/hooks";
import { Button } from "@mantine/core";
import { IconTerminal2 } from "@tabler/icons-react";

function App() {
  const [bookName, setBookName] = useState("Lorem Ipsum");
  const [author, setAuthor] = useState("John Doe");
  const [image1, setImage1] = useState(
    "https://picsum.photos/seed/manga/1080/1920"
  );
  const [image2, setImage2] = useState(
    "https://picsum.photos/seed/manga/1080/1920"
  );
  const [price, setPrice] = useState("99.55");
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
  const [gif4, setGif4] = useState(
    "https://media4.giphy.com/media/dup6jDyj6Yk6z5M8nN/giphy.gif?cid=101f51ddte6iw3ov1vw449uc6xiab3vpkktse5njjssvvz9i&rid=giphy.gif&ct=s"
  );

  const [openedModal, { open, close }] = useDisclosure(false);

  return (
    <div className="app">
      <Control
        userName={userName}
        setUserName={setUserName}
        bookName={bookName}
        setBookName={setBookName}
        author={author}
        setAuthor={setAuthor}
        image1={image1}
        setImage1={setImage1}
        image2={image2}
        setImage2={setImage2}
        price={price}
        setPrice={setPrice}
        bookType={bookType}
        setBookType={setBookType}
        hashtagsList={hashtagsList}
        setHashtagsList={setHashtagsList}
        hashtags={hashtags}
        setHashtags={setHashtags}
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
        setGif4={setGif4}
      />
      <div className="videoContainer">
        <VideoPlayer
          userName={userName}
          bookInfo={{
            title: bookName,
            author: author,
            images: [image1, image2],
            price: price,
          }}
          bookType={bookType}
          hashtags={hashtags}
          gifs={[gif1, gif2, gif3, gif4]}
          theme={{
            bgColor,
            textColor,
            accentColor,
          }}
          safeZone={safeZone}
        />
        <Button leftIcon={<IconTerminal2 />} onClick={open}>
          Afficher le Prompt
        </Button>
      </div>
      <Prompt
        userName={userName}
        bookName={bookName}
        author={author}
        image1={image1}
        image2={image2}
        price={price}
        bookType={bookType}
        hashtags={hashtags}
        bgColor={bgColor}
        textColor={textColor}
        accentColor={accentColor}
        gif1={gif1}
        gif2={gif2}
        gif3={gif3}
        gif4={gif4}
        openedModal={openedModal}
        openModal={open}
        closeModal={close}
      />
    </div>
  );
}

export default App;

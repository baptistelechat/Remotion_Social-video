import { AbsoluteFill, Sequence, Img } from "remotion";
import "../../assets/style/Video.css";
import { IVideo } from "../../data/interfaces/IVideo";
import Gifs from "./components/Gifs";
import Hashtags from "./components/Hashtags";
import NewBookTitle from "./components/NewBookTitle";
import UserName from "./components/UserName";
import SellBook from "./components/SellBook";
import BookImages from "./components/BookImages";
import SellBookGif from "./components/SellBookGif";

const Video = (props: IVideo) => {
  return (
    <AbsoluteFill
      id="video"
      style={{
        color: props.theme.textColor,
        backgroundColor: props.theme.accentColor,
      }}
    >
      {props.safeZone ? (
        <div id="safeZoneContainer">
          <div id={"topSafeZone"} />
          <div id={"rightSafeZone"} />
          <div id={"bottomSafeZone"} />
        </div>
      ) : (
        <></>
      )}
      <div
        id={"innerBackground"}
        style={{
          backgroundColor: props.theme.bgColor,
        }}
      >
        <Sequence from={0} layout="none">
          <NewBookTitle
            bookType={props.bookType}
            gradient={{
              from: props.theme.textColor,
              to: props.theme.accentColor,
            }}
          />
        </Sequence>

        <Sequence from={7.5} layout="none">
          <Gifs gifs={props.gifs} />
        </Sequence>

        <Sequence from={15} layout="none">
          <Hashtags
            textColor={props.theme.textColor}
            accentColor={props.theme.accentColor}
            hashtags={props.hashtags}
          />
        </Sequence>

        <Sequence from={30} layout="none">
          <UserName
            userName={props.userName}
            accentColor={props.theme.accentColor}
          />
        </Sequence>

        <Sequence from={150} layout="none">
          <SellBook
            title={props.bookInfo.title}
            author={props.bookInfo.author}
            textColor={props.theme.textColor}
          />
        </Sequence>
        <Sequence from={165} layout="none">
          <BookImages images={props.bookInfo.images} />
        </Sequence>

        <Sequence from={180} layout="none">
          <SellBookGif gif={props.gifs[3]} />
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};

export default Video;

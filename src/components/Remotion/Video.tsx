import { AbsoluteFill, Sequence } from "remotion";
import "../../assets/style/Video.css";
import { IVideo } from "../../data/interfaces/IVideo";
import NewBookTitle from "./components/NewBookTitle";
import UserName from "./components/UserName";

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
        <>
          <div id={"topSafeZone"} />
          <div id={"rightSafeZone"} />
          <div id={"bottomSafeZone"} />
        </>
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

        <Sequence from={30} layout="none">
          <UserName
            userName={props.userName}
            accentColor={props.theme.accentColor}
          />
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};

export default Video;

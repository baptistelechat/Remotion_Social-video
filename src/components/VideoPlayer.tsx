import { Player } from "@remotion/player";
import { IVideo } from "../data/interfaces/IVideo";
import Video from "./Remotion/Video";

const VideoPlayer = (props: IVideo) => {
  return (
    <Player
      component={Video}
      inputProps={{
        title: props.title,
        theme: {
          bgColor: props.theme.bgColor,
          textColor: props.theme.textColor,
          accentColor: props.theme.accentColor,
        },
      }}
      durationInFrames={90}
      compositionWidth={1080}
      compositionHeight={1920}
      fps={30}
      style={{
        width: 1080 / 3,
        height: 1920 / 3,
      }}
      controls
      loop
    />
  );
};

export default VideoPlayer;

import { Player } from "@remotion/player";
import Video from "./Remotion/Video";

interface IVideoProps {
  title: string;
  bgColor: string;
}

const VideoPlayer = (props: IVideoProps) => {
  return (
    <Player
      component={Video}
      inputProps={{ title: props.title, bgColor: props.bgColor }}
      durationInFrames={90}
      compositionWidth={1920}
      compositionHeight={1080}
      fps={30}
      style={{
        width: 1920 / 4,
        height: 1080 / 4,
      }}
      // controls
      loop
    />
  );
};

export default VideoPlayer;

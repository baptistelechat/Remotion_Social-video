import {
  AbsoluteFill,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import "../../assets/style/video.css";
import { IVideo } from "../../data/interfaces/IVideo";

const Video = (props: IVideo) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    fps,
    frame,
  });
  return (
    <AbsoluteFill
      id="video"
      style={{
        color: props.theme.textColor,
        backgroundColor: props.theme.bgColor,
      }}
    >
      <h1
        style={{
          transform: `scale(${scale})`,
        }}
      >
        Hello {props.title}!
      </h1>
      <p
        style={{
          color: props.theme.accentColor,
        }}
      >
        Sous-titre
      </p>
    </AbsoluteFill>
  );
};

export default Video;

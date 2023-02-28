import {
  AbsoluteFill,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import "../../assets/style/video.css";

interface IVideoProps {
  title: string;
  bgColor: string;
}

const Video = (props: IVideoProps) => {
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
        backgroundColor: props.bgColor,
      }}
    >
      <h1
        style={{
          transform: `scale(${scale})`,
        }}
      >
        Hello {props.title}!
      </h1>
    </AbsoluteFill>
  );
};

export default Video;

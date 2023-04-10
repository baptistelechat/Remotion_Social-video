import { Text } from "@mantine/core";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface IHashtagsProps {
  textColor: string;
  accentColor: string;
  hashtags: string[];
}

const Hashtags = (props: IHashtagsProps) => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();

  const scale = spring({
    fps,
    frame,
  });

  const translateXGifLeft = interpolate(frame, [0, 300, 315], [0, 0, -width], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      id="hashtags"
      style={{
        transform: `scale(${scale}) translateX(${translateXGifLeft}px)`,
      }}
    >
      {props.hashtags.map((hashtag, index) => (
        <Text
          key={hashtag}
          color={index % 2 === 0 ? props.accentColor : props.textColor}
        >
          #{hashtag}
        </Text>
      ))}
    </div>
  );
};

export default Hashtags;

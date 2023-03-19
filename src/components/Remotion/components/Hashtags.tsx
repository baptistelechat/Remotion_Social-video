import { Text } from "@mantine/core";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

interface IHashtagsProps {
  textColor: string;
  accentColor: string;
  hashtags: string[];
}

const Hashtags = (props: IHashtagsProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    fps,
    frame,
  });

  return (
    <div
      id="hashtags"
      style={{
        transform: `scale(${scale})`,
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

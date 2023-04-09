import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Gif } from "@remotion/gif";
import { Text } from "@mantine/core";

interface ISellBookGifProps {
  gif: string;
}

const SellBookGif = (props: ISellBookGifProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    fps,
    frame: frame,
  });

  return (
    <img
      id="gif4"
      src={props.gif}
      style={{
        transform: `scale(${scale}) `,
      }}
    />
  );
};

export default SellBookGif;

import { Text, ThemeIcon } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface ISellBookProps {
  title: string;
  author: string;
  textColor: string;
}

const SellBook = (props: ISellBookProps) => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();

  const scale = spring({
    fps,
    frame,
  });

  const translateXGifLeft = interpolate(frame, [0, 165, 180], [0, 0, -width], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      id="bookInfo"
      style={{
        transform: `scale(${scale}) translateX(${translateXGifLeft}px)`,
      }}
    >
      <ThemeIcon id="bookInfoIcon" radius={"100%"} color={props.textColor}>
        <IconBookmark size={"50px"} />
      </ThemeIcon>
      <div className="bookInfoContainer">
        <Text id="bookInfoTitle" color={props.textColor}>
          {props.title}
        </Text>
        <Text id="bookInfoAuthor" color={props.textColor}>
          {props.author}
        </Text>
      </div>
    </div>
  );
};

export default SellBook;

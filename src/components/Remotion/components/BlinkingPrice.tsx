import { Text } from "@mantine/core";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface IBlinkingPriceProps {
  price: string;
  gradient: {
    from: string;
    to: string;
    angle?: number;
  };
}

const BlinkingPrice = (props: IBlinkingPriceProps) => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();

  const scale = spring({
    fps,
    frame,
  });

  const translateXGifLeft = interpolate(frame, [0, 150, 165], [0, 0, -width], {
    extrapolateRight: "clamp",
  });

  return (
    <Text
      id="bookInfoPrice"
      variant="gradient"
      gradient={{ from: props.gradient.from, to: props.gradient.to, deg: 45 }}
      style={{
        transform: `scale(${scale}) translateX(${translateXGifLeft}px)`,
      }}
    >
      {`${props.price} €`}
    </Text>
  );
};

export default BlinkingPrice;

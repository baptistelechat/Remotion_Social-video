import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface ISellBookGifProps {
  gif: string;
}

const SellBookGif = (props: ISellBookGifProps) => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();

  const translateXGifRight = interpolate(frame, [0, 150, 165], [0, 0, width], {
    extrapolateRight: "clamp",
  });

  const scale = spring({
    fps,
    frame: frame,
  });

  return (
    <img
      id="gif4"
      src={props.gif}
      style={{
        transform: `scale(${scale}) translateX(${translateXGifRight}px)`,
      }}
    />
  );
};

export default SellBookGif;

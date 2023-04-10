import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Gif } from "@remotion/gif";

interface IGifsProps {
  gifs: string[];
}

const Gifs = (props: IGifsProps) => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();

  const scale = spring({
    fps,
    frame,
  });

  const translateXGifRight = interpolate(frame, [0, 115, 130], [0, 0, width], {
    extrapolateRight: "clamp",
  });

  const translateXGifLeft = interpolate(frame, [0, 115, 130], [0, 0, -width], {
    extrapolateRight: "clamp",
  });

  return (
    <div id="gifs">
      <img
        id="gif1"
        src={props.gifs[0]}
        height={300}
        style={{
          transform: `scale(${scale}) translateX(${translateXGifRight}px)`,
        }}
      />
      <img
        id="gif2"
        src={props.gifs[1]}
        height={300}
        style={{
          transform: `scale(${scale}) translateX(${translateXGifLeft}px)`,
        }}
      />
      <img
        id="gif3"
        src={props.gifs[2]}
        height={300}
        style={{
          transform: `scale(${scale}) translateX(${translateXGifRight}px)`,
        }}
      />
    </div>
  );
};

export default Gifs;

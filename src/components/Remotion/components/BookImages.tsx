import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
interface IBookImages {
  images: string[];
}

const BookImages = (props: IBookImages) => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();

  const scale = spring({
    fps,
    frame,
  });

  const translateXGifLeft = interpolate(frame, [0, 150, 165], [0, 0, -width], {
    extrapolateRight: "clamp",
  });

  const translateXGifRight = interpolate(frame, [0, 150, 165], [0, 0, width], {
    extrapolateRight: "clamp",
  });

  return (
    <div id="bookImageContainer">
      <img
        id="image1"
        src={props.images[0]}
        alt="book image 1"
        style={{
          transform: `scale(${scale}) translateX(${translateXGifLeft}px)`,
        }}
      />
      <img
        id="image2"
        src={props.images[1]}
        alt="book image 2"
        style={{
          transform: `scale(${scale}) translateX(${translateXGifRight}px)`,
        }}
      />
    </div>
  );
};

export default BookImages;

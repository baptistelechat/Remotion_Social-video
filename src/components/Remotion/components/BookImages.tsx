import { spring, useCurrentFrame, useVideoConfig } from "remotion";
interface IBookImages {
  images: string[];
}

const BookImages = (props: IBookImages) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    fps,
    frame,
  });

  return (
    <div id="bookImageContainer">
      <img
        id="image1"
        src={props.images[0]}
        alt="book image 1"
        style={{
          transform: `translate(-20px) scale(${scale})`,
        }}
      />
      <img
        id="image2"
        src={props.images[1]}
        alt="book image 2"
        style={{
          transform: `translate(-20px) scale(${scale})`,
        }}
      />
    </div>
  );
};

export default BookImages;

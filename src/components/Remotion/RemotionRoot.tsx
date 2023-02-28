import { Composition } from "remotion";
import Video from "./Video";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        component={Video}
        durationInFrames={90}
        width={1920}
        height={1080}
        fps={30}
        id="Video"
        defaultProps={{ title: "World", bgColor: "red" }}
      />
      <Composition
        component={Video}
        durationInFrames={90}
        width={1920}
        height={1080}
        fps={30}
        id="Video2"
        defaultProps={{ title: "World", bgColor: "red" }}
      />
    </>
  );
};

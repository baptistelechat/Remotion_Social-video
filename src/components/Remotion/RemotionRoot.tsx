import { Composition } from "remotion";
import Video from "./Video";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        component={Video}
        durationInFrames={90}
        width={1080}
        height={1920}
        fps={30}
        id="Video"
        defaultProps={{
          userName: "UserName",
          theme: {
            bgColor: "#ffffff",
            textColor: "#293845",
            accentColor: "#26c9d1",
          },
          safeZone: true,
        }}
      />
    </>
  );
};

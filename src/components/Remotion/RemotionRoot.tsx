import { Composition } from "remotion";
import Video from "./Video";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        component={Video}
        durationInFrames={6 * 30}
        width={1080}
        height={1920}
        fps={30}
        id="Video"
        defaultProps={{
          userName: "UserName",
          bookType: "Mangas",
          hashtags: ["Lorem", "Ipsum"],
          gifs: [
            "https://media2.giphy.com/media/Qyml5wziJeHreuOdzu/giphy.gif?cid=101f51ddtlww235h46itahp398pqkrg0prcyyyez9w3qjuej&rid=giphy.gif&ct=s",
            "https://media3.giphy.com/media/Q7pDtp0bIvJFgRsHHN/giphy.gif?cid=101f51ddtlww235h46itahp398pqkrg0prcyyyez9w3qjuej&rid=giphy.gif&ct=s",
            "https://media4.giphy.com/media/ge9Ep3RJLGlNEn0UfC/giphy.gif?cid=101f51ddtlww235h46itahp398pqkrg0prcyyyez9w3qjuej&rid=giphy.gif&ct=s",
          ],
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

import { Composition } from "remotion";
import Video from "./Video";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        component={Video}
        durationInFrames={10 * 30}
        width={1080}
        height={1920}
        fps={30}
        id="Video"
        defaultProps={{
          userName: "UserName",
          bookInfo: {
            title: "LoremIpsum LoremIpsum LoremIpsum",
            author: "John Doe",
            images: [
              "https://picsum.photos/seed/manga/1080/1920",
              "https://picsum.photos/1080,1920",
            ],
          },
          bookType: "Mangas",
          hashtags: ["Lorem", "Ipsum"],
          gifs: [
            "https://media2.giphy.com/media/Qyml5wziJeHreuOdzu/giphy.gif?cid=101f51ddtlww235h46itahp398pqkrg0prcyyyez9w3qjuej&rid=giphy.gif&ct=s",
            "https://media3.giphy.com/media/Q7pDtp0bIvJFgRsHHN/giphy.gif?cid=101f51ddtlww235h46itahp398pqkrg0prcyyyez9w3qjuej&rid=giphy.gif&ct=s",
            "https://media4.giphy.com/media/ge9Ep3RJLGlNEn0UfC/giphy.gif?cid=101f51ddtlww235h46itahp398pqkrg0prcyyyez9w3qjuej&rid=giphy.gif&ct=s",
            "https://media4.giphy.com/media/dup6jDyj6Yk6z5M8nN/giphy.gif?cid=101f51ddte6iw3ov1vw449uc6xiab3vpkktse5njjssvvz9i&rid=giphy.gif&ct=s",
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

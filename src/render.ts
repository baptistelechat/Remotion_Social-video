import { bundle } from "@remotion/bundler";
import {
  getCompositions,
  renderMedia,
  RenderMediaOnProgress,
} from "@remotion/renderer";
import path from "path";
import { IVideo } from "./data/interfaces/IVideo";

const prompt: IVideo = {
  userName: "Himufi",
  bookInfo: {
    title: "Saint Seiya Dark Wing - Tome 1",
    author: "Masami Kurumada, Kenji Saito",
    images: [
      "https://images1.vinted.net/t/02_01342_5FRebtYKDNG1BQKhwCbsQE7H/f800/1679654713.jpeg?s=dbcc73e7efb3f585d8836b061222b2f54a46b912",
      "https://images1.vinted.net/t/03_002da_bu1wiQ81fTfzy8t2zGcPhshn/f800/1679654713.jpeg?s=6d8c2d394b0b5d22267d7f8fc60a93c5c777ab9d",
    ],
    price: "99.55",
  },
  bookType: "Mangas",
  hashtags: ["Shonens", "MangaLovers", "MangaCollection"],
  gifs: [
    "https://media0.giphy.com/media/XSmHWLpvdycR6xukzC/giphy.gif?cid=101f51ddrbkz0soejhx906858tfdop4g6e264ozb318h1cl3&rid=giphy.gif&ct=s",
    "https://media2.giphy.com/media/WP2r0a9qMP2yBtqwKa/giphy.gif?cid=101f51dd9enq8ilgl16qmfetw9wf2gaduvfrzyknqkqhu0cf&rid=giphy.gif&ct=s",
    "https://media3.giphy.com/media/sJygYsK2pQ65vMrWcv/giphy.gif?cid=101f51dd9enq8ilgl16qmfetw9wf2gaduvfrzyknqkqhu0cf&rid=giphy.gif&ct=s",
    "https://media3.giphy.com/media/MasfNVDb2lkeB44QIC/giphy.gif?cid=101f51ddrbkz0soejhx906858tfdop4g6e264ozb318h1cl3&rid=giphy.gif&ct=s",
  ],
  theme: {
    bgColor: "#ffffff",
    textColor: "#3C2945",
    accentColor: "#ed6145",
  },
  safeZone: false,
};

export const render = async () => {
  // The composition you want to render
  const compositionId = "Video";
  // You only have to do this once, you can reuse the bundle.
  const entry = "./src/components/Remotion/index.ts";
  console.log("Creating a Webpack bundle of the video");
  const onProgressWebPack = (progress: number) => {
    console.log(`Webpack bundling progress: ${progress}%`);
  };
  const bundleLocation = await bundle(
    path.resolve(entry),
    (progress) => onProgressWebPack(progress),
    {
      // If you have a Webpack override, make sure to add it here
      webpackOverride: (config) => config,
    }
  );

  // Parametrize the video by passing arbitrary props to your component.
  const inputProps = prompt;
  // Extract all the compositions you have defined in your project
  // from the webpack bundle.
  const comps = await getCompositions(bundleLocation, {
    // You can pass custom input props that you can retrieve using getInputProps()
    // in the composition list. Use this if you want to dynamically set the duration or
    // dimensions of the video.
    inputProps,
  });
  // Select the composition you want to render.
  const composition = comps.find((c) => c.id === compositionId);
  // Ensure the composition exists
  if (!composition) {
    throw new Error(`No composition with the ID ${compositionId} found.
  Review "${entry}" for the correct ID.`);
  }
  const outputLocation = `out/${compositionId}.mp4`;

  const onProgressRenderMedia: RenderMediaOnProgress = ({ progress }) => {
    console.log(`Rendering is ${progress * 100}% complete`);
  };

  console.log("Attempting to render:", outputLocation);
  await renderMedia({
    composition,
    serveUrl: bundleLocation,
    codec: "h264",
    outputLocation,
    inputProps,
    onProgress: (progress) => onProgressRenderMedia(progress),
  });
  console.log("Render done!");
};

render();

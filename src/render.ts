import { bundle } from "@remotion/bundler";
import {
  getCompositions,
  renderMedia,
  RenderMediaOnProgress,
} from "@remotion/renderer";
import path from "path";
import { IVideo } from "./data/interfaces/IVideo";

const prompt: IVideo = {
  bookType: "Mangas",
  hashtags: ["Lorem", "Ipsum"],
  userName: "JohnDoe",
  theme: {
    bgColor: "#ffffff",
    textColor: "#3C2945",
    accentColor: "#9820D1",
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

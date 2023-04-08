import { useState } from "react";
import { TextInput, Select, ActionIcon, Group, Radio } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IGif } from "../../utils/interface/IGif";
import { IconSearch } from "@tabler/icons-react";

interface IGiphySearch {
  label: string;
  setGifs: React.Dispatch<React.SetStateAction<string>>;
}

const GiphySearch = (props: IGiphySearch) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [gifType, setGifType] = useState("gifs");
  const [gifsList, setGifsList] = useState([]);

  const handleSearch = async () => {
    const api_key = import.meta.env.VITE_GIPHY_API_KEY;
    const response = await fetch(
      `https://api.giphy.com/v1/${gifType}/search?api_key=${api_key}&q=${searchTerm}&limit=20`
    );
    const json = await response.json();
    console.log(json.data);
    setGifsList(json.data);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.25rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          gap: "0.5rem",
        }}
      >
        <TextInput
          label={props.label}
          placeholder="Search for GIFs"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          // onKeyPress={(event) => {
          //   if (event.key === "Enter") {
          //     handleSearch();
          //   }
          // }}
        />
        <ActionIcon variant="filled" size={"lg"} onClick={handleSearch}>
          <IconSearch size="1.125rem" />
        </ActionIcon>
      </div>

      <Radio.Group
        value={gifType}
        onChange={(value: string) => setGifType(value)}
        style={{
          marginBottom: "1rem",
        }}
      >
        <Group mt="xs">
          <Radio value="gifs" label="Gifs" />
          <Radio value="stickers" label="Stickers" />
        </Group>
      </Radio.Group>

      {gifsList.length !== 0 ? (
        <Carousel
          height={125}
          slideGap="sm"
          controlsOffset="xs"
          align={"center"}
          withControls={false}
          dragFree
          loop
          style={{
            marginBottom: gifsList.length !== 0 ? "1rem" : 0,
          }}
        >
          {gifsList.map((gif: IGif) => (
            <Carousel.Slide
              key={gif.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={gif.images.original.url}
                alt={gif.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
                onClick={() => props.setGifs(gif.images.original.url)}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      ) : (
        <></>
      )}
    </div>
  );
};

export default GiphySearch;

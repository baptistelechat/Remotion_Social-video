import {
  TextInput,
  ColorInput,
  Switch,
  Select,
  MultiSelect,
} from "@mantine/core";
import "../assets/style/Control.css";
import { BookTypes } from "../data/constants/BookTypes";
import { IBookHashtags } from "../data/interfaces/IBookHashtag";
import GiphySearch from "./Remotion/GiphySearch";

interface IControlProps {
  bookName: string;
  setBookName: React.Dispatch<React.SetStateAction<string>>;
  author: string;
  setAuthor: React.Dispatch<React.SetStateAction<string>>;
  bookType: string;
  image1: string;
  setImage1: React.Dispatch<React.SetStateAction<string>>;
  image2: string;
  setImage2: React.Dispatch<React.SetStateAction<string>>;
  setBookType: React.Dispatch<React.SetStateAction<string>>;
  hashtagsList: IBookHashtags[];
  setHashtagsList: React.Dispatch<React.SetStateAction<IBookHashtags[]>>;
  hashtags: string[];
  setHashtags: React.Dispatch<React.SetStateAction<string[]>>;
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  bgColor: string;
  setBgColor: React.Dispatch<React.SetStateAction<string>>;
  textColor: string;
  setTextColor: React.Dispatch<React.SetStateAction<string>>;
  accentColor: string;
  setAccentColor: React.Dispatch<React.SetStateAction<string>>;
  safeZone: boolean;
  setSafeZone: React.Dispatch<React.SetStateAction<boolean>>;
  setGif1: React.Dispatch<React.SetStateAction<string>>;
  setGif2: React.Dispatch<React.SetStateAction<string>>;
  setGif3: React.Dispatch<React.SetStateAction<string>>;
  setGif4: React.Dispatch<React.SetStateAction<string>>;
}

const Control = (props: IControlProps) => {
  return (
    <div className="control">
      <div className="controlInput">
        <p id="controlTitle">Contrôle</p>
        <TextInput
          label={"Nom d'utilisateur"}
          value={props.userName}
          onChange={(event) => props.setUserName(event.currentTarget.value)}
          style={{
            marginBottom: "8px",
          }}
        />
        <Select
          label="Type de livre"
          value={props.bookType as string | null}
          onChange={
            props.setBookType as React.Dispatch<
              React.SetStateAction<string | null>
            >
          }
          data={BookTypes.map((bookType) => bookType.type)}
        />
        <MultiSelect
          label="#Hashtags"
          placeholder="#LoremIpsum"
          data={props.hashtagsList}
          value={props.hashtags}
          searchable
          creatable
          clearable
          onChange={props.setHashtags}
          getCreateLabel={(query) => `+ Create ${query}`}
          onCreate={(query) => {
            const item = { value: query, label: query, group: "Custom" };
            props.setHashtagsList((current) => [...current, item]);
            return item;
          }}
          maxSelectedValues={5}
        />
        <ColorInput
          label={"Background Color"}
          value={props.bgColor}
          onChange={props.setBgColor}
        />
        <ColorInput
          label={"Text Color"}
          value={props.textColor}
          onChange={props.setTextColor}
        />
        <ColorInput
          label={"Accent Color"}
          value={props.accentColor}
          onChange={props.setAccentColor}
        />
        <Switch
          className={"safeZoneSwitch"}
          checked={props.safeZone}
          onChange={(event) => props.setSafeZone(event.currentTarget.checked)}
          color={"dark"}
          label={"Afficher la safe zone ?"}
        />
      </div>
      <div className="controlGif">
        <p id="controlTitle">Gifs</p>
        <GiphySearch label={"Gif n°1"} setGifs={props.setGif1} />
        <GiphySearch label={"Gif n°2"} setGifs={props.setGif2} />
        <GiphySearch label={"Gif n°3"} setGifs={props.setGif3} />
      </div>
      <div className="controlSellBook">
        <p id="controlTitle">Livre à vendre</p>
        <TextInput
          label={"Titre"}
          value={props.bookName}
          onChange={(event) => props.setBookName(event.currentTarget.value)}
          style={{
            marginBottom: "8px",
          }}
        />
        <TextInput
          label={"Auteur"}
          value={props.author}
          onChange={(event) => props.setAuthor(event.currentTarget.value)}
          style={{
            marginBottom: "8px",
          }}
        />
        <TextInput
          label={"Image n°1"}
          placeholder={"URL image n°1"}
          value={props.image1}
          onChange={(event) => props.setImage1(event.currentTarget.value)}
          style={{
            marginBottom: "8px",
          }}
        />
        <TextInput
          label={"Image n°2"}
          placeholder={"URL image n°2"}
          value={props.image2}
          onChange={(event) => props.setImage2(event.currentTarget.value)}
          style={{
            marginBottom: "8px",
          }}
        />
        <GiphySearch label={"Gif n°4"} setGifs={props.setGif4} />
      </div>
    </div>
  );
};

export default Control;

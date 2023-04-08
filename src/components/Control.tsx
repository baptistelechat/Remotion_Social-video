import {
  TextInput,
  ColorInput,
  Switch,
  Select,
  MultiSelect,
  Radio,
  Group,
} from "@mantine/core";
import "../assets/style/Control.css";
import { BookTypes } from "../data/constants/BookTypes";
import { IBookHashtags } from "../data/interfaces/IBookHashtag";
import { Carousel } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { useState } from "react";
import GiphySearch from "./Remotion/GiphySearch";

interface IControlProps {
  bookType: string;
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
          maxSelectedValues={6}
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
    </div>
  );
};

export default Control;

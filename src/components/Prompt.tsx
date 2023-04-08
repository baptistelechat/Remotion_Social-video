import { Prism } from "@mantine/prism";
import "../assets/style/Prompt.css";

interface IPromptProps {
  bookType: string;
  hashtags: string[];
  userName: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  gif1: string;
  gif2: string;
  gif3: string;
}

const Prompt = (props: IPromptProps) => {
  const prompt = `
{
  userName: "${props.userName}",
  bookType:"${props.bookType}",
  hashtags:[${props.hashtags.map((hashtag, index) => `"${hashtag}"`)}],
  gif:[
    "${props.gif1}",
    "${props.gif2}",
    "${props.gif3}"
  ],
  theme: {
    bgColor: "${props.bgColor}",
    textColor: "${props.textColor}",
    accentColor: "${props.accentColor}",
  },
  safeZone : false
}`;
  return (
    <Prism
      id={"prompt"}
      language="json"
      copyLabel="Copier le code dans le presse-papiers"
      copiedLabel="Code copié dans le presse-papiers"
      withLineNumbers
    >
      {prompt}
    </Prism>
  );
};

export default Prompt;

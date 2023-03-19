import { Prism } from "@mantine/prism";
import "../assets/style/Prompt.css";

interface IPromptProps {
  bookType: string;
  hashtags: string[];
  userName: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
}

const Prompt = (props: IPromptProps) => {
  const prompt = `
{
  userName: "${props.userName}",
  bookType:"${props.bookType}",
  hashtags:[${props.hashtags.map((hashtag, index) => `"${hashtag}"`)}],
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

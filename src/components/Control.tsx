import { TextInput, ColorInput } from "@mantine/core";
import { Prism } from "@mantine/prism";
import "../assets/style/Control.css";

interface IControlProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  bgColor: string;
  setBgColor: React.Dispatch<React.SetStateAction<string>>;
  textColor: string;
  setTextColor: React.Dispatch<React.SetStateAction<string>>;
  accentColor: string;
  setAccentColor: React.Dispatch<React.SetStateAction<string>>;
}

const Control = (props: IControlProps) => {
  const demoCode = `
{
  title: "${props.title}",
  theme: {
    bgColor: "${props.bgColor}",
    textColor: "${props.textColor}",
    accentColor: "${props.accentColor}",
  },
}`;

  return (
    <div className="control">
      <p id="controlTitle">Contrôle</p>
      <TextInput
        label={"Titre"}
        value={props.title}
        onChange={(event) => props.setTitle(event.currentTarget.value)}
        style={{
          marginBottom: "8px",
        }}
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
      <Prism
        className={"prompt"}
        language="json"
        copyLabel="Copier le code dans le presse-papiers"
        copiedLabel="Code copié dans le presse-papiers"
        withLineNumbers
      >
        {demoCode}
      </Prism>
    </div>
  );
};

export default Control;

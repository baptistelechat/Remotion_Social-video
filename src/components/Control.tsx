import { TextInput, ColorInput } from "@mantine/core";

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
    </div>
  );
};

export default Control;

import { TextInput, ColorInput, Switch } from "@mantine/core";
import { Prism } from "@mantine/prism";
import "../assets/style/Control.css";

interface IControlProps {
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
}

const Control = (props: IControlProps) => {
  const demoCode = `
{
  userName: "${props.userName}",
  theme: {
    bgColor: "${props.bgColor}",
    textColor: "${props.textColor}",
    accentColor: "${props.accentColor}",
  },
  safeZone : false
}`;

  return (
    <div className="control">
      <p id="controlTitle">Contrôle</p>
      <TextInput
        label={"Nom d'utilisateur"}
        value={props.userName}
        onChange={(event) => props.setUserName(event.currentTarget.value)}
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
      <Switch
        className={"safeZoneSwitch"}
        checked={props.safeZone}
        onChange={(event) => props.setSafeZone(event.currentTarget.checked)}
        color={"dark"}
        label={"Afficher la safe zone ?"}
      />
      <Prism
        id={"prompt"}
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

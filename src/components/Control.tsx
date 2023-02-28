import { TextInput, ColorInput } from "@mantine/core";

interface IControleProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  bgColor: string;
  setBgColor: React.Dispatch<React.SetStateAction<string>>;
}

const Control = (props: IControleProps) => {
  return (
    <div className="control">
      <p id="controlTitle">Contrôle</p>
      <TextInput
        value={props.title}
        onChange={(event) => props.setTitle(event.currentTarget.value)}
        style={{
          marginBottom: "8px",
        }}
      />
      <ColorInput value={props.bgColor} onChange={props.setBgColor} />
    </div>
  );
};

export default Control;

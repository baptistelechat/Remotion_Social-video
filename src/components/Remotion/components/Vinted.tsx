import { Text, ThemeIcon } from "@mantine/core";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { IconBrandVinted } from "@tabler/icons-react";

interface IVintedProps {
  userName: string;
  backgroundColor: string;
  accentColor: string;
}

const Vinted = (props: IVintedProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    fps,
    frame,
  });

  const opacity = interpolate(frame, [0, 15, 90, 140, 155], [0, 1, 1, 0, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      id="cta"
      style={{
        opacity: opacity,
        transform: `scale(${scale}) `,
      }}
    >
      <Text color={props.backgroundColor}>Rejoignez ma boutique Vinted</Text>
      <div id="vintedUsername">
        <ThemeIcon
          id="userNameIcon"
          radius={"100%"}
          color={props.backgroundColor}
        >
          <IconBrandVinted size={"50px"} color={props.accentColor} />
        </ThemeIcon>
        <Text color={props.backgroundColor}>{props.userName}</Text>
      </div>
    </div>
  );
};

export default Vinted;

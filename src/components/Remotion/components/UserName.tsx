import { Text, ThemeIcon } from "@mantine/core";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { IconBrandVinted } from "@tabler/icons-react";

interface IUserNameProps {
  userName: string;
  accentColor: string;
}

const UserName = (props: IUserNameProps) => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();

  const scale = spring({
    fps,
    frame,
  });

  const translateXGifLeft = interpolate(frame, [0, 300, 315], [0, 0, -width], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      id="userName"
      style={{
        transform: `scale(${scale}) translateX(${translateXGifLeft}px)`,
      }}
    >
      <ThemeIcon id="userNameIcon" radius={"100%"} color={props.accentColor}>
        <IconBrandVinted size={"50px"} />
      </ThemeIcon>
      <Text color={props.accentColor}>{props.userName}</Text>
    </div>
  );
};

export default UserName;

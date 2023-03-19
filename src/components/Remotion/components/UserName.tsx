import { Text, ThemeIcon } from "@mantine/core";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { IconBrandVinted } from "@tabler/icons-react";

interface IUserNameProps {
  userName: string;
  accentColor: string;
}

const UserName = (props: IUserNameProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    fps,
    frame,
  });

  return (
    <div
      id="userName"
      style={{
        transform: `scale(${scale})`,
      }}
    >
      <ThemeIcon id="userNameIcon" radius={"100%"} color={props.accentColor}>
        <IconBrandVinted size={"50px"} />
      </ThemeIcon>
      <Text color={props.accentColor}>{`@${props.userName}`}</Text>
    </div>
  );
};

export default UserName;

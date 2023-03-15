import { Text } from "@mantine/core";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

interface INewBookTitleProps {
  gradient: {
    from: string;
    to: string;
    angle?: number;
  };
}

const NewBookTitle = (props: INewBookTitleProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    fps,
    frame,
  });

  return (
    <Text
      id={"newBookTitle"}
      variant="gradient"
      gradient={{ from: props.gradient.from, to: props.gradient.to, deg: 45 }}
      style={{
        transform: `scale(${scale})`,
      }}
    >
      Nouveaux Mangas à vendre !
    </Text>
  );
};

export default NewBookTitle;

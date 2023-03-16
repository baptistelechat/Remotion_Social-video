import { Text } from "@mantine/core";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BookTypes } from "../../../data/constants/BookTypes";

interface INewBookTitleProps {
  bookType: string;
  gradient: {
    from: string;
    to: string;
    angle?: number;
  };
}

const NewBookTitle = (props: INewBookTitleProps) => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();

  const scale = spring({
    fps,
    frame,
  });

  const translateX = interpolate(frame, [0, 100, 110], [0, 0, -width], {
    extrapolateRight: "clamp",
  });

  const newBookGender = () => {
    const gender = BookTypes.filter(
      (bookType) => bookType.type === props.bookType
    )[0].gender;
    return gender === "Masculin" ? "Nouveaux" : "Nouvelles";
  };

  return (
    <Text
      id={"newBookTitle"}
      variant="gradient"
      gradient={{ from: props.gradient.from, to: props.gradient.to, deg: 45 }}
      style={{
        transform: `scale(${scale}) translateX(${translateX}px)`,
      }}
    >
      {`${newBookGender()} ${props.bookType} à vendre !`}
    </Text>
  );
};

export default NewBookTitle;

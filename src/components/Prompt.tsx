import { Prism } from "@mantine/prism";
import "../assets/style/Prompt.css";
import { Modal } from "@mantine/core";

interface IPromptProps {
  bookType: string;
  bookName: string;
  author: string;
  image1: string;
  image2: string;
  price: string;
  hashtags: string[];
  userName: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  gif1: string;
  gif2: string;
  gif3: string;
  gif4: string;
}

interface IModalProps {
  openedModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

interface IPromptAndModalProps extends IPromptProps, IModalProps {}

const Prompt = (props: IPromptAndModalProps) => {
  const prompt = `
{
  userName: "${props.userName}",
  bookInfo: {
    title: "${props.bookName}",
    author: "${props.author}",
    images: [
      "${props.image1}",
      "${props.image2}"
    ],
    price: "${props.price}"
  },
  bookType:"${props.bookType}",
  hashtags:[${props.hashtags.map((hashtag, index) => `"${hashtag}"`)}],
  gifs:[
    "${props.gif1}",
    "${props.gif2}",
    "${props.gif3}",
    "${props.gif4}"
  ],
  theme: {
    bgColor: "${props.bgColor}",
    textColor: "${props.textColor}",
    accentColor: "${props.accentColor}",
  },
  safeZone : false
}`;
  return (
    <Modal
      opened={props.openedModal}
      onClose={props.closeModal}
      title={<p id="controlTitle">Prompt</p>}
      size="auto"
      centered
    >
      <Prism
        id={"prompt"}
        language="json"
        copyLabel="Copier le code dans le presse-papiers"
        copiedLabel="Code copié dans le presse-papiers"
        withLineNumbers
      >
        {prompt}
      </Prism>
    </Modal>
  );
};

export default Prompt;

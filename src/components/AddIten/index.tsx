import { useState, KeyboardEvent } from "react";
import { Container, Icon } from "./style";
import add from "../../assets/add.png";

type Props = {
  onEnter: (taskName: string) => void;
};

export const AddIten = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  };

  return (
    <Container>
      <Icon>
        <img src={add} />
      </Icon>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </Container>
  );
};

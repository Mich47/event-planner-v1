import { PRIORITIES } from "../../constants/priorities";
import { Container, Text } from "./Mark.styled";

export const Mark = ({ text = "", $fontWidth }) => {
  const isPriority = Object.values(PRIORITIES).includes(text.toLowerCase());
  const priority = isPriority ? text.toLowerCase() : null;

  return (
    <Container $priority={priority}>
      <Text $fontWidth={$fontWidth}>{text}</Text>
    </Container>
  );
};

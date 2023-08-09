import { LinkStyled, Span, Svg } from "./AddButton.styled";
import icons from "../../assets/images/icons.svg";

export const AddButton = () => {
  return (
    <LinkStyled to={"create"}>
      <Svg>
        <use href={`${icons}#icon-plus`} />
      </Svg>
      <Span>Add new event</Span>
    </LinkStyled>
  );
};

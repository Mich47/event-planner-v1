import { useLocation } from "react-router-dom";
import icons from "../../assets/images/icons.svg";
import { LinkStyled, Span, Svg } from "./BackButton.styled";

export const BackButton = () => {
  const location = useLocation();

  return (
    <LinkStyled to={location.state?.from ?? "/"}>
      <Svg>
        <use href={`${icons}#icon-arrow-left`} />
      </Svg>
      <Span>Back</Span>
    </LinkStyled>
  );
};

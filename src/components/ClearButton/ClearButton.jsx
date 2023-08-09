import { ButtonStyled, Svg } from "./ClearButton.styled";
import icons from "../../assets/images/icons.svg";

export const ClearButton = ({ inputState, ...restProps }) => {
  return (
    <ButtonStyled type="button" {...restProps}>
      <Svg $inputState={inputState}>
        <use href={`${icons}#icon-cross`} />
      </Svg>
    </ButtonStyled>
  );
};

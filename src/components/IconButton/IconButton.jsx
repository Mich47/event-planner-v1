import { ButtonStyled, Svg } from "./IconButton.styled";

export const IconButton = ({ iconSvg, inputState, ...restProps }) => {
  return (
    <ButtonStyled type="button" {...restProps}>
      <Svg $inputState={inputState}>
        <use href={iconSvg} />
      </Svg>
    </ButtonStyled>
  );
};

import styled from "styled-components";
import { INPUT_STATES } from "../../constants/InputStates";

const colorOfState = ({ $inputState }) => {
  if ($inputState === INPUT_STATES.default) {
    return "var(--color-divider)";
  }

  if ($inputState === INPUT_STATES.error) {
    return "var(--color-hight)";
  }

  return "var(--color-accent)";
};

const colorOfStateHover = ({ $inputState }) => {
  if ($inputState === INPUT_STATES.default) {
    return "var(--color-accent-hover)";
  }

  if ($inputState === INPUT_STATES.error) {
    return "var(--color-hight-hover)";
  }
  return "var(--color-accent-hover)";
};

export const ButtonStyled = styled.button`
  display: flex;
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  color: ${colorOfState};
  transition: color var(--animation);

  &:hover {
    color: ${colorOfStateHover};
  }
`;

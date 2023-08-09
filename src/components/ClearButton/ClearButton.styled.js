import styled from "styled-components";
import { INPUT_STATES } from "../../constants/InputStates";

const colorOfState = ({ $inputState }) => {
  if ($inputState === INPUT_STATES.disabled) {
    return "var(--color-divider)";
  }

  if ($inputState === INPUT_STATES.error) {
    return "var(--color-hight)";
  }

  if (
    $inputState === INPUT_STATES.hover ||
    $inputState === INPUT_STATES.filled
  ) {
    return "var(--color-accent)";
  }

  return "var(--color-divider)";
};

const colorOfStateHover = ({ $inputState }) => {
  if ($inputState === INPUT_STATES.disabled) {
    return "var(--color-divider)";
  }

  if ($inputState === INPUT_STATES.error) {
    return "var(--color-hight-hover)";
  }

  if (
    $inputState === INPUT_STATES.hover ||
    $inputState === INPUT_STATES.filled ||
    $inputState === INPUT_STATES.default
  ) {
    return "var(--color-accent-hover)";
  }

  return "var(--color-divider)";
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

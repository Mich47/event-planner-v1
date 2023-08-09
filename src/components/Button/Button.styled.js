import styled from "styled-components";
import { BUTTON_SIZES } from "../../constants/ButtonSizes";

const paddingYX = ({ size }) => {
  if (size === BUTTON_SIZES.small) {
    return "8px 16px";
  }
  if (size === BUTTON_SIZES.medium) {
    return "10px 24px";
  }
  return "16px 12px";
};

const sizeMobile = ({ size }) => {
  if (size === BUTTON_SIZES.small || size === BUTTON_SIZES.medium) {
    return "auto";
  }
  return "100%";
};

const sizeTab = ({ size }) => {
  if (size === BUTTON_SIZES.large) {
    return "193px";
  }
  return "auto";
};

const fontSiz = ({ size }) => {
  if (size === BUTTON_SIZES.small) {
    return "12px";
  }
  if (size === BUTTON_SIZES.medium) {
    return "14px";
  }
  return "16px";
};

const lineHeigh = ({ size }) => {
  if (size === BUTTON_SIZES.small) {
    return "16px";
  }
  if (size === BUTTON_SIZES.medium) {
    return "20px";
  }
  return "24px";
};

const borderRadius = ({ size }) =>
  size === BUTTON_SIZES.small ? "4px" : "8px";

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${paddingYX};
  color: var(--background-color-primary);
  background-color: var(--color-accent);
  border-radius: ${borderRadius};
  width: ${sizeMobile};
  box-shadow: var(--shadow-primary);
  transition: background-color var(--animation);

  @media (min-width: 768px) {
    width: ${sizeTab};
  }

  &:hover {
    background-color: var(--color-accent-hover);
  }
`;

export const ButtonStyledNotAccent = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 15px;
  background-color: var(--background-color-primary);
  border-radius: 4px;
  width: 108px;
  box-shadow: var(--shadow-primary);
  border-width: 1px;
  border-style: solid;
  border-color: var(--color-accent);
  color: var(--color-accent);
  transition: color var(--animation), border-color var(--animation);

  @media (min-width: 768px) {
    width: auto;
  }

  &:hover {
    border-color: var(--color-accent-hover);
    color: var(--color-accent-hover);
  }
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  color: var(--background-color-primary);
`;

export const Span = styled.span`
  color: inherit;
  font-size: ${fontSiz};
  font-weight: 500;
  line-height: ${lineHeigh};
`;

export const SpanNotAccent = styled.span`
  color: inherit;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`;

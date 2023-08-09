import styled from "styled-components";
import { PRIORITIES } from "../../constants/priorities";

export const Container = styled.div`
  padding: 6px 12px;
  border-radius: 8px;
  background-color: var(--background-color-primary);
  width: fit-content;
  box-shadow: var(--shadow-primary);
  color: ${({ $priority }) => {
    if ($priority === PRIORITIES.low) {
      return "var(--color-low)";
    }
    if ($priority === PRIORITIES.medium) {
      return "var(--color-medium)";
    }
    if ($priority === PRIORITIES.high) {
      return "var(--color-hight)";
    }

    return "var(--color-accent)";
  }};
`;
export const Text = styled.span`
  font-size: 14px;
  font-weight: ${({ $fontWidth }) => $fontWidth ?? "500"};
  line-height: 20px;
  text-transform: capitalize;
`;

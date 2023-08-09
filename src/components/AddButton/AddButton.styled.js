import { Link } from "react-router-dom";
import styled from "styled-components";
export const LinkStyled = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px;
  background-color: var(--color-accent);
  border-radius: 8px;
  box-shadow: var(--shadow-primary);
  transition: background-color var(--animation);

  @media (min-width: 768px) {
    padding: 16px 12px;
  }

  &:hover {
    background-color: var(--color-accent-hover);
  }
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  color: var(--background-color-primary);
`;

export const Span = styled.span`
  color: var(--background-color-primary);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

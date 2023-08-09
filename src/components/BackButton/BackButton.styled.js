import { Link } from "react-router-dom";
import styled from "styled-components";
export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  /* padding: 16px; */
  color: var(--color-accent);
  transition: color var(--animation);

  &:hover {
    color: var(--color-accent-hover);
  }
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
`;

export const Span = styled.span`
  color: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
`;

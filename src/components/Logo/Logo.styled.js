import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link)`
  color: var(--color-accent);
  font-family: var(--font-logo);
  font-size: 24px;
  font-weight: 400;
  line-height: 33px;
  transition: color var(--animation);

  &:hover {
    color: var(--color-accent-hover);
  }
`;
export const LogoWrapper = styled.div`
  padding: 3px 7px;
`;

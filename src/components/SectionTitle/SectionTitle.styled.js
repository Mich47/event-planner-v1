import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;

export const TitleStyled = styled.h1`
  color: var(--text-color-secondary);
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 48px;
  }
`;

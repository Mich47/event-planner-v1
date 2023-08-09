import styled from "styled-components";

export const FormStyled = styled.form`
  padding: 40px 16px;
  margin-bottom: 136px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 24px;
  border-radius: 8px;
  background: var(--background-color-primary);
  box-shadow: var(--shadow-primary);

  @media (min-width: 768px) {
    flex-wrap: wrap;
    padding: 40px 24px;
  }

  @media (min-width: 1280px) {
    padding: 40px;
  }
`;

export const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-column-gap: 24px;
    grid-template-areas:
      "a e"
      "b f"
      "b g"
      "c h"
      "d .";
    grid-auto-flow: column;
  }

  @media (min-width: 1280px) {
    grid-template-areas:
      "a c f"
      "b d g"
      "b e h";
  }

  @media (min-width: 1440px) {
    grid-column-gap: 42px;
  }
`;

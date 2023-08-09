import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  background-color: var(--background-color-secondary);
  border-bottom: 1px solid var(--color-accent);
`;

export const HeaderContainer = styled.div`
  min-width: 320px;
  padding: 24px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;

  @media (min-width: 480px) {
    max-width: 648px;
  }

  @media (min-width: 648px) {
    max-width: 736px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 768px;
    padding: 26px 40px 18px 40px;
  }

  @media (min-width: 1024px) {
    max-width: 1124px;
  }

  @media (min-width: 1280px) {
    max-width: 1360px;
    padding: 22px 40px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 22px 80px;
  }
`;

import styled from "styled-components";
import backgroundImage from "../../assets/images/background.svg";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: var(--background-color-primary);
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${backgroundImage});
`;

export const MainStyled = styled.main`
  min-width: 320px;
  padding: 40px 24px;
  margin: 0 auto;

  @media (min-width: 480px) {
    max-width: 648px;
  }

  @media (min-width: 648px) {
    max-width: 736px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 40px;
  }

  @media (min-width: 1024px) {
    max-width: 1124px;
  }

  @media (min-width: 1280px) {
    max-width: 1360px;
  }

  @media (min-width: 1440px) {
    padding: 60px 80px;
    max-width: 1440px;
  }
`;

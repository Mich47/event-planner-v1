import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media (min-width: 1440px) {
    margin-top: -40px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
`;

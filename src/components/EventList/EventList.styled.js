import styled from "styled-components";

export const Container = styled.div``;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  gap: 24px;

  @media (min-width: 648px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 40px 24px;
  }
`;

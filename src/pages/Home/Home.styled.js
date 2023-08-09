import styled from "styled-components";

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 40px;

  @media (min-width: 768px) {
    flex-direction: column-reverse;
    align-items: flex-end;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  @media (min-width: 1280px) {
    width: auto;
  }
`;

export const TitleStyled = styled.h1`
  color: var(--text-color-secondary);
  visibility: hidden;
  width: 1px;
  font-size: 12px;

  @media (min-width: 768px) {
    visibility: visible;
    width: auto;
    font-size: 32px;
    line-height: 48px;
  }
`;

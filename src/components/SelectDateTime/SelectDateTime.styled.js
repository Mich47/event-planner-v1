import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 240px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 308px;
  }

  @media (min-width: 1280px) {
    width: 372px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LabelStyled = styled.label`
  color: var(--color-accent);
  font-size: 16px;
  font-weight: 400;
  line-height: 16px; /* 100% */
  letter-spacing: 0.4px;
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 16px 48px 16px 12px;
  background-color: transparent;
  color: var(--text-color-secondary);
  font-family: var(--font-primary);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-transform: capitalize;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: var(--color-divider);
  outline: none;
  transition: border-color var(--animation);
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: var(--color-accent);
  }

  &::placeholder {
    color: var(--color-divider);
    font-size: 16px;

    font-weight: 400;
    line-height: 24px;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 41px;
  transition: transform 250ms;
`;

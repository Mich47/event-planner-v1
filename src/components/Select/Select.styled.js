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

export const SelectList = styled.ul`
  position: absolute;
  left: 0;
  top: 92px;
  z-index: 100;
  width: 100%;
  padding: 0 16px;
  margin-bottom: 40px;
  border-radius: 8px;
  background: var(--background-color-primary);
  box-shadow: var(--shadow-primary);
`;

export const SelectItem = styled.li`
  padding: 16px 0px;
  color: var(--text-color-secondary);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-transform: capitalize;
  border-bottom: 1px solid var(--color-divider);
  cursor: pointer;
  transition: color var(--animation);

  &:hover {
    color: var(--color-accent);
  }

  &:last-child {
    border-bottom: none;
  }
`;

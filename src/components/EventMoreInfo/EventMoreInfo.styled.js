import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  min-width: 272px;
  max-width: 688px;
  box-shadow: var(--shadow-primary);
  background-color: var(--background-color-primary);
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 168px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MarkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Wrapper = styled.div`
  padding: 24px 16px 40px 16px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: var(--background-color-primary);
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 24px;
`;

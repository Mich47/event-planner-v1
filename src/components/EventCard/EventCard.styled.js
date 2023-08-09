import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  min-width: 272px;
  max-width: 332px;
  height: 480px;
  box-shadow: var(--shadow-primary);
`;

export const MarkWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 12px;

  display: flex;
  gap: 12px;
`;

export const ImageContainer = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  min-height: 388px;
  object-fit: cover;
  /* padding: 12px; */
`;

export const DescContainer = styled.div`
  /* margin-top: -40px; */
  position: absolute;
  left: 0;
  bottom: -56px;
  width: 100%;

  transform: ${({ $isMouseOver }) =>
    $isMouseOver ? "translateY(-56px)" : "translateY(0)"};

  transition: transform 300ms;
`;

export const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: var(--background-color-primary);
`;

export const DataTimeContainer = styled.div`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  background-color: var(--background-color-translucent);
`;

export const DataTimeText = styled.p`
  color: var(--color-accent);
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`;

export const Title = styled.h2`
  color: var(--text-color-title);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const MoreInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

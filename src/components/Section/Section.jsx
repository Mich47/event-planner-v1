import { BackButton } from "../BackButton/BackButton";
import { Container, Wrapper } from "./Section.styled";

export const Section = ({ children }) => {
  return (
    <Container>
      <Wrapper>
        <BackButton />
      </Wrapper>
      {children}
      {/* <Outlet /> */}
    </Container>
  );
};

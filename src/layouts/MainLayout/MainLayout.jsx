import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Container, MainStyled } from "./MainLayout.styled";

export default function MainLayout() {
  return (
    <Container>
      <Header />
      <MainStyled>
        <Outlet />
      </MainStyled>
    </Container>
  );
}

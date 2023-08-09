import { Logo } from "../../components/Logo/Logo";
import { Search } from "../../components/Search/Search";
import { HeaderContainer, HeaderStyled } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <Logo />
        <Search />
      </HeaderContainer>
    </HeaderStyled>
  );
};

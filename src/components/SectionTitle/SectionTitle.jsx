import { useLocation } from "react-router-dom";
import { TitleStyled, Wrapper } from "./SectionTitle.styled";
import { PAGE_NAME } from "../../constants/PageName";

export const SectionTitle = ({ children }) => {
  const location = useLocation();
  const title = PAGE_NAME[location.pathname.split("/")[1]] ?? "No title";

  return (
    <Wrapper>
      <TitleStyled>{children ?? title}</TitleStyled>
    </Wrapper>
  );
};

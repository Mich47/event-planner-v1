import { LinkStyled, LogoWrapper } from "./Logo.styled";

export const Logo = () => {
  return (
    <LogoWrapper>
      <LinkStyled to={"/"}>Event Planner</LinkStyled>
    </LogoWrapper>
  );
};

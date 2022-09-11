import {
  StyledNavbar,
  StyledLogo,
  StyledList,
  StyledNavLink,
  StyledSearch,
  DisplayFlex,
  StyledSearchIcon,
  StyledPosition,
  StyledHeartIcon,
  StyledBasketIcon,
  UserProfile,
} from "./styles";
import { logo } from "Assets";
import { Links } from "Routes/Links";

export const Header = () => {
  return (
    <StyledNavbar>
      <DisplayFlex>
        <StyledLogo>
          <img src={logo} alt="logo" />
        </StyledLogo>
        <StyledList>
          <StyledNavLink to={Links.app.home}>Home</StyledNavLink>
          <StyledNavLink to={Links.app.men}>Men</StyledNavLink>
          <StyledNavLink to={Links.app.women}>Women</StyledNavLink>
          <StyledNavLink to={Links.app.kids}>Kids</StyledNavLink>
          <StyledNavLink to={Links.app.shop}>Shop</StyledNavLink>
          <StyledNavLink to={Links.app.contact}>Contact</StyledNavLink>
        </StyledList>
      </DisplayFlex>
      <DisplayFlex>
        <StyledPosition>
          <StyledSearch placeholder="Search" />
          <StyledSearchIcon />
        </StyledPosition>
        <StyledHeartIcon />
        <StyledBasketIcon />
        <UserProfile>User Profile</UserProfile>
      </DisplayFlex>
    </StyledNavbar>
  );
};

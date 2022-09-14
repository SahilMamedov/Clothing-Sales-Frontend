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
  StyledUser,
  UserBox,
  Box,
  Line,
  Logout,
  Profile,
  StyledSignOut,
  Register,
} from "./styles";
import { logo } from "Assets";
import { Links } from "Routes/Links";

import decode from "jwt-decode";
import { IUser } from "types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser>();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      const user: IUser = decode(token);
      setUser(user);
    }
  }, []);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
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
        <StyledUser onClick={handleClickOpen} />
        <Box>
          {open ? (
            <>
              <UserBox>
                <Profile>Profile</Profile>
                <Line />
                {user ? (
                  <Logout onClick={handleLogout}>
                    Log Out
                    <StyledSignOut />
                  </Logout>
                ) : (
                  <Register onClick={handleRegister}>Register</Register>
                )}
              </UserBox>
            </>
          ) : (
            ""
          )}
        </Box>
        <UserProfile>{user?.Name ? user.Email : "bosh"}</UserProfile>
      </DisplayFlex>
    </StyledNavbar>
  );
};

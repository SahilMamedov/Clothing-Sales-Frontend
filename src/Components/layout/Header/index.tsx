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
  StyledSignOut,
  LoginButton,
  RegisterButton,
  LogoutButton,
} from "./styles";
import { logo } from "Assets";
import { Links } from "Routes/Links";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "Hooks/useUser";
import { logoutUser } from "Redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "Redux/hooks/hooks";
export const Header = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  useUser();
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleClickOpen = () => {
    setOpen(!open);
  };
  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("token");
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  const handleLogin = () => {
    navigate("/login");
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
                {user.IsOnline ? (
                  <LogoutButton onClick={handleLogout}>
                    Logout <StyledSignOut />
                  </LogoutButton>
                ) : (
                  <>
                    <LoginButton onClick={handleLogin}>Login</LoginButton>{" "}
                    <RegisterButton onClick={handleRegister}>
                      Register
                    </RegisterButton>{" "}
                  </>
                )}
              </UserBox>
            </>
          ) : (
            ""
          )}
        </Box>
        <UserProfile>{user.Email}</UserProfile>
      </DisplayFlex>
    </StyledNavbar>
  );
};

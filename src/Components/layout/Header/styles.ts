import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  HeartStraight,
  MagnifyingGlass,
  ShoppingCart,
  SignOut,
  User,
} from "phosphor-react";

export const StyledNavbar = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: -webkit-sticky;
  position: sticky;
  background-color: white;
  z-index: 3;
  top: 0;
`;
export const StyledLogo = styled.div`
  width: 57px;
  height: 48px;
  margin-left: 50px;
  margin-right: 160px;
`;
export const StyledList = styled.div`
  display: flex;
  list-style: none;
  font-weight: ${({ theme }) => theme.fontWeight.thin};
`;
export const StyledNavLink = styled(NavLink)`
  margin-left: 40px;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.black};
`;

export const StyledSearch = styled.input`
  width: 400px;
  height: 42px;
  background-color: #f0f0f0;
  border-radius: 8px;
  border: none;
  outline: none;
  padding-left: 30px;
  font-weight: ${({ theme }) => theme.fontWeight.thin};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const DisplayFlex = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledSearchIcon = styled(MagnifyingGlass)`
  color: #201d1d;
  font-size: 20px;
  position: absolute;
  right: 30px;
  top: 10px;
`;
export const StyledPosition = styled.div`
  position: relative;
`;
export const StyledHeartIcon = styled(HeartStraight)`
  color: #201d1d;
  font-size: 26px;
  margin-left: 40px;
  cursor: pointer;
`;
export const StyledUser = styled(User)`
  font-size: 26px;
  cursor: pointer;
`;
export const StyledBasketIcon = styled(ShoppingCart)`
  color: #201d1d;
  margin-left: 20px;
  font-size: 26px;
  cursor: pointer;
  margin-right: 20px;
`;
export const UserProfile = styled.div`
  width: 150px;
  margin-left: 20px;
  margin-right: 40px;
`;
export const UserBox = styled.div`
  position: absolute;
  width: 160px;
  padding: 10px 0px;
  top: 40px;
  left: -100px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 1px black;
  background-color: white;
`;

export const LoginButton = styled.button`
  height: 35px;
  color: white;
  width: 120px;
  background-color: crimson;
  border: solid 1px #dedede;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
`;

export const RegisterButton = styled(LoginButton)`
  background-color: white;
  color: black;
  margin-top: 10px;
`;
export const LogoutButton = styled(LoginButton)``;

export const Box = styled.div`
  display: flex;
  position: relative;
`;

export const StyledSignOut = styled(SignOut)`
  font-size: 18px;
  padding-left: 15px;
`;

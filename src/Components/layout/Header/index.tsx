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
  StyledButton,
  Basket,
  BasketLength,
} from "./styles";
import { logo } from "Assets";
import { Links } from "Routes/Links";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "Hooks/useUser";
import { logoutUser } from "Redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "Redux/hooks/hooks";
import { useGetAllBasketQuery } from "services/basketServices";
import { addItem } from "Redux/slices/basketSlice";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  useUser();
  const { user } = useAppSelector((state) => state.user);
  const {data,isSuccess}=useGetAllBasketQuery()

 
useEffect(()=>{
  if(isSuccess&&data.basketItems){
    
    dispatch(addItem(data.basketItems))
    
      }
},[data?.basketItems])
  

  const {basket} = useAppSelector((state)=>state.basket)


  
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

  const handleBasket = () =>{
navigate("/basket")
  }
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
        <Basket>
          <BasketLength>{basket?.basketItems.length}</BasketLength>
        <StyledBasketIcon onClick={handleBasket} />
        </Basket>
        <StyledUser onClick={handleClickOpen} />
        <Box>
          {open ? (
            <>
              <UserBox>
                {user.IsOnline ? (
                  <StyledButton onClick={handleLogout}>
                    Logout <StyledSignOut />
                  </StyledButton>
                ) : (
                  <>
                    <StyledButton onClick={handleLogin}>Login</StyledButton>{" "}
                    <StyledButton onClick={handleRegister}>
                      Register
                    </StyledButton>{" "}
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

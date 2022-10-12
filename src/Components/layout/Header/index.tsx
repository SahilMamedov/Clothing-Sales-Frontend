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
  Img,
  SerachField, 
  StyledBox,
  Container
} from "./styles";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { logo } from "Assets";
import { Links } from "Routes/Links";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "Hooks/useUser";
import { logoutUser } from "Redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "Redux/hooks/hooks";
import { useGetAllBasketQuery } from "services/basketServices";
import { addItem } from "Redux/slices/basketSlice";
import { useFetchSearchMutation } from "services/shopServices";
import { StyledNavlink } from "Views/Shop/styles";
import { debounce } from "lodash";

export const Header = () => {

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const {basket} = useAppSelector((state)=>state.basket)

  const { user } = useAppSelector((state) => state.user);

  const [open, setOpen] = useState(false);

  useUser();
  
  const {data,isSuccess}=useGetAllBasketQuery()

  const [postSearch,response] = useFetchSearchMutation()

  const {data:searchData} =response
 
useEffect(()=>{
  if(isSuccess&&data.basketItems){
    
    dispatch(addItem(data.basketItems))
    
      }
},[data?.basketItems])
  

const debounced = debounce(async (search) => {
    postSearch(search)
  
  
}, 1000);

const handleSearchChange =(ev:any)=>{
  
  debounced(ev.target.value)
}
  
  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleProfile =() =>{
    navigate("/profile")
  }

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
    <>
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
          <StyledSearch onChange={handleSearchChange} placeholder="Search" />
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
                  <>
                  <StyledButton onClick={handleLogout}>
                    Logout <StyledSignOut />
                  </StyledButton>
                  <StyledButton onClick={handleProfile}>
                    My Profile
                  </StyledButton>
                  </>
                  

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
    <Container>
      {searchData !==undefined && 
      <StyledBox>
      <TableContainer component={Paper}>
           <Table  aria-label="customized table">
             <TableHead>
              {searchData.result.map((item)=>
               <StyledNavlink key={item.id} to={`/productdetail/${item.id}`}>
                <TableRow >
               <SerachField sx={{width:"100px"}}>{item.productPhotos.map((img)=>img.isMain && <Img key={img.id} src={img.path}/>)}</SerachField>
               <SerachField >{item.name}</SerachField>
               <SerachField >{item.brand.name}</SerachField>
               <SerachField >{item.color}</SerachField>
               <SerachField >${item?.price - (item?.discount * item.price) / 100}</SerachField>
             </TableRow>
             </StyledNavlink>
              )}
               
             </TableHead>
             <TableBody>
             </TableBody>
           </Table>
         </TableContainer>
         </StyledBox>
      }
    
    </Container>
   
    </>
  );
};

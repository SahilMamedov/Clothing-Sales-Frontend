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
import {useGetAllBasketQuery } from "services/basketServices";
import { addItem } from "Redux/slices/basketSlice";
import { useFetchSearchMutation } from "services/shopServices";
import { StyledNavlink } from "Views/Category/styles";
import { debounce } from "lodash";
import {useTranslation} from 'react-i18next'
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import Select, { SelectChangeEvent } from '@mui/material/Select';
export const Header = () => {
 
  useUser();

  const {t,i18n} =useTranslation()

  

  

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));



  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const {basket} = useAppSelector((state)=>state.basket)

  const { user } = useAppSelector((state) => state.user);

  const [open, setOpen] = useState(false);

  const [openSearch,setOpenSearch] =useState(true)

  const [searchvalue, setSearchValue]=useState('')
  

 
  
  const {data,isSuccess,refetch:fetchAllBasket}=useGetAllBasketQuery(undefined,{skip:!user.IsOnline})

  const [postSearch,response] = useFetchSearchMutation()

  const {data:searchData} =response

  const Lang= localStorage.getItem('lang')
 
  const [lang, setLang] = useState(Lang?Lang:"En");
  
  useEffect(()=>{
    i18n.changeLanguage(lang)
    localStorage.setItem('lang',lang)
  },[lang])

  useEffect(()=>{
    fetchAllBasket()
  },[user.IsOnline])

useEffect(()=>{
  if(isSuccess&&data.basketItems){
  
    dispatch(addItem(data.basketItems))
      }
      
},[data?.basketItems])
  
useEffect(()=>{
  if(openSearch===false){
    setOpenSearch(true)
  }
},[searchData])

const debounced = debounce(async (search) => {
    postSearch(search)
}, 1000);

const handleChange = (event: SelectChangeEvent) => {
  setLang(event.target.value);
 
  
};

const handleSearchChange =(ev:any)=>{
  setSearchValue(ev.target.value)
  debounced(ev.target.value)
  
}
  
  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    setOpen(false)
    dispatch(logoutUser());
    localStorage.removeItem("token");
    localStorage.removeItem("Admintoken")
  //  dispatch(extendedApi.util.resetApiState())
    navigate("/");
  };

  const handleProfile =() =>{
    setOpen(false)
    navigate("/profile")
  }

  const handleRegister = () => {
    setOpen(false)
    navigate("/register");
    
  };

  const handleLogin = () => {
    setOpen(false)
    navigate("/login");
  };

  const handleBasket = () =>{
navigate("/basket")
  }
const handleClikItem=()=>{
  setSearchValue('')
  setOpenSearch(false)
}

  return (
    <>
    <StyledNavbar>
      <DisplayFlex>
        <StyledLogo>
          <img src={logo} alt="logo" />
        </StyledLogo>
        <StyledList>
          <StyledNavLink to={Links.app.home}>{t('Home')}</StyledNavLink>
          <StyledNavLink to={Links.app.men}>{t('Men')}</StyledNavLink>
          <StyledNavLink to={Links.app.women}>{t('Women')}</StyledNavLink>
          <StyledNavLink to={Links.app.kids}>{t('Kids')}</StyledNavLink>
          <StyledNavLink to={Links.app.shop}>{t('Shop')}</StyledNavLink>
          {/* <StyledNavLink to={Links.app.contact}>{t('Contact')}</StyledNavLink> */}
        </StyledList>
      </DisplayFlex>
      <DisplayFlex>
        <StyledPosition>
          <StyledSearch value={searchvalue} onChange={handleSearchChange} placeholder={t('Search')} />
          <StyledSearchIcon />
        </StyledPosition>

        

        <StyledHeartIcon />
        <Basket>
          <BasketLength>
            {user.IsOnline?basket?.basketItems.length:0}
           
            </BasketLength>
        <StyledBasketIcon onClick={handleBasket} />
        </Basket>
        <StyledUser onClick={handleClickOpen} />
        <Box >
          {open ? (
            <>
              <UserBox >
                {user.IsOnline ? (
                  <>
                  <StyledButton onClick={handleLogout}>
                  {t('Logouth')} <StyledSignOut />
                  </StyledButton>
                  <StyledButton onClick={handleProfile}>
                  {t('MyProfile')}
                  </StyledButton>
                  </>
                  

                ) : (
                  <>
                    <StyledButton onClick={handleLogin}>{t('SignIn')}</StyledButton>{" "}
                    <StyledButton onClick={handleRegister}>
                    {t('Register')}
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


    <FormControl sx={{ m: 1,minWidth:60}} variant="standard">
        <Select
          labelId="lang"
          id="demo-select-small"
          value={lang}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
        <MenuItem value='En'>En</MenuItem>
        <MenuItem value='Az'>Az</MenuItem>
        <MenuItem value='Ru'>Ru</MenuItem>
        <MenuItem value='Fr'>Fr</MenuItem>
        <MenuItem value='It'>It</MenuItem>
        <MenuItem value='Tr'>Tr</MenuItem>
        </Select>
      </FormControl>
   

      </DisplayFlex>
    </StyledNavbar>
      {openSearch ?  <Container>
      {searchData !==undefined && 
      <StyledBox>
      <TableContainer component={Paper}>
           <Table  aria-label="customized table">
             <TableHead>
              {searchData.result.map((item)=>
               <StyledNavlink onClick={handleClikItem} key={item.id} to={`/productdetail/${item.id}`}>
                <TableRow>
               <SerachField sx={{width:"100px"}}>{item.productPhotos.map((img)=>img.isMain && <Img key={img.id} src={img.path}/>)}</SerachField>
               <SerachField >{item.name}</SerachField>
               <SerachField >{item.brand.name}</SerachField>
               <SerachField >{item.color}</SerachField>
               <SerachField >${(item?.price - (item?.discount * item.price) / 100).toFixed(2)}</SerachField>
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
    
    </Container>:""}
   
    </>
  );
};

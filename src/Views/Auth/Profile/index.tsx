import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

import {
    Container,
    StyledTab,
    StyledTable,
    StyledTh,
    StyledButton,
    StyledTr,
    StyledTd,
    StyledBox,
    OrderBox,
    OrderItem,
    Iamge,
    Flex,
    SaveChangesBtn,
    ProfileInfo,
    IsLoading,

 } from './styles';

import {  useGetOrderAllQuery, useGetOrderItemAllQuery } from 'services/saleServices';
import {useEffect, useState} from "react"
import { OrderDetails } from './OrderDetails';
import { useAppSelector } from 'Redux/hooks/hooks';
import { useUpdateUserMutation } from 'services/authServices';
import {useTranslation} from "react-i18next"
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { useNotifications } from 'Hooks/useNotification';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ paddingTop: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}




export const Profile=()=> {

  const {t} =useTranslation()
  
  const { user } = useAppSelector((state) => state.user);

  const navigate=useNavigate()

  const {data,refetch:fetchOrder} = useGetOrderAllQuery()
   

  const [showDetail,setShowDetal]=useState(0)

  const [open, setOpen] = useState(false);

  const [value, setValue] = React.useState(0);

  const [orderID,setOrderID] = useState<number>()



  const handleClick = (orderId:number) => {
    setOrderID(orderId)
    setOpen(!open);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
 const handleViewOrderDetail = (orderId:number)=>{
  setShowDetal(orderId)
  
 }

 const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  data.set('Id',user.nameid)
  postUpdateUser(data)
};


  const [postUpdateUser,response] = useUpdateUserMutation()

  const { isSuccess, data:updateData,isLoading } = response;

  
  const {data:orderItemData} = useGetOrderItemAllQuery(orderID,{skip:orderID===undefined})
  
  useEffect(()=>{
    fetchOrder()
  },[])
    
  useNotifications(isSuccess,`${t('UserUpdatedSuccessfully')}`)

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("token",updateData.token);
        setTimeout(() => {
          navigate("/")
        }, 1000);
    }


  }, [isSuccess]);
  
    
  
  return (
    <Container>
      {showDetail >0?<OrderDetails orderId={showDetail}/>:
         <Box >
         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
           <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
             <StyledTab label={t('Profile')} {...a11yProps(0)} />
             
             <StyledTab label={t('Orders')} {...a11yProps(1)} />
           </Tabs>
         </Box>
         <TabPanel value={value} index={0}>
          

         <Box  
        component="form"
        onSubmit={handleSubmit}
        sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
        {t('FirstName')}
        </InputLabel>
        <Input
          id="firstname"
          name='firstname'
          defaultValue={user.Name}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        id="surname"
        label={t('LastName')}
        name='surname'
        defaultValue={user.Surname}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <Box 
    
      sx={{ display: 'flex', alignItems: 'flex-end', }}>
      <TextField
        id="email"
        label={t('Email')}
        name='email'
        type='email'
        defaultValue={user.Email}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <ProfileInfo>
      <TextField
        id="Username"
        name='username'
        label={t('UserName')}
        defaultValue={user.unique_name}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      </ProfileInfo>
      </Box>
      <SaveChangesBtn> {isLoading?
      <IsLoading >
          <CircularProgress
        color="warning"
        size='35px'
/>
      </IsLoading>:`${t('SaveChanges')}`}
         </SaveChangesBtn>
         </Box>
         </TabPanel>
         <TabPanel value={value} index={1}  >
         <StyledBox>
{data !== undefined&&

<span>
{data.map((item)=>
<Flex key={item.id}>
 <StyledTable  onClick={()=>handleClick(item.id)}>
 <thead>
 <StyledTr>
 <StyledTh>
 {t('Order')}
 <StyledTd>{item.id}</StyledTd>
 </StyledTh>
 <StyledTh>
 {t('Data')}
 <StyledTd>{item.date}</StyledTd>
 </StyledTh>
 <StyledTh>
 {t('Status')}
 <StyledTd>{item.orderStatus===0 && `${t('Pending')}` || item.orderStatus===1 && `${t('Accepted')}`  || item.orderStatus===2 && `${t('Rejected')}`}</StyledTd>
 </StyledTh>
 <StyledTh>
 {t('Total')}
 <StyledTd>${item.total.toFixed(2)}</StyledTd>
 </StyledTh>
 
 </StyledTr>
 </thead>
</StyledTable>
<StyledTh>
 <StyledButton onClick={()=>handleViewOrderDetail(item.id)}>{t('View')}</StyledButton>
 </StyledTh>
</Flex>
)}
</span>
}      

{open?
<>
{orderItemData?.map((item)=>
<OrderBox key={item.id}>
<OrderItem>
  {`${item.name} x ${item.count}`}<Iamge src={item.photo.path} />
</OrderItem>
</OrderBox>
)}
</>
:""}
</StyledBox>
         </TabPanel>
       </Box>
      
      }
    </Container>
  );
}



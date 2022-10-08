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
import { ToastContainer, toast,Zoom } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

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
  postUpdateUser(data)
};


  const [postUpdateUser,response] = useUpdateUserMutation()

  const { isError, isSuccess, data:updateData,isLoading } = response;

  
  const {data:orderItemData} = useGetOrderItemAllQuery(orderID,{skip:orderID===undefined})
  
  useEffect(()=>{
    fetchOrder()
  },[])
    

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("token",updateData.token);
      toast.success('Successfully Updated User', {
        position: "bottom-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme:"colored",
        transition:Zoom
        
    
        });
    //navigate("/")
    }
  }, [isSuccess]);
  
   // console.log(useUser(),"user");
    
  
  return (
    <Container>
      {showDetail >0?<OrderDetails orderId={showDetail}/>:
         <Box >
         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
           <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
             <StyledTab label="Profile" {...a11yProps(0)} />
             
             <StyledTab label="Orders" {...a11yProps(1)} />
           </Tabs>
         </Box>
         <TabPanel value={value} index={0}>
          

         <Box  
        component="form"
        onSubmit={handleSubmit}
        sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
         Firstname
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
        label="Lastname"
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
        label="email"
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
        label="Username"
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
      </IsLoading>:"Save Changes"}
      </SaveChangesBtn>
    </Box>
   

         </TabPanel>
         <TabPanel value={value} index={1}  >
         <StyledBox>
{data !== undefined&&

<span>
{data.map((item)=>
<Flex>
 <StyledTable key={item.id} onClick={()=>handleClick(item.id)}>
 <thead>
 <StyledTr>
 <StyledTh>
 Order
 <StyledTd>{item.id}</StyledTd>
 </StyledTh>
 <StyledTh>
 Data
 <StyledTd>{item.date}</StyledTd>
 </StyledTh>
 <StyledTh>
 Status
 <StyledTd>{item.orderStatus===0?"Pending":""}</StyledTd>
 </StyledTh>
 <StyledTh>
 Total
 <StyledTd>${item.total}</StyledTd>
 </StyledTh>
 
 </StyledTr>
 </thead>
</StyledTable>
<StyledTh>
 <StyledButton onClick={()=>handleViewOrderDetail(item.id)}>View</StyledButton>
 </StyledTh>
</Flex>
)}
</span>
}      

{open?
<>
{orderItemData?.map((item)=>
<OrderBox>
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
      <ToastContainer
     position="bottom-right"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     />

    </Container>
  );
}



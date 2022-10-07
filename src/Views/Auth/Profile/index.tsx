import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
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
    Iamge

 } from './styles';
import { useGetOrderAllQuery } from 'services/saleServices';

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

const  arr = [2,4,6,7,8,6,54,534,24,76]

    const {data} = useGetOrderAllQuery()

    console.log(data);
    
    const [open, setOpen] = React.useState(false);

  const handleClick = (orderId:number) => {
console.log(orderId);

    setOpen(!open);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
   <Box >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <StyledTab label="Profile" {...a11yProps(0)} />
          
          <StyledTab label="Orders" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}  >
        <StyledBox>
          

          {data !== undefined&&
          <>
         {data.map((item)=>
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
           <StyledTd>{item.orderStatus==0?"Pending":""}</StyledTd>
           </StyledTh>
           <StyledTh>
           Total
           <StyledTd>${item.total}</StyledTd>
           </StyledTh>
           <StyledTh>
           <StyledButton>View</StyledButton>
           </StyledTh>
           </StyledTr>
           </thead>
          </StyledTable>
          )}
          </>
      }      
     
       {open? <OrderBox>
        <OrderItem>
            salam<Iamge src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa3FV1g4LAWsvBsSLJ2tpQm_yZv6UzBdTJrLQ4B3B_&s' />
        </OrderItem>
        <OrderItem>
            salam<Iamge src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa3FV1g4LAWsvBsSLJ2tpQm_yZv6UzBdTJrLQ4B3B_&s' />
        </OrderItem>
        <OrderItem>
            salam<Iamge src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa3FV1g4LAWsvBsSLJ2tpQm_yZv6UzBdTJrLQ4B3B_&s' />
        </OrderItem>
       </OrderBox>:""}
       </StyledBox>

      </TabPanel>
    </Box>
    </Container>
  );
}

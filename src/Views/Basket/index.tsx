import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {BasketBox,
BasketImg,
BasketText,
Box,
ButtonBox,
Cargo,
CargoField, 
ConfrimButton, 
Container,
Flex,
StyledTableImg, 
TotalBox} from "./styles"

import { ToastContainer, toast,Zoom} from 'react-toastify';
import {  useDeleteItemMutation, useGetAllBasketQuery } from 'services/basketServices';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'Redux/hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { addItem, addTotal } from 'Redux/slices/basketSlice';





const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




export const Basket= () => {
  const navigate=useNavigate()
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  

  const {data,refetch:fetchgetBasket} =useGetAllBasketQuery(undefined,{skip:user.IsOnline==false})
  const [postDeletId,{isSuccess:isSuccessDelet}] = useDeleteItemMutation()

 

  
  if(data?.basketItems){

    dispatch(addItem(data?.basketItems))
     dispatch(addTotal(data?.total))
     
     
   }

const handleDelet = (id:number) => {
  postDeletId(id)

    toast.success('Successfully Deleted', {
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
  
}
const handleGoToBack =() =>{
  navigate("/shop")
}

const handleConfrim=()=>{
  navigate("/checkout")
}

useEffect(()=>{
if(user.IsOnline){
  fetchgetBasket()
}

  if(isSuccessDelet){
    fetchgetBasket()
  }

},[isSuccessDelet])




  return (
<Container>
  {user.IsOnline && data?.basketItems.length != 0 ?
  
  <Flex>
  <TableContainer component={Paper} sx={{ maxWidth: 1000 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell></StyledTableCell>
            <StyledTableCell>Product</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Number of</StyledTableCell>
            <StyledTableCell align="right">Subtotal</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {data?.basketItems.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell><StyledTableImg src={item.path}/></StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {item.product?.name}
              </StyledTableCell>
              <StyledTableCell align="right">${item.price}</StyledTableCell>
              <StyledTableCell align="right">{item.count}</StyledTableCell>
              <StyledTableCell align="right">${item.sum}</StyledTableCell>
              <StyledTableCell>
              <IconButton aria-label="delete" size="large" onClick={()=>handleDelet(item.productId)}>
                <DeleteIcon  />
               </IconButton>
               </StyledTableCell>
               </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  <Box>
    <Cargo>
      <CargoField fontSize='16px' paddingButtom='10px'>Cargo</CargoField>
      <CargoField fontSize='18px' paddingButtom='10px'>Free Delivery</CargoField>
    </Cargo>
    <TotalBox>
      <CargoField fontSize='16px' paddingButtom='22px'>Total ($)</CargoField>
      <CargoField fontSize='18px' paddingButtom='17px'>{data?.total} ($)</CargoField>
    </TotalBox>
    <ButtonBox>
   <ConfrimButton onClick={handleConfrim}>
   Confirm the cart
   </ConfrimButton>
    </ButtonBox>
  </Box>
  </Flex>
    
 :
 
<BasketBox>
  <BasketText>The Basket is Empty</BasketText>
  <BasketImg src='https://us.123rf.com/450wm/vectorplus/vectorplus1601/vectorplus160100112/50566994-shopping-basket-icon-on-white-background-vector-illustration-.jpg?ver=6'/>

      

</BasketBox>
 
 
 }
 <ButtonBox>
 <Button variant="contained" color="success" onClick={handleGoToBack}>
        Go to Shop
  </Button>
 </ButtonBox>
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

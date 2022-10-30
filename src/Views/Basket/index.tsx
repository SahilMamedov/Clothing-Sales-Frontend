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
import Tooltip from '@mui/material/Tooltip';
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

import {toast,Zoom} from 'react-toastify';
import {  useDeleteItemMutation, useGetAllBasketQuery } from 'services/basketServices';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'Redux/hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { addItem, addTotal } from 'Redux/slices/basketSlice';
import {useTranslation} from "react-i18next"

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Typography from '@mui/joy/Typography';
import { StyledBox,Confirmation, CancelBtn, StyledBtn,DialogBox } from 'Components/shared/Styles/styles';



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

  const {t} =useTranslation()

  const [basketItemID,setBasketItemID] = React.useState(0)

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (id:number) => {
    setOpen(true);
    if(id>0){
      setBasketItemID(id)
    }
  
  };
  const handleDelet = () => {
  
    if(basketItemID){
      postDeletId(basketItemID)
      toast.success(`${t('SuccessfullyDeleted')}`, {
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
    setOpen(false);
  }
  const handleClose = () => {
    setOpen(false);
  };



  const navigate=useNavigate()
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  

  const {data,refetch:fetchgetBasket} =useGetAllBasketQuery(undefined,{skip:user.IsOnline===false})
  
  const [postDeletId,{isSuccess:isSuccessDelet}] = useDeleteItemMutation()

 

  
  if(data?.basketItems){

    dispatch(addItem(data?.basketItems))
     dispatch(addTotal(data?.total))
     
     
   }


const handleGoToBack =() =>{
  navigate("/category/shop")
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
  {user.IsOnline && data?.basketItems.length !== 0 ?
  
  <Flex>
  <TableContainer component={Paper} sx={{ maxWidth: 1000 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell></StyledTableCell>
            <StyledTableCell>{t('Product')}</StyledTableCell>
            <StyledTableCell align="right">{t('Price')}</StyledTableCell>
            <StyledTableCell align="right">{t('NumberOf')}</StyledTableCell>
            <StyledTableCell align="right">{t('SubTotal')}</StyledTableCell>
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
              <StyledTableCell align="right">${item.price.toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{item.count}</StyledTableCell>
              <StyledTableCell align="right">${item.sum.toFixed(2)}</StyledTableCell>
              <StyledTableCell>
              <Tooltip title="Delet">
              <IconButton aria-label="delete" size="large" onClick={()=>handleClickOpen(item.productId)}>
                <DeleteIcon  />
              </IconButton>
              </Tooltip>            
               </StyledTableCell>
               </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  <Box>
    <Cargo>
      <CargoField fontSize='16px' paddingButtom='10px'>{t('Cargo')}</CargoField>
      <CargoField fontSize='18px' paddingButtom='10px'>{t('FreeDelivery')}</CargoField>
    </Cargo>
    <TotalBox>
      <CargoField fontSize='16px' paddingButtom='22px'>{t('Total')} ($)</CargoField>
      <CargoField fontSize='18px' paddingButtom='17px'>{data?.total.toFixed(2)} ($)</CargoField>
    </TotalBox>
    <ButtonBox>
   <ConfrimButton onClick={handleConfrim}>
   {t('ConfirmTheCart')}
   </ConfrimButton>
    </ButtonBox>
  </Box>
  </Flex>
    
 :
 
<BasketBox>
  <BasketText>{t('TheBasketisEmpty')}</BasketText>
  <BasketImg src='https://us.123rf.com/450wm/vectorplus/vectorplus1601/vectorplus160100112/50566994-shopping-basket-icon-on-white-background-vector-illustration-.jpg?ver=6'/>

      

</BasketBox>
 
 
 }
 <ButtonBox>
 <Button variant="contained" color="success" onClick={handleGoToBack}>
  {t('GoToShop')}
  </Button>
 </ButtonBox>

    
      <DialogBox
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <StyledBox>
          <Confirmation>
          <Typography
            id="alert-dialog-modal-title"
            component="h2"
            level="inherit"
            fontSize="1.25em"
            mb="0.25em"
            startDecorator={<ReportProblemIcon />}
          >
            {t('Confirmation')}
          </Typography>
          </Confirmation>
       <hr/>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
         {t('AreYouSureDelete')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <CancelBtn onClick={handleClose}>{t('Cancel')}</CancelBtn>
          <StyledBtn onClick={handleDelet} autoFocus>
            {t('Delet')}
          </StyledBtn>
        </DialogActions>
        </StyledBox>
       
      </DialogBox>
      
  </Container>
  );
}

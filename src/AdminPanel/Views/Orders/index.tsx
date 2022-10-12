import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useFetchGetAllOrderQuery, useFetchUpdateOrderMutation } from 'services/AdminPanelServices/saleAdminServices';
import { IAdminOrder } from 'AdminPanel/types';
import { OrderStatus } from 'Helper';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import { ToastContainer, toast,Zoom } from 'react-toastify';
import { StyledBox,
Image, 
StyledOrderStatus,
StyledReject,
StyledSuccess,
ViewButton } from './styles';import { useEffect, useState } from 'react';
import { OrderItems } from './OrderItems';
export const Orders =() => {
const [orderId,setOrderId]=useState(0)

const {data,refetch:fetchGetOrders} =useFetchGetAllOrderQuery()

const [postOrderUpdate,{isSuccess}] =useFetchUpdateOrderMutation()

const [rows,setRows] = React.useState<IAdminOrder[]>(data ? data : [])
useEffect(()=>{
  if(data){
    setRows(data)
  }

},[data])

useEffect(()=>{
if(isSuccess){
  fetchGetOrders()
}
},[isSuccess])

const handleReject =(orderId:number,statusCod:number)=>{
  
  if(statusCod===2 || statusCod===1){
    postOrderUpdate({orderId:orderId,orderStatus:2})
    toast.error('The order was cancelled', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme:"colored",
      transition:Zoom
  
      });
  }
   
  
  
  
  
}

const handleSuccess =(orderId:number,statusCod:number)=>{
 
  if(statusCod===1 || statusCod===3){
    postOrderUpdate({orderId:orderId,orderStatus:1})
    toast.success('Order accepted', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme:"colored",
      transition:Zoom
  
      });
  
  }
    
 
}

const handleView=(orderId:number)=>{
  setOrderId(orderId)
  
}

type Rows = IAdminOrder;

const columns: GridColDef<Rows>[] = [
  { field: 'id', headerName: 'ID', width: 80 },
  {
    field: 'photo',
    headerName: 'Photo',
    type:"img",
    width: 120,
    renderCell: (params) =>{
      return(
         <Image src={params.row.productPhotos.at(0)?.path}/>
      )
    }
  },

  {
    field: 'firstName',
    headerName: 'First name',
    width: 110,
   
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 130,
  },
  {
    field: 'mobile',
    headerName: 'Number',
    width: 130,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 140,
  },
  {
    field: 'city',
    headerName: 'City',
    width: 120,
  },
  {
    field: 'address',
    headerName: 'Address',
    width: 120,
  },
  {
    field: 'cash',
    headerName: 'Payment',
    width: 130,
    renderCell:(params)=>{
      return(
        <>
        {params.row.cash?"Cash on delivery":"Kartladi"}
        </>
      )
    }
  },
  {
    field: 'total',
    headerName: 'Total Price',
    width: 100,
  
  },
  {
    field: 'orderStatus',
    headerName: 'OrderStatus',
    width: 120,
    renderCell: (params) => {
      if (params.value === OrderStatus.Pending) {
        return <StyledOrderStatus background='#f29d1f'>Pending</StyledOrderStatus>;
      } else if (params.value === OrderStatus.Accept) {
        return <StyledOrderStatus background='#11a63e'>Success</StyledOrderStatus>;
      } else {
        return <StyledOrderStatus background='red'>Reject</StyledOrderStatus>;
      }
    },
  
  },
  {
    field:" ",
    headerName:" ",
    width: 100,
    

    renderCell:(params)=>{
      return(
       <>
        <StyledReject onClick={()=>handleReject(params.row.id,params.row.orderStatus+1 )}>
        <CloseIcon/>
        </StyledReject>
        <StyledSuccess onClick={()=>handleSuccess(params.row.id,params.row.orderStatus+1)}>
          <DoneIcon/>
        </StyledSuccess>
       </>
      )
    }
  
  },
  {
    field: 'l',
    headerName: ' ',
    width: 90,
  renderCell:(params)=>{
    return(
      <ViewButton onClick={()=>handleView(params.row.id)}>View</ViewButton>
    )
  }
  },
];




  return (
    <StyledBox>
      <Box sx={{ height: 400, width: '100%' }}>
        {orderId>0?<OrderItems orderId={orderId}/>:
         <DataGrid
         rows={rows}
         columns={columns}
         pageSize={5}
         rowsPerPageOptions={[5]}
       
         disableSelectionOnClick
         experimentalFeatures={{ newEditingApi: true }}
       />
        }
     
    </Box>
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
    </StyledBox>
  );
}

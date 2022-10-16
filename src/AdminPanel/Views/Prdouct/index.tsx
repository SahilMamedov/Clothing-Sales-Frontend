import React, { useEffect, useState } from 'react'
import { CreateProduct } from './CreateProduct'
import { EditButton, StyledButton,DeletButton } from './styles'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { StyledBox,Image } from '../Orders/styles';
import Swal from "sweetalert2"
import { IProduct } from 'AdminPanel/types';
import { 
useFetchDeletProductMutation,
useFetchGetAllProductQuery }
 from 'services/AdminPanelServices/productServices';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { ToastContainer, toast,Zoom } from 'react-toastify';
import { UpdateProduct } from './UpdateProduct';

export const Product = () => {

const [open,setOpen]=useState(false)

const [editId,setEditId] = useState(0)

const {data} =useFetchGetAllProductQuery()

const [postDeletId,{isSuccess}] = useFetchDeletProductMutation()

const [rows,setRows] = React.useState<IProduct[]>(data ? data : [])

const handleAddProduct =()=> {
setOpen(true)
}
useEffect(()=>{
  if(isSuccess){
    Swal.fire(
      'Deleted!',
      'successfully Deleted.',
      'success'
    )
    // toast.success('the Product has been Deleted', {
    //   position: "bottom-right",
    //   autoClose: 3500,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme:"colored",
    //   transition:Zoom
      
  
    //   });
  }
},[isSuccess])

const handleDeletProduct= (id:number)=>{
 
  Swal.fire({
    title: 'Are you sure you want to delete this product?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    denyButtonText: `No`,
  }).then((result) => {
    if (result.isConfirmed) {
      postDeletId(id)

    } else if (result.isDenied) {
      Swal.fire('Cancelled', '', 'info')
    }
 })   

}

const handleEditProduct=(id:number)=>{
  setEditId(id)
}


React.useEffect(()=>{
  if(data){
    setRows(data)
  }

},[data])


type Rows = IProduct;

const columns: GridColDef<Rows>[] = [
  { field: 'id', headerName: 'ID', width: 80,headerClassName:'header' },
  {
    field: 'photo',
    headerClassName:'header',
    headerName: 'Photo',
    type:"img",
    width: 140,
    renderCell: (params) =>{
      return(
         <Image src={params.row.photo.path}/>
      )
    }
  },

  {
    field: 'name',
    headerName: 'Name',
    width: 250,
    headerClassName:'header'
   
  },
  {
    field: 'brand',
    headerName: 'Brand',
    width: 130,
    headerClassName:'header',
    renderCell: (params) =>{
      return(
        <>{params.row.brand.name}</>
      )
    }
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 130,
    headerClassName:'header',
    renderCell: (params) =>{
      return(
        <>{params.row.category.name}</>
      )
    }
  },
  {
    field: 'color',
    headerName: 'Color',
    width: 100,
    headerClassName:'header'
  },
  {
    field: 'typename',
    headerName: 'Type',
    width: 100,
    headerClassName:'header'
    
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 60,
    align:"center",
    headerClassName:'header'
  },
  {
    field: 'discount',
    headerName: 'Discount',
    width: 80,
    align:"center",
    headerClassName:'header'
  },
   {
    field: ' ',
    headerName: 'Edit',
    width: 100,
    headerClassName:'header',
    renderCell:(params)=>{
      return(
        <EditButton onClick={()=>handleEditProduct(params.row.id)}>
          <CreateIcon fontSize='small' /> Edit
        </EditButton>
      )
    }
  },
  {
    field: 'delete',
    headerName: 'Delete',
    width: 60,
    align:"center",
    headerClassName:'header',
    renderCell:(params)=>{
      return(
        <DeletButton>
         
         <Tooltip title="Delete">
      <IconButton onClick={()=> handleDeletProduct(params.row.id)}>
        <DeleteIcon  />
      </IconButton>
    </Tooltip>
        </DeletButton>
      )
    }
  },

];


  return (
    <div>
     
     {editId>0 ?<UpdateProduct productId={editId}/>:
     <>
     {open?<CreateProduct/>:<>
     <StyledButton onClick={handleAddProduct}>Add Product</StyledButton>
     <StyledBox>
      <Box sx={{ height: 800,alignItems:"center", width: '1232px','& .header': {
      backgroundColor: 'rgba(83, 233, 128, 0.849)',
    }, }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={13}
        rowsPerPageOptions={[13]}
      
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    </StyledBox>
     </>}
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
     </>
     
     }
     
    
    </div>
  )
}


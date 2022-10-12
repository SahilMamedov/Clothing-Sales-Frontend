import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useFetchGetAllOrderItemsQuery } from 'services/AdminPanelServices/saleAdminServices';

import { StyledBox,
Image, 
 } from '../styles';
import { IOrderItem } from 'types';
export interface Props{
    orderId:number;
  }

export const OrderItems =({orderId}:Props) => {


const {data} =useFetchGetAllOrderItemsQuery(orderId)

const [rows,setRows] = React.useState<IOrderItem[]>(data ? data : [])

console.log(data,"ordeitems");



React.useEffect(()=>{
  if(data){
    setRows(data)
  }

},[data])


type Rows = IOrderItem;

const columns: GridColDef<Rows>[] = [
  { field: 'id', headerName: 'ID', width: 80 },
  {
    field: 'photo',
    headerName: 'Photo',
    type:"img",
    width: 120,
    renderCell: (params) =>{
      return(
         <Image src={params.row.photo.path}/>
      )
    }
  },

  {
    field: 'name',
    headerName: 'Name',
    width: 150,
   
  },
  {
    field: 'count',
    headerName: 'Count',
    width: 150,
  },
  {
    field: 'color',
    headerName: 'Color',
    width: 150,
  },
  {
    field: 'total',
    headerName: 'Total Price',
    width: 150,
  },
  

];




  return (
    <StyledBox>
      <Box sx={{ height: 400, width: '810px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    </StyledBox>
  );
}

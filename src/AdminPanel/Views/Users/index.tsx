import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useFetchGetAllRoleQuery, useFetchGetAllUsersQuery, useFetchUpdateMutation } from 'services/AdminPanelServices/usersServices';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { DeletButton } from './styles';

export const Users = () => {
    const [role, setRole] = useState('');
    const [userId, setUserId] = useState('')


    const [postUserIdAndRol,{isSuccess}] = useFetchUpdateMutation()

    const {data:AllRole} = useFetchGetAllRoleQuery()

    const handleChange = (event: SelectChangeEvent,id:string) => {
      setRole(event.target.value as string);
      setUserId(id)
      console.log(id);
      

    };
    useEffect(()=>{
       if(role !==''){
        postUserIdAndRol({
            id:userId,
            role:role
          })
       }
    },[role])
    console.log(isSuccess,"success");
    
const {data:AllUser} = useFetchGetAllUsersQuery()

console.log(AllUser);













  return (
    <div>
    <div>
      <TableContainer  sx={{ maxWidth: 1020 }} component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor:"#eec05c "}} >
              <TableCell sx={{ width:130}}>Name</TableCell>
              <TableCell sx={{ width:130}}>Surname</TableCell>
              <TableCell sx={{ width:130}}>Username</TableCell>
              <TableCell sx={{ width:160}}>Email Address</TableCell>
              <TableCell sx={{ width:130}}>User Role</TableCell>
              <TableCell sx={{ width:130}}>User Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {AllUser !==undefined &&
            AllUser.allUser.map((user)=>
            
            <TableRow
                key={user.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                    {user.name}        
                </TableCell>
                <TableCell component="th" scope="row">
                    {user.surname}        
                </TableCell>
                <TableCell component="th" scope="row">
                    {user.username}        
                </TableCell>
                <TableCell component="th" scope="row">
                    {user.email}        
                </TableCell>
                <TableCell component="th" scope="row">
                   
                    <Box sx={{ minWidth: 120}}>
                    <FormControl fullWidth>
                     <InputLabel id="demo-simple-select-label">Role</InputLabel>
                     <Select
                    labelId="role"
                    id="role"
                    value={user.userRoles[0]}
                    label="role"
                    onChange={(ev)=>handleChange(ev,user.id)}
                    >
                    {AllRole?.map((role)=>
                    <MenuItem key={role.id} value={role.name}>{role.name}</MenuItem>
                    )}
        
                   </Select>
                  </FormControl>
                </Box>    
                </TableCell>
                <TableCell component="th" scope="row">
                    <DeletButton>
                    <Tooltip title="Delete">
                    <IconButton>
                    <DeleteIcon />
                    </IconButton>
                    </Tooltip>
                    </DeletButton>
                </TableCell>              
              </TableRow>
            )
            }
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </div>
  )
}

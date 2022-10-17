import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Swal from "sweetalert2"
import { useFetchCreteRoleMutation, useFetchDeletRoleMutation, useFetchDeletUserMutation, 
useFetchGetAllRoleQuery, 
useFetchGetAllUsersQuery, 
useFetchUpdateMutation } 
from 'services/AdminPanelServices/usersServices';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

    import Typography from '@mui/material/Typography';
    import Modal from '@mui/material/Modal';
    import TextField from '@mui/material/TextField';
    import {Button} from '@mantine/core';


import { DeletButtonBox ,StyledBox,Flex,StyledRoleDelet,DeletButton} from './styles';
import { CreateButton, ModalBox } from '../CategoryAndBrand/styles';
import { useNotifications } from 'Hooks/useNotification';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 370,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
  }

export const Users = () => {


    const [postUserIdAndRol,{isSuccess:succesUpdateRole}] = useFetchUpdateMutation()

    const {data:AllRole} = useFetchGetAllRoleQuery()

    const [deletUserId,{isSuccess:succesDeletUser}] = useFetchDeletUserMutation()

    const {data:AllUser} = useFetchGetAllUsersQuery()

    const [createRoleName,{isSuccess:succesCreateRole}] = useFetchCreteRoleMutation()

    const [deletRoleId,{isSuccess:succesDeletRole}] = useFetchDeletRoleMutation()


    const [role, setRole] = useState('');

    const [userId, setUserId] = useState('')
    
    const[roleId,setRoleId] =useState('')

    const [open, setOpen] = useState(false);

    const [openDelet,setOpenDelet] =useState(false)

    const [roleName, setroleName] = useState('');


    const handleDeletRole = () =>{
      Swal.fire({
        title: 'Are you sure you want to delete this Role?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) { 
          deletRoleId(roleId)
        }
      })
        setOpenDelet(false)
    }

   const handleChangeDelet=(event: SelectChangeEvent)=>{
    setRoleId(event.target.value)
   }

    const handleChange = (event: SelectChangeEvent,id:string) => {
      setRole(event.target.value as string);
      setUserId(id)
      console.log(id);
    };

    const handleDeletUser = (id:string) =>{
      Swal.fire({
        title: 'Are you sure you want to delete this user?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) { 
          deletUserId(id)
        }
      })

    }

    const handleOpenDelet=()=>setOpenDelet(true)

    const handleOpen = () => setOpen(true);
   
    const handleCreate =()=>{
        createRoleName(roleName)
        setOpen(false)
    }

    
  useNotifications(succesDeletRole,'Deleted Role successfully')
  useNotifications(succesDeletUser,'Deleted User successfully')
  useNotifications(succesCreateRole,`(${roleName}) Role successfully Created!`)
  useNotifications(succesUpdateRole,'Role Updated successfully!')

    useEffect(()=>{
       if(role !==''){
        postUserIdAndRol({
            id:userId,
            role:role
          })
       }
    },[role])
    


  return (
    <div>
    <div>
        <Flex>
        <StyledBox>
        <Button onClick={handleOpen} variant="outline" radius="md" size="md" >
        Create Role
        </Button>
        </StyledBox>
        <StyledBox>
        <Button onClick={handleOpenDelet} variant="outline" color="red" radius="md" size="md" >
        Delete Role
        </Button>
        </StyledBox>
        </Flex>
      <TableContainer  sx={{ maxWidth: 950 }} component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor:"#eec05c "}} >
              <TableCell sx={{ width:110}}>Name</TableCell>
              <TableCell sx={{ width:130}}>Surname</TableCell>
              <TableCell sx={{ width:130}}>Username</TableCell>
              <TableCell sx={{ width:160}}>Email Address</TableCell>
              <TableCell sx={{ width:130}}>User Role</TableCell>
              <TableCell sx={{ width:90}}>User Delete</TableCell>
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
                    <DeletButtonBox>
                    <Tooltip title="Delete">
                    <IconButton onClick={()=>handleDeletUser(user.id)}>
                    <DeleteIcon />
                    </IconButton>
                    </Tooltip>
                    </DeletButtonBox>
                </TableCell>              
              </TableRow>
            )
            }
          </TableBody>
        </Table>
      </TableContainer>
      
      </div>


<div>
<Modal
 open={open}
 onClose={handleCreate}
>
<Box sx={style}>
<Typography id="modal-modal-title" variant="h6" component="h2">
    Create Role
</Typography>
  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
 
  <Box
  component="form"
  sx={{
  '& > :not(style)': { m: 1, width: '280px',marginLeft:4 },
  }}
  autoComplete="off"
>
  <TextField  required onChange={(ev)=>setroleName(ev.target.value)} id="outlined-basic"  variant="outlined" />
</Box>
<ModalBox>
<CreateButton onClick={handleCreate}>
  Create
</CreateButton>
</ModalBox>

  
 

</Typography>
</Box>
</Modal>
</div>

<div>
<Modal
 open={openDelet}
 onClose={handleDeletRole}
>
<Box sx={style}>
<Typography id="modal-modal-title" variant="h6" component="h2">
    Delete Role
</Typography>
  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
 
  
<Box sx={{ Width: 90}}>
<FormControl fullWidth>
<InputLabel id="demo-simple-select-label">Roles</InputLabel>
<Select
labelId="role"
id="role"
value={roleId}
label="role"
onChange={handleChangeDelet}
>
{AllRole?.map((role)=>
<MenuItem key={role.id} value={role.id}>{role.name}</MenuItem>
)}
        
</Select>
</FormControl>
</Box>    
<ModalBox>
<StyledRoleDelet>
<Button onClick={handleDeletRole} variant="outline"  radius="md" size="md">
<DeleteIcon/>Delete
</Button>
</StyledRoleDelet>

</ModalBox>

  
 

</Typography>
</Box>
</Modal>
</div>

    </div>
  )
}

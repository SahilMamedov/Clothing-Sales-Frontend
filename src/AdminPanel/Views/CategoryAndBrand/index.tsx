
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { 
Container, 
EditButton,
Wrapper,
CreateButton,
Flex,ButtonBox,
ModalBox,
} from './styles';
import { DeletButton } from '../Prdouct/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { ToastContainer, toast,Zoom } from 'react-toastify';
import {
  useFetchCategoryUpdateMutation,
useFetchCreateBrandMutation, 
useFetchCreateCategoryMutation, 
useFetchGetCategoryAndBrandQuery, 
useFetchRemoveBrandMutation, 
useFetchRemoveCategoryMutation, 
useFetchUpdateBrandMutation
} from 'services/AdminPanelServices/categoryAndBrandservices';



    import Box from '@mui/material/Box';
    import Typography from '@mui/material/Typography';
    import Modal from '@mui/material/Modal';
    import Radio from '@mui/material/Radio';
    import RadioGroup from '@mui/material/RadioGroup';
    import FormControlLabel from '@mui/material/FormControlLabel';
    import FormControl from '@mui/material/FormControl';
    import TextField from '@mui/material/TextField';
    import { useEffect, useState } from 'react';
    import Swal from "sweetalert2"
    const style = {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 370,
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 2,
    };


  

export const CategoryAndBrand = () => {

  const [updateDataName,setUpdateDataName] =useState<string>('')

  const [updateDataId,setUpdateDataId] =useState<number>(0)

  const [open, setOpen] = useState(false);

  const [openUpdate, setOpenUpdate] = useState(false);

  const [createData,setCreateData]= useState("")

  const [value, setValue] = useState('');

  const [variant,setVariant] = useState('')


  const {data} = useFetchGetCategoryAndBrandQuery()

  const [postCategoryName,{isSuccess:successCretaCategory,error:errorCreateCategory}] =useFetchCreateCategoryMutation()

  const [postBrandName,{isSuccess:successCreateBrand,error:errorCreateBrand}] = useFetchCreateBrandMutation()

  const [removeCategoryId,{isSuccess:successRemoveCategory}] = useFetchRemoveCategoryMutation()

  const [removeBrandId,{isSuccess:successRemoveBrand}] =useFetchRemoveBrandMutation()

  const [updateCategory,{isSuccess:successUpdateCategory,error:errorUpdateCategory}] = useFetchCategoryUpdateMutation()

  const [updateBrand,{isSuccess:successUpdateBrand,error:errorUpdateBrand}] = useFetchUpdateBrandMutation()
 
  
  
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
      };
      
      const handleOpen = () => setOpen(true);


      const handleOpenUpdate = (name:string,id:number,str:string) => {

        setUpdateDataId(id)
        setUpdateDataName(name)
        setVariant(str)
        setOpenUpdate(true)
        }

      const handleCloseUpdate = () => setOpenUpdate(false);

      const handleCreate =()=>{
        if(value==="Brand"){
          postBrandName({Name:createData})
          setOpen(false);
        }
        if(value==="Category"){
          postCategoryName({Name:createData})
          setOpen(false);
        }
       
      }

      const handleDeletCategory = (id:number)=>{
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) { 
           
            removeCategoryId(id)
          }
        })
        
      }

      const handleDeleteBrand =(id:number)=>{
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
           
            removeBrandId(id)
          }
        })
       
      }

      const handleUpdate = () => {
        if(variant==='category'){
          setOpenUpdate(false)
          Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
          }).then((result) => {

            if (result.isConfirmed) {
            updateCategory({Name:updateDataName,id:updateDataId})
         
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })


        }
        if(variant==='brand'){
          setOpenUpdate(false)
          Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
          }).then((result) => {
            if (result.isConfirmed) {
              updateBrand({Name:updateDataName,id:updateDataId})

            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
         })   
      }  
   }

    

      useEffect(()=>{
        if(successCretaCategory || successCreateBrand){
          toast.success('Created successfully', {
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
        
      },[successCretaCategory,successCreateBrand])


      useEffect(()=>{
        if(successRemoveCategory || successRemoveBrand){
          Swal.fire(
            'Deleted!',
            'successfully Deleted.',
            'success'
          )
        }
        
      },[successRemoveCategory,successRemoveBrand])


      useEffect(()=>{
        if(successUpdateCategory || successUpdateBrand){
          Swal.fire('Updated successfully!', '', 'success')
      
        }



        if(errorUpdateBrand){

        if("data" in errorUpdateBrand){   
          toast.error(`${errorUpdateBrand.data}`, {
            position: "bottom-right",
            autoClose: 5000,
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


         if(errorUpdateCategory){

          if("data" in errorUpdateCategory){   
            toast.error(`${errorUpdateCategory.data}`, {
              position: "bottom-right",
              autoClose: 5000,
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
        
      },[successUpdateCategory,successUpdateBrand,errorUpdateBrand,errorUpdateCategory])

      
      



    return (
    <Container>
      <ButtonBox>
      <CreateButton onClick={handleOpen} >
        Create 
      </CreateButton>
      </ButtonBox>
      
      <Flex>
      <Wrapper>
      
      <TableContainer   sx={{ maxWidth: 320 }} component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor:"#6dd8e6e6" }} >
              <TableCell sx={{ width:300}}>Brand Name</TableCell>
              <TableCell align='center' >Edit</TableCell>
              <TableCell align='center' >Delet</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data !== undefined &&
            data?.brand.map((brand) => (
              <TableRow
                key={brand.id}
                sx={{ '&:last-child td, &:last-child th': {  border: 0 } }}
              >
                <TableCell  component="th" scope="row">
                  {brand.name}
                </TableCell>
                <TableCell ><EditButton onClick={()=>handleOpenUpdate(brand.name,brand.id,'brand')}>Edit</EditButton></TableCell>
                <TableCell >
                  <DeletButton>
                  <Tooltip title="Delete">
                    <IconButton onClick={()=>handleDeleteBrand(brand.id)}>
                    <DeleteIcon  />
                    </IconButton>
                   </Tooltip>
                  </DeletButton>
                  </TableCell>
              </TableRow>
            ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      </Wrapper>
  
  
      <Wrapper>
      <TableContainer  sx={{ maxWidth: 320 }} component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor:"#88cbf0 "}} >
              <TableCell sx={{ width:300}}>Category Name</TableCell>
              <TableCell >Edit</TableCell>
              <TableCell >Delet</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data !==undefined &&
            data.category.map((category) => (
              <TableRow
                key={category.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {category.name}
                </TableCell>
                <TableCell ><EditButton onClick={()=>handleOpenUpdate(category.name,category.id,'category')}>Edit</EditButton></TableCell>
                <TableCell >
                  <DeletButton>
                  <Tooltip title="Delete">
                    <IconButton onClick={()=>handleDeletCategory(category.id)}>
                    <DeleteIcon  />
                    </IconButton>
                   </Tooltip>
                  </DeletButton>
                  </TableCell>
              </TableRow>
            ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      </Wrapper>
      </Flex>
    


      <div>
        
          <Modal
            open={open}
            onClose={handleCloseUpdate}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
              <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="Brand" control={<Radio />} label="Brand" />
        <FormControlLabel value="Category" control={<Radio />} label="Category" />
      </RadioGroup>
    </FormControl>
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
   
    <Box
    component="form"
    sx={{
    '& > :not(style)': { m: 1, width: '280px',marginLeft:4 },
    }}
    autoComplete="off"
  >
    <TextField  required onChange={(ev)=>setCreateData(ev.target.value)} id="outlined-basic" label={value} variant="outlined" />
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

     <>
     <div>
          <Modal
            open={openUpdate}
            onClose={handleCloseUpdate}
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
              <FormControl>
      Update 
        </FormControl>
       </Typography>
           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              
    <Box
    component="form"
    sx={{
    '& > :not(style)': { m: 1, width: '280px',marginLeft:4 },
    }}
    autoComplete="off"
  >
    <TextField required id="outlined-basic" onChange={(ev)=>setUpdateDataName(ev.target.value)} defaultValue={updateDataName} variant="outlined" />
  </Box>
  <ModalBox>
  <CreateButton onClick={handleUpdate}>
    Update
  </CreateButton>
  </ModalBox>
  </Typography>
  </Box>
  </Modal>
  </div>
     </>
    </Container>
   
  );
}

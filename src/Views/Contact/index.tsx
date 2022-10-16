// import * as React from 'react';
// import Button from '@mui/material/Button';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import styled from 'styled-components';
// import Dialog from '@mui/material/Dialog';
// import ReportProblemIcon from '@mui/icons-material/ReportProblem';
// import Typography from '@mui/joy/Typography';


// export const Container=styled(Dialog)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

// export const StyledBtn=styled.button`
//   background-color: #D3232F;
//   padding: 4px 16px ;
//   color: white;
//   border-radius: 6px;
//   border: none;
//   width: 120px;
//   font-weight: 600;
//   letter-spacing: 1px;
//   font-size: 0.875rem;
//   height: 40px;
// cursor: pointer;
// &:hover{
//   background-color: #A10E25;;
// }
// `
// export const StyledBox=styled.div`
// width: 420px;
// border-radius: 16px;
// border-radius: 16px;
// `
// export const Confirmation =styled.div`
//   margin: 15px;
// `
// export const CancelBtn=styled.button`
// width: 70px;
// height: 40px;
// border-radius: 6px;
// cursor: pointer;
// border: none;
// color: black;
// background-color: white;
// &:hover{
//   background-color:#eeeff0;
// }
// `


// export const Contact = ()=> {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open alert dialog
//       </Button>
//       <Container
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <StyledBox>
//           <Confirmation>
//           <Typography
//             id="alert-dialog-modal-title"
//             component="h2"
//             level="inherit"
//             fontSize="1.25em"
//             mb="0.25em"
//             startDecorator={<ReportProblemIcon />}
//           >
//             Confirmation
//           </Typography>
//           </Confirmation>
//        <hr/>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//           are you sure you want to delete?
          
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <CancelBtn onClick={handleClose}>Cancel</CancelBtn>
//           <StyledBtn onClick={handleClose} autoFocus>
//             Delet
//           </StyledBtn>
//         </DialogActions>
//         </StyledBox>
       
//       </Container>
     
//     </div>
//   );
// }







    import * as React from 'react';
    import Box from '@mui/material/Box';
    import Button from '@mui/material/Button';
    import Typography from '@mui/material/Typography';
    import Modal from '@mui/material/Modal';
    import Radio from '@mui/material/Radio';
    import RadioGroup from '@mui/material/RadioGroup';
    import FormControlLabel from '@mui/material/FormControlLabel';
    import FormControl from '@mui/material/FormControl';
    import TextField from '@mui/material/TextField';

    import Swal from "sweetalert2"
    export const Contact =()=> {

      

     const handleClick = ()=>{
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        confirmButtonColor: '#3085d6',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
     }
        


    
      return (
        <div>
         <button onClick={handleClick}>
          click
         </button>
  </div>
);
}




  
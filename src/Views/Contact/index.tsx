
//import Swal from 'sweetalert2/dist/sweetalert2.js'

import { useAppSelector } from "Redux/hooks/hooks";

//import 'sweetalert2/src/sweetalert2.scss'

  //  export const Contact = () => {
      
        

//const add=()=>{

  // Swal.fire({
  //   title: 'Are you sure?',
  //   text: "You won't be able to revert this!",
  //   icon: 'warning',
  //   showCancelButton: true,
  //   confirmButtonColor: '#3085d6',
  //   cancelButtonColor: '#d33',
  //   confirmButtonText: 'Yes, delete it!'
  // }).then((result:any) => {
  //   if (result.isConfirmed) {
  //     Swal.fire(
  //       'Deleted!',
  //       'Your file has been deleted.',
  //       'success'
  //     )
  //   }
  // })
    
// }
//       return (
//     <>
//     </>
// );
// }


export const Contact = () => {
  const {basket} = useAppSelector((state)=>state.basket)

  console.log(basket);

  return (
    <>
      Contact
    </>
  );
}
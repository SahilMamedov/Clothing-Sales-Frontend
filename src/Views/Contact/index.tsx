
//import Swal from 'sweetalert2/dist/sweetalert2.js'


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

import { Notification } from '@mantine/core';
  
  export const Contact =()=>{
  
    return (
      <>
       <Notification
        loading
        title="Uploading data to the server"
        disallowClose
      >
        Please wait until data is uploaded, you cannot close this notification yet
      </Notification>
      </>
    );
  }


  



  // import * as React from 'react';
  // import Tabs from '@mui/material/Tabs';
  // import Tab from '@mui/material/Tab';
  // import Typography from '@mui/material/Typography';
  // import Box from '@mui/material/Box';
  
  // interface TabPanelProps {
  //   children?: React.ReactNode;
  //   index: number;
  //   value: number;
  // }
  
  // function TabPanel(props: TabPanelProps) {
  //   const { children, value, index, ...other } = props;
  
  //   return (
  //     <div
  //       role="tabpanel"
  //       hidden={value !== index}
  //       id={`simple-tabpanel-${index}`}
  //       aria-labelledby={`simple-tab-${index}`}
  //       {...other}
  //     >
  //       {value === index && (
  //         <Box sx={{ p: 3 }}>
  //           <Typography>{children}</Typography>
  //         </Box>
  //       )}
  //     </div>
  //   );
  // }
  
  // function a11yProps(index: number) {
  //   return {
  //     id: `simple-tab-${index}`,
  //     'aria-controls': `simple-tabpanel-${index}`,
  //   };
  // }
  
  // export default function BasicTabs() {
  //   const [value, setValue] = React.useState(0);
  
  //   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //     setValue(newValue);
  //   };
  
  //   return (
  //     <Box sx={{ width: '100%' }}>
  //       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  //         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
  //           <Tab label="Item One" {...a11yProps(0)} />
  //           <Tab label="Item Two" {...a11yProps(1)} />
  //         </Tabs>
  //       </Box>
  //       <TabPanel value={value} index={0}>
  //         Item One
  //       </TabPanel>
  //       <TabPanel value={value} index={1}>
  //         Item Two
  //       </TabPanel>
      
  //     </Box>
  //   );
  // }








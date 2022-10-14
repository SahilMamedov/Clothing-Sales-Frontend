
import * as React from 'react';
import Box from '@mui/material/Box';
import { FileBox, StyledTextField,StyledButton,ProductImages,Images, IsLoading } from '../styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useFetchBrandAndCategoryQuery, useFetchGetOneProductQuery, useFetchUpdateProductMutation, } from 'services/AdminPanelServices/productServices';
import { useEffect, useState } from 'react';
import { FileInput, FileInputProps, Group, Center } from '@mantine/core';
import { IconPhoto } from '@tabler/icons';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast,Zoom } from 'react-toastify';






const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'S',
  'M',
  'L',
  'XS',
  'XL',
  'XXS',
  'XXL'
];



function Value({ file }: { file: File |null }) {
  return (
    <Center
      inline
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
        fontSize: theme.fontSizes.xs,
        padding: '3px 7px',
        borderRadius: theme.radius.sm,
      })}
    >
      <IconPhoto size={14} style={{ marginRight: 5 }} />
      <span
        style={{
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          maxWidth: 200,
          display: 'inline-block',
        }}
      >
        {file !== null && file.name}
      </span>
    </Center>
  );
}

const ValueComponent: FileInputProps['valueComponent'] = ({ value }) => {
  if (Array.isArray(value)) {
    
    return (
    
      <Group spacing="sm" py="xs">
        {value.map((file, index) => (
          <Value file={file} key={index} />
        ))}
      </Group>
    );
  }

  return <Value file={value} />;
};
export interface Props{
    productId:number;
  }

export const UpdateProduct = ({productId}:Props) => {
  const navigate=useNavigate()


    const [typeName, setTypeName] = React.useState('');

    const [brand,setBrand] = useState(0) 

    const [category,setCategory] = useState(0)

    const [trend,setTrend] = useState('')

    const [sizes, setSizes] = React.useState<string[]>([]);



    const {data:BrandAndCategory} = useFetchBrandAndCategoryQuery()

    const {data:getOneData} =useFetchGetOneProductQuery(productId)

    const [postProductUpdate,{isSuccess,isLoading}] = useFetchUpdateProductMutation()

   console.log(getOneData,"DATA");
   
    
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    postProductUpdate(data)
      };
     
      const handleChangeType = (event: SelectChangeEvent) => {
        setTypeName(event.target.value as string);
      };

      const handleChangeBrand = (event: any) => {
        setBrand(event.target.value as number  );
        
        
      };
      const handleChangeCategory = (event: any) => {
        setCategory(event.target.value as number );
      };

      const handleChangeTrend = (event: any) => {
        setTrend(event.target.value as string);
      };
     
      const handleChangeSize = (event: SelectChangeEvent<typeof sizes>) => {
        const {
          target: { value },
        } = event;
        setSizes(
          typeof value === 'string' ? value.split(',') : value,
        );
      };



      useEffect(()=>{
        if(isSuccess){
          toast.success('Created Product', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme:"colored",
            transition:Zoom
        
            });

            setTimeout(() => {
              navigate("/admin")
            }, 2000);
        }
      },[isSuccess])
      


  return (
   <>
   {getOneData !== undefined && 
   
   <>
   <Box
      component="form"
      onSubmit={handleSubmit}
      
      autoComplete="off"
    >
<Box sx={{
        '& > :not(style)': { m: 1, marginTop:6 },
      }}>
      <StyledTextField  defaultValue={getOneData.id} name='id' width='70px' id="id" label="Id" variant="outlined"  />
      <StyledTextField  required defaultValue={getOneData.name} name='Name' width='280px' id="outlined-basic" label="Name" variant="outlined" />
      <StyledTextField  defaultValue={getOneData.price} name='Price' width='150px'  id="outlined-basic" label="Price"type='number' variant="outlined" />
      <StyledTextField  defaultValue={getOneData.discount} name='Discount' width='150px' id="outlined-basic" label="Discount" type='number' variant="outlined" />
      <StyledTextField  defaultValue={getOneData.color} name='Color' width='150px' id="outlined-basic" label="Color"  variant="outlined" />
  
      
</Box>
<Box sx={{
        '& > :not(style)': { m: 1,marginTop:4  },
      }}>

      <FormControl sx={{ minWidth: 160 }} >
        <InputLabel id="brand" >Brand</InputLabel>
        <Select

          labelId="brandId"
          id="brandId"
          label="Brand"
          name='BrandId'
          value={brand?brand:getOneData.brand.id}
          onChange={handleChangeBrand}
          
        >
        {BrandAndCategory !== undefined && 
         
         BrandAndCategory.brand?.map((item)=>
        
             <MenuItem   key={item.id} value={item.id} >{item.name}</MenuItem>
            
             
            )
            
        } 
            
        </Select>
      </FormControl>
      
      <FormControl sx={{ minWidth: 160 }} >
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="CategoryId"
          id="CategoryId"
          name='CategoryId'
          label="Category"
          onChange={handleChangeCategory}
          value={category?category:getOneData.category.id}
        >
            
         {
            BrandAndCategory?.category?.map((item)=>
            <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
            )
            }
          
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 120 }} >
       
        <InputLabel >Trend</InputLabel>
        <Select
          labelId="trend"
          id="trend"
          name='Trending'
          value={trend?trend:getOneData.trending}
          label="Trending"
          onChange={handleChangeTrend}
        >
          <MenuItem  value='true'>Yes</MenuItem>
          <MenuItem value='false'>No</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 120 }} >
        <InputLabel id="typename">{typeName?typeName:getOneData.typename}</InputLabel>
        <Select
          labelId="typename"
          id="typename"
          value={typeName?typeName:getOneData.typename}
          label="Typename"
          name='TypeName'
          onChange={handleChangeType}
        >
          <MenuItem value='Men'>Men</MenuItem>
          <MenuItem value='Women'>Women</MenuItem>
          <MenuItem value='Kids'>Kids</MenuItem>
        </Select>
      </FormControl>

       <FormControl sx={{ m: 1, width: 250 }}>
        <InputLabel id="size">Size</InputLabel>
        <Select
          labelId="size"
          name='Sizes'
          id="size"
          
          multiple
          value={sizes}
          onChange={handleChangeSize}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox  checked={sizes.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
        
      </FormControl> 

      <FileBox >
        <ProductImages>
          {getOneData.productPhotos.map((img)=>
            <Images key={img.path} src={img.path}/>
          )}
        </ProductImages>
      <FileInput name='ChildPhotos' label="Multiple Photo" placeholder="Photos" multiple valueComponent={ValueComponent} />
      <FileInput name='Photos' mt="md" label="Single Photo" placeholder="Photo" valueComponent={ValueComponent} />
      </FileBox>
     
    
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
<StyledButton> {isLoading?
      <IsLoading >
          <CircularProgress
        color="inherit"
        size='28px'
/>
      </IsLoading>:"Save Changes"}
      </StyledButton>
</Box>
   </>
   
   }
   </>
    
  );
}
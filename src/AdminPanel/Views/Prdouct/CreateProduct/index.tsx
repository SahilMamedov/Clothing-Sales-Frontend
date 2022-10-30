
import * as React from 'react';
import Box from '@mui/material/Box';
import { FileBox, StyledTextField,StyledButton,IsLoading } from '../styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useFetchBrandAndCategoryQuery, useFetchCreateProductMutation } from 'services/AdminPanelServices/productServices';
import { useEffect, useState } from 'react';
import { FileInput, FileInputProps, Group, Center } from '@mantine/core';
import { IconPhoto } from '@tabler/icons';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';
import { toast,Zoom } from 'react-toastify';
import { useNavigate } from 'react-router-dom';






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
  'XXL',
  '24',
  '6years',
  '3years',
  '12years',
  '4years',
  '10years'
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
    // console.log(value,"value");
    
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


export const CreateProduct = () => {

    const [typeName, setTypeName] = React.useState('');

    const [brand,setBrand] = useState('') 

    const [category,setCategory] = useState('')

    const [trend,setTrend] = useState('')

    const [sizes, setSizes] = React.useState<string[]>([]);



    const {data:BrandAndCategory} = useFetchBrandAndCategoryQuery()

    const [postProductCreate,{isSuccess,isLoading}] = useFetchCreateProductMutation() 
    const navigate =useNavigate()
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    postProductCreate(data)
    
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
              navigate("/admin/dashboard")
            }, 2000);
        }
      },[isSuccess])
      
      const handleChangeType = (event: SelectChangeEvent) => {
        setTypeName(event.target.value as string);
      };

      const handleChangeBrand = (event: SelectChangeEvent) => {
        setBrand(event.target.value as string);
      };
      const handleChangeCategory = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
      };

      const handleChangeTrend = (event: SelectChangeEvent) => {
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

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      
      autoComplete="off"
    >
       
<Box sx={{
        '& > :not(style)': { m: 1, marginTop:6 },
      }}>
      <StyledTextField required name='Name' width='280px' id="outlined-basic" label="Name" variant="outlined" />
      <StyledTextField required name='Price' width='150px'  id="outlined-basic" label="Price"type='number' variant="outlined" />
      <StyledTextField required name='Discount' width='150px' id="outlined-basic" label="Discount" type='number' variant="outlined" />
      <StyledTextField required name='Color' width='150px' id="outlined-basic" label="Color"  variant="outlined" />
  
      
</Box>
<Box sx={{
        '& > :not(style)': { m: 1,marginTop:4  },
      }}>

      <FormControl sx={{ minWidth: 160 }} >
        <InputLabel id="brand">Brand</InputLabel>
        <Select
          labelId="brand"
          id="brand"
          label="Brand"
          required
          name='BrandId'
          value={brand}
          onChange={handleChangeBrand}
          
        >
        {BrandAndCategory !== undefined && 
         
         BrandAndCategory.brand?.map((item)=>
        
             <MenuItem key={item.id} value={item.id} >{item.name}</MenuItem>
            
             
            )
            
        } 
            
        </Select>
      </FormControl>
      
      <FormControl sx={{ minWidth: 160 }} >
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="category"
          id="category"
          name='CategoryId'
          label="category"
          required
          onChange={handleChangeCategory}
          value={category}
        >
            
         {
            BrandAndCategory?.category?.map((item)=>
            <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
            )
            }
          
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 120 }} >
        <InputLabel id="demo-simple-select-label">Trending</InputLabel>
        <Select
          labelId="trend"
          id="trend"
          name='Trending'
          value={trend}
          label="Trending"
          required
          onChange={handleChangeTrend}
        >
          <MenuItem value='True'>Yes</MenuItem>
          <MenuItem value='False'>No</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 120 }} >
        <InputLabel id="typename">TypeName</InputLabel>
        <Select
          labelId="typename"
          id="typename"
          required
          value={typeName}
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
          required
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
              <Checkbox checked={sizes.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FileBox >
      <FileInput sx={{  width: 270 }} required name='ChildPhotos' label="Additional Photos" placeholder="Photos" multiple valueComponent={ValueComponent} />
      <FileInput sx={{  width: 270 }} required name='Photos' mt="md" label="Single Photo" placeholder="Photo" valueComponent={ValueComponent} />
      </FileBox>
    
</Box>
<StyledButton> {isLoading?
      <IsLoading >
          <CircularProgress
        color="inherit"
        size='28px'
/>
      </IsLoading>:"Create Product"}
      </StyledButton>
</Box>
  );
}
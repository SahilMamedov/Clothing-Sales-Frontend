// import {
//   StyledCaretDown,
//   StyledContainer,
//   StyledFilerIcon,
//   StyledFilers,
//   StyledIsLoading,
//   StyledItem,
//   StyledRow,
//   StyledSort,
//   StyledWrapper,
// } from "./styles";
// import { Goods } from "Components/shared/ProductCard";
// import { FC, useEffect, useState } from "react";
// import { useFetchGoodsCategoryQuery } from "services/goodsServices";
// import Box from "@mui/material/Box";
// import CircularProgress from "@mui/material/CircularProgress";
// import { useParams } from "react-router-dom";
// import { StyledNavlink, StyledPagination } from "../Shop/styles";
// import Pagination from '@mui/material/Pagination';
// export const Category: FC = () => {
//   const params = useParams();

//   const {
//     data,
//     isError,
//     isLoading,
//     refetch: fetchGoods,
//   } = useFetchGoodsCategoryQuery(params.category, {
//     skip: !params.category,
//   });
//   useEffect(() => {
//     fetchGoods();
//   }, [params.category]);

// const [datalength,setDataLength]=useState(0)


// useEffect(()=>{
//   if(data){
//   setDataLength(Math.ceil(data.length/12))
  
//   }
  
// },[data])
//   console.log(data,"data");
  
  
//   return (
//     <>
//       <StyledContainer>
//         <StyledWrapper>
//           <StyledFilers>
//             Filters
//             <StyledFilerIcon />
//           </StyledFilers>
//           <StyledSort>
//             Sort By
//             <StyledCaretDown />
//           </StyledSort>
//         </StyledWrapper>
//         <StyledIsLoading>
//           {isLoading && (
//             <Box sx={{ display: "flex" }}>
//               <CircularProgress />
//             </Box>
//           )}
//         </StyledIsLoading>
//         <StyledRow>
//           {data?.map((item) => (
//             <StyledItem key={item.id}>
//               <StyledNavlink to={`/productdetail/${item.id}`}>
//                 <Goods {...item} />
//               </StyledNavlink>
//             </StyledItem>
//           ))}
//         </StyledRow>
//         <StyledPagination>
//         <Pagination   count={datalength} color="primary" />
//         </StyledPagination>
//       </StyledContainer>
//     </>
//   );
// };



import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import CircularProgress from "@mui/material/CircularProgress";
import { useFetchBrandQuery, useFetchCategoryQuery, useFetchFilterProductQuery } from "services/shopServices";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FC, useEffect, useState } from "react";
import {useTranslation} from "react-i18next"
import { Goods } from "Components";
import {
  CloseIcon,
  Container,
  Goodsbox,
  Line,
  ListItem,
  Loading,
  OpenIcon,
  PriceValue,
  SideBar,
  SideBarBox,
  SideBarTitle,
  StyledNavlink,
  Title,
  Value,
  Wrapper,
  WrapperCard,
  StyledPagination
} from "./styles";
import { debounce } from "lodash";
import Pagination from '@mui/material/Pagination';
import { useParams } from "react-router-dom";
function valuetext(value: number) {
  return `${value}°C`;
}




export const Category: FC = () => {

  const {t} =useTranslation()

  const params = useParams();
  
  const [value, setValue] = useState<number[]>([0,100]);

  const [maxPrice, setMaxPrice] = useState<number>(100);

  const [minPrice, setMinPrice] = useState<number>(0);

  const [checkedBrand, setCheckedBrand] = useState<number[]>([]);

  const [openCategory, setopenCategory] = React.useState(true);

  const [page, setPage] = useState(1)

  const [openBrand, setopenBrand] = React.useState(true);

  const [checkedCategory, setCheckedCategory] = useState<number[]>([]);



  
  
  



  const handleCheckBrand = (event:any) => {
    if (event.target.checked) {
      setCheckedBrand([...checkedBrand,+event.target.value])
      
    } else {
      setCheckedBrand(checkedBrand.filter(x=>x !== +event.target.value))
  
    }
    
  };


const handleCheckCategory = (event:any) => {

  
  if (event.target.checked) {
    setCheckedCategory([...checkedCategory,+event.target.value])
    
  } else {
    setCheckedCategory(checkedCategory.filter(x=>x !== +event.target.value))

  }

  
};

const debounced = debounce(async (criteria) => {
  // setCharacters(await search(criteria));
  setMaxPrice(criteria[1])
  setMinPrice(criteria[0])
}, 1000);

const handleChange = (event: Event, newValue: number | number[]) => {
  setValue(newValue as number[]); 
  debounced(value) 
};


const handleClickBrand = () => {
  setopenBrand(!openBrand);
};

const handleClickCategory = () => {
  setopenCategory(!openCategory);
};
  
let postFilter={
  brandIds:checkedBrand,
  categoryIds:checkedCategory,
  maxPrice:maxPrice,
  minPrice:minPrice,
  page:page,
  typeName:params.category
}

console.log(postFilter.typeName,'type');

  const {data:filteredData,isLoading} = useFetchFilterProductQuery(postFilter)


  

  const {data:dataBrands} =useFetchBrandQuery()

  const {data:dataCategory} =  useFetchCategoryQuery()

 

const handlePagChange = (event: React.ChangeEvent<unknown>, value: number)  =>{
  
  setPage(value)
}

const [datalength,setDataLength]=useState(0)


useEffect(()=>{
  if(filteredData){
  setDataLength(Math.ceil(filteredData.totalCount/24))
  
  }
  
},[filteredData])

 

  return (
    <>
      <Container>
        <Wrapper>
        <SideBar>
          <SideBarBox>
            <SideBarTitle>{t('Filters')}</SideBarTitle>
            <Title>{t('Price')}</Title>
            <Box sx={{ width: 300 }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </Box>
            <PriceValue>
              <Value> {value[0]}</Value>
              <Value>{value[1]}</Value>
            </PriceValue>
            <Line />
            <Title onClick={handleClickBrand}>
              {t('Brand')} {openBrand ? <OpenIcon /> : <CloseIcon />}
            </Title>
            {openBrand
              ? dataBrands?.map((brand) => (
                  <ListItem key={brand.id}>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                          value={brand.id}
                            onChange={handleCheckBrand}
                          />
                        }
                        label={brand.name}
                      />
                    </FormGroup>
                  </ListItem>
                ))
              : ""}
            <Line />
            <Title onClick={handleClickCategory}>
            {t('Category')} {openCategory ? <OpenIcon /> : <CloseIcon />}
            </Title>
            {openCategory
              ? dataCategory?.map((category) => (
                  <ListItem key={category.id}>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox value={category.id} onChange={handleCheckCategory} />} label={category.name} />
                    </FormGroup>
                  </ListItem>
                ))
              : ""}
            <Line />
          </SideBarBox>
        </SideBar>
        <Loading>
          {isLoading && (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
        </Loading>
        <Goodsbox>
          {filteredData?.result?.map((item) => (
            <WrapperCard key={item.id}>
              <StyledNavlink key={item.id} to={`/productdetail/${item.id}`}>
                <Goods {...item} />
              </StyledNavlink>
            </WrapperCard>
          ))}
        </Goodsbox>
        </Wrapper>
        <StyledPagination>
        <Pagination  onChange={handlePagChange} count={datalength} color="primary" />
        </StyledPagination>
      </Container>
     
    </>
  );
};


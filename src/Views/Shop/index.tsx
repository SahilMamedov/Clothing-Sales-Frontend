import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useFetchGoodsQuery } from "services/goodsServices";
import { FC, useEffect, useState } from "react";
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
  StyledBox,
  StyledNavlink,
  Title,
  Value,
  WrapperCard,
} from "./styles";
import { IGoods } from "types";
import { NavLink } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { useFetchBrandQuery, useFetchCategoryQuery } from "services/shopServices";

function valuetext(value: number) {
  return `${value}°C`;
}
export const Shop: FC = () => {
  const [value, setValue] = React.useState<number[]>([0, 0]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    console.log(value[0]);
    console.log(value[1]);
  };

  const { data, isError, isLoading } = useFetchGoodsQuery();

  const {data:dataBrands} =useFetchBrandQuery()
  const {data:dataCategory} =  useFetchCategoryQuery()

 
  const [openCategory, setopenCategory] = React.useState(false);

  const [openBrand, setopenBrand] = React.useState(false);

  const [checked, setChecked] = useState<string>();



 
  
  const handleClickBrand = () => {
    setopenBrand(!openBrand);
  };
  const handleClickCategory = () => {
    setopenCategory(!openCategory);
  };
  return (
    <>
      <Container>
        <SideBar>
          <SideBarBox>
            <SideBarTitle>Filters</SideBarTitle>
            <Title>Price </Title>
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
              Brand {openBrand ? <OpenIcon /> : <CloseIcon />}
            </Title>
            {openBrand
              ? dataBrands?.map((brand) => (
                  <ListItem key={brand.id}>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={() =>
                              "checked" ? setChecked(brand.name) : setChecked("")
                            }
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
              Category {openCategory ? <OpenIcon /> : <CloseIcon />}
            </Title>
            {openCategory
              ? dataCategory?.map((category) => (
                  <ListItem key={category.id}>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox onChange={() =>
                              "checked" ? setChecked(category.name) : setChecked("")
                            } />} label={category.name} />
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
          {data?.map((item) => (
            <WrapperCard key={item.id}>
              <StyledNavlink key={item.id} to={`/productdetail/${item.id}`}>
                <Goods {...item} />
              </StyledNavlink>
            </WrapperCard>
          ))}
        </Goodsbox>
      </Container>
    </>
  );
};

import Box from "@mui/joy/Box";
import Slider from "@mui/joy/Slider";
import * as React from "react";

import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useFetchGoodsQuery } from "services/goodsServices";
import { FC, useState } from "react";
import { Goods } from "Components";
import {
  CloseIcon,
  Container,
  Goodsbox,
  Line,
  ListItem,
  Loading,
  OpenIcon,
  SideBar,
  SideBarBox,
  SideBarTitle,
  StyledBox,
  StyledNavlink,
  Title,
  WrapperCard,
} from "./styles";
import { IGoods } from "types";
import { NavLink } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

function valueText(value: number) {
  return `${value}°C`;
}
export const Shop: FC = () => {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const { data, isError, isLoading } = useFetchGoodsQuery();
  const data1 = ["data1", "data2", "data3", "data4", "data5"];
  const [openColor, setopenColor] = React.useState(false);
  const [openBrand, setopenBrand] = React.useState(false);
  const [checked, setChecked] = useState<string>();
  const handleClickBrand = () => {
    setopenBrand(!openBrand);
  };
  const handleClickDiscount = () => {
    setopenColor(!openColor);
  };
  return (
    <>
      <Container>
        <SideBar>
          <SideBarBox>
            <SideBarTitle>Filters</SideBarTitle>
            <Title>Price</Title>
            <Box sx={{ width: 300, color: "red" }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valueText}
              />
            </Box>
            <Line />
            <Title onClick={handleClickBrand}>
              Brand {openBrand ? <OpenIcon /> : <CloseIcon />}
            </Title>
            {openBrand
              ? data1.map((item, index) => (
                  <ListItem key={index}>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={() =>
                              "checked" ? setChecked(item) : setChecked("")
                            }
                          />
                        }
                        label={item}
                      />
                    </FormGroup>
                  </ListItem>
                ))
              : ""}
            <Line />
            <Title onClick={handleClickDiscount}>
              Color {openColor ? <OpenIcon /> : <CloseIcon />}
            </Title>
            {openColor
              ? data1.map((item, index) => (
                  <ListItem key={index}>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox />} label={item} />
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

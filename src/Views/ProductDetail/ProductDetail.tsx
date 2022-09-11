import { useParams } from "react-router-dom";
import { useFetchGetGoodsQuery } from "../../services/goodsServices";
import Slider from "react-slick";
import {
  Container,
  ContentBold,
  Content,
  Flex,
  IsMainImg,
  IsMainImgBox,
  ProductInformation,
  ProductName,
  Select,
  SliderBox,
  SliderImg,
  StyledBrandName,
  StyledButton,
  StyledDiscount,
  StyledDiscountPrice,
  StyledPrice,
  StyledSize,
  StyledSlider,
  VerticalSlider,
  WrapperColor,
  WrapperImg,
  WrapperSize,
  ContentLink,
  ColorImg,
  ButtonBox,
  Loading,
  Boxx,
} from "./styles";

import { Rating } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { StyledRow } from "../Home/styles";
import { StyledHeartIcon } from "../../Components/layout/Header/styles";
import { useEffect, useState } from "react";
import * as React from "react";

export const ProductDetail = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  const { id } = useParams();

  const { data, isLoading, isError } = useFetchGetGoodsQuery(`${id}`);

  console.log(data);
  const [image, setImg] = useState(data?.ProductImgUrl[0]);

  const handleClick = (image: string) => {
    setImg(image);
  };
  return (
    <Container>
      <Boxx>
        <Loading>
          {isLoading && (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
        </Loading>
      </Boxx>
      {data !== undefined && (
        <>
          <WrapperImg>
            <VerticalSlider>
              <StyledSlider {...settings}>
                {data?.ProductImgUrl.map((img) => (
                  <SliderBox key={img}>
                    {img !== undefined && (
                      <SliderImg onClick={() => handleClick(img)} src={img} />
                    )}
                  </SliderBox>
                ))}
              </StyledSlider>
            </VerticalSlider>
            <IsMainImgBox>
              <IsMainImg src={image} />
            </IsMainImgBox>
          </WrapperImg>
          <ProductInformation>
            <ProductName>{data?.Name}</ProductName>
            <StyledBrandName>{data?.BrandName}</StyledBrandName>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            <Flex>
              <StyledDiscountPrice>{data?.Discount}$</StyledDiscountPrice>
              <StyledPrice>${data?.Price}</StyledPrice>
              <StyledDiscount>{`(${data?.Discount} % off)`}</StyledDiscount>
            </Flex>
            <Select>Select Size</Select>
            <WrapperSize>
              {data?.Size.map((s) => (
                <StyledSize key={s}>{s}</StyledSize>
              ))}
            </WrapperSize>
            <Select>Select Color</Select>
            <WrapperColor>
              {data?.ProductImgUrl.map((c) => (
                <ColorImg key={c} src={c} />
              ))}
            </WrapperColor>
            <Select>Best offers</Select>
            <Flex>
              <ContentBold>Special offer</ContentBold>
              <Content>get 25% off</Content>
              <ContentLink>T&C</ContentLink>
            </Flex>
            <Flex>
              <ContentBold>Bank offer</ContentBold>
              <Content>get 30% off on Axis Bank Credit card</Content>
              <ContentLink>T&C</ContentLink>
            </Flex>
            <Flex>
              <ContentBold>Wallet offer</ContentBold>
              <Content>
                get 40% cashback via Paytm wallet on first transaction
              </Content>
              <ContentLink>T&C</ContentLink>
            </Flex>
            <Flex>
              <ContentBold>Special offer</ContentBold>
              <Content>get 25% off</Content>
              <ContentLink>T&C</ContentLink>
            </Flex>
            <ButtonBox>
              <StyledButton>Add to cart</StyledButton>
              <StyledHeartIcon />
            </ButtonBox>
          </ProductInformation>
        </>
      )}
    </Container>
  );
};

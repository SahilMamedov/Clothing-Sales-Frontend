import {
  StyledBrandName,
  StyledCard,
  StyledCardImg,
  StyledInformation,
  StyledDiscountPrice,
  StyledProductName,
  StyledPrice,
  StyledDiscount,
} from "./styled";
import { FC } from "react";
import { IGoods } from "types";

export const Goods: FC<IGoods> = ({
  id,
  Name,
  BrandName,
  Discount,
  Price,
  isMainImg,
}) => {
  return (
    <>
      <StyledCard key={id}>
        <StyledCardImg src={isMainImg} />
        <StyledInformation>
          <StyledProductName>{Name}</StyledProductName>
          <StyledBrandName>{BrandName}</StyledBrandName>
          <StyledDiscountPrice>${Price * Discount}</StyledDiscountPrice>
          <StyledPrice>${Price}</StyledPrice>
          <StyledDiscount>
            {Discount > 0 && `(${Discount} % off)`}
          </StyledDiscount>
        </StyledInformation>
      </StyledCard>
    </>
  );
};

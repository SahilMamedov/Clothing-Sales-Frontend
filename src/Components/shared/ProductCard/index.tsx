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
  name,
  brandName,
  discount,
  price,
  photoPath,
  discountPrice,
}) => {
  return (
    <StyledCard key={id}>
      <StyledCardImg src={photoPath} />
      <StyledInformation>
        <StyledProductName>{name}</StyledProductName>
        <StyledBrandName>{brandName}</StyledBrandName>
        <StyledDiscountPrice>${discountPrice}</StyledDiscountPrice>
        <StyledPrice>${price}</StyledPrice>
        <StyledDiscount>{`(${discount} % off)`}</StyledDiscount>
      </StyledInformation>
    </StyledCard>
  );
};

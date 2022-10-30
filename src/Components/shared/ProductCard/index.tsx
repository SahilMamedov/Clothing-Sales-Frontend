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
import {useTranslation} from "react-i18next"

export const Goods: FC<IGoods> = ({
  id,
  name,
  discount,
  price,
  discountPrice,
  brand,
  photoPath,
  productPhotos,
  
}) => {
  const {t} =useTranslation()
  return (
    <StyledCard key={id}>
      {productPhotos!== null ? productPhotos.map(item=>item.isMain && <StyledCardImg key={item.id} src={item.path}  />):<StyledCardImg src={photoPath}/>}
      
      <StyledInformation>
        <StyledProductName>{name}</StyledProductName>
        <StyledBrandName>{brand.name}</StyledBrandName>
        <StyledDiscountPrice>${discountPrice.toFixed(2)}</StyledDiscountPrice>
        <StyledPrice>${price}</StyledPrice>
        <StyledDiscount>{`(${discount} ${t('Off')})`}</StyledDiscount>
      </StyledInformation>
    </StyledCard>
  );
};

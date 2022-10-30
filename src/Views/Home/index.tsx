import { MainSlider } from "Components/shared/Slider/MainSlider";
import {
  Container,
  StyledFeaturedBlogs,
  StyledMain,
  StyledRow,
  StyledTrending,
} from "./styles";
import { useFetchGoodsQuery, useFetchNewArrivalGoodsQuery } from "services/goodsServices";
import { TrendingSlider } from "Components/shared/Slider/TrendingSlider";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { StyledCustomerTitle } from "Components/shared/CustomerFeedBack/styles";
import { CustomerFeedbackSlider } from "Components/shared/Slider/CustomerFeedbackSlider";
import { BlogsSlider } from "Components/shared/Slider/BlogsSlider";
import { useUser } from "Hooks/useUser";
import { NewArrivalGoods } from "Components/shared/Slider/NewArriwalGoods";
import {useTranslation} from "react-i18next"
export const Home = () => {

  const {t} =useTranslation()

  useUser();
  const { data, isLoading } = useFetchGoodsQuery();
  const {data:newArrivalGoods} = useFetchNewArrivalGoodsQuery()

  return (
    <StyledMain>
      <MainSlider />
      <Container>
        <StyledTrending>{t('TrendingNow')}</StyledTrending>
        <StyledRow>
          {isLoading && (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
        </StyledRow>
        <TrendingSlider data={data?.filter((p) => p.trending)} />
        <StyledTrending>{t('NewArrivalProduct')}</StyledTrending>
        <NewArrivalGoods data={newArrivalGoods}/>
        <StyledCustomerTitle>{t('WhatOurCustomerSays')}</StyledCustomerTitle>
        <CustomerFeedbackSlider />
        <StyledFeaturedBlogs>{t('FeaturedBlogs')}</StyledFeaturedBlogs>
        <BlogsSlider />
      </Container>
    </StyledMain>
  );
};

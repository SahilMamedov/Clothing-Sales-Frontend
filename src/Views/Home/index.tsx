import { MainSlider } from "Components/shared/Slider/MainSlider";
import {
  Container,
  StyledFeaturedBlogs,
  StyledMain,
  StyledRow,
  StyledTrending,
} from "./styles";
import { useFetchGoodsQuery } from "services/goodsServices";
import { TrendingSlider } from "Components/shared/Slider/TrendingSlider";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { StyledCustomerTitle } from "Components/shared/CustomerFeedBack/styles";
import { CustomerFeedbackSlider } from "Components/shared/Slider/CustomerFeedbackSlider";
import { BlogsSlider } from "Components/shared/Slider/BlogsSlider";
import { useUser } from "Hooks/useUser";

export const Home = () => {
  useUser();
  const { data, isLoading } = useFetchGoodsQuery();
  return (
    <StyledMain>
      <MainSlider />
      <Container>
        <StyledTrending>Trending Now</StyledTrending>
        <StyledRow>
          {isLoading && (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
        </StyledRow>
        <TrendingSlider data={data?.filter((p) => p.trending)} />
        <StyledCustomerTitle>What Our Customer Says</StyledCustomerTitle>
        <CustomerFeedbackSlider />
        <StyledFeaturedBlogs>Featured Blogs</StyledFeaturedBlogs>
        <BlogsSlider />
      </Container>
    </StyledMain>
  );
};

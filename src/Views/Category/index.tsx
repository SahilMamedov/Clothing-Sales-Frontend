import {
  StyledCaretDown,
  StyledContainer,
  StyledFilerIcon,
  StyledFilers,
  StyledIsLoading,
  StyledItem,
  StyledRow,
  StyledSort,
  StyledWrapper,
} from "./styles";
import { Goods } from "Components/shared/ProductCard";
import { FC, useEffect } from "react";
import { useFetchGoodsCategoryQuery } from "services/goodsServices";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";
import { StyledNavlink } from "../Shop/styles";

export const Category: FC = () => {
  const params = useParams();

  const {
    data,
    isError,
    isLoading,
    refetch: fetchGoods,
  } = useFetchGoodsCategoryQuery(params.category, {
    skip: !params.category,
  });
  useEffect(() => {
    fetchGoods();
  }, [params.category]);
  return (
    <>
      <StyledContainer>
        <StyledWrapper>
          <StyledFilers>
            Filters
            <StyledFilerIcon />
          </StyledFilers>
          <StyledSort>
            Sort By
            <StyledCaretDown />
          </StyledSort>
        </StyledWrapper>
        <StyledIsLoading>
          {isLoading && (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
        </StyledIsLoading>
        <StyledRow>
          {data?.map((item) => (
            <StyledItem key={item.id}>
              <StyledNavlink to={`/productdetail/${item.id}`}>
                <Goods {...item} />
              </StyledNavlink>
            </StyledItem>
          ))}
        </StyledRow>
      </StyledContainer>
    </>
  );
};

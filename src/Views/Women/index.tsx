import {
  StyledCaretDown,
  StyledContainer,
  StyledFilerIcon,
  StyledFilers,
  StyledItem,
  StyledRow,
  StyledSort,
  StyledWrapper,
} from "./styles";
import { Goods } from "Components/shared/ProductCard";
import { FC } from "react";
import { useFetchGoodsQuery } from "services/goodsServices";
import { StyledIsLoading } from "../Men/styles";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import * as React from "react";

export const Women: FC = () => {
  const { data, isError, isLoading } = useFetchGoodsQuery();
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
          {data?.map(
            (item) =>
              item.TypeName == "Women" && (
                <StyledItem key={item.id}>
                  <Goods {...item} />
                </StyledItem>
              )
          )}
        </StyledRow>
      </StyledContainer>
    </>
  );
};

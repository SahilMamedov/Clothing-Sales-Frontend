import { useParams } from "react-router-dom";
import { useFetchGetGoodsQuery } from "../../services/goodsServices";
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
  ProductDetailWrapper,
  ProductContainer,
  DetailTitle,
  DetailDesc,
  StyledTextField,
  CommentButton,
  CommentBox,
  Comment,
} from "./styles";

import { Button, Rating } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { StyledHeartIcon } from "Components/layout/Header/styles";
import SendIcon from "@mui/icons-material/Send";
import { useRef, useState } from "react";
import * as React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export const ProductDetail = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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

  const [image, setImage] = useState(data?.ProductImgUrl[0]);

  const handleClick = (image: string) => {
    setImage(image);
  };

  const [comment, setComment] = useState<any[]>([""]);

  const changeHandler = (ev: any) => {
    setComment(ev.target.value);
  };

  const handleAddComment = () => {};

  return (
    <Container>
      <ProductContainer>
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
                      <SliderImg onClick={() => handleClick(img)} src={img} />
                      <>
                        {image == undefined && setImage(data.ProductImgUrl[0])}
                      </>
                    </SliderBox>
                  ))}
                </StyledSlider>
              </VerticalSlider>
              <IsMainImgBox>
                <IsMainImg src={image} />
                {/*<Div>*/}
                {/*  <StyledReactImageMagnify*/}
                {/*    {...{*/}
                {/*      smallImage: {*/}
                {/*        alt: "Wristwatch by Ted Baker London",*/}
                {/*        isFluidWidth: true,*/}
                {/*        src: `${image}`,*/}
                {/*      },*/}
                {/*      largeImage: {*/}
                {/*        src: `${image}`,*/}
                {/*        width: 1000,*/}
                {/*        height: 2600,*/}
                {/*      },*/}
                {/*    }}*/}
                {/*  />*/}
                {/*</Div>*/}
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
      </ProductContainer>
      <ProductDetailWrapper>
        <Box>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Product Details" {...a11yProps(0)} />
              <Tab label="Ratings & Reviews" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <>
              <DetailTitle>Product Details</DetailTitle>
              <DetailDesc>
                Blue washed jacket, has a spread collar, 4 pockets, button
                closure, long sleeves, straight hem
              </DetailDesc>
              <DetailTitle>Size & Fit</DetailTitle>
              <DetailDesc>
                The model (height 5'8") is wearing a size S
              </DetailDesc>
              <DetailTitle>Material & Care</DetailTitle>
              <DetailDesc>
                100% cotton
                <br />
                Machine Wash
              </DetailDesc>
            </>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <>
              <DetailTitle>Ratings</DetailTitle>
              <Flex>
                <StyledTextField
                  onChange={changeHandler}
                  id="filled-basic"
                  label="comment"
                  variant="filled"
                />
                <CommentButton>
                  <Button
                    onClick={handleAddComment}
                    variant="contained"
                    endIcon={<SendIcon />}
                  >
                    Send
                  </Button>
                </CommentButton>
              </Flex>
              <CommentBox>{comment}</CommentBox>
            </>
          </TabPanel>
        </Box>
      </ProductDetailWrapper>
    </Container>
  );
};

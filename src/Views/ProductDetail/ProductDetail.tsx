import { useNavigate, useParams } from "react-router-dom";
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
  StyledSlider,
  VerticalSlider,
  WrapperColor,
  WrapperImg,
  WrapperSize,
  ContentLink,
  ButtonBox,
  Loading,
  ProductDetailWrapper,
  ProductContainer,
  DetailTitle,
  DetailDesc,
  CommentButton,
  CommentBox,
  Comment,
  LoadingBox,
  StyledTextarea,
  UserName,
  AddComment,
  Badge,
  BadgeIconButton,
  BadgeBox,
  
  
} from "./styles";

import {Rating } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { StyledHeartIcon } from "Components/layout/Header/styles";
import SendIcon from "@mui/icons-material/Send";
import { Fragment, useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
//import { extendedApi} from 'services/basketServices';
import {  useAppDispatch } from 'Redux/hooks/hooks';
import { useAppSelector } from "../../Redux/hooks/hooks";
import {
  useCommentPostMutation,
  useGetCommentsQuery,
  useRemoveCommentMutation
} from "../../services/commentServices";
import * as React from 'react';
import { ToastContainer, toast,Zoom } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

  import Typography from '@mui/joy/Typography';
  import Add from '@mui/icons-material/Add';
  import Remove from '@mui/icons-material/Remove';
import { useAddItemMutation } from "services/basketServices";
import { addItem } from "Redux/slices/basketSlice";

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
         {children}
        </Box>
      )}
    </div>
  );
}

export const ProductDetail = () => {
const navigate =useNavigate()

  const { id } = useParams();
   const dispatch = useAppDispatch();
  

const [comment, setComment] = useState<any[]>();

const [value, setValue] = useState(0);

const [count, setCount] = React.useState(0);

const { data, isLoading } = useFetchGetGoodsQuery(`${id}`);

const [postCommentId, {isSuccess:successRemoveComment}]=useRemoveCommentMutation()
 
const { user } = useAppSelector((state) => state.user);

const [postData,{isSuccess}] = useCommentPostMutation();

const [postId,{isSuccess:successBasket,data:dataBasket}] = useAddItemMutation()



if(successBasket){

 //dispatch(addItem(dataBasket?.basketItems))
  //console.log(dataBasket);
  
}
  

  const [image, setImage] = useState(data?.productPhotos[0].path);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const changeHandler = (ev: any) => {
    setComment(ev.target.value);
    
  };

  const handleClick = (image: string) => {
    setImage(image);
  };

  const handleCommentDelet=(Id:number)=>{
    postCommentId(Id)
  }

  const handleAddComment = () => {
    // @ts-ignore
    postData(postComment);
  }


  const handleAddBasket =()=>{
    
    if(count>0){
      if(user.IsOnline){
       
        // @ts-ignore
        postId(basketItem)
       
        
        toast.success('Added to Basket', {
          position: "bottom-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme:"colored",
          transition:Zoom
          
      
          });
        //dispatch(extendedApi.util.resetApiState());
      }
      if(!user.IsOnline){
        navigate("/login")
      }
    }
    
  
  }
 

  const {
    data: commentAll,
    refetch: fetchComment
  } = useGetCommentsQuery(data?.id, {
    skip: data?.id == null,
  });


useEffect(()=>{

  if(isSuccess){
    fetchComment();
  }
  if(successRemoveComment){
    fetchComment();
  }
},[isSuccess,successRemoveComment])

  const basketItem={
    ProductId: data?.id,
    Count:count
  }

  const postComment = {
    AppUserId: user.nameid,
    productId: data?.id,
    content: comment,
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };


  return (
    <Container>
      <ProductContainer>
        <LoadingBox>
          <Loading>
            {isLoading && (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            )}
          </Loading>
        </LoadingBox>
        {data !== undefined && (
          <>
            <WrapperImg>
              <VerticalSlider>
                <StyledSlider {...settings}>
                  {data?.productPhotos.map((img) => (
                    <SliderBox key={img.id}>
                      <SliderImg
                        onClick={() => handleClick(img.path)}
                        src={img.path}
                      />
                      <>
                        {image == undefined &&
                          setImage(data.productPhotos[0].path)}
                      </>
                    </SliderBox>
                  ))}
                </StyledSlider>
              </VerticalSlider>
              <IsMainImgBox>{<IsMainImg src={image} />}</IsMainImgBox>
            </WrapperImg>
            <ProductInformation>
              <ProductName>{data?.name}</ProductName>
              <StyledBrandName>{data?.brand.name}</StyledBrandName>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              <Flex>
                <StyledDiscountPrice>
                  ${data?.price - (data?.discount * data.price) / 100}
                </StyledDiscountPrice>
                <StyledPrice>${data?.price}</StyledPrice>
                <StyledDiscount>{`(${data?.discount} % off)`}</StyledDiscount>
              </Flex>
              <Select>Select Size</Select>
              <WrapperSize>
                {/*{data?.Size.map((s) => (*/}
                {/*  <StyledSize key={s}>{s}</StyledSize>*/}
                {/*))}*/}
              </WrapperSize>
              <Select>Color</Select>
              <WrapperColor background={data?.color}>
                {data?.color}
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
              <Badge>
              <BadgeBox>
         <BadgeBox
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            pt: 4,
            borderTop: '1px solid',
            borderColor: 'background.level1',
          }}
        >
          <BadgeIconButton
            size="sm"
            variant="outlined"
            onClick={() => setCount((c)=> c> 0 ? c-1:0 )}
          >
            <Remove />
          </BadgeIconButton>
          <Typography fontWeight="md" textColor="text.secondary">
            {count}
          </Typography>
          <BadgeIconButton
            size="sm"
            variant="outlined"
            onClick={() => setCount((c) => c + 1)}
          >
            <Add />
          </BadgeIconButton>
        </BadgeBox>
      </BadgeBox>
              </Badge>
              <ButtonBox>
                <StyledButton onClick={handleAddBasket}>Add to cart</StyledButton>
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
            <div>
              <DetailTitle>Ratings</DetailTitle>
              <Flex>
                <StyledTextarea
                  placeholder="Your comment"
                  label="Your comment"
                  variant="default"
                  withAsterisk
                  disabled={user.IsOnline == false}
                  onChange={changeHandler}
                  error={
                    user.IsOnline
                      ? ""
                      : "Comment yazmag ucun login olmalisiniz!"
                  }
                />
                <CommentButton>
                  <AddComment
                    onClick={handleAddComment}
                    variant="contained"
                    endIcon={<SendIcon />}
                    disabled={user.IsOnline == false}
                  >
                    Send
                  </AddComment>

                </CommentButton>
              </Flex>
              <CommentBox>
                {commentAll != null && (
                  <>
                    {commentAll.map((com) => (
                     <Fragment key={com.id}>
                      <UserName>  {com.appUser?.name}{com.appUser?.surname}</UserName>
                      <Comment>
                        {com.content}
                       {com.appUserId==user.nameid &&
                        <Tooltip title="Delete">
                        <IconButton onClick={()=>handleCommentDelet(com.id)}>
                        <DeleteIcon/>
                        </IconButton>
                        </Tooltip>
                       }
                      </Comment>

                     </Fragment>
                    ))}
                  </>
                )}
              </CommentBox>
            </div>
          </TabPanel>
        </Box>
      </ProductDetailWrapper>
      <ToastContainer
     position="bottom-right"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     />
    </Container>
  );
};

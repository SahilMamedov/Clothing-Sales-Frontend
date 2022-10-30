import { useNavigate, useParams } from "react-router-dom";
import { useFetchGetGoodsQuery, useFetchGetSimilarProductsQuery } from "../../services/goodsServices";
import {
  Container,
  ContentBold,
  Content,
  Flex,
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
  JustifyBetween,
  StyledNotification,
  StyledSize,
  
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
import {  useAppDispatch } from 'Redux/hooks/hooks';
import { useAppSelector } from "../../Redux/hooks/hooks";
import {
  useCommentPostMutation,
  useGetCommentsQuery,
  useRemoveCommentMutation
} from "../../services/commentServices";
import * as React from 'react';
import { toast,Zoom } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Notification } from '@mantine/core';
  import Typography from '@mui/joy/Typography';
  import Add from '@mui/icons-material/Add';
  import Remove from '@mui/icons-material/Remove';
import { useAddItemMutation } from "services/basketServices";
import { addItem } from "Redux/slices/basketSlice";
import dayjs from "dayjs";
import { SimilarProductSlider } from "Components/shared/Slider/SimilarProductSlider";
import ReactImageMagnify from "react-image-magnify";
import {useTranslation} from "react-i18next"
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

const {t} =useTranslation()

const navigate =useNavigate()

  const { id } = useParams();

   const dispatch = useAppDispatch();
  

const [comment, setComment] = useState<any[]>();

const [value, setValue] = useState(0);

const [count, setCount] = React.useState(0);

const [size,setSize] = useState<boolean>(false)

const [categoryId,setCategoryId] =useState(0)





const { data, isLoading,isSuccess:successGetProduct } = useFetchGetGoodsQuery(`${id}`);

const [postCommentId, {isSuccess:successRemoveComment,isLoading:LoadingRemoveComment}]=useRemoveCommentMutation()
 
const { user } = useAppSelector((state) => state.user);

const [postData,{isSuccess}] = useCommentPostMutation();

const [postId,{isSuccess:successBasket,data:dataBasket}] = useAddItemMutation()

const {data:simiLarProductAll} = useFetchGetSimilarProductsQuery(categoryId,{skip:categoryId<0})

const [image, setImage] = useState(data?.isMainImage);

console.log(data,"data");


useEffect(()=>{
  if(data?.category.id){
  setCategoryId(data?.category.id)
  }
},[successGetProduct])

useEffect(()=>{
if(data?.isMainImage){
  setImage(data?.isMainImage)
}
},[data?.isMainImage])

  if(dataBasket?.basketItems && successBasket){
     dispatch(addItem(dataBasket?.basketItems))
   
    }
  

  

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
        
       
        toast.success(`${t('AddedToBasket')}`, {
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
    infinite: false,
    slidesToShow: 4,
    swipeToSlide: true,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 2000,
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
                        {image === undefined &&
                          setImage(data?.isMainImage)}
                      </>
                    </SliderBox>
                  ))}
                </StyledSlider>
              </VerticalSlider>
       
              <IsMainImgBox>
       {
               <ReactImageMagnify {...{
                style:{zIndex:100},
                smallImage: {
                    isFluidWidth:false,
                    
                    width:650,
                    height:720,
                    src: `${image}`
                },
                largeImage: {
                    src: `${image}`,
                    width: 2000,
                    
                    height: 2600
                }
            }} />
       }
                </IsMainImgBox>
            </WrapperImg>
            <ProductInformation>
              <ProductName>{data?.name}</ProductName>
              <StyledBrandName>{data?.brand.name}</StyledBrandName>
              <StyledBrandName>{data?.category.name }</StyledBrandName>
              <Rating sx={{zIndex:1}} name="half-rating" defaultValue={2.5} precision={0.5} />
              <Flex>
                <StyledDiscountPrice>
                  ${(data?.price - (data?.discount * data.price) / 100).toFixed(2)}
                </StyledDiscountPrice>
                <StyledPrice>${data?.price}</StyledPrice>
                <StyledDiscount>{`(${data?.discount} ${t('Off')} )`}</StyledDiscount>
              </Flex>
              <Select>{t('SelectSize')}</Select>
              <WrapperSize>
                {data?.size?.map((s) => (
                  <StyledSize onClick={()=> setSize(size?false:true)} background={size}  key={s.id}>{s.sizes}</StyledSize>
                ))}
              </WrapperSize>
              <Select>{t('Color')}</Select>
              <WrapperColor background={data?.color}>
                {data?.color}
              </WrapperColor>
              <Select>{t('BestOffers')}</Select>
              <Flex>
                <ContentBold>{t('SpecialOffer')}</ContentBold>
                <Content>{t('Get25%Off')}</Content>
                <ContentLink>T&C</ContentLink>
              </Flex>
              <Flex>
                <ContentBold>{t('BankOffer')}</ContentBold>
                <Content>{t('Get30%OffAxis')}</Content>
                <ContentLink>T&C</ContentLink>
              </Flex>
              <Flex>
                <ContentBold>{t('WalletOffer')}</ContentBold>
                <Content>
                  {t('Get40%OffCashback')}
                </Content>
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
                <StyledButton onClick={handleAddBasket}>{t('AddToCart')}</StyledButton>
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
              <Tab label={t('ProductDetails')} {...a11yProps(0)} />
              <Tab label={t('CustomerReviews')} {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <>
              <DetailTitle></DetailTitle>
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
              <DetailTitle>{t('Comments')}</DetailTitle>
              <Flex>
                <StyledTextarea
                  placeholder={t('YourComment')}
                  label={t('YourComment')}
                  variant="default"
                  withAsterisk
                  disabled={user.IsOnline == false}
                  onChange={changeHandler}
                  error={
                    user.IsOnline
                      ? ""
                      : `${t('ErrorComment')}`
                  }
                />
                <CommentButton>
                  <AddComment
                    onClick={handleAddComment}
                    variant="contained"
                    endIcon={<SendIcon />}
                    disabled={user.IsOnline == false}
                  >
                    {t('Send')}
                  </AddComment>

                </CommentButton>
              </Flex>
              <CommentBox>
                {commentAll != null && (
                  <>
                    {commentAll.map((com) => (
                     <Fragment key={com.id}>
                      <JustifyBetween>
                      <UserName> {com.appUser?.name}{com.appUser?.surname} </UserName>  
                      <div>
                        {dayjs(`${com.createTime}`).format("DD.MM.YYYY HH:m")}
                        </div>
                      </JustifyBetween>
                      <Comment>
                        {com.content}
                       {com.appUserId===user.nameid &&
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
     <StyledNotification>
      {LoadingRemoveComment && <Notification
        loading
        title="Delet Comment"
        disallowClose
      >
        {t('YourCommentDelete')}
      </Notification>
    }
     
     </StyledNotification>
     <h2>{t('SimilarProducts')}</h2>
    <SimilarProductSlider data={simiLarProductAll}/>
    </Container>
  );
};

import { Container, Flex, Justify, PlaceOrder, PrdouctName, PrdouctPrice, StyledTextarea, StyledTextField, SubTitle, Total, TotalPrice } from "./styles";
import { BillingDetails, OrderDetails, Title } from "./styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Box from "@mui/material/Box";
import PaymentForm from "./PaymentForm";
import { useAppSelector } from "Redux/hooks/hooks";
const theme = createTheme();


export const Checkout = () =>  {
  
  const {basket} = useAppSelector((state)=>state.basket)


  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
    const Data={
      lastName:data.get("lastname"),
      firstName:data.get("firstname"),
      email:data.get("email"),
      phone:data.get("phone"),
      city:data.get("city"),
      apartment:data.get("apartment"),
      streetAddress:data.get("streetaddress"),
      notes:data.get("notes"),
      value:value
    }
    console.log(Data);
    
  };
console.log(basket.basketItems,"basket");


  return (
    <ThemeProvider theme={theme}>
    <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
   <Container>
     
    <BillingDetails>
      <Title>
      BILLING DETAILS
      </Title>
   
            <Flex>
            <StyledTextField
              width="350px"
              required
              id="firstname"
              label="First name"
              name="firstname"
              autoComplete="firstname"
              autoFocus
            />
            <StyledTextField
              width="350px"
              required
              id="lastname"
              label="Last name"
              name="lastname"
              autoComplete="lastname"
              autoFocus
            />
            </Flex>
            <StyledTextField
              width="720px"
              required
              id="city"
              label="City"
              name="city"
              autoComplete="city"
              autoFocus
            />
            <StyledTextField
              width="720px"
              required
              id="streetAddress"
              label="Street address "
              name="streetaddress"
              autoComplete="streetaddress"
              autoFocus
            />
             <StyledTextField
              width="720px"
              required
              id="apartment"
              label="Apartment number Entrance block "
              name="apartment"
              autoComplete="apartment"
              autoFocus
            />
             <Flex>
            <StyledTextField
              width="350px"
              required
              id="phone"
              label="Phone"
              name="phone"
              defaultValue='+994'
              type='tel'
              autoComplete="phone"
              autoFocus
            />
            <StyledTextField
              width="350px"
              required
              id="email"
              type='email'
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            </Flex>
            <StyledTextarea
             placeholder="order notes (optional)"
             required
             id="notes"
             name="notes"
             variant="default"
             withAsterisk
            />
     
    </BillingDetails>
    <OrderDetails>
    <Title>Your Order</Title>
    <SubTitle>
      <span>Prdouct</span>
      <span>SubTotal</span>
    </SubTitle>
    <>
    {basket.basketItems.length !== 0 && 
    basket.basketItems.map((item)=> 
    <div key={item.id}>
      <Justify>
    <PrdouctName>
    {`${item.product?.name} x ${item.count}`}  
    </PrdouctName>
    <PrdouctPrice>
      ${item.price}
    </PrdouctPrice>
    </Justify>
    <Justify>
    <Total>
      Total
    </Total>
    <TotalPrice>
      ${item.sum}
    </TotalPrice>
    </Justify>
    </div>
    )}
    </>
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="cash" control={<Radio />} label="Cash on Delivery" />
        <FormControlLabel value="card" control={<Radio />} label="Payment by Card" />
        <>
       {value=="card" ? <PaymentForm/>:""}
        </>
      </RadioGroup>
    </FormControl>
    <PlaceOrder>Place Order</PlaceOrder>
    </OrderDetails>
   
   </Container>
   </Box>
    </ThemeProvider>
  );
}
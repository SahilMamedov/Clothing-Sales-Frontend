import {
  StyledEmailIcon,
  StyledFBicon,
  StyledFooter,
  StyledFooterFlex,
  StyledFooterInput,
  StyledFooterList,
  StyledFooterLogo,
  StyledFooterRow,
  StyledGlobex,
  StyledInstagramicon,
  StyledListItem,
  StyledListTitle,
  StyledPosition,
  StyledSocialIcon,
  StyledTwitterIcon,
  StyledWhatsappIcon,
} from "./styles";
import { footerLogo } from "Assets";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterFlex>
        <StyledFooterLogo>
          <img src={footerLogo} />
        </StyledFooterLogo>
        <StyledGlobex>Globex</StyledGlobex>
      </StyledFooterFlex>
      <StyledFooterList>
        <div>
          <StyledListTitle>Womem</StyledListTitle>
          <StyledListItem>All Women</StyledListItem>
          <StyledListItem>Skirts</StyledListItem>
          <StyledListItem>T- Shirts</StyledListItem>
          <StyledListItem>Tops</StyledListItem>
          <StyledListItem>Jackets</StyledListItem>
        </div>
        <div>
          <StyledListTitle>Men</StyledListTitle>
          <StyledListItem>All Men</StyledListItem>
          <StyledListItem>Shirts</StyledListItem>
          <StyledListItem>T- Shirts</StyledListItem>
          <StyledListItem>Shorts</StyledListItem>
          <StyledListItem>Jackets</StyledListItem>
        </div>
        <div>
          <StyledListTitle>Kids</StyledListTitle>
          <StyledListItem>All Kids</StyledListItem>
          <StyledListItem>Shirts</StyledListItem>
          <StyledListItem>T- Shirts</StyledListItem>
          <StyledListItem>Shorts</StyledListItem>
          <StyledListItem>Jackets</StyledListItem>
        </div>
        <div>
          <StyledListTitle>Shopping</StyledListTitle>
          <StyledListItem>Your cart</StyledListItem>
          <StyledListItem>your orders</StyledListItem>
          <StyledListItem>Compared items</StyledListItem>
          <StyledListItem>Wishlist</StyledListItem>
          <StyledListItem>Shipping Details</StyledListItem>
        </div>
        <div>
          <StyledListTitle>More links</StyledListTitle>
          <StyledListItem>Blogs</StyledListItem>
          <StyledListItem>Gift center</StyledListItem>
          <StyledListItem>Buying guides</StyledListItem>
          <StyledListItem>New arrivals</StyledListItem>
          <StyledListItem>Clearance</StyledListItem>
        </div>
        <div>
          <StyledListTitle>Stay In Touch</StyledListTitle>
          <StyledListItem>
            Stay in touch to get special offers, free giveaways
            <br /> and once in a lifetime deals
          </StyledListItem>
          <StyledPosition>
            <StyledFooterInput type="email" placeholder="Enter your Email" />
            <StyledEmailIcon />
          </StyledPosition>
        </div>
      </StyledFooterList>
      <StyledFooterRow>
        <span>Terms & Conditions</span>
        <span>sahilim@cod.edu.az</span>
        <StyledSocialIcon>
          <StyledFBicon />
          <StyledInstagramicon />
          <StyledWhatsappIcon />
          <StyledTwitterIcon />
        </StyledSocialIcon>
      </StyledFooterRow>
    </StyledFooter>
  );
};

export default Footer;

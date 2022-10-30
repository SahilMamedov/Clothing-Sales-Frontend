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
import {useTranslation} from "react-i18next"

export const Footer = () => {

  const {t} =useTranslation()

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
          <StyledListTitle>{t('Women')}</StyledListTitle>
          <StyledListItem>{t('AllWomen')}</StyledListItem>
          <StyledListItem>{t('Skirts')}</StyledListItem>
          <StyledListItem>{t('Tshirts')}</StyledListItem>
          <StyledListItem>{t('Tops')}</StyledListItem>
          <StyledListItem>{t('Jackets')}</StyledListItem>
        </div>
        <div>
          <StyledListTitle>{t('Men')}</StyledListTitle>
          <StyledListItem>{t('AllMen')}</StyledListItem>
          <StyledListItem>{t('Shirts')}</StyledListItem>
          <StyledListItem>{t('Tshirts')}</StyledListItem>
          <StyledListItem>{t('Shorts')}</StyledListItem>
          <StyledListItem>{t('Jackets')}</StyledListItem>
        </div>
        <div>
          <StyledListTitle>{t('Kids')}</StyledListTitle>
          <StyledListItem>{t('AllKids')}</StyledListItem>
          <StyledListItem>{t('Shirts')}</StyledListItem>
          <StyledListItem>{t('Tshirts')}</StyledListItem>
          <StyledListItem>{t('Shorts')}</StyledListItem>
          <StyledListItem>{t('Jackets')}</StyledListItem>
        </div>
        <div>
          <StyledListTitle>{t('Shopping')}</StyledListTitle>
          <StyledListItem>{t('YourCart')}</StyledListItem>
          <StyledListItem>{t('YourOrders')}</StyledListItem>
          <StyledListItem>{t('ComparedItems')}</StyledListItem>
          <StyledListItem>{t('Wishlist')}</StyledListItem>
          <StyledListItem>S{t('ShippingDetails')}</StyledListItem>
        </div>
        <div>
          <StyledListTitle>{t('MoreLinks')}</StyledListTitle>
          <StyledListItem>{t('Blogs')}</StyledListItem>
          <StyledListItem>{t('GiftCenter')}</StyledListItem>
          <StyledListItem>{t('BuyingGuides')}</StyledListItem>
          <StyledListItem>{t('NewArrivals')}</StyledListItem>
          <StyledListItem>{t('Clearence')}</StyledListItem>
        </div>
        <div>
          <StyledListTitle>{t('StayInTouch')}</StyledListTitle>
          <StyledListItem>
            Stay in touch to get special offers, free giveaways
            <br /> and once in a lifetime deals
          </StyledListItem>
          <StyledPosition>
            <StyledFooterInput type="email" placeholder={t('EnterYouremail')} />
            <StyledEmailIcon />
          </StyledPosition>
        </div>
      </StyledFooterList>
      <StyledFooterRow>
        <span>{t('TermsConditions')}</span>
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

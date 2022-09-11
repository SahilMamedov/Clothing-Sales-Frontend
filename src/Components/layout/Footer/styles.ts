import styled from "styled-components";
import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  WhatsappLogo,
} from "phosphor-react";

export const StyledFooter = styled.footer`
  height: 610px;
  background-color: #00071b;
`;
export const StyledFooterLogo = styled.div`
  width: 76px;
  height: 64px;
  margin-left: 50px;
  margin-right: 25px;
`;

export const StyledGlobex = styled.div`
  font-size: 64px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 79px;
  color: white;
`;
export const StyledFooterFlex = styled.div`
  display: flex;
  padding-top: 44px;
`;

export const StyledFooterList = styled.ul`
  height: 380px;
  display: flex;
  align-items: center;
  color: white;
  list-style: none;
  margin: 0 135px;
`;
export const StyledListTitle = styled.li`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: 40px;
  margin-bottom: 22px;
  margin-right: 118px;
`;

export const StyledListItem = styled.li`
  font-weight: ${({ theme }) => theme.fontWeight.thin};
  line-height: ${({ theme }) => theme.lineHeight.small}
  font-size: ${({ theme }) => theme.fontSize.small};
  margin-bottom: 17px;
  margin-right: 118px;
`;

export const StyledFooterInput = styled.input`
  width: 325px;
  height: 35px;
  border-radius: 2px;
  border: 1px solid white;
  background-color: #00071b;
  font-size: ${({ theme }) => theme.fontSize.small};
  padding-left: 50px;
  outline: none;
  color: white;
`;
export const StyledEmailIcon = styled(EnvelopeSimple)`
  font-size: 20px;
  color: #fbf4f4;
  position: absolute;
  left: 20px;
`;
export const StyledPosition = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
export const StyledFooterRow = styled.div`
  border-top: 1px solid #9d9898;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 400px;
  height: 100px;
  color: white;
`;
export const StyledFBicon = styled(FacebookLogo)`
  font-size: ${({ theme }) => theme.fontSize.big};
  color: #fbf4f4;
  margin-right: 35px;
`;
export const StyledSocialIcon = styled.div`
  display: flex;
`;

export const StyledInstagramicon = styled(InstagramLogo)`
  font-size: ${({ theme }) => theme.fontSize.big};
  color: #fbf4f4;
  margin-right: 35px;
`;
export const StyledWhatsappIcon = styled(WhatsappLogo)`
  font-size: ${({ theme }) => theme.fontSize.big};
  color: #fbf4f4;
  margin-right: 35px;
`;
export const StyledTwitterIcon = styled(TwitterLogo)`
  font-size: ${({ theme }) => theme.fontSize.big};
  color: #fbf4f4;
`;

import styled from "styled-components";

export const StyledCard = styled.div`
  height: 400px;
  width: 320px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;
export const StyledCardImg = styled.img`
  width: 320px;
  height: 301px;
  background-color: chocolate;
  border-radius: 10px 10px 0px 0px;
`;

export const StyledProductName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.CharlestonGreen};
  line-height: ${({ theme }) => theme.lineHeight.medium};
  margin: 0;
  text-decoration: none;
`;

export const StyledInformation = styled.div`
  margin-left: 20px;
`;

export const StyledBrandName = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.thin};
  color: ${({ theme }) => theme.color.CharlestonGreen};
  line-height: ${({ theme }) => theme.lineHeight.small};
`;

export const StyledDiscountPrice = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.CharlestonGreen};
  line-height: ${({ theme }) => theme.lineHeight.medium};

  margin: 0;
`;

export const StyledPrice = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.thin};
  line-height: ${({ theme }) => theme.lineHeight.small};
  text-decoration-line: line-through;
  margin: 0 15px;
  color: #848484;
`;
export const StyledDiscount = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.small};
  color: #0a8200;
`;

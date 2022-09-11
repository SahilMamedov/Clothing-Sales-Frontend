import {
  StyledBox,
  StyledCustomerFeedback,
  StyledCustomerPhoto,
  StyledCustomerText,
} from "./styles";
import { Rating } from "@mui/material";
import { FC } from "react";
interface Props {
  imgUrl: string;
}
export const CustomerFeedBack: FC<Props> = ({ imgUrl }) => {
  return (
    <StyledCustomerFeedback>
      <StyledBox>
        <StyledCustomerPhoto src={imgUrl} />
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      </StyledBox>
      <StyledCustomerText>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has{" "}
      </StyledCustomerText>
    </StyledCustomerFeedback>
  );
};

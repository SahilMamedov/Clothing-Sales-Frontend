import {
  StyledBlogBox,
  StyledBlogDesc,
  StyledBlogImg,
  StyledBlogInformation,
  StyledBlogName,
  StyledBlogTitle,
} from "./styles";
import { FC } from "react";
import { IBlogs } from "types";

export const Blogs: FC<IBlogs> = ({ id, Name, ImgUrl, Title, Desc }) => {
  return (
    <StyledBlogBox key={id}>
      <StyledBlogImg src={ImgUrl} />
      <StyledBlogInformation>
        <StyledBlogName>{Name}</StyledBlogName>
        <StyledBlogTitle>{Title}</StyledBlogTitle>
        <StyledBlogDesc>{Desc}</StyledBlogDesc>
      </StyledBlogInformation>
    </StyledBlogBox>
  );
};

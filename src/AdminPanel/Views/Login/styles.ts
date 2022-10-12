import styled from "styled-components";
import { Eye } from "phosphor-react";

export const StyledBox = styled.div`
  display: flex;
  justify-content: end;
  position: relative;
`;
export const ShowPassword = styled.input`
  width: 380px;
  height: 100px;
`;
export const ShowPasswordIcon = styled(Eye)`
  font-size: 22px;
  position: absolute;
  top: 20px;
  cursor: pointer;
  right: 10px;
`;
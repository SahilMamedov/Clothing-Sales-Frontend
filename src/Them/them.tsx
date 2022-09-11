import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const theme = {
  color: {
    white: "white",
    black: "black",
    CharlestonGreen: "#272727",
  },
  fontSize: {
    small: "18px",
    medium: "24px",
    big: "32px",
  },
  fontWeight: {
    thin: "400",
    bold: "700",
  },
  lineHeight: {
    small: "22px",
    medium: "30px",
    big: "60px",
  },
};

const Theme = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default Theme;

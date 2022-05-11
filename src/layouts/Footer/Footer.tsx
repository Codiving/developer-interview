import styled from "@emotion/styled";
import { Typography } from "../../components";

const FooterContainer = styled("footer", {
  label: "FooterContainer"
})(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
});

const Footer = () => {
  return (
    <FooterContainer>
      <Typography component="p">&copy; Made by Codiving</Typography>
    </FooterContainer>
  );
};

export default Footer;

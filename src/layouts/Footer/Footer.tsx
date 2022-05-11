import styled from "@emotion/styled";

const FooterContainer = styled("footer", {
  label: "FooterContainer"
})(() => {
  return {
    position: "absolute",
    bottom: 0,
    width: "100%"
  };
});

const Footer = () => {
  return <FooterContainer>Footer</FooterContainer>;
};

export default Footer;

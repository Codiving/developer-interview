import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { maxWidth } from "../../common";
import { Typography } from "../../components";

const HeaderContainer = styled("header", {
  label: "HeaderContainer"
})(() => {
  return {
    width: "100%",
    margin: "0 auto",
    position: "sticky",
    top: 0,
    backgroundColor: "#fff",
    borderBottom: "1px solid #efefef",
    zIndex: 1
  };
});

const HeaderContents = styled("div", {
  label: "HeaderContents"
})(() => {
  return {
    maxWidth: maxWidth,
    width: "90%",
    margin: "0 auto",
    height: "100%",
    display: "flex",
    alignItems: "center"
  };
});

const HeaderMainText = styled(Typography, {
  label: "HeaderMainText"
})(() => {
  return {
    fontSize: 32,
    fontWeight: 600,
    cursor: "pointer"
  };
});

const Header = () => {
  const router = useRouter();

  const onGoMainPage = useCallback(() => router.push("/"), [router]);

  return (
    <HeaderContainer>
      <HeaderContents>
        <HeaderMainText onClick={onGoMainPage} component="h1">
          프론트엔드 Quiz
        </HeaderMainText>
      </HeaderContents>
    </HeaderContainer>
  );
};

export default Header;

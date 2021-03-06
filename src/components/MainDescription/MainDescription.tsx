import styled from "@emotion/styled";
import { maxWidth } from "../../common";
import Typography from "../Typography";

const MainDescriptionContainer = styled("section", {
  label: "MainDescriptionContainer"
})(() => {
  return {
    backgroundColor: "#e0e0ee",
    padding: "5em"
  };
});

const MainDescriptionContents = styled("div", {
  label: "MainDescriptionContents"
})(() => {
  return {
    maxWidth: maxWidth,
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5em"
  };
});

const TypographyContainer = styled("div", {
  label: "TypographyContainer"
})(() => {
  return {};
});

const MainDescription = () => {
  return (
    <MainDescriptionContainer>
      <MainDescriptionContents>
        <TypographyContainer>
          <Typography> 내가 알고 있는 </Typography>
          <Typography fontWeight={600} fontSize={32}>
            개념
          </Typography>
          <Typography> 이 맞는 지 궁금하신가요?</Typography>
        </TypographyContainer>
        <TypographyContainer>
          <Typography>간단한 </Typography>
          <Typography fontWeight={600} fontSize={32}>
            객관식 Quiz
          </Typography>
          <Typography> 을 통해 확인해봅시다.</Typography>
        </TypographyContainer>
        {/* <TypographyContainer>
          <Typography>문제를 풀고 </Typography>
          <Typography fontWeight={600} fontSize={24}>
            제출 즉시 오답 확인
          </Typography>
          <Typography>이 가능합니다.</Typography>
        </TypographyContainer>
        <TypographyContainer>
          <Typography> 문제 </Typography>
          <Typography fontWeight={600} fontSize={24}>
            북마크 기능
          </Typography>
          <Typography> 을 통해 북마크한 문제만 풀 수 있습니다. </Typography>
        </TypographyContainer>
        <TypographyContainer>
          <Typography>헷갈리는 문제들을 북마크하여 풀어보세요.</Typography>
        </TypographyContainer> */}
      </MainDescriptionContents>
    </MainDescriptionContainer>
  );
};

export default MainDescription;

import styled from "@emotion/styled";
import { maxWidth } from "../../common";
import Typography from "../Typography";

const MainDescriptionContainer = styled("section", {
  label: "MainDescriptionContainer"
})(() => {
  return {
    backgroundColor: "#e0e0ee",
    padding: "3em"
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
    gap: "1.2em"
  };
});

const MainDescription = () => {
  return (
    <MainDescriptionContainer>
      <MainDescriptionContents>
        <div>
          <Typography fontWeight={600} fontSize={24}>
            프론트엔드 개발자 면접 준비
          </Typography>
          <Typography> 를 하고 계신가요?</Typography>
        </div>
        <div>
          <Typography>간단한 </Typography>
          <Typography fontWeight={600} fontSize={24}>
            객관식 면접
          </Typography>
          <Typography> 을 통해 나의 부족함을 확인해봅시다.</Typography>
        </div>
      </MainDescriptionContents>
    </MainDescriptionContainer>
  );
};

export default MainDescription;

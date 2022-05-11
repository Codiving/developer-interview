import styled from "@emotion/styled";
import type { NextPage } from "next";
import { Typography } from "../src/components";

const HomeContainer = styled("div", {
  label: "HomeContainer"
})(() => {
  return {};
});

const MainSection = styled("section", {
  label: "MainSection"
})(() => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "1.2em",
    backgroundColor: "#e0e0ee",
    padding: "3em"
  };
});

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <MainSection>
        <div>
          <Typography fontWeight={600} fontSize={24}>
            프론트엔드 개발자 면접 준비
          </Typography>
          <Typography> 를 하고 계신가요?</Typography>
        </div>
        <div>
          <Typography fontWeight={600} fontSize={24}>
            개터뷰
          </Typography>
          <Typography>
            {" "}
            에서 간단하게 객관식 면접을 해볼 수 있습니다.
          </Typography>
        </div>
      </MainSection>
      <Typography>
        틀린 내용을 확인하시거나 건의사항이 있으시면 아래 email로 연락 바랍니다.
      </Typography>
    </HomeContainer>
  );
};

export default Home;

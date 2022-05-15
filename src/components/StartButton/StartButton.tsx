import styled from "@emotion/styled";
import { Button, Typography } from "..";

const StartButtonContainer = styled("div", {
  label: "StartButtonContainer"
})(() => {
  return {
    textAlign: "center",
    margin: "2em 0"
  };
});

const SButton = styled(Button, {
  label: "StartButton"
})(() => {
  return {
    position: "relative",
    backgroundColor: "#2098D1",
    color: "white",
    transitionDuration: "0.3s",
    transitionProperty: "transform",
    "&:hover": {
      backgroundColor: "#2098D1",
      transform: "translateY(-5px)"
    },
    "&:before": {
      content: '""',
      position: "absolute",
      width: "90%",
      height: 10,
      pointerEvents: "none",
      background:
        "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%)",
      transitionDuration: "0.3s",
      transitionProperty: "transform, opacity",
      opacity: 0,
      top: "100%",
      left: "5%"
    },
    "&:hover:before": {
      transform: "translateY(5px)",
      opacity: 1,
      zIndex: -1
    }
  };
});

const StartButton = () => {
  return (
    <StartButtonContainer>
      <SButton borderRadius={0}>
        <Typography fontSize={18}>시작하기</Typography>
      </SButton>
    </StartButtonContainer>
  );
};

export default StartButton;

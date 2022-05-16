import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Button, Typography } from "..";

interface StartButtonProps {
  onClick: () => void;
  display: boolean;
}

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0 ,0 ,0);
  }
  
  70% {
    transform: translate3d(0, 15px, 0);
  }

  90% {
    transform: translate3d(0 ,4px ,0);
  }
`;

const fadeOut = keyframes`
  from { opacity : 1 }

  to {  opacity : 0 }
`;

const StartButtonContainer = styled("div", {
  label: "StartButtonContainer"
})<{ $display: boolean }>(({ $display }) => {
  return {
    textAlign: "center",
    margin: "100px 0",
    animation: $display ? `${fadeOut} 0.5s` : ""
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
    padding: "1em 2.5em",
    animation: `${bounce} 1s infinite`,
    "&:hover": {
      backgroundColor: "#2098D1",
      transform: "translateY(-5px)",
      animation: "unset"
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

const StartButton = (props: StartButtonProps) => {
  const { onClick, display: _display } = props;

  return (
    <StartButtonContainer $display={_display} onClick={onClick}>
      <SButton borderRadius={0}>
        <Typography component="p" fontSize={32}>
          시작하기
        </Typography>
      </SButton>
    </StartButtonContainer>
  );
};

export default StartButton;

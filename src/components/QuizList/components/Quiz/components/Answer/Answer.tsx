import styled from "@emotion/styled";
import { Typography } from "../../../../..";
import { prefix } from "../../../../../../common";

interface AnswerProps {
  candidates: string[];
  answer: string;
  userAnswer: string;
  onChangeAnswer: (index: number, answer: string) => void;
  isSubmit: boolean;
  upperIndex: number;
}

const getResultCss = (correct: boolean, answer: boolean) => {
  if (!correct && answer) {
    return {
      backgroundColor: "red"
    };
  }
  return {};
};

const AnswerContainer = styled("div", {
  label: "AnswerContainer"
})(() => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "0.5em"
  };
});

const AnswerList = styled("div", {
  label: "AnswerList"
})<{ selected: boolean; correct: boolean; isSubmit: boolean; answer: boolean }>(
  ({ selected: _selected, correct, isSubmit, answer }) => {
    const selected = _selected
      ? {
          padding: "4px 9px",
          backgroundColor: "#b0b0f0",
          border: "2px solid"
        }
      : {};

    const resultCss = isSubmit ? getResultCss(correct, answer) : {};

    return {
      padding: "5px 10px",
      border: "1px solid #dcd4d4",
      borderRadius: 8,
      backgroundColor: "white",
      cursor: "pointer",
      ...selected,
      ...resultCss
    };
  }
);

const AnswerCandidate = styled(Typography)(() => {
  return {
    fontSize: 20
  };
});

const Answer = (props: AnswerProps) => {
  const {
    candidates,
    onChangeAnswer,
    answer,
    upperIndex,
    userAnswer,
    isSubmit
  } = props;

  return (
    <AnswerContainer>
      {candidates.map((candidate, index) => {
        return (
          <AnswerList
            key={candidate}
            onClick={() => {
              onChangeAnswer(upperIndex, candidate);
            }}
            selected={candidate === userAnswer}
            correct={answer === userAnswer}
            isSubmit={isSubmit}
            answer={candidate === answer}
          >
            <AnswerCandidate>{prefix[index]}.</AnswerCandidate>
            <AnswerCandidate>{candidate}</AnswerCandidate>
          </AnswerList>
        );
      })}
    </AnswerContainer>
  );
};

export default Answer;

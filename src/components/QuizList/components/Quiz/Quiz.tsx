import styled from "@emotion/styled";
import { prefix } from "../../../../common";
import Typography from "../../../Typography";

interface QuizProps {
  type: string;
  question: string[];
  candidates: string[];
  answer: string;
  keywords: string[];
  messages: string[];
  index: number;
  userAnswer: number;
  onChangeAnswer: (index: number, answer: number) => void;
  isSubmit: boolean;
}

const QuizContainer = styled("div", {
  label: "QuizContainer"
})(() => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "1em",
    width: "90%",
    padding: "1.2em",
    borderRadius: 8,
    backgroundColor: "#fafafa",
    border: "1px solid #dad2d2"
  };
});

const QuestionContainer = styled("div", {
  label: "QuestionContainer"
})(() => {
  return {
    display: "flex"
  };
});

const Question = styled(Typography)(() => {
  return {
    marginRight: 20
  };
});

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
})<{ selected: boolean }>(({ selected: _selected }) => {
  const selected = _selected
    ? {
        outline: "2px solid",
        backgroundColor: "#b0b0f0",
        border: 0
      }
    : {};
  return {
    padding: "5px 10px",
    border: "1px solid #dcd4d4",
    borderRadius: 8,
    backgroundColor: "white",
    cursor: "pointer",
    ...selected
  };
});

const Answer = styled(Typography)(() => {
  return {
    fontSize: 20
  };
});

const Quiz = (props: QuizProps) => {
  const {
    type,
    question,
    candidates,
    answer,
    keywords,
    messages,
    userAnswer,
    index: upperIndex,
    onChangeAnswer,
    isSubmit
  } = props;

  return (
    <QuizContainer>
      <QuestionContainer>
        <Question fontWeight={600} fontSize={24}>
          Quiz:{" "}
        </Question>
        <Typography fontSize={20}>{question}</Typography>
      </QuestionContainer>
      <AnswerContainer>
        {candidates.map((candidate, index) => (
          <AnswerList
            key={candidate}
            onClick={() => {
              onChangeAnswer(upperIndex, index);
            }}
            selected={index === userAnswer}
          >
            <Answer>{prefix[index]}.</Answer> <Answer>{candidate}</Answer>
          </AnswerList>
        ))}
      </AnswerContainer>
    </QuizContainer>
  );
};

export default Quiz;

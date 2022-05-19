import styled from "@emotion/styled";
import { DataType } from "../../../../common";
import { Description, Question } from "./components";
import Answer from "./components/Answer";

interface QuizProps {
  type: DataType;
  question: string;
  candidates: string[];
  answer: string;
  keywords: string[];
  messages: string[];
  index: number;
  userAnswer: string;
  onChangeAnswer: (index: number, answer: string) => void;
  isSubmit: boolean;
}

const QuizContainer = styled("div", {
  label: "QuizContainer"
})(() => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "1em",
    width: "100%",
    padding: "1.2em",
    borderRadius: 8,
    backgroundColor: "#fafafa",
    border: "1px solid #dad2d2"
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

  const correct = answer === userAnswer;

  return (
    <QuizContainer>
      <Question
        upperIndex={upperIndex}
        question={question}
        type={type}
        correct={correct}
        isSubmit={isSubmit}
      />
      <Answer
        onChangeAnswer={onChangeAnswer}
        candidates={candidates}
        answer={answer}
        upperIndex={upperIndex}
        userAnswer={userAnswer}
        isSubmit={isSubmit}
        correct={correct}
      />
      {isSubmit && <Description keywords={keywords} messages={messages} />}
    </QuizContainer>
  );
};

export default Quiz;

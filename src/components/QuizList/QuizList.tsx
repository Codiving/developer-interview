import styled from "@emotion/styled";
import { Data, maxWidth } from "../../common";
import { Quiz } from "./components";

interface QuizListProps {
  contents: Data[];
  isSubmit: boolean;
  answers: number[];
  onChangeAnswer: (index: number, answer: number) => void;
}

const QuizListContainer = styled("section", {
  label: "QuizListContainer"
})(() => {
  return {
    display: "flex",
    justifyContent: "center"
  };
});

const QuizContents = styled("div", {
  label: "QuizContents"
})(() => {
  return {
    maxWidth: maxWidth,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "1em 0",
    gap: "2.5em 0"
  };
});

const QuizList = (props: QuizListProps) => {
  const { contents, isSubmit, answers, onChangeAnswer } = props;

  return (
    <QuizListContainer>
      <QuizContents>
        {contents.map((item, index) => {
          const { type, question, candidates, answer, keywords, messages } =
            item;

          return (
            <Quiz
              key={index}
              type={type}
              question={question}
              candidates={candidates}
              answer={answer}
              keywords={keywords}
              messages={messages}
              index={index}
              userAnswer={answers[index]}
              onChangeAnswer={onChangeAnswer}
              isSubmit={isSubmit}
            />
          );
        })}
      </QuizContents>
    </QuizListContainer>
  );
};

export default QuizList;

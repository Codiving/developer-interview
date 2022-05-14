import styled from "@emotion/styled";
import { maxWidth, QuizCounts, QuizCountsType } from "../../common";
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";

interface QuizGeneratorProps {
  quizCount: QuizCountsType;
  onHandleQuizCount: (item: QuizCountsType) => void;
  onQuizGenerator: () => void;
}

const QuizGeneratorContainer = styled("section", {
  label: "QuizGeneratorContainer"
})(() => {
  return {};
});

const QuizGeneratorContents = styled("div", {
  label: "QuizGeneratorContents"
})(() => {
  return {
    maxWidth: maxWidth,
    width: "100%",
    margin: "0 auto"
  };
});

const QuizGeneratorButtonConatiner = styled("div", {
  label: "QuizGeneratorButtonConatiner"
})(() => {
  return {
    width: "90%",
    display: "flex",
    justifyContent: "flex-end",
    gap: "1em",
    margin: "0 auto"
  };
});

const QuizGeneratorButtonGroup = styled(ButtonGroup, {
  label: "QuizGeneratorButtonGroup"
})(() => {
  return {};
});

const QuizGenerator = (props: QuizGeneratorProps) => {
  const { quizCount, onHandleQuizCount, onQuizGenerator } = props;

  return (
    <QuizGeneratorContainer>
      <QuizGeneratorContents>
        <QuizGeneratorButtonConatiner>
          <QuizGeneratorButtonGroup>
            {QuizCounts.map(count => (
              <Button
                key={count}
                selected={count === quizCount}
                onClick={() => {
                  onHandleQuizCount(count);
                }}
              >
                {count}
              </Button>
            ))}
          </QuizGeneratorButtonGroup>
          <Button color="#000000" onClick={onQuizGenerator}>
            문제 생성
          </Button>
        </QuizGeneratorButtonConatiner>
      </QuizGeneratorContents>
    </QuizGeneratorContainer>
  );
};

export default QuizGenerator;

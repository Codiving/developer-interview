import styled from "@emotion/styled";
import { Typography } from "..";
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
    width: "90%",
    margin: "0 auto"
  };
});

const QuizGeneratorButtonConatiner = styled("div", {
  label: "QuizGeneratorButtonConatiner"
})(() => {
  return {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
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
          <Typography fontWeight={600}>문제 개수 선택</Typography>
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

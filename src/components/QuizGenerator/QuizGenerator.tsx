import styled from "@emotion/styled";
import { maxWidth, QuizCounts, QuizCountsType } from "../../common";
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";
import Typography from "../Typography";

interface QuizGeneratorProps {
  quizCount: QuizCountsType;
  onHandleQuizCount: (item: QuizCountsType) => void;
  onQuizGenerator: () => void;
  checked: boolean;
  onHandleChecked: () => void;
}

const QuizGeneratorContainer = styled("section", {
  label: "QuizGeneratorContainer"
})(() => {
  return {
    marginTop: "3em"
  };
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

const QuizBookmarkCheckConatiner = styled("div", {
  label: "QuizBookmarkCheckConatiner"
})(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: "20px",
    gap: 10
  };
});

const OnlyBookmarkText = styled(Typography, {
  label: "OnlyBookmarkText"
})(() => {
  return {
    cursor: "pointer"
  };
});

const BookmarkRadioButton = styled("input", {
  label: "BookmarkRadioButton"
})(() => {
  return {
    cursor: "pointer"
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

const QuizGeneratorDescription = styled("div", {
  label: "QuizGeneratorDescription"
})(() => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: "2em",
    gap: "0.7em",
    color: "#747474"
  };
});

const QuizGenerator = (props: QuizGeneratorProps) => {
  const {
    quizCount,
    onHandleQuizCount,
    onQuizGenerator,
    checked,
    onHandleChecked
  } = props;

  return (
    <QuizGeneratorContainer>
      <QuizGeneratorContents>
        <QuizBookmarkCheckConatiner>
          <BookmarkRadioButton
            type="radio"
            readOnly
            checked={checked}
            onClick={onHandleChecked}
          />
          <OnlyBookmarkText onClick={onHandleChecked}>
            Bookmark 문제만 풀기
          </OnlyBookmarkText>
        </QuizBookmarkCheckConatiner>
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
        <QuizGeneratorDescription>
          <Typography>문제 개수는 카테고리 별 n 등분됩니다.</Typography>
          <Typography>부족한 경우 다른 카테고리 개수로 채워집니다.</Typography>
        </QuizGeneratorDescription>
      </QuizGeneratorContents>
    </QuizGeneratorContainer>
  );
};

export default QuizGenerator;

import styled from "@emotion/styled";
import { BsFillBookmarkHeartFill, BsFillBookmarkXFill } from "react-icons/bs";
import { Typography } from "../../../../..";
import { colors, DataType } from "../../../../../../common";

interface QuestionProps {
  type: DataType;
  question: string;
  upperIndex: number;
  correct: boolean;
  isSubmit: boolean;
}

const QuestionContainer = styled("div", {
  label: "QuestionContainer"
})(() => {
  return {
    display: "flex",
    alignItems: "center"
  };
});

const QuestionNumber = styled(Typography, { label: "Question" })(() => {
  return {
    marginRight: 20
  };
});

const QuestionText = styled(Typography, { label: "QuestionText" })(() => {
  return {};
});

const QuizType = styled(Typography, { label: "QuizType" })<{ type: DataType }>(
  ({ type }) => {
    return {
      marginLeft: 15,
      color: colors[type]
    };
  }
);

const ResultAnswer = styled(Typography, {
  label: "ResultAnswer"
})<{ correct: boolean }>(({ correct }) => {
  return {
    marginLeft: 15,
    fontSize: 24,
    fontStyle: "italic",
    color: correct ? "#44a544" : "#ff0000"
  };
});

const BookmarkIcon = styled(BsFillBookmarkXFill, {
  label: "BookmarkIcon"
})(() => {
  return {
    margin: "0 0 0 auto",
    width: 22,
    height: 22,
    color: "gray",
    cursor: "pointer"
  };
});

const BookmarkedIcon = styled(BsFillBookmarkHeartFill, {
  label: "BookmarkedIcon"
})(() => {
  return {
    margin: "0 0 0 auto",
    width: 22,
    height: 22,
    color: "gray",
    cursor: "pointer"
  };
});

const Question = (props: QuestionProps) => {
  const { upperIndex, question, type, correct, isSubmit } = props;

  const onAddBookmark = () => {};

  const onRemoveBookmark = () => {};

  return (
    <QuestionContainer>
      <QuestionNumber fontWeight={600} fontSize={24}>
        Quiz {upperIndex + 1}.
      </QuestionNumber>
      <QuestionText fontSize={20}>{question}</QuestionText>
      <QuizType type={type}>({type})</QuizType>
      {isSubmit && (
        <ResultAnswer correct={correct}>
          {correct ? "Good" : "Bad"}
        </ResultAnswer>
      )}
      {/* <BookmarkIcon /> */}
      <BookmarkedIcon />
    </QuestionContainer>
  );
};

export default Question;

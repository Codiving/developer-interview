import styled from "@emotion/styled";
import { BsFillBookmarkHeartFill, BsFillBookmarkXFill } from "react-icons/bs";
import { Typography } from "../../../../..";
import { colors, Data, DataType } from "../../../../../../common";

interface QuestionProps {
  type: DataType;
  question: string;
  upperIndex: number;
  correct: boolean;
  isSubmit: boolean;
  bookmarked: string[];
  onChangeBookmarked: (bookmarked: string[]) => void;
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

interface BookmarkIconProps {
  bookmarked: boolean;
  onClick: () => void;
}

const BookmarkIcon = (props: BookmarkIconProps) => {
  const { bookmarked, onClick } = props;

  return (
    <div
      style={{
        margin: "0 0 0 auto"
      }}
      onClick={onClick}
    >
      <BsFillBookmarkHeartFill
        style={{
          width: 22,
          height: 22,
          cursor: "pointer",
          color: bookmarked ? "red" : "gray"
        }}
      />
    </div>
  );
};

const Question = (props: QuestionProps) => {
  const {
    upperIndex,
    question,
    type,
    correct,
    isSubmit,
    bookmarked,
    onChangeBookmarked
  } = props;

  const isBookmarked = Boolean(
    bookmarked.find(bookmark => bookmark === question)
  );

  const onAddBookmark = () => {
    const newBookmarked = [...bookmarked, question];
    onChangeBookmarked(newBookmarked);
    window.localStorage.setItem("question", JSON.stringify(newBookmarked));
  };

  const onRemoveBookmark = () => {
    const newBookmarked = bookmarked.filter(bookmark => bookmark !== question);
    onChangeBookmarked(newBookmarked);
    window.localStorage.setItem("question", JSON.stringify(newBookmarked));
  };

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
      <BookmarkIcon
        bookmarked={isBookmarked}
        onClick={() => (isBookmarked ? onRemoveBookmark() : onAddBookmark())}
      />
    </QuestionContainer>
  );
};

export default Question;

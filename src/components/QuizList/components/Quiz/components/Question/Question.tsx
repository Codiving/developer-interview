import styled from "@emotion/styled";
import { Typography } from "../../../../..";
import { colors, DataType } from "../../../../../../common";

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

interface QuestionProps {
  type: DataType;
  question: string[];
  upperIndex: number;
}

const Question = (props: QuestionProps) => {
  const { upperIndex, question, type } = props;

  return (
    <QuestionContainer>
      <QuestionNumber fontWeight={600} fontSize={24}>
        Quiz {upperIndex + 1}.{" "}
      </QuestionNumber>
      <QuestionText fontSize={20}>{question}</QuestionText>
      <QuizType type={type}>({type})</QuizType>
    </QuestionContainer>
  );
};

export default Question;

import styled from "@emotion/styled";
import { Typography } from "../../../../..";

interface DescriptionProps {
  keywords: string[];
  messages: string[];
}

const DescriptionContainer = styled("div", {
  label: "DescriptionContainer"
})(() => {
  return {};
});

const MessagesContainer = styled("div", {
  label: "MessagesContainer"
})(() => {
  return {
    marginTop: "1em"
  };
});

const MessageTitle = styled(Typography, {
  label: "MessageTitle"
})(() => {
  return {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 10
  };
});

const KeywordsContainer = styled("div", {
  label: "KeywordsContainer"
})(() => {
  return {
    display: "flex",
    gap: "0.7em",
    marginTop: "2em"
  };
});

const KeywordRecommend = styled(Typography, {
  label: "KeywordRecommend"
})(() => {
  return {
    fontSize: 18
  };
});

const Keyword = styled("span", {
  label: "Keyword"
})(() => {
  return {};
});

const Description = (props: DescriptionProps) => {
  const { keywords, messages } = props;
  return (
    <DescriptionContainer>
      <MessagesContainer>
        <MessageTitle component="h6">추가 설명</MessageTitle>
        {messages.map(message => (
          <div key={message}>{message}</div>
        ))}
      </MessagesContainer>
      <KeywordsContainer>
        <KeywordRecommend>검색 키워드 : </KeywordRecommend>
        {keywords.map(keyword => (
          <Keyword key={keyword}>{keyword}</Keyword>
        ))}
      </KeywordsContainer>
    </DescriptionContainer>
  );
};

export default Description;

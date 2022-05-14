import styled from "@emotion/styled";
import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { data } from "../public/data";
import { maxWidth } from "../src/common";
import { Typography } from "../src/components";
import Category from "../src/components/Category";
import Quiz from "../src/components/Quiz";

const HomeContainer = styled("div", {
  label: "HomeContainer"
})(() => {
  return {};
});

const MainSection = styled("section", {
  label: "MainSection"
})(() => {
  return {
    backgroundColor: "#e0e0ee",
    padding: "3em"
  };
});

const MainContents = styled("div", {
  label: "MainContents"
})(() => {
  return {
    maxWidth: maxWidth,
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.2em"
  };
});

const QuizSection = styled("section", {
  label: "QuizSection"
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

const Home: NextPage = () => {
  const [answers, setAnswers] = useState<number[]>([]);
  const [isSubmit, setIsSubmit] = useState(false);

  const onChangeAnswer = useCallback(
    (index: number, _answer: number) => {
      const newAnswer = answers.map((item, idx) => {
        if (index === idx) return _answer;
        return item;
      });
      setAnswers(newAnswer);
    },
    [answers]
  );

  const onSubmit = () => {
    const isNoneSelected = answers.reduce<number[]>((acc, cur, index) => {
      if (cur === -1) return [...acc, index];
      return acc;
    }, []);

    if (isNoneSelected.length) {
      return;
    }
    setIsSubmit(true);
  };

  useEffect(() => {
    setAnswers(new Array(data.length).fill(-1));
  }, []);

  return (
    <HomeContainer>
      <MainSection>
        <MainContents>
          <div>
            <Typography fontWeight={600} fontSize={24}>
              프론트엔드 개발자 면접 준비
            </Typography>
            <Typography> 를 하고 계신가요?</Typography>
          </div>
          <div>
            <Typography>간단한 </Typography>
            <Typography fontWeight={600} fontSize={24}>
              객관식 면접
            </Typography>
            <Typography> 을 통해 나의 부족함을 확인해봅시다.</Typography>
          </div>
        </MainContents>
      </MainSection>
      <Category />
      <QuizSection>
        <QuizContents>
          {data.map((item, index) => {
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
      </QuizSection>
      <div>
        <button onClick={onSubmit}>Submit</button>
      </div>
      <Typography>
        틀린 내용을 확인하시거나 건의사항이 있으시면 아래 email로 연락 바랍니다.
      </Typography>
    </HomeContainer>
  );
};

export default Home;

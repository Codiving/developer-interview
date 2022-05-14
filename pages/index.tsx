import styled from "@emotion/styled";
import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";
import { data } from "../public/data";
import { IconStyle, maxWidth, QuizCounts, QuizCountsType } from "../src/common";
import { Typography } from "../src/components";
import Category from "../src/components/Category";
import Quiz from "../src/components/Quiz";
import QuizGenerator from "../src/components/QuizGenerator";

export interface ICategory {
  text: string;
  color: string;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  selected: boolean;
}

export const Categories: ICategory[] = [
  {
    text: "Web",
    startIcon: <GoBrowser style={{ ...IconStyle, color: "#4b4bcd" }} />,
    color: "#4b4bcd",
    selected: false
  },
  {
    text: "JavaScript",
    startIcon: <DiJavascript style={{ ...IconStyle, color: "#ff9800" }} />,
    color: "#ff9800",
    selected: false
  },
  {
    text: "React",
    startIcon: <FaReact style={{ ...IconStyle, color: "#03a9f4" }} />,
    color: "#03a9f4",
    selected: false
  }
];

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
  const [contents, setContents] = useState(data.slice(0, 5));
  const [categories, setCategories] = useState<ICategory[]>(Categories);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const [quizCount, setQuizCount] = useState<QuizCountsType>(QuizCounts[0]);

  const onHandleCategories = useCallback((newCategories: ICategory[]) => {
    setCategories(newCategories);
  }, []);

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

  const onHandleQuizCount = useCallback(
    (count: QuizCountsType) => setQuizCount(count),
    []
  );

  const onQuizGenerator = () => {
    const selectedCategories = categories.filter(({ selected }) => selected);
    console.log("selectedCategories", selectedCategories);
    console.log("quizCount", quizCount);
  };

  useEffect(() => {
    setAnswers(new Array(contents.length).fill(-1));
  }, [contents]);

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
      <Category
        categories={categories}
        onHandleCategories={onHandleCategories}
      />
      <QuizGenerator
        quizCount={quizCount}
        onHandleQuizCount={onHandleQuizCount}
        onQuizGenerator={onQuizGenerator}
      />
      <QuizSection>
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

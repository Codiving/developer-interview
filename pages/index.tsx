import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";
import { SiTypescript } from "react-icons/si";
import { data } from "../public/data";
import {
  colors,
  Data,
  DataType,
  getCategoryDataCount,
  IconStyle,
  QuizCounts,
  QuizCountsType
} from "../src/common";
import {
  Category,
  MainDescription,
  QuizGenerator,
  StartButton
} from "../src/components";
import QuizList from "../src/components/QuizList";
import SubmitButton from "../src/components/SubmitButton";
import { getQuiz, getRealQuizCount, shuffle } from "../src/utils";

export interface ICategory {
  text: string;
  color: string;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  selected: boolean;
  count: number;
}

const { Web, JavaScript, React, TypeScript } = getCategoryDataCount();

export const Categories: ICategory[] = [
  {
    text: "Web",
    startIcon: <GoBrowser style={{ ...IconStyle, color: colors["Web"] }} />,
    color: colors["Web"],
    selected: false,
    count: Web
  },
  {
    text: "JavaScript",
    startIcon: (
      <DiJavascript style={{ ...IconStyle, color: colors["JavaScript"] }} />
    ),
    color: colors["JavaScript"],
    selected: false,
    count: JavaScript
  },
  {
    text: "TypeScript",
    startIcon: (
      <SiTypescript style={{ ...IconStyle, color: colors["TypeScript"] }} />
    ),
    color: colors["TypeScript"],
    selected: false,
    count: TypeScript
  },
  {
    text: "React",
    startIcon: <FaReact style={{ ...IconStyle, color: colors["React"] }} />,
    color: colors["React"],
    selected: false,
    count: React
  }
];

const bottomToUp = keyframes`
  from {
    transform: translate3d(0 ,1000px ,0);
  }

  to {
    transform: translate3d(0 ,0px ,0);
  }
`;

const HomeContainer = styled("div", {
  label: "HomeContainer"
})(() => {
  return {
    paddingBottom: 40
  };
});

const AnimationContainer = styled("div", {
  label: "AnimationContainer"
})<{ $display: boolean }>(({ $display }) => {
  return {
    display: $display ? "block" : "none",
    animation: `${bottomToUp} 0.5s`,
    padding: "5em 0"
  };
});

const initDisplay = {
  quizGenerator: false,
  quizList: false
};

const Home: NextPage = () => {
  const [contents, setContents] = useState<Data[]>(data.slice(0, 5));
  const [categories, setCategories] = useState<ICategory[]>(Categories);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const [quizCount, setQuizCount] = useState<QuizCountsType>(QuizCounts[0]);

  const [display, setDisplay] = useState(initDisplay);

  const onHandleCategories = useCallback((newCategories: ICategory[]) => {
    setCategories(newCategories);
  }, []);

  const onChangeAnswer = useCallback(
    (index: number, _answer: string) => {
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
      if (cur === "") return [...acc, index];
      return acc;
    }, []);

    if (isNoneSelected.length) {
      return;
    }
    console.log("contents", contents);
    console.log("answers", answers);
    setIsSubmit(true);
  };

  const onHandleQuizCount = useCallback(
    (count: QuizCountsType) => setQuizCount(count),
    []
  );

  const onQuizGenerator = () => {
    const selectedCategories = categories.reduce<
      {
        text: string;
        count: number;
      }[]
    >((acc, cur) => {
      if (cur.selected)
        return [...acc, { text: cur.text, count: cur.count ? cur.count : 0 }];
      return acc;
    }, []);

    const sortedCategories = selectedCategories.sort(
      (a, b) => a.count - b.count
    );

    if (!sortedCategories.length) {
      alert("카테고리를 선택해주세요.");
      return;
    }

    const realQuizCount = getRealQuizCount(sortedCategories, quizCount);
    // console.log("realQuizCount", realQuizCount);

    const newContents = realQuizCount
      .reduce<Data[]>((acc, cur) => {
        const quizs = getQuiz(cur.text as DataType, cur.count);
        return [...acc, ...quizs];
      }, [])
      .sort(shuffle);

    setContents(newContents);

    setDisplay(prev => ({
      ...prev,
      quizList: true
    }));

    setIsSubmit(false);
  };

  const onStart = useCallback(() => {
    setDisplay(prev => ({ ...prev, quizGenerator: true }));
  }, []);

  useEffect(() => {
    setAnswers(new Array(contents.length).fill(""));
  }, [contents]);

  return (
    <HomeContainer>
      <MainDescription />
      {!display.quizGenerator && (
        <StartButton onClick={onStart} display={display.quizGenerator} />
      )}
      <AnimationContainer $display={display.quizGenerator}>
        <Category
          categories={categories}
          onHandleCategories={onHandleCategories}
        />
        <QuizGenerator
          quizCount={quizCount}
          onHandleQuizCount={onHandleQuizCount}
          onQuizGenerator={onQuizGenerator}
        />
      </AnimationContainer>
      {display.quizList && (
        <QuizList
          contents={contents}
          isSubmit={isSubmit}
          answers={answers}
          onChangeAnswer={onChangeAnswer}
        />
      )}

      {display.quizList && !isSubmit && <SubmitButton onSubmit={onSubmit} />}
      {/* <Typography>
        틀린 내용을 확인하시거나 건의사항이 있으시면 아래 email로 연락 바랍니다.
      </Typography> */}
    </HomeContainer>
  );
};

export default Home;

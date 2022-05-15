import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";
import { data } from "../public/data";
import {
  Data,
  getCategoryDataCount,
  IconStyle,
  QuizCounts,
  QuizCountsType
} from "../src/common";
import {
  Button,
  Category,
  MainDescription,
  QuizGenerator,
  StartButton,
  Typography
} from "../src/components";
import QuizList from "../src/components/QuizList";
export interface ICategory {
  text: string;
  color: string;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  selected: boolean;
  count: number;
}

const { Web, JavaScript, React } = getCategoryDataCount();

export const Categories: ICategory[] = [
  {
    text: "Web",
    startIcon: <GoBrowser style={{ ...IconStyle, color: "#4b4bcd" }} />,
    color: "#4b4bcd",
    selected: false,
    count: Web
  },
  {
    text: "JavaScript",
    startIcon: <DiJavascript style={{ ...IconStyle, color: "#ff9800" }} />,
    color: "#ff9800",
    selected: false,
    count: JavaScript
  },
  {
    text: "React",
    startIcon: <FaReact style={{ ...IconStyle, color: "#03a9f4" }} />,
    color: "#03a9f4",
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
  return {};
});

const AnimationContainer = styled("div", {
  label: "AnimationContainer"
})(() => {
  return {
    animation: `${bottomToUp} 0.5s`
  };
});

const Home: NextPage = () => {
  const [contents, setContents] = useState<Data[]>(data.slice(0, 5));
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
    const selectedCategories = categories.reduce<
      {
        text: string;
        count: number;
      }[]
    >((acc, cur) => {
      if (cur.selected) return [...acc, { text: cur.text, count: cur.count }];
      return acc;
    }, []);
    console.log("selectedCategories", selectedCategories);
    console.log("quizCount", quizCount);
  };

  useEffect(() => {
    setAnswers(new Array(contents.length).fill(-1));
  }, [contents]);

  return (
    <HomeContainer>
      <MainDescription />
      <StartButton />
      <AnimationContainer>
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
      <QuizList
        contents={contents}
        isSubmit={isSubmit}
        answers={answers}
        onChangeAnswer={onChangeAnswer}
      />

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

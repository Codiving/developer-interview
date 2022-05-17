import { data } from "../public/data";

export const maxWidth = 1200;

export const prefix = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

export const IconStyle = {
  width: 24,
  height: 24
};

export const dataType = ["Web", "JavaScript", "TypeScript", "React"] as const;
export type DataType = typeof dataType[number];

export interface Data {
  type: DataType;
  question: string[];
  candidates: string[];
  answer: string;
  keywords: string[];
  messages: string[];
  link: string[];
}

export const QuizCounts = [20, 25, 30, 35, 40] as const;
export type QuizCountsType = typeof QuizCounts[number];

export const getCategoryDataCount = (): {
  Web: number;
  JavaScript: number;
  React: number;
  TypeScript: number;
} => {
  const type = data.map(el => el.type);

  const result = type.reduce<any>((acc, cur) => {
    acc[cur] = 0;
    return acc;
  }, {});

  data.forEach(({ type }) => {
    result[type] += 1;
  });

  return result;
};

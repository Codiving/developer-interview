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

export interface Data {
  type: string;
  question: string[];
  candidates: string[];
  answer: string;
  keywords: string[];
  messages: string[];
  link: string[];
}

export const QuizCounts = [20, 25, 30, 35, 40] as const;
export type QuizCountsType = typeof QuizCounts[number];

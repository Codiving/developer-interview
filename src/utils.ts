import { DATA } from "../public/data";
import { Data, dataType, DataType } from "./common";

const hexToRgbA = (hex: string) => {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" +
      [(Number(c) >> 16) & 255, (Number(c) >> 8) & 255, Number(c) & 255].join(
        ","
      ) +
      ",1)"
    );
  }
  throw new Error("Bad Hex");
};

const hexToRgbWithA = (hex: string, a: number) => {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" +
      [(Number(c) >> 16) & 255, (Number(c) >> 8) & 255, Number(c) & 255].join(
        ","
      ) +
      `,${a})`
    );
  }
  throw new Error("Bad Hex");
};

const getRealQuizCount = (
  arr: { text: string; count: number }[],
  _count: number,
  index: number = 0
): { text: string; count: number }[] => {
  const newArr = arr.map(item => ({ ...item }));
  console.log("arr", arr);
  let count = _count / (arr.length - index);

  if (!Number.isInteger(count)) {
    count = Math.floor(count);
  }

  const realCount = arr[index].count < count ? arr[index].count : count;
  const newCount = _count - realCount;
  newArr[index].count = realCount;

  index += 1;

  if (arr.length > index) {
    return getRealQuizCount(newArr, newCount, index);
  }
  return newArr;
};

const getQuiz = (
  category: DataType,
  count: number,
  checked: boolean,
  bookmarked: string[]
): Data[] => {
  const index = dataType.findIndex(type => type === category);
  if (checked) {
    const datas = DATA[index].filter(({ question }) =>
      bookmarked.includes(question)
    );
    return quizShuffle(datas).slice(0, count);
  } else {
    return quizShuffle(DATA[index]).slice(0, count);
  }
};

const shuffle = () => Math.random() - 0.5;

const quizShuffle = (quizData: Data[]): Data[] => {
  return quizData.map(item => ({ ...item })).sort(shuffle);
};

export { hexToRgbA, hexToRgbWithA, getRealQuizCount, getQuiz, shuffle };

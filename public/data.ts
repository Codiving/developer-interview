import { Data } from "../src/common";

const Web: Data[] = [
  {
    type: "Web",
    question: "www.google.com은 DNS이다.",
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["DNS", "Domain Name"],
    messages: ["DNS와 Domain Name의 차이를 구분하셔야 합니다."],
    link: ["https://codiving.kr/143"]
  },
  {
    type: "Web",
    question: "DNS 서버가 다운되면 해당 도메인에 접근할 수 없다.",
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["DNS", "IP"],
    messages: [
      "DNS 서버가 다운되어도 IP 주소를 알면 접속이 가능합니다.",
      "만약 서버에서 IP 직접 접근을 막으면 불가능합니다."
    ],
    link: ["https://codiving.kr/143"]
  },
  {
    type: "Web",
    question: "Browser 렌더링 과정에서 reflow는 repaint 다음으로 이루어진다.",
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["브라우저 렌더링", "Reflow", "Repaint"],
    messages: ["Reflow 과정을 거친 후 Repaint가 일어납니다."],
    link: ["https://codiving.kr/144"]
  },
  {
    type: "Web",
    question: "display:none; 은 렌더 트리에 포함되지 않는다.",
    candidates: ["O", "X"],
    answer: "O",
    keywords: ["렌더 트리", "Render Tree"],
    messages: ["화면에 보이지 않으므로 렌더 트리에 포함되지 않습니다."],
    link: ["https://codiving.kr/144"]
  },
  {
    type: "Web",
    question: "visibility:hidden; 은 렌더 트리에 포함되지 않는다.",
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["렌더 트리", "Render Tree"],
    messages: ["화면에 영역이 포시되므로 렌더 트리에 포함됩니다."],
    link: ["https://codiving.kr/144"]
  },
  {
    type: "Web",
    question: "쿠키는 서버에서 관리하는 정보이다.",
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["쿠키", "세션"],
    messages: ["쿠키는 브라우저에서 관리합니다."],
    link: ["https://codiving.kr/145"]
  },
  {
    type: "Web",
    question: "세션으로 로그인 유지 기능을 구현할 수 있다.",
    candidates: ["O", "X"],
    answer: "O",
    keywords: ["쿠키", "세션"],
    messages: [],
    link: ["https://codiving.kr/145"]
  },
  {
    type: "Web",
    question: "jwt를 사용하면 세션보다 서버에 부담이 덜하다.",
    candidates: ["O", "X"],
    answer: "O",
    keywords: ["쿠키", "세션", "jwt"],
    messages: [],
    link: ["https://codiving.kr/145"]
  },
  {
    type: "Web",
    question: "jwt를 사용하면 강제 로그아웃 기능을 구현할 수 있다.",
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["쿠키", "세션", "jwt"],
    messages: ["jwt만을 이용해서는 강제 로그아웃 기능을 구현하기 힘듭니다."],
    link: ["https://codiving.kr/145"]
  },
  {
    type: "Web",
    question: "쿠키보다 세션이 보안에 더 좋다.",
    candidates: ["O", "X"],
    answer: "O",
    keywords: ["쿠키", "세션"],
    messages: [
      "쿠키는 브라우저 세션은 서버에서 관리합니다.",
      "따라서 세션이 보안이 더 뛰어납니다."
    ],
    link: ["https://codiving.kr/145"]
  },
  {
    type: "Web",
    question: "CORS는 서버에서 띄우는 에러이다.",
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["CORS"],
    messages: ["CORS 에러는 브라우저에서 띄웁니다."],
    link: ["https://codiving.kr/146"]
  }
];

const JavaScript: Data[] = [
  {
    type: "JavaScript",
    question:
      "111 Browser 렌더링 과정에서 reflow는 repaint 다음으로 이루어진다.",
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["브라우저 렌더링", "Reflow", "Repaint"],
    messages: ["Reflow 과정을 거친 후 Repaint가 일어납니다."],
    link: ["https://codiving.kr/144"]
  },
  {
    type: "JavaScript",
    question: "111 display:none; 은 렌더 트리에 포함되지 않는다.",
    candidates: ["O", "X"],
    answer: "O",
    keywords: ["렌더 트리", "Render Tree"],
    messages: ["화면에 보이지 않으므로 렌더 트리에 포함되지 않습니다."],
    link: ["https://codiving.kr/144"]
  },
  {
    type: "JavaScript",
    question: "111 visibility:hidden; 은 렌더 트리에 포함되지 않는다.",
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["렌더 트리", "Render Tree"],
    messages: ["화면에 영역이 포시되므로 렌더 트리에 포함됩니다."],
    link: ["https://codiving.kr/144"]
  },
  {
    type: "JavaScript",
    question: "111 쿠키는 서버에서 관리하는 정보이다.",
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["쿠키", "세션"],
    messages: ["쿠키는 브라우저에서 관리합니다."],
    link: ["https://codiving.kr/145"]
  },
  {
    type: "JavaScript",
    question: "111 세션으로 로그인 유지 기능을 구현할 수 있다.",
    candidates: ["O", "X"],
    answer: "O",
    keywords: ["쿠키", "세션"],
    messages: [],
    link: ["https://codiving.kr/145"]
  },
  {
    type: "JavaScript",
    question: "111 jwt를 사용하면 세션보다 서버에 부담이 덜하다.",
    candidates: ["O", "X"],
    answer: "O",
    keywords: ["쿠키", "세션", "jwt"],
    messages: [],
    link: ["https://codiving.kr/145"]
  },
  {
    type: "JavaScript",
    question: "111 jwt를 사용하면 강제 로그아웃 기능을 구현할 수 있다.",
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["쿠키", "세션", "jwt"],
    messages: ["jwt만을 이용해서는 강제 로그아웃 기능을 구현하기 힘듭니다."],
    link: ["https://codiving.kr/145"]
  },
  {
    type: "JavaScript",
    question: "111 쿠키보다 세션이 보안에 더 좋다.",
    candidates: ["O", "X"],
    answer: "O",
    keywords: ["쿠키", "세션"],
    messages: [
      "쿠키는 브라우저 세션은 서버에서 관리합니다.",
      "따라서 세션이 보안이 더 뛰어납니다."
    ],
    link: ["https://codiving.kr/145"]
  },
  {
    type: "JavaScript",
    question: "111 CORS는 서버에서 띄우는 에러이다.",
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["CORS"],
    messages: ["CORS 에러는 브라우저에서 띄웁니다."],
    link: ["https://codiving.kr/146"]
  }
];

const TypeScript: Data[] = [
  {
    type: "TypeScript",
    question:
      "222 Browser 렌더링 과정에서 reflow는 repaint 다음으로 이루어진다.",
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["브라우저 렌더링", "Reflow", "Repaint"],
    messages: ["Reflow 과정을 거친 후 Repaint가 일어납니다."],
    link: ["https://codiving.kr/144"]
  },
  {
    type: "TypeScript",
    question: "222 display:none; 은 렌더 트리에 포함되지 않는다.",
    candidates: ["O", "X"],
    answer: "O",
    keywords: ["렌더 트리", "Render Tree"],
    messages: ["화면에 보이지 않으므로 렌더 트리에 포함되지 않습니다."],
    link: ["https://codiving.kr/144"]
  },
  {
    type: "TypeScript",
    question: "222 visibility:hidden; 은 렌더 트리에 포함되지 않는다.",
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["렌더 트리", "Render Tree"],
    messages: ["화면에 영역이 포시되므로 렌더 트리에 포함됩니다."],
    link: ["https://codiving.kr/144"]
  },
  {
    type: "TypeScript",
    question: "222 쿠키는 서버에서 관리하는 정보이다.",
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["쿠키", "세션"],
    messages: ["쿠키는 브라우저에서 관리합니다."],
    link: ["https://codiving.kr/145"]
  },
  {
    type: "TypeScript",
    question: "222 세션으로 로그인 유지 기능을 구현할 수 있다.",
    candidates: ["O", "X"],
    answer: "O",
    keywords: ["쿠키", "세션"],
    messages: [],
    link: ["https://codiving.kr/145"]
  }
];

const React: Data[] = [
  {
    type: "React",
    question:
      "333 Browser 렌더링 과정에서 reflow는 repaint 다음으로 이루어진다.",
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["브라우저 렌더링", "Reflow", "Repaint"],
    messages: ["Reflow 과정을 거친 후 Repaint가 일어납니다."],
    link: ["https://codiving.kr/144"]
  },
  {
    type: "React",
    question: "333 display:none; 은 렌더 트리에 포함되지 않는다.",
    candidates: ["O", "X"],
    answer: "O",
    keywords: ["렌더 트리", "Render Tree"],
    messages: ["화면에 보이지 않으므로 렌더 트리에 포함되지 않습니다."],
    link: ["https://codiving.kr/144"]
  },
  {
    type: "React",
    question: "333 visibility:hidden; 은 렌더 트리에 포함되지 않는다.",
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["렌더 트리", "Render Tree"],
    messages: ["화면에 영역이 포시되므로 렌더 트리에 포함됩니다."],
    link: ["https://codiving.kr/144"]
  },
  {
    type: "React",
    question: "333 쿠키는 서버에서 관리하는 정보이다.",
    candidates: ["O", "X"],
    answer: "X",
    keywords: ["쿠키", "세션"],
    messages: ["쿠키는 브라우저에서 관리합니다."],
    link: ["https://codiving.kr/145"]
  },
  {
    type: "React",
    question: "333 세션으로 로그인 유지 기능을 구현할 수 있다.",
    candidates: ["O", "X"],
    answer: "O",
    keywords: ["쿠키", "세션"],
    messages: [],
    link: ["https://codiving.kr/145"]
  }
];

const DATA = [[...Web], [...JavaScript], [...TypeScript], [...React]];

const data: Data[] = DATA.flat();

export { data, DATA };

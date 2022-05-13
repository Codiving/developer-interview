import styled from "@emotion/styled";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";
import { maxWidth } from "../../common";
import Chip from "../Chip";
import Typography from "../Typography";

interface Category {
  text: string;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
}

interface CategoryProps {}

const IconStyle = {
  width: 24,
  height: 24
};

const categories: Category[] = [
  {
    text: "Web",
    startIcon: <GoBrowser style={IconStyle} />
    // #03a9f4
  },
  {
    text: "JavaScript",
    startIcon: <DiJavascript style={IconStyle} />
    // #ff9800
  },
  {
    text: "React",
    startIcon: <FaReact style={IconStyle} />
  }
  // #4b4bcd
];

const CategoryContainer = styled("section", {
  label: "CategoryContainer"
})(() => {
  return {};
});

const CategoryContents = styled("div", {
  label: "CategoryContents"
})(() => {
  return {
    maxWidth: maxWidth,
    width: "100%",
    margin: "2em auto",
    display: "flex",
    justifyContent: "center",
    gap: "1em"
  };
});

const Category = (props: CategoryProps) => {
  return (
    <CategoryContainer>
      <CategoryContents>
        {categories.map(({ startIcon, endIcon, text }) => {
          return (
            <Chip key={text} startIcon={startIcon} endIcon={endIcon}>
              <Typography lineHeight={"initial"}>{text}</Typography>
            </Chip>
          );
        })}
      </CategoryContents>
    </CategoryContainer>
  );
};

export default Category;

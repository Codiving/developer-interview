import styled from "@emotion/styled";
import { useCallback, useState } from "react";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";
import { maxWidth } from "../../common";
import Chip from "../Chip";
import Typography from "../Typography";

interface Category {
  text: string;
  color: string;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  selected: boolean;
}

interface CategoryProps {}

const IconStyle = {
  width: 24,
  height: 24
};

const Categories: Category[] = [
  {
    text: "Web",
    startIcon: (
      <GoBrowser style={{ ...IconStyle, color: "rgba(75, 75, 205, 1)" }} />
    ),
    color: "rgba(75, 75, 205, 1)",
    selected: false
  },
  {
    text: "JavaScript",
    startIcon: (
      <DiJavascript style={{ ...IconStyle, color: "rgba(255, 152, 0, 1)" }} />
    ),
    color: "rgba(255, 152, 0, 1)",
    selected: false
  },
  {
    text: "React",
    startIcon: (
      <FaReact style={{ ...IconStyle, color: "rgba(3, 169, 244, 1)" }} />
    ),
    color: "rgba(3, 169, 244, 1)",
    selected: false
  }
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

const ChipCategory = styled(Chip, {
  label: "ChipCategory"
})<{ selected: boolean; color: string }>(({ selected, color: _color }) => {
  const [r, g, b] = _color
    .replace("rgba", "")
    .replace("(", "")
    .replace(")", "")
    .split(",");

  return {
    border: `1px solid rgba(${r},${g},${b}, ${0.3})`,
    backgroundColor: selected ? `rgba(${r},${g},${b}, ${0.3})` : "transparent"
  };
});

const ChipTypography = styled(Typography, {
  label: "ChipTypography"
})<{ color?: string }>(({ color }) => {
  return {
    color: color ? color : ""
  };
});

const Category = (props: CategoryProps) => {
  const [categories, setCategories] = useState<Category[]>(Categories);

  const onSelected = useCallback(
    (index: number, selected: boolean) => () => {
      const newCategories = categories.map((item, idx) => {
        if (idx !== index) return item;
        return {
          ...item,
          selected: !selected
        };
      });

      setCategories(newCategories);
    },
    [categories]
  );

  return (
    <CategoryContainer>
      <CategoryContents>
        {categories.map(
          ({ startIcon, endIcon, text, color, selected }, index) => {
            return (
              <ChipCategory
                onClick={onSelected(index, selected)}
                key={text}
                startIcon={startIcon}
                endIcon={endIcon}
                selected={selected}
                color={color}
              >
                <ChipTypography lineHeight={"initial"} color={color}>
                  {text}
                </ChipTypography>
              </ChipCategory>
            );
          }
        )}
      </CategoryContents>
    </CategoryContainer>
  );
};

export default Category;

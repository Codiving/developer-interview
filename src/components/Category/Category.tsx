import styled from "@emotion/styled";
import { useCallback, useState } from "react";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";
import { maxWidth } from "../../common";
import { hexToRgbWithA } from "../../utils";
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

const CategoryContainer = styled("section", {
  label: "CategoryContainer"
})(() => {
  return { position: "relative", padding: "2em" };
});

const CategoryContents = styled("div", {
  label: "CategoryContents"
})(() => {
  return {
    maxWidth: maxWidth,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "1em",
    margin: "0 auto"
  };
});

const ChipCategory = styled(Chip, {
  label: "ChipCategory"
})<{ selected: boolean; color: string }>(({ selected, color: _color }) => {
  const color = hexToRgbWithA(_color, 0.3);
  const backgroundColor = hexToRgbWithA(_color, 0.5);
  return {
    border: `1px solid ${color}`,
    backgroundColor: selected ? color : "transparent",

    "&:hover": {
      backgroundColor: backgroundColor
    }
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

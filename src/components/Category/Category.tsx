import styled from "@emotion/styled";
import { useCallback } from "react";
import { ICategory } from "../../../pages";
import { maxWidth } from "../../common";
import { hexToRgbWithA } from "../../utils";
import Chip from "../Chip";
import Typography from "../Typography";

interface CategoryProps {
  categories: ICategory[];
  onHandleCategories: (item: ICategory[]) => void;
}

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
  const { categories, onHandleCategories } = props;

  const onSelected = useCallback(
    (index: number, selected: boolean) => () => {
      const newCategories = categories.map((item, idx) => {
        if (idx !== index) return item;
        return {
          ...item,
          selected: !selected
        };
      });

      onHandleCategories(newCategories);
    },
    [categories, onHandleCategories]
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

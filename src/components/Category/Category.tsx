import styled from "@emotion/styled";
import { useCallback } from "react";
import { ICategory } from "../../../pages";
import { maxWidth } from "../../common";
import { hexToRgbWithA } from "../../utils";
import Chip from "../Chip";
import Typography from "../Typography";
import { GrPowerReset } from "react-icons/gr";

interface CategoryProps {
  categories: ICategory[];
  onHandleCategories: (item: ICategory[]) => void;
}

const CategoryContainer = styled("section", {
  label: "CategoryContainer"
})(() => {
  return { position: "relative" };
});
const CategoryContents = styled("div", {
  label: "CategoryContents"
})(() => {
  return {
    maxWidth: maxWidth,
    width: "90%",
    margin: "0 auto"
  };
});

const CategoryMainText = styled(Typography, {
  label: "CategoryMainText"
})(() => {
  return {
    textAlign: "center",
    fontSize: 30,
    fontWeight: 700
  };
});

const CategoryDescription = styled(Typography, {
  label: "CategoryDescription"
})(() => {
  return {
    margin: "20px 0 50px 0",
    textAlign: "right",
    fontSize: 16,
    color: "#747474"
  };
});

const ChipCategoryContainer = styled("div", {
  label: "ChipCategory"
})(() => {
  return {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "1em",
    margin: "0 auto"
  };
});

const ChipCategory = styled(Chip, {
  label: "ChipCategory"
})<{ selected?: boolean; color: string }>(({ selected, color: _color }) => {
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

  const onReset = useCallback(() => {
    const newCategories = categories.map(item => {
      return {
        ...item,
        selected: false
      };
    });
    onHandleCategories(newCategories);
  }, [categories, onHandleCategories]);

  return (
    <CategoryContainer>
      <CategoryContents>
        <CategoryMainText component="h3">Quiz Categories</CategoryMainText>
        <CategoryDescription component="p">
          Quiz를 풀고 싶은 카테고리를 선택해주세요. (중복 가능)
        </CategoryDescription>
        <ChipCategoryContainer>
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
          <ChipCategory
            key={"reset"}
            onClick={onReset}
            startIcon={<GrPowerReset />}
            color="#313030"
          >
            <ChipTypography lineHeight={"initial"} color={"#313030"}>
              {"Reset"}
            </ChipTypography>
          </ChipCategory>
        </ChipCategoryContainer>
      </CategoryContents>
    </CategoryContainer>
  );
};

export default Category;

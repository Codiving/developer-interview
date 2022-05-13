import styled from "@emotion/styled";

interface ChipProps {
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  children: React.ReactElement | string;
  bgColor?: string;
  color?: string;
}

const ChipContainer = styled("div", {
  label: "ChipContainer"
})<{ bgColor: string; color: string }>(({ bgColor, color }) => {
  return {
    display: "flex",
    alignItems: "center",
    gap: "0.2em",
    padding: "0.5em",
    width: "fit-content",
    borderRadius: 24,
    color: Boolean(color) ? color : "black",
    background: Boolean(bgColor) ? bgColor : "rgba(0, 0, 0, 0.08)"
  };
});

// outline: 1px solid rgb(189, 189, 189);
// backgroundColor: transparent

const IconWrapper = styled("div", {
  label: "IconWrapper"
})(() => {
  return {
    display: "flex"
  };
});

const Chip = (props: ChipProps) => {
  const { startIcon, endIcon, children, bgColor = "", color = "" } = props;
  return (
    <ChipContainer bgColor={bgColor} color={color}>
      {startIcon && <IconWrapper>{startIcon}</IconWrapper>}
      {children}
      {endIcon && <IconWrapper>{endIcon}</IconWrapper>}
    </ChipContainer>
  );
};

export default Chip;

import styled from "@emotion/styled";
import { hexToRgbWithA } from "../../utils";
import Typography from "../Typography";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  fontSize?: number;
  selected?: boolean;
  onClick?: () => void;
  borderRadius?: number;
}

const ButtonContainer = styled("button", {
  label: "ButtonContainer"
})<{ color: string; selected: boolean; borderRadius: number }>(
  ({ color, selected: _selected, borderRadius }) => {
    const selected = _selected
      ? { color: "white", backgroundColor: hexToRgbWithA(color, 0.5) }
      : {};

    return {
      border: `1px solid ${color}`,
      borderRadius: borderRadius,
      background: "none",
      padding: 8,
      cursor: "pointer",
      color: color,
      ...selected,
      "&:hover": {
        backgroundColor: hexToRgbWithA(color, 0.3),
        color: "white"
      }
    };
  }
);

const ButtonTypography = styled(Typography, {
  label: "ButtonTypography"
})<{ fontSize: number }>(({ fontSize }) => {
  return {
    fontSize: Boolean(fontSize) ? fontSize : 12
  };
});

const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    color = "#2196f3",
    fontSize = 0,
    selected = false,
    onClick,
    borderRadius = 8
  } = props;

  return (
    <ButtonContainer
      className={className}
      data-type="button"
      color={color}
      selected={selected}
      onClick={onClick}
      borderRadius={borderRadius}
    >
      <ButtonTypography fontSize={fontSize}>{children}</ButtonTypography>
    </ButtonContainer>
  );
};

export default Button;

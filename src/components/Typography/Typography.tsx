import styled from "@emotion/styled";

interface Props {
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
  children: React.ReactNode;
  fontWeight?: number;
  fontSize?: number;
  className?: string;
  lineHeight?: string;
  onClick?: () => void;
}

const TypographyContainer = styled("span", {
  label: "TypographyContainer"
})<{ fontWeight: number; fontSize: number; lineHeight: string }>(
  ({ fontWeight, fontSize, lineHeight }) => {
    return {
      fontWeight: fontWeight,
      fontSize: fontSize,
      lineHeight: lineHeight,
      fontFamily: "ONE-Mobile-POP"
    };
  }
);

const Typography = (props: Props) => {
  const {
    component = "span",
    children,
    fontWeight = 400,
    fontSize = 16,
    lineHeight = "inherit",
    className,
    onClick
  } = props;

  return (
    <TypographyContainer
      onClick={onClick}
      as={component}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
      className={className}
    >
      {children}
    </TypographyContainer>
  );
};

export default Typography;

import styled from "@emotion/styled";

interface Props {
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
  children: React.ReactNode;
  fontWeight?: number;
  fontSize?: number;
  className?: string;
  lineHeight?: string;
}

const TypographyContainer = styled("span", {
  label: "TypographyContainer"
})<{ fontWeight: number; fontSize: number; lineHeight: string }>(
  ({ fontWeight, fontSize, lineHeight }) => {
    return {
      fontWeight: fontWeight,
      fontSize: fontSize,
      lineHeight: lineHeight
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
    className
  } = props;

  return (
    <TypographyContainer
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

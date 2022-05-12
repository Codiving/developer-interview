import styled from "@emotion/styled";

interface Props {
  component?: "span" | "p";
  children: React.ReactNode;
  fontWeight?: number;
  fontSize?: number;
  className?: string;
}

const TypographyContainer = styled("span", {
  label: "TypographyContainer"
})<{ fontWeight: number; fontSize: number }>(({ fontWeight, fontSize }) => {
  return {
    fontWeight: fontWeight,
    fontSize: fontSize
  };
});

const Typography = (props: Props) => {
  const {
    component = "span",
    children,
    fontWeight = 400,
    fontSize = 16,
    className
  } = props;

  return (
    <TypographyContainer
      as={component}
      fontWeight={fontWeight}
      fontSize={fontSize}
      className={className}
    >
      {children}
    </TypographyContainer>
  );
};

export default Typography;

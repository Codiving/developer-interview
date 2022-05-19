import styled from "@emotion/styled";
import { hexToRgbWithA } from "../../utils";
import Button from "../Button";
import Typography from "../Typography";

interface SubmitButtonProps {
  onSubmit: () => void;
}

const SubmitButtonContainer = styled("section", {
  label: "SubmitButtonContainer"
})(() => {
  return {
    textAlign: "center",
    marginTop: 50
  };
});

const SButton = styled(Button, {
  label: "SButton"
})(() => {
  return {
    width: 200,
    height: 50,
    "&:hover": {
      backgroundColor: hexToRgbWithA("#2196f3", 0.7)
    }
  };
});

const SubmitButton = (props: SubmitButtonProps) => {
  const { onSubmit } = props;

  return (
    <SubmitButtonContainer>
      <SButton onClick={onSubmit}>
        <Typography fontSize={20}>Submit</Typography>
      </SButton>
    </SubmitButtonContainer>
  );
};

export default SubmitButton;

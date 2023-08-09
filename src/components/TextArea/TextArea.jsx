import { useEffect, useRef, useState } from "react";
import { ClearButton } from "../ClearButton/ClearButton";
import {
  ClearButtonWrapper,
  Container,
  ErrorText,
  InputStyled,
  LabelStyled,
  Wrapper,
} from "./TextArea.styled";
import { INPUT_STATES } from "../../constants/InputStates";
import { validate } from "../../utils/validators";

export const TextArea = ({
  labelText = "",
  disabled,
  validateRegex,
  name = "",
  value = "",
  getValueFn,
  ...restProps
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [clearBtnState, setClearBtnState] = useState(INPUT_STATES.default);

  const inputRef = useRef();

  const isDisabled = Boolean(disabled);
  const isError = validateRegex ? !validate(inputValue, validateRegex) : false;

  useEffect(() => {
    const getInputState = (value) => {
      const isValue = Boolean(value);

      if (typeof getValueFn === "function") {
        getValueFn(inputValue);
      }

      if (isError) {
        inputRef.current.setCustomValidity("Invalid input");
        return INPUT_STATES.error;
      }

      inputRef.current.setCustomValidity("");

      if (isDisabled) {
        return INPUT_STATES.disabled;
      }

      if (isValue) {
        return INPUT_STATES.filled;
      }

      return INPUT_STATES.default;
    };

    setClearBtnState(getInputState(inputValue));
  }, [inputValue, isError, isDisabled, getValueFn]);

  return (
    <Container>
      <Wrapper>
        <LabelStyled htmlFor={name}>{labelText}</LabelStyled>
        <InputStyled
          ref={inputRef}
          {...restProps}
          type="text"
          name={name}
          id={name}
          value={inputValue}
          placeholder="Input"
          minLength="5"
          onChange={(event) => {
            const { value } = event.target;
            setInputValue(value);
          }}
        />
        <ClearButtonWrapper>
          <ClearButton
            inputState={clearBtnState}
            onClick={() => {
              setInputValue("");
            }}
          />
        </ClearButtonWrapper>
      </Wrapper>
      {<ErrorText>{isError && "Invalid input"}</ErrorText>}
    </Container>
  );
};

import { useEffect, useRef, useState } from "react";
import { useClickAway, useKeyPressEvent } from "react-use";
import {
  ButtonWrapper,
  Container,
  InputStyled,
  LabelStyled,
  Wrapper,
} from "./SelectDateTime.styled";
import { IconButton } from "../IconButton/IconButton";

import icons from "../../assets/images/icons.svg";

export const SelectDateTime = ({
  name = "select",
  labelText = "",
  valuesArray = [""],
  value = "",
  getValueFn,
  ...restProps
}) => {
  const [inputValue, setInputValue] = useState(value || valuesArray[0]);
  const buttonRef = useRef();
  const containerRef = useRef();
  const selectRef = useRef();
  const [isSelectListVisible, setIsSelectListVisible] = useState(false);

  const icon = `${icons}#icon-chevron-down`;

  useEffect(() => {
    if (typeof getValueFn === "function") {
      getValueFn(inputValue);
    }
  }, [getValueFn, inputValue]);

  const buttonRotate = () => {
    buttonRef.current.classList.toggle("rotate180deg");
  };

  useKeyPressEvent("Escape", () => {
    setIsSelectListVisible(false);
    buttonRef.current.classList.remove("rotate180deg");
  });

  useClickAway(containerRef, () => {
    setIsSelectListVisible(false);
    buttonRef.current.classList.remove("rotate180deg");
  });

  return (
    <Container ref={containerRef}>
      <Wrapper>
        <LabelStyled htmlFor={name}>{labelText}</LabelStyled>
        <InputStyled
          ref={selectRef}
          {...restProps}
          name={name}
          id={name}
          value={inputValue}
          placeholder="Select"
          onChange={(event) => {
            const { value } = event.target;
            setInputValue(value);
          }}
          onClick={() => {
            buttonRotate();
            setIsSelectListVisible(!isSelectListVisible);
          }}
        />
        <ButtonWrapper ref={buttonRef}>
          <IconButton
            iconSvg={icon}
            onClick={() => {
              selectRef.current.showPicker();
              buttonRotate();
              setIsSelectListVisible(!isSelectListVisible);
            }}
          />
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};

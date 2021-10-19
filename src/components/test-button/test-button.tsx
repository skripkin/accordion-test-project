import React from "react";
import * as Styled from "./styled";

interface IProp {
  text: string;
  onClick: () => void;
}

const TestButton = ({ text, onClick }:IProp) => {
  return (
    <Styled.Button onClick={onClick}>{text}</Styled.Button>
  )
}

export default TestButton;
import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  width: 100%;
  height: 100vh;
  background-color: gainsboro;
`;

export const AccordionContainer = styled.div`
  margin: 50px auto;
  max-width: 375px;
`;

export const AccordionItem = styled.div`
  display: flex;
  align-items: center;

  & > .text {
    margin-left: 8px;
    color: #a8c6c8;
  }
`;
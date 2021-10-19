import styled, { css } from "styled-components";

export const Container = styled.div<{rotate: boolean}>`
  width: 24px;
  height: 24px;

  ${({rotate}) => rotate && css`
    transform: rotate(-180deg);
  `}
`;
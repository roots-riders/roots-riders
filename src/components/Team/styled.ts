import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;

`;

export const Options = styled.div`
  ${({theme, }) => css`
    display: flex;
    gap: 1rem;
    button {
      width: fit-content;
      min-width: 4rem;
      cursor: pointer;
      background-color: ${theme.colors.none};
      border: 0;
      outline: 0;
    }
  `}
`

export const CardWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`


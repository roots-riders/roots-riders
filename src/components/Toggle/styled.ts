import styled, { css } from 'styled-components'
import media from "styled-media-query";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-width: 120rem;
  padding: 3rem;
  margin: 0 auto;
  position: relative;
  ${media.lessThan("medium")`
    justify-content: center;
    padding: 2rem;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    border: 0;
    background-color: ${theme.colors.none};
    cursor: pointer;
    justify-content: space-between;
    position: absolute;
    outline: none;
    top: 3rem;
    right: 2rem;
  `}
`

export const Sun = styled.svg`
  height: auto;
  width: 2.5rem;
  transition: all 0.7s linear;
`

export const Moon = styled.svg`
  height: auto;
  width: 2.5rem;
  transition: all 0.7s linear;
`
import styled, { css } from 'styled-components'

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
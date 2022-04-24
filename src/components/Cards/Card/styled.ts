import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    width: fit-content;
    padding: 2rem;
    background-color: ${theme.colors.white};
    border-radius: ${theme.radius};
  `}
`;

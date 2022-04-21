import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      &::before,
      &::after {
        box-sizing: inherit;
      }
    }
    html {
      font-size: 62.5%;
    }
    html,
    body,
    #__next {
      height: 100%;
    }
    a {
      font-family: ${theme.font.family.open};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.light};
      color: ${theme.colors.text_primary};
    }
    ::-moz-selection {
      color: ${theme.colors.text_primary};
      background-color: ${theme.colors.primary};
    }
    ::selection {
      color: ${theme.colors.text_primary};
      background-color: ${theme.colors.primary};
    }
    body {
      background-color: ${theme.colors.background_primary};
      color: ${theme.colors.text_primary};
      font-style: normal;
      font-display: swap;
      overflow-x: hidden;
      font-family: ${theme.font.family.open};
    }
  `}
`;
export default GlobalStyles;
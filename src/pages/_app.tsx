/* eslint-disable @next/next/no-page-custom-font */
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "usehooks-ts";
import { Wrapper } from "../components/Toggle/styled";
import Toggle from "../components/Toggle";
import GlobalStyles from "../styles/global";
import { darkTheme, lightTheme } from "../styles/theme";
const MyApp = ({ Component, pageProps }: AppProps) => {
  const { isDarkMode, toggle } = useDarkMode();
  const themeMode = isDarkMode ? darkTheme : lightTheme;
  return (
    <>
      <Head>
        <title>
          Roots Riders
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Harpoon" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Wrapper>
          <Toggle theme={isDarkMode ? "dark" : "light"} toggleTheme={toggle} />
          <Component {...pageProps} />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
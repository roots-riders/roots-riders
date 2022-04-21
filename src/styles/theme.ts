const font = {
  family: {
    roboto:
      "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    open: "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
    poppins:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },
  light: 400,
  normal: 500,
  bold: 600,
  sizes: {
    small: "1.2rem",
    light: "1.4rem",
    medium: "1.6rem",
    large: "1.8rem",
    big: "2.4rem",
    xbig: "3.2rem",
    huge: "4.8rem",
    xhuge: "6rem",
  },
  gradient: "linear-gradient(to right, #405de6, #9580ff, #9580ff, #405de6)",
};

export const lightTheme = {
  font: { ...font },
  colors: {
    none: "transparent",
    background_primary: "#151417",
    text_primary: "#F8EFE4",
    primary: "#9580ff",
    secondary: "#405de6",
  },
};

export const darkTheme = {
  font: { ...font },
  colors: {
    none: "transparent",
    background_primary: "#F8EFE4",
    text_primary: "#151417",
    primary: "#9580ff",
    secondary: "#405de6",
  },
};
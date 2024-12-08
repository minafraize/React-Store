const PRIMARY = {
  light: "#616161",
  main: "#141414",
  dark: "#000000",
};

const GREY = {
  0: "#FFFFFF",
  600: "#637381",
  800: "#212B36",
  500_1: "#e6e6e6",
};

const COMMON = {
  common: { black: "#000", white: "#fff" },
  primary: { ...PRIMARY, contrastText: "#fff" },
  grey: GREY,
};

const palette = {
  // LIGHT MODE
  light: {
    ...COMMON,
    mode: "light",
    text: {
      primary: GREY[800],
      secondary: GREY[600],
    },
    background: {
      paper: "#fff",
      default: "#fff",
    },
  },
};

export default palette;

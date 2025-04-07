import { COLORS } from "./colors";

const THEME_CONFIG = {
  token: {
    colorPrimary: COLORS.primary,
    borderRadius: 2,
    fontFamily: "Inter",
  },
  components: {
    Button: {
      controlHeightLG: 48,
      controlHeight: 40,
      contentFontSize: 16,
      colorPrimary: COLORS.primary,
    },
    Input: {
      controlHeight: 44,
    },
    Select: {
      controlHeight: 44,
    },
  },
};

export { THEME_CONFIG };

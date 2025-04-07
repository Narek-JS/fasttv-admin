import { useMemo } from "react";
import type { ThemeConfig } from "antd";

import { COLORS } from "~/constants/colors";

const useCustomTheme = () => {
  const customTheme: ThemeConfig = useMemo(
    () => ({
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
    }),
    []
  );

  return customTheme;
};

export default useCustomTheme;

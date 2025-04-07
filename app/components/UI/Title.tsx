import type { TitleProps } from "antd/es/typography/Title";
import type { CSSProperties, FC, ReactNode } from "react";
import { COLORS } from "~/constants/colors";
import { Typography } from "antd";

interface Props extends Omit<TitleProps, "size" | "color" | "$$typeof"> {
  align?: "center" | "left" | "right";
  color?: keyof typeof COLORS;
  style?: CSSProperties;
  children?: ReactNode;
  fontWeight?: number;
  size?: number;
}

const Title: FC<Props> = ({
  color = "text_primary",
  fontWeight = 400,
  size = 24,
  children,
  style,
}) => (
  <Typography.Title
    style={{
      color: COLORS[color],
      fontSize: size,
      fontWeight,
      margin: 0,
      ...style,
    }}
  >
    {children}
  </Typography.Title>
);

export default Title;

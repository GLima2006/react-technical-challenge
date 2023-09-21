import { classNameBuilder } from "@/helpers/class-name-builder";
import React from "react";

// export type TextVariant =
export type TextColor =
  | "white"
  | "black"
  | "current-color"
  | "default-gray"
  | "gray-500"
  | "darkest-gray"
  | "default-indigo";
export type TextSize = "xs" | "sm" | "md" | "lg" | "xl";
export type TextAlign = "left" | "center" | "justify" | "right";

export interface TextProps {
  // variant?: TextVariant;
  color?: TextColor;
  size?: TextSize;
  align?: TextAlign;
  truncate?: boolean;
  bold?: boolean;
  as?: "span" | "p";
  className?: string;
  children: string;
  onClick?: () => void;
}

const Text: React.FC<TextProps> = ({
  className,
  // variant = "",
  color = "current-color",
  size = "sm",
  align = "left",
  truncate,
  bold,
  as = "span",
  children,
  onClick,
}) => {
  return React.createElement(
    as,
    {
      className: classNameBuilder(
        // variantMap[variant],
        colorMap[color],
        sizeMap[size],
        alignMap[align],
        truncate ? "truncate" : "",
        bold ? "font-bold" : "font-normal",
        className
      ),
      onClick,
    },
    children
  );
};

export default Text;

// const variantMap: Record<TextVariant, string> = {};

export const colorMap: Record<TextColor, string> = {
  white: "text-white",
  black: "text-black",
  "current-color": "text-current",
  "gray-500": "text-gray-500",
  "darkest-gray": "text-gray-darkest",
  "default-gray": "text-gray-default",
  "default-indigo": "text-indigo-default",
};
export const sizeMap: Record<TextSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const alignMap: Record<TextAlign, string> = {
  left: "text-left",
  center: "text-center",
  justify: "text-justify",
  right: "text-right",
};

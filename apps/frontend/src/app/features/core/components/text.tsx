import { classNameBuilder } from "@/helpers/class-name-builder";
import React from "react";

export type TextVariant =
  | "product-description"
  | "footer-title-1"
  | "footer-title-2"
  | "footer-link"
  | "navigation";
export type TextAlign = "left" | "center" | "justify" | "right";

export interface TextProps {
  variant?: TextVariant;
  align?: TextAlign;
  truncate?: boolean;
  className?: string;
  children: string;
  onClick?: () => void;
}

const Text: React.FC<TextProps> = ({
  className,
  variant = "product-description",
  align = "left",
  truncate,
  children,
  onClick,
}) => {
  const elementType =
    variant[0] === "h" && Number(variant[1]) <= 6 ? variant : "p";
  return React.createElement(
    elementType,
    {
      className: classNameBuilder(
        variantMap[variant],
        alignMap[align],
        truncate ? "truncate" : "",
        className
      ),
      onClick,
    },
    children
  );
};

export default Text;

const variantMap: Record<TextVariant, string> = {
  "product-description": "text-[#8B96A5] text-base font-normal",
  "footer-title-1": "text-[#585858] text-sm font-bold",
  "footer-title-2": "text-[#585858] text-sm font-normal",
  "footer-link": "text-[#585858] text-xs font-normal",
  "navigation": "text-[#585858] text-sm font-bold",
};

const alignMap: Record<TextAlign, string> = {
  left: "text-left",
  center: "text-center",
  justify: "text-justify",
  right: "text-right",
};

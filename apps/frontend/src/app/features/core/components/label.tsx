import { classNameBuilder } from "@/helpers/class-name-builder";
import React from "react";
import { TextColor, TextSize, colorMap, sizeMap } from "./text";

export type LabelVariant = "h5" | "h6" | "p1" | "p2" | "p3";

export interface LabelProps {
  htmlFor: string;
  color?: TextColor;
  size?: TextSize;
  className?: string;
  children: string;
}

const Label: React.FC<LabelProps> = ({
  className,
  color = "current-color",
  size = "sm",
  ...otherProps
}) => {
  return (
    <label
      className={classNameBuilder("select-none", colorMap[color], sizeMap[size], className)}
      {...otherProps}
    />
  );
};

export default Label;

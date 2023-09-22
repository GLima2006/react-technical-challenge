import { classNameBuilder } from "@/helpers/class-name-builder";
import { uniqueId } from "lodash";
import React from "react";
import BaseCheckbox, { BaseCheckboxProps } from "./base-checkbox";
import Label, { LabelVariant } from "./label";
import Row from "./row";
import Show from "./show";
import { TextColor, TextSize } from "./text";

export type LabelConfig = {
  text: string;
  color?: TextColor;
  size?: TextSize;
};
export interface CheckboxProps extends BaseCheckboxProps {
  label?: string | LabelConfig;
}
const Checkbox: React.ForwardRefRenderFunction<
  HTMLInputElement,
  CheckboxProps
> = ({ id = uniqueId("checkbox-"), className, label, ...otherProps }, ref) => {
  const labelConfig: LabelConfig | undefined =
    typeof label === "string" ? { text: label } : label;
  return (
    <Row className={classNameBuilder("items-center gap-x-2", className)}>
      <BaseCheckbox id={id} {...otherProps} ref={ref} />
      <Show when={!!labelConfig}>
        <Label
          htmlFor={id}
          color={labelConfig?.color}
          size={labelConfig?.size}
          className={otherProps.disabled ? "" : "cursor-pointer"}
        >
          {labelConfig?.text || ""}
        </Label>
      </Show>
    </Row>
  );
};

export default React.forwardRef(Checkbox);

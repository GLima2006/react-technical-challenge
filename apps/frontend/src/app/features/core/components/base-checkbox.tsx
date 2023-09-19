import CheckIcon from "@/assets/icons/checkbox-check.svg";
import { classNameBuilder } from "@/helpers/class-name-builder";
import React from "react";

export interface BaseCheckboxProps {
  id?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  dataTestId: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
const BaseCheckbox: React.ForwardRefRenderFunction<
  HTMLInputElement,
  BaseCheckboxProps
> = ({ checked, disabled, dataTestId, className, ...otherProps }, ref) => (
  <input
    {...otherProps}
    className={classNameBuilder(
      "w-5 h-5",
      disabled ? "cursor-not-allowed" : "cursor-pointer"
    )}
    data-testid={dataTestId}
    type="checkbox"
    checked={checked}
    disabled={disabled}
    ref={ref}
  />
);

export default React.forwardRef(BaseCheckbox);

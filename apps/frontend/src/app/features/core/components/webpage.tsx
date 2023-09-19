import React from "react";
import Column from "./column";
import { classNameBuilder } from "@/helpers/class-name-builder";

export interface WebpageProps {
  children?: React.ReactNode;
  className?: string;
}
const Webpage: React.FC<WebpageProps> = ({ className, children }) => {
  return (
    <Column
      className={classNameBuilder("bg-[#EEEEEE] min-w-full min-h-screen", className)}
    >
      {children}
    </Column>
  );
};

export default Webpage;

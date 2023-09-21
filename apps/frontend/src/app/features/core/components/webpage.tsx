import React from "react";
import Column from "./column";
import { classNameBuilder } from "@/helpers/class-name-builder";
import Header from "./header";
import Footer from "./footer";

export interface WebpageProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}
const Webpage: React.FC<WebpageProps> = ({
  header,
  footer,
  className,
  children,
}) => {
  return (
    <Column
      className={classNameBuilder(
        "bg-[#EEEEEE] min-w-full min-h-screen",
        className
      )}
    >
      {header ?? <Header />}
      <Column className="w-full h-full max-w-[1440px] mx-auto">{children}</Column>
      {footer ?? <Footer />}
    </Column>
  );
};

export default Webpage;

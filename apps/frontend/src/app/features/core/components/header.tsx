import React from "react";
import Row from "./row";
import Image from "next/image";
import SearchInput from "./search-input";
import { classNameBuilder } from "@/helpers/class-name-builder";

export interface HeaderProps {
  className?: string;
}
const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <Row
      className={classNameBuilder(
        "px-8 md:px-16 h-[84px] items-center justify-between gap-x-8",
        "bg-[#3A3C5A]",
        className
      )}
    >
      <Image
        height={32}
        width={124}
        src="/80lines-logo.png"
        alt="80lines"
      />
      <SearchInput
      className="max-w-[628px]"
        testId="search-bar-input"
        placeholder="O que você está procurando?"
      />
    </Row>
  );
};

export default Header;

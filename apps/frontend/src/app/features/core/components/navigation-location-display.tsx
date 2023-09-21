import React from "react";
import Row from "./row";
import Text from "./text";
import HouseIcon from "@assets/icons/house.svg";
import ChevronRightIcon from "@assets/icons/chevron-right.svg";
import { classNameBuilder } from "@/helpers/class-name-builder";

export interface NavigationLocationDisplayProps {
  className?: string;
}
const NavigationLocationDisplay: React.FC<NavigationLocationDisplayProps> = ({
  className,
}) => {
  return (
    <Row className={classNameBuilder("gap-x-2 items-center", className)}>
      <HouseIcon className="text-gray-default" />
      <ChevronRightIcon className="h-5 w-5 text-gray-default" />
      <Text color="default-gray" size="sm" bold>
        Todos os produtos
      </Text>
    </Row>
  );
};

export default NavigationLocationDisplay;

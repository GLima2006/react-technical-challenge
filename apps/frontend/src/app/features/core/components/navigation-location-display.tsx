import React from "react";
import Row from "./row";
import Text from "./text";
import HouseIcon from "@assets/icons/house.svg";
import ChevronRightIcon from "@assets/icons/chevron-right.svg";

export interface NavigationLocationDisplayProps {}
const NavigationLocationDisplay: React.FC<
  NavigationLocationDisplayProps
> = ({}) => {
  return (
    <Row className="gap-x-2 items-center">
      <HouseIcon className="text-gray-default" />
      <ChevronRightIcon className="h-5 w-5 text-gray-default" />
      <Text color="default-gray" size="sm" bold>Todos os produtos</Text>
    </Row>
  );
};

export default NavigationLocationDisplay;

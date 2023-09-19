import React from "react";
import Column from "./column";
import DisclosureDropdown from "./disclosure-dropdown";
import Text from "./text";
import Row from "./row";
import Checkbox from "./checkbox";
import { classNameBuilder } from "@/helpers/class-name-builder";

export interface FiltersSectionProps {
  className?: string;
}
const FiltersSection: React.FC<FiltersSectionProps> = ({ className }) => {
  return (
    <Column
      className={classNameBuilder(
        "bg-white rounded-lg drop-shadow-card overflow-hidden px-4 py-5 gap-y-4 w-full",
        className
      )}
    >
      <Row className="justify-between items-center gap-x-2">
        <Text color="default-gray" size="md" bold>
          Filtrar por
        </Text>
        <Text color="default-indigo" size="xs">
          Limpar filtro
        </Text>
      </Row>
      <DisclosureDropdown title="Categoria">
        <Column className="gap-y-3">
          <Checkbox
            dataTestId="checkbox"
            label={{
              text: "Roupas de inverno",
              color: "default-gray",
              size: "xs",
            }}
          />
        </Column>
      </DisclosureDropdown>
    </Column>
  );
};

export default FiltersSection;

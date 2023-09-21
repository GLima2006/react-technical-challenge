import Label from "@/features/core/components/label";
import Row from "@/features/core/components/row";
import { classNameBuilder } from "@/helpers/class-name-builder";
import ChevronUpdownIcon from "@assets/icons/chevron-updown.svg";
import { Listbox, Transition } from "@headlessui/react";
import { uniqueId } from "lodash";
import React from "react";
import Text from "./text";

const orders = [{ label: "Relevância" }, { label: "Preço" }];

export interface DisplayOrderFilterProps {
  id?: string;
  label?: string;
  value?: any;
  onChange?: (value: any) => void;
  className?: string;
}
export const DisplayOrderFilter: React.FC<DisplayOrderFilterProps> = ({
  id = uniqueId("order-filter-"),
  label = "",
  value,
  onChange,
  className,
}) => {
  const [selected, setSelected] = React.useState(orders[0]);
  return (
    <Row className={classNameBuilder("items-center gap-x-4", className)}>
      <Label color="default-gray" size="sm" htmlFor={id}>
        {label}
      </Label>
      <Listbox
        value={value}
        onChange={onChange}
        as="div"
        className="relative h-10 min-w-[180px]"
      >
        <Listbox.Button
          className="flex flex-row h-full w-full bg-white rounded-full justify-between items-center pl-5 pr-4 gap-x-2"
          id={id}
        >
          <Text color="default-gray" size="xs" bold truncate>
            {selected.label}
          </Text>
          <ChevronUpdownIcon className="text-gray-default" />
        </Listbox.Button>
        <Transition
          as={React.Fragment}
          enter="transition duration-250"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-250"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            as="div"
            className="absolute bg-white w-full rounded-lg mt-1 py-2 px-5"
          >
            {orders.map((order, index) => (
              <Listbox.Option
                className="cursor-pointer list-none"
                key={index}
                value={order}
              >
                {({ selected }) => (
                  <Text color="default-gray" size="xs" bold={selected}>
                    {order.label}
                  </Text>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </Row>
  );
};

export default DisplayOrderFilter;

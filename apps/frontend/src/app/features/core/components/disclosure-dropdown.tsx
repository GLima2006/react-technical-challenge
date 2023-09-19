import ChevronDownIcon from "@/assets/icons/chevron-down.svg";
import { classNameBuilder } from "@/helpers/class-name-builder";
import { Disclosure, Transition } from "@headlessui/react";
import React from "react";
import Text from "./text";

export interface DropdownProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}
const DisclosureDropdown: React.FC<DropdownProps> = ({
  title = "",
  children = "",
  className,
}) => {
  return (
    <Disclosure
      as="div"
      className={classNameBuilder("flex flex-col overflow-hidden", className)}
    >
      {({ open }) => (
        <>
          <Disclosure.Button
            className={classNameBuilder(
              "bg-white z-10 flex flex-row justify-between items-center border-b-2 pb-2 group/disclosure",
              "transition ease-out duration-250",
              open ? "border-gray-200" : "border-transparent"
            )}
          >
            <Text className="leading-5 group-hover/disclosure:underline group-active/disclosure:no-underline" color="default-gray" size="xs" bold>
              {title}
            </Text>
            <ChevronDownIcon
              className={classNameBuilder(
                "text-black transition ease-out duration-250",
                open ? "rotate-180" : ""
              )}
            />
          </Disclosure.Button>
          <Transition
            enter="transition ease-out duration-250 transform"
            enterFrom="-translate-y-full"
            enterTo="translate-x-0"
            leave="transition ease-out duration-250 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-y-full"
          >
            <Disclosure.Panel className="pt-4">
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default DisclosureDropdown;

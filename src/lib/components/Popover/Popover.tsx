import { Popover, Transition } from "@headlessui/react"
import { Fragment, HTMLAttributes } from "react"

import SidebarButton from "../../../components/SidebarButton"

export type Props = HTMLAttributes<HTMLDivElement> & {
  button: React.ReactNode
  children: React.ReactNode
}

export function CustomPopover({ button, children, ...htmlProps }: Props) {
  return (
    <Popover className="relative" {...htmlProps}>
      {button}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel className="absolute bottom-0 left-14 flex w-64 flex-col gap-4 rounded bg-white p-4 text-hermes-grey shadow">
          {children}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

CustomPopover.Button = (props: any) => {
  return <SidebarButton {...props} ButtonComponent={Popover.Button} />
}

export default CustomPopover

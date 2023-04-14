import { Menu, Transition } from "@headlessui/react"
import { Fragment, HTMLAttributes, ReactNode } from "react"

export type MenuItem = {
  notification?: boolean
  content: ReactNode
}

export type Props = HTMLAttributes<HTMLDivElement> & {
  menuItems: MenuItem[]
  className?: string
}

export function SidebarMenu({
  menuItems = [],
  className,
  ...htmlProps
}: Props) {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items
        {...htmlProps}
        className={`absolute bottom-0 left-14 flex w-64 flex-col gap-4 rounded bg-white p-4 text-hermes-grey shadow ${className}`}
      >
        {menuItems.map((menuItem, i) => (
          <Menu.Item key={i}>
            {/* TODO: notification */}
            <div className={`bg-red-300`}>{menuItem.content}</div>
          </Menu.Item>
        ))}
      </Menu.Items>
    </Transition>
  )
}

export default SidebarMenu

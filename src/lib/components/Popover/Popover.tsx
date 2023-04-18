import { Popover, Transition } from "@headlessui/react"
import { Fragment, HTMLAttributes, ReactNode, useState } from "react"

import { usePopper } from "react-popper"
import SidebarButton from "../../../components/SidebarButton"
import { Placement } from "./placementTypes"

export type Props = HTMLAttributes<HTMLDivElement> & {
  button: React.ReactNode
  children: React.ReactNode
  popoverPlacement?: Placement
}

function MenuGroup({
  groupLabel,
  children,
}: {
  groupLabel?: string
  children: ReactNode
}) {
  return (
    <div
      key={groupLabel}
      className="-mx-4 flex select-none flex-col gap-0.5 border-b-2 border-b-hermes-grey-10 pb-1 pt-2 first:-mt-2 last:-mb-3 last:border-b-0"
    >
      {groupLabel && (
        <div className="mb-1 px-4 text-xs font-medium text-hermes-grey-50">
          {groupLabel}
        </div>
      )}
      {children}
    </div>
  )
}

type ItemProps = {
  label: string
  action: () => void
  children?: React.ReactNode
}

function MenuItem({ label, action, children, ...rest }: ItemProps) {
  return (
    <button
      key={label}
      onClick={action}
      className="relative flex h-8 items-center justify-between border-none bg-none px-4 text-start text-sm hover:bg-hermes-blue-light"
      {...rest}
    >
      <span>{label}</span>
      {children}
    </button>
  )
}

export function CustomPopover({
  button,
  children,
  popoverPlacement = "right-end",
  ...htmlProps
}: Props) {
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: popoverPlacement,
  })

  return (
    <Popover className="relative" {...htmlProps}>
      <div ref={setReferenceElement}>{button}</div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel
          ref={setPopperElement}
          className="flex w-64 flex-col rounded bg-white p-4 text-hermes-grey shadow"
          style={styles.popper}
          {...attributes.popper}
        >
          {children}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

CustomPopover.MenuGroup = MenuGroup
CustomPopover.MenuItem = MenuItem
CustomPopover.Button = (props: any) => {
  return <SidebarButton {...props} ButtonComponent={Popover.Button} />
}

export default CustomPopover

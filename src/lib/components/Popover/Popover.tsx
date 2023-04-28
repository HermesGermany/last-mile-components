import { Popover, Transition } from "@headlessui/react"
import { Fragment, HTMLAttributes, ReactNode, useState } from "react"

import { usePopper } from "react-popper"
import SidebarButton, {
  SidebarButtonProps,
} from "../../../components/SidebarButton"
import { Placement } from "./placementTypes"

export type Props = HTMLAttributes<HTMLDivElement> & {
  button: React.ReactNode
  popoverTitle?: string
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
      className="-tw-mx-6 tw-flex tw-select-none tw-flex-col tw-gap-0.5 tw-border-b tw-border-solid tw-border-b-hermes-grey-10 tw-pb-1 tw-pt-2 first:-tw-mt-2 last:-tw-mb-3 last:tw-border-b-0"
    >
      {groupLabel && (
        <div className="tw-mb-1 tw-px-6 tw-text-sm tw-font-medium tw-text-hermes-grey-50">
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
      className="tw-relative tw-flex tw-h-9 tw-cursor-pointer tw-items-center tw-justify-between tw-border-none tw-bg-transparent tw-px-6 tw-text-start tw-font-sans tw-text-base tw-text-hermes-grey hover:tw-bg-hermes-blue-light"
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
  popoverTitle,
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
    <Popover {...htmlProps}>
      <div ref={setReferenceElement}>{button}</div>
      <Transition
        as={Fragment}
        enter="tw-transition tw-ease-out tw-duration-100"
        enterFrom="tw-transform tw-opacity-0 tw-scale-95"
        enterTo="tw-transform tw-opacity-100 tw-scale-100"
        leave="tw-transition tw-ease-in tw-duration-75"
        leaveFrom="tw-transform tw-opacity-100 tw-scale-100"
        leaveTo="tw-transform tw-opacity-0 tw-scale-95"
      >
        <Popover.Panel
          ref={setPopperElement}
          className="tw-z-30 tw-box-border tw-flex tw-w-max tw-min-w-[14rem] tw-max-w-sm tw-flex-col tw-rounded tw-bg-white tw-p-6 tw-text-hermes-grey tw-shadow tw-drop-shadow"
          style={styles.popper}
          {...attributes.popper}
        >
          {popoverTitle && (
            <span className="tw-mb-4 tw-text-start tw-text-sm tw-font-medium tw-text-hermes-grey-50">
              {popoverTitle}
            </span>
          )}
          {children}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

CustomPopover.MenuGroup = MenuGroup
CustomPopover.MenuItem = MenuItem
CustomPopover.Button = (props: SidebarButtonProps) => {
  return <SidebarButton {...props} ButtonComponent={Popover.Button} />
}

export default CustomPopover

import { Popover, Transition } from "@headlessui/react"
import { Fragment, HTMLAttributes, ReactNode, useState } from "react"
import { usePopper } from "react-popper"
import SidebarButton, {
  SidebarButtonProps,
} from "../../../components/SidebarButton"
import { NotificationDot } from "../NotificationDot"
import { Placement } from "./placementTypes"

export type GroupProps = {
  /** Label for the Menu Group */
  groupLabel?: string
  /** Ideally, MenuItem(s) should be used */
  children: ReactNode
}

function MenuGroup({ groupLabel, children }: GroupProps) {
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
  onClick: React.MouseEventHandler<HTMLButtonElement>
  /** Additional content if just a label is not enough */
  children?: ReactNode
  /** Shows NotificationDot with position innerLeft if true */
  showNotification?: boolean
}

function MenuItem({
  label,
  onClick,
  children,
  showNotification = false,
  ...rest
}: ItemProps) {
  return (
    <button
      key={label}
      onClick={onClick}
      className="tw-relative tw-flex tw-h-9 tw-cursor-pointer tw-items-center tw-justify-between tw-border-none tw-bg-transparent tw-px-6 tw-text-start tw-font-sans tw-text-base tw-text-hermes-grey hover:tw-bg-hermes-grey-10"
      {...rest}
    >
      <span className="tw-truncate">{label}</span>
      {showNotification && <NotificationDot position="innerLeft" />}
      {children}
    </button>
  )
}

export type Props = HTMLAttributes<HTMLDivElement> & {
  /**  */
  buttonProps: SidebarButtonProps
  /** Title shown in the Popover */
  popoverTitle?: string
  /** The content to render. You can use any React node, but the preferred way is to use MenuGroup and MenuItem */
  children: React.ReactNode
  popoverPlacement?: Placement
}

export function CustomPopover({
  buttonProps,
  children,
  popoverPlacement = "right-end",
  popoverTitle,
  ...htmlProps
}: Props) {
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: popoverPlacement,
  })

  return (
    <Popover {...htmlProps}>
      <div>
        <SidebarButton
          ButtonComponent={Popover.Button}
          ref={setReferenceElement}
          {...buttonProps}
        />
      </div>
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
          className="tw-z-[500] tw-box-border tw-flex tw-w-max tw-min-w-[14rem] tw-max-w-sm tw-flex-col tw-rounded tw-bg-white tw-p-6 tw-text-hermes-grey tw-shadow tw-drop-shadow"
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

export default CustomPopover

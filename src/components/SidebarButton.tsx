import clsx from "clsx"
import {
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  FunctionComponent,
  MouseEventHandler,
  ReactNode,
} from "react"
import { NotificationDot } from "../lib"

const JsxButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props} />
)

type DataAttributeKey = `data-${string}`
export type SidebarButtonProps = {
  icon?: ReactNode
  active?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  /** Button's label */
  label?: string
  /** You can customize the button component by providing the reference to a React component (not the JSX node) */
  ButtonComponent?: FunctionComponent<any>
  /** Shows NotificationDot with position topRight if true */
  showNotification?: boolean
  [dataAttribute: DataAttributeKey]: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export default forwardRef(function SidebarButton(
  {
    icon,
    active = false,
    className = "",
    label,
    ButtonComponent = JsxButton,
    showNotification = false,
    ...props
  }: SidebarButtonProps,
  buttonRef: ForwardedRef<HTMLButtonElement>
) {
  return (
    <ButtonComponent
      className={clsx(
        `tw-relative tw-box-border tw-flex tw-w-full tw-cursor-pointer tw-flex-col tw-items-center tw-rounded tw-border-none`,
        `tw-px-0 tw-py-1 tw-text-[10px] tw-font-bold tw-text-white tw-outline-none hover:tw-bg-white/20 focus:tw-bg-white/20`,
        icon ? "tw-aspect-square" : "tw-py-3",
        icon && label ? "tw-justify-between" : "tw-justify-center",
        active ? "tw-bg-white/20" : "tw-bg-transparent",
        className
      )}
      {...props}
      ref={buttonRef}
    >
      {icon && (
        <div className="tw-box-border tw-flex tw-aspect-square tw-h-fit tw-w-3/5 tw-items-center tw-justify-center">
          {icon}
        </div>
      )}
      {label && (
        <span className="tw-w-full tw-truncate tw-text-white">{label}</span>
      )}
      {showNotification && <NotificationDot position="topRight" />}
    </ButtonComponent>
  )
})

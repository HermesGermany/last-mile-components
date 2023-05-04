import clsx from "clsx"

const JsxButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props} />
)

export type SidebarButtonProps = {
  icon?: React.ReactNode
  active?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
  label?: string
  ButtonComponent?: React.FunctionComponent<any>
}

const SidebarButton = ({
  icon,
  active = false,
  onClick,
  className = "",
  label,
  ButtonComponent = JsxButton,
}: SidebarButtonProps) => {
  return (
    <ButtonComponent
      className={clsx(
        `tw-box-border tw-flex tw-w-full tw-cursor-pointer tw-flex-col tw-items-center tw-rounded tw-border-none`,
        `tw-px-0 tw-py-1 tw-text-[10px] tw-font-bold tw-text-white tw-outline-none hover:tw-bg-white hover:tw-bg-opacity-10`,
        icon ? "tw-aspect-square" : "tw-py-3",
        icon && label ? "tw-justify-between" : "tw-justify-center",
        active ? "tw-bg-white/10" : "tw-bg-transparent",
        className
      )}
      onClick={onClick}
    >
      {icon && (
        <div className="tw-box-border tw-flex tw-aspect-square tw-h-fit tw-w-3/5 tw-items-center tw-justify-center">
          {icon}
        </div>
      )}
      {label && (
        <span className="tw-w-full tw-truncate tw-text-white">{label}</span>
      )}
    </ButtonComponent>
  )
}

export default SidebarButton

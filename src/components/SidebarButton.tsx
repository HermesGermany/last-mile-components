const JsxButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props} />
)

export type SidebarButtonProps = {
  icon?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
  label?: string
  ButtonComponent?: React.FunctionComponent<any>
}

const SidebarButton = ({
  icon,
  onClick,
  className = "",
  label,
  ButtonComponent = JsxButton,
}: SidebarButtonProps) => {
  return (
    <ButtonComponent
      className={`tw-box-border tw-flex tw-w-full tw-cursor-pointer tw-flex-col tw-items-center tw-rounded tw-border-none tw-bg-transparent tw-px-0 tw-py-1 tw-text-[10px] tw-font-bold tw-text-white tw-outline-none hover:tw-bg-white hover:tw-bg-opacity-10 ${
        icon ? "tw-aspect-square" : "tw-py-3"
      } ${
        icon && label ? "tw-justify-between" : "tw-justify-center"
      } ${className}`}
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

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
      className={`tw-box-border tw-flex tw-w-full tw-cursor-pointer tw-flex-col tw-items-center tw-justify-around tw-gap-1 tw-rounded tw-border-none tw-bg-transparent tw-py-2 tw-text-[10px] tw-font-bold tw-text-white tw-outline-none hover:tw-bg-white hover:tw-bg-opacity-10 ${
        icon ? "tw-aspect-square" : "tw-py-2"
      } ${className}`}
      onClick={onClick}
    >
      {icon && <div className="tw-box-border tw-w-3/4">{icon}</div>}
      {label && <span className="tw-text-white">{label}</span>}
    </ButtonComponent>
  )
}

export default SidebarButton

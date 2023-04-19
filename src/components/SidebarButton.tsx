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
      className={`tw-ml-0 tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-around tw-rounded tw-pb-1 tw-text-[10px] tw-font-bold tw-text-white tw-outline-none hover:tw-bg-white hover:tw-bg-opacity-10 ${
        icon ? "tw-aspect-square" : "tw-py-2"
      } ${className}`}
      onClick={onClick}
    >
      {icon && (
        <div className="tw-w-full tw-px-3.5 tw-pb-1 tw-pt-2">{icon}</div>
      )}
      {label && <span className="tw-text-white">{label}</span>}
    </ButtonComponent>
  )
}

export default SidebarButton

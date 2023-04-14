const JsxButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props} />
)

const SidebarButton = ({
  icon,
  onClick,
  className,
  label,
  ButtonComponent = JsxButton,
}: {
  icon?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
  label?: string
  ButtonComponent?: React.FunctionComponent<any>
}) => {
  console.log(icon, label)
  return (
    <ButtonComponent
      className={`ml-0 flex w-full flex-col items-center justify-around rounded pb-1 text-[10px] font-bold text-white hover:bg-white hover:bg-opacity-10 ${
        icon ? "aspect-square" : "py-2"
      } ${className}`}
      onClick={onClick}
    >
      {icon && <div className="pt-2">{icon}</div>}
      {label && <span className="text-hermes-grey-light">{label}</span>}
    </ButtonComponent>
  )
}

export default SidebarButton

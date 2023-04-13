import { HTMLAttributes, MouseEventHandler } from "react"

export type Props = HTMLAttributes<HTMLButtonElement> & {
  onClick: MouseEventHandler<HTMLButtonElement>
  icon?: React.ReactNode
  label?: string
}

export function SidebarEntry({
  className,
  onClick,
  icon,
  label,
  children,
  ...htmlProps
}: Props) {
  return (
    <>
      <button
        className={`flex w-full flex-col items-center justify-around rounded pb-1 text-[10px] font-bold text-white hover:bg-white hover:bg-opacity-10 ${
          icon ? "aspect-square" : "py-2"
        } ${className}`}
        onClick={onClick}
        {...htmlProps}
      >
        {icon && <div className="w-6/12 pt-2">{icon}</div>}
        {label && <span className="text-hermes-grey-light">{label}</span>}
      </button>
      {children}
    </>
  )
}

export default SidebarEntry

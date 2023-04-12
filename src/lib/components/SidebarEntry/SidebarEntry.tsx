import { HTMLAttributes, MouseEventHandler } from "react"
import MenuIcon from "../Sidebar/MenuIcon"

export type Props = HTMLAttributes<HTMLButtonElement> & {
  onClick: MouseEventHandler<HTMLButtonElement>
  icon?: React.ReactNode
  title?: string
}

export function SidebarEntry({
  className,
  onClick,
  icon = <MenuIcon />,
  title,
  children,
  ...htmlProps
}: Props) {
  return (
    <>
      <button
        className={`flex w-full flex-col items-center justify-center rounded p-2 text-[10px] font-bold text-white hover:bg-white hover:bg-opacity-10 ${className}`}
        onClick={onClick}
        {...htmlProps}
      >
        <div className="w-1/2">{icon}</div>
        <span>{title}</span>
      </button>
      {children}
    </>
  )
}

export default SidebarEntry

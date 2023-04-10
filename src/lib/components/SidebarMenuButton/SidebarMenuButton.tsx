import { Menu } from "@headlessui/react"
import { HTMLAttributes } from "react"

export type Props = HTMLAttributes<HTMLButtonElement> & {
  title?: string
  icon?: React.ReactNode
  className?: string
}

export function SidebarMenuButton({ title, icon, className, ...htmlProps }: Props) {
  return (
    <Menu.Button
      {...htmlProps}
      className={`m-1 flex w-14 flex-col items-center justify-center rounded p-2 text-[10px] font-bold text-white hover:bg-white hover:bg-opacity-10 ${className}`}
    >
      {icon}
      <span>{title}</span>
    </Menu.Button>
  )
}

export default SidebarMenuButton

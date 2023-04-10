import { Menu } from "@headlessui/react"
import { HTMLAttributes } from "react"
import { SidebarMenuButton } from "../SidebarMenuButton"
import AppsIcon from "./AppsIcon"

export type Props = HTMLAttributes<HTMLDivElement> & {
  // Placeholder
}

export function BurgerMenu({ ...htmlProps }: Props) {
  return (
    <Menu {...htmlProps}>
      <SidebarMenuButton title="Apps" icon={<AppsIcon />} />
    </Menu>
  )
}

export default BurgerMenu

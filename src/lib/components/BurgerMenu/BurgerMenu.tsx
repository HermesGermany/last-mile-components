import { Menu } from "@headlessui/react"
import { HTMLAttributes } from "react"
import { MenuItem, SidebarMenu } from "../SidebarMenu"
import { SidebarMenuButton } from "../SidebarMenuButton"
import AppsIcon from "./AppsIcon"

export type Props = HTMLAttributes<HTMLDivElement> & {
  menuItems: MenuItem[]
}

export function BurgerMenu({ menuItems = [], ...htmlProps }: Props) {
  return (
    <Menu {...htmlProps} className="relative w-fit" as="div">
      <SidebarMenuButton title="Apps" icon={<AppsIcon />} />
      <SidebarMenu menuItems={menuItems} />
    </Menu>
  )
}

export default BurgerMenu

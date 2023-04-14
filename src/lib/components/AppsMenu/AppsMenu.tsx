import { Menu } from "@headlessui/react"
import { HTMLAttributes } from "react"
import { SidebarMenuButton } from "../SidebarMenuButton"
import AppsIcon from "./AppsIcon"

export type Props = HTMLAttributes<HTMLDivElement> & {
  // Placeholder
}

export function AppsMenu({ ...htmlProps }: Props) {
  return (
    <Menu {...htmlProps} className="relative w-fit" as="div">
      <SidebarMenuButton title="Apps" icon={<AppsIcon />} />
      {/* <SidebarMenu menuItems={menuItems} /> */}
    </Menu>
  )
}

export default AppsMenu

import { HTMLAttributes } from "react"
import { SidebarButtonProps } from "../../../components/SidebarButton"
import { Popover } from "../Popover"
import MenuIcon from "./MenuIcon"
// import { MenuItem, SidebarMenu } from "../SidebarMenu"

export type Props = HTMLAttributes<HTMLDivElement> & {
  buttonProps?: SidebarButtonProps
}

export default function BurgerMenu({
  children,
  buttonProps,
  ...htmlProps
}: Props) {
  return (
    <Popover
      {...htmlProps}
      buttonProps={{ icon: <MenuIcon />, ...buttonProps }}
    >
      {children}
    </Popover>
  )
}

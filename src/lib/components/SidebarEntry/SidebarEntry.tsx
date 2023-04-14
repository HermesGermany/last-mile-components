import { HTMLAttributes, MouseEventHandler } from "react"

import SidebarButton from "../../../components/SidebarButton"

export type Props = HTMLAttributes<HTMLButtonElement> & {
  onClick: MouseEventHandler<HTMLButtonElement>
  icon?: React.ReactNode
  label?: string
}

export function SidebarEntry(props: Props) {
  return <SidebarButton {...props} />
}

export default SidebarEntry

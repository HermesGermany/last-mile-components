import { HTMLAttributes } from "react"

import SidebarButton, {
  SidebarButtonProps,
} from "../../../components/SidebarButton"

export type Props = HTMLAttributes<HTMLButtonElement> & SidebarButtonProps

export function SidebarEntry(props: Props) {
  return <SidebarButton {...props} />
}

export default SidebarEntry

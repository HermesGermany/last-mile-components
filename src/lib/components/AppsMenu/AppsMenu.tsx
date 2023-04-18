import { HTMLAttributes } from "react"
import { Popover } from "../Popover"
import AppsIcon from "./AppsIcon"

export type Props = HTMLAttributes<HTMLDivElement> & {
  // Placeholder
}

export function AppsMenu({ children, ...props }: Props) {
  return (
    <Popover {...props} button={<Popover.Button icon={<AppsIcon />} />}>
      {children}
    </Popover>
  )
}

export default AppsMenu

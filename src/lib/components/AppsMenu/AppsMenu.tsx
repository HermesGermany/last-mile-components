import { HTMLAttributes } from "react"
import SidebarButton from "../../../components/SidebarButton"
import { Popover } from "../Popover"
import AppsIcon from "./AppsIcon"

export type Props = HTMLAttributes<HTMLDivElement> & {
  // Placeholder
}

export function AppsMenu(props: Props) {
  return (
    <Popover
      {...props}
      button={
        <SidebarButton
          label="Apps"
          test
          icon={<AppsIcon />}
          ButtonComponent={Popover.Button}
        />
      }
    >
      hi
    </Popover>
  )
}

export default AppsMenu

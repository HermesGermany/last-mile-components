import { HTMLAttributes } from "react"
import { Popover } from "../Popover"
import AppsIcon from "./AppsIcon"

export type Props = HTMLAttributes<HTMLDivElement> & {
  apps: LinkedApp[]
  popoverTitle?: string
}

export type LinkedApp = {
  label: string
  href: string
  icon: any
}

function AppTile({ app }: { app: LinkedApp }) {
  return (
    <a
      className="decoration-none flex h-24 w-24 cursor-pointer flex-col items-center gap-3.5 rounded p-2.5 hover:bg-hermes-grey-light hover:text-hermes-blue"
      target="_blank"
      href={app.href}
      rel="noopener noreferrer"
      data-testid={`${app.label.replace(/ /g, "")}-testid`}
    >
      <img src={app.icon} alt={`${app.label} Logo`} className="w-8" />
      <span className="overflow-hidden text-ellipsis text-center text-xs font-normal">
        {app.label}
      </span>
    </a>
  )
}

export function AppsMenu({ apps, popoverTitle, ...props }: Props) {
  return (
    <Popover
      {...props}
      button={<Popover.Button icon={<AppsIcon />} label="Apps" />}
      popoverTitle={popoverTitle}
    >
      <div className="flex flex-wrap justify-evenly gap-3">
        {apps.map((app) => (
          <AppTile key={app.label} app={app} />
        ))}
      </div>
    </Popover>
  )
}

export default AppsMenu

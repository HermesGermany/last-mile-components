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
      className="tw-decoration-none tw-flex tw-h-24 tw-w-24 tw-cursor-pointer tw-flex-col tw-items-center tw-gap-3.5 tw-rounded tw-p-2.5 hover:tw-bg-hermes-grey-light hover:tw-text-hermes-blue"
      target="_blank"
      href={app.href}
      rel="noopener noreferrer"
      data-testid={`${app.label.replace(/ /g, "")}-testid`}
    >
      <img src={app.icon} alt={`${app.label} Logo`} className="tw-w-8" />
      <span className="tw-overflow-hidden tw-text-ellipsis tw-text-center tw-text-xs tw-font-normal">
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
      <div className="tw-flex tw-flex-wrap tw-justify-evenly tw-gap-3">
        {apps.map((app) => (
          <AppTile key={app.label} app={app} />
        ))}
      </div>
    </Popover>
  )
}

export default AppsMenu

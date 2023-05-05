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
      className="tw-box-border tw-flex tw-h-28 tw-w-28 tw-cursor-pointer tw-flex-col tw-items-center tw-gap-3.5 tw-rounded tw-p-2.5 tw-text-hermes-grey tw-no-underline hover:tw-bg-hermes-grey-light hover:tw-text-hermes-blue"
      target="_blank"
      href={app.href}
      rel="noopener noreferrer"
      data-testid={`${app.label.replace(/ /g, "")}-testid`}
    >
      <img
        src={app.icon}
        alt={`${app.label} Logo`}
        className="tw-h-10 tw-w-auto"
      />
      <div className="tw-flex tw-w-full tw-flex-1 tw-items-center tw-justify-center">
        <span className="tw-overflow-hidden tw-text-ellipsis tw-text-center tw-text-xs tw-font-normal">
          {app.label}
        </span>
      </div>
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
      <div className="tw-grid tw-grid-cols-2 tw-gap-x-6 tw-gap-y-4">
        {apps.map((app) => (
          <AppTile key={app.label} app={app} />
        ))}
      </div>
    </Popover>
  )
}

export default AppsMenu

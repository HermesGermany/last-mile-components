import { HTMLAttributes, ReactNode } from "react"

function MenuGroup({
  groupLabel,
  children,
}: {
  groupLabel?: string
  children: ReactNode
}) {
  return (
    <div
      key={groupLabel}
      className="flex flex-col gap-0.5 border-b-2 border-b-hermes-grey-10 pb-1 last:border-b-0"
    >
      {groupLabel && (
        <div className="mb-1 px-5 text-xs font-medium text-hermes-grey-50">
          {groupLabel}
        </div>
      )}
      {children}
    </div>
  )
}

type ItemProps = {
  label: string
  action: () => void
  children?: React.ReactNode
}

function MenuItem({ label, action, children, ...rest }: ItemProps) {
  return (
    <button
      key={label}
      onClick={action}
      className="relative flex h-8 items-center justify-between border-none bg-none px-5 text-start text-sm hover:bg-hermes-grey-10"
      {...rest}
    >
      <span>{label}</span>
      {children}
    </button>
  )
}

export type Props = HTMLAttributes<HTMLDivElement> & {
  title?: string
  children?: React.ReactNode
}
export function Popup({
  title,
  children,
  className,
  tabIndex = 0,
  ...htmlProps
}: Props) {
  return (
    <div
      className={`absolute bottom-1 left-14 z-[110] flex w-64 flex-col gap-4 rounded bg-white py-4 text-hermes-grey shadow ${className}`}
      tabIndex={tabIndex}
      {...htmlProps}
    >
      {title && (
        <span className="px-4 text-start text-xs font-semibold text-hermes-grey-50">
          {title}
        </span>
      )}
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  )
}

Popup.MenuGroup = MenuGroup
Popup.MenuItem = MenuItem

export default Popup

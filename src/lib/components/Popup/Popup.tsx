import { HTMLAttributes } from "react"

export type Props = HTMLAttributes<HTMLDivElement> & {
  title?: string
  children?: React.ReactNode
}

export function Popup({ title, children, className, tabIndex = 0, ...htmlProps }: Props) {
  return (
    <div
      className={`absolute bottom-1 left-14 z-[110] flex w-64 flex-col gap-4 rounded bg-white py-4 text-hermes-grey shadow ${className}`}
      tabIndex={tabIndex}
      {...htmlProps}
    >
      {title && (
        <span className="px-4 text-start text-xs font-semibold text-hermes-grey-50">{title}</span>
      )}
      <div className="flex flex-col">{children}</div>
    </div>
  )
}

export default Popup

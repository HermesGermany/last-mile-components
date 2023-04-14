/* eslint-disable jsx-a11y/alt-text */
import { HTMLAttributes, ReactNode } from "react"

export type Props = HTMLAttributes<HTMLDivElement> & {
  imgSrc?: string
  imgTitle: string
  footer?: ReactNode
}

function LogoImage(
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) {
  return (
    <div className="p-1">
      <img {...props} />
    </div>
  )
}

export function Sidebar({
  imgSrc,
  imgTitle,
  children,
  footer,
  ...htmlProps
}: Props) {
  return (
    <div
      className="fixed left-0 top-0 flex h-full w-16 flex-col justify-between bg-hermes-blue"
      {...htmlProps}
    >
      <div className="relative">
        <div className="mb-2 aspect-square">
          {imgSrc ? (
            <LogoImage src={imgSrc} title={imgTitle} alt={imgTitle} />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span>{imgTitle}</span>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1 p-1.5">{children}</div>
      </div>
      <div className="">{footer}</div>
    </div>
  )
}

export default Sidebar

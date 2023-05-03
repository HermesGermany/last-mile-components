/* eslint-disable jsx-a11y/alt-text */
import { HTMLAttributes, ReactNode } from "react"

type RGB = `rgb(${number}, ${number}, ${number})`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type HEX = `#${string}`
type Color = RGB | RGBA | HEX | undefined

export type Props = HTMLAttributes<HTMLDivElement> & {
  imgSrc?: string
  imgTitle: string
  footer?: ReactNode
  backgroundColor?: Color
}

function LogoImage(
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) {
  return (
    <div className="tw-p-1">
      <img {...props} className="tw-h-full tw-w-full tw-object-scale-down" />
    </div>
  )
}

export function Sidebar({
  imgSrc,
  imgTitle,
  children,
  footer,
  backgroundColor,
  ...htmlProps
}: Props) {
  return (
    <div
      className={`items-center tw-fixed tw-left-0 tw-top-0 tw-box-border tw-flex tw-h-full tw-w-[4.75rem] tw-flex-col tw-justify-between tw-bg-hermes-blue tw-p-2`}
      style={{ backgroundColor }}
      {...htmlProps}
    >
      <div className="tw-flex tw-flex-col tw-gap-2">
        <div className="tw-mb-3 tw-flex tw-items-center tw-justify-center">
          {imgSrc ? (
            <LogoImage src={imgSrc} title={imgTitle} alt={imgTitle} />
          ) : (
            <span className="tw-overflow-hidden tw-text-ellipsis tw-text-center tw-font-semibold tw-text-white">
              {imgTitle}
            </span>
          )}
        </div>
        {children}
      </div>
      <div className="tw-flex tw-flex-col tw-gap-2">{footer}</div>
    </div>
  )
}

export default Sidebar

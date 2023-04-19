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
    <div className="tw-p-1">
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
      className="tw-fixed tw-left-0 tw-top-0 tw-flex tw-h-full tw-w-16 tw-flex-col tw-justify-between tw-bg-hermes-blue"
      {...htmlProps}
    >
      <div className="tw-relative">
        <div className="tw-mb-2 tw-aspect-square">
          {imgSrc ? (
            <LogoImage src={imgSrc} title={imgTitle} alt={imgTitle} />
          ) : (
            <div className="tw-flex tw-h-full tw-items-center tw-justify-center">
              <span>{imgTitle}</span>
            </div>
          )}
        </div>
        <div className="tw-flex tw-flex-col tw-gap-1 tw-p-1.5">{children}</div>
      </div>
      <div className="tw-flex tw-flex-col tw-gap-1 tw-p-1.5">{footer}</div>
    </div>
  )
}

export default Sidebar

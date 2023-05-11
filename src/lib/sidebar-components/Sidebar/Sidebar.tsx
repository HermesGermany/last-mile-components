/* eslint-disable jsx-a11y/alt-text */
import { HTMLAttributes, ReactNode } from "react"

export type Props = HTMLAttributes<HTMLDivElement> & {
  imgSrc?: string
  imgTitle: string
  topComponents?: ReactNode
  bottomComponents?: ReactNode
}

function LogoImage(
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) {
  return (
    <img
      {...props}
      className="tw-box-border tw-h-full tw-w-full tw-object-scale-down tw-p-1"
    />
  )
}

export function Sidebar({
  imgSrc,
  imgTitle,
  topComponents,
  bottomComponents,
  ...htmlProps
}: Props) {
  return (
    <div
      className={`tw-box-border tw-flex tw-h-full tw-w-[4.75rem] tw-flex-col tw-items-center tw-justify-between tw-bg-hermes-blue tw-p-2`}
      {...htmlProps}
    >
      <div className="tw-flex tw-w-full tw-flex-col tw-gap-2">
        <div className="tw-mb-3 tw-flex tw-items-center tw-justify-center">
          {imgSrc ? (
            <LogoImage src={imgSrc} title={imgTitle} alt={imgTitle} />
          ) : (
            <span className="tw-overflow-hidden tw-text-ellipsis tw-text-center tw-font-semibold tw-text-white">
              {imgTitle}
            </span>
          )}
        </div>
        {topComponents}
      </div>
      <div className="tw-flex tw-w-full tw-flex-col tw-gap-2">
        {bottomComponents}
      </div>
    </div>
  )
}

export default Sidebar

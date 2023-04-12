/* eslint-disable jsx-a11y/alt-text */
import { HTMLAttributes } from "react"
import MenuIcon from "./MenuIcon"

export type Props = HTMLAttributes<HTMLDivElement> & {
  imgSrc?: string
  imgTitle: string
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

export function Sidebar({ imgSrc, imgTitle, ...htmlProps }: Props) {
  return (
    <div
      className="fixed left-0 top-0 flex h-full w-16 flex-col justify-between bg-hermes-blue p-2"
      {...htmlProps}
    >
      <div className="relative">
        <div className="aspect-square">
          {imgSrc ? (
            <LogoImage src={imgSrc} title={imgTitle} alt={imgTitle} />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span>{imgTitle}</span>
            </div>
          )}
        </div>
      </div>
      <div>
        <MenuIcon />
      </div>
    </div>
  )
}

export default Sidebar

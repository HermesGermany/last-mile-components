import { HTMLAttributes } from "react"

export type Props = HTMLAttributes<HTMLDivElement> & {
  // Placeholder
}

export function BurgerMenu({ ...htmlProps }: Props) {
  return <div {...htmlProps}>BurgerMenu</div>
}

export default BurgerMenu

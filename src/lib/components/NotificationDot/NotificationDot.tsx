import { HTMLAttributes } from "react"
import theme from "../../../../tailwind.config"

type BaseProps = {
  description: string
  color?: keyof typeof theme.theme.extend.colors
}

const positionStyles = {
  topRight: {
    top: 0,
    right: "-5px",
    bottom: "unset",
    left: "unset",
  },
  left: {
    top: 0,
    bottom: 0,
    left: 7,
    right: "unset",
    margin: "auto 0",
  },
}

type GivenPosition = {
  position?: keyof typeof positionStyles
}

type CustomPosition = {
  position: "custom"
  customPosition: {
    left?: number
    right?: number
    top?: number
    bottom?: number
  }
}

export type Props = HTMLAttributes<HTMLDivElement> &
  BaseProps &
  (GivenPosition | CustomPosition)

export function NotificationDot(props: Props) {
  const {
    description,
    position = "topRight",
    color = "hermes-orange",
    ...htmlProps
  } = props
  let newPosition

  if ("customPosition" in props) {
    newPosition = props.customPosition
  } else if (position !== "custom") {
    newPosition = positionStyles[position]
  }

  return (
    <div
      className={`absolute h-2 w-2 rounded-full ${color}`}
      style={{ ...newPosition }}
      title={description}
      {...htmlProps}
    />
  )
}

export default NotificationDot

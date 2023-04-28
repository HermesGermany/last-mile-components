import { HTMLAttributes } from "react"

const positionStyles = {
  topRight: {
    top: "-0.375rem",
    right: "-0.375rem",
    bottom: "unset",
    left: "unset",
  },
  leftForMenuItem: {
    top: 0,
    bottom: 0,
    left: 7,
    right: "unset",
    margin: "auto 0",
  },
  left: {
    top: 0,
    bottom: 0,
    left: "-0.5rem",
    right: "unset",
    margin: "auto 0",
  },
}

type BaseProps = {
  backgroundColor?: string
}

type GivenPositionProps = {
  position?: keyof typeof positionStyles
}

type CustomPositionProps = {
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
  (GivenPositionProps | CustomPositionProps)

export function NotificationDot(props: Props) {
  const {
    position = "topRight",
    backgroundColor = "#ffa800",
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
      className={`tw-absolute tw-h-3 tw-w-3 tw-rounded-full tw-drop-shadow`}
      style={{ ...newPosition, backgroundColor: backgroundColor }}
      {...htmlProps}
    />
  )
}

export default NotificationDot

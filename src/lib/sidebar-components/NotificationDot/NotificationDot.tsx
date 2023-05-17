import * as React from "react"

enum Position {
  topRight = "topRight",
  innerLeft = "innerLeft",
}
type PositionKeys = keyof typeof Position
type PositionValues = {
  top?: string | number | undefined
  right?: string | number | undefined
  bottom?: string | number | undefined
  left?: string | number | undefined
  margin?: string | undefined
}

const positionStyles: Record<Position, PositionValues> = {
  [Position.topRight]: {
    top: 2,
    right: 2,
    bottom: "unset",
    left: "unset",
  },
  [Position.innerLeft]: {
    top: 0,
    bottom: 0,
    left: 7,
    right: "unset",
    margin: "auto 0",
  },
}

type GivenPositionProps = {
  position?: PositionKeys
}

type CustomPositionProps = {
  position: "custom"
  customPosition?: {
    left?: number
    right?: number
    top?: number
    bottom?: number
  }
}

export type Props = (GivenPositionProps | CustomPositionProps) &
  React.HTMLAttributes<HTMLDivElement>

export default function NotificationDot(props: Props) {
  const { position = Position.topRight, style, ...htmlProps } = props
  let newPosition: PositionValues = {}

  if (position === "custom" && "customPosition" in htmlProps) {
    // TypeScript struggling hard with union types
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    newPosition = htmlProps.customPosition!
    delete htmlProps.customPosition
  } else if (position !== "custom") {
    newPosition = positionStyles[position]
  }

  return (
    <div
      className={`tw-absolute tw-h-2.5 tw-w-2.5 tw-rounded-full tw-bg-hermes-orange-light tw-drop-shadow`}
      style={{ ...newPosition, ...style }}
      {...htmlProps}
    />
  )
}

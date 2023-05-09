import { HTMLAttributes } from "react"

export type Props = HTMLAttributes<HTMLDivElement> & {
  firstName?: string
  lastName?: string
  username?: string
}

export function UserIndicator({
  firstName = "",
  lastName = "",
  username = "",
  ...htmlProps
}: Props) {
  const title = `Eingeloggt als ${firstName} ${lastName} (${username})`
  const initials = `${firstName[0] ?? ""}${lastName[0] ?? ""}`

  return (
    <div
      {...htmlProps}
      title={title}
      className="tw-relative tw-ml-1 tw-grid tw-h-9 tw-w-9 tw-place-items-center tw-rounded-full tw-bg-hermes-grey-10 tw-text-sm tw-font-medium tw-text-hermes-blue"
    >
      {initials}
      <div className="tw-absolute -tw-left-1 tw-bottom-0 tw-h-3 tw-w-3 tw-rounded-full tw-border-[1.5px] tw-border-white tw-bg-[#95f985]" />
    </div>
  )
}

export default UserIndicator

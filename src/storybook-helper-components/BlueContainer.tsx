function BlueContainer({
  children,
  additionalHeight = false,
}: {
  children: React.ReactNode
  additionalHeight?: boolean
}) {
  return (
    <div className={additionalHeight ? "tw-h-96" : ""}>
      <div className="tw-flex tw-h-max tw-w-max tw-items-center tw-justify-center tw-rounded-md tw-bg-hermes-blue tw-p-16">
        {children}
      </div>
    </div>
  )
}

export default BlueContainer

function BlueContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="tw-flex tw-h-max tw-w-max tw-items-center tw-justify-center tw-rounded-md tw-bg-hermes-blue tw-p-16">
      {children}
    </div>
  )
}

export default BlueContainer

import { Dialog } from "@headlessui/react"
import CloseIcon from "./CloseIcon"
import Icon from "./FeedbackIcon"

type Props = { onCloseModal: () => void }

export default function FeedbackModalHeader({ onCloseModal }: Props) {
  return (
    <>
      <Dialog.Title
        as="span"
        className="tw-mb-3 tw-flex tw-gap-3 tw-text-start tw-font-marselis tw-text-lg tw-font-medium tw-text-hermes-blue"
      >
        <Icon /> Gib uns Feedback
      </Dialog.Title>
      <button
        className="tw-absolute tw-right-4 tw-top-5 tw-cursor-pointer tw-border-none tw-bg-transparent tw-text-gray-400"
        onClick={onCloseModal}
        data-testid="lmc-feedback-modal-close-btn"
      >
        <CloseIcon />
      </button>
    </>
  )
}

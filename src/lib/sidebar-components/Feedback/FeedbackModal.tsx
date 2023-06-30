import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { FeedbackContent } from "./Feedback"
import FeedbackModalBody from "./FeedbackModalBody"
import FeedbackModalHeader from "./FeedbackModalHeader"

type Props = {
  onSubmitFunction: (feedbackPayload: FeedbackContent) => Promise<boolean>
  closePopup: () => void
  isOpen: boolean
}

function FeedbackModal({
  onSubmitFunction,
  closePopup,
  isOpen,
  ...rest
}: Props) {
  const [closingTimeout, setClosingTimeout] = useState<
    ReturnType<typeof setTimeout> | undefined
  >(undefined)

  function onClosePopup() {
    clearTimeout(closingTimeout)
    closePopup()
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="tw-relative tw-z-[999]"
        onClose={onClosePopup}
      >
        <Transition.Child
          as={Fragment}
          enter="tw-ease-out tw-duration-300"
          enterFrom="tw-opacity-0"
          enterTo="tw-opacity-100"
          leave="tw-ease-in tw-duration-200"
          leaveFrom="tw-opacity-100"
          leaveTo="tw-opacity-0"
        >
          <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-25" />
        </Transition.Child>
        <div className="tw-fixed tw-inset-0 tw-overflow-y-auto">
          <div className="tw-flex tw-min-h-full tw-items-center tw-justify-center">
            <Transition.Child
              as={Fragment}
              enter="tw-ease-out tw-duration-300"
              enterFrom="tw-opacity-0 tw-scale-95"
              enterTo="tw-opacity-100 tw-scale-100"
              leave="tw-ease-in tw-duration-200"
              leaveFrom="tw-opacity-100 tw-scale-100"
              leaveTo="tw-opacity-0 tw-scale-95"
            >
              <Dialog.Panel
                className="tw-box-border tw-flex tw-w-[33rem] tw-cursor-default tw-flex-col tw-gap-4 tw-rounded tw-bg-white tw-p-6 tw-text-gray-700 tw-shadow-md tw-drop-shadow"
                {...rest}
                data-testid="feedback-popup"
              >
                <FeedbackModalHeader onClosePopup={onClosePopup} />

                <FeedbackModalBody
                  onSubmitFunction={onSubmitFunction}
                  closePopup={closePopup}
                  setClosingTimeout={setClosingTimeout}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default FeedbackModal

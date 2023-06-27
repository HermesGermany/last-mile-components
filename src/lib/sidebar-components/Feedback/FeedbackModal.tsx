import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useEffect, useState } from "react"
import CloseIcon from "./CloseIcon"
import { feedbackCategories, FeedbackContent } from "./Feedback"
import FeedbackCategoryButton from "./FeedbackCategoryButton"
import Icon from "./FeedbackIcon"
import SuccessIcon from "./SuccessIcon"

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
  const [feedbackContent, setFeedbackContent] = useState<FeedbackContent>(
    () => {
      const storedFeedbackContent = sessionStorage.getItem("feedbackContent")
      return storedFeedbackContent !== null
        ? (JSON.parse(storedFeedbackContent) as FeedbackContent)
        : {
            emailContent: "",
            feedbackCategory: undefined,
            responseRequested: false,
          }
    }
  )
  const [isLoading, setIsLoading] = useState(false)
  const [responseMessage, setResponseMessage] = useState<
    "none" | "success" | "error"
  >("none")
  const [closingTimeout, setClosingTimeout] = useState<
    ReturnType<typeof setTimeout> | undefined
  >(undefined)

  let placeholderText = ""

  switch (feedbackContent.feedbackCategory) {
    case "Fehler":
      placeholderText = "Welchen Fehler hast du gefunden?"
      break
    case "Frage":
      placeholderText = "Welche Frage hast du an uns?"
      break
    case "Vorschlag":
      placeholderText = "Welchen Vorschlag hast du für uns?"
      break
    default:
      break
  }

  function toggleCheckbox() {
    setFeedbackContent((feedbackContent) => ({
      ...feedbackContent,
      responseRequested: !feedbackContent.responseRequested,
    }))
  }

  const submitDisabled =
    !feedbackContent.emailContent || isLoading || responseMessage === "success"

  useEffect(() => {
    sessionStorage.setItem("feedbackContent", JSON.stringify(feedbackContent))
  }, [feedbackContent])

  function handleSuccess() {
    setIsLoading(false)
    setResponseMessage("success")
    sessionStorage.removeItem("feedbackContent")

    const timeoutId = setTimeout(() => {
      closePopup()
    }, 1750)
    setClosingTimeout(timeoutId)
  }

  function handleError() {
    setIsLoading(false)
    setResponseMessage("error")
  }

  async function handleSubmit() {
    setIsLoading(true)
    const resOk = await onSubmitFunction(feedbackContent)

    if (resOk) handleSuccess()
    else handleError()
  }

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
                <Dialog.Title
                  as="span"
                  className="tw-mb-3 tw-flex tw-gap-3 tw-text-start tw-font-marselis tw-text-lg tw-font-medium tw-text-hermes-blue"
                >
                  <Icon /> Gib uns Feedback
                </Dialog.Title>
                <button
                  className="tw-absolute tw-right-4 tw-top-5 tw-cursor-pointer tw-border-none tw-bg-transparent tw-text-gray-400"
                  onClick={onClosePopup}
                >
                  <CloseIcon />
                </button>
                <div className="tw-flex tw-w-full tw-flex-col">
                  <div className="tw-flex tw-justify-between tw-gap-6">
                    {feedbackCategories
                      .filter(Boolean)
                      .map((feedbackCategory) => (
                        <FeedbackCategoryButton
                          key={feedbackCategory}
                          feedbackCategory={feedbackCategory}
                          feedbackContent={feedbackContent}
                          setFeedbackContent={setFeedbackContent}
                        />
                      ))}
                  </div>
                  <div>
                    {feedbackContent.feedbackCategory ? (
                      <div
                        className="-tw-mx-6 tw-my-6 tw-box-border tw-h-[0.5px] tw-bg-hermes-grey-light"
                        style={{ width: "calc(100% + 1.5rem * 2)" }}
                      />
                    ) : (
                      <div
                        className="tw-my-3 tw-flex tw-flex-col tw-gap-1 tw-text-sm tw-text-hermes-grey"
                        style={{ marginTop: 20, marginBottom: -5 }}
                      >
                        Nach der Auswahl hast du die Möglichkeit, schriftliches
                        Feedback zu geben.
                      </div>
                    )}
                  </div>
                  <div
                    className={`tw-max-h-0 tw-overflow-hidden tw-opacity-0 tw-transition-all tw-duration-300 tw-ease-out ${
                      feedbackContent.feedbackCategory
                        ? "tw-max-h-[1000px] tw-opacity-100 tw-transition-all tw-duration-500 tw-ease-in-out"
                        : ""
                    }`}
                  >
                    <div className="tw-font-marselis">Deine Nachricht</div>
                    <textarea
                      data-testid="feedback-text"
                      value={feedbackContent.emailContent}
                      disabled={!feedbackContent.feedbackCategory}
                      onChange={(e) =>
                        setFeedbackContent((feedbackContent) => ({
                          ...feedbackContent,
                          emailContent: e.target.value,
                        }))
                      }
                      className="tw-z-10 tw-mt-1 tw-box-border tw-h-52 tw-w-full tw-resize-none tw-rounded tw-border tw-border-hermes-grey-50 tw-px-2 tw-py-1 tw-font-sans focus:tw-border-hermes-blue-light focus:tw-outline-none"
                      placeholder={placeholderText}
                    />

                    <div className="tw-my-3 tw-flex tw-flex-col tw-gap-1 tw-text-sm tw-text-hermes-grey/75">
                      <span>
                        Dein Name und deine E-Mail-Adresse werden der Nachricht
                        automatisch angehängt.
                      </span>
                      <span>
                        Wenn du uns Dateien schicken möchtest (z.B. Screenshots
                        oder Videos), kannst du uns nach wie vor{" "}
                        <a
                          className="tw-text-hermes-blue"
                          href="mailto:zsb-cockpit@hermesworld.com"
                        >
                          per E-Mail erreichen
                        </a>
                        .
                      </span>
                    </div>

                    <div className="pt-[1px] tw-mt-6 tw-flex tw-gap-1">
                      <input
                        type="checkbox"
                        id="responseRequested-input"
                        name="responseRequested"
                        className="tw-cursor-pointer"
                        checked={feedbackContent.responseRequested}
                        onChange={toggleCheckbox}
                      />
                      <label
                        htmlFor="responseRequested-input"
                        className="tw-cursor-pointer tw-select-none"
                      >
                        Sollen wir uns bei dir melden?
                      </label>
                    </div>

                    <div className="tw-my-3 tw-h-6 tw-text-base tw-font-medium">
                      {responseMessage === "success" && (
                        <span className="tw-text-hermes-signal-green">
                          Danke, dein Feedback wurde verschickt!
                        </span>
                      )}
                      {responseMessage === "error" && (
                        <span className="tw-text-hermes-signal-red">
                          Fehler - bitte versuche es später erneut!
                        </span>
                      )}
                    </div>

                    <div className="tw-flex tw-items-center tw-justify-end tw-gap-6">
                      <button
                        data-testid="submit-button"
                        className="tw-flex tw-h-10 tw-w-32 tw-cursor-pointer tw-items-center tw-justify-evenly tw-rounded-sm tw-border-none tw-bg-hermes-blue tw-px-1.5 tw-py-2.5 tw-font-marselis tw-text-white tw-shadow-sm hover:tw-bg-hermes-blue-hover disabled:tw-cursor-default disabled:tw-bg-opacity-70"
                        disabled={submitDisabled}
                        onClick={handleSubmit}
                      >
                        {isLoading ? (
                          "Lädt..."
                        ) : responseMessage === "success" ? (
                          <SuccessIcon />
                        ) : (
                          "Abschicken"
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default FeedbackModal

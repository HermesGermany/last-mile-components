import { useEffect, useState } from "react"
import CloseIcon from "./CloseIcon"
import { feedbackCategories, FeedbackContent } from "./Feedback"
import FeedbackCategoryButton from "./FeedbackCategoryButton"
import Icon from "./FeedbackIcon"
import SuccessIcon from "./SuccessIcon"

type Props = {
  onSubmitFunction: (feedbackPayload: FeedbackContent) => Promise<boolean>
  closePopup: () => void
}

function FeedbackModal({ onSubmitFunction, closePopup, ...rest }: Props) {
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
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className="tw-fixed tw-left-0 tw-top-0 tw-z-50 tw-h-full tw-w-full tw-cursor-pointer tw-bg-black tw-bg-opacity-50"
      onClick={onClosePopup}
      onKeyDown={onClosePopup}
    >
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className={
          "tw-fixed tw-left-1/2 tw-top-1/2 tw-z-50 tw-box-border tw-flex tw-w-[33rem] -tw-translate-x-1/2 -tw-translate-y-1/2 tw-cursor-default tw-flex-col tw-gap-4 tw-rounded tw-bg-white tw-p-6 tw-text-gray-700 tw-shadow-md tw-drop-shadow"
        }
        {...rest}
        onClick={(e) => e.stopPropagation()}
        data-testid="feedback-popup"
        onKeyDown={(e) => e.stopPropagation()}
      >
        <button
          className="tw-absolute tw-right-4 tw-top-5 tw-cursor-pointer tw-border-none tw-bg-transparent tw-text-gray-400"
          onClick={onClosePopup}
        >
          <CloseIcon />
        </button>
        <div className="tw-mb-3 tw-flex tw-gap-3 tw-text-start tw-font-marselis tw-text-lg tw-font-medium tw-text-hermes-blue">
          <Icon /> <span>Gib uns Feedback</span>
        </div>
        <div className="tw-flex tw-w-full tw-flex-col">
          <div className="tw-flex tw-justify-between tw-gap-6">
            {feedbackCategories.filter(Boolean).map((feedbackCategory) => (
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
                Nach der Auswahl hast du die Möglichkeit, schriftliches Feedback
                zu geben.
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

            <div className="tw-my-3 tw-flex tw-flex-col tw-gap-1 tw-text-sm tw-text-hermes-grey">
              <span>
                Dein Name und deine E-Mail-Adresse werden der Nachricht
                automatisch angehängt.
              </span>
              <span>
                Wenn du uns Dateien schicken möchtest (z.B. Screenshots oder
                Videos), kannst du uns nach wie vor{" "}
                <a href="mailto:zsb-cockpit@hermesworld.com">
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
                checked={feedbackContent.responseRequested}
                onChange={toggleCheckbox}
              />
              <label
                htmlFor="responseRequested-input"
                style={{ userSelect: "none" }}
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
      </div>
    </div>
  )
}

export default FeedbackModal

// label {
//   cursor: pointer;
// }

// button {
//   //remove default button styles
//   background: none;
//   color: inherit;
//   border: none;
//   cursor: pointer;
// }

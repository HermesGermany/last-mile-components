import { useEffect, useState } from "react"
import {
  feedbackCategories,
  FeedbackCategory,
  FeedbackContent,
} from "./Feedback"
import FeedbackCategoryButton from "./FeedbackCategoryButton"
import SuccessIcon from "./SuccessIcon"

type Props = {
  onSubmitFunction: (feedbackPayload: FeedbackContent) => Promise<boolean>
  closeModal: () => void
  setClosingTimeout: React.Dispatch<
    React.SetStateAction<ReturnType<typeof setTimeout> | undefined>
  >
  fallbackEmailAddress?: string
}

type ResponseMessage = "none" | "success" | "error"

const placeholderMessages: Record<FeedbackCategory, string> = {
  Fehler:
    "Was ist das erwartete Verhalten und was war das tatsächliche Verhalten? Wie lässt sich der Fehler nachstellen?",
  Frage: "Welche Frage hast du an uns?",
  Vorschlag:
    "Wie sieht dein Vorschlag aus und welches Problem wird dadurch gelöst?",
}

export default function FeedbackModalBody({
  onSubmitFunction,
  closeModal,
  setClosingTimeout,
  fallbackEmailAddress,
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
  const [responseMessage, setResponseMessage] =
    useState<ResponseMessage>("none")

  const placeholderText =
    placeholderMessages[feedbackContent.feedbackCategory || "Vorschlag"]

  const submitDisabled =
    !feedbackContent.emailContent || isLoading || responseMessage === "success"

  function toggleCheckbox() {
    setFeedbackContent((feedbackContent) => ({
      ...feedbackContent,
      responseRequested: !feedbackContent.responseRequested,
    }))
  }

  async function handleSubmit() {
    setIsLoading(true)
    const resOk = await onSubmitFunction(feedbackContent)

    if (resOk) handleSuccess()
    else handleError()
  }

  function handleSuccess() {
    setIsLoading(false)
    setResponseMessage("success")
    sessionStorage.removeItem("feedbackContent")

    const timeoutId = setTimeout(() => {
      closeModal()
    }, 1750)
    setClosingTimeout(timeoutId)
  }

  function handleError() {
    setIsLoading(false)
    setResponseMessage("error")
  }

  useEffect(() => {
    sessionStorage.setItem("feedbackContent", JSON.stringify(feedbackContent))
  }, [feedbackContent])

  return (
    <div className="tw-flex tw-w-full tw-flex-col">
      <div className="tw-flex tw-justify-between tw-gap-6">
        {feedbackCategories.map((feedbackCategory) => (
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
            Nach der Auswahl hast du die Möglichkeit, schriftliches Feedback zu
            geben.
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
            Dein Name und deine E-Mail-Adresse werden der Nachricht automatisch
            angehängt.
          </span>
          {fallbackEmailAddress && (
            <span>
              Wenn du uns Dateien schicken möchtest (z.B. Screenshots oder
              Videos), kannst du uns nach wie vor{" "}
              <a
                className="tw-text-hermes-blue"
                href={`mailto:${fallbackEmailAddress}`}
              >
                per E-Mail erreichen
              </a>
              .
            </span>
          )}
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
  )
}

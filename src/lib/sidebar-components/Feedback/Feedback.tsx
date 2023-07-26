import { HTMLAttributes, useState } from "react"
import SidebarButton from "../../../components/SidebarButton"
import FeedbackIcon from "./FeedbackIcon"
import FeedbackModal from "./FeedbackModal"

export const feedbackCategories = [
  "Vorschlag",
  "Fehler",
  "Frage",
  undefined,
] as const

export type FeedbackCategory = (typeof feedbackCategories)[number]

export type FeedbackContent = {
  feedbackCategory: FeedbackCategory
  emailContent: string
  responseRequested: boolean
}

export type Props = Omit<HTMLAttributes<HTMLButtonElement>, "onSubmit"> & {
  onSubmit: (data: FeedbackContent) => Promise<boolean>
  defaultText?: Partial<Record<Exclude<FeedbackCategory, undefined>, string>>
}

export const defaultTextContents: Record<
  Exclude<FeedbackCategory, undefined>,
  string
> = {
  Fehler: `Was war das erwartete Verhalten:


Was war das tatsächliche Verhalten:


Zusätzliche Informationen (Sendungsnummer, genutzte Funktion, ...):


`,
  Frage: `Welche Frage hast Du an uns:


  `,
  Vorschlag: `Welchen Vorschlag hast Du an uns:


  `,
}

export default function Feedback({
  onSubmit,
  defaultText,
  ...htmlProps
}: Props) {
  const mergedDefaultText = Object.assign({}, defaultTextContents, defaultText)
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal() {
    setIsOpen((openMenu) => !openMenu)
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div className="tw-font-sans">
      <SidebarButton
        label="Feedback"
        icon={<FeedbackIcon />}
        data-userguide-id="feedback-button"
        data-testid="feedback-button"
        {...htmlProps}
        onClick={toggleModal}
      >
        Feedback
      </SidebarButton>

      <FeedbackModal
        onSubmitFunction={onSubmit}
        closeModal={closeModal}
        isOpen={isOpen}
        defaultText={mergedDefaultText}
      />
    </div>
  )
}

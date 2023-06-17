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

export type Props = HTMLAttributes<HTMLButtonElement> & {
  // Placeholder
}

export default function Feedback({ ...htmlProps }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  function togglePopup() {
    setIsOpen((openMenu) => !openMenu)
  }

  function closePopup() {
    setIsOpen(false)
  }

  return (
    <>
      <SidebarButton
        label="Feedback"
        icon={<FeedbackIcon />}
        data-userguide-id="feedback-button"
        data-testid="feedback-button"
        {...htmlProps}
        onClick={togglePopup}
      >
        Feedback
      </SidebarButton>
      {isOpen && (
        <FeedbackModal
          onSubmitFunction={() => Promise.resolve(true)}
          closePopup={closePopup}
        />
      )}
    </>
  )
}

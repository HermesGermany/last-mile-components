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
}

export default function Feedback({ onSubmit, ...htmlProps }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  function togglePopup() {
    setIsOpen((openMenu) => !openMenu)
  }

  function closePopup() {
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
        onClick={togglePopup}
      >
        Feedback
      </SidebarButton>

      <FeedbackModal
        onSubmitFunction={onSubmit}
        closePopup={closePopup}
        isOpen={isOpen}
      />
    </div>
  )
}

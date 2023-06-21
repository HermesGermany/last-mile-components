import clsx from "clsx"
import React from "react"
import { FeedbackCategory, FeedbackContent } from "./Feedback"

type Props = {
  feedbackCategory: FeedbackCategory
  feedbackContent: FeedbackContent
  setFeedbackContent: (value: React.SetStateAction<FeedbackContent>) => void
}

export default function FeedbackCategoryButton({
  feedbackCategory,
  feedbackContent,
  setFeedbackContent,
}: Props) {
  const active = feedbackCategory === feedbackContent.feedbackCategory
  return (
    <button
      data-testid={`feedback-category-${feedbackCategory}`}
      className={clsx(
        `tw-flex tw-h-11 tw-w-full tw-cursor-pointer tw-items-center tw-justify-center tw-rounded-sm tw-border-none`,
        "tw-px-1.5 tw-py-2.5 tw-shadow-sm hover:tw-bg-hermes-blue-hover hover:tw-text-white disabled:tw-cursor-default disabled:tw-bg-hermes-blue-light",
        active
          ? "tw-bg-hermes-blue tw-font-marselis tw-text-white"
          : "tw-bg-hermes-grey-5 tw-text-hermes-grey"
      )}
      onClick={() =>
        setFeedbackContent((feedbackContent) => ({
          ...feedbackContent,
          feedbackCategory,
        }))
      }
    >
      {feedbackCategory}
    </button>
  )
}

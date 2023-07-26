import { Meta, StoryFn } from "@storybook/react"
import BlueContainer from "../../../storybook-helper-components/BlueContainer"
import Feedback from "./Feedback"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Sidebar Components/Feedback",
  component: Feedback,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Feedback>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Feedback> = (args) => (
  <BlueContainer>
    <div className="tw-w-16">
      <Feedback {...args} />
    </div>
  </BlueContainer>
)

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  onSubmit: getOnSubmitFunction(true),
}

export const Unsuccessful = Template.bind({})
Unsuccessful.args = {
  onSubmit: getOnSubmitFunction(false),
}

function getOnSubmitFunction(serverResponse: boolean): () => Promise<boolean> {
  return (): Promise<boolean> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(serverResponse)
      }, 1000)
    })
}

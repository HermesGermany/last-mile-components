import { Meta, StoryFn } from "@storybook/react"
import BlueContainer from "../../../storybook-helper-components/BlueContainer"
import NotificationDot from "./NotificationDot"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Sidebar Components/NotificationDot",
  component: NotificationDot,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    customPosition: {
      if: { arg: "position", eq: "custom" },
    },
  },
} as Meta<typeof NotificationDot>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof NotificationDot> = (args) => (
  <BlueContainer>
    <div className="tw-relative tw-h-12 tw-w-12 tw-rounded-md tw-bg-white">
      <NotificationDot {...args} />
    </div>
  </BlueContainer>
)

export const TopRight = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TopRight.args = {}

export const LeftForMenuItem = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LeftForMenuItem.args = { position: "leftForMenuItem" }

export const Left = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Left.args = { position: "left" }

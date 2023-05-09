import { Meta, StoryFn } from "@storybook/react"
import UserIndicator from "./UserIndicator"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Components/UserIndicator",
  component: UserIndicator,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof UserIndicator>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof UserIndicator> = (args) => (
  <UserIndicator {...args} />
)

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  firstName: "John",
  lastName: "Doe",
  username: "jdoe",
}

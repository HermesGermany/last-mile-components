import { ComponentMeta, ComponentStory } from "@storybook/react"
import AppsIcon from "../AppsMenu/AppsIcon"
import Popover from "./Popover"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Components/Popover",
  component: Popover,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Popover>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Popover> = (args) => (
  <div className="w-16">
    <Popover {...args} />
  </div>
)

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  button: <Popover.Button icon={<AppsIcon />} label="Button" />,
  children: <div>kA</div>,
}

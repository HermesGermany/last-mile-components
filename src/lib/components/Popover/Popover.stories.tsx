import { Meta, StoryFn } from "@storybook/react"
import AppsIcon from "../AppsMenu/AppsIcon"
import Popover from "./Popover"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Components/Popover",
  component: Popover,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Popover>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Popover> = (args) => (
  <div className="tw-flex tw-h-screen tw-w-full tw-items-center tw-justify-center">
    <div className="w-14">
      <Popover {...args} />
    </div>
  </div>
)

const children = (
  <>
    <Popover.MenuGroup groupLabel="Group 1">
      <Popover.MenuItem label="Test" action={() => alert("Clicked")} />
      <Popover.MenuItem label="Test" action={() => alert("Clicked")} />
      <Popover.MenuItem label="Test" action={() => alert("Clicked")} />
      <Popover.MenuItem label="Test" action={() => alert("Clicked")} />
    </Popover.MenuGroup>
    <Popover.MenuGroup groupLabel="Group 2">
      <Popover.MenuItem label="Test" action={() => alert("Clicked")} />
    </Popover.MenuGroup>
    <Popover.MenuGroup groupLabel="Group 3">
      <Popover.MenuItem label="Test" action={() => alert("Clicked")} />
    </Popover.MenuGroup>
  </>
)

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  button: <Popover.Button icon={<AppsIcon />} label="Button" />,
  children,
}

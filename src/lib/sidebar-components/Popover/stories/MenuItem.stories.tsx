import { Meta, StoryFn } from "@storybook/react"
import Popover from "../Popover"

const { MenuGroup, MenuItem } = Popover

export default {
  title: "Design System/Sidebar Components/Popover/MenuItem",
  component: MenuItem,
  argTypes: {},
} as Meta<typeof MenuItem>

const Template: StoryFn<typeof MenuItem> = (args) => (
  <div className="tw-z-[500] tw-m-4 tw-box-border tw-flex tw-w-max tw-min-w-[14rem] tw-max-w-sm tw-flex-col tw-rounded tw-bg-white tw-p-6 tw-text-hermes-grey tw-shadow tw-drop-shadow">
    <MenuGroup groupLabel="My Group">
      <MenuItem
        label="Item #1"
        onClick={() => alert("First item was clicked")}
      />
      <MenuItem
        label="Item #2"
        onClick={() => alert("Second item was clicked")}
      />
      <MenuItem {...args} />
    </MenuGroup>
  </div>
)

export const Basic = Template.bind({})
Basic.args = {
  label: "Edit my label!",
  onClick: () => alert("Clicked"),
}

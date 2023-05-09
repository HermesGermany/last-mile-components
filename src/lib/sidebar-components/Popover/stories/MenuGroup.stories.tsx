import { Meta, StoryFn } from "@storybook/react"
import Popover from "../Popover"

const MenuGroup = Popover.MenuGroup

export default {
  title: "Design System/Sidebar Components/Popover/MenuGroup",
  component: MenuGroup,
  argTypes: {},
} as Meta<typeof MenuGroup>

const Template: StoryFn<typeof MenuGroup> = (args) => (
  <div className="tw-z-[500] tw-m-4 tw-box-border tw-flex tw-w-max tw-min-w-[14rem] tw-max-w-sm tw-flex-col tw-rounded tw-bg-white tw-p-6 tw-text-hermes-grey tw-shadow tw-drop-shadow">
    <Popover.MenuGroup groupLabel="Group #1">
      <Popover.MenuItem
        label="Item of Group #1"
        onClick={() => alert("Item clicked")}
      />{" "}
    </Popover.MenuGroup>
    <Popover.MenuGroup groupLabel="Group #2">
      <Popover.MenuItem
        label="Item of Group #2"
        onClick={() => alert("Item clicked")}
      />
    </Popover.MenuGroup>
  </div>
)

export const Basic = Template.bind({})
Basic.args = {
  groupLabel: "Group 1",
}

import { Meta, StoryFn } from "@storybook/react"
import BlueContainer from "../../../../storybook-helper-components/BlueContainer"
import Popover from "../Popover"

export default {
  title: "Design System/Sidebar Components/Popover/Popver",
  component: Popover,
  argTypes: {},
} as Meta<typeof Popover>

const Template: StoryFn<typeof Popover> = (args) => (
  <BlueContainer additionalHeight>
    <div className="w-14">
      <Popover {...args} />
    </div>
  </BlueContainer>
)

const { MenuGroup, MenuItem } = Popover

const children = (
  <>
    <MenuGroup groupLabel="Group 1">
      <MenuItem label="Test" onClick={() => alert("Clicked")} />
      <MenuItem label="Test" onClick={() => alert("Clicked")} />
      <MenuItem label="Test" onClick={() => alert("Clicked")} />
      <MenuItem label="Test" onClick={() => alert("Clicked")} />
    </MenuGroup>
    <MenuGroup groupLabel="Group 2">
      <MenuItem label="Test" onClick={() => alert("Clicked")} />
    </MenuGroup>
    <MenuGroup groupLabel="Group 3">
      <MenuItem label="Test" onClick={() => alert("Clicked")} />
    </MenuGroup>
  </>
)

export const Basic = Template.bind({})
Basic.args = {
  buttonProps: { label: "Click for popover" },
  children,
}

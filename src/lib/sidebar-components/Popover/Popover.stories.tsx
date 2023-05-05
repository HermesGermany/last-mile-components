import { Meta, StoryFn } from "@storybook/react"
import BlueContainer from "../../../storybook-helper-components/BlueContainer"
import Popover from "./Popover"

export default {
  title: "Design System/Sidebar Components/Popover",
  component: Popover,
  argTypes: {},
} as Meta<typeof Popover>

const Template: StoryFn<typeof Popover> = (args) => (
  <BlueContainer>
    <div className="w-14">
      <Popover {...args} />
    </div>
  </BlueContainer>
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
Basic.args = {
  button: <Popover.Button label="Click for popover" />,
  children,
}

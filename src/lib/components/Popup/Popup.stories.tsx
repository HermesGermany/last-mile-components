import { Meta, StoryFn } from "@storybook/react"

import Popup from "./Popup"

export default {
  title: "Design System/Components/Popup",
  component: Popup,
  argTypes: {},
} as Meta<typeof Popup>

const Template: StoryFn<typeof Popup> = (args) => <Popup {...args} />

export const Basic = Template.bind({})
Basic.args = {
  title: "Basic",
  children: (
    <>
      <Popup.MenuGroup groupLabel="Test">
        <Popup.MenuItem
          action={() => console.log("Clicked menu item")}
          label="Label A"
        />
        <Popup.MenuItem
          action={() => console.log("Clicked menu item")}
          label="Option B"
        />
        <Popup.MenuItem
          action={() => console.log("Clicked menu item")}
          label="Entry C"
        />
      </Popup.MenuGroup>
      <Popup.MenuGroup groupLabel="Group 2">
        <Popup.MenuItem
          action={() => console.log("Clicked menu item")}
          label="mailto:max.m@muster.de"
        />
      </Popup.MenuGroup>
    </>
  ),
}

import { ComponentMeta, ComponentStory } from "@storybook/react"

import SidebarPopupEntry from "./SidebarPopupEntry"

export default {
  title: "Design System/Components/SidebarPopupEntry",
  component: SidebarPopupEntry,
  argTypes: {},
} as ComponentMeta<typeof SidebarPopupEntry>

const Template: ComponentStory<typeof SidebarPopupEntry> = (args) => <SidebarPopupEntry {...args} />

export const TitleAndIcon = Template.bind({})
TitleAndIcon.args = {
  buttonTitle: "Title",
  buttonIcon: <>x</>,
  popupTitle: "Popup Title",
  children: <div>1</div>,
}

export const TitleOnly = Template.bind({})
TitleOnly.args = {
  buttonTitle: "Title",
  popupTitle: "Basic Popup",
  children: <div>1</div>,
}

export const IconOnly = Template.bind({})
IconOnly.args = {
  buttonTitle: "x",
  popupTitle: "Basic Popup",
  children: <div>1</div>,
}

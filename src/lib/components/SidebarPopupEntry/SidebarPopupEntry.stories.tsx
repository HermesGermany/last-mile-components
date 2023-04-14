import { ComponentMeta, ComponentStory } from "@storybook/react"

import Icon from "./Icon"

import SidebarPopupEntry from "./SidebarPopupEntry"

export default {
  title: "Design System/Components/SidebarPopupEntry",
  component: SidebarPopupEntry,
  argTypes: {},
} as ComponentMeta<typeof SidebarPopupEntry>

const Template: ComponentStory<typeof SidebarPopupEntry> = (args) => (
  <div className="w-16">
    <SidebarPopupEntry {...args} />
  </div>
)

export const TitleAndIcon = Template.bind({})
TitleAndIcon.args = {
  buttonTitle: "Title",
  buttonIcon: <Icon />,
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
  buttonIcon: <Icon />,
  popupTitle: "Basic Popup",
  children: <div>1</div>,
}

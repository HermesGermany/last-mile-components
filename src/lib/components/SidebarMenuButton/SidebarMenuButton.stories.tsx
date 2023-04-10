import { ComponentMeta, ComponentStory } from "@storybook/react"
import AppsIcon from "../BurgerMenu/AppsIcon"

import SidebarMenuButton from "./SidebarMenuButton"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Components/SidebarMenuButton",
  component: SidebarMenuButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SidebarMenuButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SidebarMenuButton> = (args) => <SidebarMenuButton {...args} />

export const TitleAndIcon = Template.bind({})
TitleAndIcon.args = {
  title: "Title",
  icon: <AppsIcon />,
}

export const TitleOnly = Template.bind({})
TitleOnly.args = {
  title: "Title",
}

export const IconOnly = Template.bind({})
IconOnly.args = {
  icon: <AppsIcon />,
}

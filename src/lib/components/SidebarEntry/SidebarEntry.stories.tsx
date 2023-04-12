import { ComponentMeta, ComponentStory } from "@storybook/react"
import MenuIcon from "../Sidebar/MenuIcon"
import SidebarEntry from "./SidebarEntry"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Components/SidebarEntry",
  component: SidebarEntry,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SidebarEntry>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SidebarEntry> = (args) => (
  <SidebarEntry {...args} />
)

export const TitleAndIcon = Template.bind({})
TitleAndIcon.args = {
  title: "Title",
  icon: <MenuIcon />,
  onClick: () => console.log("Tets"),
}

export const TitleOnly = Template.bind({})
TitleOnly.args = {
  title: "Title",
}

export const IconOnly = Template.bind({})
IconOnly.args = {
  icon: <MenuIcon />,
}

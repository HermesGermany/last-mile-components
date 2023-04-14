import { ComponentMeta, ComponentStory } from "@storybook/react"
import SidebarMenu from "./SidebarMenu"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Components/SidebarMenu",
  component: SidebarMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SidebarMenu>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SidebarMenu> = (args) => (
  <SidebarMenu {...args} />
)

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {}

import { Meta, StoryFn } from "@storybook/react"
import SidebarButton from "../../../components/SidebarButton"
import AppsIcon from "./AppsIcon"
import AppsMenu from "./AppsMenu"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Components/AppsMenu",
  component: AppsMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof AppsMenu>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof AppsMenu> = (args) => (
  <div className="w-14">
    <AppsMenu {...args} />
  </div>
)

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  children: (
    <div className="grid grid-cols-2 grid-rows-2 gap-2 bg-gray-600">
      <SidebarButton icon={<AppsIcon />} />
      <SidebarButton icon={<AppsIcon />} />
      <SidebarButton icon={<AppsIcon />} />
      <SidebarButton icon={<AppsIcon />} />
    </div>
  ),
}

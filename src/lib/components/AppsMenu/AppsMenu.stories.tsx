import { Meta, StoryFn } from "@storybook/react"
import appsIcon from "./appsIcon.svg"
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
  popoverTitle: "Hermes Apps",
  apps: [
    {
      icon: appsIcon,
      label: "Test",
      href: "https://google.de",
    },
    {
      icon: appsIcon,
      label: "Test",
      href: "https://google.de",
    },
    {
      icon: appsIcon,
      label: "Test",
      href: "https://google.de",
    },
    {
      icon: appsIcon,
      label: "Test",
      href: "https://google.de",
    },
  ],
}

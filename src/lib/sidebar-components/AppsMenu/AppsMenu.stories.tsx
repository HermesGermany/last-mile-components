import { Meta, StoryFn } from "@storybook/react"
import { appsList } from "../../../storybook-helper-components/appsList"
import BlueContainer from "../../../storybook-helper-components/BlueContainer"
import AppsMenu from "./AppsMenu"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Sidebar Components/AppsMenu",
  component: AppsMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    apps: {
      description: `The apps that will be displayed in the popover
      

    LinkedApp: {
      label: string
      href: string
      icon?: string
    }`,
    },
  },
} as Meta<typeof AppsMenu>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof AppsMenu> = (args) => {
  return (
    <BlueContainer>
      <div className="tw-w-16">
        <AppsMenu {...args} />
      </div>
    </BlueContainer>
  )
}

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  popoverTitle: "Hermes Apps",
  apps: appsList,
}

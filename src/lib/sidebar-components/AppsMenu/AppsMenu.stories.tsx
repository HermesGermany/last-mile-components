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
    popoverTitle: {
      description: "Title that gets displayed at the top of the popover.",
    },
    apps: {
      description:
        "List of Apps that should be displayed in the Popover. It includes label, icon and hyperlink to the app.",
      table: {
        type: {
          summary: "LinkedApp[]",
          detail: `
type LinkedApp = {
  label: string
  href: string
  icon?: string
}
`,
        },
      },
    },
    buttonProps: {
      description: "See SidebarEntry Docs",
      table: {
        type: {
          summary: null,
        },
      },
    },
  },
} as Meta<typeof AppsMenu>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof AppsMenu> = (args) => {
  return (
    <div className="tw-h-96">
      <BlueContainer>
        <div className="tw-w-16">
          <AppsMenu {...args} />
        </div>
      </BlueContainer>
    </div>
  )
}

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  popoverTitle: "Hermes Apps",
  apps: appsList,
  buttonProps: {},
}

import { Meta, StoryFn } from "@storybook/react"
import BlueContainer from "../../../storybook-helper-components/BlueContainer"
import { BurgerMenuEntries } from "../../../storybook-helper-components/BurgerMenuEntries"
import BurgerMenu from "./BurgerMenu"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Sidebar Components/BurgerMenu",
  component: BurgerMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    buttonProps: {
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
  },
} as Meta<typeof BurgerMenu>

const Template: StoryFn<typeof BurgerMenu> = (args) => (
  <BlueContainer>
    <div className="tw-w-14">
      <BurgerMenu {...args} />
    </div>
  </BlueContainer>
)

export const Basic = Template.bind({})
Basic.args = {
  buttonProps: {
    title: "Basic Example",
  },
  children: <div>Basic</div>,
}

export const WithMenuGroupsAndItems = Template.bind({})
WithMenuGroupsAndItems.args = {
  buttonProps: {},
  children: <BurgerMenuEntries />,
}

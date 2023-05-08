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
      description: "See SidebarEntry Docs",
      table: {
        type: {
          summary: null,
        },
      },
    },
    children: {
      description:
        "If you'd like to use the suggested Group and Item layout, see Popover Docs",
      table: {
        type: {
          summary: "ReactNode",
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

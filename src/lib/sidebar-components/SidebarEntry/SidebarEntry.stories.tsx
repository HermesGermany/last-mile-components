import { Meta, StoryFn } from "@storybook/react"
import BlueContainer from "../../../storybook-helper-components/BlueContainer"
import MenuIcon from "../BurgerMenu/MenuIcon"
import SidebarEntry from "./SidebarEntry"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Sidebar Components/SidebarEntry",
  component: SidebarEntry,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: {
      description: "The onClick event handler.",
      table: {
        type: {
          summary: "MouseEventHandler<HTMLButtonElement>",
        },
      },
    },
  },
} as Meta<typeof SidebarEntry>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SidebarEntry> = (args) => (
  <BlueContainer>
    <div className="tw-w-14">
      <SidebarEntry {...args} />
    </div>
  </BlueContainer>
)

export const TitleAndIcon = Template.bind({})
TitleAndIcon.args = {
  label: "Title",
  icon: <MenuIcon />,
  onClick: () => console.log("Tets"),
}

export const TitleOnly = Template.bind({})
TitleOnly.args = {
  label: "Title",
}

export const IconOnly = Template.bind({})
IconOnly.args = {
  icon: <MenuIcon />,
}

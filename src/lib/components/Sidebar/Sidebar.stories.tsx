import { Meta, StoryFn } from "@storybook/react"

import { SidebarEntry } from "../SidebarEntry"

import CarIcon from "./CarIcon"

import { BurgerMenu } from "../BurgerMenu"
import { Popover } from "../Popover"
import Sidebar from "./Sidebar"
import ZSBIcon from "./ZSBIcon"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Components/Sidebar",
  component: Sidebar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Sidebar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  title: "Test",
  imgSrc: "https://placehold.jp/150x150.png",
}

export const FullExample = Template.bind({})

FullExample.args = {
  title: "Logo",
  imgSrc: "https://placehold.jp/75x75.png",
  children: (
    <>
      <SidebarEntry
        label="Dispo"
        icon={<ZSBIcon />}
        onClick={() => alert("Clicked!")}
      />
      <SidebarEntry
        label="Touren"
        icon={<CarIcon />}
        onClick={() => alert("Clicked!")}
      />
    </>
  ),
  footer: (
    <div className="p-1.5">
      <BurgerMenu>
        <Popover.MenuGroup groupLabel="Group 1">
          <Popover.MenuItem label="Test" action={() => alert("Clicked")} />
          <Popover.MenuItem label="Test" action={() => alert("Clicked")} />
          <Popover.MenuItem label="Test" action={() => alert("Clicked")} />
          <Popover.MenuItem label="Test" action={() => alert("Clicked")} />
        </Popover.MenuGroup>
        <Popover.MenuGroup groupLabel="Group 2">
          <Popover.MenuItem label="Test" action={() => alert("Clicked")} />
        </Popover.MenuGroup>
        <Popover.MenuGroup groupLabel="Group 3">
          <Popover.MenuItem label="Test" action={() => alert("Clicked")} />
        </Popover.MenuGroup>
      </BurgerMenu>
    </div>
  ),
}

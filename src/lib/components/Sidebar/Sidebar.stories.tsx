import { Meta, StoryFn } from "@storybook/react"
import { Popup } from "../Popup"
import { SidebarEntry } from "../SidebarEntry"
import { SidebarPopupEntry } from "../SidebarPopupEntry"
import CarIcon from "./CarIcon"
import MenuIcon from "./MenuIcon"
import Sidebar from "./Sidebar"

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
      <SidebarEntry label="Dispo" onClick={() => alert("Clicked!")} />
      <SidebarEntry
        label="Touren"
        icon={<CarIcon />}
        onClick={() => alert("Clicked!")}
      />
    </>
  ),
  footer: (
    <div className="p-2">
      <SidebarPopupEntry buttonIcon={<MenuIcon />}>
        <Popup.MenuGroup groupLabel="Test">
          <Popup.MenuItem
            action={() => console.log("Clicked menu item")}
            label="Label A"
          />
          <Popup.MenuItem
            action={() => console.log("Clicked menu item")}
            label="Option B"
          />
          <Popup.MenuItem
            action={() => console.log("Clicked menu item")}
            label="Entry C"
          />
        </Popup.MenuGroup>
        <Popup.MenuGroup groupLabel="Group 2">
          <Popup.MenuItem
            action={() => console.log("Clicked menu item")}
            label="mailto:max.m@muster.de"
          />
        </Popup.MenuGroup>
      </SidebarPopupEntry>
    </div>
  ),
}

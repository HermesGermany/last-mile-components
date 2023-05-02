import { Meta, StoryFn } from "@storybook/react"
import { appsList } from "../../../storybook-helper-components/appsList"
import SearchIcon from "../../../storybook-helper-components/assets/SearchIcon"
import StarIcon from "../../../storybook-helper-components/assets/StarIcon"
import { AppsMenu } from "../AppsMenu"
import { BurgerMenu } from "../BurgerMenu"
import { Popover } from "../Popover"
import { SidebarEntry } from "../SidebarEntry"
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
Basic.args = { imgTitle: "Basic" }

export const FullExample = Template.bind({})

FullExample.args = {
  title: "Logo",
  imgTitle: "My Company",
  imgSrc:
    "https://placehold.jp/ffffff/0091cd/80x80.png?css=%7B%22border-radius%22%3A%225px%22%7D",
  children: (
    <>
      <SidebarEntry
        label="Star"
        icon={<StarIcon />}
        onClick={() => alert("Clicked!")}
      />
      <SidebarEntry
        label="Search"
        icon={<SearchIcon />}
        onClick={() => alert("Clicked!")}
      />
    </>
  ),
  footer: (
    <>
      <AppsMenu popoverTitle="Andere Apps" apps={appsList} />
      <BurgerMenu>
        <Popover.MenuGroup groupLabel="Group 1">
          <Popover.MenuItem
            label="Menu item short 1"
            action={() => alert("Clicked")}
          />
          <Popover.MenuItem
            label="Menu item short 2"
            action={() => alert("Clicked")}
          />
          <Popover.MenuItem
            label="Menu item with long text"
            action={() => alert("Clicked")}
          />
          <Popover.MenuItem
            label="Menu item with very very long text"
            action={() => alert("Clicked")}
          />
        </Popover.MenuGroup>
        <Popover.MenuGroup groupLabel="Group 2">
          <Popover.MenuItem
            label="Menu item short 3"
            action={() => alert("Clicked")}
          />
        </Popover.MenuGroup>
        <Popover.MenuGroup groupLabel="Group 3">
          <Popover.MenuItem
            label="Menu item short 4"
            action={() => alert("Clicked")}
          />
        </Popover.MenuGroup>
      </BurgerMenu>
    </>
  ),
}

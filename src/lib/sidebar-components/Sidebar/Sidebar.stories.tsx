import { Meta, StoryFn } from "@storybook/react"
import { appsList } from "../../../storybook-helper-components/appsList"
import SearchIcon from "../../../storybook-helper-components/assets/SearchIcon"
import StarIcon from "../../../storybook-helper-components/assets/StarIcon"
import { AppsMenu } from "../AppsMenu"
import { BurgerMenu } from "../BurgerMenu"
import { Feedback } from "../Feedback"
import { Popover } from "../Popover"
import { SidebarEntry } from "../SidebarEntry"
import Sidebar from "./Sidebar"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Sidebar Components/Sidebar",
  component: Sidebar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Sidebar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Sidebar> = (args) => (
  <div className="tw-h-screen tw-max-h-[600px]">
    <Sidebar {...args} />
  </div>
)

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = { imgTitle: "Basic" }

export const FullExample = Template.bind({})

FullExample.args = {
  title: "Logo",
  imgTitle: "My Company",
  imgSrc:
    "https://placehold.jp/20/ffffff/0091cd/80x80.png?text=Logo&css=%7B%22border-radius%22%3A%225px%22%7D",
  topComponents: (
    <>
      <SidebarEntry
        active
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
  bottomComponents: (
    <>
      <Feedback
        onSubmit={() =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve(true)
            }, 1000)
          })
        }
      />
      <AppsMenu popoverTitle="Andere Apps" apps={appsList} />
      <BurgerMenu buttonProps={{ showNotification: true }}>
        <Popover.MenuGroup groupLabel="Group 1">
          <Popover.MenuItem
            label="Menu item short 1"
            onClick={() => alert("Clicked")}
          />
          <Popover.MenuItem
            label="Menu item short 2"
            onClick={() => alert("Clicked")}
          />
          <Popover.MenuItem
            label="Menu item with long text"
            onClick={() => alert("Clicked")}
            showNotification
          />
          <Popover.MenuItem
            label="Menu item with very very long text"
            onClick={() => alert("Clicked")}
          />
        </Popover.MenuGroup>
        <Popover.MenuGroup groupLabel="Group 2">
          <Popover.MenuItem
            label="Menu item short 3"
            onClick={() => alert("Clicked")}
          />
        </Popover.MenuGroup>
        <Popover.MenuGroup groupLabel="Group 3">
          <Popover.MenuItem
            label="Menu item short 4"
            onClick={() => alert("Clicked")}
          />
        </Popover.MenuGroup>
      </BurgerMenu>
    </>
  ),
}

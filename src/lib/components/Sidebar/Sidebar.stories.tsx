import { Meta, StoryFn } from "@storybook/react"

import { AppsMenu } from "../AppsMenu"
import { BurgerMenu } from "../BurgerMenu"
import { Popover } from "../Popover"
import { SidebarEntry } from "../SidebarEntry"
import CarIcon from "./assets/CarIcon"
import ghost from "./assets/ghost.svg"
import kiwi from "./assets/kiwi.svg"
import pizza from "./assets/pizza.svg"
import wholeApple from "./assets/wholeApple.svg"
import ZSBIcon from "./assets/ZSBIcon"
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
  imgSrc:
    "https://placehold.jp/ffffff/0091cd/44x44.png?css=%7B%22border-radius%22%3A%225px%22%7D",
}

export const FullExample = Template.bind({})

export const appsList = [
  {
    icon: wholeApple,
    label: "My Fruit Application",
    href: "https://google.de",
  },
  {
    icon: ghost,
    label: "Ghost App",
    href: "https://google.de",
  },
  {
    icon: pizza,
    label: "Delivery Helper",
    href: "https://google.de",
  },
  {
    icon: kiwi,
    label: "Kiwi Bird Paradise",
    href: "https://google.de",
  },
]

FullExample.args = {
  title: "Logo",
  imgSrc:
    "https://placehold.jp/ffffff/0091cd/80x80.png?css=%7B%22border-radius%22%3A%225px%22%7D",
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
    <>
      <AppsMenu popoverTitle="Andere Apps" apps={appsList} />
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
    </>
  ),
}

import { Meta, StoryFn } from "@storybook/react"
import BurgerMenu from "./BurgerMenu"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Components/BurgerMenu",
  component: BurgerMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof BurgerMenu>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BurgerMenu> = (args) => (
  <div className="w-14">
    <BurgerMenu {...args} />
  </div>
)

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  buttonProps: {},
  children: <div className="">Beispielinhalt</div>,
}

export const WithSomeItems = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithSomeItems.args = {}

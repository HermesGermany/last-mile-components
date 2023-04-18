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
  <div className="flex h-screen w-full items-center justify-center">
    <div className="w-14">
      <BurgerMenu {...args} />
    </div>
  </div>
)

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  buttonProps: {},
  children: (
    <div className="">
      Beispielinhalt
      <br />
      Zeile 2
    </div>
  ),
}

export const WithSomeItems = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithSomeItems.args = {
  children: (
    <div className="">
      Beispielinhalt
      <br />
      Zeile 2
    </div>
  ),
}

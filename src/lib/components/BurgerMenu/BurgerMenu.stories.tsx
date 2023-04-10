import { ComponentMeta, ComponentStory } from "@storybook/react"
import BurgerMenu from "./BurgerMenu"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Components/BurgerMenu",
  component: BurgerMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BurgerMenu>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BurgerMenu> = (args) => <BurgerMenu {...args} />

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {}

export const WithSomeItems = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithSomeItems.args = {
  menuItems: [
    { content: "hello" },
    {
      content: (
        <div className="flex justify-between">
          <div>Useraccount</div>
          <div>hi</div>
        </div>
      ),
    },
  ],
}

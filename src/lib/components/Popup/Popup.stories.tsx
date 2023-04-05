import { ComponentMeta, ComponentStory } from "@storybook/react"

import Popup from "./Popup"

export default {
  title: "Design System/Components/Popup",
  component: Popup,
  argTypes: {},
} as ComponentMeta<typeof Popup>

const Template: ComponentStory<typeof Popup> = (args) => <Popup {...args} />

export const Basic = Template.bind({})
Basic.args = {
  title: "Basic",
  children: (
    <>
      <div>test</div>
      <div>safdsdaf</div>
    </>
  ),
}

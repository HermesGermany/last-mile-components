import { composeStories } from "@storybook/react"
import { act, render, screen } from "@testing-library/react"
import { appsList } from "../../../storybook-helper-components/appsList"
import * as stories from "./AppsMenu.stories"

const { Basic } = composeStories(stories)
const testId = "apps-menu"

it("renders", () => {
  const { getByTestId } = render(<Basic data-testid={testId} apps={[]} />)
  expect(getByTestId(testId)).toBeDefined()
})

it("renders with data", async () => {
  const { getByText } = render(<Basic />)
  act(() => {
    getByText("Apps").click()
  })

  for (const { label } of appsList) {
    expect(await screen.findByText(label)).toBeDefined()
  }
})

it("shows custom popover title", async () => {
  const customTitle = "The tales of foo and bar"
  const { getByText } = render(<Basic popoverTitle={customTitle} />)

  act(() => {
    getByText("Apps").click()
  })
  expect(await screen.findByText(customTitle)).toBeDefined()
})

it("passes the button props along to the button", async () => {
  const { getByTestId } = render(
    <Basic
      buttonProps={{
        "data-testid": "apps-button",
      }}
    />
  )
  expect(getByTestId("apps-button")).toBeDefined()
})

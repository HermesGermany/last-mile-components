import { composeStories } from "@storybook/react"
import { act, render } from "@testing-library/react"
import * as stories from "./stories/Popover.stories"

const { Basic } = composeStories(stories)

it("renders", () => {
  const { getByTestId } = render(<Basic data-testid="popover" />)
  expect(getByTestId("popover")).toBeDefined()
})

it("opens the Popover on click", async () => {
  const { getByTestId, findByTestId } = render(
    <Basic
      data-testid="popover"
      buttonProps={{ "data-testid": "popover-button" }}
    >
      <div data-testid="popover-content">Cool content</div>
    </Basic>
  )
  act(() => {
    getByTestId("popover-button").click()
  })

  expect(await findByTestId("popover-content")).toBeVisible()
})

it("passes buttonProps on to the button component correctly", async () => {
  const { getByText, findByTestId } = render(
    <Basic data-testid="popover" buttonProps={{ label: "Testbutton" }}>
      <div data-testid="popover-content">Cool content</div>
    </Basic>
  )
  act(() => {
    getByText("Testbutton").click()
  })

  expect(await findByTestId("popover-content")).toBeVisible()
})

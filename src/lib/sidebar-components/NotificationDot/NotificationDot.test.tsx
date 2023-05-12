import { render, screen } from "@testing-library/react"
import NotificationDot, { Props } from "./NotificationDot"

test("renders", () => {
  const { getByTestId } = render(
    <NotificationDot data-testid="notification-dot" />
  )
  expect(getByTestId("notification-dot")).toBeDefined()
})

describe("NotificationDot", () => {
  it("renders with default position (topRight)", () => {
    const dot = renderComponent({})
    expect(dot).toHaveStyle("top: 2px")
    expect(dot).toHaveStyle("right: 2px")
  })

  it("renders with innerLeft position", () => {
    const dot = renderComponent({ position: "innerLeft" })
    expect(dot).toHaveStyle("top: 0px")
    expect(dot).toHaveStyle("left: 7px")
    expect(dot).toHaveStyle("margin: auto 0")
  })

  it("renders with custom position", () => {
    const dot = renderComponent({
      position: "custom",
      customPosition: { top: 10, left: 20 },
    })
    expect(dot).toHaveStyle("top: 10px")
    expect(dot).toHaveStyle("left: 20px")
  })

  function renderComponent(props: Props): HTMLElement {
    render(<NotificationDot {...props} data-testid="notification-dot" />)
    return screen.getByTestId("notification-dot")
  }
})

import { fireEvent, render } from "@testing-library/react"
import { vi } from "vitest"
import SidebarEntry, { Props } from "./SidebarEntry"

test("renders", () => {
  const { getByTestId } = render(<SidebarEntry data-testid="sidebar-entry" />)
  expect(getByTestId("sidebar-entry")).toBeDefined()
})

describe("SidebarButton", () => {
  it("renders label correctly", () => {
    const label = "Test"
    const { getByText } = renderComponent({ label })
    const buttonLabel = getByText(label)
    expect(buttonLabel).toBeInTheDocument()
  })

  it("renders icon correctly", () => {
    const icon = <svg data-testid="test-icon" />
    const { getByTestId } = renderComponent({ icon })
    const testIcon = getByTestId("test-icon")
    expect(testIcon).toBeInTheDocument()
  })

  it("calls onClick function when clicked", () => {
    const onClick = vi.fn()
    const { getByTestId } = renderComponent({ onClick })
    const sidebarEntry = getByTestId("sidebar-entry")
    fireEvent.click(sidebarEntry)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("applies 'active' class when active prop is true", () => {
    const { getByTestId } = renderComponent({ active: true })
    const sidebarEntry = getByTestId("sidebar-entry")
    expect(sidebarEntry).toBeInTheDocument()
  })

  it("applies custom className correctly", () => {
    const className = "custom-class"
    const { getByTestId } = renderComponent({ className })
    const sidebarEntry = getByTestId("sidebar-entry")
    expect(sidebarEntry).toHaveClass(className)
  })

  it("shows notification dot when showNotification prop is true", () => {
    const { container } = renderComponent({ showNotification: true })
    const x = container.querySelectorAll(
      ".tw-rounded-full.tw-bg-hermes-orange-light"
    )[0]
    expect(x).toBeInTheDocument()
  })

  it("passes data attributes correctly", () => {
    const dataAttribute = "test-data"
    const { getByTestId } = renderComponent({ "data-test": dataAttribute })
    const sidebarEntry = getByTestId("sidebar-entry")
    expect(sidebarEntry).toHaveAttribute("data-test", dataAttribute)
  })

  function renderComponent(props: Props) {
    return render(<SidebarEntry {...props} data-testid="sidebar-entry" />)
  }
})

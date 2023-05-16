import { render } from "@testing-library/react"
import SidebarEntry from "./SidebarEntry"

it("renders", () => {
  const { getByTestId } = render(
    <SidebarEntry
      data-testid="sidebar-entry"
      onClick={() => console.log("Test")}
    />
  )
  expect(getByTestId("sidebar-entry")).toBeDefined()
})

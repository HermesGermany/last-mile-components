import { render } from "@testing-library/react"
import SidebarMenu from "./SidebarMenu"

test("renders", () => {
  const { getByTestId } = render(<SidebarMenu data-testid="sidebar-menu" />)
  expect(getByTestId("sidebar-menu")).toBeDefined()
})

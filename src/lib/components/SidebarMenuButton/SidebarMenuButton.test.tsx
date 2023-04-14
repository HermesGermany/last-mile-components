import { render } from "@testing-library/react"
import SidebarMenuButton from "./SidebarMenuButton"

test("renders", () => {
  const { getByTestId } = render(
    <SidebarMenuButton data-testid="sidebar-menu-button" />
  )
  expect(getByTestId("sidebar-menu-button")).toBeDefined()
})

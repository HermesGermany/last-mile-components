import { render } from "@testing-library/react"
import SidebarPopupEntry from "./SidebarPopupEntry"

test("renders", () => {
  const { getByTestId } = render(
    <SidebarPopupEntry data-testid="sidebar-popup-entry" />
  )
  expect(getByTestId("sidebar-popup-entry")).toBeDefined()
})

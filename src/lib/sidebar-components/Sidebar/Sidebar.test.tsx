import { render } from "@testing-library/react"
import Sidebar from "./Sidebar"

test("renders", () => {
  const { getByTestId } = render(
    <Sidebar imgTitle="Test" data-testid="sidebar" />
  )
  expect(getByTestId("sidebar")).toBeDefined()
})

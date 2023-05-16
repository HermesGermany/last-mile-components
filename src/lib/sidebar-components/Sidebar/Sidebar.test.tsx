import { render } from "@testing-library/react"
import Sidebar from "./Sidebar"

it("renders", () => {
  const { getByTestId } = render(
    <Sidebar imgTitle="Test" data-testid="sidebar" />
  )
  expect(getByTestId("sidebar")).toBeDefined()
})

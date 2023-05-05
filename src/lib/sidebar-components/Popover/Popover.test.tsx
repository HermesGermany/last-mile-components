import { render } from "@testing-library/react"

test("renders", () => {
  const { getByTestId } = render(<div data-testid="popover" />)
  expect(getByTestId("popover")).toBeDefined()
})

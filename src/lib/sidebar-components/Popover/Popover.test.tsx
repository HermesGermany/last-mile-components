import { render } from "@testing-library/react"

it("renders", () => {
  const { getByTestId } = render(<div data-testid="popover" />)
  expect(getByTestId("popover")).toBeDefined()
})

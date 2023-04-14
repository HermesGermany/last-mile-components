import { render } from "@testing-library/react"
import Popover from "./Popover"

test("renders", () => {
  const { getByTestId } = render(<Popover data-testid="popover" />)
  expect(getByTestId("popover")).toBeDefined()
})

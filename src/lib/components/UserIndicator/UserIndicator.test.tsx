import { render } from "@testing-library/react"
import UserIndicator from "./UserIndicator"

test("renders", () => {
  const { getByTestId } = render(<UserIndicator data-testid="user-indicator" />)
  expect(getByTestId("user-indicator")).toBeDefined()
})

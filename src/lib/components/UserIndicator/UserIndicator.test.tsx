import { render } from "@testing-library/react"
import UserIndicator from "./UserIndicator"

it("renders", () => {
  const { getByTestId } = render(<UserIndicator data-testid="user-indicator" />)
  expect(getByTestId("user-indicator")).toBeDefined()
})

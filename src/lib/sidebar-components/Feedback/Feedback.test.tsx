import { render } from "@testing-library/react"
import Feedback from "./Feedback"

it("renders", () => {
  const { getByTestId } = render(<Feedback data-testid="feedback" />)
  expect(getByTestId("feedback")).toBeDefined()
})

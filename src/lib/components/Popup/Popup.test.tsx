import { render } from "@testing-library/react"
import Popup from "./Popup"

test("renders", () => {
  const { getByTestId } = render(<Popup data-testid="popup" />)
  expect(getByTestId("popup")).toBeDefined()
})

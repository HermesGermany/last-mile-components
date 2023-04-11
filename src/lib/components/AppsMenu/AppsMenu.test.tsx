import { render } from "@testing-library/react"
import AppsMenu from "./AppsMenu"

test("renders", () => {
  const { getByTestId } = render(<AppsMenu data-testid="apps-menu" />)
  expect(getByTestId("apps-menu")).toBeDefined()
})

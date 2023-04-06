import { render } from "@testing-library/react"
import BurgerMenu from "./BurgerMenu"

test("renders", () => {
  const { getByTestId } = render(<BurgerMenu data-testid="burger-menu" />)
  expect(getByTestId("burger-menu")).toBeDefined()
})

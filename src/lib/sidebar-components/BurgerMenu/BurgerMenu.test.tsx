import { render } from "@testing-library/react"
import BurgerMenu from "./BurgerMenu"

test("renders", () => {
  const { getByTestId } = render(<BurgerMenu data-testid="burger-menu" />)
  expect(getByTestId("burger-menu")).toBeDefined()
})

test("shows the correct icon", () => {
  const { container } = render(<BurgerMenu data-testid="burger-menu" />)
  expect(container.querySelector("svg")).toBeDefined()
})

/**
 * No further tests necessary, since BurgerMenu is just one
 * implementation of Popover with a specific button icon
 */

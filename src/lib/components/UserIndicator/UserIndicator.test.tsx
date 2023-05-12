import { render, screen } from "@testing-library/react"
import UserIndicator from "./UserIndicator"

test("renders", () => {
  const { getByTestId } = render(<UserIndicator data-testid="user-indicator" />)
  expect(getByTestId("user-indicator")).toBeDefined()
})

describe.only("UserIndicator", () => {
  test("renders the user's initials", () => {
    renderUserIndicator()
    const initials = screen.getByText("MM")
    expect(initials).toBeDefined()
  })

  test("renders full name and username in title-attribute", () => {
    renderUserIndicator()
    const title = screen.getByTitle(
      "Eingeloggt als Max Mustermann (mustermaxx)"
    )
    expect(title).toBeDefined()
  })

  test("renders no initials when first and last name are not provided", () => {
    renderUserIndicator("", "")
    const initialsElement = screen.queryByText(/.+/) // Regex to match any text
    expect(initialsElement).toBeNull()
  })

  test("renders no initials when first and last name are not provided", () => {
    renderUserIndicator("", "")
    const title = screen.getByTitle(/Eingeloggt als\s+\(mustermaxx\)/) // Regex to match one or more whitespace chars
    expect(title).toBeDefined()
  })
})

function renderUserIndicator(
  firstName = "Max",
  lastName = "Mustermann",
  username = "mustermaxx"
) {
  render(
    <UserIndicator
      firstName={firstName}
      lastName={lastName}
      username={username}
    />
  )
}

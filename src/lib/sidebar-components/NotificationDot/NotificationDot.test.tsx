import { render } from "@testing-library/react"
import NotificationDot from "./NotificationDot"

it("renders", () => {
  const { getByTestId } = render(
    <NotificationDot data-testid="notification-dot" />
  )
  expect(getByTestId("notification-dot")).toBeDefined()
})

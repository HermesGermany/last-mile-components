import { render } from "@testing-library/react"
import NotificationDot from "./NotificationDot"

test("renders", () => {
  const { getByTestId } = render(
    <NotificationDot data-testid="notification-dot" description="test" />
  )
  expect(getByTestId("notification-dot")).toBeDefined()
})

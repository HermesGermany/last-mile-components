import { fireEvent, render } from "@testing-library/react"
import Feedback, { feedbackCategories } from "./Feedback"

it("renders", () => {
  const { getByTestId } = render(
    <Feedback
      data-testid="feedback"
      onSubmit={() => {
        console.log("ok")
        return Promise.resolve(true)
      }}
    />
  )
  expect(getByTestId("feedback")).toBeDefined()
})

it("calls the onSubmit function correctly", async () => {
  let called = false
  const { getByTestId, findByTestId } = render(
    <Feedback
      data-testid="feedback"
      onSubmit={() => {
        called = true
        return Promise.resolve(true)
      }}
    />
  )
  getByTestId("feedback").click()

  const button = await findByTestId(
    `feedback-category-${feedbackCategories[0]}`
  )
  button.click()

  const inputField = await findByTestId("feedback-text")
  fireEvent.change(inputField, {
    target: { value: "some input" },
  })
  getByTestId(`submit-button`).click()

  expect(called).toBe(true)
})

it("makes use of custom defaultText values", async () => {
  const customText = "This text should be displayed when clicked on 'Fehler'"
  const { getByTestId, findByTestId, findByText } = render(
    <Feedback
      data-testid="feedback"
      onSubmit={() => {
        return Promise.resolve(true)
      }}
      defaultText={{
        Fehler: customText,
      }}
    />
  )
  getByTestId("feedback").click()
  const button = await findByTestId(`feedback-category-Fehler`)
  button.click()

  expect(await findByText(customText)).toBeVisible()
})

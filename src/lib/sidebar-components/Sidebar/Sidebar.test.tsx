import { render } from "@testing-library/react"
import Sidebar, { Props } from "./Sidebar"

test("renders", () => {
  const { getByTestId } = render(
    <Sidebar imgTitle="Test" data-testid="sidebar" />
  )
  expect(getByTestId("sidebar")).toBeDefined()
})

describe("Sidebar", () => {
  it("renders the logo image when imgSrc is provided", () => {
    const imgSrc = "path/to/image.png"
    const imgTitle = "Logo"
    const { getByAltText, queryByText } = renderComponent({ imgSrc, imgTitle })
    const logoImage = getByAltText(imgTitle)

    expect(logoImage).toBeInTheDocument()
    expect(logoImage.getAttribute("src")).toBe(imgSrc)
    expect(logoImage.getAttribute("title")).toBe(imgTitle)
    expect(queryByText(imgTitle)).toBeNull()
  })

  it("renders the logo title when imgSrc is not provided", () => {
    const imgTitle = "Logo"
    const { getByText } = renderComponent({ imgTitle })
    const logoTitle = getByText(imgTitle)

    expect(logoTitle).toBeInTheDocument()
  })

  it("renders children", () => {
    const topComponents = "top child"
    const bottomComponents = "bottom child"
    const { getByText } = renderComponent({ topComponents, bottomComponents })
    const topContent = getByText(topComponents)
    const bottomContent = getByText(bottomComponents)

    expect(topContent).toBeInTheDocument()
    expect(bottomContent).toBeInTheDocument()
  })

  function renderComponent(props: Props) {
    return render(<Sidebar {...props} data-testid="sidebar" />)
  }
})

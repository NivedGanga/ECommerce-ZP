import { fireEvent, render, screen } from "@testing-library/react"
import ClickableText from "./clickableText"

const onClickMock = jest.fn()
describe("clickableText", () => {
    it("executes the passed onclick function", () => {
        render(<ClickableText text="test-button" onClick={onClickMock} />)
        const element = screen.getByText("test-button")
        fireEvent.click(element)
        expect(onClickMock).toHaveBeenCalled()
    })
    it("text color should be black if dimColor is false", () => {
        render(<ClickableText text="test-button" onClick={onClickMock} />)
        const element = screen.getByText("test-button")
        expect(element).toHaveStyle('color: rgb(0, 0, 0)')
    })
    it("text color should be grey if dimColor is true", () => {
        render(<ClickableText text="test-button" onClick={onClickMock} isDimColor />)
        const element = screen.getByText("test-button")
        expect(element).toHaveStyle('color: rgb(128, 128, 128)')
    })
})
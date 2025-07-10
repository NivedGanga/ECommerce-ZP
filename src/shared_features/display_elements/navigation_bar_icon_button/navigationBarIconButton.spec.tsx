import { fireEvent, render, screen } from "@testing-library/react"
import NavigationBarIconButton from "./navigationBarIconButton"
import { pushMock } from "jest.setup"

const onClickMock = jest.fn()

describe("navigationBarIconButton", () => {
    it("if onClick is passed, it should execute", () => {
        render(<NavigationBarIconButton onClick={onClickMock}>
            button
        </NavigationBarIconButton>)
        const element = screen.getByTestId('navigationbar-button')
        fireEvent.click(element)
        expect(onClickMock).toHaveBeenCalled()
    })

    it("if route is passed, it should navigate", () => {
        render(<NavigationBarIconButton route="/home">
            button
        </NavigationBarIconButton>)
        const element = screen.getByTestId('navigationbar-button')
        fireEvent.click(element)
        expect(pushMock).toHaveBeenCalledWith('/home')
    })

    it("if text is provided, it should show", () => {
        render(<NavigationBarIconButton route="/home" text="test">
            button
        </NavigationBarIconButton>)
        const element = screen.getByTestId('navigationbar-button-text')
        expect(element).toBeInTheDocument()
    })

    it("if isTilted is provided, it should be tilted", () => {
        render(<NavigationBarIconButton route="/home" text="test" tilted>
            button
        </NavigationBarIconButton>)
        const element = screen.getByTestId('navigationbar-button-icon')
        expect(element).toHaveStyle('transform: rotate(-30deg)')
    })
})
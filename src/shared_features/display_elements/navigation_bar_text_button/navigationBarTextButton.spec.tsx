import { fireEvent, render, screen } from "@testing-library/react"
import NavigationBarTextButton from "./navigationBarTextButton"
import { pushMock } from "jest.setup"

const onClickMock = jest.fn()

describe("navigationBarTextButton", () => {
    it("if onclick is passed, it should execute and route", () => {
        render(<NavigationBarTextButton route="/testroute" onClick={onClickMock} text="testbutton" />)
        const btn = screen.getByRole('button')
        fireEvent.click(btn)
        expect(pushMock).toHaveBeenCalled()
        expect(onClickMock).toHaveBeenCalled()
    })

    it("if onclick is not passed, it should only navigate", () => {
        render(<NavigationBarTextButton route="/testroute" text="testbutton" />)
        const btn = screen.getByRole('button')
        fireEvent.click(btn)
        expect(pushMock).toHaveBeenCalled()
    })

})
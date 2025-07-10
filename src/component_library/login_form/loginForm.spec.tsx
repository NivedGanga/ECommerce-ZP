import { act, fireEvent, render, screen } from "@testing-library/react"
import LoginForm from "./loginForm"

const useAuthServiceMock = jest.fn()
const sendEmailLinkServiceMock = jest.fn()

jest.mock("@/core_components/services/auth_service/useAuthService", () => ({
    useAuthService: () => useAuthServiceMock()
}))

describe("login form", () => {
    it("should not submit if the text field is emtpy", async () => {
        useAuthServiceMock.mockReturnValue({
            sendEmailLinkService: sendEmailLinkServiceMock
        })

        await act(async () => {
            render(<LoginForm />)
        })

        const submitButton = screen.getByTestId('styled-button')

        await act(async () => {
            fireEvent.click(submitButton)
        })

        expect(sendEmailLinkServiceMock).not.toHaveBeenCalled()
    })

    it("should submit if the text field is not emtpy", async () => {
        useAuthServiceMock.mockReturnValue({
            sendEmailLinkService: sendEmailLinkServiceMock
        })

        await act(async () => {
            render(<LoginForm />)
        })
        const inputElement = screen.getByRole('textbox')
        const emailMock = 'test@gmail.com'
        await act(async () => {
            fireEvent.change(inputElement, { target: { value: emailMock } })
        })
        const submitButton = screen.getByTestId('styled-button')

        await act(async () => {
            fireEvent.click(submitButton)
        })

        expect(sendEmailLinkServiceMock).toHaveBeenCalled()
    })
    it("should not submit if the text field is not emtpy but the email is not valid", async () => {
        useAuthServiceMock.mockReturnValue({
            sendEmailLinkService: sendEmailLinkServiceMock
        })

        await act(async () => {
            render(<LoginForm />)
        })
        const inputElement = screen.getByRole('textbox')
        const emailMock = 'test'

        await act(async () => {
            fireEvent.change(inputElement, { target: { value: emailMock } })
        })
        const submitButton = screen.getByTestId('styled-button')

        await act(async () => {
            fireEvent.click(submitButton)
        })

        expect(sendEmailLinkServiceMock).not.toHaveBeenCalled()
    })
})

import { act, fireEvent, render, screen } from "@testing-library/react"
import RegisterForm from "./registerForm"

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
            render(<RegisterForm />)
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
            render(<RegisterForm />)
        })
        const inputElement = screen.getAllByRole('textbox')
        const emailMock = 'test@gmail.com'
        const fullNameMock = 'test name'
        await act(async () => {
            fireEvent.change(inputElement[0], { target: { value: emailMock } })
            fireEvent.change(inputElement[1], { target: { value: fullNameMock } })
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
            render(<RegisterForm />)
        })
        const inputElement = screen.getAllByRole('textbox')
        const emailMock = 'test'
        const fullNameMock = 'test name'
        await act(async () => {
            fireEvent.change(inputElement[0], { target: { value: emailMock } })
            fireEvent.change(inputElement[1], { target: { value: fullNameMock } })
        })
        
        const submitButton = screen.getByTestId('styled-button')

        await act(async () => {
            fireEvent.click(submitButton)
        })

        expect(sendEmailLinkServiceMock).not.toHaveBeenCalled()
    })
})

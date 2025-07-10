import { render } from "@testing-library/react"
import AuthStatusCheck from "./authStatusCheck"
import { replaceMock } from "jest.setup"
import { User } from "firebase/auth"
import { mockFirebaseUser } from "@/core_components/services/__mocks__/mockUser"

const useAuthServiceMock = jest.fn()
const completeEmailLinkSignInMock = jest.fn()
const checkIsSignInWithEmailLinkMock = jest.fn()
const useCartItemsMock = jest.fn()
const useDispatchMock = jest.fn()
jest.mock('@/core_components/services/auth_service/useAuthService', () => ({
    useAuthService: () => useAuthServiceMock()
}))

jest.mock("../cart_items/useCartItems", () => ({
    useCartItems: () => useCartItemsMock()
}))

jest.mock("react-redux", () => ({
    useDispatch: () => useDispatchMock
}))

jest.mock("firebase/auth", () => ({
    updateProfile: jest.fn()
}))
useCartItemsMock.mockReturnValue({
    fetchCartItems: jest.fn()
})
useAuthServiceMock.mockReturnValue({
    completeEmailLinkSignIn: completeEmailLinkSignInMock,
    checkIsSignInWithEmailLink: checkIsSignInWithEmailLinkMock
})
describe("auth status check", () => {
    it("should replace route to '/' after successfull authentication", () => {
    
        checkIsSignInWithEmailLinkMock.mockImplementation((callback: () => void) => {
            callback()
        })
        completeEmailLinkSignInMock.mockImplementation(async (emailLink: string, onSuccess: (user: User) => void, onError: () => void) => {
            onSuccess(mockFirebaseUser)
            if (false) onError()
        })
        render(<AuthStatusCheck />)
        expect(replaceMock).toHaveBeenCalledWith('/')
    })
    it("should not reroute after incomplete authentication", () => {
        checkIsSignInWithEmailLinkMock.mockImplementation((callback: () => void) => {
            callback()
        })
        completeEmailLinkSignInMock.mockImplementation(async (emailLink: string, onSuccess: (user: User) => void, onError: () => void) => {
            onError()
        })
        render(<AuthStatusCheck />)
        expect(replaceMock).not.toHaveBeenCalledWith('/')
    })
})
import '@testing-library/jest-dom'

export const pushMock = jest.fn()
export const replaceMock = jest.fn()

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push:pushMock,
        replace: replaceMock
    })
}))
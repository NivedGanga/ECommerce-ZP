import '@testing-library/jest-dom'

export const pushMock = jest.fn()

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: pushMock
    })
}))
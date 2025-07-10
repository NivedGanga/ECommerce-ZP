import { fireEvent, screen, waitFor } from "@testing-library/dom"
import { render } from "@testing-library/react"
import SearchBar from "./searchBar"
import { mockAutoComplete } from "@/core_components/services/__mocks__/mockAutoComplete"

const autoCompleteMock = jest.fn()
const useSearchBarMock = jest.fn()
const mockPush = jest.fn()

jest.mock('./useSearchbar', () => ({
    useSearchBar: () => useSearchBarMock()
}))

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: mockPush
    })
}))


describe("search bar", () => {
    beforeEach(() => {
        autoCompleteMock.mockClear()
        useSearchBarMock.mockClear()
        mockPush.mockClear()
        jest.clearAllTimers()
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.runOnlyPendingTimers()
        jest.useRealTimers()
    })

    it("should debounce autocomplete calls with 300ms delay", async () => {
        useSearchBarMock.mockReturnValue({
            autoComplete: autoCompleteMock,
            loading: false,
            suggestions: []
        })

        render(<SearchBar />)
        const inputBox = screen.getByRole('textbox')
        fireEvent.focus(inputBox)
        fireEvent.change(inputBox, { target: { value: 't' } })
        fireEvent.change(inputBox, { target: { value: 'te' } })
        fireEvent.change(inputBox, { target: { value: 'test' } })

        expect(autoCompleteMock).not.toHaveBeenCalled()
        jest.advanceTimersByTime(300)

        expect(autoCompleteMock).toHaveBeenCalledTimes(1)
        expect(autoCompleteMock).toHaveBeenCalledWith('test')
    })

    it("should show loading state when loading is true", async () => {
        useSearchBarMock.mockReturnValue({
            autoComplete: autoCompleteMock,
            loading: true,
            suggestions: []
        })

        render(<SearchBar />)
        const inputBox = screen.getByRole('textbox')
        fireEvent.focus(inputBox)

        await waitFor(() => {
            const loadingElement = screen.getByText('Loading...')
            expect(loadingElement).toBeInTheDocument()
        })
    })

    it("should show suggestions when they are available", async () => {
        useSearchBarMock.mockReturnValue({
            autoComplete: autoCompleteMock,
            loading: false,
            suggestions: mockAutoComplete
        })

        render(<SearchBar />)
        const inputBox = screen.getByRole('textbox')
        fireEvent.focus(inputBox)

        await waitFor(() => {
            const dropdown = screen.getByTestId('search-results')
            expect(dropdown).toBeInTheDocument()
        })

        await waitFor(() => {
            mockAutoComplete.forEach(suggestion => {
                const suggestionElement = screen.getByText(suggestion.searchTerm)
                expect(suggestionElement).toBeInTheDocument()
            })
        })
    })

    it("should navigate to products page when suggestion is clicked", async () => {
        useSearchBarMock.mockReturnValue({
            autoComplete: autoCompleteMock,
            loading: false,
            suggestions: mockAutoComplete
        })

        render(<SearchBar />)
        const inputBox = screen.getByRole('textbox')

        fireEvent.focus(inputBox)

        await waitFor(() => {
            const firstSuggestion = screen.getByText('laptop')
            fireEvent.click(firstSuggestion)
            expect(mockPush).toHaveBeenCalledWith('/products/laptop')
        })
    })

    it("should hide dropdown when clicking outside", async () => {
        useSearchBarMock.mockReturnValue({
            autoComplete: autoCompleteMock,
            loading: false,
            suggestions: mockAutoComplete
        })

        render(<SearchBar />)
        const inputBox = screen.getByRole('textbox')

        fireEvent.focus(inputBox)

        await waitFor(() => {
            const dropdown = screen.getByTestId('search-results')
            expect(dropdown).toBeInTheDocument()
        })

        fireEvent.mouseDown(document.body)

        await waitFor(() => {
            const dropdown = screen.queryByTestId('search-results')
            expect(dropdown).not.toBeInTheDocument()
        })
    })

    it("should not show dropdown when there are no suggestions and not loading", async () => {
        useSearchBarMock.mockReturnValue({
            autoComplete: autoCompleteMock,
            loading: false,
            suggestions: []
        })

        render(<SearchBar />)
        const inputBox = screen.getByRole('textbox')

        fireEvent.focus(inputBox)

        const dropdown = screen.queryByTestId('search-results')
        expect(dropdown).not.toBeInTheDocument()
    })

    it("should clear previous timeout when user types again", async () => {
        useSearchBarMock.mockReturnValue({
            autoComplete: autoCompleteMock,
            loading: false,
            suggestions: []
        })

        render(<SearchBar />)
        const inputBox = screen.getByRole('textbox')

        fireEvent.change(inputBox, { target: { value: 'test1' } })
        jest.advanceTimersByTime(100)

        fireEvent.change(inputBox, { target: { value: 'test2' } })
        jest.advanceTimersByTime(300)

        expect(autoCompleteMock).toHaveBeenCalledTimes(1)
        expect(autoCompleteMock).toHaveBeenCalledWith('test2')
    })
})
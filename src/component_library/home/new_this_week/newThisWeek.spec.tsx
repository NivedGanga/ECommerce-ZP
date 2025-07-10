import { render, screen, waitFor } from "@testing-library/react"
import NewThisWeekComponent from "./newThisWeek"
import { mockProducts } from "@/core_components/services/__mocks__/mockProducts"

const useNewThisWeekMock = jest.fn()
const fetchNewThisWeekMock = jest.fn()
jest.mock('./useNewThisWeek', () => ({
    useNewThisWeek: () => useNewThisWeekMock()
}))

jest.mock('./loading/loadingNewThisWeek', () => {
    return function LoadingNewThisWeek() {
        return <div data-testid='new-this-week-loading'> loading</div >
    }
})

jest.mock('@/component_library/carousel/carouselSection', () => {
    return function CarouselSection() {
        return <div data-testid='new-this-week-carousel' >CarouselSection</div>
    }
})

describe("newThisWeek", () => {
    it("should call fetchNewThisWeek while mounting", async () => {
        useNewThisWeekMock.mockReturnValue({
            fetchNewThisWeek: fetchNewThisWeekMock,
            products: [],
            loading: false
        })
        render(<NewThisWeekComponent />)
        await waitFor(() => {
            expect(fetchNewThisWeekMock).toHaveBeenCalled()
        })
    })
    it("should show loading while fetching", async () => {
        useNewThisWeekMock.mockReturnValue({
            fetchNewThisWeek: fetchNewThisWeekMock,
            products: [],
            loading: true
        })
        render(<NewThisWeekComponent />)
        await waitFor(() => {
            const loadingElement = screen.getByTestId('new-this-week-loading')
            expect(loadingElement).toBeInTheDocument()
        })
    })
    it("should show carousel if fetching is completed successfully", async () => {
        useNewThisWeekMock.mockReturnValue({
            fetchNewThisWeek: fetchNewThisWeekMock,
            products: mockProducts,
            loading: false
        })
        render(<NewThisWeekComponent />)
        await waitFor(() => {
            const carouselElement = screen.getByTestId('new-this-week-carousel')
            expect(carouselElement).toBeInTheDocument()
        })
    })
})
import { mockProducts } from "@/core_components/services/__mocks__/mockProducts"
import { screen, waitFor } from "@testing-library/dom"
import { render } from "@testing-library/react"
import LandingGallery from "./landingGallery"

const useLandingGalleryMock = jest.fn()

jest.mock('./useLandingGallery', () => ({
    useLandingGallery: () => useLandingGalleryMock()
}))

jest.mock('@/shared_features/display_elements/item_show_card/itemShowCard', () => {
    return function ItemShowCardMock() {
        return <div data-testid='product-show-card'>item show card</div>
    }
})

jest.mock('@/core_components/utils/constants/constants', () => ({
    ...jest.requireActual('@/core_components/utils/constants/constants'),
    noImageUrl: 'test-no-image-url.jpg'
}))

describe("Landing Gallery", () => {
    beforeEach(() => {
        useLandingGalleryMock.mockClear()
    })

    it("should show loading if fetching is pending", async () => {
        useLandingGalleryMock.mockReturnValue({
            fetchGallery: jest.fn(),
            loading: true,
            products: []
        })
        render(<LandingGallery />)
        await waitFor(() => {
            const loadingElement = screen.getByTestId('gallery-loading')
            expect(loadingElement).toBeInTheDocument()
        })
    })

    it("should show products when fetching completes", async () => {
        useLandingGalleryMock.mockReturnValue({
            fetchGallery: jest.fn(),
            loading: false,
            products: mockProducts
        })

        render(<LandingGallery />)

        await waitFor(() => {
            const productCards = screen.getAllByTestId('product-show-card')
            expect(productCards.length).toEqual(2)
        })
    })

    it("should show no image placeholders if the api call fails", async () => {
        useLandingGalleryMock.mockReturnValue({
            fetchGallery: jest.fn(),
            loading: false,
            products: []
        })

        render(<LandingGallery />)

        await waitFor(() => {
            const productCards = screen.getAllByTestId('product-show-card')
            expect(productCards.length).toEqual(2)
        })
    })
})
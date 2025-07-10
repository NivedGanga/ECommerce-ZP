import { act, render, screen } from "@testing-library/react"
import CarouselSection from "./carouselSection"
import { ProductModel } from "@/core_components/models/product_model/productModel"
import { mockProducts } from '@/core_components/services/__mocks__/mockProducts'

jest.mock('@/shared_features/display_elements/item_card/itemCard', () => {
    return function MockItemCard({ product }: { product: ProductModel }) {
        return (
            <div data-testid={`item-card-${product.pid}`}>
                <span>{product.name}</span>
            </div>
        )
    }
})


jest.mock('@/shared_features/display_elements/carousel_transition_button/carouselTransitionButton', () => {
    return <div>
        <button data-testid='carousel-previous-button'>

        </button>
        <button>

        </button>
    </div>
})

describe("CarouselSection", () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })
    it("previous button should be disabled initially", async () => {
       await act(async () => {
            render(<CarouselSection products={mockProducts} />)
        })
        // const component = screen.queryByTestId('carousel-previous-button')
        screen.debug(undefined, Infinity)

        // expect(component).not.toBeInTheDocument()
    })
})
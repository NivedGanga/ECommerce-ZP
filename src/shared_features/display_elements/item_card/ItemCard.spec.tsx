import { ProductModel } from "@/core_components/models/product_model/productModel"
import { fireEvent, render, screen } from "@testing-library/react"
import ItemCard from "./itemCard"

const mockProduct: ProductModel = {
    brandName: 'test brand name',
    color: 'test color',
    name: 'test name',
    pid: 123,
    currentPrice: 99.9
}

const pushMock = jest.fn()

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: pushMock
    })
}))

jest.mock('@/component_library/wishlist_items/useWishlistItems', () => ({
    useWishlistItems: () => ({
        addItem: jest.fn(),
        removeItem: jest.fn()
    })
}))

jest.mock('@/core_components/services/wishlist_service/useWishlist', () => ({
    useWishlist: () => ({
        addItemToWishList: jest.fn(),
        getWishlistItems: jest.fn(),
        removeItemFromWishlist: jest.fn()
    })
}))

jest.mock('react-redux', () => ({
    useSelector: jest.fn(() => null),
    useDispatch: jest.fn(() => jest.fn())
}))

jest.mock('../wishlist_icon_button/wishlistIconButton', () => {
    return function MockWishlistIconButton() {
        return <div data-testid="wishlist-button">Wishlist</div>
    }
})

jest.mock('../item_show_card/itemShowCard', () => {
    return function MockItemShowCard() {
        return <div data-testid="item-show-card">Item Image</div>
    }
})

describe("ItemCard", () => {
    it("card action area is navigating to view/{pid}", () => {
        render(<ItemCard product={mockProduct} />)
        const element = screen.getByTestId('action-area')
        fireEvent.click(element)
        expect(pushMock).toHaveBeenCalledWith('/view/123')
    })
})
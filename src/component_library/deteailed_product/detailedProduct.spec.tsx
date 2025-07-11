import { render, screen } from "@testing-library/react"
import DetailedProduct from "./detailedProduct"
import { mockDetailedProduct } from "@/core_components/services/__mocks__/mockDetailedProduct"
// import { pushMock } from "jest.setup"
// import { IRootState } from "@/core_components/redux/store"
// import { initialCartState } from "@/core_components/redux/slices/cart_slice/cartSlice"
// import { initialHomeState } from "@/core_components/redux/slices/home_slice/homeSlice"
// import { initialWishlistState } from "@/core_components/redux/slices/wishlist_slice/wishlistSlice"
// import { initialAuthState } from "@/core_components/redux/slices/auth_slice/authSlice"

const useDetailedProductMock = jest.fn()
const getDetailedProductMock = jest.fn()
const useSelectorMock = jest.fn()
const useDispatchMock = jest.fn()
// const useAddToCartMock = jest.fn()

const mockPid = '123'

jest.mock('./useDetailedProduct', () => ({
    useDetailedProduct: () => useDetailedProductMock()
}))

jest.mock('react-redux', () => ({
    useSelector: () => useSelectorMock,
    useDispatch: () => useDispatchMock
}))

jest.mock("@/shared_features/display_elements/add_to_cart_button/useAddToCart", () => ({
    useAddToCart: () => ({
        addToCart: jest.fn(),
        success: null,
        loading: false
    })
}))

describe("detailed product", () => {
    it("should call getDetailedProduct after mounting", () => {
        useDetailedProductMock.mockReturnValue({
            getDetailedProduct: getDetailedProductMock,
            product: null,
            loading: false
        })

        render(<DetailedProduct pid={mockPid} />)
        expect(getDetailedProductMock).toHaveBeenCalledWith(mockPid)
    })

    it("should show loading whlie fetching ", () => {
        useDetailedProductMock.mockReturnValue({
            getDetailedProduct: getDetailedProductMock,
            product: null,
            loading: true
        })

        render(<DetailedProduct pid={mockPid} />)
        const loading = screen.getByTestId('detailed-product-loading')
        expect(loading).toBeInTheDocument()
    })

    it("should show the results after fetching", () => {
        useDetailedProductMock.mockReturnValue({
            getDetailedProduct: getDetailedProductMock,
            product: mockDetailedProduct,
            loading: false
        })
        render(<DetailedProduct pid={mockPid} />)
        const element = screen.getByText(mockDetailedProduct.name)
        expect(element).toBeInTheDocument()
    })

    // it("should redirect to login page if user is not signed in", async () => {
    //     useSelectorMock.mockImplementation((selector: (state: IRootState) => void) => selector({
    //         auth: initialAuthState,
    //         cart: initialCartState,
    //         home: initialHomeState,
    //         wishlist: initialWishlistState
    //     }))

    //     useDetailedProductMock.mockReturnValue({
    //         getDetailedProduct: getDetailedProductMock,
    //         product: mockDetailedProduct,
    //         loading: false
    //     })

    //     await act(async () => {
    //         render(<DetailedProduct pid={mockPid} />)
    //     })

    //     await waitFor(async () => {
    //         const addToCartButton = screen.getByText("Add to cart")
    //         await act(async () => {
    //             fireEvent.click(addToCartButton)
    //         })
    //     })

    //     await waitFor(() => {
    //         expect(pushMock).toHaveBeenCalledWith('/login')
    //     })
    // })
})
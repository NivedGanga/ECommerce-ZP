import { initialAuthState } from "@/core_components/redux/slices/auth_slice/authSlice"
import { initialCartState } from "@/core_components/redux/slices/cart_slice/cartSlice"
import { initialHomeState } from "@/core_components/redux/slices/home_slice/homeSlice"
import { initialWishlistState } from "@/core_components/redux/slices/wishlist_slice/wishlistSlice"
import { IRootState } from "@/core_components/redux/store"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { useSelector } from "react-redux"
import WishlistIconButton from "./wishlistIconButton"
import { ProductModel } from "@/core_components/models/product_model/productModel"
import { mockFirebaseUser } from "@/core_components/services/__mocks__/mockUser"


const addItemMock = jest.fn()
const removeItemMock = jest.fn()
const pushMock = jest.fn()

const productMock: ProductModel = {
    brandName: 'test Brand',
    color: 'test color',
    name: "test name",
    pid: 123,
}

jest.mock('@/component_library/wishlist_items/useWishlistItems', () => ({
    useWishlistItems: () => ({
        addItem: addItemMock,
        removeItem: removeItemMock
    })
}))

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: pushMock
    })
}))

jest.mock('react-redux', () => ({
    useSelector: jest.fn()
}))

describe("WishlistIconButton", () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it("if the user is not signed in navigate to login screen", () => {
        (useSelector as jest.MockedFunction<typeof useSelector>).mockImplementation((selector: (state: IRootState) => unknown) => selector({
            auth: initialAuthState,
            cart: initialCartState,
            home: initialHomeState,
            wishlist: initialWishlistState
        }))
        render(<WishlistIconButton product={productMock} />)
        const btn = screen.getByRole('button')
        fireEvent.click(btn)
        expect(pushMock).toHaveBeenCalledWith('/login')
    })

    it("the product should add to wishlist when clicking the button if the user is signed in and product is not in wishlist", async () => {
        (useSelector as jest.MockedFunction<typeof useSelector>).mockImplementation((selector: (state: IRootState) => unknown) => selector({
            auth: {
                user: mockFirebaseUser
            },
            cart: initialCartState,
            home: initialHomeState,
            wishlist: initialWishlistState
        }))
        productMock.inWishlist = false
        render(<WishlistIconButton product={productMock} />)
        const btn = screen.getByRole('button')
        fireEvent.click(btn)
        expect(addItemMock).toHaveBeenCalledWith(productMock)
        waitFor(() => {
            const wishlistAddedIcon = screen.getByTestId('wishlist-added-icon')
            expect(wishlistAddedIcon).toBeInTheDocument()
        })

    })

    it("the product should add to wishlist when clicking the button if the user is signed in and product is in wishlist", async () => {
        (useSelector as jest.MockedFunction<typeof useSelector>).mockImplementation((selector: (state: IRootState) => unknown) => selector({
            auth: {
                user: {
                    uid: "test",
                    displayName: 'test name',
                    email: 'test email',
                    emailVerified: true,
                    photoURL: 'test url'
                }
            },
            cart: initialCartState,
            home: initialHomeState,
            wishlist: initialWishlistState
        }))
        productMock.inWishlist = true
        render(<WishlistIconButton product={productMock} />)
        const btn = screen.getByRole('button')
        fireEvent.click(btn)
        expect(removeItemMock).toHaveBeenCalledWith(productMock)

        waitFor(() => {
            const wishlistNotAddedIcon = screen.getByTestId('wishlist-added-icon')
            expect(wishlistNotAddedIcon).toBeInTheDocument()
        })
    })

    it("background color should be white is no bgColor is passed", () => {
        render(<WishlistIconButton product={productMock} />)
        const btn = screen.getByRole('button')
        expect(btn).toHaveStyle('background-color: #00000000')
    })

    it("background color should be the passed bgColor if bgColor is passed", () => {
        render(<WishlistIconButton product={productMock} bgColor="#ff0000" />)
        const btn = screen.getByRole('button')
        expect(btn).toHaveStyle('background-color: #ff0000')
    })
})
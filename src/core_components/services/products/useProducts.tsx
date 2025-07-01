import { FacetModel, fromJsonToFacetModel } from "@/core_components/models/facetModel/facetModel"
import { DetailedProductModel, fromJsonToDetailedProductModel, fromJsonToProductModel, ProductModel } from "@/core_components/models/product_model/productModel"
import { IRootState } from "@/core_components/redux/store"
import { useApi } from "@/core_components/utils/use_api/useApi"
import { useSelector } from "react-redux"
export const useProduct = () => {
    const api = useApi()
    const cartItems = useSelector((state: IRootState) => state.cart.cartItems)
    const fetchProducts = (productRequestModel: object, onSuccess: (res: ProductModel[], facet: FacetModel) => void, onError: (error: string) => void) => {
        api.get('/products/v2/list', productRequestModel,
            (res) => {
                const products: ProductModel[] = []
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                res.data.products.forEach((product: any) => {
                    products.push(fromJsonToProductModel(product))
                });
                const facet = fromJsonToFacetModel(res.data)
                onSuccess(products, facet)
            },
            (error) => {
                onError(error)
            }
        )
    }

    const fetchDetailedProduct = (pid: string, onSuccess: (res: DetailedProductModel) => void, onError: (error: string) => void) => {
        api.get('/products/v4/detail', { id: pid }, (res) => {
            const isInCart = cartItems.some(item => item.product.pid.toString() == pid)
            console.log(pid, isInCart)
            const detailedProduct: DetailedProductModel = {
                ...fromJsonToDetailedProductModel(res.data),
                inCart: isInCart,
            }
            onSuccess(detailedProduct)
        }, onError)
    }

    const fetchPriceDetails = (pid: string, onSuccess: (pricedetails: { currentPrice: number, previousPrice: number }) => void, onError: (error: string) => void) => {
        api.get('/products/v4/get-stock-price', {
            'productIds': pid
        }, (res) => {
            const pricedetails = {
                currentPrice: res.data[0].productPrice.current.value,
                previousPrice: res.data[0].productPrice.previous.value
            }
            onSuccess(pricedetails)
        }, onError)
    }

    return {
        fetchProducts,
        fetchDetailedProduct,
        fetchPriceDetails
    }
}
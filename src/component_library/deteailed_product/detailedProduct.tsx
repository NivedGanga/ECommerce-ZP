'use client'
import ProductShow from '@/component_library/product_show/productShow'
import React, { useEffect } from 'react'
import ProductDetails from '@/component_library/product_details/productDetails'
import { useDetailedProduct } from './useDetailedProduct'
import DetailedProductLoading from './loading/DetailedProductLoading'

const DetailedProduct = ({ pid }: { pid: string }) => {
    const { getDetailedProduct, product, loading } = useDetailedProduct()

    useEffect(() => {
        getDetailedProduct(pid)
    }, [])

    return (
        <>
            {
                loading ?
                    <DetailedProductLoading />
                    : product ? <>
                        <ProductShow images={product!.Images} />
                        <ProductDetails product={product!} />
                    </> : ''
            }
        </>
    )
}

export default DetailedProduct
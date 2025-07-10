'use client'
import ProductShow from '@/component_library/product_show/productShow'
import React, { useEffect } from 'react'
import ProductDetails from '@/component_library/product_details/productDetails'
import { useDetailedProduct } from './useDetailedProduct'
import { Typography } from '@mui/material'

const DetailedProduct = ({ pid }: { pid: string }) => {
    const { getDetailedProduct, product, loading } = useDetailedProduct()

    useEffect(() => {
        getDetailedProduct(pid)
    }, [])

    return (
        <>
            {
                loading && <>
                    <br /><br /><br /> <Typography>Loading...</Typography>
                </>
            }
            {
                product &&
                <>
                    <ProductShow images={product!.Images} />
                    <ProductDetails product={product!} />
                </>
            }
        </>
    )
}

export default DetailedProduct
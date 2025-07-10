'use client'
import { Button } from '@mui/material'
import React from 'react'
import StyledButton from '../styled_button/styledButton'
import { Add } from '@mui/icons-material'
import { useAddToCart } from './useAddToCart'
import { ProductModel } from '@/core_components/models/product_model/productModel'
import { useRouter } from 'next/navigation'
import { SizeChart } from '@/core_components/models/sizeChart/sizeChart'
import { IRootState } from "@/core_components/redux/store"
import { useSelector } from "react-redux"

interface Props {
    product: ProductModel,
    isIconButton?: boolean,
    size: SizeChart
}

function AddToCartButton(props: Props) {
    const { isIconButton = false, product, size } = props
    const { addToCart, loading, success } = useAddToCart()
    const router = useRouter()
    const user = useSelector((state: IRootState) => state.auth.user)
    const handleOnClick = () => {
        console.log(user)
        if (!user) {
            router.push('/login')
            return;
        }
        if (success || product.inCart) {
            router.push('/cart')
            return;
        }
        addToCart(product, size.size)
    }

    return (
        <>
            {
                success || product.inCart ? <StyledButton
                    loading={loading}
                    onClick={() => handleOnClick()}
                    bgColor='#000000' color='#ffffff' variant='contained'>
                    View Cart
                </StyledButton> :
                    isIconButton ?
                        <Button
                            data-testid="add-to-cart-button"
                            loading={loading}
                            onClick={() => handleOnClick()}
                            disableElevation
                            variant='contained'
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                margin: 'auto',
                                minWidth: '30px',
                                width: '35px',
                                bgcolor: '#2f2f2f4f',
                                color: 'white'
                            }}>
                            <Add />
                        </Button > :
                        <StyledButton
                            loading={loading}
                            onClick={() => handleOnClick()}
                            bgColor='#0000002f' color='#000000' variant='contained'>
                            Add to cart
                        </StyledButton>
            }</>
    )
}

export default AddToCartButton

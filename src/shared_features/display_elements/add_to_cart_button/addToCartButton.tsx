import { Button } from '@mui/material'
import React from 'react'
import StyledButton from '../styled_button/styledButton'
import { Add } from '@mui/icons-material'

interface Props {
    productId: string,

    isIconButton?: boolean
}

function AddToCartButton(props: Props) {
    const { isIconButton = false } = props

    return (
        <>
            {
                isIconButton ?
                    <Button
                        disableElevation
                        variant='contained'
                        sx={{ position: 'absolute',
                         bottom: 0,
                         left: 0,
                         right: 0,
                         margin: 'auto',
                         minWidth: '30px',
                         width: '35px',
                         bgcolor: '#2f2f2f4f',
                         color: 'white' }}>
                        <Add />
                    </Button > :
                    <StyledButton bgColor='#0000002f' color='#000000' variant='contained'>
                        Add to cart
                    </StyledButton>
            }</>
    )
}

export default AddToCartButton

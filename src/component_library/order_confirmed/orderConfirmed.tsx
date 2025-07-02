'use client'
import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useOrderSuccess } from './useOrderSuccess'

const OrderConfirmed = () => {
    const [timeLeft, setTimeLeft] = React.useState(10)
    const { finalizeCheckout, error, success, loading } = useOrderSuccess()

    useEffect(() => {
        if (timeLeft === 0 && !error && success) {
            window.location.href = '/'
            return
        }
        const timer = setTimeout(() => {
            setTimeLeft(timeLeft - 1)
        }, 1000)
        return () => clearTimeout(timer)
    }, [timeLeft])

    useEffect(() => {
        finalizeCheckout()
    }, [])

    return (
        <>
            {
                loading ? "Processing payment" : success ? <>
                    <Typography color='success' fontWeight={'600'} fontSize={30}>
                        Order Confirmed
                    </Typography>
                    <Typography>
                        Thank you for choosing us
                    </Typography>
                    <Typography sx={{ marginTop: 2, fontSize: 16 }}>
                        You will be redirected to the home screen in {timeLeft} seconds
                    </Typography>
                    <Typography color='textDisabled'>
                        Do not press back button or Refresh
                    </Typography>
                </> : error ?
                    <>
                        <Typography color='error' fontWeight={'600'} fontSize={30}>
                            Order Not Confirmed
                        </Typography>
                        <Typography sx={{ marginTop: 1, fontSize: 16 }}>
                            Your full amount will be refunded within 72 hours
                        </Typography>
                    </> : ''
            }

        </>
    )
}

export default OrderConfirmed
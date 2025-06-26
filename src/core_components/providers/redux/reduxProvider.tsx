'use client'
import { store } from '@/core_components/redux/store'
import React from 'react'
import { Provider } from 'react-redux'

interface Props {
    children: React.ReactNode
}

function ReduxProvider(props: Props) {
    const { children } = props

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider

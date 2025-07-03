import { useCallback, useState } from 'react'

export const useFilterDialog = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = useCallback(() => {
        setIsOpen(false)
    }, [])

    const handleOpen = useCallback(() => {
        setIsOpen(true)
    }, [])

    return {
        isOpen,
        handleClose,
        handleOpen
    }
}

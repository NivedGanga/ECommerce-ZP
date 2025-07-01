import { useAuthService } from "@/core_components/services/auth_service/useAuthService"
import { useState } from "react"
import { toast } from "react-toastify/unstyled"

export const useAccountOptions = () => {
    const { logout } = useAuthService()
    const [loading, setLoading] = useState(false)
    const handleLogout = () => {
        setLoading(true)
        logout(() => {
            window.location.href = '/'
            setLoading(true)
        }, (error) => {
            toast.error(error)
            setLoading(true)
        })
    }

    return {
        handleLogout,
        loading
    }
}
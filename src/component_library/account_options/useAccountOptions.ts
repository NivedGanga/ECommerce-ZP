import { useAuthService } from "@/core_components/services/auth_service/useAuthService"
import { useState } from "react"
import { toast } from "react-toastify/unstyled"

export const useAccountOptions = () => {
    const { logout } = useAuthService()
    const [loading, setLoading] = useState(false)

    const handleLogout = async () => {
        setLoading(true)
        await logout(() => {
            window.location.href = '/'
            setLoading(false)
        }, (error) => {
            toast.error(error)
            setLoading(false)
        })
    }

    return {
        handleLogout,
        loading
    }
}
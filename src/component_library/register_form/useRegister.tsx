import { RegisterModel } from "@/core_components/models/authModel/authModel"
import { useAuthService } from "@/core_components/services/auth_service/auth_service"
// import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify/unstyled"

export const useRegister = () => {
    const { registerUserService } = useAuthService()
    // const dispatch = useDispatch()

    const registerUser = async (email: string, password: string, fullName: string) => {
        const registerModel: RegisterModel = {
            email,
            password,
            fullName
        }
        await registerUserService(registerModel, () => {
            
        }, () => {
            toast('Something went wrong')
        })
    }

    return {
        registerUser
    }
}
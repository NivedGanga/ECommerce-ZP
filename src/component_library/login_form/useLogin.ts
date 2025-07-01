import { LoginModel } from "@/core_components/models/authModel/authModel"
import { useAuthService } from "@/core_components/services/auth_service/useAuthService"
import { useFormik } from "formik"
import { useState } from "react"
import { toast } from "react-toastify/unstyled"
import * as Yup from "yup"

const initialValues: LoginModel = {
    email: null
}

export const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const { sendEmailLinkService } = useAuthService()
    const loginSchema = Yup.object().shape({
        email: Yup.string().email().required(),
    })
    const formik = useFormik({
        validationSchema: loginSchema,
        initialValues: initialValues,
        onSubmit: async (values) => {
            await loginUser(values.email!)
        }
    })

    const loginUser = async (email: string) => {
        setLoading(true)
        await sendEmailLinkService(email, () => {
            setLoading(false)
            toast.success('Check your email inbox for the sign-in link!')
        }, (error: string) => {
            setLoading(false)
            toast.error(error)
        })
    }
    return {
        loading,
        formik
    }
}
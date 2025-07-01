import { RegisterModel } from "@/core_components/models/authModel/authModel"
import { useAuthService } from "@/core_components/services/auth_service/useAuthService"
import { toast } from "react-toastify/unstyled"
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useState } from "react"
const initialValues: RegisterModel = {
    email: null,
    fullName: null
}
export const useRegister = () => {
    const [loading, setLoading] = useState(false)
    const { sendEmailLinkService } = useAuthService()
    // const dispatch = useDispatch()
    const registerFormSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        fullName: Yup.string().required(),
    })
    const formik = useFormik({
        validationSchema: registerFormSchema,
        initialValues: initialValues,
        onSubmit: async (values) => {
            await registerUser(values.email!, values.fullName!)
        }
    })

    const registerUser = async (email: string, fullName: string) => {
        setLoading(true)
        await sendEmailLinkService(email, () => {
            window.localStorage.setItem('userFullName', fullName)
            setLoading(false)
            toast.success('Check your email inbox for the sign-in link!')
        }, (error: string) => {
            setLoading(false)
            toast.error(error)
        })
    }

    return {
        formik,
        loading
    }
}
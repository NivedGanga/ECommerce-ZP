import { CheckoutModel } from '@/core_components/models/checkoutModel/checkoutModel'
import { IRootState } from '@/core_components/redux/store'
import { useCheckout } from '@/core_components/services/checkout_service/useCheckout'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify/unstyled'
import * as Yup from 'yup'
export const useCheckoutArea = () => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState<'next' | 'ordered' | null>(null)
    const [checkoutModel, setCheckoutModel] = useState<CheckoutModel | null>(null)
    const cartItems = useSelector((state: IRootState) => state.cart.cartItems)
    interface CheckoutFormValues {
        address: string
        city: string
        fullName: string
        phone2: number | undefined
        postalCode: number | undefined
        state: string
        email: string
        phone: number | undefined
    }

    const initialFormValues: CheckoutFormValues = {
        address: '',
        city: '',
        fullName: '',
        phone2: undefined,
        postalCode: undefined,
        state: '',
        email: '',
        phone: undefined
    }

    const { checkoutOrder } = useCheckout()

    const checkoutInfoSchema = Yup.object().shape({
        email: Yup.string().required().email(),
        phone: Yup.number().required(),
        fullName: Yup.string().required(),
        phone2: Yup.string().required('phone number is required'),
        state: Yup.string().required(),
        address: Yup.string().required(),
        city: Yup.string().required(),
        postalCode: Yup.number().required().max(999999).min(111111)
    })

    const formik = useFormik({
        validationSchema: checkoutInfoSchema,
        initialValues: initialFormValues,
        enableReinitialize: false,
        onSubmit: (values) => {
            setSuccess('next')
            const _checkoutModel: CheckoutModel = {
                address: {
                    ...values,
                    phone: values.phone2!,
                    postalCode: values.postalCode!
                },
                contactInfo: {
                    ...values,
                    phone: values.phone!
                },
                items: cartItems,
                date: Date.now()
            }
            setCheckoutModel(_checkoutModel)
        }
    })

    const placeOrder = () => {
        if (!checkoutModel) return;
        setLoading(true)
        checkoutOrder(checkoutModel, () => {
            setLoading(false)
            setSuccess('ordered')
        }, (error) => {
            toast.error(error)
            setLoading(false)
        })
    }

    return { formik, loading, success, placeOrder }
}
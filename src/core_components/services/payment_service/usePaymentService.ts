import { useApi } from "@/core_components/utils/use_api/useApi"

export const usePaymentService = () => {
    const api = useApi()
    const makePaymentService = (body: string|number, onSuccess: (sessionId: string) => void, onError: (error: string) => void) => {
        api.post('/api/payment', body, (res) => {
            const sessionId = res.data.id
            onSuccess(sessionId)
        }, onError, true)
    }
    return { makePaymentService }
}
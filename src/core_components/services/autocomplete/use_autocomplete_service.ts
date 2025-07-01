import { useApi } from "@/core_components/utils/use_api/useApi"

export const useAutoCompleteService = () => {
    const api = useApi()
    const autoCompelete = (q: string, onSuccess: (result: Array<{ searchTerm: string }>) => void, onError: (error: string) => void) => {
        api.get('/v2/auto-complete', {
            q: q
        }, (res) => {
            onSuccess(res.data.suggestionGroups[0].suggestions)
        }, onError)
    }

    return {
        autoCompelete
    }
} 
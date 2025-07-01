import { useAutoCompleteService } from "@/core_components/services/autocomplete/use_autocomplete_service"
import { useState } from "react"
import { toast } from "react-toastify/unstyled"

export const useSearchBar = () => {
    const { autoCompelete } = useAutoCompleteService()
    const [suggestions, setSuggestions] = useState<Array<{ searchTerm: string }>>([])
    const [loading, setLoading] = useState(false)
    const autoComplete = (q: string) => {
        if (q.length == 0) {
            setLoading(true)
            setSuggestions([])
            setLoading(false)
            return;
        }
        setLoading(true)
        autoCompelete(q, (items) => {
            setSuggestions(items)
            setLoading(false)
        }, (error) => {
            toast.error(error)
            setLoading(false)
        })

    }
    return {
        autoComplete,
        loading,
        suggestions
    }
}
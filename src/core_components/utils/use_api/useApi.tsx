import axios, { AxiosResponse } from "axios";

export const useApi = () => {

    const axiosSession = axios.create({
        baseURL: process.env.NEXT_PUBLIC_BASE_URL,
        headers: {
            'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY ?? '',
            'x-rapidapi-host': 'asos2.p.rapidapi.com'
        }
    })
    const get = async (endUrl: string, params: object, onSuccess: (res: AxiosResponse) => void, onError: (error: string) => void) => {
        await axiosSession.get(endUrl, {
            params: params
        }).then((res) => {
            onSuccess(res)
        }).catch((error) => {
            onError(error)
        })
    }
    const post = async (endUrl: string, data: object | string | number, onSuccess: (res: AxiosResponse) => void, onError: (error: string) => void, donotUseBaseUrl?: boolean) => {
        let a = axiosSession
        if (donotUseBaseUrl) {
            a = axios
        }
        await a.post(endUrl, data).then((res) => {
            onSuccess(res)
        }).catch((error) => {
            onError(error)
        })
    }
    return {
        get,
        post
    }
}
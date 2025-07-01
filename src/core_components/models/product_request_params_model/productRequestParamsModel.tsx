export type ProductRequestParamsModel = {
    categoryId: number
    store: 'US'
    offset: number
    sort?: 'freshness' | 'pricedesc' | 'priceasc'
    limit?: number
    q?: string
}
/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ProductModel {
    pid: number,
    name: string,
    currentPrice?: number,
    previousPrice?: number
    image?: string
    color: string,
    brandName: string,
    inCart?: boolean,
    inWishlist?:boolean
}

export interface DetailedProductModel extends ProductModel {
    Images: Array<string>,
    description: string
}

export function fromJsonToProductModel(json: any): ProductModel {
    let img = json.imageUrl as string
    if (!img.startsWith('https://')) {
        img = 'https://' + img
    }
    const productModel: ProductModel = {
        color: json.colour,
        name: json.name,
        currentPrice: json.price.current.value,
        previousPrice: json.price.previous.value,
        image: img,
        pid: json.id,
        brandName: json.brandName,
        
        
    }
    return productModel
}

export function fromJsonToDetailedProductModel(json: any): DetailedProductModel {
    const detailedProductModel: DetailedProductModel = {
        pid: json.id,
        name: json.name,
        brandName: json.brand.name,
        color: json.variants[0].colour,
        description: json.info.aboutMe,
        Images: json.media.images.map((o: any) => 'https://' + o.url)
    }
    detailedProductModel.image = detailedProductModel.Images[0]
    return detailedProductModel
}
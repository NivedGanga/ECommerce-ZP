import { DetailedProductModel } from "@/core_components/models/product_model/productModel"; import { noImageUrl } from "@/core_components/utils/constants/constants";
;

export const mockDetailedProduct: DetailedProductModel = {
    brandName: 'test brand name1',
    color: 'test color1',
    name: 'test name1',
    pid: 123,
    currentPrice: 99.9,
    image: noImageUrl,
    inCart: false,
    inWishlist: false,
    previousPrice: 100,
    description: 'test',
    Images: [noImageUrl]
}
import { ProductModel } from "../product_model/productModel";

export interface CartModel {
    product: ProductModel,
    quantity: number,
    size: 'xs'|'s'|'m'|'l'|'xl',
}

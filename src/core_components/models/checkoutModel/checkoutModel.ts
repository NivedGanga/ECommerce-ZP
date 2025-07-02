import { CartModel } from "../cartModel/cartModel";
import { AddressModel } from "./address_model/addressModel";
import { ContactInfoModel } from "./contactInfo_model/contactInfoModel";

export interface CheckoutModel {
    address: AddressModel,
    contactInfo: ContactInfoModel,
    items: Array<CartModel>,
    total: number,
    date: number,
    docId?: string
}
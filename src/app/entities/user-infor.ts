import { CartItem } from "./cart-item";

export class User {
    private fullname: string;
    private phone: string;
    private email: string;
    private address: string;
    private message: string;
    private cart: [CartItem];

    public constructor(
        {
            fullname: fullname, phone: phone, email: email,
            address: address, message: message, cart: cart
        }
    ){
        this.fullname = fullname;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.message = message;
        this.cart = cart;
    }
}
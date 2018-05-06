import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../services/audio.service';
import { AppService } from '../../app.service';
import { APP_CONSTANTS } from '../../common/config/constants';
import { CartItem } from '../../entities/cart-item';
import { CheckoutService } from '../../services/checkout.service';
import { User } from '../../entities/user-infor';
import { Cart } from '../../entities/cart';
import { LoaderService } from '../../common/loader/loader.service';
import { SnackbarService } from 'ngx-snackbar';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    public audios: [CartItem];
    public totalPrice: number;

    constructor(
        private appService: AppService,
        private audioService: AudioService,
        private checkoutService: CheckoutService,
        private loaderService: LoaderService,
        private snackbarService : SnackbarService,
        private router: Router
    ) {
    }

    ngOnInit() {
        const localStorage = this.appService.getLocalStorage(APP_CONSTANTS.KEY_CART);
        const ids = JSON.parse(localStorage).data;
        console.log(ids.toString());
        this.audioService.getAllAudiosByIds(ids, data => {
            console.log(data);
            this.audios = data;
            this.totalPrice = this.getTotalPrice();
        }, error => {
            console.log(error);
        })
    }
    changeAmount(cartItem, type){
        cartItem.amount = type ? cartItem.amount + 1: cartItem.amount > 1 ? cartItem.amount - 1 : 1;
        cartItem.total = cartItem.amount * cartItem.audio.price;
        this.totalPrice = this.getTotalPrice();
    }
    deleteItem(idx){
        this.audios.splice(idx, 1);
        this.appService.removeCart(idx)
        this.totalPrice = this.getTotalPrice();
    }

    getTotalPrice(){
        let totalPrice = 0;
        for(let item of this.audios){
            totalPrice += item.getPrice();
        }
        return totalPrice;
    }

    getUserInfor(event){
        const user = new User({
            fullname: event.fullname, phone: event.phone,
            email: event.email, address: event.address,
            message: event.message, cart: []
        });
        let cartItem = [];
        for(const item of this.audios){
            cartItem.push({
                idaudio: item.getAudio().getId(),
                amount: item.getAmount(),
                price: item.getPrice()
            })
        }
        const cart = new Cart({user:user, cartItem: cartItem});
        this.loaderService.show();
        this.checkoutService.postCheckout(cart, data => {
            this.loaderService.close();
            this.snackbarService.add({
                msg: '<strong>' + data.message + '</strong>',
                action: {
                  text: ''
                }
              });
            this.resetCart();
            this.router.navigate(['pending-order']);
        }, error => {
            this.loaderService.close();
        });
    }

    resetCart(){
        this.appService.setLocalStorage(APP_CONSTANTS.CREATE_NEW_LOCALSTORAGE, APP_CONSTANTS.KEY_CART, []);
    }
}

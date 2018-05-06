import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { APP_CONSTANTS } from '../config/constants';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    numberOfItemCart: number;
    listener;
    constructor(private appService: AppService) {
        // listener add cart
        this.listener = appService.tranferNumberOfItem.subscribe(() => {
            this.numberOfItemCart = this.getNumberItemInCart();
        });

        // init number item in cart
        this.numberOfItemCart = this.getNumberItemInCart();
    }

    ngOnInit() {}

    ngOnDestroy(){
        this.listener.unsubscribe();
    }

    getNumberItemInCart(){
        const dataLocalStorage = this.appService.getLocalStorage(APP_CONSTANTS.KEY_CART);
        const objDataLocalStorage = JSON.parse(dataLocalStorage);
        return objDataLocalStorage ? objDataLocalStorage.data.length : 0;
    }
}

import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { APP_CONSTANTS } from '../config/constants';
import { CategoryService } from '../category/category.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    numberOfItemCart: number;
    listener;
    categories: any;
    notAdmin: boolean;
    constructor(
        private appService: AppService,
        private categoryService: CategoryService,
        private router: Router
    ) {
        // listener add cart
        this.listener = appService.tranferNumberOfItem.subscribe(() => {
            this.numberOfItemCart = this.getNumberItemInCart();
        });

        // init number item in cart
        this.numberOfItemCart = this.getNumberItemInCart();
    }

    ngOnInit() {
        this.router.events.subscribe((val) => {
            this.notAdmin = window.location.href.indexOf(APP_CONSTANTS.PREFIX_URL_ADMIN) == -1;
        });
        this.categoryService.getAllCategory(data => {
            this.categories = data;
        }, error => {
            console.log(error);
        })    
    }

    ngOnDestroy(){
        this.listener.unsubscribe();
    }

    getNumberItemInCart(){
        const dataLocalStorage = this.appService.getLocalStorage(APP_CONSTANTS.KEY_CART);
        const objDataLocalStorage = JSON.parse(dataLocalStorage);
        return objDataLocalStorage ? objDataLocalStorage.data.length : 0;
    }
}

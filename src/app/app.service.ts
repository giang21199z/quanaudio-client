import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { APP_CONSTANTS } from './common/config/constants';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppService {

    private numberOfItem = new Subject<void>();
    public tranferNumberOfItem = this.numberOfItem.asObservable();

    setLocalStorage(type, key, data){
        let now = new Date().getTime();
        let item = JSON.parse(localStorage.getItem(key));
        switch(type){
            case APP_CONSTANTS.APPEND_LOCALSTORAGE:
                if(item == null){
                    item = {data: [], timeout: 0};
                    item.data = [];
                }
                if(item.data.indexOf(data) == -1){
                    item.data.push(data);
                }
                break;
                case APP_CONSTANTS.CREATE_NEW_LOCALSTORAGE:
                    item.data = data;
                break;
                case APP_CONSTANTS.DELETE_ITEM_LOCALSTORAGE:
                    item.data.splice(item.data.indexOf(data), 1);
                break;
                    
        }
        item.timeout = new Date().getTime();
        localStorage.setItem(key, JSON.stringify(item));
        this.numberOfItem.next();
    }

    getLocalStorage(key){
        return localStorage.getItem(key);
    }

    addCart(idaudio){
        this.setLocalStorage(APP_CONSTANTS.APPEND_LOCALSTORAGE, APP_CONSTANTS.KEY_CART,idaudio);
    }

    removeCart(idaudio){
        this.setLocalStorage(APP_CONSTANTS.DELETE_ITEM_LOCALSTORAGE, APP_CONSTANTS.KEY_CART, idaudio);
        this.numberOfItem.next();
    }
}

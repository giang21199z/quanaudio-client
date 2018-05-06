import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { APP_CONSTANTS } from '../common/config/constants';
@Injectable()
export class CheckoutService {

constructor(private http:HttpClient) { }

    postCheckout(data, successCb, errorCb){
        this.http.post(APP_CONSTANTS.URL_POST_CHECKOUT, data)
            .subscribe(
                data => successCb(data), error => errorCb
            );
    }
}

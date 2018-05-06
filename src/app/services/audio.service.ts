import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { APP_CONSTANTS } from '../common/config/constants';
import { Audio } from '../entities/audio';
import { CartItem } from '../entities/cart-item';
import { Type } from '../entities/type';
@Injectable()
export class AudioService {

constructor(private http:HttpClient) { }

    /**
     * get audio for home page
     */
    getAllAudios(successCb, errorCb){
        this.http.get(APP_CONSTANTS.URL_GET_AUDIO)
        .subscribe(data => {
            successCb(this.mappingData(data))
        }, error => errorCb);
    }

    /**
     * get audio for home page
     */
    getAudiosByType(idtype, successCb, errorCb){
        this.http.get(APP_CONSTANTS.URL_GET_AUDIO_BY_TYPE + '/' + idtype)
        .subscribe(data => {
            successCb(this.mappingData(data))
        }, error => errorCb);
    }

    mappingData(datas): any{
        return datas;
    }

    /**
     * get audio for cart page
    */
    getAllAudiosByIds(ids, successCb, errorCb){
        this.http.get(
            APP_CONSTANTS.URL_GET_AUDIOS + '/' + ids
        ).subscribe(data => {
            successCb(this.mappingDataToCartItem(data))
        }, error => errorCb);
    }

    mappingDataToCartItem(data): any {
        let cartItem = [];
        for(let item of data){
            const idaudio = item.idaudio;
            const name = item.name;
            const price = +item.price;
            const condition = item.condition;
            const brand = item.brand;
            const image = item.image;
            const updated = item.updated.date;
            const type = new Type({idtype: item.idtype, name: ''});
            const audio = new Audio(
                {
                    id: idaudio,name: name, price: price,
                    condition: condition, brand: brand,
                    image: image, updated: updated, type: type
                }
            );
            cartItem.push(new CartItem({audio: audio, amount: 1}));
        }
        return cartItem;
    }
    /**
     * get detail audio
     */
    getDetailAudioById(id, successCb, errorCb){
        this.http.get(
            APP_CONSTANTS.URL_GET_DETAIL_AUDIO + '/' + id
        ).subscribe(data => {
            successCb(this.mappingDetailAudio(data))
        }, error => errorCb);
    }
    mappingDetailAudio(data){
        const idaudio = data.idaudio;
        const name = data.name;
        const price = +data.price;
        const condition = data.condition;
        const brand = data.brand;
        const image = data.image;
        const updated = data.updated.date;
        const type = new Type({idtype: data.idtype, name: ''});
        const audio = new Audio(
            {
                id: idaudio,name: name, price: price,
                condition: condition, brand: brand,
                image: image, updated: updated, type: type
            }
        );
        return audio;
    }
}
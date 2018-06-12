import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { APP_CONSTANTS } from '../config/constants';
import { Slide } from './slide';

@Injectable()
export class SlideService {

  constructor(private http:HttpClient) { }

  /**
   * get category
   */
  getAllSlide(successCb, errorCb){
    let header = new HttpHeaders();
    header.set('Content-Type', 'application/json; charset=utf-8');
    this.http.get(APP_CONSTANTS.URL_GET_SLIDE, { headers: header })
      .subscribe(data => {
        successCb(this.mappingData(data))
      }, error => errorCb);
  }
  mappingData(datas): any{
    let slides = [];
    for(let item of datas){
        let slide = new Slide(
            {
                id: item.idtype, title: item.title,
                description: item.description,
                content: item.content, image: item.image,
                advertisement: item.advertisement
            }
        );
        slides.push(slide);
    }
    return slides;
  }
}

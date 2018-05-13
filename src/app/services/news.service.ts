import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { APP_CONSTANTS } from '../common/config/constants';
import { News } from '../entities/news';
import { Response } from '../entities/response';
@Injectable()
export class NewsService {

constructor(private http:HttpClient) { }

    /**
     * get latest news
     */
    getLatestNews(requestParams, successCb, errorCb){
        let param = new HttpParams();
        param = param.append('pageNum', requestParams.pageNum);
        param = param.append('category', requestParams.category);
        this.http.get(APP_CONSTANTS.URL_GET_LATEST_NEWS, {
            params: param
        })
        .subscribe(data => {
            successCb(this.mappingData(data))
        }, error => errorCb);
    }

    mappingData(data){
        let news = [];
        for(let item of data.data){
            const idnews = item.idnews;
            const title = item.title;
            const description = item.description;
            const content = item.content;
            const updated = item.updated;
            const image = item.image;
            const mNew = new News({
                idnews: idnews, title: title, description: description,
                content: content, updated: updated, image: image
            });
            news.push(mNew);
        }
        const response = new Response({totalPage: data.totalPage, pageNum: data.pageNum, data: news});
        return response;
    }

    /**
     * get detail new
     */
    getDetailNew(id, successCb, errorCb){
        this.http.get(APP_CONSTANTS.URL_GET_DETAIL_NEW + '/' + id)
        .subscribe(data => {
            successCb(this.mappingDetailNew(data));
        }, error => errorCb);
    }

    mappingDetailNew(item){
        const idnews = item.idnews;
        const title = item.title;
        const description = item.description;
        const content = item.content;
        const updated = item.updated;
        const image = item.image;
        const mNew = new News({
            idnews: idnews, title: title, description: description,
            content: content, updated: updated, image: image
        });
        return mNew;
    }

    /**
     * get random new
     */
    getRandomNew(id, successCb, errorCb){
        this.http.get(APP_CONSTANTS.URL_GET_RANDOM_NEW + '/' + id)
        .subscribe(data => {
            successCb(this.mappingDetailNew(data));
        }, error => errorCb);
    }
}

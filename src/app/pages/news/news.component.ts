import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Pagination } from '../../common/pagination/pagination';
import { APP_CONSTANTS } from '../../common/config/constants';
import { Router } from '@angular/router';
@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

    news: [any];
    pagination: Pagination;
    category: string;
    constructor(
        private newsService: NewsService,
        private router: Router
    ) {
        this.category =  router.url.indexOf(APP_CONSTANTS.URL_TIN_TUC) != -1 ?
            APP_CONSTANTS.TIN_TUC : APP_CONSTANTS.CONG_TRINH_HOAN_THANH;
    }

    ngOnInit() {
        this.newsService.getLatestNews({category: this.category, pageNum: 0}, data => {
        this.news = data.data;
        this.pagination = new Pagination({totalPage: data.totalPage, pageNum: data.pageNum});
        }, error => {
            console.log(error);
        });
    }

    pageChange(evt){
        this.newsService.getLatestNews({category: this.category, pageNum: evt}, data => {
        this.news = data.data;
        this.pagination = new Pagination({totalPage: data.totalPage, pageNum: data.pageNum});
        }, error => {
            console.log(error);
        });
    }
    categoryListener(evt){
        console.log(evt);
    }
}

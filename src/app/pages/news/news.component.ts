import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Pagination } from '../../common/pagination/pagination';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

    news: [any];
    pagination: Pagination;
    constructor(private newsService: NewsService) { }

    ngOnInit() {
        this.newsService.getLatestNews({pageNum: 0}, data => {
        this.news = data.data;
        this.pagination = new Pagination({totalPage: data.totalPage, pageNum: data.pageNum});
        }, error => {
            console.log(error);
        });
    }

    pageChange(evt){
        this.newsService.getLatestNews({pageNum: evt}, data => {
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

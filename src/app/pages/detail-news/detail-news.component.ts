import { Component, OnInit } from '@angular/core';
import { News } from '../../entities/news';
import { NewsService } from '../../services/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detail-news',
    templateUrl: './detail-news.component.html',
    styleUrls: ['./detail-news.component.css']
})
export class DetailNewsComponent implements OnInit {
    
    news: News;
    newsRandom: News;
    constructor(
        private newService: NewsService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(paramsId => {
            const id = paramsId.id;
            this.newService.getDetailNew(id, data => {
                this.news = data;
            }, error => {
                console.log(error);
            });
            this.newService.getRandomNew(id, data => {
                this.newsRandom = data;
            },error => {
                console.log(error);
            })
        });
    }

}

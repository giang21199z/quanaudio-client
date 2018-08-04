import { Component, OnInit } from '@angular/core';
import { SlideService } from '../../common/slide/slide.service';
import { AudioService } from '../../services/audio.service';
import { AppService } from '../../app.service';
import {SnackbarService} from 'ngx-snackbar';
import { Meta } from '@angular/platform-browser';
import { APP_CONSTANTS } from '../../common/config/constants';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public slides;
  public audios;
  public news;
  constructor(private slideService: SlideService, private appService: AppService,
        private audioService: AudioService, private snackbarService: SnackbarService,
        private meta: Meta, private newsService: NewsService) { }

    ngOnInit() {
        this.meta.addTag({ name: 'robots', content: 'noindex' });
        this.slideService.getAllSlide(data => {
            this.slides = data;
            console.log(this.slides);
        }, error => {
            console.log(error);
        });
        this.audioService.getAllAudios({limit: 15}, data => {
            this.audios = data;
        }, error => {
            console.log(error);
        });
        this.newsService.getLatestNews({category: APP_CONSTANTS.TIN_TUC, pageNum: 0}, data => {
            this.news = data.data;
        }, error => {
            console.log(error);
        });
    }

    addCart(idaudio){
        this.appService.addCart(idaudio);
        this.snackbarService.add({
            msg: '<strong>Thêm vào giỏ hàng thành công</strong>',
            action: {
              text: ''
            }
          });
    }

    getAudioByType(idtype){
        this.audioService.getAudiosByType(idtype, data => {
            this.audios = data;
        }, error => {
            console.log(error);
        });
    }
    categoryListener(evt){
        this.audioService.getAudiosByType(evt, data => {
            this.audios = data;
        }, error => {
            console.log(error);
        })
    }
}

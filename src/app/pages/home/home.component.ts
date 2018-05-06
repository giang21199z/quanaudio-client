import { Component, OnInit } from '@angular/core';
import { SlideService } from '../../common/slide/slide.service';
import { AudioService } from '../../services/audio.service';
import { AppService } from '../../app.service';
import {SnackbarService} from 'ngx-snackbar';

import { APP_CONSTANTS } from '../../common/config/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public slides;
  public audios;
  constructor(private slideService: SlideService, private appService: AppService,
        private audioService: AudioService, private snackbarService: SnackbarService) { }

    ngOnInit() {
        this.slideService.getAllSlide(data => {
            this.slides = data;
            console.log(this.slides);
        }, error => {
            console.log(error);
        });
        this.audioService.getAllAudios(data => {
            this.audios = data;
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
    categoryChange(evt){
        console.log(evt);
    }
}

import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../services/audio.service';
import { AppService } from '../../app.service';
import { SnackbarService } from 'ngx-snackbar';
import { APP_CONSTANTS } from '../../common/config/constants';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    public slides;
    public audios;
    constructor(
        private appService: AppService,
        private audioService: AudioService,
        private snackbarService: SnackbarService,
        private activatedRoute: ActivatedRoute
    ) {
        this.activatedRoute.params.subscribe(paramsId => {
            const id = paramsId.type;
            this.audioService.getAudiosByType(id, data => {
                this.audios = data;
            }, error => {
                console.log(error);
            });
        });
    }

    ngOnInit() {
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

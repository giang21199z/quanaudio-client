import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AudioService } from '../../services/audio.service';
import { Audio } from '../../entities/audio';
import { AppService } from '../../app.service';
import { SnackbarService } from 'ngx-snackbar';
@Component({
    selector: 'app-detail-products',
    templateUrl: './detail-products.component.html',
    styleUrls: ['./detail-products.component.css']
})
export class DetailProductsComponent implements OnInit {
    public audio: Audio;
    constructor(
        private activatedRoute: ActivatedRoute,
        private audioService: AudioService,
        private appService: AppService,
        private snackbarService: SnackbarService
    ) {
        this.activatedRoute.params.subscribe(paramsId => {
            const id = paramsId.id;
            this.audioService.getDetailAudioById(id, data => {
                this.audio = data;
                console.log(this.audio,'<<<<<');
            }, error => {
                console.log(error);
            })
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
}

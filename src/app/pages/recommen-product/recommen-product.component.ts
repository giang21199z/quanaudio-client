import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../services/audio.service';
import { APP_CONSTANTS } from '../../common/config/constants';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-recommen-product',
    templateUrl: './recommen-product.component.html',
    styleUrls: ['./recommen-product.component.css']
})
export class RecommenProductComponent implements OnInit {

    public audios;
    constructor(private activatedRoute: ActivatedRoute,
        private audioService: AudioService ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(paramsId => {
            const id = paramsId.type;
            this.audioService.getRandomAudio(id, data => {
                this.audios = data;
                console.log(this.audios)
            }, error => {
                console.log(error);
            });
        });
    }

}

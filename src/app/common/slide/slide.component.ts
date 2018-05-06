import { Component, OnInit } from '@angular/core';
import { SlideService } from './slide.service';
@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

    slides;

    constructor(private slideService: SlideService) { }

    ngOnInit() {
        this.slideService.getAllSlide(data => {
            this.slides = data;
            console.log(this.slides);
        }, error => {
            console.log(error);
        });
    }

}

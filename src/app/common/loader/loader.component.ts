import { Component } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

    available: boolean;
    constructor(public loaderService: LoaderService) {
        this.available = loaderService.available;
    }
}

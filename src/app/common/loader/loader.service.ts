import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoaderService {

    available: boolean;
    
    show(){
        this.available = true;
    }
    
    close(){
        this.available = false;
    }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../entities/user-infor';

@Component({
selector: 'app-user-infor',
templateUrl: './user-infor.component.html',
styleUrls: ['./user-infor.component.css']
})
export class UserInforComponent implements OnInit {
    @Output() userInfor: EventEmitter<User> = new EventEmitter<User>();
    public user: User;
    constructor() { 
        this.user = new User(
            {
                fullname: '', phone: '', email: '', address: '', message: '', cart: []
            }
        );
    }

    ngOnInit() {
    }

    getUserInfor(){
        this.userInfor.emit(this.user);
        this.user = new User(
            {
                fullname: '', phone: '', email: '', address: '', message: '', cart: []
            }
        );
    }
}

import { Component, OnInit } from '@angular/core';
import { APP_CONSTANTS } from '../config/constants';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  notAdmin: boolean;

  constructor ( private router: Router ) {}

  ngOnInit() {
    this.router.events.subscribe((val) => {
        this.notAdmin = window.location.href.indexOf(APP_CONSTANTS.PREFIX_URL_ADMIN) == -1;
    });
  }
}

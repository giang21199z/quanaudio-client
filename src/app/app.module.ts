import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {SnackbarModule} from 'ngx-snackbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailProductsComponent } from './pages/detail-products/detail-products.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewsComponent } from './pages/news/news.component';
import { DetailNewsComponent } from './pages/detail-news/detail-news.component';
import { CategoryComponent } from './common/category/category.component';
import { CategoryService } from './common/category/category.service';

import { SlideComponent } from './common/slide/slide.component';
import { SlideService } from './common/slide/slide.service';
import { AppService } from './app.service';
import { AudioService } from './services/audio.service';
import { CheckoutService } from './services/checkout.service';
import { LoaderService } from './common/loader/loader.service';

import { PricePipe } from './pipes/price.pipes';
import { UrlPipe } from './pipes/url.pipes';
import { RecommenProductComponent } from './pages/recommen-product/recommen-product.component';
import { UserInforComponent } from './pages/user-infor/user-infor.component';
import { LoaderComponent } from './common/loader/loader.component';
import { PendingOrderComponent } from './pages/pending-order/pending-order.component';
import { NewsService } from './services/news.service';
import { PaginationComponent } from './common/pagination/pagination.component';
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'detail-page/:id/:name', component: DetailProductsComponent},
    { path: 'cart', component: CartComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'news', component: NewsComponent},
    { path: 'detail-news/:id/:title', component: DetailNewsComponent},
    { path: 'pending-order', component: PendingOrderComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        DetailProductsComponent,
        CartComponent,
        ContactComponent,
        NewsComponent,
        DetailNewsComponent,
        CategoryComponent,
        SlideComponent,
        PricePipe, UrlPipe,
        RecommenProductComponent,
        UserInforComponent,
        LoaderComponent,
        PendingOrderComponent,
        PaginationComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
        ),
        HttpClientModule,
        SnackbarModule.forRoot(),
        FormsModule
    ],
    providers: [
        Location, {provide: LocationStrategy, useClass: HashLocationStrategy},
        CategoryService, SlideService, AppService, AudioService, CheckoutService,
        LoaderService, NewsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
